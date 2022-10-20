import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCLA5A5hXhKBp7m1PC8I8D_LIu7ig9C-zg',

  authDomain: 'web-messenger-b5e45.firebaseapp.com',

  databaseURL: 'https://web-messenger-b5e45-default-rtdb.firebaseio.com',

  projectId: 'web-messenger-b5e45',

  storageBucket: 'web-messenger-b5e45.appspot.com',

  messagingSenderId: '618759504810',

  appId: '1:618759504810:web:fb2ec7ee3eec4ab043e1d3',
  measurementId: 'G-WCYNRETE13',
};

firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'production') {
  firebase.analytics();

  firebase.firestore().enablePersistence().catch(console.error);
}

export default firebase;
