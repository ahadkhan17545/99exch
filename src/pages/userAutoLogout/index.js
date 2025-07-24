import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useAuth } from '../../components/AuthContext';

const AUTO_LOGOUT_TIME = 2 * 60 * 60 * 1000; // 2 hours

// const AUTO_LOGOUT_TIME = 1 * 60 * 1000; // 1 minute for testing (change to 2 hours in production)

const UserAutoLogout = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        const loginTime = localStorage.getItem('loginTime');

        if (!loginTime) {
            console.log("No login time found, auto logout is not active.");
            return;
        }

        const currentTime = new Date().getTime();
        const remainingTime = AUTO_LOGOUT_TIME - (currentTime - Number(loginTime));

        if (remainingTime <= 0) {
            console.log("Session expired, logging out immediately.");
            logoutUser();
            return;
        }

        console.log(`Auto logout scheduled in ${remainingTime / 1000} seconds`);

        const timer = setTimeout(() => {
            logoutUser();
        }, remainingTime);

        return () => clearTimeout(timer); // Cleanup timeout on unmount

    }, [navigate, logout]);

    const logoutUser = () => {
        console.log("Auto logout triggered!");
        NotificationManager.error("Token Expired, Login Again", "", 2000);

        setTimeout(() => {
            logout(); // ✅ Correctly calling the logout function
            navigate('/')
        }, 2000);
    };

    return <NotificationContainer />;
};

export default UserAutoLogout;
