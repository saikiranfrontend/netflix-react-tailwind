// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBopSKQFtq2cOJrVhozLNNBatrnoKttYBI",
  authDomain: "netflix-react-tailwind-739b0.firebaseapp.com",
  projectId: "netflix-react-tailwind-739b0",
  storageBucket: "netflix-react-tailwind-739b0.appspot.com",
  messagingSenderId: "727251709610",
  appId: "1:727251709610:web:40c7dbe489e306cd13ead3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
