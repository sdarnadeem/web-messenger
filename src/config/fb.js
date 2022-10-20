import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCLA5A5hXhKBp7m1PC8I8D_LIu7ig9C-zg',

  authDomain: 'webm.nasyxnadeem.dev',

  projectId: 'web-messenger-b5e45',
  databaseURL: 'web-messenger-b5e45.firebaseio.com',

  storageBucket: 'web-messenger-b5e45.appspot.com',

  messagingSenderId: '618759504810',

  appId: '1:618759504810:web:d493f7908f53114a43e1d3',
};

firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'production') {
  firebase.analytics();

  firebase.firestore().enablePersistence().catch(console.error);
}

export default firebase;
