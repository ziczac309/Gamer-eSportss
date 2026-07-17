import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "APNI_API_KEY",
  authDomain: "gamer-esports-ada07.firebaseapp.com",
  projectId: "gamer-esports-ada07",
  storageBucket: "gamer-esports-ada07.appspot.com",
  messagingSenderId: "914920329816",
  appId: "APNA_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
