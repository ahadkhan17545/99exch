import '../../../App.css'
import { useState, useEffect } from 'react';
import {  Input } from 'antd';
import axios from 'axios';
import Appconfig from '../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useSelector, useDispatch } from 'react-redux';
// import { getUserBal } from '../../../redux/slice/user/userSlice'

function AdminFund() {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [button, setButton] = useState(false);
    const dispatch = useDispatch();
    // const userbal = useSelector((state) => state.userbal); // Use selector to access state
    // const balance = userbal?.userBalance?.balance;
    const [balance, setBalance] = useState(0)

    const [formData, setFormData] = useState({
        amount: "",
        password: "",
        remarks: "",
    });
    const handleSetFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    function getBalance() {
        var data = JSON.stringify({
            user_id: userInfo?._id,
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}ledger/getUserBalance`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    setBalance(response.data.resultData.balance)
                }
                else {
                    console.log(response)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getBalance()
    },[])

    // function getBalance() {
    //     if (userInfo) {
    //         dispatch(getUserBal({
    //             user_id: userInfo?._id,
    //         }))
    //     }
    // }

    // useEffect(() => {
    //     if (userInfo) {
    //         dispatch(getUserBal({
    //             user_id: userInfo?._id,
    //         }))
    //     }

    // }, [userInfo?._id])



    function addFund() {
        var data = JSON.stringify({
            user_id: userInfo._id,
            password: formData.password,
            amount: formData.amount,
            remarks: formData.remarks,
        });
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}ledger/addFund`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                NotificationManager.success(response.data.message, '', 3000);
                setFormData({
                    amount: "",
                    password: "",
                    remarks: "",
                });
                getBalance()
                setButton(false);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password == userInfo.password) {
            setButton(true);
            addFund();
        }
        else {
            NotificationManager.error('Your Password Not Matched With System.', '', 3000);
        }
    };
   
    return (
        <>
            <NotificationContainer />
            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto  '>
                    <div className='lg:block w-full lg:w-[40vw] '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Admin Fund</h5>
                            </div>
                            <div className='col-span-12 !bg-[#ffffff] !text-[#23282c] relative flex-auto p-4'>
                                <div className='grid grid-cols-12 lg:gap-x-6 '>
                                    <div className='col-span-12 lg:col-span-6'>
                                        <div className='mb-4 !text-[#23282c]'>
                                            <label className='inline-block mb-[.5rem] !text-[#23282c]' for="current-balance">Current Balance </label>
                                            <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                                <Input id='current-balance' name='current-balance' required readOnly className='antd-password' value={balance && Number(balance).toFixed(2)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-12 lg:col-span-6'>
                                        <div className='mb-4 !text-[#23282c]'>
                                            <label className='inline-block mb-[.5rem] !text-[#23282c]' for="amount">Deposit Fund</label>
                                            <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                                <Input type='number' id='amount' name='amount' value={formData.amount} required className='antd-password' placeholder="Enter Deposit.." onChange={handleSetFormData} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-12 lg:col-span-6'>
                                        <div className='mb-4 !text-[#23282c]'>
                                            <label className='inline-block mb-[.5rem] !text-[#23282c]' for="remarks">Remarks </label>
                                            <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                                <Input id='remarks' value={formData.remarks} name='remarks' required className='antd-password' placeholder="Enter Remark.." onChange={handleSetFormData} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-12 lg:col-span-6'>
                                        <div className='mb-4 !text-[#23282c]'>
                                            <label className='inline-block mb-[.5rem] !text-[#23282c]' for="total-balance">Total Balance  </label>
                                            <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                                <Input id='total-balance' name='total-balance' required className='antd-password' readOnly value={balance && Number(balance).toFixed(2)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-12 lg:col-span-6'>
                                        <div className='mb-4 !text-[#23282c]'>
                                            <label className='inline-block mb-[.5rem] !text-[#23282c]' for="password">Password  </label>
                                            <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                                <Input.Password id='password' name='password' value={formData.password} required className='antd-password' placeholder="Enter Password.." onChange={handleSetFormData} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-12 lg:col-span-6 flex items-center'>
                                        <button type='button ' disabled={button} className='w-full text-white bg-[linear-gradient(180deg,_#2A3A43_27%,_#1C282D_83%)] text-[.875rem] rounded-[.25rem] px-[10px]  mt-[10px]  py-[5px] '
                                            onClick={(handleSubmit)}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}


export default AdminFund;
