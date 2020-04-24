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
  


export const createUserProfile = async (userAuth, additionalData) => {
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();


        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('user was not created', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth(); 
export const firestore = firebase.firestore();


// setting up google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
