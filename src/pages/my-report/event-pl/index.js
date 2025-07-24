// import './App.css';
import '../../../App.css'
import { useState, useEffect } from 'react';
import { Input, Table, Select, Pagination } from 'antd';
import { useNavigate, } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import moment from "moment";
import axios from 'axios';
import Appconfig from '../../../config/config'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
// import {getAuraEventTypesWisePLNew} from '../../../redux/slice/eventReport/eventReportSlice'


function EventPL() {
    const dispatch = useDispatch();
    // const eventReports = useSelector((state) => state.eventReports); // Use selector to access state

    const userInfo = JSON.parse(localStorage.getItem('userdata'))

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "user_id": userInfo && userInfo?._id,
        "from_date": moment().subtract(7, 'days').format('YYYY-MM-DD'),
        "to_date": moment().format('YYYY-MM-DD'),
        "user_type": userInfo && userInfo.user_type
    })

    // ***************  Calendar Start ****************

    const [showFromCalendar, setShowFromCalendar] = useState(false);

    const handleFromDate = (newDate) => {

        if (newDate) {
            setFormData({
                ...formData,
                from_date: newDate
            })
            setShowFromCalendar(false);
        }
        // Hide the calendar after selecting a date
    };

    const toggleFromCalendar = () => {
        setShowFromCalendar(!showFromCalendar);
        setShowToCalendar(false);
    };

    const [showToCalendar, setShowToCalendar] = useState(false);

    const handleToDate = (newDate) => {
        if (newDate) {
            setFormData({
                ...formData,
                to_date: newDate
            })
            //   setToDate(newDate);
            setShowToCalendar(false); // Hide the calendar after selecting a date
        }

    };

    const toggleToCalendar = () => {
        setShowToCalendar(!showToCalendar);
        setShowFromCalendar(false);
    };
    const formattedFromDate = formData.from_date ? format(formData.from_date, 'dd-MM-yyyy') : format(new Date, 'dd-MM-yyyy');
    const formattedToDate = formData.to_date ? format(formData.to_date, 'dd-MM-yyyy') : format(new Date, 'dd-MM-yyyy');
    console.log("Formatted Date:", formattedFromDate); // Debug: log the formatted date

    // ***************  Calendar End ****************

    let locale = {
        emptyText: 'No data!',
    };

    const navigateToDetails = (event_type, is_casino) => {
        if (is_casino == "Yes") {
            navigate(`/reports/event-wise-pl/${is_casino}`, { state: { from_date: formData.from_date, to_date: formData.to_date, is_casino: is_casino} });

        } else {
            navigate(`/reports/event-wise-pl/${event_type}`, { state: { from_date: formData.from_date, to_date: formData.to_date, event_type: event_type} });
        }
    };

    const columns = [
        {
            title: 'Sport Name',
            dataIndex: 'name',
            sorter: true,

            render: (_, record) => (
                <a href="javascript:void(0);" className='font-extrabold text-[#2789ce] text-[0.813rem] '
                    onClick={() => navigateToDetails(record.event_type, record.is_casino)}
                >
                    {record.event_type_name}
                </a>

            ),
        },
        {
            title: 'Upline Profit/Loss',
            dataIndex: 'name',
            sorter: true,
            render: (_, record) => (
                record.upline_pl < 0 ? (
                    <span className='font-extrabold text-[#ff0000] text-[0.813rem] '>
                        {record?.upline_pl?.toFixed(2)}
                    </span>
                ) : (
                    <span className='font-extrabold text-[#008000] text-[0.813rem] '>{
                        record?.upline_pl?.toFixed(2)
                    }</span>
                )
            )
        },
        {
            title: 'Downline Profit/Loss',
            dataIndex: 'name',
            sorter: false,
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
                <span className='font-extrabold text-[#212529] text-[0.813rem] '>0</span>
            )
        },

    ];

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState(data);
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
        filterProfitLoss();
    }, [])

    // const filterProfitLoss = async (e) => {
    //     var data = formData;
    //     dispatch(getAuraEventTypesWisePLNew({
    //         data
    //     }))
    // }


    const filterProfitLoss = async (e) => {

        var data = JSON.stringify(formData);

        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}reports/auraEventTypesWisePLNew`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                try {
                    setFilteredData(response.data.resultData);
                    setData(response.data.resultData)

                } catch (e) {
                    // postErrorToslack(e.message);
                }
            })
            .catch(function (error) {
                console.log(error);
                // postErrorToslack(error.message);
            });
    }

    const onChangeDataType = (datatype) => {
        if (datatype == "LIVE") {
            setFormData({
                ...formData,
                from_date: moment().format('YYYY-MM-DD')
            })
        } else if (datatype == "BACKUP") {
            setFormData({
                ...formData,
                from_date: moment().subtract(3, 'month').format('YYYY-MM-DD')
            })
        } else if (datatype == "OLD") {
            setFormData({
                ...formData,
                from_date: moment().subtract(1, 'year').format('YYYY-MM-DD')
            })
        }

    }

    return (
        <div className='grid grid-cols-12 relative  px-[15px] lg:px-[30px] mt-[20px] lg:mt-[15px]' >
            <div className='col-span-12  mb-[1.5rem] lg:mb-[0px]'>
                <div className=' flex-[0_0_auto] w-full'>
                    <div className='lg:mb-[24px] rounded-[.25rem]  lg:pb-[0] w-full bg-[#e0e6e6]  text-[#212529] [word-wrap:break-word] border-[1px] border-[#000501] '>
                        <div className='!p-0 flex-auto'>
                            <div className='flex flex-wrap pt-[10px]'>
                                {/* <div className='px-[10px] !mb-4 flex-[0_0_auto] w-[100%] lg:w-[16.66%]'>
                                    <label htmlFor="datasourceSelect" className='inline-block  text-[0.813rem] font-normal leading-normal'>Data Source</label>
                                    <select id="datasourceSelect" onChange={(e) => onChangeDataType(e.target.value)} className='pl-[.95rem] [text-indent:1px] appearance-none   block w-full h-[calc(1.5em+.75rem+2px)] px-[.75rem] py-[.375rem] text-[.875rem] font-normal leading-normal text-[#5c6873] border-[1px] border-[solid] border-[#ccc] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] [word-wrap:normal]' style={{ background: '#fff url(https://aura444.com/Down-Arrow.696f11d0c8727f3b.svg) right 93% / 8% 12px no-repeat', backgroundPosition: 'right 0% bottom 45%' }}>
                                        <option className='[text-indent:1px] text-[.875rem] leading-normal text-[#5c6873]' disabled value="">Data Source</option>
                                        <option className='[text-indent:1px] text-[.875rem] leading-normal text-[#5c6873]' value="LIVE">LIVE DATA</option>
                                        <option className='[text-indent:1px] text-[.875rem] leading-normal text-[#5c6873]' value="BACKUP">BACKUP DATA</option>
                                        <option className='[text-indent:1px] text-[.875rem] leading-normal text-[#5c6873]' value="OLD">OLD DATA</option>
                                    </select>
                                </div> */}


                                <div className='flex px-[10px] !mb-4 flex-[0_0_auto] w-[100%] lg:w-[16.66%]'>
                                    <div className='relative flex flex-wrap items-stretch w-[80%]'>
                                        <div className='block w-full  text-[.875rem] font-normal leading-normal text-[#5c6873] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] relative flex-auto !p-0 !bg-[#e5e7ea] !border-[none]'>
                                            <label className='inline-block  text-[0.813rem] font-normal leading-normal'>From</label>
                                            <div className='!border-[1px] !border-[solid] !border-[#cccccc] relative table [border-spacing:0] bg-[#fff] rounded-[.25rem]'>

                                                <input
                                                    className='cursor-pointer flex items-center h-[34px] border-none text-[14px] !bg-[#e5e7ea] w-full outline-none rounded-[.25rem] absolute overflow-hidden overflow-ellipsis whitespace-nowrap pl-[6px] text-[#555]'
                                                    type="text"
                                                    value={formattedFromDate}
                                                    onClick={toggleFromCalendar}
                                                    readOnly
                                                    placeholder="Select date"

                                                />
                                                {showFromCalendar && (
                                                    <div className="absolute z-[9999] top-[40px] w-full calendar-container">
                                                        <Calendar onChange={(e) => handleFromDate(e)} value={formData.from_date || new Date()} calendarType="gregory" />
                                                    </div>
                                                )}


                                                {/* <DatePicker className='flex items-center h-[34px] border-none text-[.75rem] !bg-[#e5e7ea] w-full outline-[none] rounded-[.25rem] absolute overflow-hidden overflow-ellipsis whitespace-nowrap pl-[6px] text-[#555]' defaultValue={dayjs(new Date().toLocaleDateString(), 'DD/MM/YYYY')} format={dateFormat} onChange={(e) => onChangeFromDate(e)} /> */}
                                                <div onClick={toggleFromCalendar} className='h-[34px] relative align-middle whitespace-nowrap w-[1%] table-cell text-[0] [text-indent:9px!important] font-normal rounded-[.25rem] text-[#5c6873]'>
                                                    <button type='button' className='text-[#000] flex items-center justify-center h-full p-0 outline-[0] rounded-tl-[0] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[0] !bg-[#c8ced2] !w-[40px]'>
                                                        <svg fill='black' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 5V8H15V5H9V8H6V5H4V20H20V5H18ZM7 19H5V17H7V19ZM7 16H5V14H7V16ZM7 13H5V11H7V13ZM10 19H8V17H10V19ZM10 16H8V14H10V16ZM10 13H8V11H10V13ZM13 19H11V17H13V19ZM13 16H11V14H13V16ZM13 13H11V11H13V13ZM16 19H14V17H16V19ZM16 16H14V14H16V16ZM16 13H14V11H16V13ZM19 19H17V17H19V19ZM19 16H17V14H19V16ZM19 13H17V11H19V13Z" />
                                                            <path d="M7 4H8V7H7V4Z" />
                                                            <path d="M16 4H17V7H16V4Z" />
                                                        </svg>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-end justify-center'>
                                        <div className='flex items-center inline-block ml-[10px] border-[1px] border-[solid] border-[#ccc] bg-[#e4e7ea] opacity-100  px-4 lg:px-[4px] py-[.25rem] text-[.875rem] leading-normal text-[#5c6873] h-[38px]'>
                                            00:00
                                        </div>
                                    </div>
                                </div>
                                <div className='flex px-[10px]  flex-[0_0_auto] w-[100%] lg:w-[16.66%]'>
                                    <div className='relative flex flex-wrap items-stretch w-[80%]'>
                                        <div className='block w-full  text-[.875rem] font-normal leading-normal text-[#5c6873] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] relative flex-auto !p-0 !bg-[#e5e7ea] !border-[none]'>
                                            <label className='inline-block  text-[0.813rem] font-normal leading-normal'>To</label>
                                            <div className='!border-[1px] !border-[solid] !border-[#cccccc] relative table [border-spacing:0] bg-[#fff] rounded-[.25rem]'>

                                                <input
                                                    className='cursor-pointer flex items-center h-[34px] border-none text-[14px] !bg-[#e5e7ea] w-full outline-none rounded-[.25rem] absolute overflow-hidden overflow-ellipsis whitespace-nowrap pl-[6px] text-[#555]'
                                                    type="text"
                                                    value={formattedToDate}
                                                    onClick={toggleToCalendar}
                                                    readOnly
                                                    placeholder="Select date"

                                                />
                                                {showToCalendar && (
                                                    <div className="absolute z-[9999] top-[40px] w-full calendar-container">
                                                        <Calendar onChange={(e) => handleToDate(e)} value={formData.to_date || new Date()} calendarType="gregory" />
                                                    </div>
                                                )}

                                                {/* <DatePicker className='flex items-center h-[34px] border-none text-[.75rem] !bg-[#e5e7ea] w-full outline-[none] rounded-[.25rem] absolute overflow-hidden overflow-ellipsis whitespace-nowrap pl-[6px] text-[#555]' defaultValue={dayjs(new Date().toLocaleDateString(), 'DD/MM/YYYY')} format={dateFormat} onChange={(e) => onChangeToDate(e)} /> */}
                                                <div onClick={toggleToCalendar} className='h-[34px] relative align-middle whitespace-nowrap w-[1%] table-cell text-[0] [text-indent:9px!important] font-normal rounded-[.25rem] text-[#5c6873]'>
                                                    <button type='button' className='text-[#000] flex items-center justify-center h-full p-0 outline-[0] rounded-tl-[0] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[0] !bg-[#c8ced2] !w-[40px]'>
                                                        <svg fill='black' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 5V8H15V5H9V8H6V5H4V20H20V5H18ZM7 19H5V17H7V19ZM7 16H5V14H7V16ZM7 13H5V11H7V13ZM10 19H8V17H10V19ZM10 16H8V14H10V16ZM10 13H8V11H10V13ZM13 19H11V17H13V19ZM13 16H11V14H13V16ZM13 13H11V11H13V13ZM16 19H14V17H16V19ZM16 16H14V14H16V16ZM16 13H14V11H16V13ZM19 19H17V17H19V19ZM19 16H17V14H19V16ZM19 13H17V11H19V13Z" />
                                                            <path d="M7 4H8V7H7V4Z" />
                                                            <path d="M16 4H17V7H16V4Z" />
                                                        </svg>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-end lg:items-center justify-center'>
                                        <div className='flex items-center inline-block ml-[10px] border-[1px] border-[solid] border-[#ccc] bg-[#e4e7ea] opacity-100  px-4 lg:px-[4px] py-[.25rem] text-[.875rem] leading-normal text-[#5c6873] h-[38px]'>
                                            23:59
                                        </div>
                                    </div>
                                </div>
                                <div className='px-[10px] mb-[1rem] flex items-center  lg:!mb-[10px] flex-[0_0_auto] w-[50%] lg:w-[16.66%]'>
                                    <button onClick={() => {
                                        filterProfitLoss()
                                    }} type="button" className="mt-[1rem] lg:mt-[0px] font-bold !px-[10px] !py-[5px] !text-[.875rem] text-[#ffffff] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] border-[#cccccc] inline-block leading-normal text-center rounded-[.375rem]">
                                        <strong >Get P&L</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='col-span-12  mb-[1.5rem] lg:mb-[0px]'>
                <div className=' flex-[0_0_auto] w-full max-w-full'>
                    <div className='border-r-[1px] border-r-[#c8ced3] border-l-[1px] border-l-[#c8ced3] mb-[24px]  relative flex flex-col min-w-[0] text-[#212529] [word-wrap:break-word] bg-[#fff] bg-clip-border border-[1px] border-[solid] border-[#0000002d] rounded-[.375rem]'>

                        <div className='bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] font-bold text-[0.938rem] px-[10px] py-[5px] [word-wrap:break-word]'>
                            <span className='text-[#ffffff] font-bold text-[0.938rem]  py-[5px] [word-wrap:break-word]'>Profit Loss</span>
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
                                                        onChange={e => handleSearch(e.target.value, ['event_type_name'])}
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


export default EventPL;
