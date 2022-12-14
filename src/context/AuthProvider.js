import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, seetUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const userLogin = (email,password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth,email,password);
  };

  const SignUpGoogle = ()=> {
    setLoader(true);
    return signInWithPopup(auth,googleProvider);
  }

  const logOut = ()=> {
    return signOut(auth);
  };

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
          seetUser(currentUser);
          setLoader(false);
    });
    return ()=> {
      return unsubscribe();
    }
  },[]);

  const authInfo = {
    user,
    loader,
    createUser,
    userLogin,
    logOut,
    SignUpGoogle
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
