import React, { useEffect } from 'react';
import {
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
    auth
} from '../../utils/firebase/firebase-utils';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/signUpForm/SignUpForm';

const SignIn = () => {

    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            console.log(response);

            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);

            }
        }
        fetchData()
    }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log(user);
    // }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;