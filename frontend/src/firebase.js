// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8YRoD7PSlPTfH1qdq7qT5kLiNv2v7Qu4",
  authDomain: "onlycats-21998.firebaseapp.com",
  projectId: "onlycats-21998",
  storageBucket: "onlycats-21998.firebasestorage.app",
  messagingSenderId: "890688546775",
  appId: "1:890688546775:web:507ef53f237a90991a4d92",
  measurementId: "G-4SYQ1L63D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Firebase Storage initialized
export {app, auth, storage}

