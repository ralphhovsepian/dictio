import React, { useContext } from 'react';
import './Modal.css';
import M from 'materialize-css';
import { UserContext } from '../UserContext';
import fire from '../firebase';

//Component
import Loader from '../Loader/Loader';

export default function Modal() {
  //states from context api
  const { users, current, Loader } = useContext(UserContext);
  const [user, setUser] = users;
  const [currentUser, setCurrent] = current;
  const [loader, setLoader] = Loader;

  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems, []);
  });

  const login = (e) => {
    e.preventDefault();
    setLoader(true);

    fire
      .auth()
      .signInWithEmailAndPassword(currentUser.email, currentUser.password)
      .then((u) => {
        return setCurrent({ email: '', password: '' }), setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        M.toast({ html: 'Login error. Try again.' });
      });
  };

  const signup = (e) => {
    e.preventDefault();
    setLoader(true);
    fire
      .auth()
      .createUserWithEmailAndPassword(currentUser.email, currentUser.password)
      .then((u) => {
        setCurrent({ email: '', password: '' });
        setLoader(false);
        const userUid = u.user.uid;
        const email = u.user.email;

        const account = {};
        fire.firestore().collection('accounts').doc(email).set(account);
      })

      .catch((error) => {
        console.log(error);
        setLoader(false);
        M.toast({ html: 'Sign up error!' });
      });
  };

  return (
    <React.Fragment>
      <div id='login' className='modal'>
        <div className='modal-content'>
          <h3>Login</h3>
          <div className='row'>
            <form className='col s12'>
              <div className='row'>
                <div className='input-field col s6'>
                  <i className='material-icons prefix'>account_circle</i>

                  <input
                    id='icon_prefix'
                    type='text'
                    className='validate'
                    onChange={(e) =>
                      setCurrent({ ...currentUser, email: e.target.value })
                    }
                    value={currentUser.email}
                  />
                  <label htmlFor='icon_prefix'>Email</label>
                </div>
                <div className='input-field col s6'>
                  <i className='material-icons prefix'>lock</i>
                  <input
                    onChange={(e) =>
                      setCurrent({ ...currentUser, password: e.target.value })
                    }
                    value={currentUser.password}
                    id='icon_telephone'
                    type='password'
                    className='validate'
                  />
                  <label htmlFor='icon_telephone'>Password</label>
                </div>
                <a
                  className='modal-close waves-effect waves-light btn'
                  onClick={login}
                  href='#!'
                  id='login'
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-close waves-effect waves-green btn-flat'
          >
            Close
          </a>
        </div>
      </div>

      <div id='signup' className='modal'>
        <div className='modal-content'>
          <h3>Sign up</h3>
          <div className='row'>
            <form className='col s12'>
              <div className='row'>
                <div className='input-field col s6'>
                  <i className='material-icons prefix'>account_circle</i>
                  <input
                    onChange={(e) =>
                      setCurrent({ ...currentUser, email: e.target.value })
                    }
                    value={currentUser.email}
                    id='icon_prefix'
                    type='text'
                    className='validate'
                  />
                  <label htmlFor='icon_prefix'>Email</label>
                </div>
                <div className='input-field col s6'>
                  <i className='material-icons prefix'>lock</i>
                  <input
                    onChange={(e) =>
                      setCurrent({ ...currentUser, password: e.target.value })
                    }
                    value={currentUser.password}
                    id='icon_telephone'
                    type='password'
                    className='validate'
                  />
                  <label htmlFor='icon_telephone'>Password</label>
                </div>
                <a
                  onClick={signup}
                  className='modal-close waves-effect waves-light btn'
                  id='signup'
                >
                  signup
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-close waves-effect waves-green btn-flat'
          >
            Close
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
