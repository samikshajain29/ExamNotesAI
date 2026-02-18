import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-b7251.firebaseapp.com",
  projectId: "examnotesai-b7251",
  storageBucket: "examnotesai-b7251.firebasestorage.app",
  messagingSenderId: "867077883370",
  appId: "1:867077883370:web:16bbf27ed40dc1300f1e93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
