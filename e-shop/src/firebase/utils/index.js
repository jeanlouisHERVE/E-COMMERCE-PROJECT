import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
  apiKey: "AIzaSyDDNfmXhLijswdwJ0zhPxY358TE-EANDBs",
  authDomain: "e-shop-project-96c5e.firebaseapp.com",
  projectId: "e-shop-project-96c5e",
  storageBucket: "e-shop-project-96c5e.appspot.com",
  messagingSenderId: "317629545807",
  appId: "1:317629545807:web:6e551ac566ea3ad152593a"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;