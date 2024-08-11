import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdnaSGn3fq0JRkKsGRDAYkhTYWt8FHND4",
  authDomain: "findchow-24d1c.firebaseapp.com",
  databaseURL: "https://findchow-24d1c-default-rtdb.firebaseio.com",
  projectId: "findchow-24d1c",
  storageBucket: "findchow-24d1c.appspot.com",
  messagingSenderId: "54057494086",
  appId: "1:54057494086:web:705e794bf93da6321c4c47",
  measurementId: "G-99S6H0EEDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// Google provider for authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Sign in with Google
export const signInWithGoogle = () => signInWithPopup(getAuth(), provider);

// Sign out
export const signOut = () => getAuth().signOut();
