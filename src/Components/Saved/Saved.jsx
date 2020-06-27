import React, { useEffect, useContext } from 'react';
import fire from '../firebase';
import { UserContext } from '../UserContext';
import './Saved.css';
import M from 'materialize-css';
import empty from '../Styling/empty.svg';

export default function Saved() {
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
          console.log('Document data:', doc.data());
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
          console.log('nooo')
        ) : (
          <div class='row'>
            <div class='col s12 m6'>
              <div class='card'>
                <div class='card-image'>
                  <h3 id='savedTitle'>{savedVal}</h3>

                  <a
                    onClick={() => handleDelete(savedVal)}
                    class='btn-floating halfway-fab waves-effect waves-light red'
                  >
                    <i class='material-icons'>remove</i>
                  </a>
                </div>
                <div class='card-content'>
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
