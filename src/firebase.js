import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcQlg0T84EU5p7LyupiPbgHazxgDLuMCw",
  authDomain: "sbi-insurance-auth.firebaseapp.com",
  projectId: "sbi-insurance-auth",
  storageBucket: "sbi-insurance-auth.appspot.com",
  messagingSenderId: "1020927304808",
  appId: "1:1020927304808:web:5212dbe81741b802c3c7dd",
  measurementId: "G-KWRMZXWTHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut, db };
