import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        const userInfo = localStorage.getItem('loggedInUserData');
        if (loggedInStatus === 'true' && userInfo) {
            setIsLoggedIn(true);
            setUserData(JSON.parse(userInfo));
        }
    }, []);

    const login = (userData) => {
        setIsLoggedIn(true);
        setUserData(userData);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUserData', JSON.stringify(userData));
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserData(null);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInUserData');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, userData }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
