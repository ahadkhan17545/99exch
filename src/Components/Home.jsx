import React, { useState } from "react";
import MenuSideBar from "./MenuSideBar";
import UpcomingEvents from "./UpcomingEvents";
import Helper from "../helper";
import { toast } from "react-toastify";
import gsap from "gsap";
import { useAuth } from "../AuthContext";
import axios from "axios";
import Appconfig from "../config/config";
import { Link, useNavigate } from "react-router-dom";
import DiamondLobby from "../Pages/Lobby/DiamondLobby";

function Home() {
  const userInfo = Helper();
  const navigate = useNavigate();
  const { setShowLoginModel } = useAuth();
  const [selectedSubSport, setSelectedSubSport] = useState("4");
  const [blinkEvents, setBlinkEvents] = useState([]);
  const [selectedSportType, setSelectedSportType] = useState("inplay")

  const FourGames = [
    {
      img: "https://speedcdn.io/assets/casino_highlight/aviator-730-280.gif",
      name: "Aviator",
      alt: "Aviator",
      provider: "SPB",
      code: "aviator",
    },
    {
      img: "https://speedcdn.io/assets/casino_highlight/evoplay-730-280.gif",
      name: "EvoPlay",
      alt: "evoplay",
      provider: "SPB",
      code: "mines",
    },
    {
      img: "https://speedcdn.io/assets/casino_highlight/fungames-730_280.gif",
      name: "Fungames",
      alt: "fungames",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://speedcdn.io/assets/casino_highlight/wingogames-730-280.gif",
      name: "Wingo",
      alt: "Wingo",
      provider: "QT",
      code: "HAK-colors",
      type: "EV",
    },
  ];

  const NewLaunch = [
    {
      img: "/Images/Casino_providers/luckylase2.webp",
      name: "LUCKY LASE 2",
      alt: "LUCKY LASE 2",
      provider: "DC",
      code: "150043",
    },
    {
      img: "/Images/Casino_providers/lankesh.webp",
      name: "LANKESH",
      alt: "LANKESH",
      provider: "DC",
      code: "151026",
    },
    {
      img: "/Images/Casino_providers/pushpa.webp",
      name: "PUSHPA",
      alt: "PUSHPA",
      provider: "DC",
      code: "151067",
      type: "",
    },
    {
      img: "/Images/Casino_providers/rps.webp",
      name: "ROCK PAPER SCISSORS",
      alt: "ROCK PAPER SCISSORS",
      provider: "QT",
      code: "ADL-rockpaperscissorsdraw",
      type: "",
    },
     {
      img: "/Images/Casino_providers/duckrace.webp",
      name: "DUCK RACING",
      alt: "DUCK RACING",
      provider: "DC",
      code: "400086",
      type: "",
    },
     {
      img: "/Images/Casino_providers/xroulette.webp",
      name: "XROULETTE",
      alt: "XROULETTE",
      provider: "QT",
      code: "BTL-autoroulette",
      type: "",
    },
     {
      img: "/Images/Casino_providers/marblerace.webp",
      name: "MARBLE RACE",
      alt: "MARBLE RACE",
      provider: "DC",
      code: "400091",
      type: "",
    },
     {
      img: "/Images/Casino_providers/teenpatti-joker2020.webp",
      name: "TEENPATTI JOKER 2020",
      alt: "TEENPATTI JOKER 2020",
      provider: "SN",
      code: "VJKR",
      type: "",
    },
  ];

  const casinoList = [
    {
      img: "https://img.jaipurapps.com/all-casino-img/dragon-tiger/dt_mac88.webp",
      name: "Dragon Tiger",
      alt: "MAC88",
      provider: "SN",
      code: "VDT",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/baccarat/baccarat_mac88.webp",
      name: "Baccrat",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/sicbo/sicbo_mac88.webp",
      name: "sicbo",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/roulette/roulette_mac88.webp",
      name: "roulette",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/poker/20_20_poker.webp",
      name: "20 20 poker",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/lucky-7/lucky_7.webp",
      name: "lucky7",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/andarbahar/ab.webp",
      name: "andar bahar",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/teenpatti/tp1d.webp",
      name: "teen patti",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/32cards/32_cards.webp",
      name: "32 cards",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/dragon-tiger/dtl_20_20.webp",
      name: "dragon tiger lion",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/32cards/amar_akbar_anthony.webp",
      name: "amar akbar anthony",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/other/3cj.webp",
      name: "3 card judgment",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/other/queen.webp",
      name: "queen race",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/other/race_20.webp",
      name: "race 20",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/other/casino_war.webp",
      name: "casino war",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/other/worli_matka.webp",
      name: "worli matka",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/other/lottery.webp",
      name: "lottery",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/teenpatti/teenpatti_test.webp",
      name: "teenpatti test",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/other/The-Trap.webp",
      name: "the trap",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/other/trio.webp",
      name: "trio",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/baccarat/29b.webp",
      name: "29 baccrat",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/teenpatti/2_cards_teenpatti.webp",
      name: "2 card teenpatti",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/teenpatti/muflis_teenpati.webp",
      name: "mufils teenpatti",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/other/bollywood_casino.webp",
      name: "bollywood casino",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/poker/poker_1_day.webp",
      name: "poker 1 day",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/teenpatti/20_20_teenpatti.webp",
      name: "20 20 teenpatti",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/cricket-war/super_over.webp",
      name: "super over",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/cricket-war/5_five_cricket.webp",
      name: "5 five cricket",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/dt_1day.webp",
      name: "1 day dragon tiger",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/10kadum.webp",
      name: "10 ka dum",
      alt: "MAC88",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_poker.webp",
      name: "poker",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_roulette.webp",
      name: "auto roulette",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_lucky7.webp",
      name: "lucky7",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vlucky5.webp",
      name: "lucky5",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_trio.webp",
      name: "trio",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_bc.webp",
      name: "bollywood casino",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://img.jaipurapps.com/all-casino-img/32cards/amar_akbar_anthony.webp",
      name: "amar akbar anthony",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_casinometer.webp",
      name: "casino meter",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_queen.webp",
      name: "queen race",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_race_20.webp",
      name: "race 20",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/lankesh.jpeg",
      name: "lankesh",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_hc.webp",
      name: "high card",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_cc.webp",
      name: "center card",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_worlimatka.webp",
      name: "worli matka",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_mtp.webp",
      name: "mufils teenpatti",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/kbc_vr.webp",
      name: "kbc",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_2020_dtl.webp",
      name: "20 20 dtl",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_dragontiger.webp",
      name: "dragon tiger",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_2ctp.webp",
      name: "2 card teenpatti",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/ak47_vr.webp",
      name: "ak 47",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_32cards.webp",
      name: "32 card",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_ab.webp",
      name: "andar bahar",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_tp2020.webp",
      name: "20 20 teenpatti",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_poker.webp",
      name: "poker",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_roulette.webp",
      name: "auto roulette",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
    {
      img: "https://cdn.dreamdelhi.com/mac88/vr_hilo.webp",
      name: "high low",
      alt: "FUNGAMES",
      provider: "",
      code: "",
      type: "",
    },
  ];

  const casinoProviders = [
    { img: "../Images/Casino_providers/ezugi.webp", alt: "Ezugi", code: "ezugi" },
    { img: "../Images/Casino_providers/supernova.webp", alt: "Supernova", code: "sn" },
    { img: "../Images/Casino_providers/onlyplay.webp", alt: "Onlyplay", code: "onlyplay-casino" },
    { img: "../Images/Casino_providers/smartsoft.webp", alt: "Smartsoft", code: "smartsoft-casino" },
    { img: "../Images/Casino_providers/spribe.webp", alt: "Spribe", code: "spribe" },
    { img: "../Images/Casino_providers/betgames.webp", alt: "BetGames", code: "bet-games" },
    { img: "../Images/Casino_providers/sa-gaming.webp", alt: "SA Gaming", code: "sa-gaming-casino" },
    { img: "../Images/Casino_providers/play-n-go.webp", alt: "Play N Go", code: "play-n-go-casino" },
    { img: "../Images/Casino_providers/1x2.webp", alt: "1x2 Gaming", code: "one-two-gaming" },
    { img: "../Images/Casino_providers/turbogames.webp", alt: "Turbo", code: "turbo-gaming" },
    { img: "../Images/Casino_providers/ho-gaming.webp", alt: "HO Gaming", code: "ho-gaming" },
    { img: "../Images/Casino_providers/caleta.webp", alt: "Caleta", code: "caleta-casino" },
    { img: "../Images/Casino_providers/better-live.webp", alt: "Better Live", code: "beter-live" },
    { img: "../Images/Casino_providers/royal-gaming.webp", alt: "Royal Gaming", code: "royal-gaming" },
    { img: "../Images/Casino_providers/jili.webp", alt: "Jilli", code: "jilli-casino" },
    { img: "../Images/Casino_providers/kingmaker.webp", alt: "Kingmaker", code: "kingmaker-casino" },
    { img: "../Images/Casino_providers/evolution.webp", alt: "Evolution", code: "evolution" },
    { img: "../Images/Casino_providers/mac88virtualgame.webp", alt: "MAC88 Virtual", code: "mac888" },
    { img: "../Images/Casino_providers/gamzix.webp", alt: "Gamzix", code: "ezugi" },
    { img: "../Images/Casino_providers/mac88.webp", alt: "MAC88", code: "mac888" },
    { img: "../Images/Casino_providers/vsport.webp", alt: "V Sport", code: "mac888" },
    { img: "../Images/Casino_providers/evoplay.webp", alt: "Evoplay", code: "evolution" },
    { img: "../Images/Casino_providers/fungames_500-299.webp", alt: "FunGames", code: "ezugi" },
    { img: "../Images/Casino_providers/aesexy.webp", alt: "Aesexy", code: "ezugi" },
  ];


  const sports = [
    { id: "4", name: "CRICKET", icon: "/Images/cricket-white-ball.png" },
    { id: "1", name: "FOOTBALL", icon: "/Images/football-white-ball.png" },
    { id: "2", name: "TENNIS", icon: "/Images/tennis-white-ball.png" },
    { id: "12", name: "HORSE RACING", icon: "/Images/horse-white.png" },
    { id: "13", name: "GREYHOUND RACING", icon: "/Images/grayhond-white.png" },
    { id: "15", name: "BINARY", icon: "/Images/binary-white.png" },
    { id: "14", name: "KABADDI", icon: "/Images/kabbadi-white.png" },
    { id: "11", name: "POLITICS", icon: "/Images/politics-white.png" },
    { id: "16", name: "MIXED MARTIAL ARTS", icon: "/Images/mixed-white.png" },
    { id: "17", name: "VOLLEYBALL", icon: "/Images/volly-ball-white.png" },
    { id: "18", name: "ICE HOCKEY", icon: "/Images/ice-hockey-white.png" },
    { id: "19", name: "BASKETBALL", icon: "/Images/basketball-white.png" },
    { id: "20", name: "BASEBALL", icon: "/Images/baseball-white.png" },
    { id: "21", name: "DARTS", icon: "/Images/dart-white.png" },
    { id: "22", name: "FUTSAL", icon: "/Images/futsal-white.png" },
    { id: "23", name: "TABLE TENNIS", icon: "/Images/tt-white.png" },
    { id: "24", name: "RUGBY", icon: "/Images/rugby-white.png" },
  ];

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

  function OpenEzugiLobby(casinoType) {
    if (!userInfo) {
      setShowLoginModel(true);
      return;
    }
    navigate("/", { state: { activeCasino: casinoType } });
    setSelectedSportType("casino")
  }

  return (
    <>
      <div className="flex bg-white">
        {/* Center Home page section */}
        <div className="w-full h-screen overflow-y-scroll scroll-hide">

          {/* Blink events */}
          <div className="overflow-x-auto scroll-hide w-full bg-black">
            <ul className="flex flex-nowrap w-full space-x-1 py-1">
              {blinkEvents?.map((item, index) => (
                <li key={index} className="bg-[#8000ff] rounded pl-2 pr-4 py-1">


                  <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className="flex-shrink-0 flex items-center blink">
                    <img
                      src="/Images/cricket-white-ball.png"
                      className="w-3 h-3 mr-1"
                      alt=""
                    />
                    <span className="text-white font-bold text-[11px] uppercase whitespace-nowrap">
                      {item.event_name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horizontal menu scroll bar */}
          <div className="bg-[#000] whitespace-nowrap overflow-x-scroll scroll-hide">
            <ul className="flex justify-between items-center text-[#fff] font-bold text-xs">
              <li className={`border-[2px] border-transparent ${selectedSportType == "inplay" ? "border-t-white" : ""} py-3`} onClick={() => setSelectedSportType("inplay")}>
                <span className="border border-transparent border-r-white px-4">INPLAY</span>
              </li>
              <li className={`border-[2px] border-transparent ${selectedSportType == "sports" ? "border-t-white" : ""} py-3`} onClick={() => setSelectedSportType("sports")}>
                <span className="border border-transparent border-r-white px-4">SPORTS</span>
              </li>
              <li className={`border-[2px] border-transparent ${selectedSportType == "casino" ? "border-t-white" : ""} py-3`} onClick={() => setSelectedSportType("casino")}>
                <span className="border border-transparent border-r-white px-4">CASINO</span>
              </li>
              <li className={`border-[2px] border-transparent ${selectedSportType == "sportbook" ? "border-t-white" : ""} py-3`} onClick={() => { setSelectedSportType("sportbook"); CreateAndLaunchWCOCasino("BT", "") }}>
                <span className="border border-transparent border-r-white px-4">SPORT BOOK</span>
              </li>
              <li className={`border-[2px] border-transparent ${selectedSportType == "other" ? "border-t-white" : ""} py-3`}
              // onClick={() => setSelectedSportType("other")}
              >
                <span className=" px-4">OTHERS</span>
              </li>
            </ul>
          </div>
          {(selectedSportType == "inplay" || selectedSportType == "sports") &&
            <>
              {/* All Sports horizontal mobile scrollbar */}
              <div className="bg-[#8000ff] whitespace-nowrap overflow-x-scroll scroll-hide">
                <ul className="flex justify-between items-center text-[#fff] font-bold text-xs">
                  {sports.map((sport, index) => (
                    <li
                      key={index}
                      className={`flex flex-col justify-between items-center py-1 cursor-pointer ${selectedSubSport == sport.id ? "bg-black" : ""
                        } transition-colors`}
                      onClick={() => setSelectedSubSport(sport.id)}
                    >
                      <img src={sport.icon} alt="" className=" h-[20px] mb-[5px]" />
                      <span className="px-2">{sport.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Events listing */}
              <UpcomingEvents
                sportType={selectedSportType}
                eventType={selectedSubSport}
                blinkedEvents={setBlinkEvents}
              />
              {selectedSportType != "sports" &&
                <>
                  {/* Four Games Images */}
                  < div className="my-1 grid grid-cols-2 lg:grid-cols-4 gap-[2px] px-[1px]">
                    {FourGames?.map((item, index) => (
                      <img
                        key={index}
                        src={item.img}
                        alt={item.alt}
                        className="w-full"
                        onClick={() =>
                          CreateAndLaunchWCOCasino(item.provider, item.code)
                        }
                      />
                    ))}
                  </div>

                  {/* Mac888 images */}
                  <div className="mac88-casino">
                    <div className="flex justify-start items-center w-full bg-[#8000ff] p-1">
                      <span className="animateHeading text-[#fff] font-bold mx-1">NEW LAUNCH</span>
                    </div>
                    <div className="">
                      <ul className="grid grid-cols-4 lg:grid-cols-7 gap-[2px] p-[2px] lg:p-0">
                        {" "}
                        {/* 4 columns with small gap */}
                        {NewLaunch?.map((item, index) => (
                          <li
                            key={index}
                            className="casino-linkss"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={() =>
                              CreateAndLaunchWCOCasino(item.provider, item.code)
                            }
                          >
                            <div className="w-full h-[4.5rem] lg:h-[8rem]">
                              <img
                                src={item.img}
                                className="w-full h-full object-fill"
                                alt={item.alt}
                                loading="lazy" // Optimized loading
                              />
                            </div>
                            <p
                              className="flex justify-center items-center text-[8px] lg:text-xs font-semibold text-[#fff] uppercase h-[34px]"
                              style={{
                                background:
                                  "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                              }}
                            >
                              {item.name}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* My favrouites images */}
                  <div className="mac88-casino">
                    <div className="flex justify-start items-center w-full bg-[#8000ff] p-1">
                      <span className="animateHeading text-[#fff] font-bold mx-1">MY FAVOURITES</span>
                    </div>
                    <div className="">
                      <ul className="grid grid-cols-4 lg:grid-cols-7 gap-[2px] p-[2px] lg:p-0">
                        {" "}
                        {/* 4 columns with small gap */}
                        {casinoList?.map((item, index) => (
                          <li
                            key={index}
                            className="casino-linkss"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={() =>
                              CreateAndLaunchWCOCasino(item.provider, item.code)
                            }
                          >
                            <div className="w-full h-[4rem] lg:h-[8rem]">
                              <img
                                src={item.img}
                                className="w-full h-full object-fill"
                                alt={item.alt}
                                loading="lazy" // Optimized loading
                              />
                            </div>
                            <p
                              className="flex justify-center items-center text-[8px] lg:text-xs font-semibold text-[#fff] uppercase h-[34px]"
                              style={{
                                background:
                                  "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                              }}
                            >
                              {item.name}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Casino Providers */}
                  <div className="casino-providers my-1">
                    <div className="flex justify-start items-center w-full bg-[#8000ff] p-1">
                      <span className="animateHeading text-[#fff] font-bold mx-1">OUR PROVIDERS</span>
                    </div>
                    <div className="">
                      <ul className="grid grid-cols-3 lg:grid-cols-4 gap-[2px] p-[2px] lg:p-0">
                        {" "}
                        {/* 4 columns with small gap */}
                        {casinoProviders?.map((item, index) => (
                          <li
                            key={index}
                            className="casino-linkss"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={() =>
                              OpenEzugiLobby(item.code)
                            }
                          >
                            <div className="w-full h-[5rem] lg:h-[8rem]">
                              <img
                                src={item.img}
                                className="w-full h-full object-fill"
                                alt={item.alt}
                                loading="lazy" // Optimized loading
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              }
            </>}

          {selectedSportType == "casino" &&
            <>
              <DiamondLobby />
            </>}
        </div>
      </div >
    </>
  );
}

export default Home;
