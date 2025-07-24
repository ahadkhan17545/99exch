import '../../../App.css'
import {  useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import {  Table } from 'antd';

function ActivityLog() {


    let locale = {
        emptyText: 'No data!',
    };
    const columns = [
        {
            title: 'Login Date & Time',
            dataIndex: 'login-date-time',
            // width: '23%'
        },
        {
            title: 'Login Status',
            dataIndex: 'login-status',
            // render: (name) => `${name.first} ${name.last}`,
            render: (status) => (
                <span className='font-bold text-[#228b22] text-[14px]'>
                    <b>{status}</b>
                </span>
            ),
            // width: '20%'
        },
        {
            title: 'IP Address',
            dataIndex: 'ip-address',
            // render: (name) => `${name.first} ${name.last}`,
            // width: '18%'

        },
        {
            title: 'ISP',
            dataIndex: 'isp',
            // render: (name) => `${name.first} ${name.last}`,
            // width: '14%'
        },
        {
            title: 'City/State/Country',
            dataIndex: 'address',
        },
    ];
    const [data, setData] = useState([{
        'login-date-time': '04-05-2024 10:16:03',
        'login-status': 'Login Successful',
        'ip-address': '0',
        'isp': '0',
        'address': '0/0/0'
    },
    {
        'login-date-time': '03-05-2024 17:44:10',
        'login-status': 'Login Successful',
        'ip-address': '0',
        'isp': '0',
        'address': '0/0/0'
    },
    {
        'login-date-time': '03-05-2024 10:51:24',
        'login-status': 'Login Successful',
        'ip-address': '157.38.148.224',
        'isp': 'Reliance Jio Infocomm Limited',
        'address': 'Jodhpur/Rajasthan/India'
    },
    {
        'login-date-time': '02-05-2024 17:56:11',
        'login-status': 'Login Successful',
        'ip-address': '0',
        'isp': '0',
        'address': '0/0/0'
    },
    {
        'login-date-time': '02-05-2024 12:49:32',
        'login-status': 'Login Successful',
        'ip-address': '157.38.148.69',
        'isp': 'Reliance Jio Infocomm Limited',
        'address': 'Jodhpur/Rajasthan/India'
    },
    {
        'login-date-time': '01-05-2024 18:32:53',
        'login-status': 'Login Successful',
        'ip-address': '157.38.148.69',
        'isp': 'Reliance Jio Infocomm Limited',
        'address': 'Jodhpur/Rajasthan/India'
    },]);
    const [loading, setLoading] = useState(false);
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
