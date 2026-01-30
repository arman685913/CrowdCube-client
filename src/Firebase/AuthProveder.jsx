import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useState } from 'react';
import auth from './FirebaseProvider';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null)


    
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    console.log(user)
    const userInfo = {user , setUser , createUser}; 
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
