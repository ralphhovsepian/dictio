import React, { useEffect, useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { UserContext } from '../UserContext';
import fire from '../firebase';

//Components
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Saved from '../Saved/Saved';
import Loading from '../Loader/Loader';
import Home from '../Home/Home';

function App() {
  //states from context api
  const { users, current, Loader } = useContext(UserContext);
  const [user, setUser] = users;
  const [currentUser, setCurrent] = current;
  const [loader, setLoader] = Loader;

  useEffect(() => {
    fire.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  });

  return (
    <div className='App'>
      <Router>
        {loader ? <Loading /> : ''}
        <Nav />

        <Switch>
          <Route exact path='/dictio/'>
            {user ? (
              <Home />
            ) : (
              <React.Fragment>
                <Header />
                <Footer />
              </React.Fragment>
            )}
          </Route>
          <Route exact path='/dictio/Saved/'>
            {user ? <Saved /> : <Redirect to='/' />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
