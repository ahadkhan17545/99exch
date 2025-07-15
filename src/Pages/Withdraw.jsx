import React, { useState, useEffect } from "react";
import Appconfig from "../config/config";
import Helper from "../helper";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Modal, Input, Table, Image, Button, Switch } from "antd";
import { getPaymentMethods } from "../redux/slice/paymentMethod/paymentMethodSlice";
import { useSelector, useDispatch } from "react-redux";

const Withdraw = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = Helper();
  const userInfos = useSelector((state) => state.paymentMethods); // Use selector to access state
  const paymentMethod = userInfos?.paymentMethods || [];
  // console.log("paymentMethod", paymentMethod);

  const [balance, setBalance] = useState(0);
  const [exposure, setExposure] = useState(0);
  let balanceWithExp = balance - Math.abs(exposure);

  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("new-account"); // Set default to 'new-account'
  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
  const [buttonText, setButtonText] = useState("Submit"); // State for button text
  const [showPaymentMethods, setPaymentMethods] = useState(false);
  const [showAddAccountForm, setAddAccountForm] = useState(false);
  const [showBankForm, setShowBankForm] = useState("");
  const [showUpiForm, setShowUpiForm] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false); // State to handle Edit form popup visibility
  const [editingSection, setEditingSection] = useState(null); // Track which section is being edited
  const [showPreviousAccount, setShowPreviousAccount] = useState(false);
  const [amountValue, setAmountValue] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [bankName, setBankName] = useState("");

  const [upiId, setUpiId] = useState("");
  const [upiHolder, setUpiHolder] = useState("");
  const [button, setButton] = useState(false);

  const [AcNumValidationError, setAcNumValidationError] = useState(
    "Please enter account number"
  );
  const [AcHolderValidationError, setAcHolderValidationError] = useState(
    "Please enter account holder name"
  );
  const [IfscValidationError, setIfscValidationError] = useState(
    "Please enter ifsc code"
  );
  const [BankValidationError, setBankValidationError] = useState(
    "Please enter bank name"
  );
  const [UPIValidationError, setUPIValidationError] =
    useState("Please enter id");
  const [HolderValidationError, setHolderValidationError] = useState(
    "Please enter holder name"
  );

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
  }, []);

  const getUserPaymentMethods = () => {
    dispatch(
      getPaymentMethods({
        site_code: Appconfig.sitecodes,
        user_id: userInfo?._id,
      })
    );
  };

  useEffect(() => {
    if (userInfo) {
      getBalance();
    }
  }, [userInfo]);

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
          setBalance(response.data.resultData?.balance);
          setExposure(response.data.resultData?.exposure);
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
    setPaymentMethods(false);
  };

  // Function to handle button click
  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  // Function to handle payment option click
  const handleClick = (option) => {
    setSelectedOption(selectedOption === option ? null : option); // Toggle between opening/closing
  };

  const handlePaymentMethod = () => {
    setPaymentMethods(!showPaymentMethods);
    setShowPreviousAccount(false);

    // Hide all forms using an array of form setters
    [setShowUpiForm].forEach((setter) => setter(false));
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
      console.log("accountNumber", accountNumber);
      if (!accountNumber) {
        setAcNumValidationError("Please enter account number");
        document.querySelector(".acnum").classList.remove("hidden");
      }
      if (!accountHolder) {
        setAcHolderValidationError("Please enter holder name");
        document.querySelector(".acholder").classList.remove("hidden");
      }
      if (!ifscCode) {
        setIfscValidationError("Please enter ifsc code");
        document.querySelector(".ifsccode").classList.remove("hidden");
      }

      if (!bankName) {
        setBankValidationError("Please enter bank name");
        document.querySelector(".bankname").classList.remove("hidden");
      }

      if (accountNumber && accountHolder && ifscCode && bankName) {
        return true;
      }
      return false;
    } else {
      if (!upiId) {
        setUPIValidationError("Please enter upi id");
        document.querySelector(".upiid").classList.remove("hidden");
      }
      if (!upiHolder) {
        setHolderValidationError("Please enter holder name");
        document.querySelector(".holder").classList.remove("hidden");
      }
      if (upiId && upiHolder) {
        return true;
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
          method: "post",
          url: `${Appconfig.apiUrl}withdraw/addWithdrawRequest`,
          headers: {
            "Content-Type": "application/json",
          },
          data: formData,
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
      toast.error("Please select payment method or fill all the fields!", {
        autoClose: 2000,
      });
    }
  };

  function cancelWithdrawRequest(record, status) {
    setButton(true);
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
        setButton(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const historyColumns = [
    {
      title: "User Name",
      sorter: true,
      render: (_, record) => <span className="">{record?.user_name}</span>,
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
      title: "Type",
      sorter: true,
      render: (_, record) => <span className="">{record?.type}</span>,
    },
    ...(withdrawHistory.some((record) => record.bank_name) // Check if any record has a bank name
      ? [
        {
          title: "Bank Name",
          sorter: true,
          render: (_, record) => (
            <span className="">{record?.bank_name || "N/A"}</span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.account_no) // Check if any record has a bank name
      ? [
        {
          title: "Account Num",
          sorter: true,
          render: (_, record) => (
            <span className="">{record?.account_no || "N/A"}</span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.account_holder_name) // Check if any record has a bank name
      ? [
        {
          title: "Account Holder Name",
          sorter: true,
          render: (_, record) => (
            <span className="">{record?.account_holder_name || "N/A"}</span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.ifsc_code) // Check if any record has a bank name
      ? [
        {
          title: "IFSC Code",
          sorter: true,
          render: (_, record) => (
            <span className="">{record?.ifsc_code || "N/A"}</span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.upi_id) // Check if any record has a bank name
      ? [
        {
          title: "UPI Id",
          sorter: true,
          render: (_, record) => (
            <span className="">{record?.upi_id || "N/A"}</span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    ...(withdrawHistory.some((record) => record.holder_name) // Check if any record has a bank name
      ? [
        {
          title: "Holder Name",
          sorter: true,
          render: (_, record) => (
            <span className="">{record?.holder_name || "N/A"}</span>
          ),
        },
      ]
      : []), // If no record has a bank name, exclude this column
    {
      title: "Remarks",
      sorter: true,
      render: (_, record) => (
        <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
          {record?.remark}
        </span>
      ),
    },
    {
      title: "Amount",
      sorter: true,
      render: (_, record) => <span className="">{record?.amount}</span>,
    },
    {
      title: "Request Date",
      sorter: true,
      render: (_, record) => (
        <span className="">{new Date(record?.createdAt).toLocaleString()}</span>
      ),
    },
    {
      title: "Status",
      sorter: true,
      render: (_, record) => (
        <div className="">
          {record?.status == "Request" ? (
            <button
              disabled={button}
              onClick={() => cancelWithdrawRequest(record, "Cancel")}
              className="custom-button"
            >
              <span>Cancel</span>
            </button>
          ) : (
            record?.status
          )}
        </div>
      ),
    },
  ];

  const getWithdrawHistory = () => {
    let site_code = Appconfig.sitecodes;
    let data = JSON.stringify({
      site_code: site_code,
      user_id: userInfo?._id,
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
    getWithdrawHistory();
    handlePaymentMethod();
  }, []);

  return (
    <>
      <div className="text-[#000] bg-[#eef0f3] rounded-[10px] text-[1.25rem]">
        <div className="p-[10px]">
          <p className="uppercase font-bold rounded-[5px] bg-[#343435] p-[5px] shadow-[1px_1px_4px_gray] text-white text-[15px]">
            <span className="p-1">Withdraw</span>
          </p>

          <div className="mt-[10px] border-none rounded-[10px] shadow-[1px_2px_4px_gray] bg-white text-center p-[2px_10px] relative">
            <h3 className="text-[#000] text-[1rem] font-bold border-b border-[#dfdcdc]">
              Withdraw Funds
            </h3>
            <p className="text-[#343435] text-[0.8rem] font-bold mt-2">
              This form is for withdrawing the amount from the main wallet only.
            </p>
            <ul className="flex flex-row list-none m-0 p-0 overflow-x-hidden scroll-smooth w-full whitespace-nowrap">
              <li
                className={`bg-gradient-to-br from-[rgba(25,74,149,1)] to-[rgba(12,94,136,1)] p-[7px] m-[10px] text-white shadow-[0px_2px_2px_gray] w-[43%] text-[0.688rem] ${selectedOption === "new-account" ? "border border-[#C10930] activated" : ""
                  }`}
                onClick={() => handleClick("new-account")}
              >
                <button
                  className="border-none bg-transparent text-white"
                  onClick={handlePaymentMethod}
                >
                  Use New Account
                </button>
              </li>

              <li
                className={`bg-gradient-to-br from-[rgba(25,74,149,1)] to-[rgba(12,94,136,1)] p-[7px] m-[10px] text-white shadow-[0px_2px_2px_gray] w-[43%] text-[0.688rem] ${selectedOption === "previous-account" ? "activated" : ""
                  }`}
                onClick={() => {
                  paymentMethod?.length > 0 && handleClick("previous-account");
                }}
              >
                <button
                  className="border-none bg-transparent text-white"
                  onClick={handlePreviousAccount}
                  disabled={!paymentMethod || paymentMethod.length === 0}
                >
                  Use Previous Account
                </button>
              </li>
            </ul>
          </div>

          {showPaymentMethods && (
            <div className="mt-[15px]">
              <ul className="grid grid-cols-3 gap-[10px]">
                {Appconfig.withdraw_account_type?.map((type, index) => (
                  <button
                    className="border-none"
                    onClick={() => handleFormToggle(type)}
                    key={index}
                  >
                    <li
                      className={`bg-white rounded-[10px] shadow-[1px_2px_5px_gray] grid justify-evenly items-center justify-items-center text-[0.625rem] ${type === showUpiForm ? "activated" : ""
                        }`}
                    >
                      {type == "Bank" && (
                        <img
                          src="../Images/bank.webp"
                          alt={type}
                          className="w-[60%] aspect-[3/2] object-contain"
                        />
                      )}
                      {type == "Gpay" && (
                        <img
                          src="../Images/G-pay.webp"
                          alt={type}
                          className="w-[60%] aspect-[3/2] object-contain"
                        />
                      )}
                      {type == "UPI" && (
                        <img
                          src="../Images/UPI-Color.webp"
                          alt={type}
                          className="w-[60%] aspect-[3/2] object-contain"
                        />
                      )}
                      {type == "Phonepe" && (
                        <img
                          src="../Images/phonepe.webp"
                          alt={type}
                          className="w-[60%] aspect-[3/2] object-contain"
                        />
                      )}
                      {type == "Paytm" && (
                        <img
                          src="../Images/paytm.webp"
                          alt={type}
                          className="w-[60%] aspect-[3/2] object-contain"
                        />
                      )}
                    </li>
                  </button>
                ))}
              </ul>
            </div>
          )}

          {showPreviousAccount && (
            <div className="mt-0 flex flex-col justify-center content-center flex-wrap items-center">
              {paymentMethod?.length > 0 &&
                paymentMethod?.map((method, index) => (
                  <div
                    key={index}
                    className={`${showUpiForm == method?.type ? "activated" : ""
                      }`}
                    onClick={() => selectPaymentDetail(method)}
                  >
                    {/* ... rest of your profile container JSX */}
                  </div>
                ))}
            </div>
          )}

          {showUpiForm != "" && (
            <div>
              <div className="bg-white rounded-[10px] p-2">
                <form onSubmit={handleSubmitClick}>
                  <h4 className="text-[#000] text-[1rem] text-center font-bold border-b border-[#dfdcdc]">
                    Available to Withdrawl: &#8377;{" "}
                    {balance && Number(balanceWithExp).toFixed(2)}
                  </h4>
                  <div>
                    <p className="text-center text-[12px] font-[100] text-shadow-[0px_0px_2px_gray]">
                      {!showPreviousAccount && "Submit Your Account Details"}
                    </p>
                  </div>

                  {showUpiForm == "Bank" && !showPreviousAccount && (
                    <>
                      <div className="my-[10px]">
                        <p>
                          <input
                            type="number"
                            value={amountValue}
                            onChange={(e) => setAmountValue(e.target.value)}
                            placeholder=" &#8377;  &nbsp; Enter Amount"
                            className="w-full h-[30px] text-[0.8rem] mb-[6px] rounded border-none shadow-[0_0_1px_gray] font-[100] pl-[5px] focus:outline-none focus:border-none"
                          />
                        </p>
                        <p>
                          <input
                            type="text"
                            value={ifscCode}
                            onChange={(e) => setIfscCode(e.target.value)}
                            placeholder=" Enter IFSC Code"
                            className="w-full h-[30px] text-[0.8rem] rounded border-none shadow-[0_0_1px_gray] font-[100] pl-[5px] focus:outline-none focus:border-none"
                          />
                          <span className="ifsccode error-message hidden">
                            <div>{IfscValidationError}</div>
                          </span>
                        </p>
                      </div>
                      <div className="my-[10px]">
                        <p>
                          <input
                            type="number"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            placeholder=" Enter Account Number"
                            className="w-full h-[30px] text-[0.8rem] rounded border-none shadow-[0_0_1px_gray] font-[100] pl-[5px] focus:outline-none focus:border-none"
                          />
                        </p>
                        <p>
                          <span className="ifsccode error-message hidden">
                            <div>{AcNumValidationError}</div>
                          </span>
                        </p>
                      </div>
                      <div className="my-[10px]">
                        <p>
                          <input
                            type="text"
                            value={accountHolder}
                            onChange={(e) => setAccountHolder(e.target.value)}
                            placeholder="Enter Account Name"
                            className="w-full h-[30px] text-[0.8rem] mb-[6px] rounded border-none shadow-[0_0_1px_gray] font-[100] pl-[5px] focus:outline-none focus:border-none"
                          />
                        </p>
                        <p>
                          <span className="ifsccode error-message hidden">
                            <div>{AcHolderValidationError}</div>
                          </span>
                        </p>
                      </div>
                    </>
                  )}

                  {(showUpiForm == "UPI" ||
                    showUpiForm == "Phonepe" ||
                    showUpiForm == "Gpay" ||
                    showUpiForm == "Paytm") &&
                    !showPreviousAccount && (
                      <>
                        <div className="my-[10px]">
                          <p>
                            <input
                              type="number"
                              value={amountValue}
                              onChange={(e) => setAmountValue(e.target.value)}
                              placeholder=" &#8377;  &nbsp; Enter Amount"
                              className="w-full h-[30px] text-[0.8rem] mb-[6px] rounded border-none shadow-[0_0_1px_gray] font-[100] pl-[5px] focus:outline-none focus:border-none"
                            />
                          </p>
                          <p>
                            <input
                              type="text"
                              value={upiId}
                              onChange={(e) => setUpiId(e.target.value)}
                              placeholder={`Enter ${showUpiForm} ID`}
                              className="w-full h-[30px] text-[0.8rem] rounded border-none shadow-[0_0_1px_gray] font-[100] pl-[5px] focus:outline-none focus:border-none"
                            />
                            <span className="upiid error-message hidden">
                              <div>{UPIValidationError}</div>
                            </span>
                          </p>
                        </div>
                        <div className="my-[10px]">
                          <p>
                            <input
                              type="text"
                              value={upiHolder}
                              onChange={(e) => setUpiHolder(e.target.value)}
                              placeholder={`Enter ${showUpiForm} Holder Name`}
                              className="w-full h-[30px] text-[0.8rem] mb-[6px] rounded border-none shadow-[0_0_1px_gray] font-[100] pl-[5px] focus:outline-none focus:border-none"
                            />
                          </p>
                          <p>
                            <span className="upiid error-message hidden">
                              <div>{HolderValidationError}</div>
                            </span>
                          </p>
                        </div>
                      </>
                    )}

                  <div className="mb-[5px]">
                    <p className="flex justify-center items-center">
                      <input type="checkbox" className="w-[15px] h-[20px]" />
                      <div className="text-[12px] ml-1">
                        I have read the term and condition <span className="text-blue-600">the terms of payments and deposit policy
                        </span>
                      </div>
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      disabled={isSubmitted}
                      className={`relative border-0 outline-none bg-[#343435] text-white text-lg rounded text-center p-2 w-[40%] shadow-[0_6px_20px_-5px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer ${isSubmitted ? "active bg-[#d90429]" : ""
                        }`}
                    >
                      <p className={`${isSubmitted ? "mr-[100px]" : ""}`}>
                        {buttonText}
                      </p>
                      <div
                        className={`w-[50px] h-[50px] rounded-[40px] shadow-[0_0_12px_-2px_rgba(0,0,0,0.2)] absolute top-0 right-[-40px] opacity-0 bg-[#d90429] ${isSubmitted ? "active right-0 opacity-100" : ""
                          }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          className="w-[40px] m-[5px_8px]"
                        >
                          <path
                            fill="transparent"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            className={`${isSubmitted ? "stroke-dashoffset-0" : ""
                              }`}
                            style={{
                              strokeWidth: 3,
                              stroke: "#fff",
                              strokeDasharray: 34,
                              strokeDashoffset: isSubmitted ? 0 : 34,
                              strokeLinecap: "round",
                              transition: isSubmitted ? "0.6s" : "",
                              transitionDelay: isSubmitted ? "0.6s" : "",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="p-[10px] border-t-2 border-[#dfdcdc]">
          <div>
            <h3 className="text-black text-center font-bold">Withdraw History</h3>
          </div>

          <div className="overflow-x-auto">
            <Table
              columns={historyColumns}
              className="downline-list"
              bordered
              dataSource={withdrawHistory}
              pagination={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
