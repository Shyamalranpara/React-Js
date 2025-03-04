// Import the functions you need from the SDKs you need
// step 1 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAqLvM7RAJ0N7QykIUhH5UTS6xfxqBkrkQ",
  authDomain: "final-project-bfcd6.firebaseapp.com",
  projectId: "final-project-bfcd6",
  storageBucket: "final-project-bfcd6.firebasestorage.app",
  messagingSenderId: "906072791567",
  appId: "1:906072791567:web:a796b52ed9f8771f7e617a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app); /*this db is the cloudFirestore */
export {auth}