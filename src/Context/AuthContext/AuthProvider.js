import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const providerGoogleLogin = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    const providerCrateUserWithEmail = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile);
    }

    const providerEmailLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const providerLogOut = () => {
        setLoader(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        providerGoogleLogin,
        providerCrateUserWithEmail,
        updateUserProfile,
        providerEmailLogin,
        providerLogOut
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            return unsubscribed;
        }
    }, []);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;