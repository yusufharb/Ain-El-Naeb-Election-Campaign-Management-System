// firebase.js - مشروع elgohary
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXX.firebaseapp.com",
  projectId: "XXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "0000000000xxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
