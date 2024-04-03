// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-68661.firebaseapp.com",
  projectId: "mern-blog-68661",
  storageBucket: "mern-blog-68661.appspot.com",
  messagingSenderId: "217702822968",
  appId: "1:217702822968:web:18093bb09eb4a5234322cd"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
