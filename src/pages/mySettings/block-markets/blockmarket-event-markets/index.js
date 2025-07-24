import '../../../../App.css'
import { useState, useEffect } from 'react';
import { Modal, Table,  Switch, Button } from 'antd';
import {  useParams } from 'react-router-dom'
import axios from 'axios';
import Appconfig from '../../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


function BlockMarketEventsMarkets() {
    const params = useParams();

    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [marketList, setmarketList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventId, setEventId] = useState('');
    const [marketId, setMarketId] = useState('');
    const [marketName, setMarketName] = useState('');


    useEffect(() => {
        eventMarket(params.event_id)
    }, [])

    function eventMarket(eventId) {


        var data = JSON.stringify({
            "user_id": userInfo._id,
            "event_id": eventId
        });


        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}blockMarket/blockMarketTypes`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setmarketList(response.data.resultData);

            })
            .catch(function (error) {
                console.log(error);
            });


    }
    function blockUnblockMarket(event_id, market_id, market_name) {
        console.log([event_id, params.event_type_id, market_id]);
        var data = JSON.stringify({

            "user_id": userInfo._id,
            "event_id": event_id,
            "market_id": market_id,
            "fancy_id": "0",
            "event_type_id": params.event_type_id,
            "type": "Market",
            "oddsType": marketName == "Match Odds" || marketName == "Bookmaker" ? market_name : "Market"

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
                eventMarket(params.event_id)
                NotificationManager.success(response.data.resultMessage, '', 3000);

                setIsModalOpen(false);
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
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.market_name}</span>
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
                    {
                        record.is_blocked !== "Yes" ?
                            record.market_name == "Match Odds" || record.market_name == "Bookmaker" ?
                                <Switch
                                    checked={record.is_blocked === "Yes" ? false : true}
                                    onClick={() => showModal(record.event_id, record.market_id, record.market_name)}

                                />
                                :
                                <Switch
                                    checked={record.is_blocked === "Yes" ? false : true}
                                    onChange={() => blockUnblockMarket(record.event_id, record.market_id, record.market_name)}

                                />
                            :
                            <Switch
                                checked={record.is_blocked === "Yes" ? false : true}
                                onChange={() => blockUnblockMarket(record.event_id, record.market_id, record.market_name)}

                            />

                    }

                </div>
            )
        },

    ];

    const showModal = (event_id, market_id, market_name) => {
        setEventId(event_id)
        setMarketId(market_id)
        setMarketName(market_name)

        setIsModalOpen(true);
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <NotificationContainer />
            <Modal title="Status" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <div className='flex gap-[5px]'>
                    <Button type="primary" onClick={() => blockUnblockMarket(eventId, marketId, 'Suspended')} >Suspend</Button>

                    <Button type="primary" danger onClick={() => blockUnblockMarket(eventId, marketId, 'Market')} >Block</Button>
                </div>
            </Modal>
            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto  lg:w-full'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Market Listing</h5>
                        </div>
                        <div className='col-span-12 '>

                            <div className='bg-[#fff] border-[1px] border-[#0000002d] '>

                                <div className='p-[0.75rem] flex-auto '>
                                    <Table

                                        columns={columns}
                                        className='downline-list'
                                        bordered
                                        dataSource={marketList}
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


export default BlockMarketEventsMarkets;
