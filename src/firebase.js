
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDH-llcvxhpEUyg-UcCFfWHOLZgH2zMQ5o",
    authDomain: "todolist-cac1e.firebaseapp.com",
    projectId: "todolist-cac1e",
    storageBucket: "todolist-cac1e.appspot.com",
    messagingSenderId: "148028945697",
    appId: "1:148028945697:web:ebad4b060969d3d2a63a60"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};