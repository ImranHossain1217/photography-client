import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation()
    if(user){
        return children
    };
    if(loader){
        return <h2 className='text-3xl text-center mt-20'>Loading...</h2>
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;