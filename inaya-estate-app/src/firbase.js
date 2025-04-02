// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-742bc.firebaseapp.com",
  projectId: "real-estate-app-742bc",
  storageBucket: "real-estate-app-742bc.firebasestorage.app",
  messagingSenderId: "845107819082",
  appId: "1:845107819082:web:ac4c1ca18ae2f9bcc62cb3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);