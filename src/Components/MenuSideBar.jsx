import { CaretRightFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import gsap from "gsap";
import { useAuth } from "../AuthContext";
import Helper from "../helper";
import axios from "axios";
import Appconfig from "../config/config";

function MenuSideBar() {

  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state;

  const userInfo = Helper();
  const { setShowLoginModel } = useAuth();

  const [isOpen, setIsOpen] = useState(true);
  const [isALLSportsOpen, setIsALLSportsOpen] = useState(true);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAllSports = () => {
    setIsALLSportsOpen(!isALLSportsOpen);
  };

  function CreateAndLaunchWCOCasino(provider_code, game_code, type = null) {
    if (!userInfo) {
      setShowLoginModel(true);
      return;
    }

    const progressCircle = document.querySelector(".progress-ring-circle");
    const percentageElement = document.querySelector(".percentage");
    const preloader = document.querySelector(".preloader");
    const shapes = document.querySelectorAll(".shape");

    const radius = progressCircle.getAttribute("r");
    const circumference = 2 * Math.PI * radius;

    // Reset progress
    progressCircle.style.strokeDashoffset = circumference;
    percentageElement.textContent = "0";
    preloader.style.display = "flex";

    // Animate ring progress
    gsap.to(progressCircle, {
      strokeDashoffset: 0,
      duration: 5,
      ease: "power1.inOut",
      onUpdate: function () {
        const offset = parseFloat(progressCircle.style.strokeDashoffset);
        const progress = Math.round((1 - offset / circumference) * 100);
        percentageElement.textContent = progress;

        const scaleValue = 1 + progress / 100;
        if (progress > 25)
          gsap.to(shapes[0], { scale: scaleValue, duration: 0.5 });
        if (progress > 50)
          gsap.to(shapes[1], { scale: scaleValue, duration: 0.5 });
        if (progress > 75)
          gsap.to(shapes[2], { scale: scaleValue, duration: 0.5 });
      },
    });

    const userData = {
      user_id: userInfo?._id,
      user_name: userInfo?.user_name,
      redirect_url: "https://daddyexch.live/",
      provider_code,
      game_code,
      type,
    };

    axios
      .post(`${Appconfig.apiUrl}wco/login`, userData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const status = response.data.status?.code;

        if (status === "SUCCESS" && response.data.launchURL) {
          window.open(response.data.launchURL, "_self");
        } else {
          preloader.style.display = "none";
          if (status === "VALIDATION_ERROR" || status === "UNKNOWN_ERROR") {
            toast.error("Game Not Found.", { autoClose: 2000 });
          } else if (status === "AUTHENTICATION_FAILED") {
            toast.error(response.data.status?.message, { autoClose: 2000 });
          }
        }
      })
      .catch((error) => {
        preloader.style.display = "none";
        console.error("Game launch error:", error);
      });
  }

  useEffect(() => {
    console.log("locationState sidebar : ", locationState?.subSport)
  }, [location])

  return (
    <>
      <div className="flex flex-col w-full">
        {/* <div className="w-full text-base">
          <div className="flex w-full bg-[#008000] p-1 mb-[1px] text-[var(--secondary-color)]">
            <span>Deposit</span>
          </div>
          <div className="flex w-full bg-[#ff0000] p-1 mb-[1px] text-[var(--secondary-color)]">
            <span>Withdraw</span>
          </div>
        </div> */}
        {/* Other Tab */}
        <div className="my-[1px]">
          <div
            className="flex justify-between items-center px-1 bg-[var(--theme1-bg)] text-[var(--secondary-color)] cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="text-lg">Others</span>
            <span className={`transition-transform duration-300 ${isOpen ? '' : '-rotate-90'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={12}
                height={22}
              >
                <path
                  fill="white"
                  d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
              </svg>
            </span>
          </div>
          <ul
            className={`text-sm w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]" onClick={() =>
              CreateAndLaunchWCOCasino("SN", "VTP20")
            }>TP T20</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]" onClick={() =>
              CreateAndLaunchWCOCasino("SN", "VC32")
            }>TP 1 DAY</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "ARW")
            }>TP TEST</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "AB")
            }>DT 1 DAY</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "VC32")
            }>32 CARDS</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "VARW")
            }>HI LOW</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "VJKR")
            }>POKER</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "RCQ20")
            }>QUEEN</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "BAC")
            }>BACCARAT</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "ABC")
            }>AMAR AKBAR ANTHONY</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "DT7M")
            }>BOLLYWOOD</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "VBAC")
            }>TRIO</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "AB2")
            }>ANDAR BAHAR</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "MTP7M")
            }>MUFLIS TP</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "VARW")
            }>ROULETTE</li>
            <li className="px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"onClick={() =>
              CreateAndLaunchWCOCasino("SN", "VWM")
            }>WORLI MATKA</li>
          </ul>
        </div>
        {/* All Sports Tab */}
        <div>
          <div
            className="flex justify-between items-center px-1 bg-[var(--theme1-bg)] text-[var(--secondary-color)] cursor-pointer"
            onClick={toggleAllSports}
          >
            <span className="text-lg">All Sports</span>
            <span className={`transition-transform duration-300 ${isALLSportsOpen ? '' : '-rotate-90'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={12}
                height={22}
              >
                <path
                  fill="white"
                  d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
              </svg>
            </span>
          </div>
          <ul
            className={`text-sm w-full overflow-hidden transition-all duration-500 ease-in-out ${isALLSportsOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]" onClick={() => navigate('/', { state: { sportType: "inplay", subSport: "4" } })}><div className="w-4 mr-1">{(locationState?.subSport === null || locationState?.subSport == "4") && <CaretRightFilled />}</div> <span>CRICKET</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]" onClick={() => navigate('/', { state: { sportType: "inplay", subSport: "1" } })}><div className="w-4 mr-1">{(locationState?.subSport == "1") && <CaretRightFilled />}</div> <span>FOOTBALL</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]" onClick={() => navigate('/', { state: { sportType: "inplay", subSport: "2" } })}><div className="w-4 mr-1">{(locationState?.subSport == "2") && <CaretRightFilled />}</div> <span>TENNIS</span></li>
            {/* <li className="px-3 py-1 cursor-pointer">HORSE RACING</li>
            <li className="px-3 py-1 cursor-pointer">GREYHOUND RACING</li> */}
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"><div className="w-4 mr-1">{(locationState?.subSport == "15") && <CaretRightFilled />}</div> <span>BINARY</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"><div className="w-4 mr-1">{(locationState?.subSport == "14") && <CaretRightFilled />}</div> <span>KABADDI</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"><div className="w-4 mr-1">{(locationState?.subSport == "11") && <CaretRightFilled />}</div> <span>POLITICS</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"><div className="w-4 mr-1">{(locationState?.subSport == "19") && <CaretRightFilled />}</div> <span>BASKETBALL</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"><div className="w-4 mr-1">{(locationState?.subSport == "23") && <CaretRightFilled />}</div> <span>TABLE TENNIS</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"><div className="w-4 mr-1">{(locationState?.subSport == "17") && <CaretRightFilled />}</div> <span>VOLLEYBALL</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"><div className="w-4 mr-1">{(locationState?.subSport == "24") && <CaretRightFilled />}</div> <span>RUGBY</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"><div className="w-4 mr-1">{(locationState?.subSport == "21") && <CaretRightFilled />}</div> <span>DARTS</span></li>
            <li className="flex justify-start items-center px-3 py-1 cursor-pointer border-b border-[#9e9e9e]"><div className="w-4 mr-1">{(locationState?.subSport == "22") && <CaretRightFilled />}</div> <span>FUTSAL</span></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenuSideBar;
