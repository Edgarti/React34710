// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firetore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnogHOKq8G2RXy2hTs1GqM1KMJb4YdIas",
  authDomain: "react-228a4.firebaseapp.com",
  projectId: "react-228a4",
  storageBucket: "react-228a4.appspot.com",
  messagingSenderId: "638911053118",
  appId: "1:638911053118:web:eb0f1dd8b423fff5e9806f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreBD = getFirestore(app);
export default firestoreBD;