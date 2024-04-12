// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDesRtiDTYPZQlzuaK1P7ppkttq2JPDcs8",
  authDomain: "apartment-react-assignment.firebaseapp.com",
  projectId: "apartment-react-assignment",
  storageBucket: "apartment-react-assignment.appspot.com",
  messagingSenderId: "33340985444",
  appId: "1:33340985444:web:d371811de277697fc34f71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;