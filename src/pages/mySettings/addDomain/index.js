import '../../../App.css'
import { useState, useEffect } from 'react';
import { Modal, Input, Table, } from 'antd';
import axios from 'axios';
import Appconfig from '../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { TfiPencilAlt } from "react-icons/tfi";


function News() {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [openNews, setOpenNews] = useState(false)
    const [button, setButton] = useState(false)


    const [userNews, setUserNews] = useState([])
    const [formData, setFormData] = useState({
        domain_name: "",
        site_code: "",
    });
    const [id, setId] = useState('')

    const handleSetFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    function getDomains() {
        var data = JSON.stringify({
            user_id: userInfo?._id,
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}domains/getDomains`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log('response.data', response.data);
                if (response.data.result) {
                    setUserNews(response.data.resultData)
                }
                else {
                    console.log(response)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function addDomain() {
        var config = {};
        var data = {};


        if (formData.domain_name.trim() && formData.site_code.trim()) {
            setButton(true)

            if (id) {

                data = JSON.stringify({
                    _id: id,
                    data: {
                        domain_name: formData.domain_name,
                        site_code: formData.site_code,
                    }
                });


                config = {
                    method: "post",
                    url: `${Appconfig.apiUrl}domains/updateDomain`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: data,
                };

            } else {

                data = JSON.stringify({
                    domain_name: formData.domain_name,
                    site_code: formData.site_code,
                    user_id: userInfo._id,
                    is_active: "Yes"
                });


                config = {
                    method: "post",
                    url: `${Appconfig.apiUrl}domains/addDomain`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: data,
                };

            }

            axios(config)
                .then(function (response) {
                    if (response.data.result) {
                        NotificationManager.success(response.data.resultMessage, '', 3000);
                        setOpenNews(false);
                        setButton(false)

                        getDomains();
                        setId('');
                        id = '';
                        setFormData({
                            domain_name: "",
                            site_code: "",
                        });

                        setButton(false);
                    } else {
                        NotificationManager.error(response.data.resultMessage, '', 3000);

                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            NotificationManager.error('Message Is Required', '', 3000);

        }

    }

    function deleteDomain(id) {
        setButton(true)
        var data = JSON.stringify({
            _id: id,
        });
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}domains/deleteDomain`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                NotificationManager.success(response.data.resultMessage, '', 3000);
                getDomains();
                setButton(false)

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function editNews(record) {
        setOpenNews(true);
        setId(record._id);

        setFormData({
            domain_name: record.domain_name,
            site_code: record.site_code
        })
    }



    const columns = [
        {
            title: 'Domain Name',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.domain_name}</span>
            ),
        },
        {
            title: 'Site Code',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>{record.site_code}</span>
            ),
        },
        {
            title: 'Edit',
            sorter: true,
            render: (_, record) => (
                <div className='flex items-center gap-x-4 ' onClick={() => editNews(record)}>
                    <span className='flex items-center gap-1 text-[#212529] cursor-pointer'><TfiPencilAlt /></span>
                </div>
            )

        },

        {
            title: 'Delete',
            sorter: false,
            render: (_, record) => (
                <div className='flex items-center gap-x-4' onClick={() => deleteDomain(record._id)}>
                    <button disabled={button} className='w-[26px] h-[26px] ml-[12px] text-[0] flex bg-[#f3f3f3] rounded-[6px] border-[1px] border-[solid] border-[#bbbbbb] float-right cursor-pointer items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" xmlSpace="preserve">
                            <path fill="currentColor" d="M16.162,0.213H9.838C9.358,0.535,9.005,1.049,8.78,1.821H2.233c-0.191,0-0.32,0.097-0.32,0.29v2.541    c0,0.193,0.129,0.29,0.32,0.322h21.534c0.224-0.032,0.32-0.129,0.32-0.322V2.111c0-0.193-0.097-0.29-0.32-0.29h-6.514    C16.995,1.049,16.643,0.535,16.162,0.213z"></path>
                            <path fill="currentColor" d="M19.725,25.788c1.088-0.453,1.698-1.256,1.795-2.415c0-0.031,0-0.062,0-0.097l1.058-16.694H3.454    l1.027,16.694c0,0.035,0,0.065,0.031,0.097c0.096,1.159,0.674,1.962,1.765,2.415H19.725z"></path>
                        </svg>
                    </button>
                </div>
            )
        },

    ];

    useEffect(() => {
        getDomains();
    }, [])

    return (
        <>
            <NotificationContainer />
            <Modal className='password-model relative top-1 lg:top-7 lg:!w-[34vw]'
                footer={[
                    <div className='col-span-12 gap-2 flex flex-shrink-0 flex-wrap items-center justify-end p-[1rem] border-t-[1px] border-t-[#dee2e6]'>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="m-[5px] text-[#fff]  bg-[#0d6efd] border-[#0d6efd]  font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]" disabled={button} onClick={() => addDomain()}>{id ? 'Update' : 'Add'}</button>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="bg-[linear-gradient(-180deg,_#b8beca_0%,_#989595_100%)] font-bold !px-[10px] !py-[5px] !text-[.875rem] m-[5px] text-[#212529] text-center no-underline align-middle border-[1px] border-[solid] border-[transparent] rounded-[.375rem]" onClick={() => setOpenNews(false)}>Cancel</button>
                    </div>
                ]}
                onCancel={() => setOpenNews(false)}
                open={openNews} >
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-t-[5px] h-[35px] bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                        <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>{id ? 'Update Domain' : 'Add Domain'}</h5>
                        <button type="button" onClick={() => setOpenNews(false)} >
                            <span className='text-[1.3125rem] font-bold'>×</span>
                        </button>
                    </div>
                    <div className='col-span-12 !bg-[#ffffff] !text-[#23282c] relative flex-auto p-4'>
                        <div className='grid grid-cols-12 lg:gap-x-6 '>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='mb-4 !text-[#23282c]'>
                                    <label className='inline-block mb-[.5rem] !text-[#23282c]' for="domain_name">Domain Name </label>
                                    <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                        <Input id='domain_name' name='domain_name' required className='antd-password' value={formData.domain_name} onChange={handleSetFormData} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='mb-4 !text-[#23282c]'>
                                    <label className='inline-block mb-[.5rem] !text-[#23282c]' for="site_code">Domain Site Code</label>
                                    <div className='relative flex flex-wrap items-stretch w-full text-[#23282c]'>
                                        <Input type='text' id='site_code' name='site_code' required className='antd-password' value={formData.site_code} placeholder="Enter Site Code.." onChange={handleSetFormData} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>

            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:mx-auto  '>
                    <div className='lg:block w-full lg:w-[40vw] '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Add Domain</h5>
                            </div>

                            <div className='col-span-12 '>

                                <div className='bg-[#fff] border-[1px] border-[#0000002d] '>

                                    <div className='text-end p-[0.75rem] flex-auto '>
                                        <button type='button ' className='text-white bg-[linear-gradient(180deg,_#2A3A43_27%,_#1C282D_83%)] text-[.875rem] rounded-[.25rem] px-[10px]  mt-[10px]  py-[5px] '
                                            onClick={() => setOpenNews(true)}
                                        >
                                            Add Domain
                                        </button>
                                    </div>
                                    <div className='p-[0.75rem] flex-auto '>
                                        <Table
                                           
                                            columns={columns}
                                            className='downline-list'
                                            bordered
                                            // dataSource={paginatedData}
                                            dataSource={userNews}
                                            pagination={false}
                                        />
                                        <div className='grid grid-cols-12 items-center pt-[1.5rem] lg:pt-[.75rem] text-[#333]'>
                                        
                                        </div>
                                        {/* <Table columns={columns} dataSource={data} /> */}
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


export default News;
