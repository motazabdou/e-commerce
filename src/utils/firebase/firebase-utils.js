import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKIUAQfht9uUlI7ViunyoBWNYxto7wwm0",
    authDomain: "e-commerce-app-9d988.firebaseapp.com",
    projectId: "e-commerce-app-9d988",
    storageBucket: "e-commerce-app-9d988.appspot.com",
    messagingSenderId: "397992696019",
    appId: "1:397992696019:web:c18b307d58152fadeb1c26"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// to use google authentication, we need to initialize a provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
