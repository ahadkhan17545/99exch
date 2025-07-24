import '../../../../App.css'
import { useState, useEffect } from 'react';
import {  Table,  Switch } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
import Appconfig from '../../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


function BlockMarket() {

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


    function blockUnblockSports(event_type) {
        var data = JSON.stringify({
            "user_id": userInfo._id,
            "event_id": "0",
            "market_id": "0",
            "fancy_id": "0",
            "event_type_id": event_type,
            "type": "Sport"

        });

        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}blockMarket/block&unblockMarket`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                getEventList();
                NotificationManager.success(response.data.resultMessage, '', 3000);
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
                <span className='font-extrabold text-[#315195] text-[0.813rem] ml-[5px]'>{<Link to={"/block-market-events/" + record.event_type} >{record.name}</Link>}</span>
            ),
        },
        {
            title: 'Status',
            sorter: true,
            render: (_, record) => (
                <div className='flex items-center gap-x-4 ' >
                    <span className={`flex items-center gap-1 cursor-pointer ${record.is_blocked !== "Yes" ? 'text-[green]' : 'text-[red]'}`}>{record.is_blocked !== "Yes" ? 'Active' : 'Inactive'}</span>
                </div>
            )

        },

        {
            title: 'Action',
            sorter: false,
            render: (_, record) => (
                <div className='flex items-center gap-x-4'>
                    <Switch
                        checked={record.is_blocked === "Yes" ? false : true}
                        onChange={() => blockUnblockSports(record.event_type)}
                    />
                </div>
            )
        },

    ];

    return (
        <>
            <NotificationContainer />
            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto lg:w-full  '>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Block Market</h5>
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


export default BlockMarket;
