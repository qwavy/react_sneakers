

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxjPyKohcbayb1Gjb1pGzozc92hlF9oi4",
  authDomain: "online-shop-e7354.firebaseapp.com",
  projectId: "online-shop-e7354",
  storageBucket: "online-shop-e7354.appspot.com",
  messagingSenderId: "420017405612",
  appId: "1:420017405612:web:f9fc3f7696e1cca3c46909"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase