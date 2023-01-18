import { initializeApp } from "firebase/app";
import { getAuth, 
    signInwithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,} 
    from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmIEE1Majjc7gW0GPIbYBubczoWonObIw",
    authDomain: "learn-firebase-b855a.firebaseapp.com",
    projectId: "learn-firebase-b855a",
    storageBucket: "learn-firebase-b855a.appspot.com",
    messagingSenderId: "585394118699",
    appId: "1:585394118699:web:41a0e525710348e2748a6e"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  
