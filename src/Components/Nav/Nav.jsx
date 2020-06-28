import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import fire from '../firebase';
import './Nav.css';
import M from 'materialize-css';
import logo from '../Styling/logo.png';
import { UserContext } from '../UserContext';

//Component
import Modal from '../Modal/Modal';

export default function Nav() {
  //states from context api
  const { users, current, search, wordResults, Loader } = useContext(
    UserContext
  );
  const [user, setUser] = users;
  const [currentUser, setCurrent] = current;
  const [word, setWord] = search;
  const [wordResult, setWordResult] = wordResults;
  const [loader, setLoader] = Loader;

  const logout = () => {
    fire.auth().signOut();
    setWordResult('');
    setWord('');
    setUser('');
  };

  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, []);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWordResult('');
    setLoader(true);
    const fetchAPI = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${process.env.REACT_APP_MERRIAM_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWordResult(data);
        setLoader(false);
      })
      .catch((error) => {
        console.log('error');
        setWordResult('');
      });

    await setWord('');
  };

  return (
    <div className='Nav'>
      <nav className='transparent z-depth-0'>
        <div className='nav-wrapper'>
          <Link to='/dictio/' className='logo'>
            <img src={logo} />
          </Link>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons' id='menu'>
              menu
            </i>
          </a>
          <ul className='right hide-on-med-and-down'>
            {user ? (
              <React.Fragment>
                <li>
                  <form onSubmit={handleSubmit}>
                    <input
                      id='search'
                      type='search'
                      placeholder='Search'
                      value={word}
                      onChange={(e) => setWord(e.target.value)}
                      required
                    />
                  </form>
                </li>

                <li>
                  <Link
                    to='/dictio/Saved/'
                    className='waves-effect waves-light btn'
                    id='right'
                  >
                    <i className='material-icons prefix'>bookmark</i>
                  </Link>
                </li>

                <li>
                  <a
                    className='waves-effect waves-light btn'
                    onClick={logout}
                    id='right'
                  >
                    Logout
                  </a>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li>
                  <a
                    data-target='login'
                    className='waves-effect waves-light btn modal-trigger'
                    href='#login'
                    id='right'
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    data-target='signup'
                    href='#signup'
                    className='waves-effect waves-light btn modal-trigger'
                    id='right'
                  >
                    Sign up
                  </a>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
      <Modal />
      <ul className='sidenav' id='mobile-demo'>
        {user ? (
          <React.Fragment>
            <li>
              <form onSubmit={handleSubmit}>
                <input
                  id='search'
                  type='search'
                  placeholder='Search'
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  required
                />
              </form>
            </li>

            <li>
              <Link
                to='/dictio/Saved/'
                className='waves-effect waves-light btn'
                id='right'
              >
                <i className='material-icons prefix'>bookmark</i>
              </Link>
            </li>

            <li>
              <a
                className='waves-effect waves-light btn'
                onClick={logout}
                id='right'
              >
                Logout
              </a>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <a
                data-target='login'
                className='waves-effect waves-light btn modal-trigger'
                href='#login'
                id='right'
              >
                Login
              </a>
            </li>
            <li>
              <a
                data-target='signup'
                href='#signup'
                className='waves-effect waves-light btn modal-trigger'
                id='right'
              >
                Sign up
              </a>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
}
