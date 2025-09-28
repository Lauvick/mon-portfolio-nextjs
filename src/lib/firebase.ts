// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-5477271617-f48f1",
  "appId": "1:689829209348:web:2c3786cf5d697eb1a59c51",
  "storageBucket": "studio-5477271617-f48f1.firebasestorage.app",
  "apiKey": "AIzaSyADyhV1YTQYunm4fvalGqX1EeKPWk7g7dE",
  "authDomain": "studio-5477271617-f48f1.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "689829209348"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
