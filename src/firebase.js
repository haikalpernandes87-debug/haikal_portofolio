// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfigurasi asli dari project Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyBr2_Sh4lopuhkZIsGUu--y1sAY4y5jLKI",
  authDomain: "portofolio-web-962b1.firebaseapp.com",
  projectId: "portofolio-web-962b1",
  storageBucket: "portofolio-web-962b1.firebasestorage.app",
  messagingSenderId: "461755176942",
  appId: "1:461755176942:web:fabd9fd68c1fefb8de60ff",
  measurementId: "G-EPVJCBYHND"
};

// Init Firebase & Analytics
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Init Auth (Fungsi Bawaan Template)
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Init Firestore (Fungsi Bawaan Template)
export const db = getFirestore(app);