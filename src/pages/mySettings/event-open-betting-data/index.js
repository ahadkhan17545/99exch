import '../../../App.css'
import { useState, useEffect } from 'react';
import { Input, Table, Select, Pagination, Popconfirm, Button, Modal } from 'antd';

import axios from 'axios';
import Appconfig from '../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { TfiPencilAlt } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router-dom";


function EventOpenBettingData() {
    const navigate = useNavigate();
    const params = useParams();
    const { event_id } = params;

    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [openNews, setOpenNews] = useState(false)
    const [button, setButton] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [handlePassword, setHandlePassword] = useState('');
    const [deleteBetId, setDeleteBetId] = useState('');



    const [eventTypes, setEventTypes] = useState([])
    const [formData, setFormData] = useState({
        domain_name: "",
        site_code: "",
    });
    const [id, setId] = useState('')

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState(data);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleOk = () => {
        if (handlePassword == "King@123") {
            deleteUserBet(deleteBetId);
        } else {
            NotificationManager.error(`Password Not Matched.`, '', 3000);

        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    let locale = {
        emptyText: 'No data!',
    };

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


    const handleSetFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    function getOpenBetsByEvent() {
        var data = JSON.stringify({
            user_id: userInfo?._id,
            event_id: event_id
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}betting/getOpenBetsByEvent`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    setFilteredData(response.data.resultData);
                    setData(response.data.resultData)
                }
                else {
                    console.log(response)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // const navigateToDetails = (event_id) => {
    //     navigate(`/betting/openBetsByEvent/${event_id}`);
    // };

    const deleteUserBet = (bet_id) => {
        var data = {
            _id: bet_id,
        };
      
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}betting/deleteBetting`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then(function (response) {

                if (response.status == "200") {
                    NotificationManager.success(`Bet Delete Successfully`, '', 3000);
                    getOpenBetsByEvent();
                    setIsModalOpen(false);
                }
                else {
                    console.log(response)
                    NotificationManager.error(`Something Went Wrong`, '', 3000);

                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const confirm = (e) => {
        setIsModalOpen(true);
        setDeleteBetId(e);
    };
    const cancel = (e) => {
    };

    const columns = [
        {
            title: 'S.N.',
            sorter: true,
            render: (_, record, i) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{i + 1}</span>
            ),
        },
        {
            title: 'Round Id',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.betting_id}</span>
            ),
        },
        {
            title: 'Place Name',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.place_name}</span>
            ),
        },
        {
            title: 'User Name',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.user_name}</span>
            ),
        },
        {
            title: 'Date',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.createdAt}</span>
            ),
        },
        {
            title: 'Stake',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.stake}</span>
            ),
        },
        {
            title: 'Price',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.price_val}</span>
            ),
        },
        {
            title: 'Status',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.status}</span>
            ),
        },
        {
            title: 'Action',
            sorter: true,
            render: (_, record) => (
                <Popconfirm
                    title="Delete Bet"
                    description="Are you sure to delete this bet?"
                    onConfirm={() => confirm(record.betting_id)}
                    onCancel={() => cancel()}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button danger>Delete</Button>
                </Popconfirm>
            ),
        },
    ];

    useEffect(() => {
        getOpenBetsByEvent();
    }, [])

    return (
        <>
            <NotificationContainer />

            <Modal title="Password" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="************" onChange={(e) => setHandlePassword(e.target.value)} />
            </Modal>

            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto  '>
                    <div className='lg:block w-full lg:w-[40vw] '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Betting Sports</h5>
                            </div>

                            <div className='col-span-12 '>

                                <div className='bg-[#fff] border-[1px] border-[#0000002d] '>
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

                </div>

            </div>
        </>
    )
}


export default EventOpenBettingData;
