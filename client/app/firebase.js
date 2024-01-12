// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXQaAWPdl-4NKR4YFG8JZ7ioZgzyu_Zps",
  authDomain: "teddiehousestore.firebaseapp.com",
  projectId: "teddiehousestore",
  storageBucket: "teddiehousestore.appspot.com",
  messagingSenderId: "1028421141541",
  appId: "1:1028421141541:web:c6069d53fde63a8f29abcc",
  measurementId: "G-EDVBK1ZPPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);