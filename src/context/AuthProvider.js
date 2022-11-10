import React, { createContext, useState } from 'react';


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,seetUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const authInfo ={
      user,
      loader
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;