import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxYS-5NF44L0BOZpJaKocjywSPYo_JFJc",
  authDomain: "chatgpt-clone-6509f.firebaseapp.com",
  projectId: "chatgpt-clone-6509f",
  storageBucket: "chatgpt-clone-6509f.firebasestorage.app",
  messagingSenderId: "252567696363",
  appId: "1:252567696363:web:f0d38ecd294a4345921fae"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };