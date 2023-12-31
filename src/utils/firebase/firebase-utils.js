import { initializeApp } from "firebase/app";
//imports for google auth
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
//imports for firestore database
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKIUAQfht9uUlI7ViunyoBWNYxto7wwm0",
    authDomain: "e-commerce-app-9d988.firebaseapp.com",
    projectId: "e-commerce-app-9d988",
    storageBucket: "e-commerce-app-9d988.appspot.com",
    messagingSenderId: "397992696019",
    appId: "1:397992696019:web:c18b307d58152fadeb1c26"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// to use google authentication, we need to initialize a provider, here we're asking client to get the select account prompt
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//instantiate firestore database that will be accessed to get and setDocs
export const db = getFirestore();

/* 
create an asynchronous function that takes a userObject as a parameter, 
then using the doc method we generate a document model for user, by passing in the firestore db, collection name, and unique id
that was generated by our response from the sign in component
*/
export const createUserDocumentFromAuth = async (userObject) => {
    const userDocumentRef = doc(db, "users", userObject.uid);
    console.log(userDocumentRef);

    const userSnapshot = await getDoc(userDocumentRef);
    console.log(userSnapshot.exists());

    //if document exists, do nothing

    //if it doesn't exist, create a document using details from object corresponding to uid passed
    if (!userSnapshot.exists()) {
        const { displayName, email } = userObject;
        const createdAt = new Date();

        try {
            await setDoc(userDocumentRef, {
                displayName,
                email,
                createdAt
            })
        }

        catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userDocumentRef;
}
