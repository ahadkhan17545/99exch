import '../../App.css'
import { useState } from 'react';
import {  Input, Table, Select, Pagination } from 'antd';
import moment from "moment";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';


function Commission() {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))

    const [selectedTab, setSelectedTab] = useState('fancy')

    const [formData, setFormData] = useState({
        "user_id": userInfo && userInfo?._id,
        "from_date": moment().subtract(1, 'days').format('YYYY-MM-DD'),
        "to_date": moment().format('YYYY-MM-DD'),
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
    const columns = [
        {
            title: 'Agent Name',
            dataIndex: 'name',
            sorter: true,
            render: (name) => `${name.first} ${name.last}`,
        },
        {
            title: 'Turn Over',
            dataIndex: 'name',
            sorter: true,
        },
        {
            title: 'Commission',
            dataIndex: 'name',
            sorter: true,
        },
        {
            title: 'Action',
            dataIndex: 'name',
            sorter: true,
        },

    ];
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState(data);
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

   
    const tabItems = [
        'fancy',
        'matka',
        'Casino',
        'Binary',
        'Sportbook',
        'Bookmaker',
    ]

    return (
        <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]   px-[15px] lg:px-[27px]' >
            <div className='col-span-12'>
                <div className=' flex-[0_0_auto] w-full'>
                    <div className='mb-[1.5rem] lg:mb-[24px] rounded-[.25rem]  lg:pb-[0] w-full bg-[#e0e6e6]  text-[#212529] [word-wrap:break-word] border-[1px] border-[#000501]   '>
                        <div className='!p-0 flex-auto'>
                            <div className='grid grid-cols-12 py-[14px] px-[28px] '>
                                <div className='col-span-12 flex items-center lg:col-span-2   '>
                                    <div className='relative flex flex-wrap items-stretch w-full lg:w-[93%]'>
                                        <div className='block w-full  text-[.875rem] font-normal leading-normal text-[#5c6873] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] relative flex-auto !p-0 !bg-[#fff] !border-[none]'>
                                            <div className='!border-[1px] !border-[solid] !border-[#cccccc] relative table [border-spacing:0] !bg-[#fff] rounded-[.25rem]'>

                                                <input
                                                    className='cursor-pointer flex items-center h-[34px] border-none text-[14px] bg-[#fff] w-full outline-none rounded-[.25rem] absolute overflow-hidden overflow-ellipsis whitespace-nowrap pl-[6px] text-[#555]'
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

                                                {/* <DatePicker className='flex items-center h-[34px] border-none text-[.75rem]  w-full bg-[#fff] outline-[none] rounded-[.25rem] absolute overflow-hidden overflow-ellipsis whitespace-nowrap pl-[6px] text-[#555]' defaultValue={dayjs(new Date().toLocaleDateString(), 'DD/MM/YYYY')} format={dateFormat} onChange={onChange} /> */}
                                                <div onClick={toggleFromCalendar} className='h-[34px] relative align-middle whitespace-nowrap w-[1%] table-cell text-[0] [text-indent:9px!important] font-normal rounded-[.25rem] text-[#5c6873]'>
                                                    <button type='button' className='text-[#000] flex items-center justify-center h-full p-0 outline-[0] rounded-tl-[0] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[0] !bg-[#fff] !w-[40px]'>
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
                                </div>
                                <div className='col-span-12 lg:col-span-1  flex items-center lg:justify-center mx-[5px] my-[.6rem] lg:mx-[0px] lg:my-[0px] '>
                                    <span className='text-[#212529] text-[0.813rem] lg:relative lg:right-[10px]'>TO</span>
                                </div>
                                <div className='col-span-12 lg:col-span-2 flex items-center '>
                                    <div className='relative flex flex-wrap items-stretch w-full lg:w-[93%]'>
                                        <div className='block w-full  text-[.875rem] font-normal leading-normal text-[#5c6873] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] relative flex-auto !p-0 !bg-[#e5e7ea] !border-[none]'>
                                            <div className='!border-[1px] !border-[solid] !border-[#cccccc] relative table [border-spacing:0] bg-[#fff] rounded-[.25rem]'>

                                                <input
                                                    className='cursor-pointer flex items-center h-[34px] border-none text-[14px] bg-[#fff] w-full outline-none rounded-[.25rem] absolute overflow-hidden overflow-ellipsis whitespace-nowrap pl-[6px] text-[#555]'
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


                                                {/* <DatePicker className='flex items-center h-[34px] border-none text-[.75rem] bg-[#fff] w-full outline-[none] rounded-[.25rem] absolute overflow-hidden overflow-ellipsis whitespace-nowrap pl-[6px] text-[#555]' defaultValue={dayjs(new Date().toLocaleDateString(), 'DD/MM/YYYY')} format={dateFormat} onChange={onChange} /> */}
                                                <div onClick={toggleToCalendar} className='h-[34px] relative align-middle whitespace-nowrap w-[1%] table-cell text-[0] [text-indent:9px!important] font-normal rounded-[.25rem] text-[#5c6873]'>
                                                    <button type='button' className='text-[#000] flex items-center justify-center h-full p-0 outline-[0] rounded-tl-[0] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[0] !bg-[#fff] !w-[40px]'>
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
                                </div>

                                <div className='col-span-12 lg:col-span-2 px-[10px]  flex items-center justify-center   flex-[0_0_auto] '>
                                    <button type="button" className="mt-[5px] lg:mt-[0px] font-bold !px-[10px] !py-[5px] !text-[.875rem] text-[#ffffff] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] border-[#cccccc] inline-block leading-normal text-center rounded-[.375rem]">
                                        <strong >Get Commission</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='col-span-12'>
                <div className=' flex-[0_0_auto] w-full max-w-full'>
                    <div className='border-r-[1px] border-r-[#c8ced3] border-l-[1px] border-l-[#c8ced3] mb-[24px]   relative flex flex-col min-w-[0] text-[#212529] [word-wrap:break-word] bg-[#fff] bg-clip-border border-[1px] border-[solid] border-[#0000002d] rounded-[.375rem]'>
                        <div className='px-5 py-[.75rem] font-bold text-[0.938rem] !bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] mb-0 border-b-[1px] border-b-[#0000002d] !text-[#ffffff] [word-wrap:break-word] rounded-t-[.375rem]'>
                            <span className='relative top-px font-bold text-[0.938rem] !text-[#ffffff]'> Agent Commission</span>
                        </div>
                        <div className='p-[1.2rem] lg:p-[1.25rem]'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12 '>
                                    <ul className='bg-[#e2e2e2] flex flex-wrap pl-0 mb-0 [list-style:none] border-b-[1px] border-b-[#c8ced3]'>
                                        {tabItems.map((tab, index) => (
                                            <li key={index} className='font-bold'>
                                                <button className={`border-[1px] border-t-[2px] border-[solid] border-[transparent] block capitalize rounded-t-[.375rem] px-[1rem] py-[.5rem]  mb-[-1px] [transition:color_.15s_ease-in-out,_background-color_.15s_ease-in-out,_border-color_.15s_ease-in-out] text-[0.813rem]  ${selectedTab === tab ? 'text-[#2f353a] border-t-[2px] border-t-[#000000] bg-[#fff] border-r-[rgb(200,_206,_211)] border-b-[rgb(255,255,255)] border-l-[rgb(200,206,211)]' : 'text-[#73818f]'}`}
                                                    onClick={() => setSelectedTab(tab)}
                                                >
                                                    <span >{tab}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='px-[5px] lg:px-[20px] py-[10px]   border-t-[0px] border-[1px] border-b-[#bbbbbb] border-l-[#bbbbbb] border-r-[#bbbbbb]'>
                                        <Table
                                            title={() => (
                                                <div className='grid grid-cols-12 lg:pt-[2rem]'>
                                                    <div className='col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-start mb-[.9rem] lg:mb-[0px]'>
                                                        <div className='text-[#333] lg:p-[.5rem]'>
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
                                                        <div className='text-[#333] lg:p-[.5rem]'>
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
                </div>
            </div>
        </div>
    )
}


export default Commission;
