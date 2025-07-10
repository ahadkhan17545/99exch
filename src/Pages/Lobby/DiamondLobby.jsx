import React from 'react'
import Helper from "../../helper";
import { toast } from "react-toastify";
import gsap from "gsap";
import { useAuth } from "../../AuthContext";
import axios from "axios";
import Appconfig from "../../config/config";
import { useNavigate } from "react-router-dom";

function DiamondLobby() {

  const userInfo = Helper();
  const navigate = useNavigate();
  const { setShowLoginModel } = useAuth();


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
    navigate("/all-games-lobby", { state: { activeCasino: casinoType } });
  }


  return (
    <>
      {/* Mac888 images */}
      <div className="mac88-casino mt-1">
        <div className="">
          <ul className="grid grid-cols-4 gap-[2px] p-[2px] lg:p-0">
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
    </>
  )
}

export default DiamondLobby