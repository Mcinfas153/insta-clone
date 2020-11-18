import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuaRpgVD91y50i0HDNmgvqn-x_fgNp5Bs",
    authDomain: "insta-clone-d423a.firebaseapp.com",
    databaseURL: "https://insta-clone-d423a.firebaseio.com",
    projectId: "insta-clone-d423a",
    storageBucket: "insta-clone-d423a.appspot.com",
    messagingSenderId: "261945581038",
    appId: "1:261945581038:web:593dcadf5e05b9381f82ff",
    measurementId: "G-7ST5XBMHXP"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
export { db, auth, storage } 