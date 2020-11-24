// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6VRCEUqzgDPqhJXlYauWHmaPsUQy7pUU",
  authDomain: "challenge-b4072.firebaseapp.com",
  databaseURL: "https://challenge-b4072.firebaseio.com",
  projectId: "challenge-b4072",
  storageBucket: "challenge-b4072.appspot.com",
  messagingSenderId: "696361883252",
  appId: "1:696361883252:web:7e02941211c61e57d86321",
  measurementId: "G-5EWE7ZMP1X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
