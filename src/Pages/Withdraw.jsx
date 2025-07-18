import React, { useState, useEffect } from "react";
import Appconfig from '../config/config'
import Helper from "../helper";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Modal, Input, Table, Image, Button, Switch } from 'antd';
import { getPaymentMethods } from '../redux/slice/paymentMethod/paymentMethodSlice';
import { useSelector, useDispatch } from 'react-redux';



const Withdraw = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = Helper();
  const userInfos = useSelector((state) => state.paymentMethods); // Use selector to access state
  const paymentMethod = userInfos?.paymentMethods || [];
  console.log('paymentMethod', paymentMethod)

  const [balance, setBalance] = useState(0)
  const [exposure, setExposure] = useState(0)
  let balanceWithExp = balance - Math.abs(exposure);


  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("new-account"); // Set default to 'new-account'
  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
  const [buttonText, setButtonText] = useState("Submit"); // State for button text
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [showAddAccountForm, setAddAccountForm] = useState(false);
  const [showBankForm, setShowBankForm] = useState('');
  const [showUpiForm, setShowUpiForm] = useState('');
  const [showEditPopup, setShowEditPopup] = useState(false); // State to handle Edit form popup visibility
  const [editingSection, setEditingSection] = useState(null); // Track which section is being edited
  const [showPreviousAccount, setShowPreviousAccount] = useState(false);
  const [amountValue, setAmountValue] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [bankName, setBankName] = useState("");
  const [showWithdrawHistory, setShowWithdrawHistory] = useState(false);



  const [upiId, setUpiId] = useState("");
  const [upiHolder, setUpiHolder] = useState("");
  const [button, setButton] = useState(false)



  const [AcNumValidationError, setAcNumValidationError] = useState("Please enter account number");
  const [AcHolderValidationError, setAcHolderValidationError] = useState("Please enter account holder name");
  const [IfscValidationError, setIfscValidationError] = useState("Please enter ifsc code");
  const [BankValidationError, setBankValidationError] = useState("Please enter bank name");
  const [UPIValidationError, setUPIValidationError] = useState("Please enter id");
  const [HolderValidationError, setHolderValidationError] = useState("Please enter holder name");

  const [withdrawHistory, setWithdrawHistory] = useState([]);



  const [bankDetails, setBankDetails] = useState({
    name: "Example",
    accountNumber: "12345678xxxx",
    ifscCode: "SBIN000002",
    bankName: "State Bank of India",
  });

  const [UPIDetails, setUPIDetails] = useState({
    upi_id: "1234fgd",
    phoneNumber: "12345678xxxx",
  });

  // Handle changes in the Bank input fields during editing
  const handleBankInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({
      ...bankDetails,
      [name]: value,
    });
  };


  useEffect(() => {
    getUserPaymentMethods();
  }, [])

  const getUserPaymentMethods = () => {
    dispatch(getPaymentMethods({
      site_code: Appconfig.sitecodes,
      user_id: userInfo?._id
    }));
  }


  useEffect(() => {
    if (userInfo) {
      getBalance();
    }
  }, [userInfo])

  function getBalance() {
    var data = JSON.stringify({
      user_id: userInfo?._id,
    });

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}ledger/getUserBalance`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.result == 0) {
        } else {
          setBalance(response.data.resultData?.balance)
          setExposure(response.data.resultData?.exposure)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  // Handle changes in the UPI input fields during editing
  const handleUPIInputChange = (e) => {
    const { name, value } = e.target;
    setUPIDetails({
      ...UPIDetails,
      [name]: value,
    });
  };

  const toggleEditPopup = (section) => {
    setEditingSection(section); // Set the section (either "bank" or "upi")
    setShowEditPopup(!showEditPopup); // Toggle the popup
  };

  function deletePaymentDetails(id) {
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
        if (response.data.result) {
          toast.success(response.data.resultMessage, { autoClose: 2000 });
          getUserPaymentMethods();
        } else {
          toast.error(response.data.resultMessage, { autoClose: 2000 });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handlePreviousAccount = () => {
    setShowPreviousAccount(!showPreviousAccount);
    setShowPaymentMethods(false)
  }

  // Function to handle button click
  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  // Function to handle payment option click
  const handleClick = (option) => {
    setSelectedOption(selectedOption === option ? null : option); // Toggle between opening/closing
  };

  const handlePaymentMethod = () => {
    setShowPaymentMethods(!showPaymentMethods);
    setShowPreviousAccount(false);

    // Hide all forms using an array of form setters
    [
      setShowUpiForm,
    ].forEach((setter) => setter(false));
  };

  const handleFormToggle = (form) => {
    setUpiId("");
    setUpiHolder("");
    setShowUpiForm(form);
  };

  // Button values
  const buttonValues = [500, 1000, 1500, 2000, 2500, 3000];

  const tickMark = (
    <svg
      width="58"
      height="45"
      viewBox="0 0 58 45"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65"
      />
    </svg>
  );

  function checkValidation() {

    if (showUpiForm == "Bank") {
      console.log('accountNumber', accountNumber);
      if (!accountNumber) {
        setAcNumValidationError('Please enter account number')
        document.querySelector('.acnum').classList.remove('hidden');
      }
      if (!accountHolder) {
        setAcHolderValidationError('Please enter holder name')
        document.querySelector('.acholder').classList.remove('hidden');
      }
      if (!ifscCode) {
        setIfscValidationError('Please enter ifsc code')
        document.querySelector('.ifsccode').classList.remove('hidden');
      }

      if (!bankName) {
        setBankValidationError('Please enter bank name')
        document.querySelector('.bankname').classList.remove('hidden');
      }

      if (accountNumber && accountHolder && ifscCode && bankName) {
        return true
      }
      return false;
    } else {
      if (!upiId) {
        setUPIValidationError('Please enter upi id')
        document.querySelector('.upiid').classList.remove('hidden');
      }
      if (!upiHolder) {
        setHolderValidationError('Please enter holder name')
        document.querySelector('.holder').classList.remove('hidden');
      }
      if (upiId && upiHolder) {
        return true
      }
      return false;
    }
  }

  // Handle submit click and toggle button text & style
  const handleSubmitClick = async (e) => {
    e.preventDefault();

    if (userInfo && showUpiForm && amountValue) {

      if (checkValidation()) {

        const formData = new FormData();

        formData.append("master_id", userInfo?.master_id);
        formData.append("user_id", userInfo?._id);
        formData.append("site_code", userInfo?.site_code);
        formData.append("user_name", userInfo?.user_name);
        formData.append("type", showUpiForm);
        formData.append("bank_name", bankName);
        formData.append("account_no", accountNumber);
        formData.append("account_holder_name", accountHolder);
        formData.append("ifsc_code", ifscCode);
        formData.append("holder_name", upiHolder);
        formData.append("upi_id", upiId);
        formData.append("amount", amountValue);

        var config = {
          method: 'post',
          url: `${Appconfig.apiUrl}withdraw/addWithdrawRequest`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: formData
        };
        axios(config)
          .then(function (response) {
            if (response.data.result) {
              setButtonText("Thanks");
              setIsSubmitted(true);
              toast.success(response.data.resultMessage, { autoClose: 2000 });

              setTimeout(() => {
                navigate("/");
              }, 2000);

            } else {
              toast.error(response.data.resultMessage, { autoClose: 2000 });
            }

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else {
      toast.error("Please select payment method or fill all the fields!", { autoClose: 2000 });
    }
  };

  function cancelWithdrawRequest(record, status) {
    setButton(true)
    var data = JSON.stringify({
      record: record,
      status: status,
      master_details: userInfo,
    });
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}withdraw/confirmWithdraw`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.result) {
          toast.success(response.data.resultMessage, { autoClose: 2000 });
          getWithdrawHistory();
        } else {
          toast.error(response.data.resultMessage, { autoClose: 2000 });
        }
        setButton(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const historyColumns = [
    {
      title: 'User Name',
      sorter: true,
      render: (_, record) => (
        <span className=''>
          {record?.user_name}
        </span>
      ),
    },
    // {
    //   title: 'User Id',
    //   sorter: true,
    //   render: (_, record) => (
    //     <span className=''>
    //       {record?.user_id}
    //     </span>
    //   ),
    // },
    {
      title: 'Type',
      sorter: true,
      render: (_, record) => (
        <span className=''>
          {record?.type}
        </span>
      ),
    },
    ...(withdrawHistory.some((record) => record.bank_name) // Check if any record has a bank name
      ? [
        {
          title: 'Bank Name',
          sorter: true,
          render: (_, record) => (
            <span className=''>
              {record?.bank_name || 'N/A'}
            </span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.account_no) // Check if any record has a bank name
      ? [
        {
          title: 'Account Num',
          sorter: true,
          render: (_, record) => (
            <span className=''>
              {record?.account_no || 'N/A'}
            </span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.account_holder_name) // Check if any record has a bank name
      ? [
        {
          title: 'Account Holder Name',
          sorter: true,
          render: (_, record) => (
            <span className=''>
              {record?.account_holder_name || 'N/A'}
            </span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.ifsc_code) // Check if any record has a bank name
      ? [
        {
          title: 'IFSC Code',
          sorter: true,
          render: (_, record) => (
            <span className=''>
              {record?.ifsc_code || 'N/A'}
            </span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.upi_id) // Check if any record has a bank name
      ? [
        {
          title: 'UPI Id',
          sorter: true,
          render: (_, record) => (
            <span className=''>
              {record?.upi_id || 'N/A'}
            </span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.holder_name) // Check if any record has a bank name
      ? [
        {
          title: 'Holder Name',
          sorter: true,
          render: (_, record) => (
            <span className=''>
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
        <span className=''>
          {record?.amount}
        </span>
      ),
    },
    {
      title: 'Request Date',
      sorter: true,
      render: (_, record) => (
        <span className=''>
          {(new Date(record?.createdAt)).toLocaleString()}
        </span>
      ),
    },
    {
      title: 'Status',
      sorter: true,
      render: (_, record) => (
        <div className='' >
          {
            record?.status == 'Request' ?
              <button disabled={button} onClick={() => cancelWithdrawRequest(record, 'Cancel')} className='custom-button'>
                <span>Cancel</span>
              </button> : <span
                className={`font-extrabold text-[#212529] text-[0.813rem] ml-[5px] ${record?.status == "Reject" ? "text-[red]" : "text-[green]"
                  }`}
              >
                {record?.status}
              </span>
          }
        </div>
      ),
    },
  ];

  const getWithdrawHistory = () => {

    let site_code = Appconfig.sitecodes;
    let data = JSON.stringify({
      site_code: site_code,
      user_id: userInfo?._id
    });

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}withdraw/getWithdrawHistory`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.result) {
          setWithdrawHistory(response.data.resultData);
        } else {
          toast.error(response.data.resultMessage, { autoClose: 2000 });
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  function selectPaymentDetail(detail) {
    setBankName(detail?.bankName);
    setAccountNumber(detail?.accountNo);
    setAccountHolder(detail?.accountHolder);
    setIfscCode(detail?.ifscCode);
    setUpiId(detail?.upiId);
    setUpiHolder(detail?.holderName);
    setShowUpiForm(detail?.type);
  }


  useEffect(() => {
    getWithdrawHistory()
    handlePaymentMethod();
  }, []);

  return (
    <>
      <div className=" p-[10px] bg-[#f1f5f8]">
        <div className="">
          <p className="uppercase font-bold rounded-[5px] bg-[#343435] p-[5px] shadow-[1px_1px_4px_gray] text-white text-[15px]">
            <span className="p-1">Withdraw</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto py-2 text-gray-800">
          <div className="bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-1 text-gray-900">Withdraw Funds</h2>
            <p className="text-sm text-gray-600 mb-6">
              This form is for withdrawing the amount from the main wallet only.
            </p>

            {/* Select between New or Previous */}
            <div className="flex flex-row gap-4 py-2 mb-1">
              <button
                onClick={() => {
                  handleClick("new-account");
                  setShowPaymentMethods(true);
                  setShowPreviousAccount(false);
                }}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition ${selectedOption === "new-account"
                  ? "bg-[#8000ff] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                Use New Account
              </button>

              <button
                onClick={() => {
                  handleClick("previous-account");
                  setShowPaymentMethods(false);
                  if (paymentMethod?.length > 0) {
                    setShowPreviousAccount(true);
                  } else {
                    setShowPreviousAccount(false);
                  }
                }}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition ${selectedOption === "previous-account"
                  ? "bg-[#8000ff] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                Use Previous Account
              </button>
            </div>


            {/* Show Payment Methods */}
            {showPaymentMethods && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {Appconfig.withdraw_account_type?.map((type) => (
                    <button
                      key={type}
                      onClick={() => setShowUpiForm(type)}
                      className={`flex flex-col items-center justify-center py-2 border rounded-xl transition hover:shadow-lg ${type === showUpiForm ? "ring-2 ring-[#8000ff]" : ""
                        }`}
                    >
                      <img
                        src={`../Images/${type === "Bank"
                          ? "bank.webp"
                          : type === "Gpay"
                            ? "G-pay.webp"
                            : type === "UPI"
                              ? "UPI-Color.webp"
                              : type === "Phonepe"
                                ? "phonepe.webp"
                                : "paytm.webp"
                          }`}
                        alt={type}
                        className="h-8 mb-2"
                      />
                      <span className="text-sm font-medium">{type}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Show Previous Accounts */}
            {selectedOption === "previous-account" && (
              <>
                {paymentMethod?.length > 0 ? (
                  <div className="space-y-4 mb-8">
                    {paymentMethod.map((method) => (
                      <div
                        key={method._id}
                        onClick={() => selectPaymentDetail(method)}
                        className={`border rounded-xl p-4 cursor-pointer transition hover:shadow-lg ${showUpiForm === method?.type ? "ring-2 ring-[#8000ff]" : ""
                          }`}
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={`../Images/${method?.type === "Bank"
                              ? "bank.webp"
                              : method?.type === "Gpay"
                                ? "G-pay.webp"
                                : method?.type === "UPI"
                                  ? "UPI-Color.webp"
                                  : method?.type === "Phonepe"
                                    ? "phonepe.webp"
                                    : "paytm.webp"
                              }`}
                            alt={method?.type}
                            className="w-10 h-10"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{method?.type} Details</h4>
                            <table className="text-sm text-gray-700">
                              <tbody>
                                <tr>
                                  <td className="pr-2">HOLDER NAME:</td>
                                  <td>
                                    {method?.type === "Bank"
                                      ? method?.accountHolder
                                      : method?.holderName}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="pr-2">
                                    {method?.type === "Bank"
                                      ? "A/C NUMBER:"
                                      : "UPI ID:"}
                                  </td>
                                  <td>
                                    {method?.type === "Bank"
                                      ? method?.accountNo
                                      : method?.upiId}
                                  </td>
                                </tr>
                                {method?.type === "Bank" && (
                                  <>
                                    <tr>
                                      <td className="pr-2">IFSC CODE:</td>
                                      <td>{method?.ifscCode}</td>
                                    </tr>
                                    <tr>
                                      <td className="pr-2">BANK NAME:</td>
                                      <td>{method?.bankName}</td>
                                    </tr>
                                  </>
                                )}
                              </tbody>
                            </table>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deletePaymentDetails(method._id);
                            }}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-600">
                    No previous entries available.
                  </div>
                )}
              </>
            )}

            {/* Payment Details Form */}
            {(showUpiForm || selectedOption === "previous-account") && (
              <form onSubmit={handleSubmitClick} className="space-y-4">
                <h4 className="text-lg font-semibold">
                  Available to Withdraw: ₹{balance && Number(balanceWithExp).toFixed(2)}
                </h4>

                <input
                  type="number"
                  value={amountValue}
                  onChange={(e) => setAmountValue(e.target.value)}
                  placeholder="₹ Enter Amount"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
                />

                {showUpiForm === "Bank" && selectedOption === "new-account" && (
                  <>
                    <input
                      type="text"
                      value={ifscCode}
                      onChange={(e) => setIfscCode(e.target.value)}
                      placeholder="Enter IFSC Code"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
                    />
                    <span className="text-red-500 text-sm">{IfscValidationError}</span>

                    <input
                      type="number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      placeholder="Enter Account Number"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
                    />
                    <span className="text-red-500 text-sm">{AcNumValidationError}</span>

                    <input
                      type="text"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      placeholder="Enter Bank Name"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
                    />
                    <span className="text-red-500 text-sm">{BankValidationError}</span>

                    <input
                      type="text"
                      value={accountHolder}
                      onChange={(e) => setAccountHolder(e.target.value)}
                      placeholder="Enter Account Name"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
                    />
                    <span className="text-red-500 text-sm">{AcHolderValidationError}</span>
                  </>
                )}

                {(showUpiForm === "UPI" ||
                  showUpiForm === "Phonepe" ||
                  showUpiForm === "Gpay" ||
                  showUpiForm === "Paytm") &&
                  selectedOption === "new-account" && (
                    <>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder={`Enter ${showUpiForm} ID`}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
                      />
                      <span className="text-red-500 text-sm">{UPIValidationError}</span>

                      <input
                        type="text"
                        value={upiHolder}
                        onChange={(e) => setUpiHolder(e.target.value)}
                        placeholder={`Enter ${showUpiForm} Holder Name`}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
                      />
                      <span className="text-red-500 text-sm">{HolderValidationError}</span>
                    </>
                  )}

                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="accent-[#8000ff]" />
                  <span>
                    I have read the{" "}
                    <a href="#" className="text-[#8000ff]">
                      terms of payment and withdrawal policy
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-3 rounded-lg font-semibold text-white transition ${isSubmitted
                    ? "bg-[#8000ff] cursor-not-allowed"
                    : "bg-[#000] hover:bg-[#8000ff]"
                    }`}
                >
                  {buttonText}
                </button>
              </form>
            )}
          </div>

          <div className="mt-8">
            <button
              onClick={() => setShowWithdrawHistory(!showWithdrawHistory)}
              className="px-4 py-2 bg-[#8000ff] text-white rounded font-semibold"
            >
              {showWithdrawHistory ? "Hide Withdraw History" : "Show Withdraw History"}
            </button>

            {showWithdrawHistory && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Withdraw History
                </h3>
                <div className="overflow-x-auto bg-[#fff] border border-gray-200">
                  <Table
                    columns={historyColumns}
                    className="min-w-full rounded-[10px]"
                    bordered
                    dataSource={withdrawHistory}
                    pagination={true}
                  />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </>

  );
};

export default Withdraw;
