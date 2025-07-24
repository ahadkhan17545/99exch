import '../../../App.css'
import { useState, useEffect } from 'react';
import { Modal, Input, Table, } from 'antd';
import axios from 'axios';
import Appconfig from '../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { TfiPencilAlt } from "react-icons/tfi";
import { useNavigate, } from "react-router-dom";


function Betting() {
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [openNews, setOpenNews] = useState(false)
    const [button, setButton] = useState(false)


    const [eventTypes, setEventTypes] = useState([])
    const [formData, setFormData] = useState({
        domain_name: "",
        site_code: "",
    });
    const [id, setId] = useState('')

    const handleSetFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    function getEventTypes() {
        var data = JSON.stringify({
            user_id: userInfo?._id,
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}betting/getEventTypes`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    setEventTypes(response.data.resultData)
                }
                else {
                    console.log(response)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const navigateToDetails = (event_type) => {
            navigate(`/betting/eventOpenBetting/${event_type}`);
    };


    const columns = [
        {
            title: 'S.N.',
            sorter: true,
            render: (_, record,i) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{i + 1}</span>
            ),
        },
        {
            title: 'Sport Name',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#315195] text-[0.813rem] ml-[5px]' onClick={() => navigateToDetails(record.event_type)}>{record.name}</span>
            ),
        },
     

    ];

    useEffect(() => {
        getEventTypes();
    }, [])

    return (
        <>
            <NotificationContainer />
           

            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto  '>
                    <div className='lg:block w-full lg:w-[40vw] '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Betting Sports</h5>
                            </div>

                            <div className='col-span-12 '>

                                <div className='bg-[#fff] border-[1px] border-[#0000002d] '>
                                    <div className='p-[0.75rem] flex-auto '>
                                        <Table
                                           
                                            columns={columns}
                                            className='downline-list'
                                            bordered
                                            // dataSource={paginatedData}
                                            dataSource={eventTypes}
                                            pagination={false}
                                        />
                                        <div className='grid grid-cols-12 items-center pt-[1.5rem] lg:pt-[.75rem] text-[#333]'>
                                        
                                        </div>
                                        {/* <Table columns={columns} dataSource={data} /> */}
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


export default Betting;
