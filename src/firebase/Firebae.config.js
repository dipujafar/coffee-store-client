// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqOhXl7__pZc9QU1eziZ6OhqO1iEEcxCk",
  authDomain: "coffee-store-2fae1.firebaseapp.com",
  projectId: "coffee-store-2fae1",
  storageBucket: "coffee-store-2fae1.appspot.com",
  messagingSenderId: "1068612439806",
  appId: "1:1068612439806:web:c09e8d823047114c19dfaf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
