// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDToXwgCjRr1wz_XLmL9Xc84ar7MPcCZio",
  authDomain: "versevault-5682d.firebaseapp.com",
  projectId: "versevault-5682d",
  storageBucket: "versevault-5682d.firebasestorage.app",
  messagingSenderId: "434321403019",
  appId: "1:434321403019:web:7af8b46711d855691e388e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };