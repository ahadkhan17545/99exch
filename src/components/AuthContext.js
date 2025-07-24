import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const login_token = localStorage.getItem('login_token');
        return !!login_token;
    });

    useEffect(() => {
        const login_token = localStorage.getItem('login_token');
        setIsAuthenticated(!!login_token);
    }, []);

    const login = (userdata) => {
        localStorage.setItem('userdata', JSON.stringify(userdata));
        localStorage.setItem('login_token', userdata.login_token);
        localStorage.setItem("loginTime", new Date().getTime().toString());

        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('login_token');
        localStorage.removeItem('userdata');
        localStorage.removeItem('loginTime');

        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
