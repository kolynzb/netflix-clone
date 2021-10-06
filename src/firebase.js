// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDAFMiEr4qpk7mZTqpQyyqIDTRXl8BFAqo",
  authDomain: "netflix-clone-1-202d7.firebaseapp.com",
  projectId: "netflix-clone-1-202d7",
  storageBucket: "netflix-clone-1-202d7.appspot.com",
  messagingSenderId: "742122654559",
  appId: "1:742122654559:web:c27fb39eb6a92dd68a84ea",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
