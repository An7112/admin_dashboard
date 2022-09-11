
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDt17uQC5ywi01LOT6n58Uls2GTwFSN23k",
  authDomain: "chatadmin-25a3f.firebaseapp.com",
  projectId: "chatadmin-25a3f",
  storageBucket: "chatadmin-25a3f.appspot.com",
  messagingSenderId: "27792807327",
  appId: "1:27792807327:web:d2ac36f7f88ef9cc8dd9aa"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()