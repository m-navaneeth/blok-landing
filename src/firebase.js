// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE94wzJIFHChziKPQepyxr7l-MAKJj988",
  authDomain: "blok-dev.firebaseapp.com",
  projectId: "blok-dev",
  storageBucket: "blok-dev.appspot.com",
  messagingSenderId: "393520501802",
  appId: "1:393520501802:web:3c8f01e2151be2d3ad9f53",
  measurementId: "G-5L6FEPZDGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);