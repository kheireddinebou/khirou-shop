import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ecommerce-app-e4eb2.firebaseapp.com",
  projectId: "ecommerce-app-e4eb2",
  storageBucket: "ecommerce-app-e4eb2.appspot.com",
  messagingSenderId: "122142226427",
  appId: "1:122142226427:web:b8ea734b60f320beb2bd5e",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
