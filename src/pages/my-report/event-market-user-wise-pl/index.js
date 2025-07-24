// import './App.css';
import '../../../App.css'
import { useState, useEffect } from 'react';
import { Input, Table, Select, Pagination } from 'antd';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Appconfig from '../../../config/config'
import moment from 'moment';

function ProfitLossEvents(props) {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))

    const location = useLocation();

    const { from_date, to_date, event_type, is_casino, event_id, market_id, market_name, betting_type, selection_id,get_user_id } = location.state || {};


    const navigate = useNavigate();

    const user_id = get_user_id ? get_user_id : userInfo._id;;
    const [formData, setFormData] = useState({
        "match_id": event_id,
        "user_id": user_id,
        "event_type": event_type ? event_type : '',
        "is_casino": is_casino ? is_casino : '',
        "from_date": from_date,
        "to_date": to_date,
        "market_id": market_id,
        "market_name": market_name,
        "selection_id": selection_id,
        "betting_type": betting_type,

    })


    let locale = {
        emptyText: 'No data!',
    };

    const navigateToDetails = (record) => {
        // return false;
        navigate(`/reports/event-wise-profit-loss-bet-history`, { state: { from_date: formData.from_date, to_date: formData.to_date, event_type: record?.event_type, is_casino: record?.is_casino, event_id: record?.match_id, market_id: record?.market_id ? record?.market_id : record?.market_name, betting_type: record?.betting_type, selection_id: record?.selection_id, user_idd: record?.user_id } });
    };


    const columns = [
        {
            title: 'User Name',
            sorter: true,

            render: (_, record) => (

                <a hred="javascript:void(0);" onClick={() => navigateToDetails(record)} className='text-[#2789ce] text-[0.813rem]'>
                    {record.user_name}
                </a>

            ),
        },
        {
            title: 'Sport Name',
            sorter: true,

            render: (_, record) => (


                <div className=' text-[#212529] text-[0.813rem] '>
                    {record.event_type_name}
                </div>

            ),
        }
        , {
            title: 'Event Name',
            sorter: true,

            render: (_, record) => (
                <div className=' text-[#212529] text-[0.813rem] '>
                    {record.event_name}
                </div>
            ),
        },
        {
            title: 'Market Name',
            sorter: true,
            render: (_, record) => (

                <div className=' text-[#212529] text-[0.813rem] '>
                    {record.market_name}
                </div>


            ),
        },
        {
            title: 'Result',
            sorter: true,
            render: (_, record) => (
                <div className='font-extrabold text-[#212529] text-[0.813rem] '>
                    {record?.result ? record?.result : 0}
                </div>
            ),
        },

        {
            title: 'Profit/Loss',
            dataIndex: 'name',
            sorter: true,
            render: (_, record) => (
                record.upline_pl < 0 ? (
                    <span className='text-[#ff0000] text-[0.813rem] '>
                        {record?.upline_pl?.toFixed(2)}
                    </span>
                ) : (
                    <span className=' text-[#008000] text-[0.813rem] '>{
                        record?.upline_pl?.toFixed(2)
                    }</span>
                )
            )
        },
        {
            title: 'Commission',
            dataIndex: 'name',
            sorter: true,
            render: (_, record) => (
                <span className=' text-[#212529] text-[0.813rem] '>{
                    record?.commission ? record?.commission?.toFixed(2) : 0
                }</span>
            )
        },
        {
            title: 'Settle Time',
            dataIndex: 'name',
            sorter: true,
            render: (_, record) => (
                <span className=' text-[#212529] text-[0.813rem] '>{
                    record?.settledTime ? moment(record?.settledTime).format('YYYY-MM-DD hh:mm:ss a') : ''
                }</span>
            )
        }
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
        filterProfitLossByEvents();
    }, [])



    const filterProfitLossByEvents = async (e) => {

        var data = JSON.stringify(formData);

        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}reports/auraEventUserWisePLNew`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                try {
                    console.log(response.data.resultData);
                    setFilteredData(response.data.resultData);

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
                            <span className='text-[#ffffff] font-bold text-[0.938rem]  py-[5px] [word-wrap:break-word]'>Profit Loss User</span>
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
        </div>
    )
}


export default ProfitLossEvents;
