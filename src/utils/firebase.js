// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-7c109.firebaseapp.com",
  projectId: "blog-7c109",
  storageBucket: "blog-7c109.appspot.com",
  messagingSenderId: "34431120584",
  appId: "1:34431120584:web:0e39108c86fa8cf1d261fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);