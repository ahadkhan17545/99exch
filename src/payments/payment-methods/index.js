import '../../App.css'
import { useState, useEffect } from 'react';
import { Modal, Input, Table, Upload, Button, Switch } from 'antd';
import axios from 'axios';
import Appconfig from '../../config/config'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { TfiPencilAlt } from "react-icons/tfi";
import { UploadOutlined } from '@ant-design/icons';


function PaymentMethods() {
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

    const [AcNumValidationError, setAcNumValidationError] = useState("Please enter account number");
    const [AcHolderValidationError, setAcHolderValidationError] = useState("Please enter account holder name");
    const [IfscValidationError, setIfscValidationError] = useState("Please enter ifsc code");
    const [BankValidationError, setBankValidationError] = useState("Please enter bank name");
    const [UPIValidationError, setUPIValidationError] = useState("Please enter id");
    const [HolderValidationError, setHolderValidationError] = useState("Please enter holder name");

    const [paymentMethod, setPatmentMethod] = useState([]);


    const handleSetFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    const handlePaymentTypeChange = (e) => {
        setPaymentType(e.target.value);
    };




    function deleteType(id) {
        setButton(true)
        var data = JSON.stringify({
            id: id,
        });
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}paymentMethod/deleteType`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                NotificationManager.success(response.data.resultMessage, '', 3000);
                getPaymentDetails();
                setButton(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function statusUpdate(id, status) {
        setButton(true)
        var data = JSON.stringify({
            id: id,
            status: status == "Active" ? "Inactive" : "Active"
        });
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}paymentMethod/statusUpdate`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                NotificationManager.success(response.data.resultMessage, '', 3000);
                getPaymentDetails();
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
            title: 'Type',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record.type}
                </span>
            ),
        },
        {
            title: 'Holder Name',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record.type == "Bank" ? record.accountHolder : record.holderName}
                </span>
            ),
        },
        {
            title: 'UPI ID / Account No',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record.type == "Bank" ? record.accountNo : record.upiId}
                </span>
            ),
        },
        {
            title: 'IFSC Code',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record.ifscCode}
                </span>
            ),
        },
        {
            title: 'Status',
            sorter: true,
            render: (_, record) => (
                <span className='font-extrabold text-[#212529] text-[0.813rem] ml-[5px]'>
                    {record.status}
                </span>
            ),
        },
        {
            title: 'Action',
            sorter: false,
            render: (_, record) => (
                <div className='flex items-center gap-x-4' >
                    <button disabled={button} onClick={() => deleteType(record._id)} className='w-[26px] h-[26px] ml-[12px] text-[0] flex bg-[#f3f3f3] rounded-[6px] border-[1px] border-[solid] border-[#bbbbbb] float-right cursor-pointer items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" xmlSpace="preserve">
                            <path fill="currentColor" d="M16.162,0.213H9.838C9.358,0.535,9.005,1.049,8.78,1.821H2.233c-0.191,0-0.32,0.097-0.32,0.29v2.541    c0,0.193,0.129,0.29,0.32,0.322h21.534c0.224-0.032,0.32-0.129,0.32-0.322V2.111c0-0.193-0.097-0.29-0.32-0.29h-6.514    C16.995,1.049,16.643,0.535,16.162,0.213z"></path>
                            <path fill="currentColor" d="M19.725,25.788c1.088-0.453,1.698-1.256,1.795-2.415c0-0.031,0-0.062,0-0.097l1.058-16.694H3.454    l1.027,16.694c0,0.035,0,0.065,0.031,0.097c0.096,1.159,0.674,1.962,1.765,2.415H19.725z"></path>
                        </svg>
                    </button>
                    <Switch defaultChecked={record.status == "Active" ? true : false} onChange={() => statusUpdate(record._id, record.status)} />
                </div>
            )
        },

    ];

    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    function checkValidation() {

        if (paymentType == "Bank") {
            if (formData.accountNo.trim() === "") {
                setAcNumValidationError('Please enter account number')
                document.querySelector('.acnum').classList.remove('hidden');
            }
            if (formData.accountHolder.trim() === "") {
                setAcHolderValidationError('Please enter holder name')
                document.querySelector('.acholder').classList.remove('hidden');
            }
            if (formData.ifscCode.trim() === "") {
                setIfscValidationError('Please enter ifsc code')
                document.querySelector('.ifsccode').classList.remove('hidden');
            }

            if (formData.bankName.trim() === "") {
                setBankValidationError('Please enter bank name')
                document.querySelector('.bankname').classList.remove('hidden');
            }

            if (formData.accountNo !== "" && formData.accountHolder !== "" && formData.ifscCode !== "" && formData.bankName !== "") {
                return true
            }
            return false;
        } else {
            if (formData.upiId.trim() === "") {
                setUPIValidationError('Please enter upi id')
                document.querySelector('.upiid').classList.remove('hidden');
            }
            if (formData.holderName.trim() === "") {
                setHolderValidationError('Please enter holder name')
                document.querySelector('.holder').classList.remove('hidden');
            }
            if (formData.upiId !== "" && formData.holderName !== "") {
                return true
            }
            return false;
        }


    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (paymentType) {
            formData.type = paymentType

            if (checkValidation()) {

                var config = {
                    method: "post",
                    url: `${Appconfig.apiUrl}paymentMethod/addMethod`,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: formData,
                };

                axios(config)
                    .then(function (response) {
                        if (response.data.result) {
                            NotificationManager.success(response.data.resultMessage, '', 3000);
                            setFormData({
                                accountNo: "",
                                accountHolder: "",
                                ifscCode: "",
                                bankName: "",
                                upiId: "",
                                holderName: ""
                            });
                            getPaymentDetails();
                            setOpenBanner(false);
                        } else {
                            NotificationManager.error(response.data.resultMessage, '', 3000);
                        }
                        setButton(false);

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        } else {
            NotificationManager.error("Please Select Any Payment Type", '', 3000);

        }
    };

    const getPaymentDetails = () => {

        let site_code = Appconfig.sitecodes;
        let data = JSON.stringify({
            site_code: site_code,
            user_id: userInfo?._id
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}paymentMethod/getPaymentDetails`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                if (response.data.result) {
                    setPatmentMethod(response.data.resultData);
                } else {
                    NotificationManager.error(response.data.resultMessage, '', 3000);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    useEffect(() => {
        getPaymentDetails();
    }, [])


    return (
        <>
            <NotificationContainer />
            <Modal className='password-model relative top-1 lg:top-7 lg:!w-[34vw]'
                footer={[
                    <div className='col-span-12 gap-2 flex flex-shrink-0 flex-wrap items-center justify-end p-[1rem] border-t-[1px] border-t-[#dee2e6]'>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="m-[5px] text-[#fff]  bg-[#0d6efd] border-[#0d6efd]  font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]" disabled={button} onClick={(e) => handleSubmit(e)}>Add</button>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="bg-[linear-gradient(-180deg,_#b8beca_0%,_#989595_100%)] font-bold !px-[10px] !py-[5px] !text-[.875rem] m-[5px] text-[#212529] text-center no-underline align-middle border-[1px] border-[solid] border-[transparent] rounded-[.375rem]" onClick={() => setOpenBanner(false)}>Cancel</button>
                    </div>
                ]}
                onCancel={() => setOpenBanner(false)}
                open={openBanner} >
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-t-[5px] h-[35px] bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                        <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>{'Add Method'}</h5>
                        <button type="button" onClick={() => setOpenBanner(false)} >
                            <span className='text-[1.3125rem] font-bold'>×</span>
                        </button>
                    </div>
                    <div className="col-span-12 !bg-[#ffffff] !text-[#23282c] relative flex-auto p-4">
                        <div className="grid">
                            <div className="col-span-12 lg:col-span-6">
                                <div className="mb-4 !text-[#23282c]">
                                    {/* Payment Type Selection */}
                                    <div className="col-span-12 lg:col-span-6 mb-4">
                                        <label
                                            htmlFor="datasourceSelect"
                                            className="inline-block mb-[.5rem] text-[0.813rem] font-normal leading-normal"
                                        >
                                            Method
                                        </label>
                                        <select
                                            id="paymentType"
                                            name="paymentType"
                                            className="pl-[.95rem] [text-indent:1px] appearance-none block w-full h-[calc(1.5em+.75rem+2px)] px-[.75rem] py-[.375rem] text-[.875rem] font-normal leading-normal text-[#5c6873] border-[1px] border-[solid] border-[#ccc] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] [word-wrap:normal]"
                                            style={{
                                                background:
                                                    "#fff url(https://aura444.com/Down-Arrow.696f11d0c8727f3b.svg) right 93% / 8% 12px no-repeat",
                                                backgroundPosition: "right 0% bottom 45%",
                                            }}
                                            onChange={handlePaymentTypeChange}
                                            value={paymentType}
                                        >
                                            <option
                                                className="[text-indent:1px] text-[.875rem] leading-normal text-[#5c6873]"
                                                disabled
                                                value={""}
                                            >
                                                Select Type
                                            </option>
                                            {Appconfig.account_type?.map((type, index) => (
                                                <option
                                                    key={index}
                                                    className="[text-indent:1px] text-[.875rem] leading-normal text-[#5c6873]"
                                                    value={type}
                                                >
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Dynamic Form Fields */}
                                    {paymentType === "Bank" ? (
                                        <div id="bank_method">
                                            <h3 className="mb-4 !text-[#23282c] font-medium">Bank Payment Details</h3>
                                            <div className="col-span-12 lg:col-span-12 grid grid-cols-2 gap-4">
                                                <div className="mb-4">
                                                    <label className="inline-block mb-[.5rem] !text-[#23282c]" htmlFor="accountNo">
                                                        Account No.
                                                    </label>
                                                    <Input
                                                        id="accountNo"
                                                        name="accountNo"
                                                        required
                                                        className="antd-password"
                                                        placeholder="Enter Bank Account Number"
                                                        onChange={(e) => handleSetFormData(e)}
                                                    />
                                                    <span className="acnum error-message hidden">
                                                        <div className=''>{AcNumValidationError}</div>
                                                    </span>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="inline-block mb-[.5rem] !text-[#23282c]" htmlFor="accountHolder">
                                                        Account Holder Name
                                                    </label>
                                                    <Input
                                                        id="accountHolder"
                                                        name="accountHolder"
                                                        required
                                                        className="antd-password"
                                                        placeholder="Enter Bank Holder Name"
                                                        onChange={(e) => handleSetFormData(e)}
                                                    />
                                                    <span className="acholder error-message hidden">
                                                        <div className=''>{AcHolderValidationError}</div>
                                                    </span>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="inline-block mb-[.5rem] !text-[#23282c]" htmlFor="ifscCode">
                                                        IFSC Code
                                                    </label>
                                                    <Input
                                                        id="ifscCode"
                                                        name="ifscCode"
                                                        required
                                                        className="antd-password"
                                                        placeholder="Enter IFSC Code"
                                                        onChange={(e) => handleSetFormData(e)}
                                                    />
                                                    <span className="ifsccode error-message hidden">
                                                        <div className=''>{IfscValidationError}</div>
                                                    </span>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="inline-block mb-[.5rem] !text-[#23282c]" htmlFor="bankName">
                                                        Bank Name
                                                    </label>
                                                    <Input
                                                        id="bankName"
                                                        name="bankName"
                                                        required
                                                        className="antd-password"
                                                        placeholder="Enter Bank Name"
                                                        onChange={(e) => handleSetFormData(e)}
                                                    />
                                                    <span className="bankname error-message hidden">
                                                        <div className=''>{BankValidationError}</div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : paymentType ? (
                                        <div id="other_method">
                                            <h3 className="mb-4 !text-[#23282c] font-medium">
                                                {paymentType} Payment Details
                                            </h3>
                                            <div className="col-span-12 lg:col-span-12 grid grid-cols-2 gap-4">
                                                <div className="mb-4">
                                                    <label className="inline-block mb-[.5rem] !text-[#23282c]" htmlFor="upiId">
                                                        {paymentType} ID
                                                    </label>
                                                    <Input
                                                        id="upiId"
                                                        name="upiId"
                                                        required
                                                        className="antd-password"
                                                        placeholder={`Enter ${paymentType} ID`}
                                                        onChange={(e) => handleSetFormData(e)}
                                                    />
                                                    <span className="upiid error-message hidden">
                                                        <div className=''>{UPIValidationError}</div>
                                                    </span>
                                                </div>
                                                <div className="mb-4">
                                                    <label
                                                        className="inline-block mb-[.5rem] !text-[#23282c]"
                                                        htmlFor="holderName"
                                                    >
                                                        {paymentType} Holder Name
                                                    </label>
                                                    <Input
                                                        id="holderName"
                                                        name="holderName"
                                                        required
                                                        className="antd-password"
                                                        placeholder={`Enter ${paymentType} Holder Name`}
                                                        onChange={(e) => handleSetFormData(e)}
                                                    />
                                                    <span className="holder error-message hidden ">
                                                        <div className=''>{HolderValidationError}</div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
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
                                <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Add Method</h5>
                            </div>

                            <div className='col-span-12 '>

                                <div className='bg-[#fff] border-[1px] border-[#0000002d] '>

                                    <div className='text-end p-[0.75rem] flex-auto '>
                                        <button type='button ' className='text-white bg-[linear-gradient(180deg,_#2A3A43_27%,_#1C282D_83%)] text-[.875rem] rounded-[.25rem] px-[10px]  mt-[10px]  py-[5px] '
                                            onClick={() => setOpenBanner(true)}
                                        >
                                            Add Method
                                        </button>
                                    </div>
                                    <div className='p-[0.75rem] flex-auto '>
                                        <Table

                                            columns={columns}
                                            className='downline-list'
                                            bordered
                                            dataSource={paymentMethod}
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


export default PaymentMethods;
