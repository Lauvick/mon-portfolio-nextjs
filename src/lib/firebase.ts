// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
];

// This check runs on the server when the app builds or on first load.
if (typeof window === 'undefined') {
  for (const varName of requiredEnvVars) {
    if (!process.env[varName]) {
      console.warn(`[Firebase Config] Warning: Environment variable ${varName} is missing. The app might not work correctly in production.`);
    }
  }
}

// Your web app's Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
// This check is important to prevent re-initializing the app on hot reloads.
let app;
if (getApps().length === 0) {
    // Check if all config values are present before initializing
    if (Object.values(firebaseConfig).some(value => !value)) {
        console.error("[Firebase] Cannot initialize Firebase: One or more configuration values are missing.");
        // We avoid throwing an error here to prevent crashing the server build process,
        // but the app's Firebase features will not work.
    } else {
        app = initializeApp(firebaseConfig);
    }
} else {
    app = getApp();
}


// We check if app was initialized before getting other services
const firestore = app ? getFirestore(app) : null;
const auth = app ? getAuth(app) : null;

// Log an error if services could not be initialized
if (!firestore || !auth) {
    console.error("[Firebase] Firestore or Auth could not be initialized. Check your Firebase config.");
}


export { app, firestore, auth };