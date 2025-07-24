import "../../App.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { useAuth } from "../AuthContext";
import axios from "axios";
import Appconfig from "../../config/config";
import { useSelector, useDispatch } from "react-redux";
import UserAutoLogout from "../../pages/userAutoLogout";
// import { getUserBal } from '../../redux/slice/user/userSlice'

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  UserAutoLogout();
  // const userbal = useSelector((state) => state.userbal); // Use selector to access state
  // const balance = userbal?.userBalance?.balance;
  // const loading = userbal?.loading;

  const [loadBalance, setLoadBalance] = useState(false);
  const [balance, setBalance] = useState(0);
  const [withdrawCount, setWithdrawCount] = useState(0);
  const [depositCount, setDepositCount] = useState(0);

  const userInfo = JSON.parse(localStorage.getItem("userdata"));
  const { logout } = useAuth();

  const initialNavItems = [
    {
      title: "Dashboard ",
      url: "/",
      routerId: ["/"],
    },
    {
      title: "Downline List ",
      url: "",
      routerId: ["/list/user", "/list/master"],
      submenu: [
        {
          title: "User Downline List",
          url: "/list/user",
        },
        {
          title: "Master Downline List",
          url: `/list/master`,
        },
      ],
    },
    {
      title: "My Account ",
      url: "/my-account/master",
      routerId: ["/my-account/master"],
    },
    {
      title: "My Report",
      url: "",
      routerId: ["/reports/profit-loss", "/reports/downline-pl"],
      submenu: [
        {
          title: "Event Profit/Loss ",
          url: "/reports/profit-loss",
        },
        {
          title: "Downline Profit/Loss",
          url: "/reports/downline-pl",
        },
      ],
    },
    {
      title: "BetList ",
      url: "/bet-list",
      routerId: ["/bet-list"],
    },
    {
      title: "Market Analysis ",
      url: "/market-analysis",
      routerId: ["/market-analysis"],
    },
    {
      title: "Banking",
      url: "",
      routerId: ["/user-banking", "/master-banking"],
      submenu: [
        {
          title: "User Banking",
          url: "/user-banking",
        },
        {
          title: "Master Banking",
          url: "/master-banking",
        },
      ],
    },
    {
      title: "Payments",
      url: "",
      routerId: ["/payment-methods"],
      submenu: [
        {
          title: "Payment Setup",
          url: "/payment-methods",
        },
        {
          title: "Deposit Request",
          url: "/deposit-request",
        },
        {
          title: "Withdraw Request",
          url: "/withdraw-request",
        },
      ],
    },
    {
      title: "Commission ",
      url: "/commission",
      routerId: ["/commission"],
    },
    {
      title: "Password History",
      url: "/password-history",
      routerId: ["/password-history"],
    },
    {
      title: "Restore User ",
      url: "/restore-user",
      routerId: ["/restore-user"],
    },
  ];
  let navItems = [...initialNavItems];
  const initialNavItemsForMobile = [
    {
      title: "Dashboard ",
      url: "/",
      routerId: ["/"],
    },
    {
      title: "Downline List ",
      url: "",
      routerId: ["/list/user", `/list/master`],
      submenu: [
        {
          key: "1",
          label: <Link to={"/list/user"}>User Downline List</Link>,
        },
        {
          key: "2",
          label: <Link to={`/list/master`}>Master Downline List</Link>,
        },
      ],
    },
    {
      title: "My Account ",
      url: "/my-account/master",
      routerId: ["/my-account/master"],
    },
    {
      title: "My Report",
      url: "",
      routerId: ["/reports/profit-loss", "/reports/downline-pl"],
      submenu: [
        {
          key: "1",
          label: <Link to={"/reports/profit-loss"}>Event Profit/Loss</Link>,
        },
        {
          key: "2",
          label: <Link to={"/reports/downline-pl"}>Downline Profit/Loss</Link>,
        },
      ],
    },
    {
      title: "BetList ",
      url: "/bet-list",
      routerId: ["/bet-list"],
    },
    {
      title: "Market Analysis ",
      url: "/market-analysis",
      routerId: ["/market-analysis"],
    },
    {
      title: "Banking",
      url: "",
      routerId: ["/user-banking", "/master-banking"],
      submenu: [
        {
          key: "1",
          label: <Link to={"/user-banking"}>User Banking</Link>,
        },
        {
          key: "2",
          label: <Link to={"/master-banking"}>Master Banking</Link>,
        },
      ],
    },
    {
      title: "Payments",
      url: "",
      routerId: ["/payment-methods"],
      submenu: [
        {
          key: "1",
          label: <Link to={"/payment-methods"}>Payment Setup</Link>,
        },
        {
          key: "2",
          label: (
            <Link to={"/deposit-request"}>
              Deposit Request
              {depositCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {depositCount}
                </span>
              )}
            </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link to={"/withdraw-request"}>
              Withdraw Request
              {withdrawCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {withdrawCount}
                </span>
              )}
            </Link>
          ),
        },
      ],
    },

    {
      title: "Commission ",
      url: "/commission",
      routerId: ["/commission"],
    },
    {
      title: "Password History",
      url: "/password-history",
      routerId: ["/password-history"],
    },
    {
      title: "Restore User ",
      url: "/restore-user",
      routerId: ["/restore-user"],
    },
  ];

  let navItemsForMobile = [...initialNavItemsForMobile];

  if (userInfo?.user_type === "Super Admin") {
    navItems.push({
      title: "My Setting",
      url: "",
      routerId: [
        "/adminfund",
        "/news",
        `/user-general-setting/${userInfo?._id}`,
        `add-domain`,
      ],
      submenu: [
        {
          title: "Admin Fund ",
          url: "/adminfund",
        },
        {
          title: "News ",
          url: "/news",
        },
        {
          title: "User General Setting ",
          url: `/user-general-setting/${userInfo?._id}`,
        },
        {
          title: "Block Market ",
          url: "/block-market",
        },
        {
          title: "Event Wise Setting ",
          url: `/event-user-general-setting`,
        },
        {
          title: "Add Domain ",
          url: `/add-domain`,
        },
        {
          title: "Betting ",
          url: `/betting`,
        },
        {
          title: "Add Banner ",
          url: `/banner`,
        },
        {
          title: "Add Number ",
          url: `/supportNumber`,
        },
        {
          title: "Casino Uses ",
          url: `/casino-uses`,
        },
      ],
    });
    navItemsForMobile.push({
      title: "My Setting",
      url: "",
      routerId: [
        "/adminfund",
        "/news",
        `/user-general-setting/${userInfo?._id}`,
        `/event-user-general-setting`,
        `/add-domain`,
      ],
      submenu: [
        {
          key: "1",
          label: <Link to={"/adminfund"}>Admin Fund</Link>,
        },
        {
          key: "2",
          label: <Link to={"/news"}>News</Link>,
        },
        {
          key: "3",
          label: (
            <Link to={`/user-general-setting/${userInfo?._id}`}>
              User General Setting
            </Link>
          ),
        },
        {
          key: "4",
          label: <Link to={"/block-market"}>Block Market</Link>,
        },
        {
          key: "5",
          label: (
            <Link to={"/event-user-general-setting"}>
              Event Wise User General Setting
            </Link>
          ),
        },
        {
          key: "6",
          label: <Link to={"/add-domain"}>Add Domain</Link>,
        },
        {
          key: "7",
          label: <Link to={"/betting"}>Betting</Link>,
        },
        {
          key: "8",
          label: <Link to={"/banner"}>Add Banner</Link>,
        },
        {
          key: "9",
          label: <Link to={"/supportNumber"}>Add Number</Link>,
        },
        {
          key: "10",
          label: <Link to={"/casino-uses"}>Casino Uses</Link>,
        },
      ],
    });
  }
  const scrollableGamesListRef = useRef(null);
  const scrollNav = (index) => {
    const itemElement = scrollableGamesListRef.current.querySelector(
      `#item-${index}`
    );
    if (itemElement) {
      itemElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
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

  function getDWRequest() {
    var data = JSON.stringify({
      user_id: userInfo?._id,
      site_code: Appconfig.sitecodes,
    });

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}deposit/getDWCount`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.result) {
          setDepositCount(response.data.resultData.depositCount);
          setWithdrawCount(response.data.resultData.withdrawCount);
          // console.log('response.data',response.data.resultData);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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

  useEffect(() => {
    getBalance();
    getDWRequest();
  }, [userInfo]);

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block  z-[999] bg-[linear-gradient(-180deg,#535353_0,_#000000_100%)]">
        {/* change w-[92vw] to w-[100vw] */}
        <div className="flex flex-row items-center justify-between  h-[75px] w-[100vw] mx-[auto] my-[0]">
          <div className="flex items-center text-[white]">
            <Link to={"/"}>
              {/* change h-[68px] to h-[55px] */}
              <img
                className="block cursor-pointer w-[160px] h-auto relative top-[.5px] text-[white]"
                src="/logo.png"
              />
            </Link>
          </div>

          <div className="text-white relative right-[15px]">
            <ul className="m-0 text-[0.813rem]">
              <li className="relative leading-[25px] ml-[15px] block float-left">
                <span className="text-[white] h-[15px] leading-[15px] text-[10px] px-[5px] py-[0] rounded-[4px] [box-shadow:inset_0_1px_0_0_rgba(255,_255,_255,_.4)] bg-[linear-gradient(180deg,_#2e2e2e,_#282828_42%,_#2e2e2e)] mr-[5px] inline-block">
                  {userInfo?.user_type === "Super Admin"
                    ? "SUP"
                    : userInfo?.user_type}
                </span>
                <strong className="text-[0.813rem]">
                  {userInfo?.user_name}
                </strong>
              </li>
              <li className="relative leading-[25px] ml-[15px] block float-left">
                {loadBalance && (
                  <div className="loadingBalance w-full ">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                {!loadBalance && <strong>{`IRP ${balance}`}</strong>}
              </li>
              <li className="ml-[10px] relative leading-[25px] block float-left">
                <span className="ml-[4px] relative leading-[20px] flex mr-[7px] rounded-[2px] float-left h-[25px] bg-[linear-gradient(180deg,_#2e2e2e,_#282828_42%,_#2e2e2e)] [box-shadow:inset_0_1px_0_0_rgba(255,_255,_255,_.4)] text-[#ffffff] w-[25px] px-[4px] py-[0] items-center justify-center">
                  <button
                    className="text-[#ffffff] leading-[20px]"
                    onClick={() => {
                      setLoadBalance(true);
                      getBalance();
                      setTimeout(() => {
                        setLoadBalance(false);
                      }, 1000);
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C5 0 2.4 1.6 1.1 4.1L0 3V7H4L2.5 5.5C3.5 3.5 5.6 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C6.2 14 4.6 13.2 3.5 11.9L2 13.2C3.4 14.9 5.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 bg-[linear-gradient(-180deg,#315195_0,_#14213D_100%)]">
          <ul className="flex ml-[55px] mr-[0] my-[0] font-bold">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`flex px-[10px] py-[0] leading-[30px] ${
                  item.routerId.includes(location.pathname) &&
                  `[box-shadow:inset_0_1px_3px_#06170780] bg-white`
                }`}
                style={{ borderRight: "1px solid #797777" }}
              >
                <div className="dropdown">
                  <Link
                    to={item.url ? item.url : "javascript:void(0);"}
                    className={`dropbtn font-bold text-[0.813rem] hover:underline w-max ${
                      item.submenu && "dropdown-toggle"
                    }  ${
                      item.routerId.includes(location.pathname)
                        ? `text-black`
                        : `text-white`
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <ul className="dropdown-content">
                      {item.submenu && (
                        <ul className="dropdown-content">
                          {item.submenu.map((item, index) => (
                            <li
                              key={index}
                              className="float-none border-b-[1px] border-b-[#383838] border-r-[1px] border-r-[#797777] block"
                            >
                              <Link
                                to={item.url ? item.url : "javascript:void(0);"}
                                className="text-[white] font-bold text-[0.813rem] px-[10px] py-[0] block no-underline cursor-pointer hover:underline"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  )}
                </div>
              </li>
            ))}
            <li
              className={`flex px-[10px] py-[0] leading-[30px] absolute right-[50px]`}
              style={{ borderRight: "1px solid #797777" }}
            >
              <div className="dropdown">
                <Link
                  className={`flex items-center gap-[3px] font-bold text-[0.813rem] w-max text-black`}
                  onClick={logout}
                >
                  Logout
                  <svg
                    width="10"
                    height="11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.71 7.706l1.432-1.604H1.778V4.898h5.39L5.71 3.294l.781-.86L9.278 5.5 6.49 8.565l-.78-.86zM1.12 0C.825 0 .564.124.339.372a1.24 1.24 0 0 0-.339.86v8.536c0 .325.113.611.339.86.225.248.486.372.78.372H8.88c.295 0 .556-.124.781-.372a1.24 1.24 0 0 0 .339-.86V7.333H8.88v2.435H1.12V1.232h7.76v2.435H10V1.232a1.24 1.24 0 0 0-.339-.86C9.436.124 9.175 0 8.881 0H1.12z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <div className=" grid grid-cols-12  w-full lg:hidden  z-[999] bg-[linear-gradient(-180deg,#535353_0,_#000000_100%)]">
        <div className="col-span-12">
          <div className="flex flex-row items-center justify-between  h-[75px]  my-[0]">
            <div className="flex items-center text-[white]">
              <Link to={"/"}>
                <img
                  className="block cursor-pointer w-[100px] h-[50px] relative top-[.5px] text-[white]"
                  src="/logo.png"
                />
              </Link>
            </div>

            <div className="text-white mr-[.8rem]">
              <div className="text-end">
                <span className="text-[white] h-[15px] leading-[15px] text-[10px] px-[5px] py-[0] rounded-[4px] [box-shadow:inset_0_1px_0_0_rgba(255,_255,_255,_.4)] bg-[linear-gradient(180deg,_#2e2e2e,_#282828_42%,_#2e2e2e)] mr-[3px] inline-block">
                  {userInfo?.user_type === "Super Admin"
                    ? "SUP"
                    : userInfo?.user_type}
                </span>
                <strong className="text-[0.813rem]">
                  {userInfo?.user_name}
                </strong>
              </div>
              <div className="flex items-center justify-end mt-[.2rem]">
                {loadBalance && (
                  <div className="loadingBalance w-full ">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                {!loadBalance && (
                  <strong className="text-[0.813rem] pb-[2px]">{`IRP ${balance}`}</strong>
                )}
                <div className="ml-[10px] text-[white] text-[0.813rem] pb-[2px]">
                  <button
                    className="text-[#ffffff] leading-[20px] relative mr-[7px]  flex rounded-[2px] float-left h-[25px] w-[25px] px-[4px] py-[0] items-center justify-center bg-[linear-gradient(180deg,_#2e2e2e,_#282828_42%,_#2e2e2e)] [box-shadow:inset_0_1px_0_0_rgba(255,_255,_255,_.4)]"
                    onClick={() => {
                      setLoadBalance(true);
                      getBalance();
                      setTimeout(() => {
                        setLoadBalance(false);
                      }, 1000);
                    }}
                  >
                    <i className="fas fa-undo-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 bg-[linear-gradient(-180deg,#315195_0,_#14213D_100%)]">
            <div className="col-span-12">
              <ul
                className="flex  mr-[0] my-[0] font-bold overflow-x-auto  whitespace-nowrap relative m-0 p-0 [scrollbar-width:none]"
                ref={scrollableGamesListRef}
              >
                {navItemsForMobile.map((item, index) => {
                  const menu = <Menu items={item.submenu || []} />;

                  return (
                    <li
                      key={index}
                      id={`item-${index}`}
                      className={`flex px-[10px] py-[0] leading-[30px] ${
                        item.routerId.includes(location.pathname) &&
                        `[box-shadow:inset_0_1px_3px_#06170780] bg-white`
                      }`}
                      style={{ borderRight: "1px solid #797777" }}
                      onClick={() => scrollNav(index)}
                    >
                      <Dropdown overlay={menu} disabled={!item.submenu}>
                        <Link
                          to={item.url ? item.url : "javascript:void(0);"}
                          className={`dropbtn font-bold text-[0.813rem] hover:underline w-max ${
                            item.submenu ? "dropdown-toggle" : ""
                          } ${
                            item.routerId.includes(location.pathname)
                              ? "text-black"
                              : "text-white"
                          } `}
                        >
                          {item.title}
                        </Link>
                      </Dropdown>
                    </li>
                  );
                })}
                <li
                  className={`flex px-[10px] py-[0] leading-[30px] `}
                  style={{ borderRight: "1px solid #797777" }}
                >
                  <div className="dropdown">
                    <Link
                      to={"/login"}
                      className={`flex items-center gap-[3px] font-bold text-[0.813rem] w-max hover:underline text-black`}
                    >
                      Logout
                      <svg
                        width="10"
                        height="11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.71 7.706l1.432-1.604H1.778V4.898h5.39L5.71 3.294l.781-.86L9.278 5.5 6.49 8.565l-.78-.86zM1.12 0C.825 0 .564.124.339.372a1.24 1.24 0 0 0-.339.86v8.536c0 .325.113.611.339.86.225.248.486.372.78.372H8.88c.295 0 .556-.124.781-.372a1.24 1.24 0 0 0 .339-.86V7.333H8.88v2.435H1.12V1.232h7.76v2.435H10V1.232a1.24 1.24 0 0 0-.339-.86C9.436.124 9.175 0 8.881 0H1.12z"
                          fill="currentColor"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
