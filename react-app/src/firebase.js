import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-37czLkQCXAD4AQwqn7MOAMOpJNtefV4",
  authDomain: "portfolio-react-f4905.firebaseapp.com",
  projectId: "portfolio-react-f4905",
  storageBucket: "portfolio-react-f4905.appspot.com",
  messagingSenderId: "74719038925",
  appId: "1:74719038925:web:8b6ecd59c640cf2c0f8884",
  measurementId: "G-E630P2K03R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
