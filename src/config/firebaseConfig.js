// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqqrC6wdp2hRScJplHjdzem8ECem_-tHQ",
  authDomain: "ecommercebook-ce104.firebaseapp.com",
  projectId: "ecommercebook-ce104",
  storageBucket: "ecommercebook-ce104.appspot.com",
  messagingSenderId: "292814258011",
  appId: "1:292814258011:web:e3d258dec6e582f858a47e",
  measurementId: "G-H69W51FNQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = firebase.database();