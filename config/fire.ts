
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {  getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import App from "../pages/_app";

const firebaseConfig = {
  apiKey: "AIzaSyCqtY06XtCyw39RtQIjSro0GPF1PlfWEt8",
  authDomain: "final-898d6.firebaseapp.com",
  projectId: "final-898d6",
  storageBucket: "final-898d6.appspot.com",
  messagingSenderId: "899799396720",
  appId: "1:899799396720:web:d1e41cbee1248f932b9fb5",
  measurementId: "G-H9H2DC8LMP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db ,auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}