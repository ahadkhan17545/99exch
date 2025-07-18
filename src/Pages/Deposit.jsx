import React, { useState, useEffect, useRef } from "react";
// import "./Deposit.css";
// import "../../../src/App.css";
// import "../Withdraw/Withdraw.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FaFileUpload } from "react-icons/fa";
import Helper from "../helper";
import Appconfig from "../config/config";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getPaymentMethods } from "../redux/slice/paymentMethod/paymentMethodSlice";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Input, Table, Image, Button, Switch } from "antd";

const Deposit = () => {
  const navigate = useNavigate();
  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.paymentMethods); // Use selector to access state


  const [amountValue, setAmountValue] = useState("");
  const [utrValue, setUTRValue] = useState("");
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [methodDetail, setMethodDetail] = useState("");
  const [depositHistory, setDepositHistory] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
  const [buttonText, setButtonText] = useState("Submit"); // State for button text
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [imageList, setImageList] = useState(null);
  const [showDepositHistory, setShowDepositHistory] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const [balance, setBalance] = useState(0);
  const [exposure, setExposure] = useState(0);
  let balanceWithExp = balance - Math.abs(exposure);

  const [buttonValues, setButtonValues] = useState([500, 1000, 2000, 5000, 10000, 15000]);
  const [isEditing, setIsEditing] = useState(false);
  const [showAllRules, setShowAllRules] = useState(false);
  const notesRef = useRef(null);
  const historyRef = useRef(null);


  // const paymentMethod = userInfos?.paymentMethods || [];

  useEffect(() => {
    if (userInfos?.paymentMethods?.length > 0) {
      setPaymentMethod(userInfos?.paymentMethods)
      setSelectedOption(userInfos?.paymentMethods[0]?.type);
      handleClick(userInfos?.paymentMethods[0]?.type, userInfos?.paymentMethods[0]);
    }
  }, [userInfos])



  const rules = [
    "1. Deposit money only in the below available accounts to get the fastest credits and avoid possible delays.",
    "2. Deposits made 45 minutes after the account removal from the site are valid & will be added to their wallets.",
    "3. Site is not responsible for money deposited to Old, Inactive or Closed accounts.",
    "4. After deposit, add your UTR and amount to receive balance.",
    "5. NEFT receiving time varies from 40 minutes to 2 hours."
  ];

  const handleCopy = (value) => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // User is trying to save
      const hasEmpty = buttonValues.some((v) => v === '' || isNaN(v));
      if (hasEmpty) {
        alert('Please fill all the amount fields before saving!');
        return; // Do not toggle if validation fails
      }
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (index, newValue) => {
    const updatedValues = [...buttonValues];
    updatedValues[index] = newValue; // Keep as string
    setButtonValues(updatedValues);
  };


  const handleButtonClick = (value) => {
    // Use Number() only here!
    const addAmount = Number(value) || 0;
    const currentAmount = Number(amountValue) || 0;
    setAmountValue(currentAmount + addAmount);
  };

  const historyColumns = [
    // {
    //   title: "User Name",
    //   sorter: true,
    //   render: (_, record) => (
    //     <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
    //       {record?.user_name}
    //     </span>
    //   ),
    // },
    {
      title: "Type",
      sorter: true,
      render: (_, record) => (
        <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
          {record?.type}
        </span>
      ),
    },
    ...(depositHistory.some((record) => record.bank_name)
      ? [
        {
          title: "Bank Name",
          sorter: true,
          render: (_, record) => (
            <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
              {record?.bank_name || "N/A"}
            </span>
          ),
        },
      ]
      : []),
    ...(depositHistory.some((record) => record.account_no)
      ? [
        {
          title: "Account Num",
          sorter: true,
          render: (_, record) => (
            <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
              {record?.account_no || "N/A"}
            </span>
          ),
        },
      ]
      : []),
    // ...(depositHistory.some((record) => record.account_holder_name)
    //   ? [
    //     {
    //       title: "Account Holder Name",
    //       sorter: true,
    //       render: (_, record) => (
    //         <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
    //           {record?.account_holder_name || "N/A"}
    //         </span>
    //       ),
    //     },
    //   ]
    //   : []),
    // ...(depositHistory.some((record) => record.ifsc_code)
    //   ? [
    //     {
    //       title: "IFSC Code",
    //       sorter: true,
    //       render: (_, record) => (
    //         <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
    //           {record?.ifsc_code || "N/A"}
    //         </span>
    //       ),
    //     },
    //   ]
    //   : []),
    ...(depositHistory.some((record) => record.upi_id)
      ? [
        {
          title: "UPI Id",
          sorter: true,
          render: (_, record) => (
            <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
              {record?.upi_id || "N/A"}
            </span>
          ),
        },
      ]
      : []),
    // ...(depositHistory.some((record) => record.holder_name)
    //   ? [
    //     {
    //       title: "Holder Name",
    //       sorter: true,
    //       render: (_, record) => (
    //         <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
    //           {record?.holder_name || "N/A"}
    //         </span>
    //       ),
    //     },
    //   ]
    //   : []),

    {
      title: "Amount",
      sorter: true,
      render: (_, record) => (
        <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
          {record?.amount}
        </span>
      ),
    },
    {
      title: "Screen Shot",
      sorter: true,
      render: (_, record) => (
        <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
          {record?.screenshot_name == null ? (
            "No Screenshot"
          ) : (
            <Image
              width={70}
              src={`${Appconfig.apiUrl}deposit/${record?.screenshot_name}`}
            />
          )}
        </span>
      ),
    },
    {
      title: "UTR Number",
      sorter: true,
      render: (_, record) => (
        <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
          {record?.utr_number}
        </span>
      ),
    },
    {
      title: "Request Date",
      sorter: true,
      render: (_, record) => (
        <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
          {new Date(record?.createdAt).toLocaleString()}
        </span>
      ),
    },
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
      title: "Status",
      sorter: true,
      render: (_, record) => (
        <span
          className={`font-extrabold text-[#212529] text-[0.813rem] ml-[5px] ${record?.status == "Reject" ? "text-[red]" : "text-[green]"
            }`}
        >
          {record?.status}
        </span>
      ),
    },
  ];

  const getDepositHistory = () => {
    let site_code = Appconfig.sitecodes;
    let data = JSON.stringify({
      site_code: site_code,
      user_id: userInfo?._id,
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
          toast.error(response.data.resultMessage, { autoClose: 2000 });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getDepositHistory();
  }, []);

  // Function to handle button click
  // const handleButtonClick = (value) => {
  //   setAmountValue(value);
  // };

  // Function to handle payment option click
  const handleClick = (option, detail) => {
    setSelectedOption(option);
    setMethodDetail(detail);
  };

  // Button values
  // const buttonValues = [500, 1000, 1500, 2000, 2500, 3000];

  const listRef = useRef(null); // Ref to target the scrolling list

  const scrollLeft = () => {
    listRef.current.scrollBy({
      left: -300, // Scroll left by 150px
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({
      left: 300, // Scroll right by 150px
      behavior: "smooth",
    });
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

  useEffect(() => {
    dispatch(
      getPaymentMethods({
        site_code: Appconfig.sitecodes,
        user_id: userInfo?.master_id ? userInfo?.master_id : Appconfig.superAdmin,
      })
    );
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX); // Get the starting X position of the touch
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX); // Get the X position during the swipe
  };

  // Handle touch end
  const handleTouchEnd = () => {
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {
      // Swipe left (scroll right)
      scrollRight();
    } else if (touchDiff < -50) {
      // Swipe right (scroll left)
      scrollLeft();
    }
  };

  const handleImageUpload = (e) => {
    // console.log('e', e.target.files[0]);
    setImageList(e.target.files[0]);
  };

  const CopyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="var(--icon-color-brand-secondary)"
    >
      <g clipPath="url(#clip0)">
        <path d="M8.50391 14H3.28125C2.07503 14 1.09375 13.0187 1.09375 11.8125V4.40234C1.09375 3.19612 2.07503 2.21484 3.28125 2.21484H8.50391C9.71013 2.21484 10.6914 3.19612 10.6914 4.40234V11.8125C10.6914 13.0187 9.71013 14 8.50391 14ZM3.28125 3.30859C2.67819 3.30859 2.1875 3.79929 2.1875 4.40234V11.8125C2.1875 12.4156 2.67819 12.9062 3.28125 12.9062H8.50391C9.10696 12.9062 9.59766 12.4156 9.59766 11.8125V4.40234C9.59766 3.79929 9.10696 3.30859 8.50391 3.30859H3.28125ZM12.8789 10.4453V2.1875C12.8789 0.981277 11.8976 0 10.6914 0H4.62109C4.31903 0 4.07422 0.244812 4.07422 0.546875C4.07422 0.848938 4.31903 1.09375 4.62109 1.09375H10.6914C11.2945 1.09375 11.7852 1.58444 11.7852 2.1875V10.4453C11.7852 10.7474 12.03 10.9922 12.332 10.9922C12.6341 10.9922 12.8789 10.7474 12.8789 10.4453Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  // Handle submit click and toggle button text & style
  const handleSubmitClick = async (e) => {
    e.preventDefault();

    if (userInfo && selectedOption && amountValue) {
      const formData = new FormData();

      formData.append("master_id", userInfo?.master_id);
      formData.append("user_id", userInfo?._id);
      formData.append("site_code", userInfo?.site_code);
      formData.append("user_name", userInfo?.user_name);
      formData.append("type", selectedOption);
      formData.append("bank_name", methodDetail?.bankName);
      formData.append("account_no", methodDetail?.accountNo);
      formData.append("account_holder_name", methodDetail?.accountHolder);
      formData.append("ifsc_code", methodDetail?.ifscCode);
      formData.append("holder_name", methodDetail?.holderName);
      formData.append("upi_id", methodDetail?.upiId);
      formData.append("amount", amountValue);
      formData.append("utr_number", utrValue);
      formData.append("file", imageList); // Include the uploaded file

      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}deposit/addDepositRequest`,
        headers: {
          "Content-Type": "multipart/form-data",
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
    } else {
      toast.error("Please fill all the fields!", { autoClose: 2000 });
    }
  };

  const handleToggleNotes = () => {
    setShowNotes((prev) => {
      const newValue = !prev;
      if (!prev) {
        // Wait until state updates and DOM renders
        setTimeout(() => {
          notesRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return newValue;
    });
  };

  const handleToggleHistory = () => {
    setShowDepositHistory((prev) => {
      const newValue = !prev;
      if (!prev) {
        setTimeout(() => {
          historyRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return newValue;
    });
  };

  return (
    <>
      <div className="bg-[#f1f5f8] p-[10px]">
        <div className="deposit-withdraw text-[#000]">
          <div className="">
            <p className="uppercase font-bold rounded-[5px] bg-[#343435] p-[5px] shadow-[1px_1px_4px_gray] text-white text-[15px]">
              <span className="p-1">Deposit</span>
            </p>
          </div>

          {/* Conditionally render the divs based on the selected option */}
          <div className="payment-details">
            <form className="details mt-2" onSubmit={handleSubmitClick} >
              <div className=" border-none rounded-[10px] shadow-[1px_2px_4px_gray] bg-white text-center px-3 pt-[15px] pb-[20px]">
                <div className="w-full mb-2">
                  <span className="text-sm bg-bg_text_brand_primary rounded text-text_color_primary2 shadow-md px-2 py-1">
                    Current Available Balance: ₹ {balance && Number(balanceWithExp).toFixed(2)}
                  </span>
                </div>
                <label
                  htmlFor="amount"
                  className="font-bold text-text_color_primary1 text-base leading-5"
                >
                  Amount
                </label>

                {/* Main amount input */}
                <div className="w-full mt-2 py-2 bg-bg_color_input_bg grid grid-cols-12 border rounded-[4px] px-2 items-center justify-center border-border_color_success font-semibold">
                  <input
                    id="amount"
                    type="number"
                    value={amountValue}
                    onChange={(e) => setAmountValue(e.target.value)}
                    placeholder="₹ Enter Amount"
                    required
                    autoComplete="off"
                    className="block w-full focus:outline-none col-span-11 text-text_color_primary1 bg-transparent placeholder:font-normal font-bold text-base border-none p-0"
                  />
                  <span className="leading-4 text-text_color_primary1 text-base col-span-1 text-center font-semibold">
                    INR
                  </span>
                </div>

                <div className="text-sm pl-1 mt-0 text-text_color_primary1 text-end">
                  <span>Min 200</span>
                  <span> - Max 1,00,000</span>
                </div>

                {/* Buttons or Editable Inputs */}
                <div className="w-full grid grid-cols-3 gap-[10px] mt-[18px]">
                  {buttonValues.map((value, index) =>
                    isEditing ? (
                      <input
                        key={index}
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange(index, Number(e.target.value))}
                        className="relative overflow-hidden bg-white transition-all ease-in-out duration-300 text-text_color_primary1 min-h-9 text-base rounded-md font-[800] leading-4 text-center border border-gray-300"
                      />
                    ) : (
                      <button
                        key={index}
                        type="button"
                        className="relative overflow-hidden bg-bg_text_brand_primary transition-all ease-in-out duration-300 active:scale-95 text-text_color_primary2 min-h-9 text-base rounded-md font-[600] leading-4 hover:bg-[#343435] hover:text-white border border-gray-600"
                        onClick={() => handleButtonClick(value)}
                      >
                        <span>+{value}</span>
                      </button>
                    )
                  )}
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={handleEditToggle}
                    className="px-4 py-2 bg-[#8000ff] text-white rounded-md font-lato font-semibold"
                  >
                    {isEditing ? "Save" : "Edit"}
                  </button>
                </div>
              </div>

              <div className="my-2 bg-bg_color_primary overflow-hidden text-text_color_primary1 transition-height duration-500 ease-in-out h-max px-3 pt-[15px] pb-[20px] border-none rounded-[10px] shadow-[1px_2px_4px_gray] bg-white">
                <div className="flex flex-row justify-end items-center w-full">
                  <span className="text-base font-lato font-bold leading-5 w-full">
                    Payment Options
                    <button
                      className="relative overflow-hidden ml-1 size-6 rounded-full text-text_color_success font-bold text-sm leading-4 bg-bg_color_success1 border border-success shadow-sm"
                      type="button"
                    >
                      {paymentMethod.length}
                    </button>
                  </span>
                  <button
                    className="relative overflow-hidden flex size-[22px] sm:size-[24px] md:size-[26px] justify-center items-center gap-[10px] bg-bg_color_quaternary rounded shadow-sm"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--icon-color-brand-secondary)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                  </button>
                  <button
                    className="relative overflow-hidden flex size-[22px] sm:size-[24px] md:size-[26px] justify-center ml-[4px] items-center gap-[10px] bg-bg_color_quaternary rounded shadow-sm"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--icon-color-brand-secondary)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </button>
                </div>

                <div
                  id="payMentOptions"
                  className="flex items-center gap-x-2 pt-3 pb-2.5 overflow-x-auto no-scrollbar scroll-smooth cursor-pointer w-full transition-all ease-in-out duration-150 pl-2"
                >
                  {paymentMethod?.length > 0 &&
                    paymentMethod.map((item, index) => {
                      const isActive = selectedOption == item.type;
                      const imgSrc =
                        item.type === "Bank"
                          ? "/Images/bank.webp"
                          : item.type === "UPI"
                            ? "/Images/UPI-Color.webp"
                            : item.type === "Gpay"
                              ? "/Images/G-pay.webp"
                              : item.type === "Phonepe"
                                ? "/Images/phonepe.webp"
                                : item.type === "Paytm"
                                  ? "/Images/paytm.webp"
                                  : "";

                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedOption(item.type);
                            handleClick(item.type, item);
                          }}
                          className={`relative flex flex-col items-center justify-center gap-1 min-w-[120px] px-3 py-2 rounded-[10px] border ${isActive && 'border-[#8000ff]'} text-center bg-bg_color_primary cursor-pointer overflow-hidden`}
                        >
                          {isActive && (
                            <svg
                              className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <rect
                                x="1"
                                y="1"
                                width="98"
                                height="98"
                                rx="10"
                                ry="10"
                                fill="none"
                                stroke="#0c9971"
                                strokeWidth="2"
                                strokeDasharray="400"
                                strokeDashoffset="400"
                                className="animate-borderDraw"
                              />
                            </svg>
                          )}

                          {/* content */}
                          <div className="w-full h-[40px] flex items-center justify-center z-10">
                            <img
                              src={imgSrc}
                              alt={item.type}
                              className="object-contain h-8"
                              loading="lazy"
                            />
                          </div>
                          <span className="font-lato font-bold text-xs uppercase truncate z-10">
                            {item.label || item.type}
                          </span>
                        </div>

                      );
                    })}
                </div>



                <div className="">
                  <ul className="list-disc text-xs md:text-sm pt-2 font-lato font-normal leading-4">
                    {showAllRules ? (
                      rules.map((rule, idx) => <li key={idx} className="mb-1">{rule}</li>)
                    ) : (
                      <li>{rules[0]}</li>
                    )}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setShowAllRules(!showAllRules)}
                    className="mt-1 text-xs text-gray-500"
                  >
                    {showAllRules ? "See less.." : "See more.."}
                  </button>
                </div>
              </div>
              {paymentMethod.length === 0 ? (
                <div className="w-full mt-2.5 rounded-[10px] bg-bg_color_primary text-center text-red-600 px-3 py-[15px] font-bold text-base">
                  Payment method not available
                </div>
              ) : (
                selectedOption != "" &&
                <div className=" border-none rounded-[10px] shadow-[1px_2px_4px_gray] bg-white px-3 pt-[15px] pb-[20px] ">
                  {selectedOption === "Bank" && (
                    <div className="w-full rounded-[10px] bg-bg_color_primary text-text_color_primary1">
                      <div className="w-full text-center mb-2">
                        <span className="text-sm bg-bg_text_brand_primary rounded text-text_color_primary2 shadow-md px-2 py-1">
                          Current Available Balance: ₹ {balance && Number(balanceWithExp).toFixed(2)}
                        </span>
                      </div>

                      <div class="font-bold text-center mb-[8px] text-base leading-5">
                        <span>Payment Details</span>
                      </div>

                      {/* Account Number */}
                      <div className="mb-3">
                        <p className="text-xs text-text_color_tertiary1 mb-1">Account Number</p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{methodDetail?.accountNo}</span>
                          <span className="cursor-pointer" onClick={() => handleCopy(methodDetail?.accountNo)} title="Copy">
                            <span>{CopyIcon}</span>
                          </span>
                        </div>
                      </div>

                      {/* IFSC Code */}
                      <div className="mb-3">
                        <p className="text-xs text-text_color_tertiary1 mb-1">IFSC Code</p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{methodDetail?.ifscCode}</span>
                          <span className="cursor-pointer" onClick={() => handleCopy(methodDetail?.ifscCode)} title="Copy">
                            <span>{CopyIcon}</span>
                          </span>
                        </div>
                      </div>

                      {/* Account Holder Name */}
                      <div className="mb-3">
                        <p className="text-xs text-text_color_tertiary1 mb-1">Account Holder Name</p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{methodDetail?.accountHolder}</span>
                          <span className="cursor-pointer" onClick={() => handleCopy(methodDetail?.accountHolder)} title="Copy">
                            <span>{CopyIcon}</span>
                          </span>
                        </div>
                      </div>

                      {/* Bank Name */}
                      <div>
                        <p className="text-xs text-text_color_tertiary1 mb-1">Bank Name</p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{methodDetail?.bankName}</span>
                          <span className="cursor-pointer" onClick={() => handleCopy(methodDetail?.bankName)} title="Copy">
                            <span>{CopyIcon}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {["Gpay", "Phonepe", "UPI", "Paytm"].includes(selectedOption) && (
                    <div className="w-full rounded-[10px] bg-bg_color_primary text-text_color_primary1">
                      <div className="w-full text-center mb-2">
                        <span className="text-sm bg-bg_text_brand_primary rounded text-text_color_primary2 shadow-md px-2 py-1">
                          Current Available Balance: ₹ {balance && Number(balanceWithExp).toFixed(2)}
                        </span>
                      </div>

                      <div class="font-bold text-center mb-[8px] text-base leading-5">
                        <span>Payment Details</span>
                      </div>

                      {/* Dynamic ID Field */}
                      <div className="mb-3">
                        <p className="text-xs text-text_color_tertiary1 mb-1">
                          {selectedOption === "Phonepe"
                            ? "PhonePe Number"
                            : selectedOption === "Paytm"
                              ? "Paytm Number"
                              : selectedOption === "Gpay"
                                ? "Google Pay ID"
                                : "UPI ID"}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{methodDetail?.upiId}</span>
                          <span
                            className="cursor-pointer"
                            onClick={() => handleCopy(methodDetail?.upiId)}
                            title="Copy"
                          >
                            <span>{CopyIcon}</span>
                          </span>
                        </div>
                      </div>

                      {/* Holder Name */}
                      <div>
                        <p className="text-xs text-text_color_tertiary1 mb-1">Holder Name</p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{methodDetail?.holderName}</span>
                          <span
                            className="cursor-pointer"
                            onClick={() => handleCopy(methodDetail?.holderName)}
                            title="Copy"
                          >
                            <span>{CopyIcon}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="my-2 border-none rounded-[10px] shadow-[1px_2px_4px_gray] bg-white px-3 pt-[15px] pb-[20px]">

                <div className="w-full rounded-md">
                  <div className="font-bold text-base leading-5">
                    Upload your payment slip below
                  </div>

                  <div className="w-full relative mt-2">
                    <label htmlFor="paymentSlip" style={{ width: "100%" }}>
                      <div className="flex items-center border border-dashed rounded-[4px] py-3 pl-3 pr-1 border-border_color_brand_primary cursor-pointer">
                        <input
                          id="paymentSlip"
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf,.webp"
                          className="hidden w-0 h-0 text-text_color_primary1"
                          onChange={(e) => handleImageUpload(e)}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24" viewBox="0 0 24 24" fill="#6b7280">
                          {/* Upload Icon Path */}
                          <path
                            d="M21.7491 10.9999V16.9999C21.8078 17.5066 21.7512 18.0199 21.5835 18.5016C21.4158 18.9833 21.1414 19.4209 20.7807 19.7815C20.42 20.1422 19.9825 20.4166 19.5008 20.5843C19.0191 20.752 18.5057 20.8086 17.9991 20.7499H5.99906C5.4924 20.8086 4.97902 20.752 4.49732 20.5843C4.01563 20.4166 3.57808 20.1422 3.21742 19.7815C2.85676 19.4209 2.58232 18.9833 2.41463 18.5016C2.24694 18.0199 2.19034 17.5066 2.24906 16.9999V6.9999C2.19034 6.49324 2.24694 5.97986 2.41463 5.49817C2.58232 5.01647 2.85676 4.57893 3.21742 4.21827C3.57808 3.8576 4.01563 3.58316 4.49732 3.41547C4.97902 3.24778 5.4924 3.19118 5.99906 3.2499H13.9991C14.198 3.2499 14.3887 3.32892 14.5294 3.46957C14.67 3.61023 14.7491 3.80099 14.7491 3.9999C14.7491 4.19882 14.67 4.38958 14.5294 4.53023C14.3887 4.67089 14.198 4.7499 13.9991 4.7499H5.99906C4.42206 4.7499 3.74906 5.4229 3.74906 6.9999V16.2499L6.28906 13.7099C6.47787 13.5226 6.73307 13.4174 6.99906 13.4174C7.26505 13.4174 7.52025 13.5226 7.70906 13.7099L8.64906 14.6499C8.74252 14.7415 8.86818 14.7928 8.99906 14.7928C9.12994 14.7928 9.2556 14.7415 9.34906 14.6499L14.2891 9.7099C14.4779 9.52255 14.7331 9.41742 14.9991 9.41742C15.265 9.41742 15.5203 9.52255 15.7091 9.7099L20.2491 14.2499V10.9999C20.2491 10.801 20.3281 10.6102 20.4687 10.4696C20.6094 10.3289 20.8001 10.2499 20.9991 10.2499C21.198 10.2499 21.3887 10.3289 21.5294 10.4696C21.67 10.6102 21.7491 10.801 21.7491 10.9999Z"
                            fill="var(--icon-color-primary)">
                          </path>
                        </svg>
                        <div className="flex justify-start items-center text-[#6b7280]">
                          <span className="cursor-pointer text-sm font-normal mx-1">
                            {imageList ? imageList.name : "Upload or drop a file right here"}
                          </span>
                        </div>
                      </div>
                    </label>
                  </div>
                  <span></span>
                </div>

                <div className="w-full my-2">
                  <div className="flex flex-col w-full">
                    <div className="font-bold text-sm mb-2 leading-5">
                      Unique Transaction Reference
                    </div>
                    <div className="flex items-center w-full text-text_color_primary1 text-sm md:text-base bg-bg_color_input_bg rounded-[4px] border border-border_color_primary">
                      <input
                        className="w-full h-full px-3 py-2.5 flex-grow min-w-0 border-none focus:outline-none bg-transparent"
                        type="text"
                        inputMode="numeric"
                        placeholder="Upto 12 Digits UTR/RRN Number"
                        value={utrValue}
                        onChange={(e) => setUTRValue(e.target.value)}
                      />
                    </div>
                    <div className="flex items-start w-full justify-between leading-normal px-1">
                      <div className="w-max h-max"></div>
                    </div>
                  </div>
                </div>

                <div class="flex items-start justify-center gap-x-2">
                  <div class="inline-flex items-center">
                    <label
                      class="relative flex cursor-pointer items-center rounded-full bg-bg_color_quaternary4"
                      for="blue">
                      <input
                        class="before:content[''] before:bg-bg_color_quaternary8 rounded-md peer relative  cursor-pointer appearance-none border border-success transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-max before:w-max before:-translate-x-2/4 before:-translate-y-2/4 before:opacity-0 before:transition-opacity checked:border-success checked:bg-bg_color_success hover:before:opacity-10 h-5 w-5"
                        id="blue" type="checkbox" checked />
                      <span
                        class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-text_color_primary2 opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                          fill="currentColor" stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                  <span class="text-sm font-[400] leading-5">I have read and
                    agree with <span
                      class="text-sm text-blue-600 font-[400] leading-4 cursor-pointer">the
                      terms of payment and withdrawal policy.</span></span>
                </div>
              </div>

              <div className=" w-full bottom-0 pb-[10px] app-bg">
                <button
                  id="btn"
                  type="submit"
                  disabled={isSubmitted}
                  className={`bg-bg_text_brand_primary flex items-center justify-center gap-x-2 w-full h-10 text-base text-white rounded-md font-[500] leading-4 disabled:opacity-70 bg-black hover:bg-[#8000ff] relative ${isSubmitted ? "activated" : ""}`}
                >
                  <span>{buttonText}</span>
                  <div className="checked">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <path
                        fill="transparent"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>

            </form>

          </div>
        </div >

        <div className="w-full flex flex-row items-center justify-center gap-3 mt-2 flex-wrap">
          <button
            onClick={handleToggleNotes}
            className="px-4 py-2 text-white bg-[#8000ff] rounded font-semibold"
          >
            {showNotes ? "Hide" : "See How To Deposit"}
          </button>

          <button
            onClick={handleToggleHistory}
            className="px-4 py-2 bg-[#8000ff] text-white rounded font-semibold"
          >
            {showDepositHistory ? "Hide Deposit History" : "Show Deposit History"}
          </button>
        </div>



        <div className="w-full h-max flex flex-col items-center justify-start mb-2 mt-10">
          {/* <button
             onClick={() => setShowNotes(!showNotes)}
             className="px-4 py-2 text-white bg-[#0c9971] rounded font-semibold"
           >
             {showNotes ? "Hide" : "See How TO Deposit"}
           </button> */}

          {showNotes && (
            <div ref={notesRef} className=" border-none rounded-[10px] shadow-[1px_2px_4px_gray] bg-white px-3 pt-[15px] pb-[20px] mt-4">
              <h2 className="w-full text-base font-bold">Notes</h2>
              <div className="w-full flex items-center justify-start mt-5 gap-y-4 flex-col">

                {/* Step 1 */}
                <div className="flex w-full flex-row items-start gap-x-2 justify-start">
                  <span className="p-1.5 min-w-3 min-h-3 aspect-square bg-bg_color_brand_primary1 flex items-center justify-center rounded-full text-[10px] text-text_color_primary2 font-bold">
                    1
                  </span>
                  <div className="flex items-start justify-start flex-col gap-y-1">
                    <span className="font-bold text-sm leading-4">Send Amount</span>
                    <span className="text-text_color_tertiary2 font-medium text-[13px] leading-4">
                      Send your deposit amount on the given bank account.
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex w-full flex-row items-start gap-x-2 justify-start">
                  <span className="p-1.5 min-w-3 min-h-3 aspect-square bg-bg_color_brand_primary1 flex items-center justify-center rounded-full text-[10px] text-text_color_primary2 font-bold">
                    2
                  </span>
                  <div className="flex items-start justify-start flex-col gap-y-1">
                    <span className="font-bold text-sm leading-4">Attach Screenshot</span>
                    <span className="text-text_color_tertiary2 font-medium text-[13px] leading-4">
                      <div className="w-full flex flex-col items-start justify-start">
                        <span>Copy and Enter the 12 digit UTR Number.</span>

                        {/* Example Box */}
                        <div className="mt-4 flex flex-col w-full items-center border border-notesBorderColor rounded-[15px]">
                          <div className="px-4 py-2.5 flex items-start justify-start gap-x-[5px] border-b border-notesBorderColor w-full">
                            {/* Status Icon */}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="8" r="8" fill="var(--icon-color-brand-secondary)" />
                              <path
                                d="M12.0542 6.30469L7.72083 10.6379C7.59082 10.7679 7.42017 10.8334 7.24951 10.8334C7.07886 10.8334 6.9082 10.7679 6.7782 10.6379L4.61157 8.47131C4.35083 8.21069 4.35083 7.78931 4.61157 7.52869C4.87219 7.26794 5.29346 7.26794 5.5542 7.52869L7.24951 9.224L11.1116 5.36206C11.3722 5.10132 11.7935 5.10132 12.0542 5.36206C12.3148 5.62268 12.3148 6.04395 12.0542 6.30469Z"
                                fill="var(--icon-color-secondary)"
                              />
                            </svg>

                            <div className="flex flex-col w-full">
                              <span className="text-sm font-medium text-text_color_primary1">Paid ₹ 10,000</span>
                              <span className="text-[13px] font-medium text-text_color_primary1">9079313982@indus</span>
                            </div>

                            <div className="float-right">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                  d="M9.99919 13.3334C10.1089 13.334 10.2176 13.313 10.3191 13.2715C10.4206 13.2301 10.513 13.169 10.5909 13.0917L15.5909 8.09174C15.7478 7.93482 15.8359 7.72199 15.8359 7.50007C15.8359 7.27816 15.7478 7.06533 15.5909 6.90841C15.4339 6.75149 15.2211 6.66333 14.9992 6.66333C14.7773 6.66333 14.5644 6.75149 14.4075 6.90841L9.99919 11.3251L5.59086 6.91674C5.43144 6.78022 5.22638 6.70888 5.01665 6.71698C4.80692 6.72508 4.60797 6.81203 4.45956 6.96044C4.31115 7.10885 4.2242 7.3078 4.2161 7.51753C4.208 7.72726 4.27934 7.93232 4.41586 8.09174L9.41586 13.0917C9.57108 13.2457 9.78058 13.3325 9.99919 13.3334Z"
                                  fill="var(--icon-color-brand-secondary)"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Other sample content */}
                          <div className="mt-3 px-[9px] w-full gap-[3px]">
                            <div className="px-[9px] py-1.5 border border-border_color_primary w-full flex flex-col items-start justify-start rounded-md">
                              <span className="text-text_color_tertiary2 text-[13px] font-medium leading-4">UPI Transaction Id</span>
                              <span className="text-text_color_primary1 text-[13px] font-medium leading-4">925109698898</span>
                            </div>
                          </div>
                          <div className="px-[18px] mt-2.5 w-full flex flex-col items-start justify-start">
                            <span className="text-text_color_tertiary2 text-[13px] font-medium leading-4">To: Shop</span>
                            <span className="text-text_color_primary1 text-[13px] font-medium leading-4">9079313982@indus</span>
                          </div>
                          <div className="px-[18px] mt-2.5 w-full flex flex-col items-start justify-start">
                            <span className="text-text_color_tertiary2 text-[13px] font-medium leading-4">From: 99exch (IDFC Bank)</span>
                            <span className="text-text_color_primary1 text-[13px] font-medium leading-4">99exch-1@okicici</span>
                          </div>
                          <div className="px-[18px] mt-2.5 mb-4 w-full flex flex-col items-start justify-start">
                            <span className="text-text_color_tertiary2 text-[13px] font-medium leading-4">Google Transaction ID</span>
                            <span className="text-text_color_primary1 text-[13px] font-medium leading-4">CICAhuffk-ec</span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex w-full flex-row items-start gap-x-2 justify-start">
                  <span className="p-1.5 min-w-3 min-h-3 aspect-square bg-bg_color_brand_primary1 flex items-center justify-center rounded-full text-[10px] text-text_color_primary2 font-bold">
                    3
                  </span>
                  <div className="flex items-start justify-start flex-col gap-y-1">
                    <span className="font-bold text-sm leading-4">Upload Proof</span>
                    <span className="text-text_color_tertiary2 font-medium text-[13px] leading-4">Upload transaction Screenshot.</span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex w-full flex-row items-start gap-x-2 justify-start">
                  <span className="p-1.5 min-w-3 min-h-3 aspect-square bg-bg_color_brand_primary1 flex items-center justify-center rounded-full text-[10px] text-text_color_primary2 font-bold">
                    4
                  </span>
                  <div className="flex items-start justify-start flex-col gap-y-1">
                    <span className="font-bold text-sm leading-4">Submit</span>
                    <span className="text-text_color_tertiary2 font-medium text-[13px] leading-4">
                      Submit the form & Receive credits instantly.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>


        <div className="mt-8 mb-8">
          {/* <button
             onClick={() => setShowDepositHistory(!showDepositHistory)}
             className="px-4 py-2 bg-[#0c9971] text-white rounded font-semibold"
           >
             {showDepositHistory ? "Hide Deposit History" : "Show Deposit History"}
           </button> */}

          {showDepositHistory && (
            <div ref={historyRef} className="mt-4 mx-2">
              <h3 className="text-xl text-center font-semibold mb-2 text-gray-900">
                Deposit History
              </h3>
              <div className="overflow-x-auto bg-[#fff]">
                <Table
                  columns={historyColumns}
                  className="min-w-full rounded-[10px]"
                  bordered
                  dataSource={depositHistory}
                  pagination={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Deposit;
