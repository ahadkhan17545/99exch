import '../../../App.css'
import { useEffect, useState } from 'react';
import { Modal, Input, Form, Button } from 'antd';
import { TfiPencilAlt } from "react-icons/tfi";
import Appconfig from '../../../config/config'
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function Profile({ user_id }) {
    const userInfos = JSON.parse(localStorage.getItem('userdata'))
    const [commisionForm] = Form.useForm();
    const [rollingForm] = Form.useForm();
    const [exposerLimitForm] = Form.useForm();
    const [phoneNoForm] = Form.useForm();
    const [passwordForm] = Form.useForm();

    const [userInfo, setUserInfo] = useState('')
    const [commissionModal, setCommissionModal] = useState(false)
    const [rollingModal, setRollingModal] = useState(false)
    const [exposureLimitModal, setExposureLimitModal] = useState(false)
    const [phoneNoModal, setPhoneNoModal] = useState(false)
    const [passwordModal, setPasswordModal] = useState(false)
    function getUsersData() {
        var data = JSON.stringify({
            user_id: user_id,
        });
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}users/getOneUserById`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,

        };
        axios(config)
            .then(function (response) {
                if (response.data.resultData) {
                    setUserInfo(response.data.resultData)
                }
            })
            .catch(function (error) {
                //            console.log(error);
            });
    }
    useEffect(() => {
        getUsersData()
    }, [])

    const handleEditCommission = async (values) => {


        if (userInfos.password == values.password) {
            var data = JSON.stringify({
                "user_id": user_id,
                "UpdateField": {
                    "commission": values.commission
                }
            });
            var config = {
                method: 'post',
                url: `${Appconfig.apiUrl}users/updateUserInfo`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    if (response.data.result != '0') {
                        setCommissionModal(false)
                        getUsersData()
                        commisionForm.resetFields();
                        NotificationManager.success('Commission Updated Successfully.', '', 3000);
                    }
                    else {
                        console.log(response)
                        NotificationManager.error(`${response.data.resultMessage}`, '', 3000);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            NotificationManager.error('Password Not Matched With Login Id', '', 3000);

        }
    }
    const onCommissionFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleEditRollingCommission = async (values) => {

        if (userInfos.password == values.password) {

            var data = JSON.stringify({
                "user_id": user_id,
                "UpdateField": {
                    "rolling_commission_fancy": values.rolling_commission_fancy,
                    "rolling_commission_matka": values.rolling_commission_matka,
                    "rolling_commission_casino": values.rolling_commission_casino,
                    "rolling_commission_sportbook": values.rolling_commission_sportbook,
                    "rolling_commission_bookmaker": values.rolling_commission_bookmaker,
                    "rolling_commission_virtualsport": values.rolling_commission_virtualsport,
                }
            });
            // console.log(data)
            // return false
            var config = {
                method: 'post',
                url: `${Appconfig.apiUrl}users/updateUserInfo`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    console.log(response)
                    if (response.data.result != '0') {
                        setRollingModal(false)
                        getUsersData()
                        rollingForm.resetFields();
                        NotificationManager.success('Rolling Commission Updated Successfully.', '', 3000);
                    }
                    else {
                        console.log(response)
                        NotificationManager.error(`${response.data.resultMessage}`, '', 3000);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            NotificationManager.error('Password Not Matched With Login Id', '', 3000);

        }
    }
    const onRollingnFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleExposerLimit = async (values) => {

        if (userInfos.password == values.password) {
            var data = JSON.stringify({
                "user_id": user_id,
                "UpdateField": {
                    "exposer_limit": values.exposer_limit
                }
            });
            var config = {
                method: 'post',
                url: `${Appconfig.apiUrl}users/updateUserInfo`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    console.log(response)
                    if (response.data.result != '0') {
                        NotificationManager.success('Exposer Limit Updated Successfully.', '', 3000);
                        setExposureLimitModal(false)
                        getUsersData()
                        exposerLimitForm.resetFields();
                    }
                    else {
                        console.log(response)
                        NotificationManager.error(`${response.data.resultMessage}`, '', 3000);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            NotificationManager.error('Password Not Matched With Login Id', '', 3000);

        }
    }
    const handleChangePhone = async (values) => {

        if (userInfos.password == values.password) {
            var data = JSON.stringify({
                "user_id": user_id,
                "UpdateField": {
                    "phone": values.phone
                }
            });
            var config = {
                method: 'post',
                url: `${Appconfig.apiUrl}users/updateUserInfo`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    console.log(response)
                    if (response.data.result != '0') {
                        NotificationManager.success('Mobile Number Updated Successfully.', '', 3000);
                        setPhoneNoModal(false)
                        getUsersData()
                        phoneNoForm.resetFields();
                    }
                    else {
                        console.log(response)
                        NotificationManager.error(`${response.data.resultMessage}`, '', 3000);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            NotificationManager.error('Password Not Matched With Login Id', '', 3000);

        }
    }
    const handleChangePassword = async (values) => {

        if (userInfos.password != values.password){
            NotificationManager.success('Password Not Matched With Login Id.', '', 3000);
            return;
        }

        if (values.new_password != values.confirm_password){
            NotificationManager.success('Confirm Password Not Matched.', '', 3000);
            return;
        }

        if (userInfos.password == values.password) {

            var data = JSON.stringify({
                "user_id": user_id,
                "UpdateField": {
                    "password": values.new_password,
                },
                "updateHistroy": {
                    'master_id': userInfo.master_id,
                    'masters': userInfo.masters,
                    'name': userInfos?.name,
                    'user_name': userInfos?.user_name,
                    'user_type': userInfos?.user_type
                }
            });
            // console.log('data', data)
            // return false;
            var config = {
                method: 'post',
                url: `${Appconfig.apiUrl}users/auraUpdateUserInfo`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    console.log(response)
                    if (response.data.result != '0') {
                        NotificationManager.success('Password Changed Successfully.', '', 3000);
                        setPhoneNoModal(false)
                        setPasswordModal(false)
                        getUsersData()
                        phoneNoForm.resetFields();
                    }
                    else {
                        console.log(response)
                        NotificationManager.error(`${response.data.resultMessage}`, '', 3000);
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
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>{userInfo && userInfo.user_name}</dd>
                                        {/* <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Commission</dt>
                                        <dd className='flex col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>
                                            {userInfo && userInfo.commission}
                                            <button className='!text-[#535353] flex items-center ml-[15px]' onClick={() => setCommissionModal(true)}>
                                                <svg fill='#535353' className='w-[15px] h-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                                                </svg>
                                            </button>
                                            <Modal title={'Update Commission'} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]' onCancel={() => setCommissionModal(false)}
                                                footer={null
                                                } open={commissionModal} >
                                                <div className='grid grid-cols-12'>
                                                    <div className='col-span-12'>
                                                        <Form
                                                            form={commisionForm}
                                                            layout="vertical"
                                                            className='commision-modal m-[1rem] lg:m-[20px]'
                                                            name="basic"
                                                            labelCol={{
                                                                span: 24,
                                                            }}
                                                            wrapperCol={{
                                                                span: 24,
                                                            }}
                                                            onFinish={handleEditCommission}
                                                            onFinishFailed={onCommissionFinishFailed}
                                                            autoComplete="off"
                                                        >
                                                            <Form.Item
                                                                label="Commission"
                                                                name="commission"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'Commission is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input placeholder='Commission...' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                name="password"
                                                                label="Your Password "
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'User Password is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input.Password placeholder='Your Password..' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                wrapperCol={{
                                                                    span: 24,
                                                                }}
                                                                className='flex items-center justify-end'
                                                            >
                                                                <Button type="primary"
                                                                    htmlType="submit"
                                                                    className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', }}>
                                                                    Yes
                                                                </Button>
                                                                <Button type="primary"
                                                                    className='mt-[1rem] ml-[10px]' style={{ background: 'linear-gradient(-180deg, #b8beca 0%, #989595 100%)', color: '#212529' }}>
                                                                    No
                                                                </Button>
                                                            </Form.Item>
                                                        </Form>
                                                    </div>
                                                </div>

                                            </Modal>
                                        </dd>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Rolling Commission</dt>
                                        <dd className='flex col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>
                                            <button className='!text-[#535353] flex items-center' onClick={() => setRollingModal(true)}>
                                                <svg fill='#535353' className='w-[15px] h-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                                                </svg>
                                            </button>
                                            <Modal title={`Rolling Commission - ${userInfo.user_name}`} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]' onCancel={() => setRollingModal(false)} footer={null} open={rollingModal} >
                                                <div className='grid grid-cols-12'>
                                                    <div className='col-span-12'>
                                                        <Form
                                                            form={rollingForm}
                                                            // layout="vertical"
                                                            className='rolling-modal m-[20px]'
                                                            name="basic"
                                                            labelCol={{
                                                                span: 5,
                                                            }}
                                                            wrapperCol={{
                                                                span: 15,
                                                            }}
                                                            onFinish={handleEditRollingCommission}
                                                            onFinishFailed={onRollingnFinishFailed}
                                                            autoComplete="off"
                                                            initialValues={{
                                                                rolling_commission_fancy: userInfo.rolling_commission_fancy,
                                                                rolling_commission_matka: userInfo.rolling_commission_matka,
                                                                rolling_commission_casino: userInfo.rolling_commission_casino,
                                                                rolling_commission_sportbook: userInfo.rolling_commission_sportbook,
                                                                rolling_commission_bookmaker: userInfo.rolling_commission_bookmaker,
                                                                rolling_commission_virtualsport: userInfo.rolling_commission_virtualsport,
                                                            }}
                                                        >
                                                            <Form.Item
                                                                label="Fancy"
                                                                name="rolling_commission_fancy"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message: 'Commission is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input type='number' placeholder='Fancy Rolling Commission...' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                label="Matka"
                                                                name="rolling_commission_matka"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message: 'Commission is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input type='number' placeholder='Matka Rolling Commission...' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                label="Casino"
                                                                name="rolling_commission_casino"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message: 'Commission is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input type='number' placeholder='Casino Rolling Commission...' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                label="Sportbook"
                                                                name="rolling_commission_sportbook"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message: 'Commission is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input type='number' placeholder='Sportbook Rolling Commission...' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                label="Bookmaker"
                                                                name="rolling_commission_bookmaker"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message: 'Commission is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input type='number' placeholder='Bookmaker Rolling Commission...' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                label="Virtual Sports"
                                                                name="rolling_commission_virtualsport"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message: 'Commission is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input type='number' placeholder='Virtual Sports Rolling Commission...' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                name="password"
                                                                label="Password "
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message: 'User Password is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input.Password placeholder='Your Password..' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                wrapperCol={{
                                                                    span: 24,
                                                                }}
                                                                className='flex items-center justify-end'
                                                            >
                                                                <Button type="primary"
                                                                    htmlType="submit"
                                                                    className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', }}>
                                                                    Submit
                                                                </Button>
                                                                <Button type="primary"
                                                                    className='mt-[1rem] ml-[10px]' style={{ background: 'linear-gradient(-180deg, #b8beca 0%, #989595 100%)', color: '#212529' }}>
                                                                    Cancel
                                                                </Button>
                                                            </Form.Item>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </dd> */}
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Currency</dt>
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'> IRP</dd>
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Exposure Limit</dt>
                                        <dd className='flex col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>
                                            {userInfo && userInfo.exposer_limit}
                                            <button className='!text-[#535353] flex items-center ml-[15px]' onClick={() => setExposureLimitModal(true)}>
                                                <svg fill='#535353' className='w-[15px] h-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                                                </svg>
                                            </button>
                                            <Modal title={`Edit Exposure Limit - ${userInfo.user_name}`} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]' onCancel={() => setExposureLimitModal(false)} footer={null} open={exposureLimitModal} >
                                                <div className='grid grid-cols-12'>
                                                    <div className='col-span-12'>
                                                        <Form
                                                            form={exposerLimitForm}
                                                            className='rolling-modal m-[1rem] ml-[2rem] lg:m-[20px]'
                                                            name="basic"
                                                            labelCol={{
                                                                span: 5,
                                                            }}
                                                            wrapperCol={{
                                                                span: 15,
                                                            }}
                                                            onFinish={handleExposerLimit}
                                                            onFinishFailed={onRollingnFinishFailed}
                                                            autoComplete="off"
                                                        >
                                                            <div className='grid grid-cols-12 mb-[1rem]'>
                                                                <div className='col-span-12 text-[0.813rem]'>
                                                                    Current
                                                                </div>
                                                                <div className='col-span-12'>
                                                                    <b>{userInfo.exposer_limit}</b>
                                                                </div>

                                                            </div>
                                                            <Form.Item
                                                                label="New"
                                                                name="exposer_limit"
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message: 'Exposer Limit is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input type='number' />
                                                            </Form.Item>
                                                            <Form.Item
                                                                name="password"
                                                                label="Password "
                                                                rules={[
                                                                    {
                                                                        required: false,
                                                                        message: 'User Password is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input.Password />
                                                            </Form.Item>
                                                            <Form.Item
                                                                wrapperCol={{
                                                                    span: 24,
                                                                }}
                                                                className='flex items-center justify-end'
                                                            >
                                                                <Button type="primary"
                                                                    htmlType="submit"
                                                                    className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', }}>
                                                                    Submit
                                                                </Button>
                                                                <Button type="primary"
                                                                    className='mt-[1rem] ml-[10px]' style={{ background: 'linear-gradient(-180deg, #b8beca 0%, #989595 100%)', color: '#212529' }}>
                                                                    Cancel
                                                                </Button>
                                                            </Form.Item>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </dd>
                                        {/* <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Mobile Number</dt>
                                        <dd className='flex col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>
                                            {userInfo && userInfo.phone ? userInfo.phone : 'Not Found'}
                                            <button className='!text-[#535353] flex items-center ml-[15px]' onClick={() => setPhoneNoModal(true)}>
                                                <svg fill='#535353' className='w-[15px] h-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                                                </svg>
                                            </button>
                                            <Modal title={`Change Mobile Number`} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]' onCancel={() => setPhoneNoModal(false)} footer={null} open={phoneNoModal} >
                                                <Form
                                                    form={phoneNoForm}
                                                    className=' m-[20px]'
                                                    layout='vertical'
                                                    name="basic"
                                                    labelCol={{
                                                        span: 24,
                                                    }}
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                    onFinish={handleChangePhone}
                                                    autoComplete="off"
                                                >
                                                    <div className='grid grid-cols-12 gap-x-[20px]'>
                                                        <div className='col-span-12 lg:col-span-6'>
                                                            <Form.Item
                                                                name="password"
                                                                label="Your Password "
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'User Password is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input.Password placeholder='Your Password..' />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='col-span-12 lg:col-span-6'>
                                                            <Form.Item
                                                                label="Mobile Number"
                                                                name="phone"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'Mobile Numbe is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input type='number' placeholder='Mobile Number' />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='col-span-12'>
                                                            <Form.Item
                                                                wrapperCol={{
                                                                    span: 24,
                                                                }}
                                                                className='flex items-center justify-end'
                                                            >
                                                                <Button type="primary"
                                                                    htmlType="submit"
                                                                    className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', }}>
                                                                    Yes
                                                                </Button>
                                                                <Button type="primary"
                                                                    className='mt-[1rem] ml-[10px]' style={{ background: 'linear-gradient(-180deg, #b8beca 0%, #989595 100%)', color: '#212529' }}>
                                                                    No
                                                                </Button>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </Modal>
                                        </dd> */}
                                        <dt className="col-span-12 lg:col-span-3 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] font-bold text-[0.813rem]">Password</dt>
                                        <dd className='col-span-12 lg:col-span-9 pb-[15px] px-[10px] mb-[15px] border-b-[1px] border-b-[#ccc] text-[0.813rem]'>
                                            <span className='mr-4'>*********</span>
                                            <button className='!text-[#535353]' onClick={() => setPasswordModal(true)}>
                                                <span className='flex items-center gap-1 text-[#535353] '><TfiPencilAlt /></span>
                                            </button>
                                            <Modal title={`Change Password`} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]' onCancel={() => setPasswordModal(false)} footer={null} open={passwordModal} >
                                                <Form
                                                    form={passwordForm}
                                                    className=' m-[20px]'
                                                    layout='vertical'
                                                    name="basic"
                                                    labelCol={{
                                                        span: 24,
                                                    }}
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                    onFinish={handleChangePassword}
                                                    autoComplete="off"
                                                >
                                                    <div className='grid grid-cols-12 gap-x-[20px]'>
                                                        <div className='col-span-12 lg:col-span-6'>
                                                            <Form.Item
                                                                name="password"
                                                                label="Your Password "
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'User Password is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input.Password />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='col-span-12 lg:col-span-6'>
                                                            <Form.Item
                                                                name="new_password"
                                                                label="New Password"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'Mobile Numbe is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input.Password />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='col-span-12 lg:col-span-6'>
                                                            <Form.Item
                                                                name="confirm_password"
                                                                label="Confirm Password"
                                                                dependencies={['new_password']}
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'Please confirm your password!',
                                                                    },
                                                                    ({ getFieldValue }) => ({
                                                                        validator(_, value) {
                                                                            if (!value || getFieldValue('new_password') === value) {
                                                                                return Promise.resolve();
                                                                            }
                                                                            return Promise.reject(new Error('Passwords is not matched.'));
                                                                        },
                                                                    }),
                                                                ]}
                                                            >
                                                                <Input.Password />
                                                            </Form.Item>
                                                        </div>
                                                        <div className='col-span-12'>
                                                            <Form.Item
                                                                wrapperCol={{
                                                                    span: 24,
                                                                }}
                                                                className='flex items-center justify-end'
                                                            >
                                                                <Button type="primary"
                                                                    htmlType="submit"
                                                                    className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', }}>
                                                                    Confirm
                                                                </Button>
                                                                <Button type="primary"
                                                                    className='mt-[1rem] ml-[10px]' style={{ background: 'linear-gradient(-180deg, #b8beca 0%, #989595 100%)', color: '#212529' }}>
                                                                    No
                                                                </Button>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </Modal>
                                        </dd>

                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}

export default Profile;
