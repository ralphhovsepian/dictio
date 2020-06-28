import React, { useEffect, useContext } from 'react';
import fire from '../firebase';
import { UserContext } from '../UserContext';
import './Saved.css';
import M from 'materialize-css';
import empty from '../Styling/empty.svg';

export default function Saved() {
  //states from context api
  const { users, wordResults, saved, Loader } = useContext(UserContext);
  const [user, setUser] = users;
  const [wordResult, setWordResult] = wordResults;
  const [save, setSave] = saved;
  const [loader, setLoader] = Loader;

  useEffect(() => {
    const docRef = fire.firestore().collection('accounts').doc(`${user.email}`);

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          let documentData = doc.data();

          return setSave(documentData);
        } else {
          console.log('No such document!');
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }, [save]);

  const handleDelete = (e) => {
    var cityRef = fire.firestore().collection('accounts').doc(user.email);

    cityRef.update({ [e]: '' });
    M.toast({ html: 'Deleted!' });
  };

  return (
    <div className='Saved'>
      <h4>Saved</h4>
      {Object.keys(save).length === 0 ? <img src={empty} /> : ''}
      {Object.keys(save).map((savedVal, key) => {
        return save[savedVal] == '' ? (
          ''
        ) : (
          <div className='row'>
            <div className='col s12 m6'>
              <div className='card'>
                <div className='card-image'>
                  <h3 id='savedTitle'>{savedVal}</h3>

                  <a
                    onClick={() => handleDelete(savedVal)}
                    className='btn-floating halfway-fab waves-effect waves-light red'
                  >
                    <i className='material-icons'>remove</i>
                  </a>
                </div>
                <div className='card-content'>
                  <p>{save[savedVal]}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
