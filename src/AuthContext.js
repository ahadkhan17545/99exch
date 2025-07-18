import React, { createContext, useState, useContext, useEffect } from "react";
import Helper from "./helper";
import { useDispatch } from "react-redux";
import {
  setUserInfo,
  emptyUserInfo,
} from "./redux/slice/userInfo/userInfoSlice";

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(Helper()));
  const [user, setUser] = useState(null); // Store user data (optional)
  const [showLoginModel, setShowLoginModel] = useState(false); //Open Login Modal
  const [betPlaced, setBetPlaced] = useState(false);
  const [betPlacedLoader, setBetPlacedLoader] = useState(false);
  const [currentExposure, setCurrentExposure] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);

  const login = (userData) => {
    // Save user data and authentication status (you can also store a token here)
    setUser(userData);
    setIsAuthenticated(true);
    dispatch(setUserInfo({ key: "userdata", value: userData && userData }));
    localStorage.setItem("loginTime", new Date().getTime().toString());

    // localStorage.setItem("userdata", JSON.stringify(userData)); // Optional, store user data in localStorage
  };

  const signup = (userData) => {
    // Handle signup logic (e.g., create user in backend)
    // After successful signup, you can call login to authenticate the user
    login(userData);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    dispatch(emptyUserInfo());
    localStorage.removeItem("loginTime");

    // localStorage.removeItem("userdata"); // Clear user data from localStorage
  };

  // useEffect(() => {
  //     const storedUser = localStorage.getItem("userdata");
  //     if (storedUser) {
  //         setUser(JSON.parse(storedUser)); // Retrieve user data from localStorage
  //         setIsAuthenticated(true);
  //     }
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        signup,
        logout,
        showLoginModel,
        setShowLoginModel,
        betPlaced,
        setBetPlaced,
        betPlacedLoader,
        setBetPlacedLoader,
        currentExposure,
        setCurrentExposure,
        currentBalance,
        setCurrentBalance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useAuth = () => useContext(AuthContext);
