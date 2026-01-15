// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIyvxoRIPdceKmpZay5ybJHeZM--thIK4",
  authDomain: "taylor-heaven.firebaseapp.com",
  projectId: "taylor-heaven",
  storageBucket: "taylor-heaven.firebasestorage.app",
  messagingSenderId: "487568786310",
  appId: "1:487568786310:web:08d3e983ecb31d40ade207"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// helpers
export const saveNote = (text) =>
  addDoc(collection(db, "notes"), {
    text,
    createdAt: serverTimestamp()
  });

export const getLatestNotes = async () => {
  const q = query(
    collection(db, "notes"),
    orderBy("createdAt", "desc"),
    limit(1)
  );
  return await getDocs(q);
};
