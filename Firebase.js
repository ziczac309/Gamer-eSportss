import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwYmEzb6tRQwnQJRxAY-Qz-f2YVAPOaVk",
  authDomain: "gamer-esports-ada07.firebaseapp.com",
  projectId: "gamer-esports-ada07",
  storageBucket: "gamer-esports-ada07.firebasestorage.app",
  messagingSenderId: "914920329816",
  appId: "1:914920329816:web:56b8c5cc62db7cc103702d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
