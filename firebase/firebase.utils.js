import * as firebase from "firebase/app";
import 'firebase/firebase-auth';
// import '@firebase/auth-types'
import 'firebase/firebase-firestore';


const Config = {
    apiKey: "AIzaSyAMYCPfOBeG7wfBIdt4fQojUgfXBciG9Aw",
    authDomain: "afrolace-db.firebaseapp.com",
    databaseURL: "https://afrolace-db.firebaseio.com",
    projectId: "afrolace-db",
    storageBucket: "afrolace-db.appspot.com",
    messagingSenderId: "23654813638",
    appId: "1:23654813638:web:3f179ce74a436d4f206cc7",
    measurementId: "G-R6P9BH4KBB"
  };
  // Initialize Firebase
  


firebase.initializeApp(Config);

export default firebase;
