import '../../../App.css'
import { useState, useEffect } from 'react';
import { Modal, Input, Table } from 'antd';
import axios from 'axios';
import Appconfig from '../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


function CasinoUses() {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [button, setButton] = useState(false)

    const [formData, setFormData] = useState({
        casino_limit: "",
    });
    const [id, setId] = useState('')
    const [totalUserPl, setTotalUserPL] = useState({})

    
    function setCasinoLimit(value) {
        setFormData({
            ...formData,
            casino_limit: value
        })
    }

    // function getCasinoLimit() {
    //     var data = JSON.stringify({
    //         site_code: userInfo?.site_code,
    //         user_id: userInfo?._id,
    //     });

    //     var config = {
    //         method: "post",
    //         url: `${Appconfig.apiUrl}casinoLimit/getCasinoLimit`,
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         data: data,
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             if (response.data.result) {
    //                 setFormData(response?.data?.resultData)
    //                 setId(response?.data?.resultData?._id)
    //             }
    //             else {
    //                 console.log(response)
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    function getWCOTotalUserLoss() {
        var data = JSON.stringify({
            site_code: userInfo?.site_code,
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}casinoLimit/getWCOTotalUserLoss`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    if(response.data.resultData.length > 0){
                        setTotalUserPL(response.data.resultData[0])
                        setFormData(response?.data?.resultData[0])
                        setId(response?.data?.resultData[0]?.casino_id)
                    }
                }
                else {
                    console.log(response)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function addCasinoLimit() {
        var config = {};
        var data = {};


        if (formData?.casino_limit.trim()) {
            setButton(true)

            if (id) {

                data = JSON.stringify({
                    _id: id,
                    data: {
                        casino_limit: formData?.casino_limit,
                    }
                });

                config = {
                    method: "post",
                    url: `${Appconfig.apiUrl}casinoLimit/updateCasinoLimit`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: data,
                };

            } else {

                data = JSON.stringify({
                    site_code: userInfo?.site_code,
                    user_id: userInfo?._id,
                    casino_limit: formData?.casino_limit,
                });
                // console.log('data',data);
                // return false;


                config = {
                    method: "post",
                    url: `${Appconfig.apiUrl}casinoLimit/addCasinoLimit`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: data,
                };

            }

            axios(config)
                .then(function (response) {
                    if (response.data.result) {
                        NotificationManager.success(response.data.resultMessage, '', 3000);
                        setButton(false)
                        getWCOTotalUserLoss();
                    } else {
                        NotificationManager.error(response.data.resultMessage, '', 3000);
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            NotificationManager.error('Message Is Required', '', 3000);

        }

    }

    useEffect(() => {
        // getCasinoLimit();
        getWCOTotalUserLoss();
    }, [])
    return (
        <>
            <NotificationContainer />

            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto  '>
                    <div className='lg:block w-full lg:w-[40vw] '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>{id ? 'Update' : 'Add'} Limit</h5>
                            </div>
                            <div className='col-span-12 '>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12 !bg-[#ffffff] !text-[#23282c] relative flex-auto p-4'>
                                        <div className='grid grid-cols-12 lg:gap-x-6 '>
                                            <div className='col-span-12 lg:col-span-6'>
                                            <label className='inline-block mb-[.5rem] !text-[#23282c]' style={{fontWeight:"bold"}} htmlFor="oldPassword">Total User Loss : <span style={{color : `${totalUserPl?.users_total_loss > 0 ? "green" : "red"}`}}>{totalUserPl?.users_total_loss}</span></label>

                                                <div className='mb-4 !text-[#23282c]'>
                                                    <label className='inline-block mb-[.5rem] !text-[#23282c]' htmlFor="oldPassword">Casino Max Limit </label>
                                                    <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                                        <Input id='casino_limit' name='casino_limit' required
                                                            onChange={(e) => setCasinoLimit(e.target.value)} value={formData?.casino_limit} className='antd-password' placeholder="0" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='col-span-12 gap-2 flex flex-shrink-0 flex-wrap items-center justify-end'>
                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="m-[5px] text-[#fff]  bg-[#0d6efd] border-[#0d6efd]  font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]" disabled={button} onClick={() => addCasinoLimit()}>{id ? 'Update' : 'Add'}</button>
                                        </div>
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


export default CasinoUses;
