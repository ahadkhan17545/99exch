import '../../../App.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Select, Input, Pagination, Modal } from 'antd';
import axios from 'axios';
import moment from "moment";
import Appconfig from '../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
function UserBanking() {
    const params = useParams();
    let locale = {
        emptyText: 'No data!',
    };
    const columns = [
        {
            title: 'UID',
            dataIndex: 'name',
            sorter: true,
            // render: (name) => `${name.first} ${name.last}`,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.user_name}</span>
            ),
            width: '5%'
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem]'>{Number(record.noDeductbalance).toFixed(0)}</span>
            ),
            width: '8%'
            // width: '10%'
        },
        {
            title: 'Available D / W',
            dataIndex: '',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem]'>{Number(record.balance).toFixed(0)}</span>
            ),
            width: '12%'
            // width: '10%'
        },
        {
            title: 'Exposure',
            dataIndex: 'exposure',
            sorter: false,
            // width: '10%'
            render: (_, record) => (
                <span className='font-extrabold text-[#d50000] text-[0.813rem]'>{`(${Number(record.exposure).toFixed(0)})`}</span>
            ),
            width: '7%'
        },
        {
            title: 'Credit Ref.',
            dataIndex: 'credit_reference',
            sorter: true,
            width: '13%',
            render: (_, record) => (
                <div className='flex items-center gap-x-4'>
                    <strong className='text-[#535353] font-extrabold text-[0.813rem]'>{Number(record.credit_reference).toFixed(2)}</strong>
                    <button onClick={() => editCreditRef(true, record)}>
                        <svg fill='#535353' className='w-[15px] h-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                        </svg>
                    </button>
                    <button onClick={() => creditRefLog(true, record)}>
                        <i className="fa fa-eye text-[#535353]"></i>
                    </button>
                </div>
            )

        },
        {
            title: 'Reference P/L',
            dataIndex: 'name',
            sorter: false,
            render: (_, record) => {
                const pl = (record.noDeductbalance - record.credit_reference).toFixed(0);
                return (
                    <span className={`font-extrabold text-[0.813rem] ${pl > 0 ? 'text-[#008000]' : 'text-[#ff0000]'}`}>
                        {Math.abs(pl).toFixed(0)}
                    </span>
                );
            },
            width: '10%'
        },
        {
            title: 'Deposit/Withdraw',
            dataIndex: 'name',
            sorter: false,
            width: '27%',
            render: (_, record, index) => (
                <div className='flex '>
                    <button
                        className={`credit_btn credit_btn_${index} text-[#23282c]  ml-[5px] !px-[10px] !py-[2px] !border-[1px] !border-[solid] !border-[#333] h-[34px] w-[34px] leading-normal text-center rounded-[.375rem] [transition:color_.15s_ease-in-out,_background-color_.15s_ease-in-out,_border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] ${userArray.find(item => item.user_id == record._id && item.action == 'Credit') ? 'bg-[#008000]' : 'bg-[#acb5bc] '}`}
                        onClick={() => {
                            handleInputChange('Credit', record._id, 'action')
                        }}
                    >
                        <span className='text-[#ffffff] text-[.875rem] font-extrabold'>D</span>
                    </button>
                    <button
                        className={`debit_btn debit_btn_${index} text-[#23282c]  ml-[5px] !px-[10px] !py-[2px] !border-[1px] !border-[solid] !border-[#333] h-[34px] w-[34px] leading-normal text-center rounded-[.375rem] [transition:color_.15s_ease-in-out,_background-color_.15s_ease-in-out,_border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] ${userArray.find(item => item.user_id == record._id && item.action == 'Debit') ? 'bg-[#ff0000]' : 'bg-[#acb5bc] '}`}
                        onClick={() => {
                            handleInputChange('Debit', record._id, 'action')
                        }}
                    >
                        <span className='text-[#ffffff] text-[.875rem] font-extrabold'>W</span>
                    </button>
                    <input
                        id={`amount_of_${record._id}`}
                        type='text'
                        placeholder='0'
                        className='ml-[5px] px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal'
                        onChange={(e) => handleInputChange(e.target.value, record._id, 'amount')}
                        value={
                            (userArray.find(item => item.user_id == record._id))?.amount || ''
                        }
                    />
                    <button
                        className={`ml-[5px] font-extrabold !px-[10px] !py-[5px] !text-[.875rem] text-[#ffffff] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] border-[#cccccc] border-[unset] leading-normal text-center rounded-[.375rem] h-[34px] [transition:color_.15s_ease-in-out,_background-color_.15s_ease-in-out,_border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out]  ${userArray.find(item => item.user_id == record._id && item.action == 'Debit') ? '' : 'opacity-[.65] pointer-events-none'}`}
                        onClick={() => {
                            // console.log(record.balance)
                            document.getElementById(`amount_of_${record._id}`).value = record.balance
                            handleInputChange(record.balance, record._id, 'amount')
                        }}
                    >
                        <strong className='text-[#ffffff] font-extrabold'>Full</strong>
                    </button>
                </div>
            ),
        },
        {
            title: 'Remark',
            // dataIndex: 'remark',
            sorter: false,
            render: (_, record, index) => (
                <input
                    type='text'
                    id={`remark_of_${record._id}`}
                    placeholder='Remark'
                    className='block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal'
                    onChange={(e) => handleInputChange(e.target.value, record._id, 'remark')}
                    value={
                        (userArray.find(item => item.user_id == record._id))?.remark || ''
                    }
                />
            ),
        },


    ];



    const creditRefLogColumns = [
        {
            title: 'Form Name',
            // dataIndex: 'user_name',
            sorter: true,
            // render: (_, record) => (
            //     <div>
            //         <span className='text-[#fff] bg-[#4dbd74] text-[0.688rem] font-bold px-[5px] py-[3px] rounded-[3px] inline-block leading-none text-center whitespace-nowrap align-baseline'>USER</span>
            //         <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.user_name}</span>
            //     </div>
            // ),
            // width: '11%'
        },
        {
            title: 'User Name	',
            // dataIndex: 'balance',
            sorter: false,
            // width: '10%'
        },
        {
            title: 'Old Credit Reference',
            // dataIndex: 'exposure',
            sorter: true,
            // width: '10%'
        },
        {
            title: 'New Credit Reference',
            // dataIndex: 'exposer_limit',
            sorter: true,
            // width: '15%'
        },
        {
            title: 'Date',
            // dataIndex: 'name',
            sorter: true,
            // width: '10%'
        },
    ];
    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [userArray, setUserArray] = useState([]);
    const [editCreditRefModal, setEditCreditRefModal] = useState(false)
    const [openCreditRefLogModal, setOpenCreditRefLogModal] = useState(false)
    const [currentCreditRef, setCurrentCreditRef] = useState(0)
    const [password, setPassword] = useState('')
    const [submitClick, setSubmitClick] = useState(false)

    const [userRefData, setUserRefData] = useState({
        user_id: "",
        credit_reference: "",
        password: "",
        user_name: ""
    });
    const handleCredRefChange = (event) => {
        setUserRefData({
            ...userRefData,
            [event.target.name]: event.target.value,
        });
    };
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

    // const handleLast = () => setCurrent(Math.ceil(data.length / pageSize));

    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredData?.length > 0 && filteredData.slice(startIndex, endIndex);

    // const paginatedData = data.slice(startIndex, endIndex);
    
    const getUsersData = () => {
        var data = {
            master_id: params.user_id ? params.user_id : userInfo._id,
            user_type: 'user'

        };
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}users/getAuraUsers`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                if (response.data) {
                    setData(response.data)
                    setFilteredData(response.data)
                }
                else {
                    console.log(response)
                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        getUsersData()
    }, [])
    const editCreditRef = (open, record) => {
        setEditCreditRefModal(open)
        setCurrentCreditRef(record.credit_reference)
        console.log('record:', record)
        setUserRefData({
            ...userRefData,
            user_id: record._id,
            user_name: record.user_name
        })
    }
    const creditRefLog = (open, record) => {
        setOpenCreditRefLogModal(open)
        setUserRefData({
            ...userRefData,
            user_id: record._id,
            user_name: record.user_name
        })
    }
    const handleSubmitCredRef = () => {

        var data = JSON.stringify(userRefData);
        console.log(userRefData);
        if (userRefData.credit_reference == '') {
            NotificationManager.error('The credit reference field is mandatory.', '', 3000);
        }
        if (userRefData.password == '') {
            NotificationManager.error('The master password field is mandatory.', '', 3000);
        }
        if (userRefData.credit_reference != '' && userRefData.password != '' && userRefData.user_id != '' && userRefData.user_name != '') {
            var config = {
                method: "post",
                url: `${Appconfig.apiUrl}users/changeCredRef`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,

            };
            axios(config)
                .then(function (response) {
                    getUsersData()
                    setUserRefData({
                        user_id: "",
                        credit_reference: "",
                        password: "",
                        user_name: ""
                    })
                    console.log('--', response)
                    setEditCreditRefModal(false)
                    NotificationManager.success('Credit Reference updated successfully.', '', 3000);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const handleSubmitPayment = () => {
        if (userArray.length > 0) {
            if (userArray[0].action) {
                setSubmitClick(true);

                var data = JSON.stringify({
                    master_id: params.user_id ? params.user_id : userInfo._id,
                    password: password,
                    userArray: userArray,
                });
                var config = {
                    method: 'post',
                    url: `${Appconfig.apiUrl}ledger/auraSaveBankingInfo`,
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    data: data,
                };
                axios(config)
                    .then(function (response) {
                        console.log(response)
                        if (response.data.result) {
                            setPassword('')
                            userArray && userArray.map((item) => {
                                document.getElementById(`amount_of_${item.user_id}`).value = ''
                                document.getElementById(`remark_of_${item.user_id}`).value = ''
                            })
                            setUserArray([])
                            NotificationManager.success(response.data.message, '', 3000);
                            getUsersData();
                        } else {
                            NotificationManager.error(response.data.message, '', 3000);

                        }
                        setSubmitClick(false);

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                NotificationManager.error('Please Select D/W', '', 3000);

            }
        } else {
            NotificationManager.error('Please Select Atleast One Agent', '', 3000);

        }
    }
    const clearAll = () => {
        userArray && userArray.map((item) => {
            document.getElementById(`amount_of_${item.user_id}`).value = ''
            document.getElementById(`remark_of_${item.user_id}`).value = ''
        })
        setUserArray([])
    }
    const handleInputChange = (value, userId, field) => {
        // Find the index of the user in the userArray
        const userIndex = userArray.findIndex(user => user.user_id === userId);
        if (userIndex === -1) {
            setUserArray(prevArray => [
                ...prevArray,
                {
                    user_id: userId,
                    action: '',
                    amount: '',
                    remark: '',
                }
            ]);
        }

        setUserArray(prevArray => prevArray.map((user, index) => {
            if (user.user_id === userId) {
                return {
                    ...user,
                    [field]: value,
                };
            }
            return user;
        }));
    };

    return (
        <>
            <NotificationContainer />
            <Modal title={`Edit Credit Reference - ${userRefData.user_name}`} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]'
                onCancel={() => {
                    setEditCreditRefModal(false)
                }
                }
                footer={
                    (
                        <div className='col-span-12 flex items-center justify-end p-4 border-[none] pt-0'>
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="m-[5px] text-[#fff]  bg-[#0d6efd] border-[#0d6efd] font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]" onClick={handleSubmitCredRef}>Submit</button>
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="bg-[linear-gradient(-180deg,_#b8beca_0%,_#989595_100%)] font-bold !px-[10px] !py-[5px] !text-[.875rem] m-[5px] text-[#212529] text-center no-underline align-middle border-[1px] border-[solid] border-[transparent] rounded-[.375rem]"
                                onClick={() => {
                                    setEditCreditRefModal(false)
                                    setUserRefData({
                                        user_id: "",
                                        credit_reference: "",
                                        password: "",
                                        user_name: ""
                                    })
                                }}
                            >Cancel</button>
                        </div>
                    )
                }
                open={editCreditRefModal} >
                <div className='grid grid-cols-12 px-[1rem] py-[.75rem] ml-[.5rem]'>
                    <div className='col-span-12 mb-[1rem]'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-2 px-[10px] py-[7px] text-[0.813rem]'>
                                Current
                            </div>
                            <div className='col-span-9 px-[10px] flex items-center'>
                                <span className='font-extrabold text-[0.813rem] text-[#23282C]'>{currentCreditRef}</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 mb-[1rem]'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-2 px-[10px] py-[7px]'>
                                New
                            </div>
                            <div className='col-span-8 px-[10px]'>
                                <input
                                    name="credit_reference"
                                    placeholder=""
                                    value={userRefData.credit_reference}
                                    type="number"
                                    className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal"
                                    onChange={handleCredRefChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 mb-[1rem]'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-2 pl-[10px] py-[7px]'>
                                Password
                            </div>
                            <div className='col-span-8 px-[10px]'>
                                <Input.Password
                                    id='password'
                                    value={userRefData.password}
                                    name='password'
                                    required
                                    className='rolling-commission-password-inp'
                                    onChange={handleCredRefChange}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Modal >
            <Modal title={`Credit Reference Log - ${userRefData.user_name}`} width={1150} className='rollingcommission-model relative top-1 lg:top-7 w-full'
                onCancel={() => {
                    setOpenCreditRefLogModal(false)
                }}
                footer={null}
                open={openCreditRefLogModal} >
                <div className='p-[1.25rem] flex-auto '>
                    <Table
                        title={() => (
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-start mb-[.8rem] lg:mb-[0px]'>
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
                                                onChange={e => handleSearch(e.target.value, ['name', 'user_name'])}
                                                style={{ width: '150px', marginLeft: '5px' }}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                        locale={locale}
                        columns={creditRefLogColumns}
                        className=' activity-log'
                        bordered
                        // dataSource={paginatedData}
                        dataSource={[]}
                        pagination={false}
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
                    {/* <Table columns={columns} dataSource={data} /> */}
                </div>
            </Modal >
            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]   px-[15px] lg:px-[30px]' >
                <div className='col-span-12 '>
                    <div className='bg-[#fff] border rounded-[.375rem]'>


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
                                                        onChange={e => handleSearch(e.target.value, ['name', 'user_name'])}
                                                        style={{ width: '150px', marginLeft: '5px' }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                locale={locale}
                                columns={columns}
                                className='downline-list'
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
                            <div className='grid grid-cols-12 items-center mt-[30px]'>
                                <div className='col-span-6 lg:col-span-3 pr-[15px] mb-[1rem] lg:mb-[0px]'>
                                    <button type="button" className="block w-full text-[#fff] bg-[#f86c6b] border-[#f86c6b] font-bold px-[10px] py-[5px] text-[.875rem] text-center border-[1px] border-[solid] border-[#dc3545] rounded-[.375rem]" onClick={clearAll}>Clear All</button>
                                </div>
                                <div className='col-span-6 lg:col-span-3 pl-[15px] lg:pr-[15px] mb-[1rem] lg:mb-[0px]'>
                                    <input name="paymentPass" value={password} placeholder="Password.." type="password" className='block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='col-span-12 lg:col-span-3 lg:px-[15px] mb-[1rem] lg:mb-[0px]'>

                                    {
                                        submitClick ?
                                            (
                                                <button type="button" className="block w-full font-bold px-[10px] py-[5px] text-[.875rem] text-[#ffffff] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] border-[#cccccc] text-center rounded-[.375rem] opacity-[.65] cursor-not-allowed">Submit Payment</button>

                                            ) :
                                            (
                                                <button type="button" className="block w-full font-bold px-[10px] py-[5px] text-[.875rem] text-[#ffffff] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] border-[#cccccc] text-center rounded-[.375rem]" onClick={() => handleSubmitPayment()}>Submit Payment</button>
                                            )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default UserBanking;
