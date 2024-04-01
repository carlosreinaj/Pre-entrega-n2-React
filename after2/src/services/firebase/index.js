
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu00BPrgnnN6MKEH_3PFf82PYxq4-TyMc",
  authDomain: "react54040-carlos.firebaseapp.com",
  projectId: "react54040-carlos",
  storageBucket: "react54040-carlos.appspot.com",
  messagingSenderId: "1038825812660",
  appId: "1:1038825812660:web:e30acea3f3c1a1bded5de1",
  measurementId: "G-FGK9MR058H"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);