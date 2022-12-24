// import firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV5Bek1qxA-D_kOz2enAyXvWcwYq17akE",
  authDomain: "smartbuzz-25dd2.firebaseapp.com",
  projectId: "smartbuzz-25dd2",
  storageBucket: "smartbuzz-25dd2.appspot.com",
  messagingSenderId: "576921509255",
  appId: "1:576921509255:web:cbb97d9360f2da2e5c0722",
  measurementId: "G-TP36BGQWLQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();

export { app, auth, db };
export default app;