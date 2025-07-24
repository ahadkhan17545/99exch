import '../../../App.css'
import { useEffect, useState } from 'react';
import {  Table } from 'antd';
import axios from 'axios';
import Appconfig from '../../../config/config'

function ActivityLog({ user_id }) {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))

    let locale = {
        emptyText: 'No data!',
    };
    const columns = [
        {
            title: 'Login Date & Time',
            // dataIndex: 'login-date-time',
            // width: '23%',
            render: (_, record) => (
                <span >{record.createdAt}</span>
            ),
        },
        {
            title: 'Login Status',
            dataIndex: 'login-status',
            render: (_, record) => (
                <span className={`font-bold text-[14px] ${record?.status == "Open" ? 'text-[#228b22]' : 'text-[#d50000]'}`}>
                    <b>{record?.status == "Open" ? "Login Successful" : "Login Failed" }</b>
                </span>
            ),
            // width: '20%'
        },
        {
            title: 'IP Address',
            dataIndex: 'ip_address',
            // render: (name) => `${name.first} ${name.last}`,
            // width: '18%'

        },
        {
            title: 'ISP',
            dataIndex: 'isp',
            render: (_, record) => (
                <span >{record.all_info && record.all_info[0].isp}</span>
            ),
        },
        {
            title: 'City/State/Country',
            // dataIndex: 'address',
            render: (_, record) => (
                <span >{`${record.all_info && record.all_info[0].city}/${record.all_info && record.all_info[0].regionName}/${record.all_info && record.all_info[0].country}`}</span>
            ),
        },
    ];
  
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    function getOnlineUser() {

        var data = JSON.stringify({
            "user_id": user_id ? user_id : userInfo._id,
            "user_type": "User"
        });

        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}reports/usersOnline`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // SetOnlineUserList(response.data.resultData.reverse());
                setData(response.data.resultData)
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        getOnlineUser()
    }, [])
    console.log(data)
    return (
        <div className='grid grid-cols-12 '>
            <div className='col-span-12'>
                <div className=' flex-[0_0_auto] w-full max-w-full'>
                    <div className='border-r-[1px] border-r-[#c8ced3] border-l-[1px] border-l-[#c8ced3] mb-[24px]  relative flex flex-col min-w-[0] text-[#212529] [word-wrap:break-word] bg-[#fff] bg-clip-border border-[1px] border-[solid] border-[#0000002d] rounded-[.375rem]'>
                        <div className='bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] font-bold text-[0.938rem] px-[10px] py-[5px] [word-wrap:break-word]'>
                            <span className='text-[#ffffff] font-bold text-[0.938rem]  py-[5px] [word-wrap:break-word]'>Activity Log</span>
                        </div>
                        <div className='p-[1.25rem] flex-auto flex-auto '>
                            <Table
                                bordered
                                locale={locale}
                                columns={columns}
                                className='activity-log'
                                dataSource={data}
                                loading={loading}
                                pagination={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActivityLog;
