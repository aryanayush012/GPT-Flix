// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiDr1igorK1t9PL4h6oHQ-bdK5qJBuCYw",
  authDomain: "gpt-flix-cc905.firebaseapp.com",
  projectId: "gpt-flix-cc905",
  storageBucket: "gpt-flix-cc905.appspot.com",
  messagingSenderId: "836979530764",
  appId: "1:836979530764:web:a801dfb4ccc7fd5a2c2229",
  measurementId: "G-5S03145TQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
