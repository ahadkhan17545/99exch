// import './App.css';
import '../../App.css'
import { useState, useEffect } from 'react';
import {  Input,  Table, Select, Pagination } from 'antd';
import axios from 'axios';
import Appconfig from '../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function RestoreUser() {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    let locale = {
        emptyText: 'No data!',
    };
    const columns = [
        {
            title: 'User Name',
            dataIndex: 'date-time',
            sorter: true,
            render: (_, record) => (
                <div className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.user_name}</div>

            )
        },
        {
            title: ' Name',
            dataIndex: 'date-time',
            sorter: true,
            render: (_, record) => (
                <div className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.name}</div>

            )
        },
        {
            title: 'Date/Time',
            dataIndex: 'date-time',
            sorter: true,
            render: (_, record) => (
                <div className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{new Date(record.createdAt).toLocaleString()}</div>

            )
        },
        {
            title: 'Action',
            dataIndex: 'remark',
            sorter: true,
            render: (_, record) => (
                <button onClick={() => restoreDeleteUsers(record._id)} type="button" className="mt-[13px]  lg:ml-[0px] font-bold !px-[10px] !py-[5px] !text-[.875rem] text-[#ffffff] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] border-[#cccccc] inline-block leading-normal text-center rounded-[.375rem]">
                    <strong >Restore</strong>
                </button>

            )
        },
    ];
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handlePageSizeChange = (e) => {
        setPageSize(e);
        setCurrent(1); // Reset to the first page after changing page size
    };

    const handleFirst = () => setCurrent(1);
    const handleLast = () => setCurrent(Math.ceil(filteredData?.length / pageSize));

    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredData?.length > 0 && filteredData.slice(startIndex, endIndex);

    useEffect(() => {
        getAuraDeleteUsers();
    }, [])


    const restoreDeleteUsers = (user_id) => {
        var data = {
            user_id: user_id,
        };
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}users/restoreDeleteUsers`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    getAuraDeleteUsers();
                    NotificationManager.success(`${response.data.resultMessage}`, '', 3000);

                    // console.log(response.data)
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

    const getAuraDeleteUsers = () => {
        var data = {
            master_id: userInfo && userInfo._id,
        };
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}users/getAuraDeleteUser`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    setFilteredData(response.data.resultData)
                    // console.log(response.data)
                }
                else {
                    console.log(response)
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <>
            <NotificationContainer />
            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12'>
                    <div className=' flex-[0_0_auto] w-full max-w-full'>
                        <div className='border-r-[1px] border-r-[#c8ced3] border-l-[1px] border-l-[#c8ced3] mb-[24px]  relative flex flex-col min-w-[0] text-[#212529] [word-wrap:break-word] bg-[#fff] bg-clip-border border-[1px] border-[solid] border-[#0000002d] rounded-[.375rem]'>
                            <div className='bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] font-bold text-[0.938rem] px-[10px] py-[5px] [word-wrap:break-word]'>
                                <span className='text-[#ffffff] font-bold text-[0.938rem]  py-[5px] [word-wrap:break-word]'>Restore User</span>
                            </div>
                            <div className='p-[1.25rem] flex-auto '>
                                <Table
                                    title={() => (
                                        <div className='grid grid-cols-12'>
                                            <div className='col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-start mb-[.9rem] lg:mb-[0px]'>
                                                <div className='text-[#333]'>
                                                    <label>
                                                        Show
                                                        <Select defaultValue={10} onChange={handlePageSizeChange} className='pagesize-select mx-[5px]'>
                                                            <Select.Option value={10}>10</Select.Option>
                                                            <Select.Option value={25}>25</Select.Option>
                                                            <Select.Option value={50}>50</Select.Option>
                                                            <Select.Option value={100}>100</Select.Option>
                                                        </Select>
                                                        entries
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end'>
                                                <div className='text-[#333]'>
                                                    <label>
                                                        Search:
                                                        <Input
                                                            // onChange={e => handleSearch(e.target.value, 'name')}
                                                            style={{ width: 155, marginLeft: '5px' }}
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    locale={locale}
                                    columns={columns}
                                    className='event-pl'
                                    bordered
                                    dataSource={paginatedData}
                                    pagination={false} // Disable default pagination
                                />
                                <div className='grid grid-cols-12 items-center pt-[1.5rem] lg:pt-[.75rem] text-[#333]'>
                                    <div className='col-span-12 lg:col-span-6 text-[#333] text-[0.813rem]'>
                                        Showing {startIndex + 1} to {endIndex} of {filteredData?.length} entries
                                    </div>
                                    <div className='col-span-12 lg:col-span-6 flex items-center justify-end  pt-[1rem] lg:pt-[0px] lg:mt-[0rem]'>
                                        <button className='text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px] cursor-pointer' type='button' onClick={handleFirst} style={{ marginRight: 8 }}>First</button>
                                        <Pagination
                                            current={current}
                                            pageSize={pageSize}
                                            total={filteredData?.length}
                                            onChange={(page) => setCurrent(page)}
                                            itemRender={(page, type, originalElement) => {
                                                if (type === 'prev') {
                                                    return <button type='button' className='!cursor-pointer'>Previous</button>;
                                                }
                                                if (type === 'page') {
                                                    return null; // Hide page numbers
                                                }
                                                if (type === 'next') {
                                                    return <button type='button' className='!cursor-pointer'>Next</button>;
                                                }
                                                return originalElement;
                                            }}
                                            showSizeChanger={false} // Disable default page size changer
                                        />
                                        <button className='text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px]  cursor-pointer' type='button' onClick={handleLast} style={{ marginLeft: 8 }}>Last</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}


export default RestoreUser;
