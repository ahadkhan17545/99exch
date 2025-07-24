import '../../App.css'
import {  useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import {  Input } from 'antd';
import Appconfig from '../../config/config'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';

function ChangePassword() {
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [user_nameValidationError, setUser_NameValidationError] = useState("Please enter old password");
    const [passwordValidationError, setPasswordValidationError] = useState("Please enter new password");
    const [conpasswordValidationError, setConPasswordValidationError] = useState("Please check your confirm password");


    const [formData, setformData] = useState({
        user_id: userInfo?._id,
        name: userInfo?.name,
        user_name: userInfo?.user_name,
        user_type: userInfo?.user_type,
        old_password: '',
        new_password: '',
        con_password: '',

    });

    function setOldPassword(value) {
        setformData({
            ...formData,
            old_password: value
        })
    }

    function setNewPassword(value) {
        setformData({
            ...formData,
            new_password: value
        })
    }

    function setConPassword(value) {
        setformData({
            ...formData,
            con_password: value
        })
    }
    function checkValidation() {

        if (formData.old_password.trim() === "") {

            setUser_NameValidationError('Please enter old password')
            // document.querySelector('.oldpassword-error').classList.remove('hidden');
            // console.log('hlw');

        }
        if (formData.new_password.trim() === "") {
            setPasswordValidationError('Please enter new password')
            // document.querySelector('.newpassword-error').classList.remove('hidden');
        }
        if (formData.con_password.trim() === formData.new_password.trim()) {
            // document.querySelector('.conpassword-error').classList.remove('hidden');
            setConPasswordValidationError('Please check your confirm password')
        }

        if (formData.old_password !== "" && formData.new_password !== "" && formData.con_password !== "" && formData.new_password === formData.con_password) {
            return true
        }
        return false;

    }


    const changePassword = async () => {

        if (checkValidation()) {

            formData.master_id = userInfo?._id;
            formData.masters = userInfo?.masters;

            var config = {
                method: 'post',
                url: `${Appconfig.apiUrl}users/auraChangePassword`,
                headers: {
                    'Content-Type': 'application/json',

                },

                data: JSON.stringify(formData)

            };
            axios(config)
                .then(function (response) {

                    if (response.data.result) {
                        NotificationManager.success(response.data.message, '', 3000);
                        formData.old_password = '';
                        formData.new_password = '';
                        formData.con_password = '';

                        setTimeout(() => {
                            localStorage.removeItem('userdata');
                            localStorage.removeItem('login_token');
                            navigate('/login');
                        }, 3000)

                    } else {
                        NotificationManager.error(response.data.message, '', 3000);

                    }


                })
                .catch(function (error) {
                    console.log(error);
                });
        }


    }

    return (
        <>
            <NotificationContainer />
            <div className='grid grid-cols-12'>
                <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-t-[5px] h-[35px] bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                    <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Change Password</h5>
                </div>
                <div className='col-span-12 !bg-[#ffffff] !text-[#23282c] relative flex-auto p-4'>
                    <div className='grid grid-cols-12 lg:gap-x-6 '>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mb-4 !text-[#23282c]'>
                                <label className='inline-block mb-[.5rem] !text-[#23282c]' htmlFor="oldPassword">Old Password </label>
                                <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                    <Input.Password id='oldPassword' name='oldPassword' required
                                        onChange={(e) => setOldPassword(e.target.value)} className='antd-password' placeholder="Old Password.." />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mb-4 !text-[#23282c]'>
                                <label className='inline-block mb-[.5rem] !text-[#23282c]' htmlFor="newPassword">New Password  </label>
                                <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                    <Input.Password id='newPassword' name='newPassword' required
                                        onChange={(e) => setNewPassword(e.target.value)} className='antd-password' pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&]{8,}$' placeholder="New Password.." />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='mb-4 !text-[#23282c]'>
                                <label className='inline-block mb-[.5rem] !text-[#23282c]' htmlFor="confirmPass">Confirm Password  </label>
                                <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                    <Input.Password id='confirmPass' name='confirmPass' required onChange={(e) => setConPassword(e.target.value)} className='antd-password' placeholder="Confirm Password.." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 gap-2 flex flex-shrink-0 flex-wrap items-center justify-end p-[.3rem]'>
                        <button type="submit" className="m-[5px] text-[#fff]  bg-[#0d6efd] border-[#0d6efd]  font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]" onClick={() => changePassword()}>Confirm</button>

                    </div>

                </div>


            </div>
        </>
    );

}
export default ChangePassword;
