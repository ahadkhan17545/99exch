import '../../App.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Appconfig from '../../config/config'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
import { Modal, Input } from 'antd';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import moment from "moment";

function Dashboard() {

    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userdata'))

    const [user_nameValidationError, setUser_NameValidationError] = useState("Please enter old password");
    const [passwordValidationError, setPasswordValidationError] = useState("Please enter new password");
    const [conpasswordValidationError, setConPasswordValidationError] = useState("Please check your confirm password");


    const [liveChartData, setLiveChartData] = useState([]);
    const [backupChartData, setBackupChartData] = useState([]);

    
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
        if (formData.con_password.trim() !== formData.new_password.trim()) {
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

    useEffect(() => {
        filterProfitLoss();
        filterProfitLossBackup();

    }, [])


    const filterProfitLoss = async (e) => {

        var data = JSON.stringify({
            "user_id": userInfo && userInfo?._id,
            "from_date": moment().format('YYYY-MM-DD'),
            "to_date": moment().format('YYYY-MM-DD'),
            "user_type": userInfo && userInfo.user_type
        });

        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}reports/auraEventTypesWisePLNew`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                try {
                    let eventPl = response.data.resultData;
                    eventPl = eventPl.map(item => ({
                        y: parseInt(Math.abs(item.totalPL)),
                        name: item.event_type == 4 ? "Cricket" : item.event_type == 2 ? "Tennis" : item.event_type == 1 ? "Soccer" : "Casino"
                    }))
                    setLiveChartData(eventPl);
                } catch (e) {
                    // postErrorToslack(e.message);
                }
            })
            .catch(function (error) {
                console.log(error);
                // postErrorToslack(error.message);
            });
    }
    const filterProfitLossBackup = async (e) => {

        var data = JSON.stringify({
            "user_id": userInfo && userInfo?._id,
            "from_date": moment().subtract(3, 'month').format('YYYY-MM-DD'),
            "to_date": moment().format('YYYY-MM-DD'),
            "user_type": userInfo && userInfo.user_type
        });

        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}reports/auraEventTypesWisePLNew`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                try {
                    let eventPl = response.data.resultData;
                    eventPl = eventPl.map(item => ({
                        y: parseInt(Math.abs(item.totalPL)),
                        name: item.event_type == 4 ? "Cricket" : item.event_type == 2 ? "Tennis" : item.event_type == 1 ? "Soccer" : "Casino"
                    }))
                    setBackupChartData(eventPl);
                } catch (e) {
                    // postErrorToslack(e.message);
                }
            })
            .catch(function (error) {
                console.log(error);
                // postErrorToslack(error.message);
            });
    }

    const options = {
        title: {
            text: 'Backup Sports Profit',
        },
        series: [
            {
                type: 'pie',
                data: backupChartData,
            },
        ],
    };

    const optionsLive = {
        title: {
            text: 'Live Sports Profit',
        },
        series: [
            {
                type: 'pie',
                data: liveChartData,
            },
        ],
    };


    return (
        <>
            <NotificationContainer />
            {
                userInfo &&
                userInfo?.is_password_update != "Yes" &&
                <Modal className='password-model relative top-1 lg:top-7 lg:!w-[34vw]'
                    footer={[
                        <div className='col-span-12 gap-2 flex flex-shrink-0 flex-wrap items-center justify-end p-[1rem] border-t-[1px] border-t-[#dee2e6]'>
                            <button type='submit ' className='text-white bg-[#1c272d] hover:!bg-transparent hover:text-inherit border-[1px] border-[#1c272d]   text-[.875rem] rounded-[.25rem] px-[10px] py-[5px]   '
                                onClick={() => changePassword()}
                            >
                                Confirm
                            </button>

                        </div>
                    ]}
                    mask={false} open={true} >
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-t-[5px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Change Password</h5>
                        </div>
                        <div className='col-span-12 !bg-[#ffffff] !text-[#23282c] relative flex-auto p-4'>
                            <div className='grid grid-cols-12 lg:gap-x-6 '>
                                <div className='col-span-12 lg:col-span-6'>
                                    <div className='mb-4 !text-[#23282c]'>
                                        <label className='inline-block mb-[.5rem] !text-[#23282c]' for="oldPassword">Old Password </label>
                                        <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                            <Input.Password id='oldPassword' name='oldPassword'
                                                onChange={(e) => setOldPassword(e.target.value)}
                                                required className='antd-password' placeholder="Old Password.." />
                                            <span className="absolute top-[25px] oldpassword-error hidden  text-[0.813rem] text-[red] leading-[14px]">
                                                <div className='leading-[38px] '>{user_nameValidationError}</div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <div className='mb-4 !text-[#23282c]'>
                                        <label className='inline-block mb-[.5rem] !text-[#23282c]' for="newPassword">New Password  </label>
                                        <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                            <Input.Password id='newPassword' name='newPassword'
                                                onChange={(e) => setNewPassword(e.target.value)} required className='antd-password' pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&]{8,}$' placeholder="New Password.." />
                                            <span className="absolute top-[25px] newpassword-error hidden  text-[0.813rem] text-[red] leading-[14px]">
                                                <div className='leading-[38px] '>{passwordValidationError}</div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-12 lg:col-span-6'>
                                    <div className='mb-4 !text-[#23282c]'>
                                        <label className='inline-block mb-[.5rem] !text-[#23282c]' for="confirmPass">Confirm Password  </label>
                                        <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                            <Input.Password id='confirmPass' name='confirmPass'
                                                onChange={(e) => setConPassword(e.target.value)} required className='antd-password' placeholder="Confirm Password.." />
                                            <span className="absolute top-[25px] conpassword-error hidden  text-[0.813rem] text-[red] leading-[14px]">
                                                <div className='leading-[38px] '>{conpasswordValidationError}</div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal>
            }

            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px] lg:px-[17px] ' >
                <div className='col-span-12 lg:col-span-6 px-[16px] lg:px-[13px]'>
                    <div className='mb-[1.5rem] w-full'>
                        <div className='font-bold text-[0.938rem] leading-[23px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] px-[10px] py-[5px] text-[#ffffff] rounded-tl-[calc(.25rem-1px)] rounded-br-[0] rounded-tr-[calc(.25rem-1px)] rounded-bl-[0]'>
                            Live Sports Profit
                        </div>
                        <div className='p-[0px flex-auto] w-full border-[1px] border-[#0000002d] bg-[#ffffff] flex items-center justify-center'>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={optionsLive}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-6 px-[16px] lg:px-[13px]  '>
                    <div className='mb-[1.5rem] w-full'>
                        <div className='font-bold text-[0.938rem] leading-[23px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] px-[10px] py-[5px] text-[#ffffff] rounded-tl-[calc(.25rem-1px)] rounded-br-[0] rounded-tr-[calc(.25rem-1px)] rounded-bl-[0]'>
                            Backup Sports Profit
                        </div>
                        <div className='p-[0px flex-auto] w-full border-[1px] border-[#0000002d] bg-[#ffffff] flex items-center justify-center'>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                            />
                        </div>
                    </div>
                </div>

            </div >


        </>
    );
}

export default Dashboard;
