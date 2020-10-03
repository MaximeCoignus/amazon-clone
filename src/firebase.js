import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDdN92TnXHeY4JbndFPSDiN7-eKOQhhL1M",
    authDomain: "challenge-884a9.firebaseapp.com",
    databaseURL: "https://challenge-884a9.firebaseio.com",
    projectId: "challenge-884a9",
    storageBucket: "challenge-884a9.appspot.com",
    messagingSenderId: "32046734543",
    appId: "1:32046734543:web:6805ee64bf9e7029322bba"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };