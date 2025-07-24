import React, { useEffect, useRef, useState } from 'react'
import Helper from "../../helper";
import { toast } from "react-toastify";
import gsap from "gsap";
import { useAuth } from "../../AuthContext";
import axios from "axios";
import Appconfig from "../../config/config";
import { useLocation, useNavigate } from "react-router-dom";

function DiamondLobby() {

  const userInfo = Helper();
  const navigate = useNavigate();
  const { setShowLoginModel } = useAuth();

  const lobbyRefs = useRef({});
  const menuBarRef = useRef(null);
  const location = useLocation();
  console.log("Location : ", location?.state?.activeCasino);
  const param = location?.state?.activeCasino || "all";

  const [selectedLobby, setSelectedLobby] = useState("all");


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

  const ezugiGames = [
    {
      code: "601000",
      img: "Baccarat-A.webp",
      name: "Baccarat-A",
      alt: "Baccarat-a",
      provider: "SN",
      type: "",
    },
    {
      code: "272", img: "Baccarat-B.webp",
      name: "Baccarat-B",
      alt: "Baccarat-b",
      provider: "SN",
      type: "",
    },
    {
      code: "273", img: "Baccarat-C.webp",
      name: "Baccarat-C",
      alt: "Baccarat-c",
      provider: "SN",
      type: "",
    },
    {
      code: "274", img: "Baccarat-D.webp",
      name: "Baccarat-D",
      alt: "Baccarat-d",
      provider: "SN",
      type: "",
    },
    {
      code: "108", img: "Baccarat-E.webp",
      name: "Baccarat-E",
      alt: "Baccarat-e",
      provider: "SN",
      type: "",
    },
    {
      code: "221007", img: "Cricket-Auto-Roulette.webp",
      name: "Roulette",
      alt: "c-a-roulette",
      provider: "SN",
      type: "",
    },
    {
      code: "173", img: "No-commision-Baccarat--B.webp",
      name: "Baccarat--B",
      alt: "Baccarat--B",
      provider: "SN",
      type: "",
    },
    {
      code: "174", img: "No-commision-Baccarat--C.webp",
      name: "Baccarat--C",
      alt: "Baccarat-c",
      provider: "SN",
      type: "",
    },
    {
      code: "175", img: "No-commision-Baccarat--D.webp",
      name: "Baccarat--d",
      alt: "Baccarat--d",
      provider: "SN",
      type: "",
    },
    {
      code: "170", img: "No-commision-Baccarat--E.webp",
      name: "Baccarat--e",
      alt: "Baccarat--e",
      provider: "SN",
      type: "",
    },
    {
      code: "172", img: "No-commision-Baccarat-A.webp",
      name: "Baccarat-a",
      alt: "Baccarat-a",
      provider: "SN",
      type: "",
    },
    {
      code: "228002", img: "32-Cards.webp",
      name: "32-cards",
      alt: "32-cards",
      provider: "SN",
      type: "",
    },
    {
      code: "228000", img: "Andar-Bahar.webp",
      name: "andar-bahar",
      alt: "andar-bahar",
      provider: "SN",
      type: "",
    },
    {
      code: "5001", img: "Auto-roulette.webp",
      name: "auto-roulette",
      alt: "auto-roulette",
      provider: "SN",
      type: "",
    },
    {
      code: "227101", img: "Beton-number.webp",
      name: "beton-number",
      alt: "beton-number",
      provider: "SN",
      type: "",
    },
    {
      code: "201", img: "Blackjack1.webp",
      name: "blackjack1",
      alt: "blackjack1",
      provider: "SN",
      type: "",
    },
    {
      code: "270", img: "BlackJack-a.webp",
      name: "blackjack-a",
      alt: "blackjack-a",
      provider: "SN",
      type: "",
    },
    {
      code: "272", img: "BlackJack-B.webp",
      name: "blackjack-b",
      alt: "blackjack-b",
      provider: "SN",
      type: "",
    },
    {
      code: "273", img: "BlackJack-C.webp",
      name: "blackjack-c",
      alt: "blackjack-c",
      provider: "SN",
      type: "",
    },
    {
      code: "274", img: "BlackJack-D.webp",
      name: "blackjack-d",
      alt: "blackjack-d",
      provider: "SN",
      type: "",
    },
    {
      code: "260", img: "Blackjack-da-Sorte.webp",
      name: "blackjack-da",
      alt: "blackjack-da",
      provider: "SN",
      type: "",
    },
    {
      code: "275", img: "BlackJack-E.webp",
      name: "blackjack-e",
      alt: "blackjack-e",
      provider: "SN",
      type: "",
    },
    {
      code: "507000", img: "Casino-Hold_em.webp",
      name: "casino-hold",
      alt: "casino-hold",
      provider: "SN",
      type: "",
    },
    {
      code: "328000", img: "Casino-Marina-Andar-Bahar.webp",
      name: "casino-marina",
      alt: "casino-marina",
      provider: "SN",
      type: "",
    },
    {
      code: "32100", img: "Casino-Marina-Baccarat-1.webp",
      name: "casino-marina-1",
      alt: "casino-marina-1",
      provider: "SN",
      type: "",
    },
    {
      code: "32101", img: "Casino-Marina-Baccarat-2.webp",
      name: "casino-marina-2",
      alt: "casino-marina-2",
      provider: "SN",
      type: "",
    },
    {
      code: "32102", img: "Casino-Marina-Baccarat-3.webp",
      name: "casino-marina-3",
      alt: "casino-marina-3",
      provider: "SN",
      type: "",
    },
    {
      code: "32103", img: "Casino-Marina-Baccarat-4.webp",
      name: "casino-marina-4",
      alt: "casino-marina-4",
      provider: "SN",
      type: "",
    },
    {
      code: "321000", img: "Casino-Marina-Roulette-1.webp",
      name: "casino-roulette-1",
      alt: "casino-roulette-1",
      provider: "SN",
      type: "",
    },
    {
      code: "321001", img: "Casino-Marina-Roulette-2.webp",
      name: "casino-roulette-2",
      alt: "casino-roulette-2",
      provider: "SN",
      type: "",
    },
    {
      code: "45100", img: "cRICKET-wAR.webp",
      name: "cricket-war",
      alt: "cricket-war",
      provider: "SN",
      type: "",
    },
    {
      code: "221003", img: "dIAMOND-rOULETTE.webp",
      name: "diamond-roulette",
      alt: "diamond-roulette",
      provider: "SN",
      type: "",
    },
    {
      code: "150", img: "dRAGON-tIGER.webp",
      name: "dragon-tiger",
      alt: "dragon-tiger",
      provider: "SN",
      type: "",
    },
    {
      code: "2150", img: "Dragon-Tiger-da-Sorte.webp",
      name: "dragon",
      alt: "dragon",
      provider: "SN",
      type: "",
    },
    {
      code: "481004", img: "EZ-Dealer-Roleta-Brazileira.webp",
      name: "Ez-Brazil",
      alt: "Ez-Brazil",
      provider: "SN",
      type: "",
    },
    {
      code: "481000", img: "EZ-Dealer-Roulette-English.webp",
      name: "ez-english",
      alt: "ez-english",
      provider: "SN",
      type: "",
    },
    {
      code: "481002", img: "EZ-Dealer-Roulette-Japanese.webp",
      name: "ez-japan",
      alt: "ez-japan",
      provider: "SN",
      type: "",
    },
    {
      code: "481003", img: "EZ-Dealer-Roulette-Mandarin.webp",
      name: "ez-mandarin",
      alt: "ez-mandarin",
      provider: "SN",
      type: "",
    },
    {
      code: "481001", img: "EZ-Dealer-Roulette-Thai.webp",
      name: "EZ Dealer Roulette Thai",
      alt: "EZ Roulette Thai",
      provider: "SN",
      type: "",
    },
    {
      code: "102", img: "Fortune-Baccarat.webp",
      name: "Fortune Baccarat",
      alt: "Fortune Bacc",
      provider: "SN",
      type: "",
    },
    {
      code: "4", img: "Gold-Blacckjack-4.webp",
      name: "Gold Blackjack 4",
      alt: "Gold BJ 4",
      provider: "SN",
      type: "",
    },
    {
      code: "204", img: "gOLD-bLACKjACK-1.webp",
      name: "Gold Blackjack 1",
      alt: "Gold BJ 1",
      provider: "SN",
      type: "",
    },
    {
      code: "203", img: "Gold-blackjack-3.webp",
      name: "Gold Blackjack 3",
      alt: "Gold BJ 3",
      provider: "SN",
      type: "",
    },
    {
      code: "1", img: "Gold-BlackJack-5.webp",
      name: "Gold Blackjack 5",
      alt: "Gold BJ 5",
      provider: "SN",
      type: "",
    },
    {
      code: "223", img: "Gold-blackjack-6.webp",
      name: "Gold Blackjack 6",
      alt: "Gold BJ 6",
      provider: "SN",
      type: "",
    },
    {
      code: "120", img: "Knockout-Baccarat.webp",
      name: "Knockout Baccarat",
      alt: "KO Baccarat",
      provider: "SN",
      type: "",
    },
    {
      code: "228001", img: "Lucky-7.webp",
      name: "Lucky 7",
      alt: "Lucky 7",
      provider: "SN",
      type: "",
    },
    {
      code: "221005", img: "Namaste-Roulette.webp",
      name: "Namaste Roulette",
      alt: "Namaste Roul",
      provider: "SN",
      type: "",
    },
    {
      code: "227103", img: "One-Day-Teen-Patti.webp",
      name: "One Day Teen Patti",
      alt: "1D Teen Patti",
      provider: "SN",
      type: "",
    },
    {
      code: "611003", img: "Oracle-360-Roulette.webp",
      name: "Oracle 360 Roulette",
      alt: "Oracle 360",
      provider: "SN",
      type: "",
    },
    {
      code: "611001", img: "Oracle-Roulette-2.webp",
      name: "Oracle Roulette 2",
      alt: "Oracle Roul 2",
      provider: "SN",
      type: "",
    },
    {
      code: "221004", img: "PAR_Roulte.webp",
      name: "PAR Roulette",
      alt: "PAR Roul",
      provider: "SN",
      type: "",
    },
    {
      code: "611000", img: "Portomaso-Roulette-2.webp",
      name: "Portomaso Roulette 2",
      alt: "Portomaso 2",
      provider: "SN",
      type: "",
    },
    {
      code: "241000", img: "Roleta-da-sorte.webp",
      name: "Roleta da Sorte",
      alt: "Roleta Sorte",
      provider: "SN",
      type: "",
    },
    {
      code: "271000", img: "Ruleta-A.png-1.webp",
      name: "Ruleta A",
      alt: "Ruleta A",
      provider: "SN",
      type: "",
    },
    {
      code: "411", img: "Rumba-Blackjack-1.webp",
      name: "Rumba Blackjack 1",
      alt: "Rumba BJ 1",
      provider: "SN",
      type: "",
    },
    {
      code: "412", img: "Rumba-blackjack-2.webp",
      name: "Rumba Blackjack 2",
      alt: "Rumba BJ 2",
      provider: "SN",
      type: "",
    },
    {
      code: "413", img: "Rumba-blackjack-3.webp",
      name: "Rumba Blackjack 3",
      alt: "Rumba BJ 3",
      provider: "SN",
      type: "",
    },
    {
      code: "414", img: "Rumba-blackjack-4.webp",
      name: "Rumba Blackjack 4",
      alt: "Rumba BJ 4",
      provider: "SN",
      type: "",
    },
    {
      code: "425", img: "Russian-Blackjack-1.webp",
      name: "Russian Blackjack 1",
      alt: "Russian BJ 1",
      provider: "SN",
      type: "",
    },
    {
      code: "426", img: "Russian-Blackjack-2.webp",
      name: "Russian Blackjack 2",
      alt: "Russian BJ 2",
      provider: "SN",
      type: "",
    },
    {
      code: "537000", img: "Russian-Poker.webp",
      name: "Russian Poker",
      alt: "Russian Poker",
      provider: "SN",
      type: "",
    },
    {
      code: "227", img: "Salon-Prive-Blackjack.webp",
      name: "Salon Prive Blackjack",
      alt: "Salon BJ",
      provider: "SN",
      type: "",
    },
    {
      code: "224000", img: "Sicbo.webp",
      name: "Sicbo",
      alt: "Sicbo",
      provider: "SN",
      type: "",
    },
    {
      code: "221008", img: "Skyline-Roulette.webp",
      name: "Skyline Roulette",
      alt: "Skyline Roul",
      provider: "SN",
      type: "",
    },
    {
      code: "411000", img: "Spanish-Roulette.webp",
      name: "Spanish Roulette",
      alt: "Spanish Roul",
      provider: "SN",
      type: "",
    },
    {
      code: "221002", img: "Speed-Auto-Roulette.webp",
      name: "Speed Auto Roulette",
      alt: "Speed Auto Roul",
      provider: "SN",
      type: "",
    },
    {
      code: "101", img: "Speed-Cricket-Baccarat.webp",
      name: "Speed Cricket Baccarat",
      alt: "Speed Cricket Bacc",
      provider: "SN",
      type: "",
    },
    {
      code: "105", img: "Speed-Fortune-Baccarat.webp",
      name: "Speed Fortune Baccarat",
      alt: "Speed Fortune Bacc",
      provider: "SN",
      type: "",
    },
    {
      code: "221000", img: "Speed-Roulette.webp",
      name: "Speed Roulette",
      alt: "Speed Roul",
      provider: "SN",
      type: "",
    },
    {
      code: "130", img: "Super-6-Baccarat.webp",
      name: "Super 6 Baccarat",
      alt: "Super 6 Bacc",
      provider: "SN",
      type: "",
    },
    {
      code: "227100", img: "Teen-Patti-3-Card.webp",
      name: "Teen Patti 3 Card",
      alt: "Teen Patti 3",
      provider: "SN",
      type: "",
    },
    {
      code: "224", img: "Three-Card-Poker.webp",
      name: "Three Card Poker",
      alt: "3 Card Poker",
      provider: "SN",
      type: "",
    },
    {
      code: "421", img: "Turkish-Blackjack-1.webp",
      name: "Turkish Blackjack 1",
      alt: "Turkish BJ 1",
      provider: "SN",
      type: "",
    },
    {
      code: "422", img: "Turkish-Blackjack-2.webp",
      name: "Turkish Blackjack 2",
      alt: "Turkish BJ 2",
      provider: "SN",
      type: "",
    },
    {
      code: "501000", img: "Turkish-Roulette.webp",
      name: "Turkish Roulette",
      alt: "Turkish Roul",
      provider: "SN",
      type: "",
    },
    {
      code: "5051", img: "Turkish-Unlimited-Blackjack.webp",
      name: "Turkish Unlimited Blackjack",
      alt: "Turkish Unlimited BJ",
      provider: "SN",
      type: "",
    },
    {
      code: "228100", img: "Ultimate-Andar-Bahar.webp",
      name: "Ultimate Andar Bahar",
      alt: "Ultimate AB",
      provider: "SN",
      type: "",
    },
    {
      code: "541000", img: "Ultimate-Roulette.webp",
      name: "Ultimate Roulette",
      alt: "Ultimate Roul",
      provider: "SN",
      type: "",
    },
    {
      code: "224100", img: "Ultimate-Sic-Bo.webp",
      name: "Ultimate Sic Bo",
      alt: "Ultimate Sic Bo",
      provider: "SN",
      type: "",
    },
    {
      code: "51", img: "Unlimited-Blackjack.webp",
      name: "Unlimited Blackjack",
      alt: "Unlimited BJ",
      provider: "SN",
      type: "",
    },
    {
      code: "225", img: "VIP-Diamond-Blackjack.webp",
      name: "VIP Diamond Blackjack",
      alt: "VIP Diamond BJ",
      provider: "SN",
      type: "",
    },
    {
      code: "106", img: "VIP-Fortune-Baccarat.webp",
      name: "VIP Fortune Baccarat",
      alt: "VIP Fortune Bacc",
      provider: "SN",
      type: "",
    },
    {
      code: "171", img: "VIP-No-Commission-Speed-Cricket-Baccarat.webp",
      name: "VIP No Commission Speed Cricket Baccarat",
      alt: "VIP No Comm Speed Cricket Bacc",
      provider: "SN",
      type: "",
    }
  ];

  const casinoGames = [
    {
      code: "VC32",
      img: "/new-casino-img/Supernova/32-Cards.webp",
      name: "32 Cards",
      alt: "32 Cards",
      provider: "SN",
      type: "",
    },
    {
      code: "ARW",
      img: "/new-casino-img/Supernova/Akbar-Romeo-Walter.webp",
      name: "Akbar Romeo Walter",
      alt: "ARW",
      provider: "SN",
      type: "",
    },
    {
      code: "AB",
      img: "/new-casino-img/Supernova/Andar-Bahar.webp",
      name: "Andar Bahar",
      alt: "Andar Bahar",
      provider: "SN",
      type: "",
    },
    {
      code: "AB",
      img: "/new-casino-img/Supernova/Andar-Bahar-Yellow.webp",
      name: "Andar Bahar Yellow",
      alt: "Andar Bahar Yellow",
      provider: "SN",
      type: "",
    },
    {
      code: "BAC",
      img: "/new-casino-img/Supernova/Baccarat.webp",
      name: "Baccarat",
      alt: "Baccarat",
      provider: "SN",
      type: "",
    },
    {
      code: "ABC",
      img: "/new-casino-img/Supernova/Classic-Andar-Bahar.webp",
      name: "Classic Andar Bahar",
      alt: "Classic AB",
      provider: "SN",
      type: "",
    },
    {
      code: "DT7M",
      img: "/new-casino-img/Supernova/dragon-tiger.webp",
      name: "Dragon Tiger",
      alt: "Dragon Tiger",
      provider: "SN",
      type: "",
    },
    {
      code: "AB2",
      img: "/new-casino-img/Supernova/Goas-Andar-Bahar.webp",
      name: "Goas Andar Bahar",
      alt: "Goas AB",
      provider: "SN",
      type: "",
    },
    {
      code: "VCR",
      img: "/new-casino-img/Supernova/king-race.webp",
      name: "King Race",
      alt: "King Race",
      provider: "SN",
      type: "",
    },
    {
      code: "UD7",
      img: "/new-casino-img/Supernova/Lucky-7.webp",
      name: "Lucky 7",
      alt: "Lucky 7",
      provider: "SN",
      type: "",
    },
    {
      code: "MTP7M",
      img: "/new-casino-img/Supernova/Muflis-teenpatti.webp",
      name: "Muflis Teenpatti",
      alt: "Muflis Patti",
      provider: "SN",
      type: "",
    },
    {
      code: "VTP20",
      img: "/new-casino-img/Supernova/Teen-Patti-2020.webp",
      name: "Teen Patti 2020",
      alt: "Patti 2020",
      provider: "SN",
      type: "",
    },
    {
      code: "VTP20",
      img: "/new-casino-img/Supernova/Teen-Patti-2020.webp",
      name: "Teen Patti 2020",
      alt: "Patti 2020",
      provider: "SN",
      type: "",
    },
    {
      code: "VTP",
      img: "/new-casino-img/Supernova/1-RNG-Teen-Patti_1654174277274.199-(1).webp",
      name: "RNG Teen Patti",
      alt: "RNG Patti",
      provider: "SN",
      type: "",
    },
    {
      code: "VBAC",
      img: "/new-casino-img/Supernova/2-RNG-Baccarat_1654174122016.387.webp",
      name: "RNG Baccarat",
      alt: "RNG Bacc",
      provider: "SN",
      type: "",
    },
    {
      code: "VDT",
      img: "/new-casino-img/Supernova/3-RNG-Dragon-Tiger_1654174186400.0757.webp",
      name: "RNG Dragon Tiger",
      alt: "RNG Dragon Tiger",
      provider: "SN",
      type: "",
    },
    {
      code: "VWM",
      img: "/new-casino-img/Supernova/5-RNG-Worli-Matka_1654174294949.6729.webp",
      name: "RNG Worli Matka",
      alt: "RNG Matka",
      provider: "SN",
      type: "",
    },
    {
      code: "VARW",
      img: "/new-casino-img/Supernova/6-RNG-ARW_1654174098050.0847.webp",
      name: "RNG ARW",
      alt: "RNG ARW",
      provider: "SN",
      type: "",
    },
    {
      code: "VTP",
      img: "/new-casino-img/Supernova/7-RNG-3patti2020_1654174287868.55.webp",
      name: "RNG 3patti 2020",
      alt: "RNG 3patti",
      provider: "SN",
      type: "",
    },
    {
      code: "VC32",
      img: "/new-casino-img/Supernova/8-RNG-32Cards_1654174090231.0889.webp",
      name: "RNG 32 Cards",
      alt: "RNG 32 Cards",
      provider: "SN",
      type: "",
    },
    {
      code: "VUD7",
      img: "/new-casino-img/Supernova/10-RNG-Lucky-7_1654174238397.5676-(1).webp",
      name: "RNG Lucky 7",
      alt: "RNG Lucky 7",
      provider: "SN",
      type: "",
    },
    {
      code: "VDT",
      img: "/new-casino-img/Supernova/12-RNG-Dragon-tiger-2020_1654174197536.3057.webp",
      name: "RNG Dragon Tiger 2020",
      alt: "RNG Dragon Tiger",
      provider: "SN",
      type: "",
    },
    {
      code: "RCQ20",
      img: "/new-casino-img/Supernova/20-RNG-casino-queen_1654174167060.9355.webp",
      name: "RNG Casino Queen",
      alt: "RNG Casino Queen",
      provider: "SN",
      type: "",
    },
    {
      code: "VJKR",
      img: "/new-casino-img/Supernova/21-RNG-Joker_1654174209032.3987.webp",
      name: "RNG Joker",
      alt: "RNG Joker",
      provider: "SN",
      type: "",
    },
    {
      code: "RCQ",
      img: "/new-casino-img/Supernova/23-RNG-queen_1654174151635.7964.webp",
      name: "RNG Queen",
      alt: "RNG Queen",
      provider: "SN",
      type: "",
    }
  ];

  const spbGames = [
    {
      code: "aviator",
      img: "/new-casino-img/spribe/Aviator.webp",
      name: "Aviator",
      alt: "Aviator",
      provider: "SPB",
      type: "",
    },
    {
      code: "dice",
      img: "/new-casino-img/spribe/Dice.webp",
      name: "Dice",
      alt: "Dice",
      provider: "SPB",
      type: "",
    },
    {
      code: "goal",
      img: "/new-casino-img/spribe/Goal.webp",
      name: "Goal",
      alt: "Goal",
      provider: "SPB",
      type: "",
    },
    {
      code: "hi-lo",
      img: "/new-casino-img/spribe/Hilo.webp",
      name: "Hi Lo",
      alt: "Hi Lo",
      provider: "SPB",
      type: "",
    },
    {
      code: "hotline",
      img: "/new-casino-img/spribe/Hotline.webp",
      name: "Hotline",
      alt: "Hotline",
      provider: "SPB",
      type: "",
    },
    {
      code: "multikeno",
      img: "/new-casino-img/spribe/Keno-80.webp",
      name: "Keno 80",
      alt: "Keno 80",
      provider: "SPB",
      type: "",
    },
    {
      code: "keno",
      img: "/new-casino-img/spribe/Keno.webp",
      name: "Keno",
      alt: "Keno",
      provider: "SPB",
      type: "",
    },
    {
      code: "mines",
      img: "/new-casino-img/spribe/Mines.webp",
      name: "Mines",
      alt: "Mines",
      provider: "SPB",
      type: "",
    },
    {
      code: "plinko",
      img: "/new-casino-img/spribe/Plinko.webp",
      name: "Plinko",
      alt: "Plinko",
      provider: "SPB",
      type: "",
    },
    {
      code: "poker",
      img: "/new-casino-img/spribe/Poker.webp",
      name: "Poker",
      alt: "Poker",
      provider: "SPB",
      type: "",
    },
    {
      code: "mini-roulette",
      img: "/new-casino-img/spribe/ROULETTE.webp",
      name: "Mini Roulette",
      alt: "Mini Roulette",
      provider: "SPB",
      type: "",
    }
  ];

  const btGames = [
    {
      code: "220013",
      img: "/new-casino-img/betterlive/Aisan-BlackJack.webp",
      name: "Aisan BlackJack",
      alt: "Aisan BJ",
      provider: "DC",
      type: "",
    },
    {
      code: "220003",
      img: "/new-casino-img/betterlive/Auto-Roulette.webp",
      name: "Auto Roulette",
      alt: "Auto Roul",
      provider: "DC",
      type: "",
    },
    {
      code: "220011",
      img: "/new-casino-img/betterlive/Bet-On-Teen-Patti.webp",
      name: "Bet On Teen Patti",
      alt: "Bet Patti",
      provider: "DC",
      type: "",
    },
    {
      code: "220010",
      img: "/new-casino-img/betterlive/Gravity-BlackJack.webp",
      name: "Gravity BlackJack",
      alt: "Gravity BJ",
      provider: "DC",
      type: "",
    },
    {
      code: "220014",
      img: "/new-casino-img/betterlive/Gravity-Roulette.webp",
      name: "Gravity Roulette",
      alt: "Gravity Roul",
      provider: "DC",
      type: "",
    },
    {
      code: "220016",
      img: "/new-casino-img/betterlive/Live-Sic-Bo.webp",
      name: "Live Sic Bo",
      alt: "Sic Bo",
      provider: "DC",
      type: "",
    },
    {
      code: "220006",
      img: "/new-casino-img/betterlive/Live-Baccarat-1.webp",
      name: "Live Baccarat 1",
      alt: "Live Bacc 1",
      provider: "DC",
      type: "",
    },
    {
      code: "220008",
      img: "/new-casino-img/betterlive/Live-Baccarat-2.webp",
      name: "Live Baccarat 2",
      alt: "Live Bacc 2",
      provider: "DC",
      type: "",
    },
    {
      code: "220009",
      img: "/new-casino-img/betterlive/Live-Baccarat-2-NC.webp",
      name: "Live Baccarat 2 NC",
      alt: "Live Bacc 2 NC",
      provider: "DC",
      type: "",
    },
    {
      code: "220015",
      img: "/new-casino-img/betterlive/Live-BlackJack-5.webp",
      name: "Live BlackJack 5",
      alt: "Live BJ 5",
      provider: "DC",
      type: "",
    },
    {
      code: "220002",
      img: "/new-casino-img/betterlive/Live-French-Roulette.webp",
      name: "Live French Roulette",
      alt: "French Roul",
      provider: "DC",
      type: "",
    },
    {
      code: "220001",
      img: "/new-casino-img/betterlive/Live-Roulette.webp",
      name: "Live Roulette",
      alt: "Live Roul",
      provider: "DC",
      type: "",
    }
  ];

  const hoGames = [
    {
      code: "HOG-a1sapphirebaccarat",
      img: "/new-casino-img/hogaming/A1-Sapphire-Baccarat.webp",
      name: "A1 Sapphire Baccarat",
      alt: "A1 Sapphire Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-c1speedbaccarat",
      img: "/new-casino-img/hogaming/C1-Speed-Baccarat.webp",
      name: "C1 Speed Baccarat",
      alt: "C1 Speed Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-c2speedbaccarat",
      img: "/new-casino-img/hogaming/C2-Speed-Baccarat.webp",
      name: "C2 Speed Baccarat",
      alt: "C2 Speed Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-c3speedbaccarat",
      img: "/new-casino-img/hogaming/C3-speed-Baccarat.webp",
      name: "C3 Speed Baccarat",
      alt: "C3 Speed Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-c4immersivespeedbaccarat",
      img: "/new-casino-img/hogaming/C4-Speed-baccarat.webp",
      name: "C4 Immersive Speed Baccarat",
      alt: "C4 Immersive Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-c5speedbaccarat",
      img: "/new-casino-img/hogaming/C5-Speed-baccarat.webp",
      name: "C5 Speed Baccarat",
      alt: "C5 Speed Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-c7speedbaccarat",
      img: "/new-casino-img/hogaming/C7-Speed-Baccarat.webp",
      name: "C7 Speed Baccarat",
      alt: "C7 Speed Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-c8baccarat",
      img: "/new-casino-img/hogaming/C8-Baccarat.webp",
      name: "C8 Baccarat",
      alt: "C8 Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-c9baccarat",
      img: "/new-casino-img/hogaming/C9-Baccarat.webp",
      name: "C9 Baccarat",
      alt: "C9 Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-dt2dragontiger",
      img: "/new-casino-img/hogaming/DT2-DragonTiger.webp",
      name: "DT2 Dragon Tiger",
      alt: "DT2 Dragon Tiger",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-j2blackjack",
      img: "/new-casino-img/hogaming/J2-Blackjack.webp",
      name: "J2 Blackjack",
      alt: "J2 BJ",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-n1baccarat",
      img: "/new-casino-img/hogaming/N1-Baccarat.webp",
      name: "N1 Baccarat",
      alt: "N1 Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-n1blackjack",
      img: "/new-casino-img/hogaming/N1-Blackjack.webp",
      name: "N1 Blackjack",
      alt: "N1 BJ",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-n1roulette",
      img: "/new-casino-img/hogaming/N1-Roulette.webp",
      name: "N1 Roulette",
      alt: "N1 Roul",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-n2speedbaccarat",
      img: "/new-casino-img/hogaming/N2-Speed-Baccarat.webp",
      name: "N2 Speed Baccarat",
      alt: "N2 Speed Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-n3baccarat",
      img: "/new-casino-img/hogaming/N3-Baccarat.webp",
      name: "N3 Baccarat",
      alt: "N3 Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-n4immersivebaccarat",
      img: "/new-casino-img/hogaming/N4-Immersive-Bacarat.webp",
      name: "N4 Immersive Baccarat",
      alt: "N4 Immersive Bacc",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-s1roulette",
      img: "/new-casino-img/hogaming/S1-Roulette.webp",
      name: "S1 Roulette",
      alt: "S1 Roul",
      provider: "QT",
      type: "",
    },
    {
      code: "HOG-s2roulette",
      img: "/new-casino-img/hogaming/S2-Roulette.webp",
      name: "S2 Roulette",
      alt: "S2 Roul",
      provider: "QT",
      type: "",
    }
  ];

  const evzGames = [
    {
      code: "1000011",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/American-Roulette.webp",
      name: "American Roulette",
      alt: "American Roul",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000078",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Arabic-Roulette.webp",
      name: "Arabic Roulette",
      alt: "Arabic Roul",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000371",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Crazy-Coin-Flip.webp",
      name: "Crazy Coin Flip",
      alt: "Crazy Coin",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000543",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Crazy-pachinko.webp",
      name: "Crazy Pachinko",
      alt: "Crazy Pachinko",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000096",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/monopoly.webp",
      name: "Monopoly",
      alt: "Monopoly",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000123",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Auto-Roulette.webp",
      name: "Auto Roulette",
      alt: "Auto Roul",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000153",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Auto-Roulette-La-Partage.webp",
      name: "Auto Roulette La Partage",
      alt: "Auto Roul Partage",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000126",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Auto-Roulette-VIP.webp",
      name: "Auto Roulette VIP",
      alt: "Auto Roul VIP",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000360",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Bac-bo.webp",
      name: "Bac Bo",
      alt: "Bac Bo",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000016",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Bac-bo.webp",
      name: "Bac Bo",
      alt: "Bac Bo",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000012",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Baccarat-A.webp",
      name: "Baccarat A",
      alt: "Baccarat A",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000013",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Baccarat-B.webp",
      name: "Baccarat B",
      alt: "Baccarat B",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000015",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Baccarat-Control-Squeeze.webp",
      name: "Baccarat Control Squeeze",
      alt: "Baccarat Squeeze",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000148",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Crazy-Time-A.webp",
      name: "Crazy Time A",
      alt: "Crazy Time",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000072",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Deal-or-No-Deal.webp",
      name: "Deal or No Deal",
      alt: "Deal No Deal",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000500",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Extra-chilli.webp",
      name: "Extra Chilli",
      alt: "Extra Chilli",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000353",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Fan-Tan.webp",
      name: "Fan Tan",
      alt: "Fan Tan",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000249",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/First-Person-Craps.webp",
      name: "First Person Craps",
      alt: "FP Craps",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000142",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/First-Person-Mega-Ball.webp",
      name: "First Person Mega Ball",
      alt: "FP Mega Ball",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000030",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/BlackJack-A.webp",
      name: "BlackJack A",
      alt: "BJ A",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000032",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/BlackJack-C.webp",
      name: "BlackJack C",
      alt: "BJ C",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000167",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-7.webp",
      name: "Blackjack Classic 7",
      alt: "BJ Classic 7",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000224",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-8.webp",
      name: "Blackjack Classic 8",
      alt: "BJ Classic 8",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000144",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/First-Person-Top-Card.webp",
      name: "First Person Top Card",
      alt: "FP Top Card",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000443",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Football-Studio-Dice.webp",
      name: "Football Studio Dice",
      alt: "Football Dice",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000501",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/funky-time.webp",
      name: "Funky Time",
      alt: "Funky Time",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000536",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Gonzo-Treasure-Map.webp",
      name: "Gonzo Treasure Map",
      alt: "Gonzo Treasure",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100022",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Gonzo-tresure-hunt-Live.webp",
      name: "Gonzo Treasure Hunt Live",
      alt: "Gonzo Hunt Live",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000141",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Megaball.webp",
      name: "Megaball",
      alt: "Megaball",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000168",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-9.webp",
      name: "Blackjack Classic 9",
      alt: "BJ Classic 9",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000173",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-17.webp",
      name: "Blackjack Classic 17",
      alt: "BJ Classic 17",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000174",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-18.webp",
      name: "Blackjack Classic 18",
      alt: "BJ Classic 18",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000176",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-20.webp",
      name: "Blackjack Classic 20",
      alt: "BJ Classic 20",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000225",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-24.webp",
      name: "Blackjack Classic 24",
      alt: "BJ Classic 24",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000178",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-25.webp",
      name: "Blackjack Classic 25",
      alt: "BJ Classic 25",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000197",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-44.webp",
      name: "Blackjack Classic 44",
      alt: "BJ Classic 44",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000198",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-45.webp",
      name: "Blackjack Classic 45",
      alt: "BJ Classic 45",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000199",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-46.webp",
      name: "Blackjack Classic 46",
      alt: "BJ Classic 46",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000200",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-47.webp",
      name: "Blackjack Classic 47",
      alt: "BJ Classic 47",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000220",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-67.webp",
      name: "Blackjack Classic 67",
      alt: "BJ Classic 67",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000221",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-68.webp",
      name: "Blackjack Classic 68",
      alt: "BJ Classic 68",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000222",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-69.webp",
      name: "Blackjack Classic 69",
      alt: "BJ Classic 69",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000245",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-70.webp",
      name: "Blackjack Classic 70",
      alt: "BJ Classic 70",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000246",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-71.webp",
      name: "Blackjack Classic 71",
      alt: "BJ Classic 71",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000247",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Blackjack-Classic-72.webp",
      name: "Blackjack Classic 72",
      alt: "BJ Classic 72",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000164",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/blackjack-gamma.webp",
      name: "Blackjack Gamma",
      alt: "BJ Gamma",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000164",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/BlackJack-L.webp",
      name: "BlackJack L",
      alt: "BJ L",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000445",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Brazilian-Roulette.webp",
      name: "Brazilian Roulette",
      alt: "Brazilian Roul",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000352",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Cash-or-Crash.webp",
      name: "Cash or Crash",
      alt: "Cash Crash",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000075",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Casino-Hold_em.webp",
      name: "Casino Hold'em",
      alt: "Casino Hold'em",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000444",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Dead-or-Alive-saloon.webp",
      name: "Dead or Alive Saloon",
      alt: "Dead Alive",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1000354",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Hindi-Roulette.webp",
      name: "Hindi Roulette",
      alt: "Hindi Roul",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100129",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/4-Sqaure.webp",
      name: "4 Square",
      alt: "4 Square",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100130",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/5-Families.webp",
      name: "5 Families",
      alt: "5 Families",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100322",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/10,001-Nights-Megaways.webp",
      name: "10,001 Nights Megaways",
      alt: "10001 Nights",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100230",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/24-Hour-Grand-Prix.webp",
      name: "24 Hour Grand Prix",
      alt: "24H Grand Prix",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100324",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/80s-Spins.webp",
      name: "80s Spins",
      alt: "80s Spins",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100031",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/777-Strike.webp",
      name: "777 Strike",
      alt: "777 Strike",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100323",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/1942-Sky-Warrior.webp",
      name: "1942 Sky Warrior",
      alt: "1942 Sky Warrior",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100003",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/10001-nights.webp",
      name: "10001 Nights",
      alt: "10001 Nights",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100131",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Agent-Royale.webp",
      name: "Agent Royale",
      alt: "Agent Royale",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100325",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Age-Of-Akkadia.webp",
      name: "Age Of Akkadia",
      alt: "Age Akkadia",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100326",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Ali-Baba_s-Luck.webp",
      name: "Ali Baba's Luck",
      alt: "Ali Baba",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100327",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Ali-Baba_s-Luck-Megaways.webp",
      name: "Ali Baba's Luck Megaways",
      alt: "Ali Baba MW",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100328",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Ali-Baba_s-Luck-Power-Reels.webp",
      name: "Ali Baba's Luck Power Reels",
      alt: "Ali Baba PR",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100032",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Aloha!-Christmas.webp",
      name: "Aloha! Christmas",
      alt: "Aloha Xmas",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100033",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Aloha!-Cluster-Pays.webp",
      name: "Aloha! Cluster Pays",
      alt: "Aloha Cluster",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100329",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Amazon-Island-Megaways.webp",
      name: "Amazon Island Megaways",
      alt: "Amazon MW",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100330",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Ancient-Disco.webp",
      name: "Ancient Disco",
      alt: "Ancient Disco",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100231",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Ancient-Script.webp",
      name: "Ancient Script",
      alt: "Ancient Script",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100331",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Apache-Way.webp",
      name: "Apache Way",
      alt: "Apache Way",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100132",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Arcade-Bomb.webp",
      name: "Arcade Bomb",
      alt: "Arcade Bomb",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100318",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Arcane-Reel-Chaos.webp",
      name: "Arcane Reel Chaos",
      alt: "Arcane Chaos",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100313",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Archangels-Salvation.webp",
      name: "Archangels Salvation",
      alt: "Archangels",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100096",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Asgardian-Stones.webp",
      name: "Asgardian Stones",
      alt: "Asgardian",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100332",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Asian-Fortune.webp",
      name: "Asian Fortune",
      alt: "Asian Fortune",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100333",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Athens-Megaways.webp",
      name: "Athens Megaways",
      alt: "Athens MW",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100133",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Atlantis.webp",
      name: "Atlantis",
      alt: "Atlantis",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100419",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Zillard-King.webp",
      name: "Zillard King",
      alt: "Zillard King",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100418",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Zaidas-Fortune.webp",
      name: "Zaidas Fortune",
      alt: "Zaidas Fortune",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100185",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Yucatan`s-Mystery.webp",
      name: "Yucatan's Mystery",
      alt: "Yucatan Mystery",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100228",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Wings-of-Riches.webp",
      name: "Wings of Riches",
      alt: "Wings Riches",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100126",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Wild-Water.webp",
      name: "Wild Water",
      alt: "Wild Water",
      provider: "EVZ",
      type: "",
    },
    {
      code: "1100282",
      extra: "EV",
      img: "/new-casino-img/evolutionlive/Wild-Fight.webp",
      name: "Wild Fight",
      alt: "Wild Fight",
      provider: "EVZ",
      type: "",
    }
  ];

  const royalGames = [
    {
      code: "900025",
      img: "/new-casino-img/royalgaming/2-Card-teenpatti.webp",
      name: "2-Card-teenpatti",
      alt: "2-Card-teenpatti",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900039",
      img: "/new-casino-img/royalgaming/2-Card-Teenpatti-One-day.webp",
      name: "2-Card-Teenpatti-One-day",
      alt: "2-Card-Teenpatti-One-day",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900025",
      img: "/new-casino-img/royalgaming/2-Card-Teenpattu.webp",
      name: "2-Card-Teenpattu",
      alt: "2-Card-Teenpattu",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900008",
      img: "/new-casino-img/royalgaming/3-Card-Judgenment.webp",
      name: "3-Card-Judgenment",
      alt: "3-Card-Judgenment",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900008",
      img: "/new-casino-img/royalgaming/3-card-judgermemt.webp",
      name: "3-card-judgermemt",
      alt: "3-card-judgermemt",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900001",
      img: "/new-casino-img/royalgaming/7up-and-Down.webp",
      name: "7up-and-Down",
      alt: "7up-and-Down",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900026",
      img: "/new-casino-img/royalgaming/29-card-vaccarat.webp",
      name: "29-card-vaccarat",
      alt: "29-card-vaccarat",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900024",
      img: "/new-casino-img/royalgaming/32-Card.webp",
      name: "32-Card",
      alt: "32-Card",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900023",
      img: "/new-casino-img/royalgaming/Akbar-Romeo-Walter.webp",
      name: "Akbar-Romeo-Walter",
      alt: "Akbar-Romeo-Walter",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901007",
      img: "/new-casino-img/royalgaming/Amar-akbar-anthony.webp",
      name: "Amar-akbar-anthony",
      alt: "Amar-akbar-anthony",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900009",
      img: "/new-casino-img/royalgaming/Casino-War.webp",
      name: "Casino-War",
      alt: "Casino-War",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900046",
      img: "/new-casino-img/royalgaming/Center-Card.webp",
      name: "Center-Card",
      alt: "Center-Card",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901016",
      img: "/new-casino-img/royalgaming/Dragon-Tiger-One-day-1.webp",
      name: "Dragon-Tiger-One-day-1",
      alt: "Dragon-Tiger-One-day-1",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900021",
      img: "/new-casino-img/royalgaming/King-Race.webp",
      name: "King-Race",
      alt: "King-Race",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901018",
      img: "/new-casino-img/royalgaming/29-card-baccarat.webp",
      name: "29-card-baccarat",
      alt: "29-card-baccarat",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900014",
      img: "/new-casino-img/royalgaming/Hi-low-2.webp",
      name: "Hi-low-2",
      alt: "Hi-low-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900006",
      img: "/new-casino-img/royalgaming/Baccarat-2.webp",
      name: "Baccarat-2",
      alt: "Baccarat-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900011",
      img: "/new-casino-img/royalgaming/Bollywood-Casino.webp",
      name: "Bollywood-Casino",
      alt: "Bollywood-Casino",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900022",
      img: "/new-casino-img/royalgaming/Casino-Meter.webp",
      name: "Casino-Meter",
      alt: "Casino-Meter",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900022",
      img: "/new-casino-img/royalgaming/Casino-Meter-1.webp",
      name: "Casino-Meter-1",
      alt: "Casino-Meter-1",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900046",
      img: "/new-casino-img/royalgaming/Center-Card-1.webp",
      name: "Center-Card-1",
      alt: "Center-Card-1",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900005",
      img: "/new-casino-img/royalgaming/Cricket-War-2.webp",
      name: "Cricket-War-2",
      alt: "Cricket-War-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900004",
      img: "/new-casino-img/royalgaming/Dragon-Tiger.webp",
      name: "Dragon-Tiger",
      alt: "Dragon-Tiger",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900031",
      img: "/new-casino-img/royalgaming/Dragon-Tiger-Lion-2.webp",
      name: "Dragon-Tiger-Lion-2",
      alt: "Dragon-Tiger-Lion-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900027",
      img: "/new-casino-img/royalgaming/Dragon-Tiger-One-day.webp",
      name: "Dragon-Tiger-One-day",
      alt: "Dragon-Tiger-One-day",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900020",
      img: "/new-casino-img/royalgaming/Football-Studio-2.webp",
      name: "Football-Studio-2",
      alt: "Football-Studio-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901046",
      img: "/new-casino-img/royalgaming/High-Card.webp",
      name: "High-Card",
      alt: "High-Card",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900012",
      img: "/new-casino-img/royalgaming/Lottery.webp",
      name: "Lottery",
      alt: "Lottery",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900029",
      img: "/new-casino-img/royalgaming/Movie-Casino.webp",
      name: "Movie-Casino",
      alt: "Movie-Casino",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900029",
      img: "/new-casino-img/royalgaming/Movie-Casino-2.webp",
      name: "Movie-Casino-2",
      alt: "Movie-Casino-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900075",
      img: "/new-casino-img/royalgaming/Roulette-2.webp",
      name: "Roulette-2",
      alt: "Roulette-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900034",
      img: "/new-casino-img/royalgaming/Side-Bet-City.webp",
      name: "Side-Bet-City",
      alt: "Side-Bet-City",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900035",
      img: "/new-casino-img/royalgaming/Super-Over.webp",
      name: "Super-Over",
      alt: "Super-Over",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900035",
      img: "/new-casino-img/royalgaming/Super-Over-2.webp",
      name: "Super-Over-2",
      alt: "Super-Over-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900003",
      img: "/new-casino-img/royalgaming/Teenpatti.webp",
      name: "Teenpatti",
      alt: "Teenpatti",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900003",
      img: "/new-casino-img/royalgaming/Teenpatti-3.webp",
      name: "Teenpatti-3",
      alt: "Teenpatti-3",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900019",
      img: "/new-casino-img/royalgaming/Teenpatti-one-day.webp",
      name: "Teenpatti-one-day",
      alt: "Teenpatti-one-day",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900013",
      img: "/new-casino-img/royalgaming/Book-Cricket.webp",
      name: "Book-Cricket",
      alt: "Book-Cricket",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "150018",
      img: "/new-casino-img/royalgaming/Casino-War-2.webp",
      name: "Casino-War-2",
      alt: "Casino-War-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900038",
      img: "/new-casino-img/royalgaming/Ther-Trap-2.webp",
      name: "Ther-Trap-2",
      alt: "Ther-Trap-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "150018",
      img: "/new-casino-img/royalgaming/Casino-War-2.webp",
      name: "Casino-War-2",
      alt: "Casino-War-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901039",
      img: "/new-casino-img/royalgaming/CenterCard-One-Day.webp",
      name: "CenterCard-One-Day",
      alt: "CenterCard-One-Day",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900031",
      img: "/new-casino-img/royalgaming/Dragon-Tiger-Lion.webp",
      name: "Dragon-Tiger-Lion",
      alt: "Dragon-Tiger-Lion",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900004",
      img: "/new-casino-img/royalgaming/Dragon-Tigger-2.webp",
      name: "Dragon-Tigger-2",
      alt: "Dragon-Tigger-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900020",
      img: "/new-casino-img/royalgaming/Football-studio.webp",
      name: "Football-studio",
      alt: "Football-studio",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900014",
      img: "/new-casino-img/royalgaming/Hi-lo.webp",
      name: "Hi-lo",
      alt: "Hi-lo",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900021",
      img: "/new-casino-img/royalgaming/Lucky-7-2.webp",
      name: "Lucky-7-2",
      alt: "Lucky-7-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900015",
      img: "/new-casino-img/royalgaming/Mufli_s-Teenpatti.webp",
      name: "Mufli_s-Teenpatti",
      alt: "Mufli_s-Teenpatti",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900028",
      img: "/new-casino-img/royalgaming/Poker.webp",
      name: "Poker",
      alt: "Poker",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900019",
      img: "/new-casino-img/royalgaming/psd.webp",
      name: "psd",
      alt: "psd",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901047",
      img: "/new-casino-img/royalgaming/Qeen-Race.webp",
      name: "Qeen-Race",
      alt: "Qeen-Race",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900032",
      img: "/new-casino-img/royalgaming/Race-to-17.webp",
      name: "Race-to-17",
      alt: "Race-to-17",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900032",
      img: "/new-casino-img/royalgaming/Race-to-27-2.webp",
      name: "Race-to-27-2",
      alt: "Race-to-27-2",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900075",
      img: "/new-casino-img/royalgaming/Roullette.webp",
      name: "Roullette",
      alt: "Roullette",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901002",
      img: "/new-casino-img/royalgaming/Roullette-VR.webp",
      name: "Roullette-VR",
      alt: "Roullette-VR",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900036",
      img: "/new-casino-img/royalgaming/Speedy-7.webp",
      name: "Speedy-7",
      alt: "Speedy-7",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900035",
      img: "/new-casino-img/royalgaming/SuperOver-One-day.webp",
      name: "SuperOver-One-day",
      alt: "SuperOver-One-day",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900015",
      img: "/new-casino-img/royalgaming/Teenpatti-Muflis.webp",
      name: "Teenpatti-Muflis",
      alt: "Teenpatti-Muflis",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901021",
      img: "/new-casino-img/royalgaming/VR-Andhar-bandar.webp",
      name: "VR-Andhar-bandar",
      alt: "VR-Andhar-bandar",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901032",
      img: "/new-casino-img/royalgaming/VR-Race-T200.webp",
      name: "VR-Race-T200",
      alt: "VR-Race-T200",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900010",
      img: "/new-casino-img/royalgaming/Wolrd-Matka.webp",
      name: "Wolrd-Matka",
      alt: "Wolrd-Matka",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "900010",
      img: "/new-casino-img/royalgaming/Worli-matka.webp",
      name: "Worli-matka",
      alt: "Worli-matka",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "903006",
      img: "/new-casino-img/royalgaming/Bacarat-Classic.webp",
      name: "Bacarat-Classic",
      alt: "Bacarat-Classic",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901046",
      img: "/new-casino-img/royalgaming/High-Card-(1).webp",
      name: "High-Card-(1)",
      alt: "High-Card-(1)",
      provider: "Royal Gaming",
      type: ""
    },
    {
      code: "901002",
      img: "/new-casino-img/royalgaming/VIP-Auto-Roulette.webp",
      name: "VIP-Auto-Roulette",
      alt: "VIP-Auto-Roulette",
      provider: "Royal Gaming",
      type: ""
    }
  ];

  const mac888 = [
    {
      code: "150036",
      img: "/new-casino-img/mac888/1-Day-Dragon-Tiger.webp",
      name: "1-Day-Dragon-Tiger",
      alt: "1-Day-Dragon-Tiger",
      provider: "DC",
      type: ""
    },
    {
      code: "150015",
      img: "/new-casino-img/mac888/3-Cards-Judgement.webp",
      name: "3-Cards-Judgement",
      alt: "3-Cards-Judgement",
      provider: "DC",
      type: ""
    },
    {
      code: "150041",
      img: "/new-casino-img/mac888/6-Player-Poker.webp",
      name: "6-Player-Poker",
      alt: "6-Player-Poker",
      provider: "DC",
      type: ""
    },
    {
      code: "150035",
      img: "/new-casino-img/mac888/5-Five-Cricket.webp",
      name: "5-Five-Cricket",
      alt: "5-Five-Cricket",
      provider: "DC",
      type: ""
    },
    {
      code: "150053",
      img: "/new-casino-img/mac888/10_10_cricket.webp",
      name: "10_10_cricket",
      alt: "10_10_cricket",
      provider: "DC",
      type: ""
    },
    {
      code: "150033",
      img: "/new-casino-img/mac888/20-20-Teenpatti.webp",
      name: "20-20-Teenpatti",
      alt: "20-20-Teenpatti",
      provider: "DC",
      type: ""
    },
    {
      code: "150026",
      img: "/new-casino-img/mac888/29-Baccarat.webp",
      name: "29-Baccarat",
      alt: "29-Baccarat",
      provider: "DC",
      type: ""
    },
    {
      code: "150010",
      img: "/new-casino-img/mac888/32-Cards.webp",
      name: "32-Cards",
      alt: "32-Cards",
      provider: "DC",
      type: ""
    },
    {
      code: "150014",
      img: "/new-casino-img/mac888/Amar-Akbar-Anthony.webp",
      name: "Amar-Akbar-Anthony",
      alt: "Amar-Akbar-Anthony",
      provider: "DC",
      type: ""
    },
    {
      code: "150007",
      img: "/new-casino-img/mac888/Andar-Bahar.webp",
      name: "Andar-Bahar",
      alt: "Andar-Bahar",
      provider: "DC",
      type: ""
    },
    {
      code: "151027",
      img: "/new-casino-img/mac888/AviatorX.webp",
      name: "AviatorX",
      alt: "AviatorX",
      provider: "DC",
      type: ""
    },
    {
      code: "150002",
      img: "/new-casino-img/mac888/Bacarrat.webp",
      name: "Bacarrat",
      alt: "Bacarrat",
      provider: "DC",
      type: ""
    },
    {
      code: "150031",
      img: "/new-casino-img/mac888/Bollywood-Casino-B.webp",
      name: "Bollywood-Casino-B",
      alt: "Bollywood-Casino-B",
      provider: "DC",
      type: ""
    },
    {
      code: "150044",
      img: "/new-casino-img/mac888/Casino-Meter.webp",
      name: "Casino-Meter",
      alt: "Casino-Meter",
      provider: "DC",
      type: ""
    },
    {
      code: "230001",
      img: "/new-casino-img/mac888/Crash.webp",
      name: "Crash",
      alt: "Crash",
      provider: "DC",
      type: ""
    },
    {
      code: "230002",
      img: "/new-casino-img/mac888/Diamonds.webp",
      name: "Diamonds",
      alt: "Diamonds",
      provider: "DC",
      type: ""
    },
    {
      code: "230003",
      img: "/new-casino-img/mac888/Dice.webp",
      name: "Dice",
      alt: "Dice",
      provider: "DC",
      type: ""
    },
    {
      code: "150001",
      img: "/new-casino-img/mac888/Dragon_Tiger.webp",
      name: "Dragon_Tiger",
      alt: "Dragon_Tiger",
      provider: "DC",
      type: ""
    },
    {
      code: "150013",
      img: "/new-casino-img/mac888/DTL.webp",
      name: "DTL",
      alt: "DTL",
      provider: "DC",
      type: ""
    },
    {
      code: "150037",
      img: "/new-casino-img/mac888/Dus-Ka-Dum.webp",
      name: "Dus-Ka-Dum",
      alt: "Dus-Ka-Dum",
      provider: "DC",
      type: ""
    },
    {
      code: "150051",
      img: "/new-casino-img/mac888/high_low.webp",
      name: "high_low",
      alt: "high_low",
      provider: "DC",
      type: ""
    },
    {
      code: "230008",
      img: "/new-casino-img/mac888/Hilo.webp",
      name: "Hilo",
      alt: "Hilo",
      provider: "DC",
      type: ""
    },
    {
      code: "150042",
      img: "/new-casino-img/mac888/Instant-2-Cards-Teenpatti.webp",
      name: "Instant-2-Cards-Teenpatti",
      alt: "Instant-2-Cards-Teenpatti",
      provider: "DC",
      type: ""
    },
    {
      code: "230004",
      img: "/new-casino-img/mac888/Limbo.webp",
      name: "Limbo",
      alt: "Limbo",
      provider: "DC",
      type: ""
    },
    {
      code: "150020",
      img: "/new-casino-img/mac888/Lottery.webp",
      name: "Lottery",
      alt: "Lottery",
      provider: "DC",
      type: ""
    },
    {
      code: "150006",
      img: "/new-casino-img/mac888/Lucky-7.webp",
      name: "Lucky-7",
      alt: "Lucky-7",
      provider: "DC",
      type: ""
    },
    {
      code: "230005",
      img: "/new-casino-img/mac888/Mines.webp",
      name: "Mines",
      alt: "Mines",
      provider: "DC",
      type: ""
    },
    {
      code: "150038",
      img: "/new-casino-img/mac888/One-Card-20-20.webp",
      name: "One-Card-20-20",
      alt: "One-Card-20-20",
      provider: "DC",
      type: ""
    },
    {
      code: "150039",
      img: "/new-casino-img/mac888/One-Card-Meter.webp",
      name: "One-Card-Meter",
      alt: "One-Card-Meter",
      provider: "DC",
      type: ""
    },
    {
      code: "150040",
      img: "/new-casino-img/mac888/One-Card-One-Day.webp",
      name: "One-Card-One-Day",
      alt: "One-Card-One-Day",
      provider: "DC",
      type: ""
    },
    {
      code: "150045",
      img: "/new-casino-img/mac888/Note-Number.webp",
      name: "Note-Number",
      alt: "Note-Number",
      provider: "DC",
      type: ""
    },
    {
      code: "150038",
      img: "/new-casino-img/mac888/One-Card-20-20.webp",
      name: "One-Card-20-20",
      alt: "One-Card-20-20",
      provider: "DC",
      type: ""
    },
    {
      code: "150039",
      img: "/new-casino-img/mac888/One-Card-Meter.webp",
      name: "One-Card-Meter",
      alt: "One-Card-Meter",
      provider: "DC",
      type: ""
    },
    {
      code: "150040",
      img: "/new-casino-img/mac888/One-Card-One-Day.webp",
      name: "One-Card-One-Day",
      alt: "One-Card-One-Day",
      provider: "DC",
      type: ""
    },
    {
      code: "230006",
      img: "/new-casino-img/mac888/Plinko.webp",
      name: "Plinko",
      alt: "Plinko",
      provider: "DC",
      type: ""
    },
    {
      code: "150032",
      img: "/new-casino-img/mac888/Poker-1-Day.webp",
      name: "Poker-1-Day",
      alt: "Poker-1-Day",
      provider: "DC",
      type: ""
    },
    {
      code: "150005",
      img: "/new-casino-img/mac888/Poker-20-20.webp",
      name: "Poker-20-20",
      alt: "Poker-20-20",
      provider: "DC",
      type: ""
    },
    {
      code: "150016",
      img: "/new-casino-img/mac888/Queen-Race.webp",
      name: "Queen-Race",
      alt: "Queen-Race",
      provider: "DC",
      type: ""
    },
    {
      code: "150017",
      img: "/new-casino-img/mac888/Race-20.webp",
      name: "Race-20",
      alt: "Race-20",
      provider: "DC",
      type: ""
    },
    {
      code: "150043",
      img: "/new-casino-img/mac888/Race-to-17.webp",
      name: "Race-to-17",
      alt: "Race-to-17",
      provider: "DC",
      type: ""
    },
    {
      code: "150004",
      img: "/new-casino-img/mac888/Roulette.webp",
      name: "Roulette",
      alt: "Roulette",
      provider: "DC",
      type: ""
    },
    {
      code: "150003",
      img: "/new-casino-img/mac888/Sic-Bo.webp",
      name: "Sic-Bo",
      alt: "Sic-Bo",
      provider: "DC",
      type: ""
    },
    {
      code: "150034",
      img: "/new-casino-img/mac888/Super-Over(1).webp",
      name: "Super-Over(1)",
      alt: "Super-Over(1)",
      provider: "DC",
      type: ""
    },
    {
      code: "150034",
      img: "/new-casino-img/mac888/Super-over.webp",
      name: "Super-over",
      alt: "Super-over",
      provider: "DC",
      type: ""
    },
    {
      code: "150030",
      img: "/new-casino-img/mac888/Teen-muflin.webp",
      name: "Teen-muflin",
      alt: "Teen-muflin",
      provider: "DC",
      type: ""
    },
    {
      code: "150033",
      img: "/new-casino-img/mac888/Teenpatti-2020-2.webp",
      name: "Teenpatti-2020-2",
      alt: "Teenpatti-2020-2",
      provider: "DC",
      type: ""
    },
    {
      code: "150023",
      img: "/new-casino-img/mac888/Test-Teenpatti.webp",
      name: "Test-Teenpatti",
      alt: "Test-Teenpatti",
      provider: "DC",
      type: ""
    },
    {
      code: "150024",
      img: "/new-casino-img/mac888/The-Trap.webp",
      name: "The-Trap",
      alt: "The-Trap",
      provider: "DC",
      type: ""
    },
    {
      code: "150025",
      img: "/new-casino-img/mac888/Trio.webp",
      name: "Trio",
      alt: "Trio",
      provider: "DC",
      type: ""
    },
    {
      code: "150028",
      img: "/new-casino-img/mac888/Two-Card-Teenpatti.webp",
      name: "Two-Card-Teenpatti",
      alt: "Two-Card-Teenpatti",
      provider: "DC",
      type: ""
    },
    {
      code: "150019",
      img: "/new-casino-img/mac888/Worli-Matka.webp",
      name: "Worli-Matka",
      alt: "Worli-Matka",
      provider: "DC",
      type: ""
    },
    {
      code: "230007",
      img: "/new-casino-img/mac888/X-roulette.webp",
      name: "X-roulette",
      alt: "X-roulette",
      provider: "DC",
      type: ""
    }
  ];

  const betGames = [
    {
      code: "BTV-baccarat",
      img: "/new-casino-img/betgamestv/Baccarat.webp",
      name: "Baccarat",
      alt: "Baccarat",
      provider: "QT",
      type: ""
    },
    {
      code: "BTV-betonpoker",
      img: "/new-casino-img/betgamestv/Bet-On-Poker.webp",
      name: "Bet-On-Poker",
      alt: "Bet-On-Poker",
      provider: "QT",
      type: ""
    },
    {
      code: "BTV-diceduel",
      img: "/new-casino-img/betgamestv/Dice-Duel.webp",
      name: "Dice-Duel",
      alt: "Dice-Duel",
      provider: "QT",
      type: ""
    },
    {
      code: "BTV-lucky5",
      img: "/new-casino-img/betgamestv/Lucky-5.webp",
      name: "Lucky-5",
      alt: "Lucky-5",
      provider: "QT",
      type: ""
    },
    {
      code: "BTV-lucky6",
      img: "/new-casino-img/betgamestv/Lucky-6.webp",
      name: "Lucky-6",
      alt: "Lucky-6",
      provider: "QT",
      type: ""
    },
    {
      code: "BTV-lucky7",
      img: "/new-casino-img/betgamestv/Lucky-7.webp",
      name: "Lucky-7",
      alt: "Lucky-7",
      provider: "QT",
      type: ""
    },
    {
      code: "BTV-6poker",
      img: "/new-casino-img/betgamestv/Poker-6.webp",
      name: "Poker-6",
      alt: "Poker-6",
      provider: "QT",
      type: ""
    },
    {
      code: "BTV-speedy7",
      img: "/new-casino-img/betgamestv/Speedy-7.webp",
      name: "Speedy-7",
      alt: "Speedy-7",
      provider: "QT",
      type: ""
    },
    {
      code: "BTV-warofbets",
      img: "/new-casino-img/betgamestv/War-of-Bets.webp",
      name: "War-of-Bets",
      alt: "War-of-Bets",
      provider: "QT",
      type: ""
    },
    {
      code: "BTV-wheeloffortune",
      img: "/new-casino-img/betgamestv/Wheel-of-Fortune.webp",
      name: "Wheel-of-Fortune",
      alt: "Wheel-of-Fortune",
      provider: "QT",
      type: ""
    }
  ];

  const oneTwoGames = [
    {
      code: "1x2-420blazeit",
      img: "/new-casino-img/1X2games/420-Blaze-It.webp",
      name: "420-Blaze-It",
      alt: "420 Blaze It",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-aeterna",
      img: "/new-casino-img/1X2games/Aeterna.webp",
      name: "Aeterna",
      alt: "Aeterna",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-arcticfruits",
      img: "/new-casino-img/1X2games/Arctic-Fruits.webp",
      name: "Arctic-Fruits",
      alt: "Arctic Fruits",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-asgardwarriors",
      img: "/new-casino-img/1X2games/Asgard-Warriors.webp",
      name: "Asgard-Warriors",
      alt: "Asgard Warriors",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-battlemaidens",
      img: "/new-casino-img/1X2games/Battle-Maidens.webp",
      name: "Battle-Maidens",
      alt: "Battle Maidens",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-battlemaidenscleopatra",
      img: "/new-casino-img/1X2games/Battle-Maidens-Cleopatra.webp",
      name: "Battle-Maidens-Cleopatra",
      alt: "Battle Maidens Cleopatra",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-blackbeardscompass",
      img: "/new-casino-img/1X2games/Blackbeard_s-Compass.webp",
      name: "Blackbeard_s-Compass",
      alt: "Blackbeard's Compass",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-blazing777",
      img: "/new-casino-img/1X2games/Blazing-777.webp",
      name: "Blazing-777",
      alt: "Blazing 777",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-bloodrage",
      img: "/new-casino-img/1X2games/Blood-Rage.webp",
      name: "Blood-Rage",
      alt: "Blood Rage",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-bookofloki",
      img: "/new-casino-img/1X2games/Book-of-Loki.webp",
      name: "Book-of-Loki",
      alt: "Book of Loki",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-bookofmerlin",
      img: "/new-casino-img/1X2games/Book-of-Merlin.webp",
      name: "Book-of-Merlin",
      alt: "Book of Merlin",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-bulldozer",
      img: "/new-casino-img/1X2games/Bull-Dozer.webp",
      name: "Bull-Dozer",
      alt: "Bull Dozer",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-bunintheoven",
      img: "/new-casino-img/1X2games/Bun-in-the-Oven.webp",
      name: "Bun-in-the-Oven",
      alt: "Bun in the Oven",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-classicfruits",
      img: "/new-casino-img/1X2games/Classic-Fruits.webp",
      name: "Classic-Fruits",
      alt: "Classic Fruits",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-coinfield",
      img: "/new-casino-img/1X2games/Coin-Field.webp",
      name: "Coin-Field",
      alt: "Coin Field",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-coinvault",
      img: "/new-casino-img/1X2games/Coin-Vault.webp",
      name: "Coin-Vault",
      alt: "Coin Vault",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-disco777",
      img: "/new-casino-img/1X2games/Disco-777.webp",
      name: "Disco-777",
      alt: "Disco 777",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-eraofgods",
      img: "/new-casino-img/1X2games/Era-of-Gods.webp",
      name: "Era-of-Gods",
      alt: "Era of Gods",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-faerienights",
      img: "/new-casino-img/1X2games/Faerie-Nights.webp",
      name: "Faerie-Nights",
      alt: "Faerie Nights",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-fieldsofclover94",
      img: "/new-casino-img/1X2games/Fields-of-Clover.webp",
      name: "Fields-of-Clover",
      alt: "Fields of Clover",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-greendiamond",
      img: "/new-casino-img/1X2games/Green-Diamond.webp",
      name: "Green-Diamond",
      alt: "Green Diamond",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-herecomessummer",
      img: "/new-casino-img/1X2games/Here-Comes-Summer.webp",
      name: "Here-Comes-Summer",
      alt: "Here Comes Summer",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-iamthelaw",
      img: "/new-casino-img/1X2games/I-Am-The-Law.webp",
      name: "I-Am-The-Law",
      alt: "I Am The Law",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-icequeens",
      img: "/new-casino-img/1X2games/Ice-Queens.webp",
      name: "Ice-Queens",
      alt: "Ice Queens",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-incaidols",
      img: "/new-casino-img/1X2games/Inca-Idols.webp",
      name: "Inca-Idols",
      alt: "Inca Idols",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-irishlove",
      img: "/new-casino-img/1X2games/Irish-Love.webp",
      name: "Irish-Love",
      alt: "Irish Love",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-italia3x3",
      img: "/new-casino-img/1X2games/Italia-3X3.webp",
      name: "Italia-3X3",
      alt: "Italia 3X3",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-jesterswilds",
      img: "/new-casino-img/1X2games/Jesters-Wilds.webp",
      name: "Jesters-Wilds",
      alt: "Jesters Wilds",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-jewelofathena",
      img: "/new-casino-img/1X2games/Jewel-of-Athena.webp",
      name: "Jewel-of-Athena",
      alt: "Jewel of Athena",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-justicemachinescratch",
      img: "/new-casino-img/1X2games/Justice-Machine-Scratch.webp",
      name: "Justice-Machine-Scratch",
      alt: "Justice Machine Scratch",
      provider: "1X2",
      type: "Scratch"
    },
    {
      code: "1x2-kittycashscratch",
      img: "/new-casino-img/1X2games/Kitty-Cash-Scratch.webp",
      name: "Kitty-Cash-Scratch",
      alt: "Kitty Cash Scratch",
      provider: "1X2",
      type: "Scratch"
    },
    {
      code: "1x2-leprechauncharms",
      img: "/new-casino-img/1X2games/Leprechaun-Charms.webp",
      name: "Leprechaun-Charms",
      alt: "Leprechaun Charms",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-luckystreaks",
      img: "/new-casino-img/1X2games/Lucky-Streaks.webp",
      name: "Lucky-Streaks",
      alt: "Lucky Streaks",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-medievalmania",
      img: "/new-casino-img/1X2games/Medieval-Mania.webp",
      name: "Medieval-Mania",
      alt: "Medieval Mania",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-megablox777",
      img: "/new-casino-img/1X2games/MegaBlox-777.webp",
      name: "MegaBlox-777",
      alt: "MegaBlox 777",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-megabloxpyramids",
      img: "/new-casino-img/1X2games/Megablox-Pyramids.webp",
      name: "Megablox-Pyramids",
      alt: "Megablox Pyramids",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-neonfruitcityscape",
      img: "/new-casino-img/1X2games/Neon-Fruit-Cityscape.webp",
      name: "Neon-Fruit-Cityscape",
      alt: "Neon Fruit Cityscape",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-phoenixinferno",
      img: "/new-casino-img/1X2games/Phoenix-Inferno.webp",
      name: "Phoenix-Inferno",
      alt: "Phoenix Inferno",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-piggybankscratch",
      img: "/new-casino-img/1X2games/Piggy-Bank-Scratch.webp",
      name: "Piggy-Bank-Scratch",
      alt: "Piggy Bank Scratch",
      provider: "1X2",
      type: "Scratch"
    },
    {
      code: "1x2-piratearmada",
      img: "/new-casino-img/1X2games/Pirate-Armada.webp",
      name: "Pirate-Armada",
      alt: "Pirate Armada",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-plinkogo",
      img: "/new-casino-img/1X2games/Plinko-Go.webp",
      name: "Plinko-Go",
      alt: "Plinko Go",
      provider: "1X2",
      type: "Plinko"
    },
    {
      code: "1x2-poptilyoudrop",
      img: "/new-casino-img/1X2games/Pop-Till-You-Drop.webp",
      name: "Pop-Till-You-Drop",
      alt: "Pop Till You Drop",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-potsofluck",
      img: "/new-casino-img/1X2games/Pots-Of-Luck.webp",
      name: "Pots-Of-Luck",
      alt: "Pots Of Luck",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-prisonescape",
      img: "/new-casino-img/1X2games/Prison-Escape.webp",
      name: "Prison-Escape",
      alt: "Prison Escape",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-puppypaydayscratch",
      img: "/new-casino-img/1X2games/Puppy-Payday-Scratch.webp",
      name: "Puppy-Payday-Scratch",
      alt: "Puppy Payday Scratch",
      provider: "1X2",
      type: "Scratch"
    },
    {
      code: "1x2-queenofembers",
      img: "/new-casino-img/1X2games/Queen-of-Embers.webp",
      name: "Queen-of-Embers",
      alt: "Queen of Embers",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-reeldiamonds",
      img: "/new-casino-img/1X2games/Reel-Diamonds.webp",
      name: "Reel-Diamonds",
      alt: "Reel Diamonds",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-reelfruits",
      img: "/new-casino-img/1X2games/Reel-Fruits.webp",
      name: "Reel-Fruits",
      alt: "Reel Fruits",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-sherlockscasebook",
      img: "/new-casino-img/1X2games/Sherlock_s-Casebook.webp",
      name: "Sherlock_s-Casebook",
      alt: "Sherlock's Casebook",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-sicbo888",
      img: "/new-casino-img/1X2games/Sic-Bo-888.webp",
      name: "Sic-Bo-888",
      alt: "Sic Bo 888",
      provider: "1X2",
      type: "Sic Bo"
    },
    {
      code: "1x2-sinistercircus",
      img: "/new-casino-img/1X2games/Sinister-Circus.webp",
      name: "Sinister-Circus",
      alt: "Sinister Circus",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-slicedice",
      img: "/new-casino-img/1X2games/Slice-&-Dice.webp",
      name: "Slice-&-Dice",
      alt: "Slice & Dice",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-smokinghotfruits",
      img: "/new-casino-img/1X2games/Smoking-Hot-Fruits.webp",
      name: "Smoking-Hot-Fruits",
      alt: "Smoking Hot Fruits",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-smokinghotfruits20",
      img: "/new-casino-img/1X2games/Smoking-Hot-Fruits-20.webp",
      name: "Smoking-Hot-Fruits-20",
      alt: "Smoking Hot Fruits 20",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-smokinghotfruitsstacks",
      img: "/new-casino-img/1X2games/Smoking-Hot-Fruits-Stacks.webp",
      name: "Smoking-Hot-Fruits-Stacks",
      alt: "Smoking Hot Fruits Stacks",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-smokinghotfruitwildrespin",
      img: "/new-casino-img/1X2games/Smoking-Hot-Fruit-Wild-Respin.webp",
      name: "Smoking-Hot-Fruit-Wild-Respin",
      alt: "Smoking Hot Fruit Wild Respin",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-spacechristmas",
      img: "/new-casino-img/1X2games/Space-Christmas.webp",
      name: "Space-Christmas",
      alt: "Space Christmas",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-sparkling777s",
      img: "/new-casino-img/1X2games/Sparkling-777s.webp",
      name: "Sparkling-777s",
      alt: "Sparkling 777s",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-spinocricket",
      img: "/new-casino-img/1X2games/Spino-Cricket.webp",
      name: "Spino-Cricket",
      alt: "Spino Cricket",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-squeakyblinders",
      img: "/new-casino-img/1X2games/Squeaky-Blinders.webp",
      name: "Squeaky-Blinders",
      alt: "Squeaky Blinders",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "Stellar-Ways",
      img: "/new-casino-img/1X2games/Stellar-Ways.webp",
      name: "Stellar-Ways",
      alt: "Stellar Ways",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-superrainbowmegaways",
      img: "/new-casino-img/1X2games/Super-Rainbow-Megaways.webp",
      name: "Super-Rainbow-Megaways",
      alt: "Super Rainbow Megaways",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-thedavincidevice",
      img: "/new-casino-img/1X2games/The-Da-Vinci-Device.webp",
      name: "The-Da-Vinci-Device",
      alt: "The Da Vinci Device",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-theseusrises",
      img: "/new-casino-img/1X2games/Theseus-Rises.webp",
      name: "Theseus-Rises",
      alt: "Theseus Rises",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-trawlerfishin",
      img: "/new-casino-img/1X2games/Trawler-Fishin.webp",
      name: "Trawler-Fishin",
      alt: "Trawler Fishin",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-triplebar",
      img: "/new-casino-img/1X2games/Triple-Bar.webp",
      name: "Triple-Bar",
      alt: "Triple Bar",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-underthewaves",
      img: "/new-casino-img/1X2games/Under-the-Waves.webp",
      name: "Under-the-Waves",
      alt: "Under the Waves",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-vampirehunters",
      img: "/new-casino-img/1X2games/Vampire-Hunters.webp",
      name: "Vampire-Hunters",
      alt: "Vampire Hunters",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-virtualfootballpro",
      img: "/new-casino-img/1X2games/Van-Helsins-Book-of-the-Undead.webp",
      name: "Van-Helsins-Book-of-the-Undead",
      alt: "Van Helsins Book of the Undead",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "Whisker-Jones",
      img: "/new-casino-img/1X2games/Whisker-Jones.webp",
      name: "Whisker-Jones",
      alt: "Whisker Jones",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "xmas3x3",
      img: "/new-casino-img/1X2games/Xmas-3X3.webp",
      name: "Xmas-3X3",
      alt: "Xmas 3X3",
      provider: "1X2",
      type: "Slot"
    },
    {
      code: "1x2-xwild",
      img: "/new-casino-img/1X2games/X-WILD.webp",
      name: "X-WILD",
      alt: "X WILD",
      provider: "1X2",
      type: "Slot"
    }
  ];

  const turboGames = [
    {
      code: "TRB-1tapmines",
      img: "/new-casino-img/turbo/1Tap-Mines.webp",
      name: "1Tap-Mines",
      alt: "1Tap Mines",
      provider: "QT",
      type: "Mines"
    },
    {
      code: "TRB-turboplinko",
      img: "/new-casino-img/turbo/Turbo-Plinko.webp",
      name: "Turbo-Plinko",
      alt: "Turbo Plinko",
      provider: "QT",
      type: "Plinko"
    },
    {
      code: "TRB-turbomines",
      img: "/new-casino-img/turbo/Turbo-Mines.webp",
      name: "Turbo-Mines",
      alt: "Turbo Mines",
      provider: "QT",
      type: "Mines"
    },
    {
      code: "Magic-Keno",
      img: "/new-casino-img/turbo/Magic-Keno.webp",
      name: "Magic-Keno",
      alt: "Magic Keno",
      provider: "QT",
      type: "Keno"
    },
    {
      code: "TRB-bookofmines",
      img: "/new-casino-img/turbo/Fast-Fielder.webp",
      name: "Fast-Fielder",
      alt: "Fast Fielder",
      provider: "QT",
      type: "Sports"
    },
    {
      code: "TRB-dicetwice",
      img: "/new-casino-img/turbo/Dice-Twice.webp",
      name: "Dice-Twice",
      alt: "Dice Twice",
      provider: "QT",
      type: "Dice"
    },
    {
      code: "TRB-hilo",
      img: "/new-casino-img/turbo/Hilo.webp",
      name: "Hilo",
      alt: "HiLo",
      provider: "QT",
      type: "Card"
    },
    {
      code: "TRB-bookofmines",
      img: "/new-casino-img/turbo/Book-of-Mines.webp",
      name: "Book-of-Mines",
      alt: "Book of Mines",
      provider: "QT",
      type: "Mines"
    },
    {
      code: "TRB-spinstrike",
      img: "/new-casino-img/turbo/Spin-Strike.webp",
      name: "Spin-Strike",
      alt: "Spin Strike",
      provider: "QT",
      type: "Wheel"
    }
  ];

  const onlyPlayGames = [
    {
      code: "aliendigger",
      img: "/new-casino-img/onlyplay/Alien-Digger.webp",
      name: "Alien-Digger",
      alt: "Alien Digger",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "bookofeye",
      img: "/new-casino-img/onlyplay/Book-of-eyes.webp",
      name: "Book-of-eyes",
      alt: "Book of Eyes",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "bookofpinata",
      img: "/new-casino-img/onlyplay/Book-of-Pinata.webp",
      name: "Book-of-Pinata",
      alt: "Book of Pinata",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "cherryboom",
      img: "/new-casino-img/onlyplay/Cherry-Boom.webp",
      name: "Cherry-Boom",
      alt: "Cherry Boom",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "chervonakalyna",
      img: "/new-casino-img/onlyplay/Chervona-Kalyna.webp",
      name: "Chervona-Kalyna",
      alt: "Chervona Kalyna",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "hotandspicymegaways",
      img: "/new-casino-img/onlyplay/Chervona-Kalyna-Megaways.webp",
      name: "Chervona-Kalyna-Megaways",
      alt: "Chervona Kalyna Megaways",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "christmas7",
      img: "/new-casino-img/onlyplay/Christmas-Seven.webp",
      name: "Christmas-Seven",
      alt: "Christmas Seven",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "clowncoins",
      img: "/new-casino-img/onlyplay/Clown-Coins.webp",
      name: "Clown-Coins",
      alt: "Clown Coins",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "combo7",
      img: "/new-casino-img/onlyplay/Combo-Seven.webp",
      name: "Combo-Seven",
      alt: "Combo Seven",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "comicsstore",
      img: "/new-casino-img/onlyplay/Comic-Store.webp",
      name: "Comic-Store",
      alt: "Comic Store",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "cosmox",
      img: "/new-casino-img/onlyplay/Cosmo-X.webp",
      name: "Cosmo-X",
      alt: "Cosmo X",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "cricketcrash",
      img: "/new-casino-img/onlyplay/Cricket-Crash.webp",
      name: "Cricket-Crash",
      alt: "Cricket Crash",
      provider: "GT",
      type: "Crash"
    },
    {
      code: "cricx",
      img: "/new-casino-img/onlyplay/Cric-X.webp",
      name: "Cric-X",
      alt: "Cric X",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "crystalcascade",
      img: "/new-casino-img/onlyplay/Crystal-Cascade.webp",
      name: "Crystal-Cascade",
      alt: "Crystal Cascade",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "crystaltreasure",
      img: "/new-casino-img/onlyplay/Crystal-Treasure.webp",
      name: "Crystal-Treasure",
      alt: "Crystal Treasure",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "dayofmuerte",
      img: "/new-casino-img/onlyplay/Day-of-Muerte.webp",
      name: "Day-of-Muerte",
      alt: "Day of Muerte",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "dragongates",
      img: "/new-casino-img/onlyplay/Dragon-Gates.webp",
      name: "Dragon-Gates",
      alt: "Dragon Gates",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "fighter",
      img: "/new-casino-img/onlyplay/F777-Fighter.webp",
      name: "F777-Fighter",
      alt: "F777 Fighter",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "fishstore",
      img: "/new-casino-img/onlyplay/Fish-Store.webp",
      name: "Fish-Store",
      alt: "Fish Store",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "frozengarden",
      img: "/new-casino-img/onlyplay/Frozen-Garden.webp",
      name: "Frozen-Garden",
      alt: "Frozen Garden",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "fruitybook",
      img: "/new-casino-img/onlyplay/Fruity-Book.webp",
      name: "Fruity-Book",
      alt: "Fruity Book",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "glamourcrocodile",
      img: "/new-casino-img/onlyplay/Glamour-Crocodile.webp",
      name: "Glamour-Crocodile",
      alt: "Glamour Crocodile",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "goalx",
      img: "/new-casino-img/onlyplay/Goal-X.webp",
      name: "Goal-X",
      alt: "Goal X",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "goldenclover",
      img: "/new-casino-img/onlyplay/Golden-Clover.webp",
      name: "Golden-Clover",
      alt: "Golden Clover",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "goldenoctopus",
      img: "/new-casino-img/onlyplay/Golden-Octopus.webp",
      name: "Golden-Octopus",
      alt: "Golden Octopus",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "graffitiinsydney",
      img: "/new-casino-img/onlyplay/Graffiti-in-Sydney.webp",
      name: "Graffiti-in-Sydney",
      alt: "Graffiti in Sydney",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "happycookie",
      img: "/new-casino-img/onlyplay/Happy-Cookie.webp",
      name: "Happy-Cookie",
      alt: "Happy Cookie",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "hotandspicy",
      img: "/new-casino-img/onlyplay/Hot-and-Spicy.webp",
      name: "Hot-and-Spicy",
      alt: "Hot and Spicy",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "hotandspicyjackpot",
      img: "/new-casino-img/onlyplay/Hot-and-Spicy.webp",
      name: "Hot-and-Spicy",
      alt: "Hot and Spicy Jackpot",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "iggyracing",
      img: "/new-casino-img/onlyplay/Iggy-Racing.webp",
      name: "Iggy-Racing",
      alt: "Iggy Racing",
      provider: "GT",
      type: "Racing"
    },
    {
      code: "Inca-Son",
      img: "/new-casino-img/onlyplay/Inca-Son.webp",
      name: "Inca-Son",
      alt: "Inca Son",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "jackpotter",
      img: "/new-casino-img/onlyplay/Jack-Potter.webp",
      name: "Jack-Potter",
      alt: "Jack Potter",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "jackpotterdeluxe",
      img: "/new-casino-img/onlyplay/Jack-Potter-Deluxe.webp",
      name: "Jack-Potter-Deluxe",
      alt: "Jack Potter Deluxe",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "jackpottermegaways",
      img: "/new-casino-img/onlyplay/Jack-Potter-Megaways.webp",
      name: "Jack-Potter-Megaways",
      alt: "Jack Potter Megaways",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "jackpotterxmas",
      img: "/new-casino-img/onlyplay/Jack-Potter-X-MAS.webp",
      name: "Jack-Potter-X-MAS",
      alt: "Jack Potter XMAS",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "jokerscoins",
      img: "/new-casino-img/onlyplay/Joker-Coins.webp",
      name: "Joker-Coins",
      alt: "Joker Coins",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "jokerscoinsxmas",
      img: "/new-casino-img/onlyplay/Joker-Coin-Xmas.webp",
      name: "Joker-Coin-Xmas",
      alt: "Joker Coin Xmas",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "juicycrush",
      img: "/new-casino-img/onlyplay/Juicy-Crush.webp",
      name: "Juicy-Crush",
      alt: "Juicy Crush",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "junglegold",
      img: "/new-casino-img/onlyplay/Jungle-Gold.webp",
      name: "Jungle-Gold",
      alt: "Jungle Gold",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "labourday",
      img: "/new-casino-img/onlyplay/Labour-Day.webp",
      name: "Labour-Day",
      alt: "Labour Day",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "ligafortunamegaways",
      img: "/new-casino-img/onlyplay/Liga-Fortuna-Megaways.webp",
      name: "Liga-Fortuna-Megaways",
      alt: "Liga Fortuna Megaways",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "limbocat",
      img: "/new-casino-img/onlyplay/Limbo-Cat.webp",
      name: "Limbo-Cat",
      alt: "Limbo Cat",
      provider: "GT",
      type: "Limbo"
    },
    {
      code: "luckyborscht",
      img: "/new-casino-img/onlyplay/Lucky-Borscht.webp",
      name: "Lucky-Borscht",
      alt: "Lucky Borscht",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "luckyclover",
      img: "/new-casino-img/onlyplay/Lucky-Clover.webp",
      name: "Lucky-Clover",
      alt: "Lucky Clover",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "Lucky-Coin",
      img: "/new-casino-img/onlyplay/Lucky-Coin.webp",
      name: "Lucky-Coin",
      alt: "Lucky Coin",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "luckyocean",
      img: "/new-casino-img/onlyplay/Lucky-Ocean.webp",
      name: "Lucky-Ocean",
      alt: "Lucky Ocean",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "luckypunch",
      img: "/new-casino-img/onlyplay/Lucky-Punch.webp",
      name: "Lucky-Punch",
      alt: "Lucky Punch",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "luckytanks",
      img: "/new-casino-img/onlyplay/Lucky-Tanks.webp",
      name: "Lucky-Tanks",
      alt: "Lucky Tanks",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "magicalistanbul",
      img: "/new-casino-img/onlyplay/Magical-Istanbul.webp",
      name: "Magical-Istanbul",
      alt: "Magical Istanbul",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "mysteryofpersia",
      img: "/new-casino-img/onlyplay/Mystery-of-PErsia.webp",
      name: "Mystery-of-PErsia",
      alt: "Mystery of Persia",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "mythsofbastet",
      img: "/new-casino-img/onlyplay/Myths-of-Bastet.webp",
      name: "Myths-of-Bastet",
      alt: "Myths of Bastet",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "needforx",
      img: "/new-casino-img/onlyplay/Need-for-X.webp",
      name: "Need-for-X",
      alt: "Need for X",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "piggybonanzahalloween",
      img: "/new-casino-img/onlyplay/Piggy-Bananza-Halloween.webp",
      name: "Piggy-Bananza-Halloween",
      alt: "Piggy Bananza Halloween",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "piggybonanza",
      img: "/new-casino-img/onlyplay/Piggy-Bonanza.webp",
      name: "Piggy-Bonanza",
      alt: "Piggy Bonanza",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "piggytap",
      img: "/new-casino-img/onlyplay/Piggy-tap.webp",
      name: "Piggy-tap",
      alt: "Piggy Tap",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "piratestuff",
      img: "/new-casino-img/onlyplay/Pirate-stuff.webp",
      name: "Pirate-stuff",
      alt: "Pirate Stuff",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "quantumx",
      img: "/new-casino-img/onlyplay/Quantum-X.webp",
      name: "Quantum-X",
      alt: "Quantum X",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "retroparty",
      img: "/new-casino-img/onlyplay/Retro-Party.webp",
      name: "Retro-Party",
      alt: "Retro Party",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "TRB-spinstrike",
      img: "/new-casino-img/onlyplay/Retro-Pedro.webp",
      name: "Retro-Pedro",
      alt: "Retro Pedro",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "richbankrupt",
      img: "/new-casino-img/onlyplay/Rich Bankrupt.webp",
      name: "Rich-Bankrupt",
      alt: "Rich Bankrupt",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "royalkitties",
      img: "/new-casino-img/onlyplay/Royal-Kitties.webp",
      name: "Royal-Kitties",
      alt: "Royal Kitties",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "saintbananas",
      img: "/new-casino-img/onlyplay/Saaint-Banana.webp",
      name: "Saaint-Banana",
      alt: "Saint Banana",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "scorex",
      img: "/new-casino-img/onlyplay/Score-X.webp",
      name: "Score-X",
      alt: "Score X",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "spacehorror",
      img: "/new-casino-img/onlyplay/Space-Horror.webp",
      name: "Space-Horror",
      alt: "Space Horror",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "sugarvalley",
      img: "/new-casino-img/onlyplay/Sugar-Valley.webp",
      name: "Sugar-Valley",
      alt: "Sugar Valley",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "texasdragons",
      img: "/new-casino-img/onlyplay/Texas-Dragon.webp",
      name: "Texas-Dragon",
      alt: "Texas Dragon",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "thimbles",
      img: "/new-casino-img/onlyplay/The-Thimbles.webp",
      name: "The-Thimbles",
      alt: "The Thimbles",
      provider: "GT",
      type: "Slot"
    },
    {
      code: "trolldice",
      img: "/new-casino-img/onlyplay/Troll-Dice.webp",
      name: "Troll-Dice",
      alt: "Troll Dice",
      provider: "GT",
      type: "Dice"
    }
  ];

  const smartSoftGames = [
    {
      code: "Balloon",
      img: "/new-casino-img/smartsoft/balloon.webp",
      name: "balloon",
      alt: "Balloon",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "BookOfFuturia",
      img: "/new-casino-img/smartsoft/Book-of.webp",
      name: "Book-of",
      alt: "Book of Futuria",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "BlazingHot",
      img: "/new-casino-img/smartsoft/burning-ice.webp",
      name: "burning-ice",
      alt: "Blazing Hot",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "BlazingHot10",
      img: "/new-casino-img/smartsoft/burning-ice-10.webp",
      name: "burning-ice-10",
      alt: "Blazing Hot 10",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "BlazingHot40",
      img: "/new-casino-img/smartsoft/burning-ice-40.webp",
      name: "burning-ice-40",
      alt: "Blazing Hot 40",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "Cappadocia",
      img: "/new-casino-img/smartsoft/Cappadocia.webp",
      name: "Cappadocia",
      alt: "Cappadocia",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "TugOfWar",
      img: "/new-casino-img/smartsoft/Crash-duel-X.webp",
      name: "Crash-duel-X",
      alt: "Tug Of War",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "CricketX",
      img: "/new-casino-img/smartsoft/cricket-x.webp",
      name: "cricket-x",
      alt: "Cricket X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "SlicerX",
      img: "/new-casino-img/smartsoft/DoubleX.webp",
      name: "DoubleX",
      alt: "Slicer X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "FootballX",
      img: "/new-casino-img/smartsoft/footballx.webp",
      name: "footballx",
      alt: "Football X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "FoxyHot20",
      img: "/new-casino-img/smartsoft/FoxyHot20.webp",
      name: "FoxyHot20",
      alt: "Foxy Hot 20",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "GeniesBonanza",
      img: "/new-casino-img/smartsoft/genies-bonanza.webp",
      name: "genies-bonanza",
      alt: "Genies Bonanza",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "HelicopterX",
      img: "/new-casino-img/smartsoft/Helicopter-X.webp",
      name: "Helicopter-X",
      alt: "Helicopter X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "HunterX",
      img: "/new-casino-img/smartsoft/Hunter-X.webp",
      name: "Hunter-X",
      alt: "Hunter X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "JetX",
      img: "/new-casino-img/smartsoft/jetx.webp",
      name: "jetx",
      alt: "Jet X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "JetX3",
      img: "/new-casino-img/smartsoft/jetx3.webp",
      name: "jetx3",
      alt: "Jet X 3",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "MultiHotWays",
      img: "/new-casino-img/smartsoft/Multi-Hot-Ways.webp",
      name: "Multi-Hot-Ways",
      alt: "Multi Hot Ways",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "PlinkoX",
      img: "/new-casino-img/smartsoft/plinko-x.webp",
      name: "plinko-x",
      alt: "Plinko X",
      provider: "SMTSG",
      type: "Plinko"
    },
    {
      code: "RollX",
      img: "/new-casino-img/smartsoft/Roll-X.webp",
      name: "Roll-X",
      alt: "Roll X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "RussianKeno",
      img: "/new-casino-img/smartsoft/russian-keno.webp",
      name: "russian-keno",
      alt: "Russian Keno",
      provider: "SMTSG",
      type: "Keno"
    },
    {
      code: "Samurai",
      img: "/new-casino-img/smartsoft/samurai.webp",
      name: "samurai",
      alt: "Samurai",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "SmashX",
      img: "/new-casino-img/smartsoft/Smash-X.webp",
      name: "Smash-X",
      alt: "Smash X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "SpinX",
      img: "/new-casino-img/smartsoft/spin-x.webp",
      name: "spin-x",
      alt: "Spin X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "tower-x",
      img: "/new-casino-img/smartsoft/tower-x.webp",
      name: "tower-x",
      alt: "Tower X",
      provider: "SMTSG",
      type: "Crash"
    },
    {
      code: "Vampires",
      img: "/new-casino-img/smartsoft/vampires.webp",
      name: "vampires",
      alt: "Vampires",
      provider: "SMTSG",
      type: "Slot"
    },
    {
      code: "VirtualBurningRoulette",
      img: "/new-casino-img/smartsoft/Virtual-Burning-Roulette.webp",
      name: "Virtual-Burning-Roulette",
      alt: "Virtual Burning Roulette",
      provider: "SMTSG",
      type: "Roulette"
    },
    {
      code: "VirtualClassicRoulette",
      img: "/new-casino-img/smartsoft/Virtual-Classic-Roulette.webp",
      name: "Virtual-Classic-Roulette",
      alt: "Virtual Classic Roulette",
      provider: "SMTSG",
      type: "Roulette"
    },
    {
      code: "VirtualRoulette",
      img: "/new-casino-img/smartsoft/virtual-roulette.webp",
      name: "virtual-roulette",
      alt: "Virtual Roulette",
      provider: "SMTSG",
      type: "Roulette"
    },
    {
      code: "WildsAndGods",
      img: "/new-casino-img/smartsoft/WildsAndGods.webp",
      name: "WildsAndGods",
      alt: "Wilds And Gods",
      provider: "SMTSG",
      type: "Slot"
    }
  ];

  const caleta = [
    {
      code: "201278",
      img: "/new-casino-img/caleta/Astro-wild.webp",
      name: "Astro-wild",
      alt: "Astro Wild",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201238",
      img: "/new-casino-img/caleta/Atomico-Lotto.webp",
      name: "Atomico-Lotto",
      alt: "Atomico Lotto",
      provider: "DC",
      type: "Lottery"
    },
    {
      code: "Slots",
      img: "/new-casino-img/caleta/Banana-Bingo.webp",
      name: "Banana-Bingo",
      alt: "Banana Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "225204",
      img: "/new-casino-img/caleta/Banana-Boom.webp",
      name: "Banana-Boom",
      alt: "Banana Boom",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201232",
      img: "/new-casino-img/caleta/Banana-Keno.webp",
      name: "Banana-Keno",
      alt: "Banana Keno",
      provider: "DC",
      type: "Keno"
    },
    {
      code: "201251",
      img: "/new-casino-img/caleta/Baseketball-Pro.webp",
      name: "Baseketball-Pro",
      alt: "Baseketball Pro",
      provider: "DC",
      type: "Sports"
    },
    {
      code: "201243",
      img: "/new-casino-img/caleta/Beach-Tennis.webp",
      name: "Beach-Tennis",
      alt: "Beach Tennis",
      provider: "DC",
      type: "Sports"
    },
    {
      code: "201235",
      img: "/new-casino-img/caleta/Betina-Bingo.webp",
      name: "Betina-Bingo",
      alt: "Betina Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201216",
      img: "/new-casino-img/caleta/Binga-Pirata.webp",
      name: "Binga-Pirata",
      alt: "Binga Pirata",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201272",
      img: "/new-casino-img/caleta/Bingo-Bruxaria.webp",
      name: "Bingo-Bruxaria",
      alt: "Bingo Bruxaria",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201273",
      img: "/new-casino-img/caleta/Bingo-Hortinha.webp",
      name: "Bingo-Hortinha",
      alt: "Bingo Hortinha",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201217",
      img: "/new-casino-img/caleta/Bingoluliu.webp",
      name: "Bingoluliu",
      alt: "Bingoluliu",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "225205",
      img: "/new-casino-img/caleta/Bingo-Pescaria.webp",
      name: "Bingo-Pescaria",
      alt: "Bingo Pescaria",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "225206",
      img: "/new-casino-img/caleta/Bingo-Tesoro-Maya.webp",
      name: "Bingo-Tesoro-Maya",
      alt: "Bingo Tesoro Maya",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201242",
      img: "/new-casino-img/caleta/Bingo-Tornado.webp",
      name: "Bingo-Tornado",
      alt: "Bingo Tornado",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201271",
      img: "/new-casino-img/caleta/Bingo-Trevo-da-dorte.webp",
      name: "Bingo-Trevo-da-dorte",
      alt: "Bingo Trevo da Sorte",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201277",
      img: "/new-casino-img/caleta/Boto-Bingo.webp",
      name: "Boto-Bingo",
      alt: "Boto Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201254",
      img: "/new-casino-img/caleta/Bungry-chef.webp",
      name: "Bungry-chef",
      alt: "Bungry Chef",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "225207",
      img: "/new-casino-img/caleta/Caipirinha-Keno.webp",
      name: "Caipirinha-Keno",
      alt: "Caipirinha Keno",
      provider: "DC",
      type: "Keno"
    },
    {
      code: "201276",
      img: "/new-casino-img/caleta/Catch-a-fish.webp",
      name: "Catch-a-fish",
      alt: "Catch a Fish",
      provider: "DC",
      type: "Fishing"
    },
    {
      code: "201263",
      img: "/new-casino-img/caleta/Caves-And-Treasure.webp",
      name: "Caves-And-Treasure",
      alt: "Caves And Treasure",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201279",
      img: "/new-casino-img/caleta/Cherry-Cherry.webp",
      name: "Cherry-Cherry",
      alt: "Cherry Cherry",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "225208",
      img: "/new-casino-img/caleta/Cherry-Christmas.webp",
      name: "Cherry-Christmas",
      alt: "Cherry Christmas",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201248",
      img: "/new-casino-img/caleta/China-Charms.webp",
      name: "China-Charms",
      alt: "China Charms",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201215",
      img: "/new-casino-img/caleta/Circus-Bingo.webp",
      name: "Circus-Bingo",
      alt: "Circus Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "225209",
      img: "/new-casino-img/caleta/Classic-Royals.webp",
      name: "Classic-Royals",
      alt: "Classic Royals",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201256",
      img: "/new-casino-img/caleta/Crazy-Lab.webp",
      name: "Crazy-Lab",
      alt: "Crazy Lab",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201265",
      img: "/new-casino-img/caleta/Cruise-Fortune.webp",
      name: "Cruise-Fortune",
      alt: "Cruise Fortune",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201236",
      img: "/new-casino-img/caleta/Crystal-Unicorn.webp",
      name: "Crystal-Unicorn",
      alt: "Crystal Unicorn",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201261",
      img: "/new-casino-img/caleta/Cutey-Cats.webp",
      name: "Cutey-Cats",
      alt: "Cutey Cats",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201257",
      img: "/new-casino-img/caleta/Dragon-Rising.webp",
      name: "Dragon-Rising",
      alt: "Dragon Rising",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201253",
      img: "/new-casino-img/caleta/Enchanted-Cash.webp",
      name: "Enchanted-Cash",
      alt: "Enchanted Cash",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201240",
      img: "/new-casino-img/caleta/Fada-da-fortune.webp",
      name: "Fada-da-fortune",
      alt: "Fada da Fortune",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201226",
      img: "/new-casino-img/caleta/Feel-the-Music.webp",
      name: "Feel-the-Music",
      alt: "Feel the Music",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201252",
      img: "/new-casino-img/caleta/Football-Pro.webp",
      name: "Football-Pro",
      alt: "Football Pro",
      provider: "DC",
      type: "Sports"
    },
    {
      code: "201255",
      img: "/new-casino-img/caleta/Fright-night.webp",
      name: "Fright-night",
      alt: "Fright Night",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201260",
      img: "/new-casino-img/caleta/Frozen-Fluffles.webp",
      name: "Frozen-Fluffles",
      alt: "Frozen Fluffles",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "225210",
      img: "/new-casino-img/caleta/Garoto-de-Ipanema-Bingo.webp",
      name: "Garoto-de-Ipanema-Bingo",
      alt: "Garoto de Ipanema Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201283",
      img: "/new-casino-img/caleta/Halloween-Bingo.webp",
      name: "Halloween-Bingo",
      alt: "Halloween Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201284",
      img: "/new-casino-img/caleta/Halloween-Keno.webp",
      name: "Halloween-Keno",
      alt: "Halloween Keno",
      provider: "DC",
      type: "Keno"
    },
    {
      code: "201281",
      img: "/new-casino-img/caleta/Halloween-Raspadinha.webp",
      name: "Halloween-Raspadinha",
      alt: "Halloween Raspadinha",
      provider: "DC",
      type: "Scratch"
    },
    {
      code: "201247",
      img: "/new-casino-img/caleta/Heroes-Empire.webp",
      name: "Heroes-Empire",
      alt: "Heroes Empire",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201245",
      img: "/new-casino-img/caleta/Hidden-Kingdom.webp",
      name: "Hidden-Kingdom",
      alt: "Hidden Kingdom",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201266",
      img: "/new-casino-img/caleta/Horri-cash.webp",
      name: "Horri-cash",
      alt: "Horri Cash",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201274",
      img: "/new-casino-img/caleta/Huncry-Chef-Pickem.webp",
      name: "Huncry-Chef-Pickem",
      alt: "Hungry Chef Pickem",
      provider: "DC",
      type: "Pickem"
    },
    {
      code: "225211",
      img: "/new-casino-img/caleta/Jingle-Bell-Bingo.webp",
      name: "Jingle-Bell-Bingo",
      alt: "Jingle Bell Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201233",
      img: "/new-casino-img/caleta/Jungle-Keno.webp",
      name: "Jungle-Keno",
      alt: "Jungle Keno",
      provider: "DC",
      type: "Keno"
    },
    {
      code: "201250",
      img: "/new-casino-img/caleta/Lost-saga.webp",
      name: "Lost-saga",
      alt: "Lost Saga",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201249",
      img: "/new-casino-img/caleta/Lucky-Express.webp",
      name: "Lucky-Express",
      alt: "Lucky Express",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201228",
      img: "/new-casino-img/caleta/Lucky-K.webp",
      name: "Lucky-K",
      alt: "Lucky K",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201267",
      img: "/new-casino-img/caleta/Madame-Fortune.webp",
      name: "Madame-Fortune",
      alt: "Madame Fortune",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201234",
      img: "/new-casino-img/caleta/Magical-Keno.webp",
      name: "Magical-Keno",
      alt: "Magical Keno",
      provider: "DC",
      type: "Keno"
    },
    {
      code: "201246",
      img: "/new-casino-img/caleta/Magic-Forest.webp",
      name: "Magic-Forest",
      alt: "Magic Forest",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "225212",
      img: "/new-casino-img/caleta/Mega-Bingo.webp",
      name: "Mega-Bingo",
      alt: "Mega Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "201229",
      img: "/new-casino-img/caleta/New-Fruit.webp",
      name: "New-Fruit",
      alt: "New Fruit",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201237",
      img: "/new-casino-img/caleta/Ocean-Riches.webp",
      name: "Ocean-Riches",
      alt: "Ocean Riches",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201275",
      img: "/new-casino-img/caleta/Pick_em-Fruits.webp",
      name: "Pick_em-Fruits",
      alt: "Pick em Fruits",
      provider: "DC",
      type: "Pickem"
    },
    {
      code: "225213",
      img: "/new-casino-img/caleta/Piggy-Show-Bingo.webp",
      name: "Piggy-Show-Bingo",
      alt: "Piggy Show Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "225214",
      img: "/new-casino-img/caleta/Pipa-Crash.webp",
      name: "Pipa-Crash",
      alt: "Pipa Crash",
      provider: "DC",
      type: "Crash"
    },
    {
      code: "201258",
      img: "/new-casino-img/caleta/Pirates-Fortune.webp",
      name: "Pirates-Fortune",
      alt: "Pirates Fortune",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201241",
      img: "/new-casino-img/caleta/Princess-of-the-ocean.webp",
      name: "Princess-of-the-ocean",
      alt: "Princess of the Ocean",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201282",
      img: "/new-casino-img/caleta/Raspadinha-trevo-da-sorte.webp",
      name: "Raspadinha-trevo-da-sorte",
      alt: "Raspadinha Trevo da Sorte",
      provider: "DC",
      type: "Scratch"
    },
    {
      code: "201230",
      img: "/new-casino-img/caleta/Rio-De-Janeiro.webp",
      name: "Rio-De-Janeiro",
      alt: "Rio De Janeiro",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "225215",
      img: "/new-casino-img/caleta/Rock-_n_-Reels.webp",
      name: "Rock-_n_-Reels",
      alt: "Rock n Reels",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201221",
      img: "/new-casino-img/caleta/Saga-Loga.webp",
      name: "Saga-Loga",
      alt: "Saga Loga",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201219",
      img: "/new-casino-img/caleta/Samba-Rio.webp",
      name: "Samba-Rio",
      alt: "Samba Rio",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201280",
      img: "/new-casino-img/caleta/Talismanes.webp",
      name: "Talismanes",
      alt: "Talismanes",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201244",
      img: "/new-casino-img/caleta/Torch-of-Fire.webp",
      name: "Torch-of-Fire",
      alt: "Torch of Fire",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201268",
      img: "/new-casino-img/caleta/Vegas-Baby.webp",
      name: "Vegas-Baby",
      alt: "Vegas Baby",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201239",
      img: "/new-casino-img/caleta/Viking-Madness.webp",
      name: "Viking-Madness",
      alt: "Viking Madness",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201269",
      img: "/new-casino-img/caleta/Village-Brewery.webp",
      name: "Village-Brewery",
      alt: "Village Brewery",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "225216",
      img: "/new-casino-img/caleta/Whale-Bingo.webp",
      name: "Whale-Bingo",
      alt: "Whale Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "225217",
      img: "/new-casino-img/caleta/Whale-of-Fortune.webp",
      name: "Whale-of-Fortune",
      alt: "Whale of Fortune",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "201262",
      img: "/new-casino-img/caleta/Wild-Fruit.webp",
      name: "Wild-Fruit",
      alt: "Wild Fruit",
      provider: "DC",
      type: "Slot"
    }
  ];

  const playNGo = [
    {
      code: "PNG-3handcasinoholdem",
      img: "/new-casino-img/playngo/3-hand-casino-holdem.webp",
      name: "3-hand-casino-holdem",
      alt: "3 Hand Casino Holdem",
      provider: "QT",
      type: "Poker"
    },
    {
      code: "PNG-3clownmonty",
      img: "/new-casino-img/playngo/3-Xlown-monty.webp",
      name: "3-Xlown-monty",
      alt: "3 Xlown Monty",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-7sins",
      img: "/new-casino-img/playngo/7-Sins.webp",
      name: "7-Sins",
      alt: "7 Sins",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-15crystalrosesataleoflove",
      img: "/new-casino-img/playngo/15-Crystal-roses.webp",
      name: "15-Crystal-roses",
      alt: "15 Crystal Roses",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-24kdragon",
      img: "/new-casino-img/playngo/24k-dragon.webp",
      name: "24k-dragon",
      alt: "24k Dragon",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-aceofspades",
      img: "/new-casino-img/playngo/Ace-of-Spades.webp",
      name: "Ace-of-Spades",
      alt: "Ace of Spades",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-agentdestiny",
      img: "/new-casino-img/playngo/Agent-Destiny.webp",
      name: "Agent-Destiny",
      alt: "Agent Destiny",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-agentofhearts",
      img: "/new-casino-img/playngo/Agent-of-Heart.webp",
      name: "Agent-of-Heart",
      alt: "Agent of Heart",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-richwildeandtheamuletofdead",
      img: "/new-casino-img/playngo/Amulet-of-dad.webp",
      name: "Amulet-of-dad",
      alt: "Amulet of Dead",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-animalmadness",
      img: "/new-casino-img/playngo/Animal-madness.webp",
      name: "Animal-madness",
      alt: "Animal Madness",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-ankhofanubis",
      img: "/new-casino-img/playngo/Ankh-of-Anubis.webp",
      name: "Ankh-of-Anubis",
      alt: "Ankh of Anubis",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-annihilator",
      img: "/new-casino-img/playngo/Annihilator.webp",
      name: "Annihilator",
      alt: "Annihilator",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-athenaascending",
      img: "/new-casino-img/playngo/Athena-Ascending.webp",
      name: "Athena-Ascending",
      alt: "Athena Ascending",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-athenaascending",
      img: "/new-casino-img/playngo/Aztec-Idols.webp",
      name: "Aztec-Idols",
      alt: "Aztec Idols",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-athenaascending",
      img: "/new-casino-img/playngo/Aztec-warrior-princess.webp",
      name: "Aztec-warrior-princess",
      alt: "Aztec Warrior Princess",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-bakerstreat",
      img: "/new-casino-img/playngo/Bakers-treat.webp",
      name: "Bakers-treat",
      alt: "Bakers Treat",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-bananarock",
      img: "/new-casino-img/playngo/Banana-rock.webp",
      name: "Banana-rock",
      alt: "Banana Rock",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-banquetofdead",
      img: "/new-casino-img/playngo/Banquet-of-Dead.webp",
      name: "Banquet-of-Dead",
      alt: "Banquet of Dead",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-battleroyal",
      img: "/new-casino-img/playngo/Battle-royal.webp",
      name: "Battle-royal",
      alt: "Battle Royal",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-beastsoffire",
      img: "/new-casino-img/playngo/Beasts-of-fire.webp",
      name: "Beasts-of-fire",
      alt: "Beasts of Fire",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-bigwin777",
      img: "/new-casino-img/playngo/Big-win-777.webp",
      name: "Big-win-777",
      alt: "Big Win 777",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-bigwincat",
      img: "/new-casino-img/playngo/Big-Win-Cat.webp",
      name: "Big-Win-Cat",
      alt: "Big Win Cat",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "HAB-3handblackjackdoubleexposure",
      img: "/new-casino-img/playngo/Blackjack-Double-exposure.webp",
      name: "Blackjack-Double-exposure",
      alt: "Blackjack Double Exposure",
      provider: "QT",
      type: "Blackjack"
    },
    {
      code: "PNG-europeanblackjackmh",
      img: "/new-casino-img/playngo/Blackjack-european.webp",
      name: "Blackjack-european",
      alt: "European Blackjack",
      provider: "QT",
      type: "Blackjack"
    },
    {
      code: "PNG-singledeckblackjackmh",
      img: "/new-casino-img/playngo/Blackjack-single-deck-multihand.webp",
      name: "Blackjack-single-deck-multihand",
      alt: "Single Deck Blackjack Multihand",
      provider: "QT",
      type: "Blackjack"
    },
    {
      code: "PNG-blackmamba",
      img: "/new-casino-img/playngo/Black-mamba.webp",
      name: "Black-mamba",
      alt: "Black Mamba",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-blazinbullfrog",
      img: "/new-casino-img/playngo/Blazin-bullfrog.webp",
      name: "Blazin-bullfrog",
      alt: "Blazin Bullfrog",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-bullinachinashop",
      img: "/new-casino-img/playngo/Bull-in-a-china-shop.webp",
      name: "Bull-in-a-china-shop",
      alt: "Bull in a China Shop",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-catwildeandthepyramidsofdead",
      img: "/new-casino-img/playngo/Cat-Wilde-and-the-Pyramids-of-Dead.webp",
      name: "Cat-Wilde-and-the-Pyramids-of-Dead",
      alt: "Cat Wilde and the Pyramids of Dead",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-dragonmaiden",
      img: "/new-casino-img/playngo/Dragon-maiden.webp",
      name: "Dragon-maiden",
      alt: "Dragon Maiden",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-imperialopera",
      img: "/new-casino-img/playngo/Imperial-Opera.webp",
      name: "Imperial-Opera",
      alt: "Imperial Opera",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-moneywheel",
      img: "/new-casino-img/playngo/Money-Wherel.webp",
      name: "Money-Wherel",
      alt: "Money Wheel",
      provider: "QT",
      type: "Wheel"
    },
    {
      code: "PNG-blinged",
      img: "/new-casino-img/playngo/Blinged.webp",
      name: "Blinged",
      alt: "Blinged",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-boatbonanzacolossalcatch",
      img: "/new-casino-img/playngo/Boat-Bonanza-Colossal-Catch.webp",
      name: "Boat-Bonanza-Colossal-Catch",
      alt: "Boat Bonanza Colossal Catch",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-bookofdead",
      img: "/new-casino-img/playngo/Book-od-dead.webp",
      name: "Book-od-dead",
      alt: "Book of Dead",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-bullinachinashop",
      img: "/new-casino-img/playngo/Bull-in-a-china-shop.webp",
      name: "Bull-in-a-china-shop",
      alt: "Bull in a China Shop",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-bullinarodeo",
      img: "/new-casino-img/playngo/Bull-in-a-Rodeo.webp",
      name: "Bull-in-a-Rodeo",
      alt: "Bull in a Rodeo",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-candyislandprincess",
      img: "/new-casino-img/playngo/Candy-Princess.webp",
      name: "Candy-Princess",
      alt: "Candy Island Princess",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-caninecarnage",
      img: "/new-casino-img/playngo/Canine-Carnage.webp",
      name: "Canine-Carnage",
      alt: "Canine Carnage",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-captainglumpiratehunter",
      img: "/new-casino-img/playngo/Captain-Glum-Pirate-Hunter.webp",
      name: "Captain-Glum-Pirate-Hunter",
      alt: "Captain Glum Pirate Hunter",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-captainxenosearthadventure",
      img: "/new-casino-img/playngo/Captain-zenos.webp",
      name: "Captain-zenos",
      alt: "Captain Xenos Earth Adventure",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-cashacabana",
      img: "/new-casino-img/playngo/Cash-a-Cabana.webp",
      name: "Cash-a-Cabana",
      alt: "Cash a Cabana",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-cashofcommand",
      img: "/new-casino-img/playngo/Cash-of-Command.webp",
      name: "Cash-of-Command",
      alt: "Cash of Command",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-cashpump",
      img: "/new-casino-img/playngo/Cash-pump.webp",
      name: "Cash-pump",
      alt: "Cash Pump",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-cashvandal",
      img: "/new-casino-img/playngo/Cash-vandal.webp",
      name: "Cash-vandal",
      alt: "Cash Vandal",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-catsandcash",
      img: "/new-casino-img/playngo/Cats-and-Cash.webp",
      name: "Cats-and-Cash",
      alt: "Cats and Cash",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-catwildeandtheincanquest",
      img: "/new-casino-img/playngo/Cat-Wilde-and-the-Incan-Quest.webp",
      name: "Cat-Wilde-and-the-Incan-Quest",
      alt: "Cat Wilde and the Incan Quest",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-catwildeandthedoomofdead",
      img: "/new-casino-img/playngo/Cat-Wilde-and-the-Lost-Chapter.webp",
      name: "Cat-Wilde-and-the-Lost-Chapter",
      alt: "Cat Wilde and the Doom of Dead",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-catwildeintheeclipseofthesungod",
      img: "/new-casino-img/playngo/Cat-wilde-Eclipse-of-the-sun-god.webp",
      name: "Cat-wilde-Eclipse-of-the-sun-god",
      alt: "Cat Wilde in the Eclipse of the Sun God",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-chambersofancients",
      img: "/new-casino-img/playngo/Chambers-of-Ancients.webp",
      name: "Chambers-of-Ancients",
      alt: "Chambers of Ancients",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-championsofmithrune",
      img: "/new-casino-img/playngo/Champions-of-Mithrune.webp",
      name: "Champions-of-Mithrune",
      alt: "Champions of Mithrune",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-charliechanceinhelltopay",
      img: "/new-casino-img/playngo/Charie-chance-hell-to-pay.webp",
      name: "Charie-chance-hell-to-pay",
      alt: "Charlie Chance in Hell to Pay",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-charliechance",
      img: "/new-casino-img/playngo/Charlie-chance.webp",
      name: "Charlie-chance",
      alt: "Charlie Chance",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-charliechanceandthecurseofcleopatra",
      img: "/new-casino-img/playngo/Charlie-chance-and-the-curse-of-cleopatra.webp",
      name: "Charlie-chance-and-the-curse-of-cleopatra",
      alt: "Charlie Chance and the Curse of Cleopatra",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-chinesenewyear",
      img: "/new-casino-img/playngo/Chinese-New-year.webp",
      name: "Chinese-New-year",
      alt: "Chinese New Year",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-chronosjoker",
      img: "/new-casino-img/playngo/ChronosJoker.webp",
      name: "ChronosJoker",
      alt: "Chronos Joker",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-clashofcamelot",
      img: "/new-casino-img/playngo/Clash-of-Camelot.webp",
      name: "Clash-of-Camelot",
      alt: "Clash of Camelot",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-cloudquest",
      img: "/new-casino-img/playngo/Cloud-quest.webp",
      name: "Cloud-quest",
      alt: "Cloud Quest",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-coilsofcash",
      img: "/new-casino-img/playngo/Cols-of-cash.webp",
      name: "Cols-of-cash",
      alt: "Coils of Cash",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-coltlightning",
      img: "/new-casino-img/playngo/Colt-Lightning.webp",
      name: "Colt-Lightning",
      alt: "Colt Lightning",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-contact",
      img: "/new-casino-img/playngo/Conflict.webp",
      name: "Conflict",
      alt: "Contact",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-copsnrobbers",
      img: "/new-casino-img/playngo/Cops-n-robbers.webp",
      name: "Cops-n-robbers",
      alt: "Cops n Robbers",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-countjokula",
      img: "/new-casino-img/playngo/Count-Jokula.webp",
      name: "Count-Jokula",
      alt: "Count Jokula",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-courtofhearts",
      img: "/new-casino-img/playngo/Court-of-Heart.webp",
      name: "Court-of-Heart",
      alt: "Court of Hearts",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-coywolfcash",
      img: "/new-casino-img/playngo/Coywolf-cash.webp",
      name: "Coywolf-cash",
      alt: "Coywolf Cash",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-crazycows",
      img: "/new-casino-img/playngo/Crazy-cows.webp",
      name: "Crazy-cows",
      alt: "Crazy Cows",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-crystalsun",
      img: "/new-casino-img/playngo/Crystal-sun.webp",
      name: "Crystal-sun",
      alt: "Crystal Sun",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-dawnofegypt",
      img: "/new-casino-img/playngo/Dawn-of-egypt.webp",
      name: "Dawn-of-egypt",
      alt: "Dawn of Egypt",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-demon",
      img: "/new-casino-img/playngo/Demon.webp",
      name: "Demon",
      alt: "Demon",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-derbywheel",
      img: "/new-casino-img/playngo/Derby-wheel.webp",
      name: "Derby-wheel",
      alt: "Derby Wheel",
      provider: "QT",
      type: "Wheel"
    },
    {
      code: "PNG-deuceswildmh",
      img: "/new-casino-img/playngo/Deuces-Wild.webp",
      name: "Deuces-Wild",
      alt: "Deuces Wild",
      provider: "QT",
      type: "Poker"
    },
    {
      code: "PNG-diamondsoftherealm",
      img: "/new-casino-img/playngo/Diamond-of-the-realm.webp",
      name: "Diamond-of-the-realm",
      alt: "Diamonds of the Realm",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-diamondvortex",
      img: "/new-casino-img/playngo/Diamond-vortex.webp",
      name: "Diamond-vortex",
      alt: "Diamond Vortex",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-discodiamonds",
      img: "/new-casino-img/playngo/Disco-diamonds.webp",
      name: "Disco-diamonds",
      alt: "Disco Diamonds",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-divineshowdown",
      img: "/new-casino-img/playngo/Divine-showdown.webp",
      name: "Divine-showdown",
      alt: "Divine Showdown",
      provider: "QT",
      type: "Slot"
    },
    {
      code: "PNG-drtoonz",
      img: "/new-casino-img/playngo/Drtoonz.webp",
      name: "Drtoonz",
      alt: "Dr Toonz",
      provider: "QT",
      type: "Slot"
    }
  ];

  const saGaming = [
    {
      code: "SAG-baccaratc01",
      img: "/new-casino-img/sagaming/Baarrat-C01.webp",
      name: "Baarrat-C01",
      alt: "Baccarat C01",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratc02",
      img: "/new-casino-img/sagaming/Baarrat-c02.webp",
      name: "Baarrat-c02",
      alt: "Baccarat C02",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratc03",
      img: "/new-casino-img/sagaming/Baarrat-C03.webp",
      name: "Baarrat-C03",
      alt: "Baccarat C03",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratc04",
      img: "/new-casino-img/sagaming/Baarrat-C04.webp",
      name: "Baarrat-C04",
      alt: "Baccarat C04",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratc05",
      img: "/new-casino-img/sagaming/Baarrat-C05.webp",
      name: "Baarrat-C05",
      alt: "Baccarat C05",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratc06",
      img: "/new-casino-img/sagaming/Baarrat-C06.webp",
      name: "Baarrat-C06",
      alt: "Baccarat C06",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratc07",
      img: "/new-casino-img/sagaming/Baarrat-C07.webp",
      name: "Baarrat-C07",
      alt: "Baccarat C07",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratd01",
      img: "/new-casino-img/sagaming/Baccarat-D01.webp",
      name: "Baccarat-D01",
      alt: "Baccarat D01",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratd02",
      img: "/new-casino-img/sagaming/Baccarat-D02.webp",
      name: "Baccarat-D02",
      alt: "Baccarat D02",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratd03",
      img: "/new-casino-img/sagaming/Baccarat-D03.webp",
      name: "Baccarat-D03",
      alt: "Baccarat D03",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratd04",
      img: "/new-casino-img/sagaming/Baccarat-D04.webp",
      name: "Baccarat-D04",
      alt: "Baccarat D04",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratd05",
      img: "/new-casino-img/sagaming/Baccarat-D05.webp",
      name: "Baccarat-D05",
      alt: "Baccarat D05",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratd06",
      img: "/new-casino-img/sagaming/Baccarat-D06.webp",
      name: "Baccarat-D06",
      alt: "Baccarat D06",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-baccaratd07",
      img: "/new-casino-img/sagaming/Baccarat-D07.webp",
      name: "Baccarat-D07",
      alt: "Baccarat D07",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-croulette",
      img: "/new-casino-img/sagaming/C-Roullette.webp",
      name: "C-Roullette",
      alt: "C Roulette",
      provider: "QT",
      type: "Roulette"
    },
    {
      code: "SAG-mandarbahar",
      img: "/new-casino-img/sagaming/M-adhar-bahar.webp",
      name: "M-adhar-bahar",
      alt: "Andar Bahar",
      provider: "QT",
      type: "Card Game"
    },
    {
      code: "SAG-mblackjack",
      img: "/new-casino-img/sagaming/M-blackjack.webp",
      name: "M-blackjack",
      alt: "Blackjack",
      provider: "QT",
      type: "Blackjack"
    },
    {
      code: "SAG-mdragontiger",
      img: "/new-casino-img/sagaming/M-Dragon-Tiger.webp",
      name: "M-Dragon-Tiger",
      alt: "Dragon Tiger",
      provider: "QT",
      type: "Card Game"
    },
    {
      code: "SAG-mroulette",
      img: "/new-casino-img/sagaming/M-Roulette.webp",
      name: "M-Roulette",
      alt: "Roulette",
      provider: "QT",
      type: "Roulette"
    },
    {
      code: "SAG-msicbo",
      img: "/new-casino-img/sagaming/M-Sicbo.webp",
      name: "M-Sicbo",
      alt: "Sic Bo",
      provider: "QT",
      type: "Dice Game"
    },
    {
      code: "SAG-mteenpatti2020",
      img: "/new-casino-img/sagaming/M-Teenpatti-2020.webp",
      name: "M-Teenpatti-2020",
      alt: "Teen Patti 2020",
      provider: "QT",
      type: "Card Game"
    },
    {
      code: "SAG-mpokdeng",
      img: "/new-casino-img/sagaming/Pok-Deng.webp",
      name: "Pok-Deng",
      alt: "Pok Deng",
      provider: "QT",
      type: "Card Game"
    },
    {
      code: "SAG-speedbaccaratc08",
      img: "/new-casino-img/sagaming/Speed-Baarrat-C08.webp",
      name: "Speed-Baarrat-C08",
      alt: "Speed Baccarat C08",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-speedbaccarate09",
      img: "/new-casino-img/sagaming/Speed-Bacarrat-E08.webp",
      name: "Speed-Bacarrat-E08",
      alt: "Speed Baccarat E08",
      provider: "QT",
      type: "Baccarat"
    },
    {
      code: "SAG-speedbaccarate09",
      img: "/new-casino-img/sagaming/Speed-Bacarrat-E09.webp",
      name: "Speed-Bacarrat-E09",
      alt: "Speed Baccarat E09",
      provider: "QT",
      type: "Baccarat"
    }
  ];

  const jilli = [
    {
      code: "600141",
      img: "/new-casino-img/jiligaming/3-Coin-Treasures.webp",
      name: "3-Coin-Treasures",
      alt: "3 Coin Treasures",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600064",
      img: "/new-casino-img/jiligaming/7up7down.webp",
      name: "7up7down",
      alt: "7 Up 7 Down",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "987891",
      img: "/new-casino-img/jiligaming/7-up-doen.webp",
      name: "7-up-doen",
      alt: "7 Up Down",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "600060",
      img: "/new-casino-img/jiligaming/Agent-Ace.webp",
      name: "Agent-Ace",
      alt: "Agent Ace",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600012",
      img: "/new-casino-img/jiligaming/AK47.webp",
      name: "AK47",
      alt: "AK47",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600062",
      img: "/new-casino-img/jiligaming/Ali-Baba.webp",
      name: "Ali-Baba",
      alt: "Ali Baba",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600056",
      img: "/new-casino-img/jiligaming/All-Star-Fishing.webp",
      name: "All-Star-Fishing",
      alt: "All Star Fishing",
      provider: "DC",
      type: "Fishing Game"
    },
    {
      code: "600013",
      img: "/new-casino-img/jiligaming/Andar-Bahar.webp",
      name: "Andar-Bahar",
      alt: "Andar Bahar",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "600128",
      img: "/new-casino-img/jiligaming/Aztec-Priestess.webp",
      name: "Aztec-Priestess",
      alt: "Aztec Priestess",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600089",
      img: "/new-casino-img/jiligaming/Baccarat.webp",
      name: "Baccarat",
      alt: "Baccarat",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "600127",
      img: "/new-casino-img/jiligaming/Bangla-Beauty.webp",
      name: "Bangla-Beauty",
      alt: "Bangla Beauty",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600031",
      img: "/new-casino-img/jiligaming/Bao-boon-chin.webp",
      name: "Bao-boon-chin",
      alt: "Bao Boon Chin",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600086",
      img: "/new-casino-img/jiligaming/Big-Small.webp",
      name: "Big-Small",
      alt: "Big Small",
      provider: "DC",
      type: "Dice Game"
    },
    {
      code: "600105",
      img: "/new-casino-img/jiligaming/Bingo-Adventure.webp",
      name: "Bingo-Adventure",
      alt: "Bingo Adventure",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "600092",
      img: "/new-casino-img/jiligaming/Bingo-Carnaval.webp",
      name: "Bingo-Carnaval",
      alt: "Bingo Carnaval",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "600154",
      img: "/new-casino-img/jiligaming/Blackjack.webp",
      name: "Blackjack",
      alt: "Blackjack",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "600155",
      img: "/new-casino-img/jiligaming/Blackjack-Lucky-Ladies.webp",
      name: "Blackjack-Lucky-Ladies",
      alt: "Blackjack Lucky Ladies",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "600002",
      img: "/new-casino-img/jiligaming/Bombing-Fishing.webp",
      name: "Bombing-Fishing",
      alt: "Bombing Fishing",
      provider: "DC",
      type: "Fishing Game"
    },
    {
      code: "600075",
      img: "/new-casino-img/jiligaming/Bone-Fortune.webp",
      name: "Bone-Fortune",
      alt: "Bone Fortune",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600077",
      img: "/new-casino-img/jiligaming/Bonus-Hunter.webp",
      name: "Bonus-Hunter",
      alt: "Bonus Hunter",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600069",
      img: "/new-casino-img/jiligaming/Book-of-Gold.webp",
      name: "Book-of-Gold",
      alt: "Book of Gold",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600046",
      img: "/new-casino-img/jiligaming/Boxing-King.webp",
      name: "Boxing-King",
      alt: "Boxing King",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600030",
      img: "/new-casino-img/jiligaming/Bubble-Beauty.webp",
      name: "Bubble-Beauty",
      alt: "Bubble Beauty",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600098",
      img: "/new-casino-img/jiligaming/Calaga-Bingo.webp",
      name: "Calaga-Bingo",
      alt: "Calaga Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "600109",
      img: "/new-casino-img/jiligaming/Call-Break.webp",
      name: "Call-Break",
      alt: "Call Break",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "600111",
      img: "/new-casino-img/jiligaming/Callbreak-quick.webp",
      name: "Callbreak-quick",
      alt: "Callbreak Quick",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "600035",
      img: "/new-casino-img/jiligaming/Candy-Baby.webp",
      name: "Candy-Baby",
      alt: "Candy Baby",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600143",
      img: "/new-casino-img/jiligaming/Candyland-Bingo.webp",
      name: "Candyland-Bingo",
      alt: "Candyland Bingo",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "600158",
      img: "/new-casino-img/jiligaming/Caribbean-Stud-Poker.webp",
      name: "Caribbean-Stud-Poker",
      alt: "Caribbean Stud Poker",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "600040",
      img: "/new-casino-img/jiligaming/Charge-Buffalo.webp",
      name: "Charge-Buffalo",
      alt: "Charge Buffalo",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600133",
      img: "/new-casino-img/jiligaming/Charge-Buffalo-Ascent.webp",
      name: "Charge-Buffalo-Ascent",
      alt: "Charge Buffalo Ascent",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600096",
      img: "/new-casino-img/jiligaming/Color-Game.webp",
      name: "Color-Game",
      alt: "Color Game",
      provider: "DC",
      type: "Color Prediction"
    },
    {
      code: "600144",
      img: "/new-casino-img/jiligaming/Color-Prediction.webp",
      name: "Color-Prediction",
      alt: "Color Prediction",
      provider: "DC",
      type: "Color Prediction"
    },
    {
      code: "600029",
      img: "/new-casino-img/jiligaming/Crazy777.webp",
      name: "Crazy777",
      alt: "Crazy 777",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600032",
      img: "/new-casino-img/jiligaming/Crazy-FaFaFa.webp",
      name: "Crazy-FaFaFa",
      alt: "Crazy FaFaFa",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600037",
      img: "/new-casino-img/jiligaming/Crazy-Golden-Bank.webp",
      name: "Crazy-Golden-Bank",
      alt: "Crazy Golden Bank",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600057",
      img: "/new-casino-img/jiligaming/Crazy-Hunter.webp",
      name: "Crazy-Hunter",
      alt: "Crazy Hunter",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600074",
      img: "/new-casino-img/jiligaming/Crazy-Pusher.webp",
      name: "Crazy-Pusher",
      alt: "Crazy Pusher",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600122",
      img: "/new-casino-img/jiligaming/Cricket-King-18.webp",
      name: "Cricket-King-18",
      alt: "Cricket King 18",
      provider: "DC",
      type: "Sports Game"
    },
    {
      code: "600124",
      img: "/new-casino-img/jiligaming/Cricket-Sah-75.webp",
      name: "Cricket-Sah-75",
      alt: "Cricket Sah 75",
      provider: "DC",
      type: "Sports Game"
    },
    {
      code: "600126",
      img: "/new-casino-img/jiligaming/Devil-fire.webp",
      name: "Devil-fire",
      alt: "Devil Fire",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600119",
      img: "/new-casino-img/jiligaming/DiamondParty.webp",
      name: "DiamondParty",
      alt: "Diamond Party",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600055",
      img: "/new-casino-img/jiligaming/dICE.webp",
      name: "dICE",
      alt: "Dice",
      provider: "DC",
      type: "Dice Game"
    },
    {
      code: "600003",
      img: "/new-casino-img/jiligaming/Dinosaur-Tycoon.webp",
      name: "Dinosaur-Tycoon",
      alt: "Dinosaur Tycoon",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600066",
      img: "/new-casino-img/jiligaming/Dinosaur-Tycoon-II.webp",
      name: "Dinosaur-Tycoon-II",
      alt: "Dinosaur Tycoon II",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600087",
      img: "/new-casino-img/jiligaming/Dragon-&-Tiger.webp",
      name: "Dragon-&-Tiger",
      alt: "Dragon & Tiger",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "600005",
      img: "/new-casino-img/jiligaming/Dragon-Fortune.webp",
      name: "Dragon-Fortune",
      alt: "Dragon Fortune",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600053",
      img: "/new-casino-img/jiligaming/Fortune-Gems.webp",
      name: "Fortune-Gems",
      alt: "Fortune Gems",
      provider: "DC",
      type: "Slot"
    },
    {
      code: "600027",
      img: "/new-casino-img/jiligaming/God-Of-Martial.webp",
      name: "God-Of-Martial",
      alt: "God Of Martial",
      provider: "DC",
      type: "Slot"
    }
  ];

  const kingmaker = [
    {
      code: "400078",
      img: "/new-casino-img/kingmaker/32m-Card.webp",
      name: "32m-Card",
      alt: "32m Card",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "400071",
      img: "/new-casino-img/kingmaker/Andar-Bahar.webp",
      name: "Andar-Bahar",
      alt: "Andar Bahar",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "400068",
      img: "/new-casino-img/kingmaker/Bai-Buu.webp",
      name: "Bai-Buu",
      alt: "Bai Buu",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "400089",
      img: "/new-casino-img/kingmaker/Bingo-Roll.webp",
      name: "Bingo-Roll",
      alt: "Bingo Roll",
      provider: "DC",
      type: "Bingo"
    },
    {
      code: "400077",
      img: "/new-casino-img/kingmaker/BlackJack.webp",
      name: "BlackJack",
      alt: "Blackjack",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "400074",
      img: "/new-casino-img/kingmaker/Bola-Golek.webp",
      name: "Bola-Golek",
      alt: "Bola Golek",
      provider: "DC",
      type: "Dice Game"
    },
    {
      code: "400081",
      img: "/new-casino-img/kingmaker/Bonus-Dice.webp",
      name: "Bonus-Dice",
      alt: "Bonus Dice",
      provider: "DC",
      type: "Dice Game"
    },
    {
      code: "400095",
      img: "/new-casino-img/kingmaker/Cash-Rocket.webp",
      name: "Cash-Rocket",
      alt: "Cash Rocket",
      provider: "DC",
      type: "Crash Game"
    },
    {
      code: "400075",
      img: "/new-casino-img/kingmaker/Coin-Toss.webp",
      name: "Coin-Toss",
      alt: "Coin Toss",
      provider: "DC",
      type: "Coin Game"
    },
    {
      code: "400088",
      img: "/new-casino-img/kingmaker/Color-Game.webp",
      name: "Color-Game",
      alt: "Color Game",
      provider: "DC",
      type: "Color Prediction"
    },
    {
      code: "400066",
      img: "/new-casino-img/kingmaker/European-Roulette.webp",
      name: "European-Roulette",
      alt: "European Roulette",
      provider: "DC",
      type: "Roulette"
    },
    {
      code: "400065",
      img: "/new-casino-img/kingmaker/Fruit-Roulette.webp",
      name: "Fruit-Roulette",
      alt: "Fruit Roulette",
      provider: "DC",
      type: "Roulette"
    },
    {
      code: "400085",
      img: "/new-casino-img/kingmaker/hIEST.webp",
      name: "hIEST",
      alt: "HIEST",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "400069",
      img: "/new-casino-img/kingmaker/Jhandi-Munda.webp",
      name: "Jhandi-Munda",
      alt: "Jhandi Munda",
      provider: "DC",
      type: "Dice Game"
    },
    {
      code: "400091",
      img: "/new-casino-img/kingmaker/Marble-Knockout.webp",
      name: "Marble-Knockout",
      alt: "Marble Knockout",
      provider: "DC",
      type: "Marble Game"
    },
    {
      code: "400072",
      img: "/new-casino-img/kingmaker/Pai-Kang.webp",
      name: "Pai-Kang",
      alt: "Pai Kang",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "400079",
      img: "/new-casino-img/kingmaker/Plinko.webp",
      name: "Plinko",
      alt: "Plinko",
      provider: "DC",
      type: "Plinko"
    },
    {
      code: "400073",
      img: "/new-casino-img/kingmaker/Pok-Deng.webp",
      name: "Pok-Deng",
      alt: "Pok Deng",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "400056",
      img: "/new-casino-img/kingmaker/Sicbo.webp",
      name: "Sicbo",
      alt: "Sic Bo",
      provider: "DC",
      type: "Dice Game"
    },
    {
      code: "400094",
      img: "/new-casino-img/kingmaker/Sugar-Blast.webp",
      name: "Sugar-Blast",
      alt: "Sugar Blast",
      provider: "DC",
      type: "Crash Game"
    },
    {
      code: "400084",
      img: "/new-casino-img/kingmaker/Teenpatti.webp",
      name: "Teenpatti",
      alt: "Teen Patti",
      provider: "DC",
      type: "Card Game"
    },
    {
      code: "400092",
      img: "/new-casino-img/kingmaker/Virtual-Hound-Racing.webp",
      name: "Virtual-Hound-Racing",
      alt: "Virtual Hound Racing",
      provider: "DC",
      type: "Racing"
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



  useEffect(() => {
    if (menuBarRef.current) {
      menuBarRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setSelectedLobby(param);
  }, [param]);

  useEffect(() => {
    const selectedEl = lobbyRefs.current[selectedLobby];
    if (selectedEl) {
      selectedEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedLobby]);



  return (
    <>
      {/* Mac888 images */}
      <div className="mt-1 p-[2px] lg:p-0">
        <div className='flex justify-between items-center bg-[var(--theme1-bg)] mb-[2px]'>
          <div className='flex justify-start items-center text-xs font-bold text-[var(--secondary-color)] p-2 gap-1'>
            <img src="/Images/99998.png" alt="" className='w-3' />
            <span>CASINO</span></div>
          <div className='flex border border-black bg-[#fff]'>
            <input type="search" name="" id="" placeholder='Search Game...' className='text-xs px-1 w-44 focus:outline-none focus:border-none' />
            <div className="flex justify-center items-center bg-[#bb1919] p-1 w-8 h-8 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='invert w-3'>
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>

            </div>
          </div>
        </div>
        <div className='overflow-x-auto scroll-hide w-full mb-[2px] bg-[var(--theme2-bg)]' ref={menuBarRef}>
          <ul className='flex flex-nowrap w-full text-xs font-bold text-[var(--secondary-color)] uppercase whitespace-nowrap'>
            <li ref={(el) => (lobbyRefs.current["all"] = el)}
              onClick={() => setSelectedLobby("all")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'all' ? 'bg-[var(--theme1-bg)]' : ''}`}>
              <span>
                All
              </span>
            </li>
            <li className={`p-2 border-r border-[#fff]`}><span>Recent</span></li>
            <li ref={(el) => (lobbyRefs.current["ezugi"] = el)}
              onClick={() => setSelectedLobby("ezugi")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'ezugi' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Ezugi Gaming</span></li>
            <li ref={(el) => (lobbyRefs.current["sn"] = el)}
              onClick={() => setSelectedLobby("sn")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'sn' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Supernowa</span></li>
            <li ref={(el) => (lobbyRefs.current["spribe"] = el)}
              onClick={() => setSelectedLobby("spribe")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'spribe' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Spribe</span></li>
            <li ref={(el) => (lobbyRefs.current["beter-live"] = el)}
              onClick={() => setSelectedLobby("beter-live")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'beter-live' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Beter Live</span></li>
            <li ref={(el) => (lobbyRefs.current["ho-gaming"] = el)}
              onClick={() => setSelectedLobby("ho-gaming")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'ho-gaming' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Ho Gaming</span></li>
            <li ref={(el) => (lobbyRefs.current["evolution"] = el)}
              onClick={() => setSelectedLobby("evolution")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'evolution' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Evolution</span></li>
            <li ref={(el) => (lobbyRefs.current["royal-gaming"] = el)}
              onClick={() => setSelectedLobby("royal-gaming")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'royal-gaming' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Royal Gaming</span></li>
            <li ref={(el) => (lobbyRefs.current["mac888"] = el)}
              onClick={() => setSelectedLobby("mac888")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'mac888' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Mac88</span></li>
            <li ref={(el) => (lobbyRefs.current["bet-games"] = el)}
              onClick={() => setSelectedLobby("bet-games")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'bet-games' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Bet Games</span></li>
            <li ref={(el) => (lobbyRefs.current["one-two-gaming"] = el)}
              onClick={() => setSelectedLobby("one-two-gaming")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'one-two-gaming' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>1x2 Gaming</span></li>
            <li ref={(el) => (lobbyRefs.current["turbo-gaming"] = el)}
              onClick={() => setSelectedLobby("turbo-gaming")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'turbo-gaming' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Turbo Games</span></li>
            <li ref={(el) => (lobbyRefs.current["onlyplay-casino"] = el)}
              onClick={() => setSelectedLobby("onlyplay-casino")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'onlyplay-casino' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Only Play</span></li>
            <li ref={(el) => (lobbyRefs.current["smartsoft-casino"] = el)}
              onClick={() => setSelectedLobby("smartsoft-casino")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'smartsoft-casino' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>SmartSoft</span></li>
            <li ref={(el) => (lobbyRefs.current["caleta-casino"] = el)}
              onClick={() => setSelectedLobby("caleta-casino")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'caleta-casino' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Caleta</span></li>
            <li ref={(el) => (lobbyRefs.current["play-n-go-casino"] = el)}
              onClick={() => setSelectedLobby("play-n-go-casino")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'play-n-go-casino' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Play-n-go</span></li>
            <li ref={(el) => (lobbyRefs.current["sa-gaming-casino"] = el)}
              onClick={() => setSelectedLobby("sa-gaming-casino")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'sa-gaming-casino' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Sa-Gaming</span></li>
            <li ref={(el) => (lobbyRefs.current["jilli-casino"] = el)}
              onClick={() => setSelectedLobby("jilli-casino")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'jilli-casino' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Jilli</span></li>
            <li ref={(el) => (lobbyRefs.current["kingmaker-casino"] = el)}
              onClick={() => setSelectedLobby("kingmaker-casino")} className={`p-2 border-r border-[#fff] ${selectedLobby == 'kingmaker-casino' ? 'bg-[var(--theme1-bg)]' : ''}`}><span>Kingmaker</span></li>
          </ul>
        </div>
        <div className='overflow-x-auto scroll-hide w-full border border-[var(--theme2-bg)] my-1'>
          <ul className='flex flex-nowrap w-full whitespace-nowrap'>
            <li className='border-r border-[var(--theme2-bg)] bg-[var(--theme2-bg)] text-[var(--secondary-color)]'>
              <div className='w-20 flex flex-col justify-center items-center text-xs p-1'>
                <img src="/Images/all.png" alt="" className='w-8 h-5 mb-2 invert' />
                <span>All</span>
              </div>
            </li>
            <li className='border-r border-[var(--theme2-bg)]'>
              <div className='w-20 flex flex-col justify-center items-center text-xs p-1'>
                <img src="/Images/baccarat.png" alt="" className='w-8 h-5 mb-2' />
                <span>Baccarat</span>
              </div>
            </li>
            <li className='border-r border-[var(--theme2-bg)]'>
              <div className='w-20 flex flex-col justify-center items-center text-xs p-1'>
                <img src="/Images/dragon-tiger.png" alt="" className='w-8 h-5 mb-2 ' />
                <span>Dragon Tiger</span>
              </div>
            </li>
            <li className='border-r border-[var(--theme2-bg)]'>
              <div className='w-20 flex flex-col justify-center items-center text-xs p-1'>
                <img src="/Images/sicbo.png" alt="" className='w-8 h-5 mb-2 ' />
                <span>Sibco</span>
              </div>
            </li>
            <li className='border-r border-[var(--theme2-bg)]'>
              <div className='w-20 flex flex-col justify-center items-center text-xs p-1'>
                <img src="/Images/roulette.png" alt="" className='w-8 h-5 mb-2 ' />
                <span>Roulette</span>
              </div>
            </li>
            <li className='border-r border-[var(--theme2-bg)]'>
              <div className='w-20 flex flex-col justify-center items-center text-xs p-1'>
                <img src="/Images/teenpatti.png" alt="" className='w-8 h-5 mb-2 ' />
                <span>Teenpatti</span>
              </div>
            </li>
            <li className='border-r border-[var(--theme2-bg)]'>
              <div className='w-20 flex flex-col justify-center items-center text-xs p-1'>
                <img src="/Images/andarbahar.png" alt="" className='w-8 h-5 mb-2 ' />
                <span>Andarbahar</span>
              </div>
            </li>
            <li className='border-r border-[var(--theme2-bg)]'>
              <div className='w-20 flex flex-col justify-center items-center text-xs p-1'>
                <img src="/Images/hi-low.png" alt="" className='w-8 h-5 mb-2 ' />
                <span>Hi Low</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="">
          {selectedLobby == "all" &&
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
                    <div className="w-full h-20 lg:h-[8rem]">
                      <img
                        src={item.img}
                        className="w-full h-full object-fill"
                        alt={item.alt}
                        loading="lazy" // Optimized loading
                      />
                    </div>
                    <p
                      className="flex justify-center items-center text-[8px] lg:text-xs font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
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
            </div>}
          <ul className="grid grid-cols-4 gap-[2px]">
            {/* 4 columns with small gap */}
            {selectedLobby == "ezugi" && ezugiGames?.map((item, index) => (
              <li
                key={index}
                className="casino-linkss"
                data-toggle="modal"
                data-target="#myModal"
                onClick={() =>
                  CreateAndLaunchWCOCasino(item.provider, item.code)
                }
              >
                <div className="w-full h-20 lg:h-[8rem]">
                  <img
                    src={`https://img.jaipurapps.com/new-casino-img/Ezugi/${item.img}`}
                    className="w-full h-full object-fill"
                    alt={item.alt}
                    loading="lazy" // Optimized loading
                  />
                </div>
                <p
                  className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                  }}
                >
                  {item.name}
                </p>
              </li>
            ))}
            {selectedLobby == "sn" &&
              casinoGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "spribe" &&
              spbGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "beter-live" &&
              btGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "ho-gaming" &&
              hoGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "evolution" &&
              evzGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code, item.extra)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "royal-gaming" &&
              royalGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "mac888" &&
              mac888?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "bet-games" &&
              betGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "one-two-gaming" &&
              oneTwoGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "turbo-gaming" &&
              turboGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "onlyplay-casino" &&
              onlyPlayGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "smartsoft-casino" &&
              smartSoftGames?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "caleta-casino" &&
              caleta?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "play-n-go-casino" &&
              playNGo?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "sa-gaming-casino" &&
              saGaming?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "jilli-casino" &&
              jilli?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }
            {selectedLobby == "kingmaker-casino" &&
              kingmaker?.map((item, index) => (
                <li
                  key={index}
                  className="casino-linkss"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() =>
                    CreateAndLaunchWCOCasino(item.provider, item.code)
                  }
                >
                  <div className="w-full h-20 lg:h-[8rem]">
                    <img
                      src={`https://img.jaipurapps.com${item.img}`}
                      className="w-full h-full object-fill"
                      alt={item.alt}
                      loading="lazy" // Optimized loading
                    />
                  </div>
                  <p
                    className="flex justify-center items-center text-[8px] lg:text-xs text-center font-semibold text-[var(--secondary-color)] uppercase h-[34px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(128, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    </>
  )
}

export default DiamondLobby