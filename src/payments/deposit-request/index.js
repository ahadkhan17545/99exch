import '../../App.css'
import { useState, useEffect } from 'react';
import { Modal, Input, Table, Image, Button, Switch } from 'antd';
import axios from 'axios';
import Appconfig from '../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function DepositRequest() {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [openBanner, setOpenBanner] = useState(false)
    const [button, setButton] = useState(false)
    const [fileList, setFileList] = useState([]);
    const [banners, setBanners] = useState([])
    const [id, setId] = useState('')
    const [paymentType, setPaymentType] = useState(""); // State to track selected payment type
    const [formData, setFormData] = useState({
        user_id: userInfo?._id,
        site_code: Appconfig.sitecodes,
        accountNo: "",
        accountHolder: "",
        ifscCode: "",
        bankName: "",
        upiId: "",
        holderName: ""
    });
    const [remark, setRemark] = useState('');

    const [depositRequest, setDepositRequest] = useState([]);
    const [depositHistory, setDepositHistory] = useState([]);

    // console.log('userInfo', userInfo);

    function confirmDepositRequest(record, status) {
        setButton(true)
        var data = JSON.stringify({
            record: record,
            status: status,
            master_details: userInfo,
            remark: remark
        });
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}deposit/confirmDeposit`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    NotificationManager.success(response.data.resultMessage, '', 3000);
                    getDepositRequest();
                    getDepositHistory();
                } else {
                    NotificationManager.error(response.data.resultMessage, '', 3000);
                }

                setButton(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const columns = [
        {
            title: 'User Name',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record?.user_name}
                </span>
            ),
        },
        {
            title: 'Type',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record?.type}
                </span>
            ),
        },
        {
            title: 'Amount',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record?.amount}
                </span>
            ),
        },
        {
            title: 'Screen Shot',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {
                        record?.screenshot_name == null ? "No Screenshot" : <Image
                            width={70}
                            src={`${Appconfig.apiUrl}deposit/${record?.screenshot_name}`}
                        />
                    }

                </span>
            ),
        },
        {
            title: 'UTR Number',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {
                        record?.utr_number
                    }
                </span>
            ),
        },
        // {
        //     title: 'Total Balance',
        //     sorter: true,
        //     render: (_, record) => (
        //         <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
        //         </span>
        //     ),
        // },
        // {
        //     title: 'Available Balance',
        //     sorter: true,
        //     render: (_, record) => (
        //         <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
        //         </span>
        //     ),
        // },
        {
            title: 'Remark',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    <Input placeholder="remark" onChange={(e) => setRemark(e.target.value)} />
                </span>
            ),
        },
        {
            title: 'Request Date',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {(new Date(record?.createdAt)).toLocaleString()}
                </span>
            ),
        },
        {
            title: 'Action',
            sorter: false,
            render: (_, record) => (
                <div className='flex items-center gap-x-4' >
                    <button disabled={button} onClick={() => confirmDepositRequest(record, 'Confirm')} className='p-[10px] text-[#fff] h-[30px] ml-[12px] flex bg-[#010203] rounded-[6px] border-[1px] border-[solid] border-[#010203] float-right cursor-pointer items-center justify-center'>
                        <span>Confirm</span>
                    </button>
                    <button disabled={button} onClick={() => confirmDepositRequest(record, 'Reject')} className='p-[10px] text-[#fff] h-[30px] ml-[12px]  flex bg-[#dc3545] rounded-[6px] border-[1px] border-[solid] border-[#dc3545] float-right cursor-pointer items-center justify-center'>
                        Reject
                    </button>
                </div>
            )
        },

    ];

    const historyColumns = [
        {
            title: 'User Name',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record?.user_name}
                </span>
            ),
        },
        // {
        //     title: 'User Id',
        //     sorter: true,
        //     render: (_, record) => (
        //         <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
        //             {record?.user_id}
        //         </span>
        //     ),
        // },
        {
            title: 'Type',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record?.type}
                </span>
            ),
        },
        ...(depositHistory.some((record) => record.bank_name) // Check if any record has a bank name
            ? [
                {
                    title: 'Bank Name',
                    sorter: true,
                    render: (_, record) => (
                        <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                            {record?.bank_name || 'N/A'}
                        </span>
                    ),
                },
            ]
            : []), // If no record has a bank name, exclude this column
        ...(depositHistory.some((record) => record.account_no) // Check if any record has a bank name
            ? [
                {
                    title: 'Account Num',
                    sorter: true,
                    render: (_, record) => (
                        <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                            {record?.account_no || 'N/A'}
                        </span>
                    ),
                },
            ]
            : []), // If no record has a bank name, exclude this column
        ...(depositHistory.some((record) => record.account_holder_name) // Check if any record has a bank name
            ? [
                {
                    title: 'Account Holder Name',
                    sorter: true,
                    render: (_, record) => (
                        <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                            {record?.account_holder_name || 'N/A'}
                        </span>
                    ),
                },
            ]
            : []), // If no record has a bank name, exclude this column
        ...(depositHistory.some((record) => record.ifsc_code) // Check if any record has a bank name
            ? [
                {
                    title: 'IFSC Code',
                    sorter: true,
                    render: (_, record) => (
                        <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                            {record?.ifsc_code || 'N/A'}
                        </span>
                    ),
                },
            ]
            : []), // If no record has a bank name, exclude this column
        ...(depositHistory.some((record) => record.upi_id) // Check if any record has a bank name
            ? [
                {
                    title: 'UPI Id',
                    sorter: true,
                    render: (_, record) => (
                        <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                            {record?.upi_id || 'N/A'}
                        </span>
                    ),
                },
            ]
            : []), // If no record has a bank name, exclude this column
        ...(depositHistory.some((record) => record.holder_name) // Check if any record has a bank name
            ? [
                {
                    title: 'Holder Name',
                    sorter: true,
                    render: (_, record) => (
                        <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                            {record?.holder_name || 'N/A'}
                        </span>
                    ),
                },
            ]
            : []), // If no record has a bank name, exclude this column
        {
            title: 'Remarks',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record?.remark}
                </span>
            ),
        },
        {
            title: 'Amount',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record?.amount}
                </span>
            ),
        },
        {
            title: 'Screen Shot',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {
                        record?.screenshot_name == null ? "No Screenshot" : <Image
                            width={70}
                            src={`${Appconfig.apiUrl}deposit/${record?.screenshot_name}`}
                        />
                    }

                </span>
            ),
        },
        {
            title: 'UTR Number',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {
                        record?.utr_number
                    }
                </span>
            ),
        },
        {
            title: 'Request Date',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {(new Date(record?.createdAt)).toLocaleString()}
                </span>
            ),
        },
        {
            title: 'Status',
            sorter: true,
            render: (_, record) => (
                <span className={`font-extrabold text-[#212529] text-[0.813rem] ml-[5px] ${record?.status == 'Reject' ? 'text-[red]' : 'text-[green]'}`}>
                    {record?.status}
                </span>
            ),
        },
    ];

    const getDepositRequest = () => {

        let site_code = Appconfig.sitecodes;
        let data = JSON.stringify({
            site_code: site_code,
            user_id: userInfo?._id
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}deposit/getDepositRequest`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    setDepositRequest(response.data.resultData);
                } else {
                    NotificationManager.error(response.data.resultMessage, '', 3000);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const getDepositHistory = () => {

        let site_code = Appconfig.sitecodes;
        let data = JSON.stringify({
            site_code: site_code,
            master_id: userInfo?._id
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}deposit/getDepositHistory`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    setDepositHistory(response.data.resultData);
                } else {
                    NotificationManager.error(response.data.resultMessage, '', 3000);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    useEffect(() => {
        getDepositRequest();
        getDepositHistory();
    }, [])


    return (
        <>
            <NotificationContainer />
            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto  '>
                    <div className='lg:block w-full lg:w-[40vw] '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Deposit Request</h5>
                            </div>

                            <div className='col-span-12 '>

                                <div className='bg-[#fff] border-[1px] border-[#0000002d] '>
                                    <div className='p-[0.75rem] flex-auto '>
                                        <Table
                                            columns={columns}
                                            className='downline-list'
                                            bordered
                                            dataSource={depositRequest}
                                            pagination={false}
                                        />
                                        <div className='grid grid-cols-12 items-center pt-[1.5rem] lg:pt-[.75rem] text-[#333]'>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto  '>
                    <div className='lg:block w-full lg:w-[40vw] '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Transaction History</h5>
                            </div>

                            <div className='col-span-12 '>

                                <div className='bg-[#fff] border-[1px] border-[#0000002d] '>
                                    <div className='p-[0.75rem] flex-auto '>
                                        <Table
                                            columns={historyColumns}
                                            className='downline-list'
                                            bordered
                                            dataSource={depositHistory}
                                            pagination={false}
                                        />
                                        <div className='grid grid-cols-12 items-center pt-[1.5rem] lg:pt-[.75rem] text-[#333]'>
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


export default DepositRequest;
