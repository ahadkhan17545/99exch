// import './App.css';
import '../../../App.css'
import { useState, useEffect } from 'react';
import {  Input,  Table, Select, Pagination } from 'antd';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Appconfig from '../../../config/config'
function ProfitLossEvents() {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const params = useParams();

    const user_id = params ? params?.user_id : userInfo._id;
    const [formData, setFormData] = useState({
        "user_id": user_id,
        "event_type": params && params?.event_type_id,
        "from_date": params && params?.from_date,
        "to_date": params && params?.to_date,
    })


    let locale = {
        emptyText: 'No data!',
    };
    const columns = [
        {
            title: 'Sport Name',
            sorter: true,

            render: (_, record) => (
                record.event_type == 4 ?
                    (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Cricket
                        </div>
                    ) : record.event_type == 2 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Tennis
                        </div>
                    ) : record.event_type == 1 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Soccer
                        </div>
                    ) : record.event_type == 7 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Horse Racing
                        </div>
                    ) : record.event_type == 66102 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Casino
                        </div>
                    ) : record.event_type == 4339 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Greyhound Racing
                        </div>
                    ) : record.event_type == 27979456 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Kabaddi
                        </div>
                    ) : record.event_type == 7522 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Basketball
                        </div>
                    ) : record.event_type == 2378961 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Politics
                        </div>
                    ) : record.event_type == 66101 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Virtual
                        </div>
                    ) : record.event_type == 66104 ? (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Lottery
                        </div>
                    ) : (
                        <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                            Casino
                        </div>
                    )
            ),
        }, {
            title: 'Event Name',
            sorter: true,

            render: (_, record) => (
                <Link className='font-extrabold text-[#2789ce] text-[0.813rem]' to={`/profit-loss-event-market/${user_id}/${record.match_id}/${params?.from_date}/${params?.to_date}`}>
                    {record.event_name}
                </Link>
            ),
        },
        {
            title: 'Profit/Loss',
            dataIndex: 'name',
            sorter: true,
            render: (_, record) => (
                record.totalPL < 0 ? (
                    <span className='font-extrabold text-[#ff0000] text-[0.813rem] '>
                        {record?.totalPL?.toFixed(2)}
                    </span>
                ) : (
                    <span className='font-extrabold text-[#008000] text-[0.813rem] '>{
                        record?.totalPL?.toFixed(2)
                    }</span>
                )
            )
        },
        {
            title: 'Commission',
            dataIndex: 'name',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[green] text-[0.813rem] '>{
                    record?.commissionAmount?.toFixed(2)
                }</span>
            )
        },
        {
            title: 'Total P&L',
            dataIndex: 'name',
            sorter: false,
            render: (_, record) => (
                record.totalPL < 0 ? (
                    <span className='font-extrabold text-[#ff0000] text-[0.813rem] '>
                        {(record?.totalPL + record?.commissionAmount).toFixed(2)}
                    </span>
                ) : (
                    <span className='font-extrabold text-[#008000] text-[0.813rem] '>{
                        (record?.totalPL + record?.commissionAmount).toFixed(2)
                    }</span>
                )
            )
        },
    ];

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleSearch = (value, dataIndex) => {

        if (!value) {
            setFilteredData(data);
            return;
        }

        const filtered = data.filter(item => {
            return Array.isArray(dataIndex)
                ? dataIndex.some(key => item[key]?.toString().toLowerCase().includes(value.toLowerCase()))
                : item[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase());
        });

        // const filtered = data.length ? data.filter(item => item[dataIndex].toString().toLowerCase().includes(value.toLowerCase())) : [];
        setFilteredData(filtered);
        setCurrent(1); // Reset to the first page after a search
    };

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
        filterProfitLossByEvents();
    }, [])



    const filterProfitLossByEvents = async (e) => {

        var data = JSON.stringify(formData);

        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}reports/auraProfitLossByEventsUsers`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                try {
                    // console.log(response.data.resultData);
                    setFilteredData(response.data.resultData);
                    setData(response.data.resultData);

                } catch (e) {
                    // postErrorToslack(e.message);
                }
            })
            .catch(function (error) {
                console.log(error);
                // postErrorToslack(error.message);
            });
    }

    return (
        <div className='grid grid-cols-12 relative ' >
            <div className='col-span-12  mb-[1.5rem] lg:mb-[0px]'>
                <div className=' flex-[0_0_auto] w-full max-w-full'>
                    <div className='border-r-[1px] border-r-[#c8ced3] border-l-[1px] border-l-[#c8ced3] mb-[24px]  relative flex flex-col min-w-[0] text-[#212529] [word-wrap:break-word] bg-[#fff] bg-clip-border border-[1px] border-[solid] border-[#0000002d] rounded-[.375rem]'>

                        <div className='bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] font-bold text-[0.938rem] px-[10px] py-[5px] [word-wrap:break-word] rounded-t-[5px]'>
                            <span className='text-[#ffffff] font-bold text-[0.938rem]  py-[5px] [word-wrap:break-word]'>Profit Loss Events</span>
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
                                                        onChange={e => handleSearch(e.target.value, ['event_name'])}
                                                        style={{ width: '150px', marginLeft: '5px' }}
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
        </div>
    )
}


export default ProfitLossEvents;
