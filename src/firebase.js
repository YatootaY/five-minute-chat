// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIv8hZx9tnMnAuEj7upxMq7bWlHuP1wgQ",
  authDomain: "five-minute-chat.firebaseapp.com",
  projectId: "five-minute-chat",
  storageBucket: "five-minute-chat.appspot.com",
  messagingSenderId: "974564286178",
  appId: "1:974564286178:web:da41797de84c06aad248bb",
  measurementId: "G-4S14YG05HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;