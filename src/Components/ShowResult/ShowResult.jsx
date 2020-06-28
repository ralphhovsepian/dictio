import React, { useContext } from 'react';
import './ShowResult.css';
import { UserContext } from '../UserContext';
import fire from '../firebase';
import M from 'materialize-css';

export default function ShowResult() {
  //states from context api
  const { wordResults, users } = useContext(UserContext);
  const [wordResult, setWordResult] = wordResults;
  const [user, setUser] = users;

  const handleSave = () => {
    fire
      .firestore()
      .collection('accounts')
      .doc(user.email)
      .set(
        {
          [wordResult[0].meta.id]: wordResult[0].shortdef,
        },
        { merge: true }
      )
      .then(function () {
        console.log('Document successfully written!');
        M.toast({ html: 'Saved!' });
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };

  return (
    <div className='ShowResult'>
      {typeof wordResult[0] === 'object' ? (
        <div>
          <h3>{wordResult[0].meta.id}</h3>
          <p>{wordResult[0].shortdef}</p>
          <a
            className='btn-floating btn-large waves-effect waves-light red'
            onClick={handleSave}
          >
            <i className='material-icons'>bookmark</i>
          </a>
        </div>
      ) : (
        <div>
          <a href='#!' className='error'>
            Not found
          </a>
        </div>
      )}
    </div>
  );
}
