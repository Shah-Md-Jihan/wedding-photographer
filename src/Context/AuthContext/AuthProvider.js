import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const providerGoogleLogin = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }
    const authInfo = {
        user,
        providerGoogleLogin
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