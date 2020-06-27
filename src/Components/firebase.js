import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'dictio-c6541.firebaseapp.com',
  databaseURL: 'https://dictio-c6541.firebaseio.com',
  projectId: 'dictio-c6541',
  storageBucket: 'dictio-c6541.appspot.com',
  messagingSenderId: '895439554932',
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
