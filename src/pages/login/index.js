import '../../App.css'
import {  useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext';
import Appconfig from '../../config/config'
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth()
    const [loginModel, setLoginModel] = useState(false);
    const [user_nameValidationError, setUser_NameValidationError] = useState("Please enter username");
    const [passwordValidationError, setPasswordValidationError] = useState("Please enter password");
    const [validationError, setValidationError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setformData] = useState({
        user_name: '',
        password: '',
        site_code: Appconfig.sitecodes,
        user_type: "Super"
    });
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    function checkValidation() {
        let errorText;
        if (formData.user_name.trim() === "") {
            setUser_NameValidationError('Please enter username')
        }
        if (formData.password === "") {
            document.querySelector('.password-error').classList.remove('hidden');
            setPasswordValidationError('Please enter password')
        }
        const regex = /^[a-zA-Z0-9]*$/;
        if (!regex.test(formData.user_name)) {
            document.querySelector('.username-error').classList.remove('hidden');
            setUser_NameValidationError('Username is only allow a-z and 0-9.')
            return false;
        }

        setValidationError(errorText);
        if (regex.test(formData.user_name) && formData.password !== "") {
            return true
        }
        // return false;

    }


    const handleInputChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        });
        if (event.target.name === 'user_name') {
            document.querySelector('.username-error').classList.add('hidden');
        }
        if (event.target.name === 'password') {
            document.querySelector('.password-error').classList.add('hidden');
        }

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (checkValidation()) {
            var config = {
                method: 'post',
                url: `${Appconfig.apiUrl}users/userAuthenticate`,
                headers: {
                    'Content-Type': 'application/json',

                },

                data: JSON.stringify(formData)

            };
            axios(config)
                .then(function (response) {
                    // setformData({})
                    formData.user_name = ""
                    formData.password = ""
                    if (response.data.result) {
                        storeUserinfo(response.data.resultData);
                    }
                    else {
                        setValidationError(response.data.resultMessage);
                        console.log(response.data.resultMessage)
                        errorNotification();
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });

        }

    }
    function storeUserinfo(userdata) {
        login(userdata);
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate('/')
        }, 1000)
    }

    const errorNotification = () => {
        NotificationManager.error('Invalid Login Credential!', '', 3000);
    }


    return (
        <>
            <NotificationContainer />
            {isLoading && (
                <div className='h-screen w-[110vw] bg-[rgba(51,_51,_51,_0.8)] fixed top-[0] opacity-[1] z-[99999]'>
                    <div id="poker_loading" className="relative !z-[99999] loading-wrap w-[40vw] h-[24vw] text-[3.2vw] rounded-[1.33333vw] [box-shadow:0_.8vw_2.66667vw_0_rgba(0,_0,_0,_.5)]" >
                        <div className="loading w-[18.66667vw] h-[8.5vw] ]">
                            <div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <p>Loading...</p>
                    </div>
                </div>
            )}
            <div className=' absolute w-full left-0 top-0'>

                <div className=' relative w-full flex items-center justify-center h-screen overflow-hidden bg-[linear-gradient(-180deg,_#535353_0,_#000000_100%)] z-[999]'>
                    <div className='flex bg-[linear-gradient(-180deg,_#535353_0,_#000000_100%)] absolute top-[17%] left-[10px] lg:left-[calc(50%-270px)] w-[94vw]  lg:w-[540px] h-[408px] rounded-[8px] [box-shadow:0_5px_20px_#00000080]'>
                        <div className='flex flex-col items-center lg:justify-center w-full'>
                            <img className='align-middle border-none h-[100px] my-[25px] lg:mt-[0px] w-[185px] lg:w-[185px] mb-[15px]' src='/logo.png' />
                            <form method="post" onSubmit={handleSubmit} autoComplete="off" noValidate className='w-full lg:w-[250px] px-[18px]'>
                                <div className='mb-[1rem] lg:mb-[.7rem]'>
                                    <div className='relative bg-[white] h-[40px] lg:h-[33px] rounded-[5px] flex items-center'>
                                        <input
                                            value={formData.user_name}
                                            onChange={handleInputChange}
                                            onBlur={(e) => {
                                                if (!e.target.value.trim()) {
                                                    document.querySelector('.username-error').classList.remove('hidden');
                                                }
                                            }}
                                            className='bg-white outline-none lg:h-[33px] text-black border-transparent block w-full px-3 py-2 text-base font-normal leading-normal appearance-none rounded-md transition-border-color duration-150 ease-in-out transition-box-shadow duration-150 ease-in-out'
                                            type="text"
                                            autoFocus
                                            tabIndex="1"
                                            name="user_name"
                                            id="loginName"
                                            placeholder="Username"
                                            maxLength={30}
                                        />

                                        <button type='button' className='text-[black] text-[1rem] pl-3 pr-3 pt-[.375rem] pb-[.375rem]'>
                                            <FaUser />
                                        </button>
                                    </div>
                                    <span className="username-error hidden text-[0.813rem] text-white leading-[14px]">
                                        <div className='leading-[14px] pt-[5px]'>{user_nameValidationError}</div>
                                    </span>
                                </div>

                                <div className='mb-[1rem] '>
                                    <div className='relative bg-[white] h-[40px] lg:h-[33px] rounded-[5px] flex items-center'>
                                        <input
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            onBlur={(e) => {
                                                // if (!isValidUserName(e.target.value)) {
                                                if (!e.target.value.trim()) {
                                                    document.querySelector('.password-error').classList.remove('hidden');
                                                }
                                            }}
                                            className='bg-[white] lg:h-[33px] outline-none text-[black] border-transparent block w-full px-[.75rem] py-[.375rem] text-[1rem] font-normal leading-normal appearance-none rounded-[.375rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out]'
                                            type={showPassword ? 'text' : 'password'}
                                            tabIndex="1"
                                            minLength={6}
                                            id="password"
                                            name="password"
                                            placeholder="Password"

                                        />
                                        <button type='button' className='text-[black] text-[1rem] pl-3 pr-3 pt-[.375rem] pb-[.375rem]' onClick={togglePasswordVisibility}>
                                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                                        </button>
                                    </div>
                                    <span className="password-error hidden text-[0.813rem] text-white leading-[14px]">
                                        <div className='leading-[14px] pt-[5px]'>{passwordValidationError}</div>
                                    </span>
                                </div>


                                <div>
                                    <button type='submit' className='flex items-center lg:h-[36px] justify-center bg-[linear-gradient(-180deg,_#A4DC60_0,_#4F9F21_100%)] text-[white] [box-shadow:none] rounded-[5px] text-[18px] lg:text-[16px] font-bold leading-[2.6] text-center block w-full border-[unset]' >
                                        Login
                                        <svg className='ml-[5px]' width="10" height="11" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.71 7.706l1.432-1.604H1.778V4.898h5.39L5.71 3.294l.781-.86L9.278 5.5 6.49 8.565l-.78-.86zM1.12 0C.825 0 .564.124.339.372a1.24 1.24 0 0 0-.339.86v8.536c0 .325.113.611.339.86.225.248.486.372.78.372H8.88c.295 0 .556-.124.781-.372a1.24 1.24 0 0 0 .339-.86V7.333H8.88v2.435H1.12V1.232h7.76v2.435H10V1.232a1.24 1.24 0 0 0-.339-.86C9.436.124 9.175 0 8.881 0H1.12z" fill="currentColor" fillRule="evenodd"></path>
                                        </svg>
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}
export default Login