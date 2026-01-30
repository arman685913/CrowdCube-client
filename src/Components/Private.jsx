import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProveder';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    console.log(location)

    if (loading) {
        return <div className='min-h-screen flex gap-3 justify-center items-center'><span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span></div>
    }

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />;
    }


    return children;
};

export default Private;