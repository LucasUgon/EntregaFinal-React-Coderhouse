// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-iP7QNgLqeRJXf3DRujUcQdeZoj-ehpY",
  authDomain: "celustore-164ab.firebaseapp.com",
  projectId: "celustore-164ab",
  storageBucket: "celustore-164ab.appspot.com",
  messagingSenderId: "910099004881",
  appId: "1:910099004881:web:8e6bd045266bd54706b4f0",
  measurementId: "G-PSFHXGD9LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
