import * as firebase from "firebase/app";
import 'firebase/firebase-auth';
// import '@firebase/auth-types'
import 'firebase/firebase-firestore';


const Config = {
    apiKey: "AIzaSyBUdtGeBrzHMUrxTNWp8iz5m5xWkOwsqVs",
    authDomain: "afrolace-mobile-app.firebaseapp.com",
    databaseURL: "https://afrolace-mobile-app.firebaseio.com",
    projectId: "afrolace-mobile-app",
    storageBucket: "afrolace-mobile-app.appspot.com",
    messagingSenderId: "535590365514",
    appId: "1:535590365514:web:651ec981e22e337d99b9b3",
    measurementId: "G-KQ2D4BGG7Q"
  };
  // Initialize Firebase
  


firebase.initializeApp(Config);

export default firebase;
