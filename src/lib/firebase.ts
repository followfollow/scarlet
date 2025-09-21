// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-7226675376-1ba2e",
  "appId": "1:612753223979:web:f9167799b4e14446ff956e",
  "apiKey": "AIzaSyC-iqRckm21PAfZaH_csb6XUbwPNop4MNI",
  "authDomain": "studio-7226675376-1ba2e.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "612753223979"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
