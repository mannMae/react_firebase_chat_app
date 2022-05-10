// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5PRZlDeD1EXbo55ffAf4KzwMoMuFSk5s",
  authDomain: "react-firebase-chat-app-6546e.firebaseapp.com",
  projectId: "react-firebase-chat-app-6546e",
  storageBucket: "react-firebase-chat-app-6546e.appspot.com",
  messagingSenderId: "432067961644",
  appId: "1:432067961644:web:519c2143f902357f980289",
  measurementId: "G-7KXMY0B6ZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
