import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI62P7i9GPgQsMAFaG4aqt9IyVid66BkM",
  authDomain: "movieriver-dde93.firebaseapp.com",
  projectId: "movieriver-dde93",
  storageBucket: "movieriver-dde93.firebasestorage.app",
  messagingSenderId: "384702511226",
  appId: "1:384702511226:web:2bf36ce6c1edd31799a3c3"
};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);