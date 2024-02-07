// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-928f3.firebaseapp.com",
  projectId: "mern-blog-928f3",
  storageBucket: "mern-blog-928f3.appspot.com",
  messagingSenderId: "432766878108",
  appId: "1:432766878108:web:7282a055c6a475b87bc859",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
