// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMf7qGAWLU_coedRg_meeAcubEQiZpvpg",
  authDomain: "crowd-cube-app.firebaseapp.com",
  projectId: "crowd-cube-app",
  storageBucket: "crowd-cube-app.firebasestorage.app",
  messagingSenderId: "633658419283",
  appId: "1:633658419283:web:feb3f2e48cdc8dfaddbea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;