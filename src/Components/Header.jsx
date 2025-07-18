import React, { useEffect, useRef, useState } from "react";
import Login from "../Pages/Auth/Login";
import Helper from "../helper";
import Appconfig from "../config/config";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Register from "../Pages/Auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { emptyUserInfo } from '../redux/slice/userInfo/userInfoSlice';
import { emptyBalance } from '../redux/slice/user/userSlice';
import { emptyLoingUserData } from '../redux/slice/userData/userDataSlice';
import { getAllBets, emptyOpenBets } from '../redux/slice/openBet/openBetSlice';

function Header() {
  const sidebarRef = useRef();
  const navigate = useNavigate();
  const userInfo = Helper();
  const dispatch = useDispatch();
  const { logout, showLoginModel, setShowLoginModel, setBetPlaced, betPlaced, setCurrentExposure, setCurrentBalance } = useAuth();
  const betData = useSelector((state) => state.data);

  console.log("Header userInfo : ", userInfo);
  console.log("betData : ", betData)

  const [showSidebar, setShowSidebar] = useState(false);

  const [loginClicked, setLoginClicked] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);
  const [balance, setBalance] = useState(0);
  const [exposure, setExposure] = useState(0);

  let balanceWithExp = balance - Math.abs(exposure);
  setCurrentBalance(balanceWithExp);

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
          console.log('Balance response : ', response)
          setBalance(response.data.resultData?.balance);
          setExposure(response.data.resultData?.exposure);
          setCurrentExposure(response.data.resultData?.exposure)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleLogout = () => {
    setShowSidebar(false);
    logout();
  };


  const checkNewLogin = () => {
    var data = JSON.stringify({
      "login_token": userInfo.login_token,
      "user_id": userInfo._id
    });

    var config = {
      method: 'post',
      url: `${Appconfig.apiUrl}userToken/getToken`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        try {
          if (response.data.result) {
          }
          else {
            localStorage.removeItem('userdata');
            localStorage.removeItem('login_token');
            localStorage.removeItem('loginTime');
            dispatch(emptyUserInfo());
            dispatch(emptyBalance());
            dispatch(emptyOpenBets());
            dispatch(emptyLoingUserData());
            // setMyAccountListOpen(false)
            // window.location.href = "/login";
            window.location.reload();
          }
        } catch (e) {
          // postErrorToslack(e.message);
        }
      })
      .catch(function (error) {
        // postErrorToslack(error.message);
        console.log(error);
      });
  }

  // Check Multilogin
  useEffect(() => {
    const chkLog = window.setInterval(function () {
      if (userInfo) {
        checkNewLogin();
      }
    }, 5000);
    return () => {
      clearInterval(chkLog)
    }
  }, [])

  useEffect(() => {
    if (userInfo) {
      console.log('Balance triggered');
      getBalance();
    }
  }, [userInfo, betData]);

  useEffect(() => {
    if (betPlaced) {
      getBalance();
      setBetPlaced(false);
    }
  }, [betPlaced, betData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSidebar]);

  useEffect(() => {
    if (showLoginModel) {
      setLoginClicked(true);
    }
  }, [showLoginModel]);

  // useEffect(() => {
  //   if (!userInfo) {
  //     setLoginClicked(true);
  //   } else {
  //     setLoginClicked(false);
  //   }
  // }, [userInfo])

  return (
    <>
      {loginClicked && (
        <Login
          setIsOpen={setLoginClicked}
          setIsRegisterOpen={setRegisterClicked}
        />
      )}
      {registerClicked && (
        <Register
          setIsOpen={setLoginClicked}
          setIsRegisterOpen={setRegisterClicked}
        />
      )}

      <div className="flex justify-between items-center bg-black py-2 px-2">
        <div className="flex justify-center items-center">
          {/* Home icon for mobile */}

          <Link to={"/"} className="flex justify-center items-center">
            <span className="mr-2 flex lg:hidden">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 576 512"
                height={25}
                width={25}
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
              </svg>
            </span>
            <img src="/logo.png" alt="" className="w-28 lg:w-56 h-auto lg:h-[65px]" />
          </Link>
        </div>

        {/* Login Signup Button */}
        {!userInfo && (
          <div className="flex justify-center items-center">
            <button
              className=" text-[#fff] uppercase font-bold rounded-md bg-[#8000ff] p-1 w-20 mr-1"
              onClick={() => {
                setLoginClicked(true);
                setRegisterClicked(false);
              }}
            >
              Login
            </button>
            <button
              className=" text-[#8000ff] uppercase font-bold rounded-md bg-[#fff] p-1 w-20 mr-1"
              onClick={() => {
                setLoginClicked(false);
                setRegisterClicked(true);
              }}
            >
              Register
            </button>
          </div>
        )}
        <>
          <div className="hidden lg:block">
            <div className="flex justify-center items-center">
              {/* deposit withdraw section */}
              {userInfo && (
                <div className="flex justify-around items-center bg-black px-2 py-1 text-[12.5px]">

                  <Link to={`/deposit`} className="h-[38px] px-2 flex justify-center items-center uppercase text-white font-bold rounded border border-white bg-gradient-to-b from-[#007b15] to-[#138e00] mr-2">
                    <img
                      src="/Images/deposit-icon.webp"
                      alt="Deposit"
                      className="w-[25px] h-[25px] invert mx-1"
                    />
                    <h3 className="m-0">Deposit</h3>
                  </Link>

                  <Link to={`/withdraw`} className=" h-[38px] px-2 flex justify-center items-center uppercase text-white font-bold rounded border border-white bg-gradient-to-b from-[#7b0000] to-[#d10000]">
                    <img
                      src="/Images/withdrawal-icon.webp"
                      alt="Withdraw"
                      className="w-[25px] h-[25px] invert mx-1"
                    />
                    <h3 className="m-0">Withdrawal</h3>
                  </Link>

                </div>
              )}
              <div className="mr-4">
                <svg
                  stroke="currentColor"
                  fill="white"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={25}
                  width={25}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z" />
                </svg>
              </div>
              <div><span className="text-[#fff] font-bold mr-4">Rules</span></div>
              <div className="flex justify-start gap-3 text-white text-base leading-[1rem]">
                <div className="flex flex-col mr-1">
                  <div className="flex">
                    Balance:
                    <span className="ml-1 font-bold">{balance && Number(balanceWithExp).toFixed(2)}</span>
                  </div>
                  <div className="flex underline">
                    <span>Exposure:</span><span className="ml-1 font-bold"> {exposure}</span>
                  </div>
                </div>

                <div
                  className="flex justify-center items-center cursor-pointer leading-none tracking-tight"
                >
                  <div className="flex justify-center items-center" onClick={() => setShowSidebar(prev => !prev)}>
                    <span className="text-base">{userInfo?.user_name}</span>
                    <span className="pt-1 mx-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* Right Side menu bar */}
              <div
                className={`fixed top-[3.5rem] lg:top-[5.8rem] right-0 h-auto w-64 pb-6 bg-[#f1f5f8] text-black shadow-lg z-[9999] transform transition-transform duration-300 ${showSidebar ? "translate-x-0" : "translate-x-full"
                  }`}
                ref={sidebarRef}
              >
                <div className="flex justify-end p-1">
                  <button
                    onClick={() => setShowSidebar(false)}
                    className="text-xl font-bold"
                  >
                    &times;
                  </button>
                </div>
                {/* Deposit Withdraw Section */}
                <div className="flex justify-evenly bg-black gap-2 px-1 py-2 w-full mx-auto mb-2">
                  <Link to={`/deposit`} className="w-full p-2 h-[37px] flex justify-center items-center gap-1 uppercase text-white font-bold text-[12px] rounded border border-white bg-gradient-to-b from-[#007b15] to-[#138e00]">
                    <img
                      src="/Images/deposit-icon.webp"
                      alt="Deposit"
                      className="w-[25px] h-[25px] invert"
                    />
                    <h3 className="m-0">Deposit</h3>
                  </Link>
                  <Link to={`/withdraw`} className="w-full p-1 h-[37px] flex justify-center items-center gap-1 uppercase text-white font-bold text-[12px] rounded border border-white bg-gradient-to-b from-[#7b0000] to-[#d10000]">
                    <img
                      src="/Images/withdrawal-icon.webp"
                      alt="Withdraw"
                      className="w-[25px] h-[25px] invert"
                    />
                    <h3 className="m-0">Withdraw</h3>
                  </Link>

                </div>
                <ul className="flex flex-col px-6 space-y-4 text-base text-[#212529]">
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/openbets"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Open Bets
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/accountstatement"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Account Statement
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/profitLoss"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Profit Loss Report
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/profile"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/referandearn"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Refer & Earn
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/changepassword"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Change Password
                    </Link>
                  </li>

                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/rules"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Rule
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/settings"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Settings
                    </Link>
                  </li>
                  {/* <li
                  className="cursor-pointer hover:underline text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </li> */}
                </ul>

                <div className="flex justify-center items-center mt-8">
                  <button
                    className="text-[#fff] bg-red-600 font-bold p-2 rounded-lg w-[60%]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

          </div>

          {userInfo && (
            <div className="block lg:hidden">
              <div className="flex flex-col justify-end text-white text-[13px]">
                <div className="flex justify-end mr-1">
                  <div className="flex justify-center items-center">
                    <img src="/Images/bank-gold.webp" alt="" className="mr-1 w-4 h-4" />{" "}
                    <span className="font-bold">{balance && Number(balanceWithExp).toFixed(2)}</span>
                  </div>
                  {/* <span>Exp: {exposure}</span> */}
                </div>

                <div
                  className="flex justify-center items-center cursor-pointer leading-none tracking-tight"
                >
                  <span className="underline text-[14px] mx-1">Exp: {exposure}</span>
                  <div className="flex justify-center items-center" onClick={() => setShowSidebar(prev => !prev)}>
                    <span className="underline text-[14px]">{userInfo?.user_name}</span>
                    <span className="pt-1 mx-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="currentColor"
                        className="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* Right Side menu bar */}
              <div
                className={`fixed top-[3.5rem] lg:top-[5.8rem] right-0 h-auto w-64 pb-6 bg-[#f1f5f8] text-black shadow-lg z-[9999] transform transition-transform duration-300 ${showSidebar ? "translate-x-0" : "translate-x-full"
                  }`}
                ref={sidebarRef}
              >
                <div className="flex justify-end p-1">
                  <button
                    onClick={() => setShowSidebar(false)}
                    className="text-xl font-bold"
                  >
                    &times;
                  </button>
                </div>
                {/* Deposit Withdraw Section */}
                <div className="flex justify-evenly gap-2 px-1 py-2 w-full mx-auto mb-2">
                  <Link to={`/deposit`} className="w-full p-2 h-[37px] flex justify-center items-center gap-1 uppercase text-white font-bold text-[12px] rounded border border-black bg-gradient-to-b from-[#007b15] to-[#138e00]">
                    <img
                      src="/Images/deposit-icon.webp"
                      alt="Deposit"
                      className="w-[25px] h-[25px] invert"
                    />
                    <h3 className="m-0">Deposit</h3>
                  </Link>
                  <Link to={`/withdraw`} className="w-full p-1 h-[37px] flex justify-center items-center gap-1 uppercase text-white font-bold text-[12px] rounded border border-black bg-gradient-to-b from-[#7b0000] to-[#d10000]">
                    <img
                      src="/Images/withdrawal-icon.webp"
                      alt="Withdraw"
                      className="w-[25px] h-[25px] invert"
                    />
                    <h3 className="m-0">Withdraw</h3>
                  </Link>

                </div>
                <ul className="flex flex-col px-6 space-y-4 text-base text-[#212529]">
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/openbets"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Open Bets
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/accountstatement"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Account Statement
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/profitLoss"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Profit Loss Report
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/profile"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/referandearn"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Refer & Earn
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/changepassword"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Change Password
                    </Link>
                  </li>

                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/rules"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Rule
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <Link
                      to={"/settings"}
                      className=""
                      onClick={() => setShowSidebar(false)}
                    >
                      Settings
                    </Link>
                  </li>
                  {/* <li
                  className="cursor-pointer hover:underline text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </li> */}
                </ul>

                <div className="flex justify-center items-center mt-8">
                  <button
                    className="text-[#fff] bg-red-600 font-bold p-2 rounded-lg w-[60%]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      </div>

      {/* deposit withdraw section In Header*/}
      {userInfo && (
        <div className="flex lg:hidden justify-evenly bg-black px-2 py-1 w-full text-[12.5px]">

          <Link to={`/deposit`} className="w-[45%] h-[38px] flex justify-center items-center uppercase text-white font-bold rounded border border-white bg-gradient-to-b from-[#007b15] to-[#138e00]">
            <img
              src="/Images/deposit-icon.webp"
              alt="Deposit"
              className="w-[25px] h-[25px] invert mx-1"
            />
            <h3 className="m-0">Deposit</h3>
          </Link>

          <Link to={`/withdraw`} className="w-[45%] h-[38px] flex justify-center items-center uppercase text-white font-bold rounded border border-white bg-gradient-to-b from-[#7b0000] to-[#d10000]">
            <img
              src="/Images/withdrawal-icon.webp"
              alt="Withdraw"
              className="w-[25px] h-[25px] invert mx-1"
            />
            <h3 className="m-0">Withdrawal</h3>
          </Link>

        </div>
      )}
      <div className="flex items-center bg-black">
        <div className="bg-[#fff] block lg:hidden rounded-2xl p-2 w-8 ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>

        </div>
        <marquee
          behavior="scroll"
          scrollamount="4"
          className="text-[#fff] text-xs font-extrabold uppercase w-full"
        >
          welcome to 99exch
        </marquee>
      </div>
      {/* Horizontal All Sports scroll bar */}
      <div className="bg-[#8000ff] p-1 whitespace-nowrap overflow-x-scroll scroll-hide hidden lg:flex">
        <ul className="flex justify-between items-center text-[#fff] font-bold text-sm">
          <li className="mx-4 hover:underline cursor-pointer p-1">HOME</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">CRICKET</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">TENNIS</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">FOOTBALL</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">POLITICS</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">HORSE RACING</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">GREYHOUND RACING</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">KABADDI</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">CASINO</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">SPORTS BOOK</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">INT CASINO</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">BINARY</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">MIXED MARTIAL ARTS</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">VOLLEYBALL</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">ICE HOCKEY</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">BASKETBALL</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">BASEBALL</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">DARTS</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">FUTSAL</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">TABLE TENNIS</li>
          <li className="mx-4 hover:underline cursor-pointer p-1">RUGBY</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
