import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,seetUser] = useState(null);
    const [loader, setLoader] = useState(true);

     const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(email,password);
     };

    const authInfo ={
      user,
      loader,
      createUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;