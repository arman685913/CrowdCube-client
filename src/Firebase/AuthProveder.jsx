import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './FirebaseProvider';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const logOut = () => {
        return signOut(auth)
        setLoading(true)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }

    const provider = new GoogleAuthProvider();
    const providerGit = new GithubAuthProvider();

    const signInGoogle = () => {
        return signInWithPopup(auth, provider);
        setLoading(true)
    }
    const signInGit = () => {
        return signInWithPopup(auth, providerGit);
        setLoading(true)
    }


    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            });
            return () => {
                unsubscribe();
            }
        }, [])

    // console.log(user)


    const userInfo = { user, setUser, createUser, signInUser ,logOut , signInGoogle, loading , signInGit};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
