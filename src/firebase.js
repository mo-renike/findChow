import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdnaSGn3fq0JRkKsGRDAYkhTYWt8FHND4",
  authDomain: "findchow-24d1c.firebaseapp.com",
  projectId: "findchow-24d1c",
  storageBucket: "findchow-24d1c.appspot.com",
  messagingSenderId: "54057494086",
  appId: "1:54057494086:web:705e794bf93da6321c4c47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Google provider for authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Sign in with Google
export const signInWithGoogle = () => signInWithPopup(getAuth(), provider);

// Sign out
export const signOut = () => getAuth().signOut();
