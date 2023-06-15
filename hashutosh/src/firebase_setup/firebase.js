import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-aqQsdWLLDZ8BegAVZe9fMF3kMujDX-4",
  authDomain: "hashutosh-d7e59.firebaseapp.com",
  projectId: "hashutosh-d7e59",
  storageBucket: "hashutosh-d7e59.appspot.com",
  messagingSenderId: "1053661268374",
  appId: "1:1053661268374:web:926bbfde8c868be9a635b7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const storage = getStorage(app);
export const auth = getAuth(app);
