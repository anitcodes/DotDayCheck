// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpqSMKToUlKqd1eMREHMWBlw5rAFOCU58",
  authDomain: "dotday-c5e62.firebaseapp.com",
  projectId: "dotday-c5e62",
  storageBucket: "dotday-c5e62.firebasestorage.app",
  messagingSenderId: "195932347070",
  appId: "1:195932347070:web:fdb96eba68cf9a0e04dcef",
  measurementId: "G-T17LL4L3HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;