import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "ecommerce-react-a8ad0.firebaseapp.com",
    databaseURL: "https://ecommerce-react-a8ad0.firebaseio.com",
    projectId: "ecommerce-react-a8ad0",
    storageBucket: "ecommerce-react-a8ad0.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: "1:97405622450:web:9d6e6595124c92b9cf51ab"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//autentificación con Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;