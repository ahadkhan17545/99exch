import '../../../App.css'
import { useState, useEffect } from 'react';
import { Modal, Input, Table, Upload, Button, Image } from 'antd';
import axios from 'axios';
import Appconfig from '../../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { TfiPencilAlt } from "react-icons/tfi";
import { UploadOutlined } from '@ant-design/icons';


function Banner() {
    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [openBanner, setOpenBanner] = useState(false)
    const [button, setButton] = useState(false)
    const [fileList, setFileList] = useState([]);


    const [banners, setBanners] = useState([])
    
    const [id, setId] = useState('')


    function getBanner() {
        var data = JSON.stringify({
            site_code: Appconfig.sitecodes
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}banner/getDashboardBanner`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    setBanners(response.data.resultData)
                }
                else {
                    console.log(response)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    function deleteBanner(id) {
        setButton(true)
        var data = JSON.stringify({
            id: id,
        });
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}banner/deleteBanner`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                NotificationManager.success(response.data.resultMessage, '', 3000);
                getBanner();
                setButton(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function editNews(id, message) {
        setOpenBanner(true);
        setId(id);

    }


    const columns = [
        {
            title: 'Image',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    <Image
                        width={70}
                        src={`${Appconfig.apiUrl}banner/${record.image_name}`}
                    />
                </span>
            ),
        },
        // {
        //     title: 'Edit',
        //     sorter: true,
        //     render: (_, record) => (
        //         <div className='flex items-center gap-x-4 ' onClick={() => editNews(record._id, record.message)}>
        //             <span className='flex items-center gap-1 text-[#212529] cursor-pointer'><TfiPencilAlt /></span>
        //         </div>
        //     )

        // },
        {
            title: 'Delete',
            sorter: false,
            render: (_, record) => (
                <div className='flex items-center gap-x-4' onClick={() => deleteBanner(record._id)}>
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

    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };


    const handleUpload = async () => {
        if (fileList.length === 0) {
            NotificationManager.error('Please select a file first!', '', 3000);
            return;
        }

        setButton(true);
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('file', file.originFileObj);
        });
        formData.append('site_code', Appconfig.sitecodes);

        try {
            const response = await axios.post(`${Appconfig.apiUrl}banner/addDashboardBanner`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            NotificationManager.success('Image uploaded successfully!', '', 3000);
            setFileList([]);
            setOpenBanner(false);
            setButton(false);
            getBanner();
        } catch (error) {
            console.error('Error uploading image:', error);
            NotificationManager.error('Error uploading image!', '', 3000);
        }
    };


    useEffect(() => {
        getBanner();
    }, [])
    return (
        <>
            <NotificationContainer />
            <Modal className='password-model relative top-1 lg:top-7 lg:!w-[34vw]'
                footer={[
                    <div className='col-span-12 gap-2 flex flex-shrink-0 flex-wrap items-center justify-end p-[1rem] border-t-[1px] border-t-[#dee2e6]'>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="m-[5px] text-[#fff]  bg-[#0d6efd] border-[#0d6efd]  font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]" disabled={button} onClick={() => handleUpload()}>{id ? 'Update' : 'Add'}</button>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="bg-[linear-gradient(-180deg,_#b8beca_0%,_#989595_100%)] font-bold !px-[10px] !py-[5px] !text-[.875rem] m-[5px] text-[#212529] text-center no-underline align-middle border-[1px] border-[solid] border-[transparent] rounded-[.375rem]" onClick={() => setOpenBanner(false)}>Cancel</button>
                    </div>
                ]}
                onCancel={() => setOpenBanner(false)}
                open={openBanner} >
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-t-[5px] h-[35px] bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                        <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>{id ? 'Update Banner' : 'Add Banner'}</h5>
                        <button type="button" onClick={() => setOpenBanner(false)} >
                            <span className='text-[1.3125rem] font-bold'>×</span>
                        </button>
                    </div>
                    <div className='col-span-12 !bg-[#ffffff] !text-[#23282c] relative flex-auto p-4'>
                        <div className='grid grid-cols-12 lg:gap-x-6 '>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='mb-4 !text-[#23282c]'>
                                    <Upload
                                        beforeUpload={() => false} // Prevent auto upload
                                        multiple={false} // Only allow one file at a time; change if needed
                                        fileList={fileList}
                                        onChange={handleChange}
                                    >
                                        <Button icon={<UploadOutlined />}>Select Image</Button>
                                    </Upload>
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
                                <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Add Banner</h5>
                            </div>

                            <div className='col-span-12 '>

                                <div className='bg-[#fff] border-[1px] border-[#0000002d] '>

                                    <div className='text-end p-[0.75rem] flex-auto '>
                                        <button type='button ' className='text-white bg-[linear-gradient(180deg,_#2A3A43_27%,_#1C282D_83%)] text-[.875rem] rounded-[.25rem] px-[10px]  mt-[10px]  py-[5px] '
                                            onClick={() => setOpenBanner(true)}
                                        >
                                            Add Banner
                                        </button>
                                    </div>
                                    <div className='p-[0.75rem] flex-auto '>
                                        <Table

                                            columns={columns}
                                            className='downline-list'
                                            bordered
                                            // dataSource={paginatedData}
                                            dataSource={banners}
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


export default Banner;
