// firebase.js - مشروع elgohary
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOr3NRGjrEnCwDqqR-2feqD_9MEDSp3p8",
  authDomain: "elgohary-88978.firebaseapp.com",
  projectId: "elgohary-88978",
  storageBucket: "elgohary-88978.firebasestorage.app",
  messagingSenderId: "378343151130",
  appId: "1:378343151130:web:ed62b8dfaf4dbffd6563a3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
