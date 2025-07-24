import '../../../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal,  Input } from 'antd';
import { TfiPencilAlt } from "react-icons/tfi";
import Appconfig from '../../../config/config'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';

function Profile() {
    const navigate = useNavigate();
    const [openEditRollingCommision, setOpenEditRollingCommision] = useState(false)
    const [openRollingCommission, setOpenRollingCommission] = useState(false)
    const [openAgentRollingCommission, setOpenAgentRollingCommission] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [user_nameValidationError, setUser_NameValidationError] = useState("Please enter old password");
    const [passwordValidationError, setPasswordValidationError] = useState("Please enter new password");
    const [conpasswordValidationError, setConPasswordValidationError] = useState("Please check your confirm password");
    const [button, setButton] = useState(false)


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
            setButton(true);
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
                        setOpenEdit(false);
                        formData.old_password = '';
                        formData.new_password = '';
                        formData.con_password = '';
                        setButton(false)
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
            <div className='col-span-12 lg:col-span-9 '>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 mb-[1.5rem]'>
                        <div className='relative flex flex-col min-w-[0] text-[#212529] [word-wrap:break-word] bg-[#fff] bg-clip-border border-[1px]  border-[#0000002d] rounded-[.375rem]'>
                            <div className='bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] font-bold text-[0.938rem] px-[10px] py-[5px] [word-wrap:break-word] rounded-t-[3px]'>
                                <span className='text-[#ffffff] font-bold text-[0.938rem]  py-[5px] [word-wrap:break-word]'>Account Details</span>
                            </div>
                            <div className='py-[1.25rem] px-[.5rem]'>
                                <div className=''>
                                    <dl className='grid grid-cols-12'>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Name</dt>
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>{userInfo?.user_name}</dd>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Commission</dt>
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>{userInfo?.commission}</dd>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Rolling Commission</dt>
                                        <dd className='flex col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>
                                            <button className='!text-[#535353] flex items-center' onClick={() => setOpenEditRollingCommision(true)}>
                                                <svg fill='#535353' className='w-[15px] h-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                                                </svg>
                                            </button>
                                            <Modal title={'Rolling Commission - aura99master'} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]' onCancel={() => setOpenEditRollingCommision(false)} footer={
                                                (
                                                    <div className='col-span-12 flex items-center justify-end p-4 border-[none] pt-0'>
                                                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="m-[5px] text-[#fff] pointer-events-none bg-[#0d6efd] border-[#0d6efd] opacity-[.65] font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]" disabled="">Submit</button>
                                                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="bg-[linear-gradient(-180deg,_#b8beca_0%,_#989595_100%)] font-bold !px-[10px] !py-[5px] !text-[.875rem] m-[5px] text-[#212529] text-center no-underline align-middle border-[1px] border-[solid] border-[transparent] rounded-[.375rem]">Cancel</button>
                                                    </div>
                                                )
                                            } open={openEditRollingCommision} >
                                                <div className='grid grid-cols-12 p-[1rem]'>
                                                    <div className='col-span-12 mb-[1rem]'>
                                                        <div className='grid grid-cols-12'>
                                                            <div className='col-span-3 px-[10px] py-[7px]'>
                                                                Fancy
                                                            </div>
                                                            <div className='col-span-8 px-[10px]'>
                                                                <input name="rfancyCommission" placeholder="Fancy Rolling Commission.." type="text" className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 mb-[1rem]'>
                                                        <div className='grid grid-cols-12'>
                                                            <div className='col-span-3 px-[10px] py-[7px]'>
                                                                Matka
                                                            </div>
                                                            <div className='col-span-8 px-[10px]'>
                                                                <input name="rfancyCommission" placeholder="Matka Rolling Commission.." type="text" className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 mb-[1rem]'>
                                                        <div className='grid grid-cols-12'>
                                                            <div className='col-span-3 px-[10px] py-[7px]'>
                                                                Casino
                                                            </div>
                                                            <div className='col-span-8 px-[10px]'>
                                                                <input name="rfancyCommission" placeholder="Casino Rolling Commission.." type="text" className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 mb-[1rem]'>
                                                        <div className='grid grid-cols-12'>
                                                            <div className='col-span-3 px-[10px] py-[7px]'>
                                                                Sportbook
                                                            </div>
                                                            <div className='col-span-8 px-[10px]'>
                                                                <input name="rfancyCommission" placeholder="Sportbook Rolling Commission.." type="text" className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 mb-[1rem]'>
                                                        <div className='grid grid-cols-12'>
                                                            <div className='col-span-3 px-[10px] py-[7px]'>
                                                                Bookmaker
                                                            </div>
                                                            <div className='col-span-8 px-[10px]'>
                                                                <input name="rfancyCommission" placeholder="Bookmaker Rolling Commission.." type="text" className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 mb-[1rem]'>
                                                        <div className='grid grid-cols-12'>
                                                            <div className='col-span-3 px-[10px] py-[7px]'>
                                                                Virtual Sports
                                                            </div>
                                                            <div className='col-span-8 px-[10px]'>
                                                                <input name="rfancyCommission" placeholder="Virtual Sports Rolling Commission.." type="text" className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 mb-[1rem]'>
                                                        <div className='grid grid-cols-12'>
                                                            <div className='col-span-3 px-[10px] py-[7px]'>
                                                                Password
                                                            </div>
                                                            <div className='col-span-8 px-[10px]'>
                                                                <Input.Password id='oldPassword' name='oldPassword' required className='rolling-commission-password-inp' placeholder="Old Password.." />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Modal>
                                            <button className='text-[#535353] fill-[#535353] flex items-center ' onClick={() => setOpenRollingCommission(true)}>
                                                <i className="fa fa-eye fa-lg ms-2"></i>
                                            </button>
                                            <Modal title={'Rolling Commission'} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]' onCancel={() => setOpenRollingCommission(false)} footer={null} open={openRollingCommission} >
                                                <div className='grid grid-cols-12'>
                                                    <div className='col-span-12 rounded-b-[.3rem] !bg-[#ffffff] !text-[#23282c] p-4'>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Fancy
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span> 0</span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Matka
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span>0</span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Casino
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span>0</span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Binary
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Sportbook
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span>0</span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Bookmaker
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span>0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </dd>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Agent Rolling Commission</dt>
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>
                                            <button className='text-[#535353] ml-[10px] ' onClick={() => setOpenAgentRollingCommission(true)}>
                                                <i className="fa fa-eye fa-lg"></i>
                                            </button>
                                            <Modal title={'Agent Rooling Commission'} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]' onCancel={() => setOpenAgentRollingCommission(false)} footer={null} open={openAgentRollingCommission} >
                                                <div className='grid grid-cols-12'>
                                                    <div className='col-span-12 rounded-b-[.3rem] !bg-[#ffffff] !text-[#23282c] p-4'>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Fancy
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span> 0</span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Matka
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span>0</span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Casino
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span>0</span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Binary
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Sportbook
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span>0</span>
                                                            </div>
                                                        </div>
                                                        <div className='flex mb-[4px] border-[1px] border-[solid] border-[#000] !text-[#23282c]'>
                                                            <div className='w-[32%] lg:w-[23%] pl-[10px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                Bookmaker
                                                            </div>
                                                            <div className='w-[auto] pr-[25px] py-[7px] mb-0 [font-size:inherit] leading-normal font-bold !text-[#23282c]'>
                                                                <span>0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </dd>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Currency</dt>
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'> INR</dd>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Partnership</dt>
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>  {userInfo?.partnership} </dd>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Mobile Number</dt>
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'> {userInfo?.phone} </dd>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Password</dt>
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>
                                            <span className='mr-4'>*********</span>
                                            <button className='!text-[#535353]' onClick={() => setOpenEdit(true)}>
                                                <span className='flex items-center gap-1 text-[#535353] '><TfiPencilAlt /></span>
                                            </button>
                                            <Modal className='password-model relative top-1 lg:top-7 lg:!w-[34vw]'
                                                footer={[
                                                    <div className='col-span-12 gap-2 flex flex-shrink-0 flex-wrap items-center justify-end p-[1rem] border-t-[1px] border-t-[#dee2e6]'>
                                                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="m-[5px] text-[#fff]  bg-[#0d6efd] border-[#0d6efd]  font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]" disabled={button} onClick={() => changePassword()}>Confirm</button>
                                                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="bg-[linear-gradient(-180deg,_#b8beca_0%,_#989595_100%)] font-bold !px-[10px] !py-[5px] !text-[.875rem] m-[5px] text-[#212529] text-center no-underline align-middle border-[1px] border-[solid] border-[transparent] rounded-[.375rem]" onClick={() => setOpenEdit(false)}>No</button>
                                                    </div>
                                                ]}
                                                onCancel={() => setOpenEdit(false)}
                                                open={openEdit} >
                                                <div className='grid grid-cols-12'>
                                                    <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-t-[5px] h-[35px] bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                                        <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Change Password</h5>
                                                        <button type="button" onClick={() => setOpenEdit(false)} >
                                                            <span className='text-[1.3125rem] font-bold'>×</span>
                                                        </button>
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
                                                    </div>

                                                </div>
                                            </Modal>
                                        </dd>

                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
