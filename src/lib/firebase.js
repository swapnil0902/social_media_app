import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"; 
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgud62DiZE-OAQvwHL_lYM00Mdj3XKj8g",
  authDomain: "social-media-app-minor.firebaseapp.com",
  projectId: "social-media-app-minor",
  storageBucket: "social-media-app-minor.appspot.com",
  messagingSenderId: "923988337744",
  appId: "1:923988337744:web:ad7fb530dbb3d15b7c5d55"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);