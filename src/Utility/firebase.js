import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7KNq83fqLu1MCUpbWZNw3UKlDgl_w9N0",
  authDomain: "clone-78b0f.firebaseapp.com",
  projectId: "clone-78b0f",
  storageBucket: "clone-78b0f.firebasestorage.app",
  messagingSenderId: "152136831989",
  appId: "1:152136831989:web:7d44c8d36a436ad29f86bc",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = app.firestore();
