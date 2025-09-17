import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBu4onUKZVHNC45b_FIJ4EPploDsUEjNaw",
  authDomain: "iaplab-cb182.firebaseapp.com",
  projectId: "iaplab-cb182",
  storageBucket: "iaplab-cb182.firebasestorage.app",
  messagingSenderId: "406340274020",
  appId: "1:406340274020:web:cbd85fb281b6463e1fdc71"
};

const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);
export const storage = getStorage(app);
