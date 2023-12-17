// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG6QTBSnIGwjJALmzsm8s3p2BSltNgyHQ",
  authDomain: "netflixgpt-aac27.firebaseapp.com",
  projectId: "netflixgpt-aac27",
  storageBucket: "netflixgpt-aac27.appspot.com",
  messagingSenderId: "100976979476",
  appId: "1:100976979476:web:74c49232e270bfe2f40101",
  measurementId: "G-VJRGSTMC0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();