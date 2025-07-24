import "../../../App.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Table,
  Modal,
  Button,
  Form,
  Input,
  Select,
  Pagination,
  App,
} from "antd";
import moment from "moment";
import axios from "axios";

import Appconfig from "../../../config/config";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useSelector, useDispatch } from "react-redux";
// import { getUserBal } from '../../../redux/slice/user/userSlice'

const { Option } = Select;

function MasterList() {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  // const userbal = useSelector((state) => state.userbal); // Use selector to access state
  // const balance = userbal?.userBalance?.balance;
  const userInfo = JSON.parse(localStorage.getItem("userdata"));

  let locale = {
    emptyText: "No data!",
  };
  let totalBalance = 0;
  let totalExposure = 0;

  function updateTotalBalance(bal) {
    // console.log('bal', bal);
    totalBalance = parseFloat(bal);
    if (document.querySelector("#totalBalance")) {
      document.querySelector(
        "#totalBalance"
      ).textContent = `IRP ${totalBalance.toFixed(0)}`;
    }
  }
  function updateTotalExposure(bal) {
    totalExposure = parseFloat(bal);

    if (document.querySelector("#totalExposure")) {
      document.querySelector("#totalExposure").innerHTML = `${
        totalExposure < 0
          ? `<span className="text-[#d50000]">(${parseFloat(
              Math.abs(totalExposure)
            ).toFixed(0)})</span>`
          : "( " + totalExposure.toFixed(0) + " )"
      }`;
    }
    if (document.querySelector("#totalAvailBal")) {
      document.querySelector("#totalAvailBal").textContent = `IRP ${(
        parseFloat(totalBalance) - Math.abs(totalExposure)
      ).toFixed(0)}`;
    }
    if (document.querySelector("#mastersAvailBal")) {
      // let myBal = document.getElementById('mastersBalance').textContent.split(' ')[1];
      let myBal = document.getElementById("mastersBalance").textContent;
      if (Number(myBal)) {
        myBal = myBal.split(" ")[1];
      } else {
        myBal = 0;
      }

      // console.log('myBal', myBal);
      // if (balance === 0) {
      //     document.querySelector("#mastersAvailBal").textContent = "Loading ..."
      //     // document.querySelector("#mastersAvailBalPl").textContent = "Loading ..."

      // }
      // else {
      document.querySelector("#mastersAvailBal").textContent = `IRP ${(
        parseFloat(myBal) +
        parseFloat(totalBalance) -
        Math.abs(totalExposure)
      ).toFixed(0)}`;

      // document.querySelector("#mastersAvailBalPl").textContent = `IRP ${((parseFloat(balance) + parseFloat(totalBalance) - Math.abs(totalExposure))).toFixed(0)}`;

      // }
    }
  }

  const [editCreditRefModal, setEditCreditRefModal] = useState(false);
  const [currentCreditRef, setCurrentCreditRef] = useState(0);
  const [bankingModal, setbankingModal] = useState(false);
  const [changeStatusModal, setChangeStatusModal] = useState(false);
  const [sportsSettingModal, setSportsSettingModal] = useState(false);
  const [sportSettingUserId, setSportSettingUserId] = useState("");
  const [isCricketBetLock, setIsCricketBetLock] = useState("");
  const [isSoccerBetLock, setIsSoccerBetLock] = useState("");
  const [isTennisBetLock, setIsTennisBetLock] = useState("");
  const [isCasinoBetLock, setIsCasinoBetLock] = useState("");
  const [button, setButton] = useState(false);

  const [openExposureDetailModal, setOpenExposureDetailModal] = useState(false);
  const [openBettingDetailModal, setOpenBettingDetailModal] = useState(false);
  const [userOpenBet, setUserOpenBets] = useState([]);
  const [userOpenBetData, setUserOpenBetData] = useState([]);
  const [myUplineData, setMyUplineData] = useState([]);

  const [userRefData, setUserRefData] = useState({
    user_id: "",
    credit_reference: "",
    password: "",
    user_name: "",
  });
  const [openCreditRefLogModal, setOpenCreditRefLogModal] = useState(false);
  const [userBankingData, setUserBankingData] = useState({
    master_id: "",
    password: "",
    user_id: "",
    amount: "",
    action: "",
    remark: "",
    user_name: "",
  });
  const [userStatusData, setUserStatusData] = useState({
    user_id: "",
    status: "",
    password: "",
    user_name: "",
    change_status: true,
  });
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [allDomains, setAllDomains] = useState([]);

  // function getBalance() {
  //     if (userInfo) {
  //         dispatch(getUserBal({
  //             user_id: userInfo?._id,
  //         }))
  //     }
  // }

  // useEffect(() => {
  //     if (userInfo) {
  //         dispatch(getUserBal({
  //             user_id: userInfo?._id,
  //         }))
  //     }

  // }, [userInfo?._id])

  const exposureDetail = (open, record) => {
    setOpenExposureDetailModal(open);
    setUserRefData({
      ...userRefData,
      user_id: record._id,
      user_name: record.user_name,
    });
    userOpenBets(record._id);
  };

  const OpenBettingModal = (user_id, match_id) => {
    setOpenBettingDetailModal(true);
    userOpenBets(user_id, match_id);
  };

  const userOpenBets = (user_id, match_id = null) => {
    var data = {
      user_id: user_id,
    };
    if (match_id) {
      data.match_id = match_id;
    }
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}reports/auraOpenBets`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log("response", response);
        if (response.status == 200) {
          if (match_id) {
            setUserOpenBetData(response.data.resultData);
          } else {
            setUserOpenBets(response.data.resultData);
          }
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Username",
      // dataIndex: 'user_name',
      sorter: true,
      render: (_, record) =>
        record?.user_type != "User" ? (
          <Link
            className="flex gap-1"
            to={`/list/master/${record?._id}/${record?.user_type}`}
          >
            <span className="items-center grid text-[#fff] bg-[#4dbd74] text-[0.688rem] font-bold px-[5px] py-[3px] rounded-[3px] inline-block leading-none text-center whitespace-nowrap align-baseline">
              {record.user_type}
            </span>
            <span className="font-extrabold text-[#315195] text-[0.813rem] ml-[5px]">
              {record.user_name}
            </span>
          </Link>
        ) : (
          <div className="flex gap-1">
            <span className="items-center grid text-[#fff] bg-[#4dbd74] text-[0.688rem] font-bold px-[5px] py-[3px] rounded-[3px] inline-block leading-none text-center whitespace-nowrap align-baseline">
              {record.user_type}
            </span>
            <span className="font-extrabold text-[#000000] text-[0.813rem] ml-[5px]">
              {record.user_name}
            </span>
          </div>
        ),
    },
    {
      title: "Credit Ref.",
      dataIndex: "credit_reference",
      sorter: true,
      render: (_, record) => (
        <div className="flex items-center gap-x-4">
          <strong className="text-[#212529] font-extrabold text-[0.813rem]">
            {Number(record.credit_reference).toFixed(0)}
          </strong>
          <button onClick={() => editCreditRef(true, record)}>
            <svg
              fill="#315195"
              className="w-[15px] h-[15px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
            </svg>
          </button>
          {/* <button onClick={() => creditRefLog(true, record)}>
            <i className="fa fa-eye text-[#315195]"></i>
          </button> */}
        </div>
      ),
    },
    {
      title: "Partnership",
      dataIndex: "name",
      sorter: true,
      render: (_, record) => (
        <div>
          <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
            {record.partnership}
          </span>
        </div>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      sorter: false,
      render: (_, record) => (
        <span className="font-extrabold text-[#212529] text-[0.813rem]">
          {Number(record.noDeductbalance).toFixed(0)}
        </span>
      ),
    },
    {
      title: "Exposure",
      dataIndex: "exposure",
      sorter: true,
      render: (_, record) =>
        record?.user_type != "User" ? (
          <div>{`(${Number(record.exposure).toFixed(0)})`}</div>
        ) : (
          <button onClick={() => exposureDetail(true, record)}>
            <span className="font-extrabold text-[#d50000] text-[0.813rem]">{`(${Number(
              record.exposure
            ).toFixed(0)})`}</span>
          </button>
        ),
    },
    {
      title: "Avail. Bal.",
      dataIndex: "balance",
      sorter: false,
      render: (_, record) => (
        <span className="font-extrabold text-[#212529] text-[0.813rem]">
          {Number(record.balance).toFixed(0)}
        </span>
      ),
    },
    {
      title: "Ref. P/L",
      // dataIndex: 'name',
      sorter: false,
      render: (_, record) => {
        const pl = (record.noDeductbalance - record.credit_reference).toFixed(
          0
        );
        const color = pl < 0 ? "#d50000" : "#315195";
        return (
          <span className={`font-extrabold text-[0.813rem]`} style={{ color }}>
            {pl}
          </span>
        );
      },
    },
    {
      title: "Status",
      // dataIndex: 'name',
      sorter: true,
      render: (_, record) => {
        if (record.status == "active") {
          return (
            <span className="text-[0.688rem] font-extrabold px-[5px] py-[3px] rounded-[3px] bg-[#e5f1dc] border-[1px] border-[solid] border-[#bedca7] text-[#508d0e] leading-none">
              {record.status}
            </span>
          );
        }
        if (record.status == "locked") {
          return (
            <span className="text-[0.688rem] font-extrabold px-[5px] py-[3px] rounded-[3px] bg-[#e3e8eb] border-[1px] border-[solid] border-[#b9c5cd] text-[#5a7384] leading-none">
              {record.status}
            </span>
          );
        }
        if (record.status == "suspended") {
          return (
            <span className="text-[0.688rem] font-extrabold px-[5px] py-[3px] rounded-[3px] bg-[#f2e2e6] border-[1px] border-[solid] border-[#deb6c0] text-[#d0021b] leading-none">
              {record.status}
            </span>
          );
        }
      },
    },
    {
      title: "Actions",
      // dataIndex: 'name',
      sorter: true,
      render: (_, record) => (
        <ul className="flex float-left p-0 m-0">
          <li className="block float-left" title="Deposit/Withdraw">
            <button
              className="w-[26px] h-[26px] ml-[12px] text-[0] flex bg-[#f3f3f3] rounded-[6px] border-[1px] border-[solid] border-[#bbbbbb] float-right cursor-pointer items-center justify-center"
              onClick={() => userBanking(true, record)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 26 26"
                enableBackground="new 0 0 26 26"
                xmlSpace="preserve"
              >
                <path
                  fill="currentColor"
                  d="M16.237,3.225c-0.717,0-1.376,0.058-2.006,0.172c1.834,0.373,3.466,1.263,4.868,2.67    c1.92,1.924,2.863,4.221,2.863,6.947c0,2.669-0.943,4.965-2.863,6.89c-1.402,1.406-3.034,2.296-4.868,2.673    c0.63,0.141,1.289,0.199,2.006,0.199c2.69,0,4.981-0.976,6.874-2.872c1.92-1.925,2.863-4.221,2.863-6.89    c0-2.727-0.943-5.023-2.863-6.947C21.218,4.172,18.927,3.225,16.237,3.225z"
                ></path>
                <path
                  fill="currentColor"
                  d="M2.889,6.067c-1.918,1.924-2.863,4.221-2.863,6.947c0,2.669,0.945,4.965,2.863,6.89     C4.78,21.8,7.1,22.776,9.792,22.776c2.692,0,4.984-0.976,6.875-2.872c1.915-1.925,2.864-4.221,2.864-6.89     c0-2.727-0.949-5.023-2.864-6.947c-1.891-1.895-4.183-2.842-6.875-2.842C7.1,3.225,4.78,4.172,2.889,6.067z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M8.819,5.607v1.579V7.76C7.902,7.875,7.186,8.192,6.728,8.651c-0.487,0.431-0.746,1.004-0.746,1.723     c-0.028,0.632,0.229,1.177,0.659,1.664c0.459,0.518,1.203,1.033,2.292,1.607c0.888,0.46,1.488,0.832,1.804,1.18     c0.344,0.342,0.487,0.745,0.487,1.145c0,0.689-0.459,1.034-1.374,1.034c-0.945,0-1.403-0.345-1.403-0.976v-0.861H5.925v0.748     c0,0.717,0.229,1.293,0.744,1.779c0.488,0.431,1.204,0.748,2.149,0.861v0.432c0,0.717,0,1.207,0,1.434h2.205v-1.52v-0.346     c0.945-0.113,1.661-0.431,2.147-0.889c0.516-0.459,0.744-1.063,0.744-1.811c0-0.633-0.199-1.204-0.657-1.693     c-0.431-0.518-1.204-1.062-2.292-1.637c-0.888-0.459-1.489-0.861-1.804-1.205c-0.344-0.315-0.488-0.66-0.488-1.033     c0-0.661,0.43-1.006,1.347-1.006c0.889,0,1.347,0.345,1.347,1.006v0.43h2.52v-0.315c0-0.717-0.229-1.32-0.716-1.78     c-0.486-0.459-1.202-0.746-2.147-0.861V7.245V5.607H8.819z"
                ></path>
              </svg>
            </button>
          </li>
          <li className="block float-left" title="Account Statement">
            <Link
              to={"/my-account"}
              state={{ id: record._id, activeTab: "account-statement" }}
              className="w-[26px] h-[26px] ml-[12px] text-[0] flex bg-[#f3f3f3] rounded-[6px] border-[1px] border-[solid] border-[#bbbbbb] float-right cursor-pointer items-center justify-center hover:text-[black]"
            >
              <svg
                width="64px"
                height="64px"
                viewBox="-1.6 -1.6 19.20 19.20"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.72"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <polyline points="7.25 14.25,2.75 14.25,2.75 1.75,13.25 1.75,13.25 9.25" />{" "}
                  <path d="m9.75 12.75 1.5 1.5 3-2.5m-8.5-4h4.5m-4.5 3h1.5m-1.5-6h4.5" />{" "}
                </g>
              </svg>
            </Link>
          </li>
          {/* <li className="block float-left">
            <Link
              to={"/my-account"}
              state={{ id: record._id, activeTab: "bet-history" }}
              className="w-[26px] h-[26px] ml-[12px] text-[0] flex bg-[#f3f3f3] rounded-[6px] border-[1px] border-[solid] border-[#bbbbbb] float-right cursor-pointer items-center justify-center hover:text-[black]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 26 26"
                enableBackground="new 0 0 26 26"
                xmlSpace="preserve"
              >
                <path
                  fill="currentColor"
                  d="M9.793,15.429v-2.862H0.234v2.862H9.793z"
                ></path>
                <path
                  fill="currentColor"
                  d="M0.234,6.137V9.03h25.501V6.137H0.234z"
                ></path>
                <path
                  fill="currentColor"
                  d="M25.736,0.574H0.234v2.893h25.501V0.574z"
                ></path>
                <path
                  fill="currentColor"
                  d="M11.076,18.062c0,2.028,0.738,3.766,2.15,5.179c1.412,1.449,3.174,2.155,5.197,2.186      c2.054-0.03,3.751-0.736,5.194-2.186c1.443-1.413,2.149-3.15,2.149-5.179c0-2.054-0.706-3.792-2.149-5.236      c-1.443-1.416-3.141-2.123-5.194-2.123c-2.022,0-3.785,0.708-5.197,2.123C11.814,14.27,11.076,16.008,11.076,18.062z"
                ></path>
                <polyline
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.2846"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="      21.339,20.09 18.453,19.221 18.453,14.463     "
                ></polyline>
              </svg>
            </Link>
          </li> */}
          <li className="block float-left" title="Profile">
            <Link
              to={"/my-account"}
              state={{ id: record._id, activeTab: "profile" }}
              className="w-[26px] h-[26px] ml-[12px] text-[0] flex bg-[#f3f3f3] rounded-[6px] border-[1px] border-[solid] border-[#bbbbbb] float-right cursor-pointer items-center justify-center hover:text-[black]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 26 26"
                enableBackground="new 0 0 26 26"
                xmlSpace="preserve"
              >
                <path
                  fill="currentColor"
                  d="M25.36,21.222c-0.678-0.975-1.612-1.868-2.842-2.634c-2.586-1.699-5.682-2.551-9.37-2.508    c-3.646-0.043-6.783,0.809-9.412,2.508c-1.4,0.894-2.46,1.955-3.095,3.104v3.91H25.36V21.222z"
                ></path>
                <path
                  fill="currentColor"
                  d="M17.176,11.024c1.23-1.233,1.822-2.678,1.822-4.421c0-1.699-0.592-3.188-1.822-4.377    c-1.187-1.232-2.671-1.827-4.367-1.827c-1.738,0-3.18,0.595-4.409,1.827C7.213,3.416,6.576,4.904,6.576,6.603    c0,1.743,0.637,3.188,1.824,4.421c1.229,1.188,2.671,1.827,4.409,1.827C14.505,12.851,15.99,12.212,17.176,11.024z"
                ></path>
              </svg>
            </Link>
          </li>
          <li className="block float-left" title="Change Status">
            <button
              className="w-[26px] h-[26px] ml-[12px] text-[0] flex bg-[#f3f3f3] rounded-[6px] border-[1px] border-[solid] border-[#bbbbbb] float-right cursor-pointer items-center justify-center"
              onClick={() => changeStatus(true, record)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 26 26"
                enableBackground="new 0 0 26 26"
                xmlSpace="preserve"
              >
                <path
                  fill="currentColor"
                  d="M15.75,0.394H10.25v4.135C9.163,4.891,8.187,5.436,7.318,6.197L3.807,3.985L0.875,8.664l3.511,2.212    c-0.145,0.689-0.217,1.379-0.217,2.14c0,0.799,0.107,1.633,0.29,2.359L1.02,17.659l3.041,4.61l3.474-2.322    c0.833,0.688,1.737,1.158,2.715,1.485v4.175h5.501v-4.209c1.05-0.327,2.028-0.872,2.935-1.635l3.544,2.214l2.896-4.714    l-3.55-2.178c0.184-0.689,0.252-1.343,0.252-2.069c0-0.87-0.104-1.631-0.286-2.358l3.44-2.321l-3.079-4.606l-3.441,2.285    c-0.831-0.653-1.733-1.161-2.711-1.452V0.394z M7.788,13.162c0-0.072,0-0.109,0-0.145c0-1.451,0.508-2.719,1.521-3.736    c1.012-1.017,2.244-1.524,3.69-1.524c1.412,0,2.643,0.507,3.691,1.524c0.979,1.017,1.484,2.176,1.519,3.555    c0,0.036,0,0.072,0,0.145v0.036c0,1.416-0.505,2.648-1.519,3.667c-1.049,1.015-2.279,1.52-3.691,1.52    c-1.446,0-2.679-0.505-3.69-1.52C8.332,15.702,7.826,14.504,7.788,13.162z"
                ></path>
              </svg>
            </button>
          </li>
          <li className="block float-left" title="Sports Setting">
            <button
              className="w-[26px] h-[26px] ml-[12px] text-[0] flex bg-[#f3f3f3] rounded-[6px] border-[1px] border-[solid] border-[#bbbbbb] float-right cursor-pointer items-center justify-center"
              onClick={() => {
                setSportSettingUserId(record._id);
                setIsCricketBetLock(
                  record?.is_cricket_bet_lock == "Yes" ? false : true
                );
                setIsSoccerBetLock(
                  record?.is_soccer_bet_lock == "Yes" ? false : true
                );
                setIsTennisBetLock(
                  record?.is_tennis_bet_lock == "Yes" ? false : true
                );
                setIsCasinoBetLock(
                  record?.is_casino_bet_lock == "Yes" ? false : true
                );

                setSportsSettingModal(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 26 26"
                enableBackground="new 0 0 26 26"
                xmlSpace="preserve"
              >
                <path
                  fill="currentColor"
                  d="M11.605,3.012c-0.931-0.266-2.259-0.398-3.986-0.398H0.179v20.772h7.439c1.728,0,3.056-0.131,3.986-0.4    c0.532-0.131,0.93-0.399,1.328-0.799v-8.653C12.667,13.265,12.27,13.134,11.87,13c1.994-0.534,2.924-1.995,2.924-4.527    c0-1.465-0.266-2.66-0.93-3.595C13.2,3.946,12.535,3.279,11.605,3.012L11.605,3.012z M9.479,8.872c0,0.665-0.133,1.199-0.53,1.598    c-0.268,0.399-1.063,0.665-2.526,0.665H5.227V6.742H6.69c1.195-0.134,1.991,0.133,2.259,0.531    C9.346,7.674,9.479,8.205,9.479,8.872L9.479,8.872z M5.227,14.862h1.195c1.463,0,2.259,0.27,2.526,0.8    c0.397,0.398,0.532,0.936,0.532,1.604c0,0.53-0.135,1.062-0.532,1.461c-0.268,0.399-1.063,0.669-2.259,0.669H5.227V14.862    L5.227,14.862z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23.43,13.4v-1.73c0-0.934-0.4-1.864-1.062-2.53c-0.661-0.667-1.592-1.065-2.521-1.065    c-0.938,0-1.866,0.398-2.528,1.065c-0.667,0.666-1.063,1.597-1.063,2.53v1.73h-1.33c-0.266,0-0.532,0.134-0.798,0.399    c-0.133,0.133-0.265,0.401-0.265,0.667v7.59c0,0.269,0.132,0.53,0.265,0.668c0.266,0.262,0.532,0.393,0.798,0.393h9.826    c0.276,0,0.538-0.131,0.8-0.393c0.138-0.138,0.269-0.399,0.269-0.668v-4.928l0,0v-2.662c0-0.266-0.131-0.534-0.269-0.667    c-0.262-0.266-0.523-0.399-0.8-0.399H23.43L23.43,13.4z M22.1,11.669v1.73h-4.512v-1.73c0-0.665,0.262-1.2,0.661-1.599    c0.398-0.397,0.929-0.663,1.598-0.663c0.661,0,1.191,0.266,1.591,0.663C21.831,10.469,22.1,11.004,22.1,11.669L22.1,11.669z     M20.901,18.197c0,0.399-0.124,0.661-0.523,0.93l0.131,0.931h-1.199v-0.931c-0.262-0.269-0.4-0.53-0.4-0.93    c0-0.27,0.139-0.538,0.27-0.669c0.131-0.262,0.393-0.399,0.669-0.399c0.262,0,0.53,0.138,0.661,0.399    C20.777,17.659,20.901,17.927,20.901,18.197L20.901,18.197z"
                ></path>
              </svg>
            </button>
          </li>
          <li className="block float-left" title="Delete User">
            <button
              className="w-[26px] h-[26px] ml-[12px] text-[0] flex bg-[#f3f3f3] rounded-[6px] border-[1px] border-[solid] border-[#bbbbbb] float-right cursor-pointer items-center justify-center"
              disabled={button}
              onClick={() => deleteUser(record._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 26 26"
                enableBackground="new 0 0 26 26"
                xmlSpace="preserve"
              >
                <path
                  fill="currentColor"
                  d="M16.162,0.213H9.838C9.358,0.535,9.005,1.049,8.78,1.821H2.233c-0.191,0-0.32,0.097-0.32,0.29v2.541    c0,0.193,0.129,0.29,0.32,0.322h21.534c0.224-0.032,0.32-0.129,0.32-0.322V2.111c0-0.193-0.097-0.29-0.32-0.29h-6.514    C16.995,1.049,16.643,0.535,16.162,0.213z"
                ></path>
                <path
                  fill="currentColor"
                  d="M19.725,25.788c1.088-0.453,1.698-1.256,1.795-2.415c0-0.031,0-0.062,0-0.097l1.058-16.694H3.454    l1.027,16.694c0,0.035,0,0.065,0.031,0.097c0.096,1.159,0.674,1.962,1.765,2.415H19.725z"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      ),
    },
  ];

  const changeStatus = (open, record) => {
    setChangeStatusModal(open);
    // setCurrentCreditRef(record.credit_reference)
    // console.log('record:', record)
    setUserStatusData({
      ...userStatusData,
      user_id: record._id,
      user_name: record.user_name,
      status: record.status,
      record,
    });
  };

  const editCreditRef = (open, record) => {
    setEditCreditRefModal(open);
    setCurrentCreditRef(record.credit_reference);
    console.log("record:", record);
    setUserRefData({
      ...userRefData,
      user_id: record._id,
      user_name: record.user_name,
    });
  };

  const creditRefLog = (open, record) => {
    setOpenCreditRefLogModal(open);
    setUserRefData({
      ...userRefData,
      user_id: record._id,
      user_name: record.user_name,
    });
  };

  const userBanking = (open, record) => {
    setbankingModal(open);
    console.log("record:", record);
    setUserBankingData({
      ...userBankingData,
      user_id: record._id,
      master_id: params.user_id ? params.user_id : record.master_id,
      user_name: record.user_name,
      record,
    });
  };

  const deleteUser = async (values) => {
    var data = JSON.stringify({
      user_id: values,
    });
    setButton(true);
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}users/deleteAuraUser`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        if (response.data.result != "0") {
          NotificationManager.success(response.data.resultMessage, "", 3000);
          // setEditExposureLimitModal(false)
          getDownlineUsersData();
          // exposerLimitForm.resetFields();
        } else {
          console.log(response);
          NotificationManager.error(`${response.data.resultMessage}`, "", 3000);
        }
        setButton(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [data, setData] = useState([]);
  const [openAddMaster, setOpenAddMaster] = useState(false);
  const [isAgentCommission, setIsAgentCommission] = useState(false);
  const [isCommission, setIsCommission] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [submitClick, setSubmitClick] = useState(false);
  const [uplinePL, setUplinePL] = useState();
  const [uplineUserData, setUplineUserData] = useState();

  const [formData, setFormData] = useState({
    master_id: params.user_id ? params.user_id : userInfo?._id,
    registration_date: moment().format("DD-MMM-YYYY"),
  });

  function setUserType(value) {
    // console.log('value', value);
    setFormData({
      ...formData,
      user_type: value,
    });
  }

  // console.log('formData', formData);
  // const handleSearch = (value, dataIndex) => {
  //     const filtered = data.filter(item => item[dataIndex].toString().toLowerCase().includes(value.toLowerCase()));
  //     setFilteredData(filtered);
  //     setCurrent(1); // Reset to the first page after a search
  // };
  const handleSearch = (value, dataIndex) => {
    console.log("jlee");
    if (!value) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((item) => {
      return Array.isArray(dataIndex)
        ? dataIndex.some((key) =>
            item[key]?.toString().toLowerCase().includes(value.toLowerCase())
          )
        : item[dataIndex]
            ?.toString()
            .toLowerCase()
            .includes(value.toLowerCase());
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
  const handleLast = () =>
    setCurrent(Math.ceil(filteredData?.length / pageSize));

  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  useEffect(() => {
    // if (filteredData.length > 0) {

    const paginatedData1 = filteredData?.slice(startIndex, endIndex);
    setPaginatedData(paginatedData1);
    // }
  }, [current, pageSize, filteredData]);

  const onFinish = (values) => {
    Object.assign(values, {
      rolling_commission: isCommission === true ? "Yes" : "No",
    });
    Object.assign(values, {
      agent_rolling_commission: isAgentCommission === true ? "Yes" : "No",
    });

    Object.assign(formData, values);

    if (!isCommission) {
      formData.rolling_commission_binary = 0;
      formData.rolling_commission_bookmaker = 0;
      formData.rolling_commission_casino = 0;
      formData.rolling_commission_fancy = 0;
      formData.rolling_commission_matka = 0;
      formData.rolling_commission_sportbook = 0;
      formData.rolling_commission_virtualsport = 0;
    } else {
      formData.commission = 0;
    }

    formData.partnership = 100;
    formData.registration_date = moment(formData.registration_date).format(
      "YYYY-MM-DD"
    );
    // console.log('hlw',formData)
    // return false;
    formData.master_id = params.user_id ? params.user_id : userInfo._id;
    formData.partnership = formData.partnership;
    formData.site_code = Appconfig.sitecodes;

    var data = JSON.stringify(formData);

    setButton(true);

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}users/addDaddyUser`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.data.result) {
          setOpenAddMaster(false);
          getDownlineUsersData();
          NotificationManager.success(
            `${response.data.resultMessage}`,
            "",
            3000
          );
          form.resetFields();
        } else {
          console.log(response);
          NotificationManager.error(`${response.data.resultMessage}`, "", 3000);
        }
        setButton(false);
      })
      .catch(function (error) {
        console.log("error", error);

        console.log(error);
      })
      .finally(function () {
        // form.resetFields();
      });
    setTimeout(function () {
      // closeMessage();
    }, 3000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmitCredRef = () => {
    var data = JSON.stringify(userRefData);
    console.log(userRefData);
    if (userRefData.credit_reference == "") {
      NotificationManager.error(
        "The credit reference field is mandatory.",
        "",
        3000
      );
    }
    if (userRefData.password == "") {
      NotificationManager.error(
        "The master password field is mandatory.",
        "",
        3000
      );
    }
    if (
      userRefData.credit_reference != "" &&
      userRefData.password != "" &&
      userRefData.user_id != "" &&
      userRefData.user_name != ""
    ) {
      if (userRefData?.password.trim() == userInfo?.password.trim()) {
        setButton(true);
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
            getDownlineUsersData();
            setUserRefData({
              user_id: "",
              credit_reference: "",
              password: "",
              user_name: "",
            });
            console.log("--", response);
            setEditCreditRefModal(false);
            setButton(false);
            NotificationManager.success(
              "Credit Reference updated successfully.",
              "",
              3000
            );
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        NotificationManager.error(
          "Your Password Not Matched With System.",
          "",
          3000
        );
      }
    }
  };
  const handleCredRefChange = (event) => {
    setUserRefData({
      ...userRefData,
      [event.target.name]: event.target.value,
    });
  };

  const creditRefLogColumns = [
    {
      title: "Form Name",
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
      title: "User Name	",
      // dataIndex: 'balance',
      sorter: false,
      // width: '10%'
    },
    {
      title: "Old Credit Reference",
      // dataIndex: 'exposure',
      sorter: true,
      // width: '10%'
    },
    {
      title: "New Credit Reference",
      // dataIndex: 'exposer_limit',
      sorter: true,
      // width: '15%'
    },
    {
      title: "Date",
      // dataIndex: 'name',
      sorter: true,
      // width: '10%'
    },
  ];

  const getUplineUserData = () => {
    var data = {
      user_id: params.user_id ? params.user_id : userInfo._id,
    };
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}users/getAuraUserByUserId`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.data.result) {
          setUplineUserData(response.data.resultData);
          let uplineData = response.data.resultData;
          let uplines = [];
          let myUplines = [];

          if (userInfo._id && !params.user_id) {
            let pll = 0;
            let pl =
              Number(response.data.noDeductbalance) -
              Number(uplineData.credit_reference);
            if (pl) {
              pll = Number(pl);
            }
            setUplinePL(pll);
          }

          if (uplineData?.masters.length > 0) {
            uplineData?.masters?.map((master) => {
              let excludeUserTypes = [];

              if (userInfo?.user_type === "Super Admin") {
                excludeUserTypes = ["Super Admin"];
              } else if (userInfo?.user_type === "Admin") {
                excludeUserTypes = ["Admin", "Super Admin"];
              } else if (userInfo?.user_type === "Hyper Super Master") {
                excludeUserTypes = [
                  "Admin",
                  "Super Admin",
                  "Hyper Super Master",
                ];
              } else if (userInfo?.user_type === "Super Master") {
                excludeUserTypes = [
                  "Admin",
                  "Super Admin",
                  "Hyper Super Master",
                  "Super Master",
                ];
              } else if (userInfo?.user_type === "Master") {
                excludeUserTypes = [
                  "Admin",
                  "Super Admin",
                  "Hyper Super Master",
                  "Super Master",
                  "Master",
                ];
              }

              if (!excludeUserTypes.includes(master.user_type)) {
                let data = {
                  id: master.id,
                  user_name: master.user_name,
                  user_type: master.user_type,
                };
                uplines.push(data);
              }
            });
          }

          let masterData = {
            id: uplineData._id,
            user_name: uplineData.user_name,
            user_type: uplineData.user_type,
          };
          myUplines.push(...uplines, masterData);
          setMyUplineData(myUplines);
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getDownlineUsersData = () => {
    var data = {
      master_id: params.user_id ? params.user_id : userInfo._id,
      user_type: params.user_type ? params.user_type : "",
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
          setLoading(false);
          setFilteredData(response.data);
          setData(response.data);
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getUsersDataCalc = () => {
    var data = {
      master_id: userInfo?._id,
      user_type: userInfo?.user_type,
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
          let userData = response.data;
          let totalBal = 0;
          let totalExp = 0;

          userData?.map((data) => {
            totalBal += Number(data.noDeductbalance);
            totalExp += Number(data.exposure);
          });
          updateTotalBalance(totalBal);
          updateTotalExposure(totalExp);
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const changeBetSetting = (type, lock) => {
    var data = {
      user_id: sportSettingUserId,
      type: type,
      lock: lock,
    };
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}users/userBetToggle`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        NotificationManager.success(`Sport setting updated`, "", 3000);
        // if (response.data) {
        //     setFilteredData(response.data)
        //     // console.log(response.data)
        // }
        // else {
        //     console.log(response)
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateUserStatus = (e) => {
    e.preventDefault();
    if (userStatusData?.password.trim() == userInfo?.password.trim()) {
      setButton(true);
      // if (checkPasswordCorrect()) {
      var data = JSON.stringify({
        user_id: userStatusData.user_id,
        change_status: userStatusData.change_status,
        UpdateField: {
          status: userStatusData.status,
        },
      });
      console.log(data);
      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}users/updateUserInfo`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          if (response.data.result) {
            setChangeStatusModal(false);
            NotificationManager.success(
              "Status Successfully Updated.",
              "",
              3000
            );
            getDownlineUsersData();
          } else {
            NotificationManager.error(response.data.message, "", 3000);
          }
          setButton(false);
          // console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      // }
    } else {
      NotificationManager.error(
        "Your Password Not Matched With System.",
        "",
        3000
      );
    }
  };

  const handleUserStatusfChange = (event) => {
    setUserStatusData({
      ...userStatusData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitPayment = async (action) => {
    var data = JSON.stringify({
      master_id: userBankingData.master_id,
      password: userBankingData.password,
      userArray: [
        {
          user_id: userBankingData.user_id,
          amount: userBankingData.amount,
          action: action,
          remark: userBankingData.remark,
        },
      ],
    });
    if (
      userBankingData.password == uplineUserData?.password
        ? uplineUserData?.password
        : userInfo.password
    ) {
      console.log("---", JSON.parse(data));
      console.log(data);
      setSubmitClick(true);

      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}ledger/auraSaveBankingInfo`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.data.result) {
            console.log(response);
            setbankingModal(false);
            setUserBankingData({
              master_id: "",
              password: "",
              user_id: "",
              amount: "",
              action: "",
              remark: "",
              user_name: "",
            });
            getDownlineUsersData();
            getBalance();
            NotificationManager.success(response.data.message, "", 3000);
          } else {
            NotificationManager.error(response.data.message, "", 3000);
          }
          setSubmitClick(false);
        })
        .catch(function (error) {
          console.log(error);
          // NotificationManager.success(response.data.message, '', 3000);
        });
    } else {
      NotificationManager.error(
        "Your Password Not Matched With System.",
        "",
        3000
      );
    }
  };

  const handleUserBankingChange = (event) => {
    setUserBankingData({
      ...userBankingData,
      [event.target.name]: event.target.value,
    });
  };

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
          setBalance(response.data.resultData.balance);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getBalance();
    // countUplinePl();
    getDomains();
  }, []);

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
        // console.log('response.data', response.data);
        if (response.data.result) {
          setAllDomains(response.data.resultData);
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getDownlineUsersData();
    getUplineUserData();
    if (params) {
      setCurrent(1);
      setPageSize(10);
      setLoading(true);
    }
  }, [params]);

  useEffect(() => {
    getUsersDataCalc();
  }, []);

  return (
    <>
      <NotificationContainer />

      <Modal
        title={`Edit Credit Reference - ${userRefData.user_name}`}
        className="rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]"
        onCancel={() => {
          setEditCreditRefModal(false);
        }}
        footer={
          <div className="col-span-12 flex items-center justify-end p-4 border-[none] pt-0">
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="m-[5px] text-[#fff]  bg-[#0d6efd] border-[#0d6efd] font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]"
              disabled={button}
              onClick={handleSubmitCredRef}
            >
              Submit
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="bg-[linear-gradient(-180deg,_#b8beca_0%,_#989595_100%)] font-bold !px-[10px] !py-[5px] !text-[.875rem] m-[5px] text-[#212529] text-center no-underline align-middle border-[1px] border-[solid] border-[transparent] rounded-[.375rem]"
              onClick={() => {
                setEditCreditRefModal(false);
                setUserRefData({
                  user_id: "",
                  credit_reference: "",
                  password: "",
                  user_name: "",
                });
              }}
            >
              Cancel
            </button>
          </div>
        }
        open={editCreditRefModal}
      >
        <div className="grid grid-cols-12 px-[1rem] py-[.75rem] ml-[.5rem]">
          <div className="col-span-12 mb-[.5rem] ">
            <div className="grid grid-cols-12">
              <div className="col-span-2 lg:col-span-2 pl-[10px] py-[7px] text-[0.813rem]">
                Current
              </div>
              <div className="col-span-9 px-[10px] flex items-center">
                <span className="font-extrabold text-[0.813rem] text-[#23282C]">
                  {currentCreditRef}
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 mb-[1rem]">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-2 px-[10px] py-[7px]">
                New
              </div>
              <div className="col-span-12 lg:col-span-8 pl-[10px] lg:px-[10px]">
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
          <div className="col-span-12 ">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-2 pl-[10px] py-[7px]">
                Password
              </div>
              <div className="col-span-12 lg:col-span-8 pl-[10px] lg:px-[10px]">
                <Input.Password
                  id="password"
                  value={userRefData.password}
                  name="password"
                  required
                  className="rolling-commission-password-inp"
                  onChange={handleCredRefChange}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        title={`Credit Reference Log - ${userRefData.user_name}`}
        width={1150}
        className="rollingcommission-model relative top-1 lg:top-7 w-full"
        onCancel={() => {
          setOpenCreditRefLogModal(false);
        }}
        footer={null}
        open={openCreditRefLogModal}
      >
        <div className="p-[1.25rem] flex-auto ">
          <Table
            title={() => (
              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-start mb-[.8rem] lg:mb-[0px]">
                  <div className="text-[#333] m-[.5rem]">
                    <label>
                      Show
                      <Select
                        defaultValue={10}
                        onChange={handlePageSizeChange}
                        className="pagesize-select mx-[5px]"
                      >
                        <Select.Option value={10}>10</Select.Option>
                        <Select.Option value={25}>25</Select.Option>
                        <Select.Option value={50}>50</Select.Option>
                        <Select.Option value={100}>100</Select.Option>
                      </Select>
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end">
                  <div className="text-[#333] m-[.5rem]">
                    <label>
                      Search:
                      <Input
                        onChange={(e) =>
                          handleSearch(e.target.value, ["name", "user_name"])
                        }
                        style={{ width: "150px", marginLeft: "5px" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}
            locale={locale}
            columns={creditRefLogColumns}
            className=" activity-log"
            bordered
            // dataSource={paginatedData}
            dataSource={[]}
            pagination={false}
          />
          <div className="grid grid-cols-12 items-center pt-[1.5rem] lg:pt-[.75rem] text-[#333]">
            <div className="col-span-12 lg:col-span-6 text-[#333] text-[0.813rem]">
              Showing {startIndex + 1} to {endIndex} of {filteredData?.length}{" "}
              entries
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-center justify-end  pt-[1rem] lg:pt-[0px] lg:mt-[0rem]">
              <button
                className="text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px] cursor-pointer"
                type="button"
                onClick={handleFirst}
                style={{ marginRight: 8 }}
              >
                First
              </button>
              <Pagination
                current={current}
                pageSize={pageSize}
                total={filteredData?.length}
                onChange={(page) => setCurrent(page)}
                itemRender={(page, type, originalElement) => {
                  if (type === "prev") {
                    return (
                      <button type="button" className="!cursor-pointer">
                        Previous
                      </button>
                    );
                  }
                  if (type === "page") {
                    return null; // Hide page numbers
                  }
                  if (type === "next") {
                    return (
                      <button type="button" className="!cursor-pointer">
                        Next
                      </button>
                    );
                  }
                  return originalElement;
                }}
                showSizeChanger={false} // Disable default page size changer
              />
              <button
                className="text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px]  cursor-pointer"
                type="button"
                onClick={handleLast}
                style={{ marginLeft: 8 }}
              >
                Last
              </button>
            </div>
          </div>
          {/* <Table columns={columns} dataSource={data} /> */}
        </div>
      </Modal>
      <Modal
        title={`Change Status`}
        className="rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]"
        onCancel={() => {
          setChangeStatusModal(false);
        }}
        footer={null}
        open={changeStatusModal}
      >
        <div className="grid grid-cols-12 px-[1rem] py-[.75rem] ">
          <div className="col-span-12 flex items-center justify-between mb-[1rem]">
            <div>
              <span className="text-[#fff] bg-[#4dbd74] text-[0.688rem] font-bold px-[5px] py-[3px] rounded-[3px] inline-block leading-none text-center whitespace-nowrap align-baseline">
                USER
              </span>
              <span className=" text-[#212529] text-[0.813rem] ml-[5px]">
                {userStatusData &&
                  userStatusData.record &&
                  userStatusData.record.user_name}
              </span>
            </div>
            {userStatusData &&
              userStatusData.record &&
              userStatusData.record.status && (
                <div>
                  {userStatusData &&
                  userStatusData.record &&
                  userStatusData.record.status == "active" ? (
                    <span className="text-[0.688rem] font-extrabold px-[5px] py-[3px] rounded-[3px] bg-[#e5f1dc] border-[1px] border-[solid] border-[#bedca7] text-[#508d0e] leading-none">
                      {userStatusData &&
                        userStatusData.record &&
                        userStatusData.record.status}
                    </span>
                  ) : userStatusData &&
                    userStatusData.record &&
                    userStatusData.record.status == "locked" ? (
                    <span className="text-[0.688rem] font-extrabold px-[5px] py-[3px] rounded-[3px] bg-[#e3e8eb] border-[1px] border-[solid] border-[#b9c5cd] text-[#5a7384] leading-none">
                      {userStatusData &&
                        userStatusData.record &&
                        userStatusData.record.status}
                    </span>
                  ) : (
                    <span className="text-[0.688rem] font-extrabold px-[5px] py-[3px] rounded-[3px] bg-[#f2e2e6] border-[1px] border-[solid] border-[#deb6c0] text-[#d0021b] leading-none">
                      {userStatusData &&
                        userStatusData.record &&
                        userStatusData.record.status}
                    </span>
                  )}
                </div>
              )}
          </div>
          <div className="col-span-12  mt-[30px]">
            <div className="grid grid-cols-12 gap-x-[24px] gap-y-[12px]">
              <div className="col-span-6 lg:col-span-4 ">
                <button
                  type="button"
                  className={`w-full px-[10px] py-[5px] text-[.875rem] inline-block leading-normal text-[#198754] text-center border-[1px] border-[solid] border-[#198754] rounded-[.375rem] [transition:color_.15s_ease-in-out,_background-color_.15s_ease-in-out,_border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] hover:bg-[linear-gradient(-180deg,_#e9e9e9_23%,_#fefefe_100%)] hover:text-[#000] hover:border-[#dc3545] ${
                    userStatusData.status == "active" &&
                    "opacity-[.65] pointer-events-none"
                  }`}
                  onClick={() => {
                    setUserStatusData({
                      ...userStatusData,
                      status: "active",
                    });
                  }}
                >
                  <div>
                    <i className="far fa-check-circle fa-2x"></i>
                  </div>
                  <div className="font-bold text-[.875rem]">Active</div>
                </button>
              </div>
              <div className="col-span-6 lg:col-span-4 ">
                <button
                  type="button"
                  className={`w-full px-[10px] py-[5px] text-[.875rem] inline-block leading-normal text-[#dc3545] text-center border-[1px] border-[solid] border-[#dc3545] rounded-[.375rem] [transition:color_.15s_ease-in-out,_background-color_.15s_ease-in-out,_border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] hover:bg-[linear-gradient(-180deg,_#e9e9e9_23%,_#fefefe_100%)] hover:text-[#000] hover:border-[#dc3545] ${
                    userStatusData.status == "suspended" &&
                    "opacity-[.65] pointer-events-none"
                  }`}
                  onClick={() => {
                    setUserStatusData({
                      ...userStatusData,
                      status: "suspended",
                    });
                  }}
                >
                  <div>
                    <i className="fa fa-ban fa-2x"></i>
                  </div>
                  <div className="font-bold text-[.875rem]">Suspend</div>
                </button>
              </div>
              <div className="col-span-6 lg:col-span-4 ">
                <button
                  type="button"
                  className={`w-full px-[10px] py-[5px] text-[.875rem] inline-block leading-normal text-[#6c757d] text-center border-[1px] border-[solid] border-[#6c757d] rounded-[.375rem] [transition:color_.15s_ease-in-out,_background-color_.15s_ease-in-out,_border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] hover:bg-[linear-gradient(-180deg,_#e9e9e9_23%,_#fefefe_100%)] hover:text-[#000] hover:border-[#dc3545 ${
                    userStatusData.status == "locked" &&
                    "opacity-[.65] pointer-events-none"
                  }`}
                  onClick={() => {
                    setUserStatusData({
                      ...userStatusData,
                      status: "locked",
                    });
                  }}
                >
                  <div>
                    <i className="fa fa-lock fa-2x"></i>
                  </div>
                  <div className="font-bold text-[.875rem]">Locked</div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-[30px]">
            <div className="grid grid-cols-12 gap-x-[24px]">
              <div className="col-span-12 lg:col-span-6">
                <Input.Password
                  id="password"
                  // value={userRefData.password}
                  value={userStatusData.password}
                  placeholder="Password.."
                  name="password"
                  required
                  className="rolling-commission-password-inp w-[100%]"
                  onChange={handleUserStatusfChange}
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className=" w-full text-[#fff]  bg-[#0d6efd] border-[#0d6efd] font-bold !px-[10px] !py-[5px] !text-[.875rem] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-[.375rem]"
                  disabled={button}
                  onClick={updateUserStatus}
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        title={`Banking - Master Balance: ${balance}`}
        className="rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]"
        onCancel={() => {
          setbankingModal(false);
        }}
        footer={
          <div className="col-span-12 flex items-center justify-end p-4 border-[none] pt-0">
            {/* <button type="button" data-bs-dismiss="modal" aria-label="Close" className={`m-[5px] text-[#fff]  bg-[#4dbd74] border-[#4dbd74] font-bold !px-[10px] !py-[5px] !text-[.875rem] rounded-[.375rem]  ${userBankingData.amount == '' && userBankingData.password == '' && userBankingData.remark == '' ? 'pointer-events-none opacity-[.65]' : ''}`} */}
            {submitClick ? (
              <>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className={`m-[5px] text-[#fff]  bg-[#4dbd74] border-[#4dbd74] font-bold !px-[10px] !py-[5px] !text-[.875rem] rounded-[.375rem] opacity-[.65] cursor-not-allowed`}
                >
                  Deposite
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className={`bg-[#f86c6b] font-bold !px-[10px] !py-[5px] !text-[.875rem] m-[5px] text-[#fff] text-center no-underline align-middle border-[1px] border-[solid] border-[#f86c6b] rounded-[.375rem] opacity-[.65] cursor-not-allowed`}
                >
                  Withdraw
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className={`m-[5px] text-[#fff]  bg-[#4dbd74] border-[#4dbd74] font-bold !px-[10px] !py-[5px] !text-[.875rem] rounded-[.375rem] `}
                  onClick={() => handleSubmitPayment("Credit")}
                >
                  Deposite
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className={`bg-[#f86c6b] font-bold !px-[10px] !py-[5px] !text-[.875rem] m-[5px] text-[#fff] text-center no-underline align-middle border-[1px] border-[solid] border-[#f86c6b] rounded-[.375rem]`}
                  onClick={() => handleSubmitPayment("Debit")}
                >
                  Withdraw
                </button>
              </>
            )}
          </div>
        }
        open={bankingModal}
      >
        <div className="grid grid-cols-12 px-[1rem] py-[.75rem] ">
          <div className="col-span-12 flex items-center justify-between mb-[1rem]">
            <div>
              <span className="text-[#fff] bg-[#4dbd74] text-[0.688rem] font-bold px-[5px] py-[3px] rounded-[3px] inline-block leading-none text-center whitespace-nowrap align-baseline">
                USER
              </span>
              <span className="font-extrabold text-[#212529] text-[0.813rem] ml-[5px]">
                {userBankingData && userBankingData.user_name}
              </span>
            </div>
            <div>
              <span>
                Client Bal :{" "}
                <b>
                  {userBankingData &&
                    userBankingData.record &&
                    Number(userBankingData.record?.balance).toFixed(0)}
                </b>
              </span>
            </div>
          </div>
          <div className="col-span-12 mb-[1rem]">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-2  py-[7px]">Balance</div>
              <div className="col-span-12 lg:col-span-8 ">
                <Input
                  name="amount"
                  placeholder=""
                  value={userBankingData.amount}
                  type="number"
                  className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal"
                  onChange={handleUserBankingChange}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 mb-[1rem]">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-2  py-[7px]">Remark</div>
              <div className="col-span-12 lg:col-span-8 ">
                <Input
                  name="remark"
                  placeholder="Remark.."
                  value={userBankingData.remark}
                  type="text"
                  className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal"
                  onChange={handleUserBankingChange}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 mb-[1rem]">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-2  py-[7px]">
                Your Password
              </div>
              <div className="col-span-12 lg:col-span-8 ">
                <Input.Password
                  name="password"
                  placeholder=""
                  value={userBankingData.password}
                  type="text"
                  className="block w-full px-[.75rem] py-[.375rem] text-[.875rem] leading-normal text-[#5c6873] bg-[#fff] bg-clip-padding border-[1px] border-[solid] border-[#e4e7ea] rounded-[.25rem] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out] font-normal"
                  onChange={handleUserBankingChange}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        title={"Sports Settings"}
        className="rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]"
        onCancel={() => setSportsSettingModal(false)}
        footer={null}
        open={sportsSettingModal}
      >
        <div className="grid grid-cols-12 p-[1rem]">
          <div className="col-span-12">
            <table className="border-[1px] border-[#c8ced3] w-full text-[#212529] align-top">
              <thead className="align-bottom">
                <tr className="align-middle border-[1px]">
                  <th className="text-[#000000] bg-[#e0e6e6] border-[1px] border-[#c8ced3] p-[.5rem] text-start">
                    SrNo.
                  </th>
                  <th className="text-[#000000] bg-[#e0e6e6] border-[1px] border-[#c8ced3] p-[.5rem] text-start">
                    Sport Name
                  </th>
                  <th className="text-[#000000] bg-[#e0e6e6] border-[1px] border-[#c8ced3] p-[.5rem] text-start">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-[1px]">
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    1
                  </td>
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    Cricket
                  </td>
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    <div className="flex items-center">
                      <label
                        htmlFor="cricket"
                        className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]"
                      >
                        <input
                          id="cricket"
                          name="cricket"
                          type="checkbox"
                          className="sport-switch-input hidden"
                          checked={isCricketBetLock}
                          onChange={(e) => {
                            setIsCricketBetLock(e.target.checked);
                            if (e.target.checked) {
                              changeBetSetting("Cricket", "No");
                            } else {
                              changeBetSetting("Cricket", "Yes");
                            }
                          }}
                        />
                        <span
                          data-checked="✓"
                          data-unchecked="✕"
                          className="sport-switch-slider "
                        ></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    2
                  </td>
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    Tennis
                  </td>
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    <div className="flex items-center">
                      <label
                        htmlFor="tennis"
                        className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]"
                      >
                        <input
                          id="tennis"
                          name="tennis"
                          type="checkbox"
                          className="sport-switch-input hidden"
                          checked={isTennisBetLock}
                          onChange={(e) => {
                            setIsTennisBetLock(e.target.checked);
                            if (e.target.checked) {
                              changeBetSetting("Tennis", "No");
                            } else {
                              changeBetSetting("Tennis", "Yes");
                            }
                          }}
                        />
                        <span
                          data-checked="✓"
                          data-unchecked="✕"
                          className="sport-switch-slider "
                        ></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    3
                  </td>
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    Casino
                  </td>
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    <div className="flex items-center">
                      <label
                        htmlFor="casino"
                        className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]"
                      >
                        <input
                          id="casino"
                          name="casino"
                          type="checkbox"
                          className="sport-switch-input hidden"
                          checked={isCasinoBetLock}
                          onChange={(e) => {
                            setIsCasinoBetLock(e.target.checked);
                            if (e.target.checked) {
                              changeBetSetting("Casino", "No");
                            } else {
                              changeBetSetting("Casino", "Yes");
                            }
                          }}
                        />
                        <span
                          data-checked="✓"
                          data-unchecked="✕"
                          className="sport-switch-slider "
                        ></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    4
                  </td>
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    Soccer
                  </td>
                  <td className="border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]">
                    <div className="flex items-center">
                      <label
                        htmlFor="soccer"
                        className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]"
                      >
                        <input
                          id="soccer"
                          name="soccer"
                          type="checkbox"
                          className="sport-switch-input hidden"
                          checked={isSoccerBetLock}
                          onChange={(e) => {
                            setIsSoccerBetLock(e.target.checked);
                            if (e.target.checked) {
                              changeBetSetting("Soccer", "No");
                            } else {
                              changeBetSetting("Soccer", "Yes");
                            }
                          }}
                        />
                        <span
                          data-checked="✓"
                          data-unchecked="✕"
                          className="sport-switch-slider "
                        ></span>
                      </label>
                    </div>
                  </td>
                </tr>
                {/* <tr className='border-[1px]'>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>5</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>Horse Racing</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>
                                        <div className='flex items-center'>
                                            <label htmlFor="horse-racing" className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                <input id='horse-racing' name="horse-racing" type="checkbox" className="sport-switch-input hidden" />
                                                <span data-checked="✓" data-unchecked="✕" className="sport-switch-slider ">
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-[1px]'>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>6</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>Greyhound Racing</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>
                                        <div className='flex items-center'>
                                            <label htmlFor="greyhound-racing" className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                <input id='greyhound-racing' name="greyhound-racing" type="checkbox" className="sport-switch-input hidden" />
                                                <span data-checked="✓" data-unchecked="✕" className="sport-switch-slider ">
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-[1px]'>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>7</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>Kabaddi</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>
                                        <div className='flex items-center'>
                                            <label htmlFor="kabaddi" className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                <input id='kabaddi' name="kabaddi" type="checkbox" className="sport-switch-input hidden" />
                                                <span data-checked="✓" data-unchecked="✕" className="sport-switch-slider ">
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-[1px]'>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>8</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>Basketball</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>
                                        <div className='flex items-center'>
                                            <label htmlFor="basketball" className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                <input id='basketball' name="basketball" type="checkbox" className="sport-switch-input hidden" />
                                                <span data-checked="✓" data-unchecked="✕" className="sport-switch-slider ">
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-[1px]'>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>9</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>Politics</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>
                                        <div className='flex items-center'>
                                            <label htmlFor="politics" className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                <input id='politics' name="politics" type="checkbox" className="sport-switch-input hidden" />
                                                <span data-checked="✓" data-unchecked="✕" className="sport-switch-slider ">
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-[1px]'>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>10</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>Virtual Sports</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>
                                        <div className='flex items-center'>
                                            <label htmlFor="virtual-sports" className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                <input id='virtual-sports' name="virtual-sports" type="checkbox" className="sport-switch-input hidden" />
                                                <span data-checked="✓" data-unchecked="✕" className="sport-switch-slider ">
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-[1px]'>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>11</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>Binary</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>
                                        <div className='flex items-center'>
                                            <label htmlFor="binary" className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                <input id='binary' name="binary" type="checkbox" className="sport-switch-input hidden" />
                                                <span data-checked="✓" data-unchecked="✕" className="sport-switch-slider ">
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-[1px]'>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>12</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>Lottery</td>
                                    <td className='border-[1px] border-[#c8ced3] p-[.5rem] bg-[#00000000]'>
                                        <div className='flex items-center'>
                                            <label htmlFor="lottery" className="sport-switch sport-switch-label sport-switch-primary sport-switch-lg w-[40px] h-[22px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                <input id='lottery' name="lottery" type="checkbox" className="sport-switch-input hidden" />
                                                <span data-checked="✓" data-unchecked="✕" className="sport-switch-slider ">
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
      <Modal
        title={`Exposure Details - ${userRefData.user_name}`}
        width={1150}
        className="rollingcommission-model relative top-1 lg:top-7 w-full"
        onCancel={() => {
          setOpenExposureDetailModal(false);
        }}
        footer={null}
        open={openExposureDetailModal}
      >
        <div className="p-[1rem] flex-auto ">
          <table className="w-full mb-[2rem] text-[#212529] border-[1px] border-[#dee2e6]">
            <thead className="h-[40px]">
              <tr>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Sport Name
                </th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Event Name
                </th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Market Name
                </th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Bet Count
                </th>
              </tr>
            </thead>
            {userOpenBet.length > 0 ? (
              userOpenBet.map((bet) => {
                return (
                  <tr className="bg-[#ccc] text-center">
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.event_type == 4
                        ? "Cricket"
                        : bet.event_type == 2
                        ? "Tennis"
                        : bet.event_type == 1
                        ? "Soccer"
                        : "Casino"}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.event_name}
                    </td>
                    <td
                      className="h-[40px] px-[4px] text-[.813rem] text-[#315195] cursor-pointer"
                      onClick={() =>
                        OpenBettingModal(bet.user_id, bet.match_id)
                      }
                    >
                      {bet.market_name}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.totalByMatch}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="bg-[#ccc] text-center">
                <td colSpan={5} className="h-[40px] px-[4px] text-[.813rem]">
                  No matching records found
                </td>
              </tr>
            )}
          </table>
        </div>
      </Modal>

      <Modal
        title={`User Bettings - ${userRefData.user_name}`}
        width={1150}
        className="rollingcommission-model relative top-1 lg:top-7 w-full"
        onCancel={() => {
          setOpenBettingDetailModal(false);
        }}
        footer={null}
        open={openBettingDetailModal}
      >
        <div className="p-[1rem] flex-auto overflow-auto">
          <table className="w-full mb-[2rem] text-[#212529] border-[1px] border-[#dee2e6]">
            <thead className="h-[40px]">
              <tr>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Sport Name
                </th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Event Name
                </th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Market Name
                </th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Runner Name
                </th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Bet Type
                </th>
                {/* <th className='text-center p-[.5rem] text-[0.813rem]'>User Price</th> */}
                <th className="text-center p-[.5rem] text-[0.813rem]">Rate</th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Amount
                </th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Price Date
                </th>
                <th className="text-center p-[.5rem] text-[0.813rem]">
                  Match Date
                </th>
              </tr>
            </thead>
            {userOpenBetData.length > 0 ? (
              userOpenBetData.map((bet) => {
                return (
                  <tr
                    className={`${
                      bet.is_back ? "bg-[#72bbef]" : "bg-[#faa9ba]"
                    } text-center`}
                  >
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.event_type == 4
                        ? "Cricket"
                        : bet.event_type == 2
                        ? "Tennis"
                        : bet.event_type == 1
                        ? "Soccer"
                        : "Casino"}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.event_name}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.market_name}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.runner_name}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.is_back ? "BACK" : "LAY"}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.price_val}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {bet.stake}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {new Date(bet.createdAt).toLocaleString()}
                    </td>
                    <td className="h-[40px] px-[4px] text-[.813rem]">
                      {new Date(bet.createdAt).toLocaleString()}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="bg-[#ccc] text-center">
                <td colSpan={9} className="h-[40px] px-[4px] text-[.813rem]">
                  No matching records found
                </td>
              </tr>
            )}
          </table>
        </div>
      </Modal>
      <div className="grid grid-cols-12 relative  px-[15px] lg:px-[30px] mt-[28px]  lg:px-[0px] lg:top-[0px]">
        <div className="col-span-12  mb-[10px] lg:mb-[0px] mx-[0]">
          {myUplineData?.length > 0 && params?.user_id ? (
            myUplineData?.map((upline) => {
              return (
                <Link
                  to={`/list/master/${upline?.id}/${upline?.user_type}`}
                  className="flex items-center gap-[5px] h-[30px] m-0 leading-[30px] px-[10px] py-[0] bg-[#eee] border-[1px] border-[solid] border-[#bbb] rounded-[4px] !text-[#1e1e1e] font-bold text-[.75rem] block float-left no-underline cursor-pointer"
                >
                  <span className="items-center grid text-[#fff] bg-[#4dbd74] text-[0.688rem] font-bold px-[5px] py-[3px] rounded-[3px] inline-block leading-none text-center whitespace-nowrap align-baseline">
                    {upline?.user_type}
                  </span>
                  <span className="font-extrabold text-[#315195] text-[0.813rem] ml-[5px]">
                    {upline?.user_name}
                  </span>
                </Link>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className="col-span-12  mb-[10px] lg:mb-[0px] mx-[0]">
          <button className="flex items-center justify-center h-[30px] w-[30px] ml-[10px] mr-[5px] my-[0] bg-[#eee] border-[1px] border-[solid] border-[#bbb] rounded-[4px] text-[#1e1e1e] font-bold leading-[23px] text-[0.75rem] block text-center float-right">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4C9 4 6.4 5.6 5.1 8.1L4 7V11H8L6.5 9.5C7.5 7.5 9.6 6 12 6C15.3 6 18 8.7 18 12C18 15.3 15.3 18 12 18C10.2 18 8.6 17.2 7.5 15.9L6 17.2C7.4 18.9 9.6 20 12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4Z" />
            </svg>
          </button>

          <button
            className="flex items-center gap-[5px] h-[30px] m-0 leading-[30px] px-[15px] py-[0] bg-[#eee] border-[1px] border-[solid] border-[#bbb] rounded-[4px] !text-[#1e1e1e] font-bold text-[.75rem] block float-right no-underline cursor-pointer"
            onClick={() => setOpenAddMaster(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6C11.3 6 10 7.3 10 9C10 10.7 11.3 12 13 12C14.7 12 16 10.7 16 9C16 7.3 14.7 6 13 6ZM19.5 6C18.1193 6 17 7.11929 17 8.5C17 9.88071 18.1193 11 19.5 11C20.8807 11 22 9.88071 22 8.5C22 7.11929 20.8807 6 19.5 6ZM4 8V11H1V13H4V16H6V13H9V11H6V8H4ZM19.5 13C18.3 13 17.3875 13.3125 16.6875 13.8125C18.9875 14.9125 19.9062 16.8 19.9062 17V17.0938H24V15.8125C24 15.7125 22.9 13 19.5 13ZM13 14C8.4 14 7 17.3125 7 17.3125V19H19V17.3125C19 17.3125 17.6 14 13 14Z"
                fill="black"
              />
            </svg>
            Add Downline
          </button>
          <Modal
            title="Add Downline"
            className="rollingcommission-model relative top-1 lg:top-7 lg:!w-[34vw]"
            onCancel={() => setOpenAddMaster(false)}
            footer={null}
            open={openAddMaster}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-12 py-[20px]">
                <Form
                  form={form}
                  className="add-user-form"
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 12,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="user_name"
                    rules={[
                      {
                        required: true,
                        message: "Username is required.",
                      },
                    ]}
                  >
                    <Input className="ml-[10px]" placeholder="Username..." />
                  </Form.Item>

                  {/* <Form.Item
                                        label="Name"
                                        name="name"

                                        rules={[
                                            {
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input className='ml-[10px]' placeholder='Name...' />
                                    </Form.Item> */}

                  <Form.Item name="user_type" label="Acount Type">
                    <Select
                      allowClear
                      className="ml-[10px]"
                      onChange={(e) => setUserType(e)}
                    >
                      {(() => {
                        const roleOptions = {
                          "Super Admin": [
                            "Admin",
                            "Super Master",
                            "Master",
                            "Agent",
                            "User",
                          ],
                          Admin: ["Super Master", "Master", "Agent", "User"],
                          "Super Master": ["Master", "Agent", "User"],
                          Master: ["Agent", "User"],
                          Agent: ["User"],
                        };

                        const userType =
                          params?.user_type || userInfo?.user_type;
                        const options = roleOptions[userType] || [];

                        return options.map((option) => (
                          <Option key={option} value={option}>
                            {option}
                          </Option>
                        ));
                      })()}
                    </Select>
                  </Form.Item>

                  {/* {
                                        formData.user_type == "Admin" ?
                                            <Form.Item
                                                name="domain_site_code"
                                                label="Domain"
                                            >
                                                <Select
                                                    allowClear
                                                    className='ml-[10px]'
                                                >
                                                    {
                                                        (() => {
                                                            return allDomains.map(dom => (
                                                                <Option key={dom.site_code} value={dom.site_code}>{dom.domain_name}</Option>
                                                            ));
                                                        })()
                                                    }
                                                </Select>
                                            </Form.Item>
                                            :
                                            <></>
                                    } */}

                  {/* {
                                        !isCommission &&
                                        <Form.Item
                                            label="Commission(%) "
                                            name="commission"

                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Commission is required.',
                                                },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        const maxValue = uplineUserData?.commission ?? userInfo?.commission;
                                                        // Skip validation if user_type is "Super Admin"
                                                        if (uplineUserData?.user_type === 'Super Admin') {
                                                            return Promise.resolve();
                                                        }
                                                        // Apply validation for other user types
                                                        if (value === undefined || value <= maxValue) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error(`Commission cannot exceed ${maxValue}.`));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <Input type='number' className='ml-[10px]' 
                                            // max={uplineUserData?.commission ? uplineUserData?.commission : userInfo?.commission} 
                                            // max={uplineUserData?.commission ?? userInfo?.commission}
                                            min={0} placeholder='Commission...' />
                                        </Form.Item>
                                    } */}

                  <Form.Item
                    label="Opening Balance  "
                    name="opening_balance"
                    rules={[
                      {
                        required: true,
                        message: "Opening Balance is required.",
                      },
                    ]}
                  >
                    <Input
                      className="ml-[10px]"
                      placeholder="Opening Balance..."
                    />
                  </Form.Item>

                  <Form.Item
                    label="Credit Reference"
                    name="credit_limit"
                    rules={[
                      {
                        required: true,
                        message: "Credit Reference.. is required.",
                      },
                    ]}
                  >
                    <Input
                      className="ml-[10px]"
                      placeholder="Credit Reference.."
                    />
                  </Form.Item>
                  {/* <Form.Item
                                        label="Mobile Number   "
                                        name="phone"

                                        rules={[
                                            {
                                                required: true,
                                                message: 'Mobile Number is required.',
                                            },
                                        ]}
                                    >
                                        <Input className='ml-[10px]' placeholder='Mobile Number ..' max={10} />
                                    </Form.Item> */}
                  {/* {
                                        formData.user_type != "User" ?
                                            <Form.Item
                                                label="Partnership  "
                                                name="partnership"

                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Partnership is required.',
                                                    },
                                                ]}
                                            >
                                                <Input type='number' max={uplineUserData?.partnership ? uplineUserData?.partnership : userInfo?.partnership} min={0} className='ml-[10px]' placeholder='Partnership' />
                                            </Form.Item>
                                            :
                                            <></>
                                    } */}

                  {/* <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'User Password is required.',
                                        },
                                    ]}
                                >
                                    <Input.Password className='ml-[10px]' placeholder='Password...' min={8} />
                                </Form.Item> */}
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "User Password is required.",
                      },
                      {
                        validator: (_, value) => {
                          if (!value) {
                            return Promise.reject(
                              new Error("User Password is required.")
                            );
                          }
                          if (value.length < 8) {
                            return Promise.reject(
                              new Error("Password should be min 8 characters.")
                            );
                          }
                          // if (!/(?=.*[0-9])(?=.*[a-zA-Z])/.test(value)) {
                          //     return Promise.reject(new Error('Password should be a combination of letters and numbers.'));
                          // }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input.Password
                      className="ml-[10px]"
                      placeholder="Password..."
                    />
                  </Form.Item>

                  {/* <Form.Item
                                        label="Confirm Password "
                                        name="confirm_password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'User Password is required.',
                                            },
                                        ]}
                                    >
                                        <Input.Password className='ml-[10px]' placeholder='Confirm Password...' />
                                    </Form.Item> */}
                  {/* <Form.Item
                                        label="Rolling Commission "
                                        name="rolling_commission"
                                        rules={[
                                            {
                                                message: 'User Password is required.',
                                            },
                                        ]}
                                    >
                                        <div className="form-check form-check-inline float-left inline-flex items-center pl-[2px] mr-[.75rem] relative !ml-[.5rem] min-h-[1.5rem] mb-[.125rem]" >
                                            <label htmlFor="isCommission" className="switch switch-label switch-primary switch-lg w-[56px] h-[30px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                <input id='isCommission' name="isCommission" type="checkbox" className="switch-input hidden" checked={isCommission} onChange={() => setIsCommission(!isCommission)} />
                                                <span data-checked="✓" data-unchecked="✕" className="switch-slider ">
                                                </span>
                                            </label>
                                        </div>
                                    </Form.Item> */}
                  {/* {isCommission && (
                                        <>
                                            <Form.Item
                                                label="Fancy"
                                                name="rolling_commission_fancy"

                                                rules={[
                                                    {
                                                        message: 'Please input your name!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            const maxValue = uplineUserData?.rolling_commission_fancy ?? userInfo?.rolling_commission_fancy;
                                                            // Skip validation if user_type is "Super Admin"
                                                            if (uplineUserData?.user_type === 'Super Admin') {
                                                                return Promise.resolve();
                                                            }
                                                            // Apply validation for other user types
                                                            if (value === undefined || value <= maxValue) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error(`Commission cannot exceed ${maxValue}.`));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input className='ml-[10px]' placeholder='0'  type='number'
                                                //   max={uplineUserData?.rolling_commission_fancy ?? userInfo?.rolling_commission_fancy}
                                                  min={0} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Matka"
                                                name="rolling_commission_matka"

                                                rules={[
                                                    {
                                                        message: 'Please input your name!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            const maxValue = uplineUserData?.rolling_commission_matka ?? userInfo?.rolling_commission_matka;
                                                            // Skip validation if user_type is "Super Admin"
                                                            if (uplineUserData?.user_type === 'Super Admin') {
                                                                return Promise.resolve();
                                                            }
                                                            // Apply validation for other user types
                                                            if (value === undefined || value <= maxValue) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error(`Commission cannot exceed ${maxValue}.`));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input className='ml-[10px]' placeholder='0' type='number'
                                                //  max={uplineUserData?.rolling_commission_matka ?? userInfo?.rolling_commission_matka}
                                                 min={0}  />
                                            </Form.Item>
                                            <Form.Item
                                                label="Casino"
                                                name="rolling_commission_casino"

                                                rules={[
                                                    {
                                                        message: 'Please input your name!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            const maxValue = uplineUserData?.rolling_commission_casino ?? userInfo?.rolling_commission_casino;
                                                            // Skip validation if user_type is "Super Admin"
                                                            if (uplineUserData?.user_type === 'Super Admin') {
                                                                return Promise.resolve();
                                                            }
                                                            // Apply validation for other user types
                                                            if (value === undefined || value <= maxValue) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error(`Commission cannot exceed ${maxValue}.`));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input className='ml-[10px]' placeholder='0' type='number'
                                                // max={uplineUserData?.rolling_commission_casino ?? userInfo?.rolling_commission_casino}
                                                min={0}  />
                                            </Form.Item>
                                            <Form.Item
                                                label="Binary"
                                                name="rolling_commission_binary"

                                                rules={[
                                                    {
                                                        message: 'Please input your name!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            const maxValue = uplineUserData?.rolling_commission_binary ?? userInfo?.rolling_commission_binary;
                                                            // Skip validation if user_type is "Super Admin"
                                                            if (uplineUserData?.user_type === 'Super Admin') {
                                                                return Promise.resolve();
                                                            }
                                                            // Apply validation for other user types
                                                            if (value === undefined || value <= maxValue) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error(`Commission cannot exceed ${maxValue}.`));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input className='ml-[10px]' placeholder='0' type='number' 
                                                //  max={uplineUserData?.rolling_commission_binary ?? userInfo?.rolling_commission_binary}
                                                 min={0} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Sportbook"
                                                name="rolling_commission_sportbook"

                                                rules={[
                                                    {
                                                        message: 'Please input your name!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            const maxValue = uplineUserData?.rolling_commission_sportbook ?? userInfo?.rolling_commission_sportbook;
                                                            // Skip validation if user_type is "Super Admin"
                                                            if (uplineUserData?.user_type === 'Super Admin') {
                                                                return Promise.resolve();
                                                            }
                                                            // Apply validation for other user types
                                                            if (value === undefined || value <= maxValue) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error(`Commission cannot exceed ${maxValue}.`));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input className='ml-[10px]' placeholder='0' type='number'
                                                //  max={uplineUserData?.rolling_commission_sportbook ?? userInfo?.rolling_commission_sportbook}
                                                 min={0} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Bookmaker"
                                                name="rolling_commission_bookmaker"

                                                rules={[
                                                    {
                                                        message: 'Please input your name!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            const maxValue = uplineUserData?.rolling_commission_bookmaker ?? userInfo?.rolling_commission_bookmaker;
                                                            // Skip validation if user_type is "Super Admin"
                                                            if (uplineUserData?.user_type === 'Super Admin') {
                                                                return Promise.resolve();
                                                            }
                                                            // Apply validation for other user types
                                                            if (value === undefined || value <= maxValue) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error(`Commission cannot exceed ${maxValue}.`));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input className='ml-[10px]' placeholder='0' type='number'
                                                //  max={uplineUserData?.rolling_commission_bookmaker ?? userInfo?.rolling_commission_bookmaker}
                                                 min={0} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Virtual Sports"
                                                name="rolling_commission_virtualsport"

                                                rules={[
                                                    {
                                                        message: 'Please input your name!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            const maxValue = uplineUserData?.rolling_commission_virtualsport ?? userInfo?.rolling_commission_virtualsport;
                                                            // Skip validation if user_type is "Super Admin"
                                                            if (uplineUserData?.user_type === 'Super Admin') {
                                                                return Promise.resolve();
                                                            }
                                                            // Apply validation for other user types
                                                            if (value === undefined || value <= maxValue) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error(`Commission cannot exceed ${maxValue}.`));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input className='ml-[10px]' placeholder='0' type='number'
                                                //  max={uplineUserData?.rolling_commission_virtualsport ?? userInfo?.rolling_commission_virtualsport}
                                                 min={0}  />
                                            </Form.Item>
                                        </>
                                    )} */}

                  {/* {
                                        formData.user_type != "User" &&
                                        <Form.Item
                                            label="Agent Rolling Commission "
                                            name="isAgentCommission"
                                            className='pl-[10px]'
                                        >
                                            <div className="form-check form-check-inline float-left inline-flex items-center pl-[3px] mr-[.75rem] relative min-h-[1.5rem] mb-[.125rem]" >
                                                <label htmlFor="isAgentCommission" className="switch switch-label switch-primary switch-lg w-[56px] h-[30px] inline-block mb-0 text-[0.938rem] leading-[28px]">
                                                    <input id='isAgentCommission' name="isAgentCommission" type="checkbox" className="switch-input hidden" checked={isAgentCommission} onChange={() => setIsAgentCommission(!isAgentCommission)} />
                                                    <span data-checked="✓" data-unchecked="✕" className="switch-slider ">
                                                    </span>
                                                </label>
                                            </div>
                                        </Form.Item>
                                    } */}

                  {/* {
                                        formData.user_type != "User" &&
                                        isAgentCommission && (
                                            <>
                                                <Form.Item
                                                    label="Fancy"
                                                    name="agentfancycommission"

                                                    rules={[
                                                        {
                                                            message: 'Please input your name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input className='ml-[10px]' placeholder='0' />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Matka"
                                                    name="agentmatkacommission"

                                                    rules={[
                                                        {
                                                            message: 'Please input your name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input className='ml-[10px]' placeholder='0' />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Casino"
                                                    name="agentcasinocommission"

                                                    rules={[
                                                        {
                                                            message: 'Please input your name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input className='ml-[10px]' placeholder='0' />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Binary"
                                                    name="agentbinarycommission"

                                                    rules={[
                                                        {
                                                            message: 'Please input your name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input className='ml-[10px]' placeholder='0' />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Sportbook"
                                                    name="agentsportbookcommission"

                                                    rules={[
                                                        {
                                                            message: 'Please input your name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input className='ml-[10px]' placeholder='0' />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Bookmaker"
                                                    name="agentbookmakercommission"

                                                    rules={[
                                                        {
                                                            message: 'Please input your name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input className='ml-[10px]' placeholder='0' />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Virtual Sports"
                                                    name="agentvirtualsportscommission"

                                                    rules={[
                                                        {
                                                            message: 'Please input your name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input className='ml-[10px]' placeholder='0' />
                                                </Form.Item>
                                            </>
                                        )
                                    } */}
                  {/* <Form.Item
                                        label="Master Password  "
                                        name="master_password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Master Password is required.',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    return new Promise((resolve, reject) => {
                                                        if (value === userInfo.password) {
                                                            setButton(false);
                                                            resolve();
                                                        } else {
                                                            setButton(true);
                                                            reject('Incorrect Master Password.');
                                                        }
                                                    });
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password className='ml-[10px]' placeholder='Master Password...' />
                                    </Form.Item> */}
                  <Form.Item
                    wrapperCol={{
                      span: 16,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      //  disabled={button}
                      className="mt-[1rem] ml-[10px]"
                      style={{
                        background:
                          "linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)",
                        width: "140px",
                      }}
                    >
                      Create
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Modal>
          <div className=" float-right text-[15px] leading-[28px]">
            <strong className="text-[0.938rem] leading-[28px] float-left">
              {" "}
              Chips Summary{" "}
            </strong>
            <div className="form-check form-check-inline float-left inline-flex items-center pl-0 mr-[.75rem] relative !ml-[.5rem] min-h-[1.5rem] mb-[.125rem]">
              <label
                htmlFor="chipSummaryOnOFF"
                className="switch switch-label switch-primary switch-lg w-[56px] h-[30px] inline-block mb-0 text-[0.938rem] leading-[28px]"
              >
                <input
                  id="chipSummaryOnOFF"
                  name="chipSummaryOnOFF"
                  type="checkbox"
                  className="switch-input hidden"
                />
                <span
                  data-checked="✓"
                  data-unchecked="✕"
                  className="switch-slider "
                ></span>
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-12 bg-[#fff] text-[#3b5160] border-b-[1px] border-b-[#7e97a7] my-[15px] w-full pt-[7px] px-[0] lg:pb-[5px] ">
          <dl className="total_dl w-[100%] lg:w-[14.96815%] px-[20px] py-[7px] lg:px-[10px] lg:py-[0px] float-left  border-b-[1px] border-b-[#d2d2d2] lg:border-b-[0px] lg:border-r-[1px] lg:border-r-[#d2d2d2]  m-0">
            <dt className="text-[.75rem] font-bold mt-[0] mx-[0] mb-[5px] text-[#9b9b9b]">
              Total Balance
            </dt>
            <dd
              className="text-[0.938rem] text-[#243a48] leading-[20px] font-bold mb-0"
              id="totalBalance"
            >
              IRP 0
            </dd>
          </dl>

          <dl className="total_dl w-[100%] lg:w-[14.96815%] px-[20px] py-[7px] lg:px-[10px] lg:py-[0px] float-left  border-b-[1px] border-b-[#d2d2d2] lg:border-b-[0px] lg:border-r-[1px] lg:border-r-[#d2d2d2]  m-0">
            <dt className="text-[.75rem] font-bold mt-[0] mx-[0] mb-[5px] text-[#9b9b9b]">
              Total Exposure
            </dt>
            <dd className="text-[0.938rem] text-[#243a48] leading-[20px] font-bold mb-0">
              {`IRP `}
              <span className="text-[#d50000]" id="totalExposure">
                (0)
              </span>
            </dd>
          </dl>

          <dl className="total_dl w-[100%] lg:w-[14.96815%] px-[20px] py-[7px] lg:px-[10px] lg:py-[0px] float-left  border-b-[1px] border-b-[#d2d2d2] lg:border-b-[0px] lg:border-r-[1px] lg:border-r-[#d2d2d2]  m-0">
            <dt className="text-[.75rem] font-bold mt-[0] mx-[0] mb-[5px] text-[#9b9b9b]">
              Available Balance
            </dt>
            <dd
              className="text-[0.938rem] text-[#243a48] leading-[20px] font-bold mb-0"
              id="totalAvailBal"
            >
              {`IRP `}
              <span>0</span>
            </dd>
          </dl>

          <dl className="total_dl w-[100%] lg:w-[14.96815%] px-[20px] py-[7px] lg:px-[10px] lg:py-[0px] float-left  border-b-[1px] border-b-[#d2d2d2] lg:border-b-[0px] lg:border-r-[1px] lg:border-r-[#d2d2d2]  m-0">
            <dt className="text-[.75rem] font-bold mt-[0] mx-[0] mb-[5px] text-[#9b9b9b]">
              Balance
            </dt>
            <dd
              className="text-[0.938rem] text-[#243a48] leading-[20px] font-bold mb-0"
              id="mastersBalance"
            >
              {balance ? "IRP " + balance : "Loading..."}
            </dd>
          </dl>

          <dl className="total_dl w-[100%] lg:w-[14.96815%] px-[20px] py-[7px] lg:px-[10px] lg:py-[0px] float-left  border-b-[1px] border-b-[#d2d2d2] lg:border-b-[0px] lg:border-r-[1px] lg:border-r-[#d2d2d2]  m-0">
            <dt className="text-[.75rem] font-bold mt-[0] mx-[0] mb-[5px] text-[#9b9b9b]">
              Total Avail. bal.
            </dt>
            <dd
              className="text-[0.938rem] text-[#243a48] leading-[20px] font-bold mb-0"
              id="mastersAvailBal"
            >
              IRP 0
            </dd>
          </dl>

          {/* <dl className="total_dl w-[100%] lg:w-[14.96815%] px-[20px] py-[7px] lg:px-[10px] lg:py-[0px] float-left  border-b-[1px] border-b-[#d2d2d2] lg:border-b-[0px] lg:border-r-[1px] lg:border-r-[#d2d2d2]  m-0">
                        <dt className='text-[.75rem] font-bold mt-[0] mx-[0] mb-[5px] text-[#9b9b9b]'>Upline P/L</dt>
                        <dd className='text-[0.938rem] text-[#d50000] leading-[20px] font-bold mb-0' id="mastersAvailBalPl">IRP 0</dd>
                    </dl> */}

          <dl className="total_dl w-[100%] lg:w-[14.96815%] px-[20px] py-[7px] lg:px-[10px] lg:py-[0px] float-left  border-b-[1px] border-b-[#d2d2d2] lg:border-b-[0px] lg:border-r-[1px] lg:border-r-[#d2d2d2]  m-0">
            <dt className="text-[.75rem] font-bold mt-[0] mx-[0] mb-[5px] text-[#9b9b9b]">
              Upline P/L
            </dt>
            <dd
              className="text-[0.938rem] text-[#243a48] leading-[20px] font-bold mb-0"
              id="mastersAvailBalPl"
            >
              <span
                className={`${
                  uplinePL > 0 ? "text-[#000000]" : "text-[#d50000]"
                }`}
              >
                {" "}
                {uplinePL ? "IRP " + uplinePL.toFixed(0) : "0"}
              </span>
            </dd>
          </dl>
        </div>

        <div className="col-span-12 ">
          <div className="bg-[#fff] border rounded-[.375rem]">
            <div className="p-[1.25rem] flex-auto ">
              <Table
                title={() => (
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-start mb-[.9rem] lg:mb-[0px]">
                      <div className="text-[#333]">
                        <label>
                          Show
                          <Select
                            defaultValue={10}
                            onChange={handlePageSizeChange}
                            className="pagesize-select mx-[5px]"
                          >
                            <Select.Option value={10}>10</Select.Option>
                            <Select.Option value={25}>25</Select.Option>
                            <Select.Option value={50}>50</Select.Option>
                            <Select.Option value={100}>100</Select.Option>
                          </Select>
                          entries
                        </label>
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end">
                      <div className="text-[#333]">
                        <label>
                          Search:
                          <Input
                            onChange={(e) =>
                              handleSearch(e.target.value, [
                                "name",
                                "user_name",
                              ])
                            }
                            style={{ width: 155, marginLeft: "5px" }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                locale={locale}
                columns={columns}
                className="profit-loss"
                bordered
                loading={loading}
                dataSource={paginatedData}
                pagination={false} // Disable default pagination
              />
              <div className="grid grid-cols-12 items-center pt-[1.5rem] lg:pt-[.75rem] text-[#333]">
                <div className="col-span-12 lg:col-span-6 text-[#333] text-[0.813rem]">
                  Showing {startIndex + 1} to {endIndex} of{" "}
                  {filteredData?.length} entries
                </div>
                <div className="col-span-12 lg:col-span-6 flex items-center justify-end  pt-[1rem] lg:pt-[0px] lg:mt-[0rem]">
                  <button
                    className="text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px] cursor-pointer"
                    type="button"
                    onClick={handleFirst}
                    style={{ marginRight: 8 }}
                  >
                    First
                  </button>
                  <Pagination
                    current={current}
                    pageSize={pageSize}
                    total={filteredData?.length}
                    onChange={(page) => setCurrent(page)}
                    itemRender={(page, type, originalElement) => {
                      if (type === "prev") {
                        return (
                          <button type="button" className="!cursor-pointer">
                            Previous
                          </button>
                        );
                      }
                      if (type === "page") {
                        return null; // Hide page numbers
                      }
                      if (type === "next") {
                        return (
                          <button type="button" className="!cursor-pointer">
                            Next
                          </button>
                        );
                      }
                      return originalElement;
                    }}
                    showSizeChanger={false} // Disable default page size changer
                  />
                  <button
                    className="text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px]  cursor-pointer"
                    type="button"
                    onClick={handleLast}
                    style={{ marginLeft: 8 }}
                  >
                    Last
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MasterList;
