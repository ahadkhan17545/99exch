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
  const paymentMethod = userInfos?.paymentMethods || [];

  const [amountValue, setAmountValue] = useState("");
  const [utrValue, setUTRValue] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [methodDetail, setMethodDetail] = useState("");
  const [depositHistory, setDepositHistory] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
  const [buttonText, setButtonText] = useState("Submit"); // State for button text
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [imageList, setImageList] = useState(null); // State to store the image list

  const [balance, setBalance] = useState(0);
  const [exposure, setExposure] = useState(0);
  let balanceWithExp = balance - Math.abs(exposure);

  const historyColumns = [
    {
      title: "User Name",
      sorter: true,
      render: (_, record) => (
        <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
          {record?.user_name}
        </span>
      ),
    },
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
    ...(depositHistory.some((record) => record.account_holder_name)
      ? [
        {
          title: "Account Holder Name",
          sorter: true,
          render: (_, record) => (
            <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
              {record?.account_holder_name || "N/A"}
            </span>
          ),
        },
      ]
      : []),
    ...(depositHistory.some((record) => record.ifsc_code)
      ? [
        {
          title: "IFSC Code",
          sorter: true,
          render: (_, record) => (
            <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
              {record?.ifsc_code || "N/A"}
            </span>
          ),
        },
      ]
      : []),
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
    ...(depositHistory.some((record) => record.holder_name)
      ? [
        {
          title: "Holder Name",
          sorter: true,
          render: (_, record) => (
            <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
              {record?.holder_name || "N/A"}
            </span>
          ),
        },
      ]
      : []),
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
  const handleButtonClick = (value) => {
    setAmountValue(value);
  };

  // Function to handle payment option click
  const handleClick = (option, detail) => {
    setSelectedOption(option);
    setMethodDetail(detail);
  };

  // Button values
  const buttonValues = [500, 1000, 1500, 2000, 2500, 3000];

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

  return (
    <>
      <div className="text-[#000] bg-[#eef0f3] rounded-[10px] text-[1.25rem]">
        <div className="p-[10px]">
          <p className="uppercase font-bold rounded-[5px] bg-[#343435] p-[5px] shadow-[1px_1px_4px_gray] text-white text-[15px]">
            <span className="p-1">Deposit</span>
          </p>

          <div className="payment-details">
            <form className="bg-white shadow-[0px_2px_2px_gray] rounded-[10px] p-2 mt-4" onSubmit={handleSubmitClick}>
              <div className="my-[10px]">
                <h3 className="text-[#000] text-[1rem] text-center font-bold border-b border-[#dfdcdc] mb-2">
                  Amount<span className="text-red-500 font-bold">*</span>
                </h3>
                <input
                  type="number"
                  value={amountValue}
                  onChange={(e) => setAmountValue(e.target.value)}
                  placeholder="&#8377; Enter amount"
                  className="w-full h-[40px] p-2 text-[1rem] font-bold rounded border-none shadow-[0_0_4px_gray]"
                />
              </div>

              <div className="grid grid-cols-3 justify-items-center justify-start mb-[15px]">
                {buttonValues.map((value, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleButtonClick(value)}
                    className="w-[95%] m-1 p-2 rounded bg-[#C10930] hover:bg-[#343435] text-white text-[1rem] font-bold shadow-sm border-none"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </form>
          </div>

          <div className="bg-white rounded-[10px] shadow-[0px_2px_2px_gray] text-center p-0 relative h-[165px] mt-[10px]">
            <h3 className="text-[#000] text-[1rem] font-bold border-b border-[#dfdcdc] pt-4 pb-1">
              Payment Options
            </h3>

            <div className="overflow-x-auto whitespace-nowrap scrollbar-none mx-1">
              <ul className="flex flex-nowrap my-[10px] mx-1">
                {paymentMethod.length > 0 &&
                  paymentMethod?.map((item, index) => {
                    return (
                      <div key={index}>
                        {item.type == "Bank" && (
                          <li
                            className={`grid content-center justify-end p-2 shadow-[0px_1px_2px_gray] rounded-[10px] m-1 cursor-pointer ${selectedOption == "Bank" ? "border border-[#C10930] activated" : ""
                              }`}
                            onClick={() => handleClick("Bank", item)}
                          >
                            <img
                              src="/Images/bank-transfer.png"
                              alt="Bank"
                              className="w-[67px]"
                            />
                          </li>
                        )}
                        {item.type == "UPI" && (
                          <li
                            className={`grid content-center justify-end p-2 shadow-[0px_1px_2px_gray] rounded-[10px] m-1 cursor-pointer ${selectedOption == "UPI" ? "border border-[#C10930] activated" : ""
                              }`}
                            onClick={() => handleClick("UPI", item)}
                          >
                            <img
                              src="/Images/UPI-Color.webp"
                              alt="UPI"
                              className="w-[67px]"
                            />
                          </li>
                        )}
                        {item.type == "Gpay" && (
                          <li
                            className={`grid content-center justify-end p-2 shadow-[0px_1px_2px_gray] rounded-[10px] m-1 cursor-pointer ${selectedOption == "Gpay" ? "activated" : ""
                              }`}
                            onClick={() => handleClick("Gpay", item)}
                          >
                            <img
                              src="/Images/G-pay.webp"
                              alt="Gpay"
                              className="w-[67px]"
                            />
                          </li>
                        )}
                        {item.type == "Phonepe" && (
                          <li
                            className={`grid content-center justify-end p-2 shadow-[0px_1px_2px_gray] rounded-[10px] m-1 cursor-pointer ${selectedOption == "Phonepe" ? "activated" : ""
                              }`}
                            onClick={() => handleClick("Phonepe", item)}
                          >
                            <img
                              src="/Images/phonepe.webp"
                              alt="PhonePe"
                              className="w-[67px]"
                            />
                          </li>
                        )}
                        {item.type == "Paytm" && (
                          <li
                            className={`grid content-center justify-end p-2 shadow-[0px_1px_2px_gray] rounded-[10px] m-1 cursor-pointer ${selectedOption == "Paytm" ? "activated" : ""
                              }`}
                            onClick={() => handleClick("Paytm", item)}
                          >
                            <img
                              src="Images/paytm.webp"
                              alt="Paytm"
                              className="w-[67px]"
                            />
                          </li>
                        )}
                      </div>
                    );
                  })}
              </ul>
            </div>

            <p className="text-[#343435] text-[0.8rem] font-bold mt-2">
              1. Deposit money only in the below available accounts to get the
              fastest credit and avoid possible delays.
            </p>
          </div>

          <div className="payment-details">
            {selectedOption === "Bank" && (
              <div className="bg-white shadow-[0px_2px_2px_gray] rounded-[10px] p-2 mt-4">
                <h4 className="text-orange-500 text-center text-[1rem] font-[100]">
                  Current Available Balance : &#8377;{" "}
                  {balance && Number(balanceWithExp).toFixed(2)}
                </h4>
                <h3 className="text-orange-500 text-center text-[12px] font-[100] mb-0">
                  Payments Details
                </h3>
                <div className="my-2 text-[14px]">
                  <p className="font-[400]">Account Number</p>
                  <span>{methodDetail?.accountNo}</span>
                </div>
                <div className="my-2 text-[14px]">
                  <p className="font-[400]">IFSC Code</p>
                  <span>{methodDetail?.ifscCode}</span>
                </div>
                <div className="my-2 text-[14px]">
                  <p className="font-[400]">Account Holder Name</p>
                  <span>{methodDetail?.accountHolder}</span>
                </div>
                <div className="my-2 text-[14px]">
                  <p className="font-[400]">Bank Name</p>
                  <span>{methodDetail?.bankName}</span>
                </div>
              </div>
            )}

            {(selectedOption === "Gpay" ||
              selectedOption === "Phonepe" ||
              selectedOption === "UPI" ||
              selectedOption === "Paytm") && (
                <div className="bg-white shadow-[0px_2px_2px_gray] rounded-[10px] p-2 mt-4">
                  <h4 className="text-[#000] text-[1rem] text-center font-bold pt-4">
                    Current Available Balance : &#8377;{" "}
                    {balance && Number(balanceWithExp).toFixed(2)}
                  </h4>
                  <h3 className="text-left text-[#000] text-[0.8rem] font-bold mt-6 underline mb-4">
                    Payments Details:
                  </h3>
                  <div className="flex text-sm mt-2">
                    <p className="text-[#4e4d4d] font-bold">UPI Id:</p>
                    <span className="ml-2 text-[#000] font-bold">
                      {methodDetail?.upiId}
                    </span>
                  </div>
                  <div className="flex text-sm">
                    <p className="text-[#4e4d4d] font-bold">Holder Name:</p>
                    <span className="ml-2 text-[#000] font-bold">
                      {methodDetail?.holderName}
                    </span>
                  </div>
                </div>
              )}

            <div className="mt-4">
              <h3 className="flex text-left text-[#000] text-[0.8rem] font-bold p-1">
                Upload your payment slip below
                <span className="text-red-500 font-bold">*</span>
              </h3>
              <div className="w-full flex justify-center">
                <label className="flex items-center w-full p-[10px] rounded bg-white shadow-[0px_1px_2px_gray] cursor-pointer relative">
                  <input
                    type="file"
                    className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleImageUpload(e)}
                  />
                  <FaFileUpload className="text-gray-500 mr-[10px] text-[1rem]" />
                  <span className="text-gray-500 text-[14px]">
                    {imageList ? imageList.name : "Upload File"}
                  </span>
                </label>
              </div>
              <div className="my-4">
                <h3 className="flex text-left text-[#000] text-[0.8rem] font-bold p-1">
                  Unique Transaction Reference{" "}
                  <span className="text-red-500 font-bold">*</span>
                </h3>
                <input
                  className="w-full h-[40px] shadow-[0px_1px_2px_gray] p-2 rounded border border-solid text-[14px]"
                  type="number"
                  value={utrValue}
                  onChange={(e) => setUTRValue(e.target.value)}
                  placeholder="6 to 23 Digit UTR RRN Number"
                />
              </div>
            </div>

            <div className="agree p-1">
              <p>
                <input type="checkbox" className="w-[10px] h-[10px] mr-1" />
                <span className="text-[12px]">I have read the term and condition</span>{" "}
                <span className="text-blue-600 text-[12px]">
                  the terms of payments and deposit policy
                </span>
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <button
                id="btn"
                type="submit"
                disabled={isSubmitted}
                className={`relative border-0 outline-none bg-[#343435] text-white text-lg rounded text-center p-2 w-[40%] shadow-[0_6px_20px_-5px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer ${isSubmitted ? "active bg-[#d90429]" : ""
                  }`}
                onClick={handleSubmitClick}
              >
                <p className={`submit-button-text text-center ${isSubmitted ? "mr-[100px]" : ""}`}>
                  {buttonText}
                </p>
                <div
                  className={`checked w-[50px] h-[50px] rounded-[40px] shadow-[0_0_12px_-2px_rgba(0,0,0,0.2)] absolute top-0 right-[-40px] opacity-0 bg-[#d90429] ${isSubmitted ? "active right-0 opacity-100" : ""
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
                      className={`${isSubmitted ? "stroke-dashoffset-0" : ""}`}
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
          </div>
        </div>

        <div className="p-[10px] border-t-2 border-[#dfdcdc]">
          <div>
            <h3 className="text-black text-center font-bold">Deposit History</h3>
          </div>

          <div className="overflow-x-auto bg-white">
            <Table
              columns={historyColumns}
              className="downline-list"
              bordered
              dataSource={depositHistory}
              pagination={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
