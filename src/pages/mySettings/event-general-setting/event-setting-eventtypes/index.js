import '../../../../App.css'
import { useState, useEffect } from 'react';
import {  Table } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
import Appconfig from '../../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


function EventSettingEventNames() {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))

    const [EventList, setEventList] = useState([]);

    useEffect(() => {
        getEventList();
    }, [])

    function getEventList() {

        var data = JSON.stringify({
            "user_id": userInfo._id
        });

        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}blockMarket/blockEventTypes`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setEventList(response.data.resultData);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const columns = [
        {
            title: 'Name',
            sorter: true,
            render: (_, record) => (
                record.event_type == 4 ?
                    <span className='font-extrabold text-[#315195] text-[0.813rem] ml-[5px]'>{<Link to={"/event-setting-market-events/" + record.event_type} >{record.name}</Link>}</span>
                    :
                    record.event_type == 2 ?
                        <span className='font-extrabold text-[#315195] text-[0.813rem] ml-[5px]'>{<Link to={"/event-setting-market-events/" + record.event_type} >{record.name}</Link>}</span>
                        :
                        record.event_type == 1 ?
                            <span className='font-extrabold text-[#315195] text-[0.813rem] ml-[5px]'>{<Link to={"/event-setting-market-events/" + record.event_type} >{record.name}</Link>}</span>
                            :
                            <span className='font-extrabold text-[#000000] text-[0.813rem] ml-[5px]'>{record.name}</span>

            ),
        },

    ];

    return (
        <>
            <NotificationContainer />
            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto lg:w-full  '>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Event General Setting</h5>
                        </div>
                        <div className='col-span-12 '>

                            <div className='bg-[#fff] border-[1px] border-[#0000002d] '>

                                <div className='p-[0.75rem] flex-auto '>
                                    <Table

                                        columns={columns}
                                        className='downline-list'
                                        bordered
                                        dataSource={EventList}
                                        pagination={false}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default EventSettingEventNames;
