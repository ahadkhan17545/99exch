import React, { useEffect, useRef, useState } from "react";
import "../Lobby/AllGamesLobby.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Helper from "../../helper";
import Appconfig from "../../config/config";
import { toast } from "react-toastify";
import gsap from "gsap";

function AllGamesLobby() {
  const lobbyRefs = useRef({});
  const menuBarRef = useRef(null);

  const [selectedLobby, setSelectedLobby] = useState("ezugi");

  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location : ", location?.state?.activeCasino);
  const param = location?.state?.activeCasino || "ezugi";
  const userInfo = Helper();

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

  // Banner

  const bannerImages = {
    ezugi:
      "https://livecasinomate.com/wp-content/uploads/2023/06/roleta-brasileira-eguzi.webp",
    sn: "https://media.licdn.com/dms/image/v2/C4D1BAQE979hjDP2s7Q/company-background_10000/company-background_10000/0/1652254637435/supernowa_games_cover?e=2147483647&v=beta&t=2VdFIHAofRK8aG5UKLn54dqNfWP_JMJ3vZjk4ZemKpU",
    spribe:
      "https://7cricinr.com/blog/wp-content/uploads/2023/07/aviator-spribe.webp",
    "beter-live":
      "https://assets.aboutslots.com/uploads/assets/g_FGE_0_HA_8_FCV_Bm4z7bmm4_71bff42083.png",
    "ho-gaming":
      "https://cdn.skywindgroup.com/cdn/sizes/1f/6a/1f6a31dfc2b7c32eafa32f2cb317f35ddd76f012/image.webp",
    evolution:
      "https://gamblino.com/wp-content/uploads/2023/05/13-Game-Provider-Evolution.png",
    "royal-gaming":
      "https://royalxcasino.pro/wp-content/uploads/2025/01/Royal-X-casino-Pro.webp",
    mac888:
      "https://betshera.com/static/media/TeenpattiFaceOff.f469616ee2e38158df89.png",
    "super-spade-casino":
      "https://nimionlineadmission.in/ubi/blog/wp-content/uploads/2023/07/live-dealer-baccarat-india_7f2324cc5.jpg",
    "bet-games":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZeF5KCKbz5A05eaUOs-13xszK9k_xk8srkMgY0xthZV6E6891sE54Lg7mmXa-hALEQ&usqp=CAU",
    "one-two-gaming":
      "https://assets.aboutslots.com/uploads/assets/fa20c_1x2_97166bd5f2.jpg",
    "turbo-gaming":
      "https://turbominesgame.com/wp-content/uploads/2024/06/Turbo_Games.jpg",
    "onlyplay-casino":
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdFH4lxk9wUelRiVdBdKjdlZMdLVY0imGsB31zmhTXj1pANQi3G3r7Oq6aI8yJUaRShN8DdNQidlFpPxKoG8MgT0GbopcKpF48jJ2FRdPtp-M4Edumy5j0KLdXSDRk4MU__CZ3TNA?key=v_u3bG7VibRvRRK_e9I9R5C2",
    "smartsoft-casino":
      "https://www.worldcasinodirectory.com/images/content/smartsoft-gaming_1669153273279.jpg",
    "caleta-casino":
      "https://assets.aboutslots.com/uploads/assets/aaa13_caleta_7fb63ce4f6.jpg",
    "bollytech-casino":
      "https://bollytech.com/wp-content/uploads/2024/05/word-image-11289-1.png",
    "play-n-go-casino":
      "https://baccarat-tips.com/wp-content/uploads/2023/04/Play-n-go-Casinos.webp",
    "sa-gaming-casino":
      "https://96acegamesg.com/wp-content/uploads/2025/02/SA-Gaming-at-96ACE-Singapore.jpg",
    "jilli-casino":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI29_uYKw9MTCFi6AQ0AjOOR-fSsnu2Vj4_5RrQ-lQZu2mqC8xlI3lAaJUmv_C36lmSw&usqp=CAU",
    "kingmaker-casino":
      "https://kingmakercasino-au.com/wp-content/uploads/2024/11/Kingmaker.webp",
  };

  const ezugiGames = [
    { code: "601000", img: "Baccarat-A.webp" },
    { code: "272", img: "Baccarat-B.webp" },
    { code: "273", img: "Baccarat-C.webp" },
    { code: "274", img: "Baccarat-D.webp" },
    { code: "108", img: "Baccarat-E.webp" },
    { code: "221007", img: "Cricket-Auto-Roulette.webp" },
    { code: "173", img: "No-commision-Baccarat--B.webp" },
    { code: "174", img: "No-commision-Baccarat--C.webp" },
    { code: "175", img: "No-commision-Baccarat--D.webp" },
    { code: "170", img: "No-commision-Baccarat--E.webp" },
    { code: "172", img: "No-commision-Baccarat-A.webp" },
    { code: "228002", img: "32-Cards.webp" },
    { code: "228000", img: "Andar-Bahar.webp" },
    { code: "5001", img: "Auto-roulette.webp" },
    { code: "227101", img: "Beton-number.webp" },
    { code: "201", img: "Blackjack1.webp" },
    { code: "270", img: "BlackJack-a.webp" },
    { code: "272", img: "BlackJack-B.webp" },
    { code: "273", img: "BlackJack-C.webp" },
    { code: "274", img: "BlackJack-D.webp" },
    { code: "260", img: "Blackjack-da-Sorte.webp" },
    { code: "275", img: "BlackJack-E.webp" },
    { code: "507000", img: "Casino-Hold_em.webp" },
    { code: "328000", img: "Casino-Marina-Andar-Bahar.webp" },
    { code: "32100", img: "Casino-Marina-Baccarat-1.webp" },
    { code: "32101", img: "Casino-Marina-Baccarat-2.webp" },
    { code: "32102", img: "Casino-Marina-Baccarat-3.webp" },
    { code: "32103", img: "Casino-Marina-Baccarat-4.webp" },
    { code: "321000", img: "Casino-Marina-Roulette-1.webp" },
    { code: "321001", img: "Casino-Marina-Roulette-2.webp" },
    { code: "45100", img: "cRICKET-wAR.webp" },
    { code: "221003", img: "dIAMOND-rOULETTE.webp" },
    { code: "150", img: "dRAGON-tIGER.webp" },
    { code: "2150", img: "Dragon-Tiger-da-Sorte.webp" },
    { code: "481004", img: "EZ-Dealer-Roleta-Brazileira.webp" },
    { code: "481000", img: "EZ-Dealer-Roulette-English.webp" },
    { code: "481002", img: "EZ-Dealer-Roulette-Japanese.webp" },
    { code: "481003", img: "EZ-Dealer-Roulette-Mandarin.webp" },
    { code: "481001", img: "EZ-Dealer-Roulette-Thai.webp" },
    { code: "102", img: "Fortune-Baccarat.webp" },
    { code: "4", img: "Gold-Blacckjack-4.webp" },
    { code: "204", img: "gOLD-bLACKjACK-1.webp" },
    { code: "203", img: "Gold-blackjack-3.webp" },
    { code: "1", img: "Gold-BlackJack-5.webp" },
    { code: "223", img: "Gold-blackjack-6.webp" },
    { code: "120", img: "Knockout-Baccarat.webp" },
    { code: "228001", img: "Lucky-7.webp" },
    { code: "221005", img: "Namaste-Roulette.webp" },
    { code: "227103", img: "One-Day-Teen-Patti.webp" },
    { code: "611003", img: "Oracle-360-Roulette.webp" },
    { code: "611001", img: "Oracle-Roulette-2.webp" },
    { code: "221004", img: "PAR_Roulte.webp" },
    { code: "611000", img: "Portomaso-Roulette-2.webp" },
    { code: "241000", img: "Roleta-da-sorte.webp" },
    { code: "271000", img: "Ruleta-A.png-1.webp" },
    { code: "411", img: "Rumba-Blackjack-1.webp" },
    { code: "412", img: "Rumba-blackjack-2.webp" },
    { code: "413", img: "Rumba-blackjack-3.webp" },
    { code: "414", img: "Rumba-blackjack-4.webp" },
    { code: "425", img: "Russian-Blackjack-1.webp" },
    { code: "426", img: "Russian-Blackjack-2.webp" },
    { code: "537000", img: "Russian-Poker.webp" },
    { code: "227", img: "Salon-Prive-Blackjack.webp" },
    { code: "224000", img: "Sicbo.webp" },
    { code: "221008", img: "Skyline-Roulette.webp" },
    { code: "411000", img: "Spanish-Roulette.webp" },
    { code: "221002", img: "Speed-Auto-Roulette.webp" },
    { code: "101", img: "Speed-Cricket-Baccarat.webp" },
    { code: "105", img: "Speed-Fortune-Baccarat.webp" },
    { code: "221000", img: "Speed-Roulette.webp" },
    { code: "130", img: "Super-6-Baccarat.webp" },
    { code: "227100", img: "Teen-Patti-3-Card.webp" },
    { code: "224", img: "Three-Card-Poker.webp" },
    { code: "421", img: "Turkish-Blackjack-1.webp" },
    { code: "422", img: "Turkish-Blackjack-2.webp" },
    { code: "501000", img: "Turkish-Roulette.webp" },
    { code: "5051", img: "Turkish-Unlimited-Blackjack.webp" },
    { code: "228100", img: "Ultimate-Andar-Bahar.webp" },
    { code: "541000", img: "Ultimate-Roulette.webp" },
    { code: "224100", img: "Ultimate-Sic-Bo.webp" },
    { code: "51", img: "Unlimited-Blackjack.webp" },
    { code: "225", img: "VIP-Diamond-Blackjack.webp" },
    { code: "106", img: "VIP-Fortune-Baccarat.webp" },
    { code: "171", img: "VIP-No-Commission-Speed-Cricket-Baccarat.webp" },
  ];

  const casinoGames = [
    { code: "VC32", img: "32-Cards.webp" },
    { code: "ARW", img: "Akbar-Romeo-Walter.webp" },
    { code: "AB", img: "Andar-Bahar.webp" },
    { code: "AB", img: "Andar-Bahar-Yellow.webp" },
    { code: "BAC", img: "Baccarat.webp" },
    { code: "ABC", img: "Classic-Andar-Bahar.webp" },
    { code: "DT7M", img: "dragon-tiger.webp" },
    { code: "AB2", img: "Goas-Andar-Bahar.webp" },
    { code: "VCR", img: "king-race.webp" },
    { code: "UD7", img: "Lucky-7.webp" },
    { code: "MTP7M", img: "Muflis-teenpatti.webp" },
    { code: "VTP20", img: "Teen-Patti-2020.webp" },
    { code: "VTP20", img: "Teen-Patti-2020.webp" },
    { code: "VTP", img: "1-RNG-Teen-Patti_1654174277274.199-(1).webp" },
    { code: "VBAC", img: "2-RNG-Baccarat_1654174122016.387.webp" },
    { code: "VDT", img: "3-RNG-Dragon-Tiger_1654174186400.0757.webp" },
    { code: "VWM", img: "5-RNG-Worli-Matka_1654174294949.6729.webp" },
    { code: "VARW", img: "6-RNG-ARW_1654174098050.0847.webp" },
    { code: "VTP", img: "7-RNG-3patti2020_1654174287868.55.webp" },
    { code: "VC32", img: "8-RNG-32Cards_1654174090231.0889.webp" },
    { code: "VUD7", img: "10-RNG-Lucky-7_1654174238397.5676-(1).webp" },
    { code: "VDT", img: "12-RNG-Dragon-tiger-2020_1654174197536.3057.webp" },
    { code: "RCQ20", img: "20-RNG-casino-queen_1654174167060.9355.webp" },
    { code: "VJKR", img: "21-RNG-Joker_1654174209032.3987.webp" },
    { code: "RCQ", img: "23-RNG-queen_1654174151635.7964.webp" },
  ];

  const spbGames = [
    { code: "aviator", img: "Aviator.webp" },
    { code: "dice", img: "Dice.webp" },
    { code: "goal", img: "Goal.webp" },
    { code: "hi-lo", img: "Hilo.webp" },
    { code: "hotline", img: "Hotline.webp" },
    { code: "multikeno", img: "Keno-80.webp" },
    { code: "keno", img: "Keno.webp" },
    { code: "mines", img: "Mines.webp" },
    { code: "plinko", img: "Plinko.webp" },
    { code: "poker", img: "Poker.webp" },
    { code: "mini-roulette", img: "ROULETTE.webp" },
  ];

  const btGames = [
    { code: "220013", img: "Aisan-BlackJack.webp" },
    { code: "220003", img: "Auto-Roulette.webp" },
    { code: "220011", img: "Bet-On-Teen-Patti.webp" },
    { code: "220010", img: "Gravity-BlackJack.webp" },
    { code: "220014", img: "Gravity-Roulette.webp" },
    { code: "220016", img: "Live-Sic-Bo.webp" },
    { code: "220006", img: "Live-Baccarat-1.webp" },
    { code: "220008", img: "Live-Baccarat-2.webp" },
    { code: "220009", img: "Live-Baccarat-2-NC.webp" },
    { code: "220015", img: "Live-BlackJack-5.webp" },
    { code: "220002", img: "Live-French-Roulette.webp" },
    { code: "220001", img: "Live-Roulette.webp" },
  ];

  const hoGames = [
    { code: "HOG-a1sapphirebaccarat", img: "A1-Sapphire-Baccarat.webp" },
    { code: "HOG-c1speedbaccarat", img: "C1-Speed-Baccarat.webp" },
    { code: "HOG-c2speedbaccarat", img: "C2-Speed-Baccarat.webp" },
    { code: "HOG-c3speedbaccarat", img: "C3-speed-Baccarat.webp" },
    { code: "HOG-c4immersivespeedbaccarat", img: "C4-Speed-baccarat.webp" },
    { code: "HOG-c5speedbaccarat", img: "C5-Speed-baccarat.webp" },
    { code: "HOG-c7speedbaccarat", img: "C7-Speed-Baccarat.webp" },
    { code: "HOG-c8baccarat", img: "C8-Baccarat.webp" },
    { code: "HOG-c9baccarat", img: "C9-Baccarat.webp" },
    { code: "HOG-dt2dragontiger", img: "DT2-DragonTiger.webp" },
    { code: "HOG-j2blackjack", img: "J2-Blackjack.webp" },
    { code: "HOG-n1baccarat", img: "N1-Baccarat.webp" },
    { code: "HOG-n1blackjack", img: "N1-Blackjack.webp" },
    { code: "HOG-n1roulette", img: "N1-Roulette.webp" },
    { code: "HOG-n2speedbaccarat", img: "N2-Speed-Baccarat.webp" },
    { code: "HOG-n3baccarat", img: "N3-Baccarat.webp" },
    { code: "HOG-n4immersivebaccarat", img: "N4-Immersive-Bacarat.webp" },
    { code: "HOG-s1roulette", img: "S1-Roulette.webp" },
    { code: "HOG-s2roulette", img: "S2-Roulette.webp" },
  ];

  const evzGames = [
    { code: "1000011", extra: "EV", img: "American-Roulette.webp" },
    { code: "1000078", extra: "EV", img: "Arabic-Roulette.webp" },
    { code: "1000371", extra: "EV", img: "Crazy-Coin-Flip.webp" },
    { code: "1000543", extra: "EV", img: "Crazy-pachinko.webp" },
    { code: "1000096", extra: "EV", img: "monopoly.webp" },
    { code: "1000123", extra: "EV", img: "Auto-Roulette.webp" },
    { code: "1000153", extra: "EV", img: "Auto-Roulette-La-Partage.webp" },
    { code: "1000126", extra: "EV", img: "Auto-Roulette-VIP.webp" },
    { code: "1000360", extra: "EV", img: "Bac-bo.webp" },
    { code: "1000016", extra: "EV", img: "Bac-bo.webp" },
    { code: "1000012", extra: "EV", img: "Baccarat-A.webp" },
    { code: "1000013", extra: "EV", img: "Baccarat-B.webp" },
    { code: "1000015", extra: "EV", img: "Baccarat-Control-Squeeze.webp" },
    { code: "1000148", extra: "EV", img: "Crazy-Time-A.webp" },
    { code: "1000072", extra: "EV", img: "Deal-or-No-Deal.webp" },
    { code: "1000500", extra: "EV", img: "Extra-chilli.webp" },
    { code: "1000353", extra: "EV", img: "Fan-Tan.webp" },
    { code: "1000249", extra: "EV", img: "First-Person-Craps.webp" },
    { code: "1000142", extra: "EV", img: "First-Person-Mega-Ball.webp" },
    { code: "1000030", extra: "EV", img: "BlackJack-A.webp" },
    { code: "1000032", extra: "EV", img: "BlackJack-C.webp" },
    { code: "1000167", extra: "EV", img: "Blackjack-Classic-7.webp" },
    { code: "1000224", extra: "EV", img: "Blackjack-Classic-8.webp" },
    { code: "1000144", extra: "EV", img: "First-Person-Top-Card.webp" },
    { code: "1000443", extra: "EV", img: "Football-Studio-Dice.webp" },
    { code: "1000501", extra: "EV", img: "funky-time.webp" },
    { code: "1000536", extra: "EV", img: "Gonzo-Treasure-Map.webp" },
    { code: "1100022", extra: "EV", img: "Gonzo-tresure-hunt-Live.webp" },
    { code: "1000141", extra: "EV", img: "Megaball.webp" },
    { code: "1000168", extra: "EV", img: "Blackjack-Classic-9.webp" },
    { code: "1000173", extra: "EV", img: "Blackjack-Classic-17.webp" },
    { code: "1000174", extra: "EV", img: "Blackjack-Classic-18.webp" },
    { code: "1000176", extra: "EV", img: "Blackjack-Classic-20.webp" },
    { code: "1000225", extra: "EV", img: "Blackjack-Classic-24.webp" },
    { code: "1000178", extra: "EV", img: "Blackjack-Classic-25.webp" },
    { code: "1000197", extra: "EV", img: "Blackjack-Classic-44.webp" },
    { code: "1000198", extra: "EV", img: "Blackjack-Classic-45.webp" },
    { code: "1000199", extra: "EV", img: "Blackjack-Classic-46.webp" },
    { code: "1000200", extra: "EV", img: "Blackjack-Classic-47.webp" },
    { code: "1000220", extra: "EV", img: "Blackjack-Classic-67.webp" },
    { code: "1000221", extra: "EV", img: "Blackjack-Classic-68.webp" },
    { code: "1000222", extra: "EV", img: "Blackjack-Classic-69.webp" },
    { code: "1000245", extra: "EV", img: "Blackjack-Classic-70.webp" },
    { code: "1000246", extra: "EV", img: "Blackjack-Classic-71.webp" },
    { code: "1000247", extra: "EV", img: "Blackjack-Classic-72.webp" },
    { code: "1000164", extra: "EV", img: "blackjack-gamma.webp" },
    { code: "1000164", extra: "EV", img: "BlackJack-L.webp" },
    { code: "1000445", extra: "EV", img: "Brazilian-Roulette.webp" },
    { code: "1000352", extra: "EV", img: "Cash-or-Crash.webp" },
    { code: "1000075", extra: "EV", img: "Casino-Hold_em.webp" },
    { code: "1000444", extra: "EV", img: "Dead-or-Alive-saloon.webp" },
    { code: "1000354", extra: "EV", img: "Hindi-Roulette.webp" },
    { code: "1100129", extra: "EV", img: "4-Sqaure.webp" },
    { code: "1100130", extra: "EV", img: "5-Families.webp" },
    { code: "1100322", extra: "EV", img: "10,001-Nights-Megaways.webp" },
    { code: "1100230", extra: "EV", img: "24-Hour-Grand-Prix.webp" },
    { code: "1100324", extra: "EV", img: "80s-Spins.webp" },
    { code: "1100031", extra: "EV", img: "777-Strike.webp" },
    { code: "1100323", extra: "EV", img: "1942-Sky-Warrior.webp" },
    { code: "1100003", extra: "EV", img: "10001-nights.webp" },
    { code: "1100131", extra: "EV", img: "Agent-Royale.webp" },
    { code: "1100325", extra: "EV", img: "Age-Of-Akkadia.webp" },
    { code: "1100326", extra: "EV", img: "Ali-Baba_s-Luck.webp" },
    { code: "1100327", extra: "EV", img: "Ali-Baba_s-Luck-Megaways.webp" },
    { code: "1100328", extra: "EV", img: "Ali-Baba_s-Luck-Power-Reels.webp" },
    { code: "1100032", extra: "EV", img: "Aloha!-Christmas.webp" },
    { code: "1100033", extra: "EV", img: "Aloha!-Cluster-Pays.webp" },
    { code: "1100329", extra: "EV", img: "Amazon-Island-Megaways.webp" },
    { code: "1100330", extra: "EV", img: "Ancient-Disco.webp" },
    { code: "1100231", extra: "EV", img: "Ancient-Script.webp" },
    { code: "1100331", extra: "EV", img: "Apache-Way.webp" },
    { code: "1100132", extra: "EV", img: "Arcade-Bomb.webp" },
    { code: "1100318", extra: "EV", img: "Arcane-Reel-Chaos.webp" },
    { code: "1100313", extra: "EV", img: "Archangels-Salvation.webp" },
    { code: "1100096", extra: "EV", img: "Asgardian-Stones.webp" },
    { code: "1100332", extra: "EV", img: "Asian-Fortune.webp" },
    { code: "1100333", extra: "EV", img: "Athens-Megaways.webp" },
    { code: "1100133", extra: "EV", img: "Atlantis.webp" },
    { code: "1100419", extra: "EV", img: "Zillard-King.webp" },
    { code: "1100418", extra: "EV", img: "Zaidas-Fortune.webp" },
    { code: "1100185", extra: "EV", img: "Yucatan`s-Mystery.webp" },
    { code: "1100228", extra: "EV", img: "Wings-of-Riches.webp" },
    { code: "1100126", extra: "EV", img: "Wild-Water.webp" },
    { code: "1100282", extra: "EV", img: "Wild-Fight.webp" },
  ];

  const royalGames = [
    { code: "900025", img: "2-Card-teenpatti.webp" },
    { code: "900039", img: "2-Card-Teenpatti-One-day.webp" },
    { code: "900025", img: "2-Card-Teenpattu.webp" },
    { code: "900008", img: "3-Card-Judgenment.webp" },
    { code: "900008", img: "3-card-judgermemt.webp" },
    { code: "900001", img: "7up-and-Down.webp" },
    { code: "900026", img: "29-card-vaccarat.webp" },
    { code: "900024", img: "32-Card.webp" },
    { code: "900023", img: "Akbar-Romeo-Walter.webp" },
    { code: "901007", img: "Amar-akbar-anthony.webp" },
    { code: "900009", img: "Casino-War.webp" },
    { code: "900046", img: "Center-Card.webp" },
    { code: "901016", img: "Dragon-Tiger-One-day-1.webp" },
    { code: "900021", img: "King-Race.webp" },
    { code: "901018", img: "29-card-baccarat.webp" },
    { code: "900014", img: "Hi-low-2.webp" },
    { code: "900006", img: "Baccarat-2.webp" },
    { code: "900011", img: "Bollywood-Casino.webp" },
    { code: "900022", img: "Casino-Meter.webp" },
    { code: "900022", img: "Casino-Meter-1.webp" },
    { code: "900046", img: "Center-Card-1.webp" },
    { code: "900005", img: "Cricket-War-2.webp" },
    { code: "900004", img: "Dragon-Tiger.webp" },
    { code: "900031", img: "Dragon-Tiger-Lion-2.webp" },
    { code: "900027", img: "Dragon-Tiger-One-day.webp" },
    { code: "900020", img: "Football-Studio-2.webp" },
    { code: "901046", img: "High-Card.webp" },
    { code: "900012", img: "Lottery.webp" },
    { code: "900029", img: "Movie-Casino.webp" },
    { code: "900029", img: "Movie-Casino-2.webp" },
    { code: "900075", img: "Roulette-2.webp" },
    { code: "900034", img: "Side-Bet-City.webp" },
    { code: "900035", img: "Super-Over.webp" },
    { code: "900035", img: "Super-Over-2.webp" },
    { code: "900003", img: "Teenpatti.webp" },
    { code: "900003", img: "Teenpatti-3.webp" },
    { code: "900019", img: "Teenpatti-one-day.webp" },
    { code: "900013", img: "Book-Cricket.webp" },
    { code: "150018", img: "Casino-War-2.webp" },
    { code: "900038", img: "Ther-Trap-2.webp" },
    { code: "150018", img: "Casino-War-2.webp" },
    { code: "901039", img: "CenterCard-One-Day.webp" },
    { code: "900031", img: "Dragon-Tiger-Lion.webp" },
    { code: "900004", img: "Dragon-Tigger-2.webp" },
    { code: "900020", img: "Football-studio.webp" },
    { code: "900014", img: "Hi-lo.webp" },
    { code: "900021", img: "Lucky-7-2.webp" },
    { code: "900015", img: "Mufli_s-Teenpatti.webp" },
    { code: "900028", img: "Poker.webp" },
    { code: "900019", img: "psd.webp" },
    { code: "901047", img: "Qeen-Race.webp" },
    { code: "900032", img: "Race-to-17.webp" },
    { code: "900032", img: "Race-to-27-2.webp" },
    { code: "900075", img: "Roullette.webp" },
    { code: "901002", img: "Roullette-VR.webp" },
    { code: "900036", img: "Speedy-7.webp" },
    { code: "900035", img: "SuperOver-One-day.webp" },
    { code: "900015", img: "Teenpatti-Muflis.webp" },
    { code: "901021", img: "VR-Andhar-bandar.webp" },
    { code: "901032", img: "VR-Race-T200.webp" },
    { code: "900010", img: "Wolrd-Matka.webp" },
    { code: "900010", img: "Worli-matka.webp" },
    { code: "903006", img: "Bacarat-Classic.webp" },
    { code: "901046", img: "High-Card-(1).webp" },
    { code: "901002", img: "VIP-Auto-Roulette.webp" },
  ];

  const mac888 = [
    { code: "150036", img: "1-Day-Dragon-Tiger.webp" },
    { code: "150015", img: "3-Cards-Judgement.webp" },
    { code: "150041", img: "6-Player-Poker.webp" },
    { code: "150035", img: "5-Five-Cricket.webp" },
    { code: "150053", img: "10_10_cricket.webp" },
    { code: "150033", img: "20-20-Teenpatti.webp" },
    { code: "150026", img: "29-Baccarat.webp" },
    { code: "150010", img: "32-Cards.webp" },
    { code: "150014", img: "Amar-Akbar-Anthony.webp" },
    { code: "150007", img: "Andar-Bahar.webp" },
    { code: "151027", img: "AviatorX.webp" },
    { code: "150002", img: "Bacarrat.webp" },
    { code: "150031", img: "Bollywood-Casino-B.webp" },
    { code: "150044", img: "Casino-Meter.webp" },
    { code: "230001", img: "Crash.webp" },
    { code: "230002", img: "Diamonds.webp" },
    { code: "230003", img: "Dice.webp" },
    { code: "150001", img: "Dragon_Tiger.webp" },
    { code: "150013", img: "DTL.webp" },
    { code: "150037", img: "Dus-Ka-Dum.webp" },
    { code: "150051", img: "high_low.webp" },
    { code: "230008", img: "Hilo.webp" },
    { code: "150042", img: "Instant-2-Cards-Teenpatti.webp" },
    { code: "230004", img: "Limbo.webp" },
    { code: "150020", img: "Lottery.webp" },
    { code: "150006", img: "Lucky-7.webp" },
    { code: "230005", img: "Mines.webp" },
    { code: "150038", img: "One-Card-20-20.webp" },
    { code: "150039", img: "One-Card-Meter.webp" },
    { code: "150040", img: "One-Card-One-Day.webp" },
    { code: "150045", img: "Note-Number.webp" },
    { code: "150038", img: "One-Card-20-20.webp" },
    { code: "150039", img: "One-Card-Meter.webp" },
    { code: "150040", img: "One-Card-One-Day.webp" },
    { code: "230006", img: "Plinko.webp" },
    { code: "150032", img: "Poker-1-Day.webp" },
    { code: "150005", img: "Poker-20-20.webp" },
    { code: "150016", img: "Queen-Race.webp" },
    { code: "150017", img: "Race-20.webp" },
    { code: "150043", img: "Race-to-17.webp" },
    { code: "150004", img: "Roulette.webp" },
    { code: "150003", img: "Sic-Bo.webp" },
    { code: "150034", img: "Super-Over(1).webp" },
    { code: "150034", img: "Super-over.webp" },
    { code: "150030", img: "Teen-muflin.webp" },
    { code: "150033", img: "Teenpatti-2020-2.webp" },
    { code: "150023", img: "Test-Teenpatti.webp" },
    { code: "150024", img: "The-Trap.webp" },
    { code: "150025", img: "Trio.webp" },
    { code: "150028", img: "Two-Card-Teenpatti.webp" },
    { code: "150019", img: "Worli-Matka.webp" },
    { code: "230007", img: "X-roulette.webp" },
  ];

  const betGames = [
    { code: "BTV-baccarat", img: "Baccarat.webp" },
    { code: "BTV-betonpoker", img: "Bet-On-Poker.webp" },
    { code: "BTV-diceduel", img: "Dice-Duel.webp" },
    { code: "BTV-lucky5", img: "Lucky-5.webp" },
    { code: "BTV-lucky6", img: "Lucky-6.webp" },
    { code: "BTV-lucky7", img: "Lucky-7.webp" },
    { code: "BTV-6poker", img: "Poker-6.webp" },
    { code: "BTV-speedy7", img: "Speedy-7.webp" },
    { code: "BTV-warofbets", img: "War-of-Bets.webp" },
    { code: "BTV-wheeloffortune", img: "Wheel-of-Fortune.webp" },
  ];

  const oneTwoGames = [
    { code: "1x2-420blazeit", img: "420-Blaze-It.webp" },
    { code: "1x2-aeterna", img: "Aeterna.webp" },
    { code: "1x2-arcticfruits", img: "Arctic-Fruits.webp" },
    { code: "1x2-asgardwarriors", img: "Asgard-Warriors.webp" },
    { code: "1x2-battlemaidens", img: "Battle-Maidens.webp" },
    {
      code: "1x2-battlemaidenscleopatra",
      img: "Battle-Maidens-Cleopatra.webp",
    },
    { code: "1x2-blackbeardscompass", img: "Blackbeard_s-Compass.webp" },
    { code: "1x2-blazing777", img: "Blazing-777.webp" },
    { code: "1x2-bloodrage", img: "Blood-Rage.webp" },
    { code: "1x2-bookofloki", img: "Book-of-Loki.webp" },
    { code: "1x2-bookofmerlin", img: "Book-of-Merlin.webp" },
    { code: "1x2-bulldozer", img: "Bull-Dozer.webp" },
    { code: "1x2-bunintheoven", img: "Bun-in-the-Oven.webp" },
    { code: "1x2-classicfruits", img: "Classic-Fruits.webp" },
    { code: "1x2-coinfield", img: "Coin-Field.webp" },
    { code: "1x2-coinvault", img: "Coin-Vault.webp" },
    { code: "1x2-disco777", img: "Disco-777.webp" },
    { code: "1x2-eraofgods", img: "Era-of-Gods.webp" },
    { code: "1x2-faerienights", img: "Faerie-Nights.webp" },
    { code: "1x2-fieldsofclover94", img: "Fields-of-Clover.webp" },
    { code: "1x2-greendiamond", img: "Green-Diamond.webp" },
    { code: "1x2-herecomessummer", img: "Here-Comes-Summer.webp" },
    { code: "1x2-iamthelaw", img: "I-Am-The-Law.webp" },
    { code: "1x2-icequeens", img: "Ice-Queens.webp" },
    { code: "1x2-incaidols", img: "Inca-Idols.webp" },
    { code: "1x2-irishlove", img: "Irish-Love.webp" },
    { code: "1x2-italia3x3", img: "Italia-3X3.webp" },
    { code: "1x2-jesterswilds", img: "Jesters-Wilds.webp" },
    { code: "1x2-jewelofathena", img: "Jewel-of-Athena.webp" },
    { code: "1x2-justicemachinescratch", img: "Justice-Machine-Scratch.webp" },
    { code: "1x2-kittycashscratch", img: "Kitty-Cash-Scratch.webp" },
    { code: "1x2-leprechauncharms", img: "Leprechaun-Charms.webp" },
    { code: "1x2-luckystreaks", img: "Lucky-Streaks.webp" },
    { code: "1x2-medievalmania", img: "Medieval-Mania.webp" },
    { code: "1x2-megablox777", img: "MegaBlox-777.webp" },
    { code: "1x2-megabloxpyramids", img: "Megablox-Pyramids.webp" },
    { code: "1x2-neonfruitcityscape", img: "Neon-Fruit-Cityscape.webp" },
    { code: "1x2-phoenixinferno", img: "Phoenix-Inferno.webp" },
    { code: "1x2-piggybankscratch", img: "Piggy-Bank-Scratch.webp" },
    { code: "1x2-piratearmada", img: "Pirate-Armada.webp" },
    { code: "1x2-plinkogo", img: "Plinko-Go.webp" },
    { code: "1x2-poptilyoudrop", img: "Pop-Till-You-Drop.webp" },
    { code: "1x2-potsofluck", img: "Pots-Of-Luck.webp" },
    { code: "1x2-prisonescape", img: "Prison-Escape.webp" },
    { code: "1x2-puppypaydayscratch", img: "Puppy-Payday-Scratch.webp" },
    { code: "1x2-queenofembers", img: "Queen-of-Embers.webp" },
    { code: "1x2-reeldiamonds", img: "Reel-Diamonds.webp" },
    { code: "1x2-reelfruits", img: "Reel-Fruits.webp" },
    { code: "1x2-sherlockscasebook", img: "Sherlock_s-Casebook.webp" },
    { code: "1x2-sicbo888", img: "Sic-Bo-888.webp" },
    { code: "1x2-sinistercircus", img: "Sinister-Circus.webp" },
    { code: "1x2-slicedice", img: "Slice-&-Dice.webp" },
    { code: "1x2-smokinghotfruits", img: "Smoking-Hot-Fruits.webp" },
    { code: "1x2-smokinghotfruits20", img: "Smoking-Hot-Fruits-20.webp" },
    {
      code: "1x2-smokinghotfruitsstacks",
      img: "Smoking-Hot-Fruits-Stacks.webp",
    },
    {
      code: "1x2-smokinghotfruitwildrespin",
      img: "Smoking-Hot-Fruit-Wild-Respin.webp",
    },
    { code: "1x2-spacechristmas", img: "Space-Christmas.webp" },
    { code: "1x2-sparkling777s", img: "Sparkling-777s.webp" },
    { code: "1x2-spinocricket", img: "Spino-Cricket.webp" },
    { code: "1x2-squeakyblinders", img: "Squeaky-Blinders.webp" },
    { code: "Stellar-Ways", img: "Stellar-Ways.webp" },
    { code: "1x2-superrainbowmegaways", img: "Super-Rainbow-Megaways.webp" },
    { code: "1x2-thedavincidevice", img: "The-Da-Vinci-Device.webp" },
    { code: "1x2-theseusrises", img: "Theseus-Rises.webp" },
    { code: "1x2-trawlerfishin", img: "Trawler-Fishin.webp" },
    { code: "1x2-triplebar", img: "Triple-Bar.webp" },
    { code: "1x2-underthewaves", img: "Under-the-Waves.webp" },
    { code: "1x2-vampirehunters", img: "Vampire-Hunters.webp" },
    {
      code: "1x2-virtualfootballpro",
      img: "Van-Helsins-Book-of-the-Undead.webp",
    },
    { code: "Whisker-Jones", img: "Whisker-Jones.webp" },
    { code: "xmas3x3", img: "Xmas-3X3.webp" },
    { code: "1x2-xwild", img: "X-WILD.webp" },
  ];

  const turboGames = [
    { code: "TRB-1tapmines", img: "1Tap-Mines.webp" },
    { code: "TRB-turboplinko", img: "Turbo-Plinko.webp" },
    { code: "TRB-turbomines", img: "Turbo-Mines.webp" },
    { code: "Magic-Keno", img: "Magic-Keno.webp" },
    { code: "TRB-bookofmines", img: "Fast-Fielder.webp" },
    { code: "TRB-dicetwice", img: "Dice-Twice.webp" },
    { code: "TRB-hilo", img: "Hilo.webp" },
    { code: "TRB-bookofmines", img: "Book-of-Mines.webp" },
    { code: "TRB-spinstrike", img: "Spin-Strike.webp" },
  ];

  const onlyPlayGames = [
    { code: "aliendigger", img: "Alien-Digger.webp" },
    { code: "bookofeye", img: "Book-of-eyes.webp" },
    { code: "bookofpinata", img: "Book-of-Pinata.webp" },
    { code: "cherryboom", img: "Cherry-Boom.webp" },
    { code: "chervonakalyna", img: "Chervona-Kalyna.webp" },
    { code: "hotandspicymegaways", img: "Chervona-Kalyna-Megaways.webp" },
    { code: "christmas7", img: "Christmas-Seven.webp" },
    { code: "clowncoins", img: "Clown-Coins.webp" },
    { code: "combo7", img: "Combo-Seven.webp" },
    { code: "comicsstore", img: "Comic-Store.webp" },
    { code: "cosmox", img: "Cosmo-X.webp" },
    { code: "cricketcrash", img: "Cricket-Crash.webp" },
    { code: "cricx", img: "Cric-X.webp" },
    { code: "crystalcascade", img: "Crystal-Cascade.webp" },
    { code: "crystaltreasure", img: "Crystal-Treasure.webp" },
    { code: "dayofmuerte", img: "Day-of-Muerte.webp" },
    { code: "dragongates", img: "Dragon-Gates.webp" },
    { code: "fighter", img: "F777-Fighter.webp" },
    { code: "fishstore", img: "Fish-Store.webp" },
    { code: "frozengarden", img: "Frozen-Garden.webp" },
    { code: "fruitybook", img: "Fruity-Book.webp" },
    { code: "glamourcrocodile", img: "Glamour-Crocodile.webp" },
    { code: "goalx", img: "Goal-X.webp" },
    { code: "goldenclover", img: "Golden-Clover.webp" },
    { code: "goldenoctopus", img: "Golden-Octopus.webp" },
    { code: "graffitiinsydney", img: "Graffiti-in-Sydney.webp" },
    { code: "happycookie", img: "Happy-Cookie.webp" },
    { code: "hotandspicy", img: "Hot-and-Spicy.webp" },
    { code: "hotandspicyjackpot", img: "Hot-and-Spicy.webp" },
    { code: "iggyracing", img: "Iggy-Racing.webp" },
    { code: "Inca-Son", img: "Inca-Son.webp" },
    { code: "jackpotter", img: "Jack-Potter.webp" },
    { code: "jackpotterdeluxe", img: "Jack-Potter-Deluxe.webp" },
    { code: "jackpottermegaways", img: "Jack-Potter-Megaways.webp" },
    { code: "jackpotterxmas", img: "Jack-Potter-X-MAS.webp" },
    { code: "jokerscoins", img: "Joker-Coins.webp" },
    { code: "jokerscoinsxmas", img: "Joker-Coin-Xmas.webp" },
    { code: "juicycrush", img: "Juicy-Crush.webp" },
    { code: "junglegold", img: "Jungle-Gold.webp" },
    { code: "labourday", img: "Labour-Day.webp" },
    { code: "ligafortunamegaways", img: "Liga-Fortuna-Megaways.webp" },
    { code: "limbocat", img: "Limbo-Cat.webp" },
    { code: "luckyborscht", img: "Lucky-Borscht.webp" },
    { code: "luckyclover", img: "Lucky-Clover.webp" },
    { code: "Lucky-Coin", img: "Lucky-Coin.webp" },
    { code: "luckyocean", img: "Lucky-Ocean.webp" },
    { code: "luckypunch", img: "Lucky-Punch.webp" },
    { code: "luckytanks", img: "Lucky-Tanks.webp" },
    { code: "magicalistanbul", img: "Magical-Istanbul.webp" },
    { code: "mysteryofpersia", img: "Mystery-of-PErsia.webp" },
    { code: "mythsofbastet", img: "Myths-of-Bastet.webp" },
    { code: "needforx", img: "Need-for-X.webp" },
    { code: "piggybonanzahalloween", img: "Piggy-Bananza-Halloween.webp" },
    { code: "piggybonanza", img: "Piggy-Bonanza.webp" },
    { code: "piggytap", img: "Piggy-tap.webp" },
    { code: "piratestuff", img: "Pirate-stuff.webp" },
    { code: "quantumx", img: "Quantum-X.webp" },
    { code: "retroparty", img: "Retro-Party.webp" },
    { code: "TRB-spinstrike", img: "Retro-Pedro.webp" },
    { code: "richbankrupt", img: "Rich Bankrupt.webp" },
    { code: "royalkitties", img: "Royal-Kitties.webp" },
    { code: "saintbananas", img: "Saaint-Banana.webp" },
    { code: "scorex", img: "Score-X.webp" },
    { code: "spacehorror", img: "Space-Horror.webp" },
    { code: "sugarvalley", img: "Sugar-Valley.webp" },
    { code: "texasdragons", img: "Texas-Dragon.webp" },
    { code: "thimbles", img: "The-Thimbles.webp" },
    { code: "trolldice", img: "Troll-Dice.webp" },
  ];

  const smartSoftGames = [
    { code: "Balloon", img: "balloon.webp" },
    { code: "BookOfFuturia", img: "Book-of.webp" },
    { code: "BlazingHot", img: "burning-ice.webp" },
    { code: "BlazingHot10", img: "burning-ice-10.webp" },
    { code: "BlazingHot40", img: "burning-ice-40.webp" },
    { code: "Cappadocia", img: "Cappadocia.webp" },
    { code: "TugOfWar", img: "Crash-duel-X.webp" },
    { code: "CricketX", img: "cricket-x.webp" },
    { code: "SlicerX", img: "DoubleX.webp" },
    { code: "FootballX", img: "footballx.webp" },
    { code: "FoxyHot20", img: "FoxyHot20.webp" },
    { code: "GeniesBonanza", img: "genies-bonanza.webp" },
    { code: "HelicopterX", img: "Helicopter-X.webp" },
    { code: "HunterX", img: "Hunter-X.webp" },
    { code: "JetX", img: "jetx.webp" },
    { code: "JetX3", img: "jetx3.webp" },
    { code: "MultiHotWays", img: "Multi-Hot-Ways.webp" },
    { code: "PlinkoX", img: "plinko-x.webp" },
    { code: "RollX", img: "Roll-X.webp" },
    { code: "RussianKeno", img: "russian-keno.webp" },
    { code: "Samurai", img: "samurai.webp" },
    { code: "SmashX", img: "Smash-X.webp" },
    { code: "SpinX", img: "spin-x.webp" },
    { code: "tower-x", img: "tower-x.webp" },
    { code: "Vampires", img: "vampires.webp" },
    { code: "VirtualBurningRoulette", img: "Virtual-Burning-Roulette.webp" },
    { code: "VirtualClassicRoulette", img: "Virtual-Classic-Roulette.webp" },
    { code: "VirtualRoulette", img: "virtual-roulette.webp" },
    { code: "WildsAndGods", img: "WildsAndGods.webp" },
  ];

  const caleta = [
    { code: "201278", img: "Astro-wild.webp" },
    { code: "201238", img: "Atomico-Lotto.webp" },
    { code: "Slots", img: "Banana-Bingo.webp" },
    { code: "225204", img: "Banana-Boom.webp" },
    { code: "201232", img: "Banana-Keno.webp" },
    { code: "201251", img: "Baseketball-Pro.webp" },
    { code: "201243", img: "Beach-Tennis.webp" },
    { code: "201235", img: "Betina-Bingo.webp" },
    { code: "201216", img: "Binga-Pirata.webp" },
    { code: "201272", img: "Bingo-Bruxaria.webp" },
    { code: "201273", img: "Bingo-Hortinha.webp" },
    { code: "201217", img: "Bingoluliu.webp" },
    { code: "225205", img: "Bingo-Pescaria.webp" },
    { code: "225206", img: "Bingo-Tesoro-Maya.webp" },
    { code: "201242", img: "Bingo-Tornado.webp" },
    { code: "201271", img: "Bingo-Trevo-da-dorte.webp" },
    { code: "201277", img: "Boto-Bingo.webp" },
    { code: "201254", img: "Bungry-chef.webp" },
    { code: "225207", img: "Caipirinha-Keno.webp" },
    { code: "201276", img: "Catch-a-fish.webp" },
    { code: "201263", img: "Caves-And-Treasure.webp" },
    { code: "201279", img: "Cherry-Cherry.webp" },
    { code: "225208", img: "Cherry-Christmas.webp" },
    { code: "201248", img: "China-Charms.webp" },
    { code: "201215", img: "Circus-Bingo.webp" },
    { code: "225209", img: "Classic-Royals.webp" },
    { code: "201256", img: "Crazy-Lab.webp" },
    { code: "201265", img: "Cruise-Fortune.webp" },
    { code: "201236", img: "Crystal-Unicorn.webp" },
    { code: "201261", img: "Cutey-Cats.webp" },
    { code: "201257", img: "Dragon-Rising.webp" },
    { code: "201253", img: "Enchanted-Cash.webp" },
    { code: "201240", img: "Fada-da-fortune.webp" },
    { code: "201226", img: "Feel-the-Music.webp" },
    { code: "201252", img: "Football-Pro.webp" },
    { code: "201255", img: "Fright-night.webp" },
    { code: "201260", img: "Frozen-Fluffles.webp" },
    { code: "225210", img: "Garoto-de-Ipanema-Bingo.webp" },
    { code: "201283", img: "Halloween-Bingo.webp" },
    { code: "201284", img: "Halloween-Keno.webp" },
    { code: "201281", img: "Halloween-Raspadinha.webp" },
    { code: "201247", img: "Heroes-Empire.webp" },
    { code: "201245", img: "Hidden-Kingdom.webp" },
    { code: "201266", img: "Horri-cash.webp" },
    { code: "201274", img: "Huncry-Chef-Pickem.webp" },
    { code: "225211", img: "Jingle-Bell-Bingo.webp" },
    { code: "201233", img: "Jungle-Keno.webp" },
    { code: "201250", img: "Lost-saga.webp" },
    { code: "201249", img: "Lucky-Express.webp" },
    { code: "201228", img: "Lucky-K.webp" },
    { code: "201267", img: "Madame-Fortune.webp" },
    { code: "201234", img: "Magical-Keno.webp" },
    { code: "201246", img: "Magic-Forest.webp" },
    { code: "225212", img: "Mega-Bingo.webp" },
    { code: "201229", img: "New-Fruit.webp" },
    { code: "201237", img: "Ocean-Riches.webp" },
    { code: "201275", img: "Pick_em-Fruits.webp" },
    { code: "225213", img: "Piggy-Show-Bingo.webp" },
    { code: "225214", img: "Pipa-Crash.webp" },
    { code: "201258", img: "Pirates-Fortune.webp" },
    { code: "201241", img: "Princess-of-the-ocean.webp" },
    { code: "201282", img: "Raspadinha-trevo-da-sorte.webp" },
    { code: "201230", img: "Rio-De-Janeiro.webp" },
    { code: "225215", img: "Rock-_n_-Reels.webp" },
    { code: "201221", img: "Saga-Loga.webp" },
    { code: "201219", img: "Samba-Rio.webp" },
    { code: "201280", img: "Talismanes.webp" },
    { code: "201244", img: "Torch-of-Fire.webp" },
    { code: "201268", img: "Vegas-Baby.webp" },
    { code: "201239", img: "Viking-Madness.webp" },
    { code: "201269", img: "Village-Brewery.webp" },
    { code: "225216", img: "Whale-Bingo.webp" },
    { code: "225217", img: "Whale-of-Fortune.webp" },
    { code: "201262", img: "Wild-Fruit.webp" },
  ];
  const playNGo = [
    { code: "PNG-3handcasinoholdem", img: "3-hand-casino-holdem.webp" },
    { code: "PNG-3clownmonty", img: "3-Xlown-monty.webp" },
    { code: "PNG-7sins", img: "7-Sins.webp" },
    { code: "PNG-15crystalrosesataleoflove", img: "15-Crystal-roses.webp" },
    { code: "PNG-24kdragon", img: "24k-dragon.webp" },
    { code: "PNG-aceofspades", img: "Ace-of-Spades.webp" },
    { code: "PNG-agentdestiny", img: "Agent-Destiny.webp" },
    { code: "PNG-agentofhearts", img: "Agent-of-Heart.webp" },
    { code: "PNG-richwildeandtheamuletofdead", img: "Amulet-of-dad.webp" },
    { code: "PNG-animalmadness", img: "Animal-madness.webp" },
    { code: "PNG-ankhofanubis", img: "Ankh-of-Anubis.webp" },
    { code: "PNG-annihilator", img: "Annihilator.webp" },
    { code: "PNG-athenaascending", img: "Athena-Ascending.webp" },
    { code: "PNG-athenaascending", img: "Aztec-Idols.webp" },
    { code: "PNG-athenaascending", img: "Aztec-warrior-princess.webp" },
    { code: "PNG-bakerstreat", img: "Bakers-treat.webp" },
    { code: "PNG-bananarock", img: "Banana-rock.webp" },
    { code: "PNG-banquetofdead", img: "Banquet-of-Dead.webp" },
    { code: "PNG-battleroyal", img: "Battle-royal.webp" },
    { code: "PNG-beastsoffire", img: "Beasts-of-fire.webp" },
    { code: "PNG-bigwin777", img: "Big-win-777.webp" },
    { code: "PNG-bigwincat", img: "Big-Win-Cat.webp" },
    {
      code: "HAB-3handblackjackdoubleexposure",
      img: "Blackjack-Double-exposure.webp",
    },
    { code: "PNG-europeanblackjackmh", img: "Blackjack-european.webp" },
    {
      code: "PNG-singledeckblackjackmh",
      img: "Blackjack-single-deck-multihand.webp",
    },
    { code: "PNG-blackmamba", img: "Black-mamba.webp" },
    { code: "PNG-blazinbullfrog", img: "Blazin-bullfrog.webp" },
    { code: "PNG-bullinachinashop", img: "Bull-in-a-china-shop.webp" },
    {
      code: "PNG-catwildeandthepyramidsofdead",
      img: "Cat-Wilde-and-the-Pyramids-of-Dead.webp",
    },
    { code: "PNG-dragonmaiden", img: "Dragon-maiden.webp" },
    { code: "PNG-imperialopera", img: "Imperial-Opera.webp" },
    { code: "PNG-moneywheel", img: "Money-Wherel.webp" },
    { code: "PNG-blinged", img: "Blinged.webp" },
    {
      code: "PNG-boatbonanzacolossalcatch",
      img: "Boat-Bonanza-Colossal-Catch.webp",
    },
    { code: "PNG-bookofdead", img: "Book-od-dead.webp" },
    { code: "PNG-bullinachinashop", img: "Bull-in-a-china-shop.webp" },
    { code: "PNG-bullinarodeo", img: "Bull-in-a-Rodeo.webp" },
    { code: "PNG-candyislandprincess", img: "Candy-Princess.webp" },
    { code: "PNG-caninecarnage", img: "Canine-Carnage.webp" },
    {
      code: "PNG-captainglumpiratehunter",
      img: "Captain-Glum-Pirate-Hunter.webp",
    },
    { code: "PNG-captainxenosearthadventure", img: "Captain-zenos.webp" },
    { code: "PNG-cashacabana", img: "Cash-a-Cabana.webp" },
    { code: "PNG-cashofcommand", img: "Cash-of-Command.webp" },
    { code: "PNG-cashpump", img: "Cash-pump.webp" },
    { code: "PNG-cashvandal", img: "Cash-vandal.webp" },
    { code: "PNG-catsandcash", img: "Cats-and-Cash.webp" },
    {
      code: "PNG-catwildeandtheincanquest",
      img: "Cat-Wilde-and-the-Incan-Quest.webp",
    },
    {
      code: "PNG-catwildeandthedoomofdead",
      img: "Cat-Wilde-and-the-Lost-Chapter.webp",
    },
    {
      code: "PNG-catwildeintheeclipseofthesungod",
      img: "Cat-wilde-Eclipse-of-the-sun-god.webp",
    },
    { code: "PNG-chambersofancients", img: "Chambers-of-Ancients.webp" },
    { code: "PNG-championsofmithrune", img: "Champions-of-Mithrune.webp" },
    {
      code: "PNG-charliechanceinhelltopay",
      img: "Charie-chance-hell-to-pay.webp",
    },
    { code: "PNG-charliechance", img: "Charlie-chance.webp" },
    {
      code: "PNG-charliechanceandthecurseofcleopatra",
      img: "Charlie-chance-and-the-curse-of-cleopatra.webp",
    },
    { code: "PNG-chinesenewyear", img: "Chinese-New-year.webp" },
    { code: "PNG-chronosjoker", img: "ChronosJoker.webp" },
    { code: "PNG-clashofcamelot", img: "Clash-of-Camelot.webp" },
    { code: "PNG-cloudquest", img: "Cloud-quest.webp" },
    { code: "PNG-coilsofcash", img: "Cols-of-cash.webp" },
    { code: "PNG-coltlightning", img: "Colt-Lightning.webp" },
    { code: "PNG-contact", img: "Conflict.webp" },
    { code: "PNG-copsnrobbers", img: "Cops-n-robbers.webp" },
    { code: "PNG-countjokula", img: "Count-Jokula.webp" },
    { code: "PNG-courtofhearts", img: "Court-of-Heart.webp" },
    { code: "PNG-coywolfcash", img: "Coywolf-cash.webp" },
    { code: "PNG-crazycows", img: "Crazy-cows.webp" },
    { code: "PNG-crystalsun", img: "Crystal-sun.webp" },
    { code: "PNG-dawnofegypt", img: "Dawn-of-egypt.webp" },
    { code: "PNG-demon", img: "Demon.webp" },
    { code: "PNG-derbywheel", img: "Derby-wheel.webp" },
    { code: "PNG-deuceswildmh", img: "Deuces-Wild.webp" },
    { code: "PNG-diamondsoftherealm", img: "Diamond-of-the-realm.webp" },
    { code: "PNG-diamondvortex", img: "Diamond-vortex.webp" },
    { code: "PNG-discodiamonds", img: "Disco-diamonds.webp" },
    { code: "PNG-divineshowdown", img: "Divine-showdown.webp" },
    { code: "PNG-drtoonz", img: "Drtoonz.webp" },
  ];
  const saGaming = [
    { code: "SAG-baccaratc01", img: "Baarrat-C01.webp" },
    { code: "SAG-baccaratc02", img: "Baarrat-c02.webp" },
    { code: "SAG-baccaratc03", img: "Baarrat-C03.webp" },
    { code: "SAG-baccaratc04", img: "Baarrat-C04.webp" },
    { code: "SAG-baccaratc05", img: "Baarrat-C05.webp" },
    { code: "SAG-baccaratc06", img: "Baarrat-C06.webp" },
    { code: "SAG-baccaratc07", img: "Baarrat-C07.webp" },
    { code: "SAG-baccaratd01", img: "Baccarat-D01.webp" },
    { code: "SAG-baccaratd02", img: "Baccarat-D02.webp" },
    { code: "SAG-baccaratd03", img: "Baccarat-D03.webp" },
    { code: "SAG-baccaratd04", img: "Baccarat-D04.webp" },
    { code: "SAG-baccaratd05", img: "Baccarat-D05.webp" },
    { code: "SAG-baccaratd06", img: "Baccarat-D06.webp" },
    { code: "SAG-baccaratd07", img: "Baccarat-D07.webp" },
    { code: "SAG-croulette", img: "C-Roullette.webp" },
    { code: "SAG-mandarbahar", img: "M-adhar-bahar.webp" },
    { code: "SAG-mblackjack", img: "M-blackjack.webp" },
    { code: "SAG-mdragontiger", img: "M-Dragon-Tiger.webp" },
    { code: "SAG-mroulette", img: "M-Roulette.webp" },
    { code: "SAG-msicbo", img: "M-Sicbo.webp" },
    { code: "SAG-mteenpatti2020", img: "M-Teenpatti-2020.webp" },
    { code: "SAG-mpokdeng", img: "Pok-Deng.webp" },
    { code: "SAG-speedbaccaratc08", img: "Speed-Baarrat-C08.webp" },
    { code: "SAG-speedbaccarate09", img: "Speed-Bacarrat-E08.webp" },
    { code: "SAG-speedbaccarate09", img: "Speed-Bacarrat-E09.webp" },
  ];
  const jilli = [
    { code: "600141", img: "3-Coin-Treasures.webp" },
    { code: "600064", img: "7up7down.webp" },
    { code: "987891", img: "7-up-doen.webp" },
    { code: "600060", img: "Agent-Ace.webp" },
    { code: "600012", img: "AK47.webp" },
    { code: "600062", img: "Ali-Baba.webp" },
    { code: "600056", img: "All-Star-Fishing.webp" },
    { code: "600013", img: "Andar-Bahar.webp" },
    { code: "600128", img: "Aztec-Priestess.webp" },
    { code: "600089", img: "Baccarat.webp" },
    { code: "600127", img: "Bangla-Beauty.webp" },
    { code: "600031", img: "Bao-boon-chin.webp" },
    { code: "600086", img: "Big-Small.webp" },
    { code: "600105", img: "Bingo-Adventure.webp" },
    { code: "600092", img: "Bingo-Carnaval.webp" },
    { code: "600154", img: "Blackjack.webp" },
    { code: "600155", img: "Blackjack-Lucky-Ladies.webp" },
    { code: "600002", img: "Bombing-Fishing.webp" },
    { code: "600075", img: "Bone-Fortune.webp" },
    { code: "600077", img: "Bonus-Hunter.webp" },
    { code: "600069", img: "Book-of-Gold.webp" },
    { code: "600046", img: "Boxing-King.webp" },
    { code: "600030", img: "Bubble-Beauty.webp" },
    { code: "600098", img: "Calaga-Bingo.webp" },
    { code: "600109", img: "Call-Break.webp" },
    { code: "600111", img: "Callbreak-quick.webp" },
    { code: "600035", img: "Candy-Baby.webp" },
    { code: "600143", img: "Candyland-Bingo.webp" },
    { code: "600158", img: "Caribbean-Stud-Poker.webp" },
    { code: "600040", img: "Charge-Buffalo.webp" },
    { code: "600133", img: "Charge-Buffalo-Ascent.webp" },
    { code: "600096", img: "Color-Game.webp" },
    { code: "600144", img: "Color-Prediction.webp" },
    { code: "600029", img: "Crazy777.webp" },
    { code: "600032", img: "Crazy-FaFaFa.webp" },
    { code: "600037", img: "Crazy-Golden-Bank.webp" },
    { code: "600057", img: "Crazy-Hunter.webp" },
    { code: "600074", img: "Crazy-Pusher.webp" },
    { code: "600122", img: "Cricket-King-18.webp" },
    { code: "600124", img: "Cricket-Sah-75.webp" },
    { code: "600126", img: "Devil-fire.webp" },
    { code: "600119", img: "DiamondParty.webp" },
    { code: "600055", img: "dICE.webp" },
    { code: "600003", img: "Dinosaur-Tycoon.webp" },
    { code: "600066", img: "Dinosaur-Tycoon-II.webp" },
    { code: "600087", img: "Dragon-&-Tiger.webp" },
    { code: "600005", img: "Dragon-Fortune.webp" },
    { code: "600053", img: "Fortune-Gems.webp" },
    { code: "600027", img: "God-Of-Martial.webp" },
  ];
  const kingmaker = [
    { code: "400078", img: "32m-Card.webp" },
    { code: "400071", img: "Andar-Bahar.webp" },
    { code: "400068", img: "Bai-Buu.webp" },
    { code: "400089", img: "Bingo-Roll.webp" },
    { code: "400077", img: "BlackJack.webp" },
    { code: "400074", img: "Bola-Golek.webp" },
    { code: "400081", img: "Bonus-Dice.webp" },
    { code: "400095", img: "Cash-Rocket.webp" },
    { code: "400075", img: "Coin-Toss.webp" },
    { code: "400088", img: "Color-Game.webp" },
    { code: "400066", img: "European-Roulette.webp" },
    { code: "400065", img: "Fruit-Roulette.webp" },
    { code: "400085", img: "hIEST.webp" },
    { code: "400069", img: "Jhandi-Munda.webp" },
    { code: "400091", img: "Marble-Knockout.webp" },
    { code: "400072", img: "Pai-Kang.webp" },
    { code: "400079", img: "Plinko.webp" },
    { code: "400073", img: "Pok-Deng.webp" },
    { code: "400056", img: "Sicbo.webp" },
    { code: "400094", img: "Sugar-Blast.webp" },
    { code: "400084", img: "Teenpatti.webp" },
    { code: "400092", img: "Virtual-Hound-Racing.webp" },
    { code: "", img: "" },
    { code: "", img: "" },
  ];

    function CreateAndLaunchWCOCasino(provider_code, game_code, type = null) {
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


  return (
    <>
      <div className="casino-centeral-lobby">
        <div className="new-menu-bar" ref={menuBarRef}>
          <div className="sub-new-nav">
            <ul className="sub-nav-ul" id="slot-nav">
              <li
                ref={(el) => (lobbyRefs.current["ezugi"] = el)}
                onClick={() => setSelectedLobby("ezugi")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "ezugi" ? "active" : ""
                  }`}
                  data-target="ez-casino"
                >
                  <img
                    className="nav-bar-logo"
                    src="https://img.jaipurapps.com/new-casino-img/logo/Ezugi_Logo_No_Slogan_Light.webp"
                    alt="ezugi"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["sn"] = el)}
                onClick={() => setSelectedLobby("sn")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "sn" ? "active" : ""
                  }`}
                  data-target="sn-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/Copy-of-Copy-of-Supernowa-logo-new.webp"
                    alt="sn"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["spribe"] = el)}
                onClick={() => setSelectedLobby("spribe")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "spribe" ? "active" : ""
                  }`}
                  data-target="spb-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/spribe.webp"
                    alt="spribe"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["beter-live"] = el)}
                onClick={() => setSelectedLobby("beter-live")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "beter-live" ? "active" : ""
                  }`}
                  data-target="bt-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/Beter-Live-logo.png"
                    alt="beter-live"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["ho-gaming"] = el)}
                onClick={() => setSelectedLobby("ho-gaming")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "ho-gaming" ? "active" : ""
                  }`}
                  data-target="ho-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/HOgaming.webp"
                    alt="ho-gaming"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["evolution"] = el)}
                onClick={() => setSelectedLobby("evolution")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "evolution" ? "active" : ""
                  }`}
                  data-target="evz-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/Evolution-Logo-(1).webp"
                    alt="evolution"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["royal-gaming"] = el)}
                onClick={() => setSelectedLobby("royal-gaming")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "royal-gaming" ? "active" : ""
                  }`}
                  data-target="royal-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/logo-royal-gaming-sitio-1.png"
                    alt="royal-gaming"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["mac888"] = el)}
                onClick={() => setSelectedLobby("mac888")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "mac888" ? "active" : ""
                  }`}
                  data-target="mac-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/mac88.webp"
                    alt="mac88"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["bet-games"] = el)}
                onClick={() => setSelectedLobby("bet-games")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "bet-games" ? "active" : ""
                  }`}
                  data-target="bet-games-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/BetGames-logo.png"
                    alt="bet-games"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["one-two-gaming"] = el)}
                onClick={() => setSelectedLobby("one-two-gaming")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "one-two-gaming" ? "active" : ""
                  }`}
                  data-target="one-two-gaming-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/1x2Gaming.webp"
                    alt="one-two-gaming"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["turbo-gaming"] = el)}
                onClick={() => setSelectedLobby("turbo-gaming")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "turbo-gaming" ? "active" : ""
                  }`}
                  data-target="turbo-games-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/turbo-games-logo-2.webp"
                    alt="turbo-gaming"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["onlyplay-casino"] = el)}
                onClick={() => setSelectedLobby("onlyplay-casino")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "onlyplay-casino" ? "active" : ""
                  }`}
                  data-target="onlyplay-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/Onlyplay-logo.webp"
                    alt="onlyplay-casino"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["smartsoft-casino"] = el)}
                onClick={() => setSelectedLobby("smartsoft-casino")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "smartsoft-casino" ? "active" : ""
                  }`}
                  data-target="smartsoft-casino"
                >
                  <img
                    src="/Images/smart-soft.webp"
                    alt="smartsoft-casino"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["caleta-casino"] = el)}
                onClick={() => setSelectedLobby("caleta-casino")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "caleta-casino" ? "active" : ""
                  }`}
                  data-target="caleta-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/caleta-logo.webp"
                    alt="caleta-casino"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["play-n-go-casino"] = el)}
                onClick={() => setSelectedLobby("play-n-go-casino")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "play-n-go-casino" ? "active" : ""
                  }`}
                  data-target="play-n-go-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/play-n-go-logo.png"
                    alt="play-n-go-casino"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["sa-gaming-casino"] = el)}
                onClick={() => setSelectedLobby("sa-gaming-casino")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "sa-gaming-casino" ? "active" : ""
                  }`}
                  data-target="sa-gaming-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/SAGaming.webp"
                    alt="sa-gaming-casino"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["jilli-casino"] = el)}
                onClick={() => setSelectedLobby("jilli-casino")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "jilli-casino" ? "active" : ""
                  }`}
                  data-target="jilli-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/jili-logo.webp"
                    alt="jilli-casino"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
              <li
                ref={(el) => (lobbyRefs.current["kingmaker-casino"] = el)}
                onClick={() => setSelectedLobby("kingmaker-casino")}
              >
                <button
                  className={`li-button ${
                    selectedLobby == "kingmaker-casino" ? "active" : ""
                  }`}
                  data-target="kingmaker-casino"
                >
                  <img
                    src="https://img.jaipurapps.com/new-casino-img/logo/kingmaker-logo.webp"
                    alt="kingmaker-casino"
                    className="nav-bar-logo"
                  />
                </button>
              </li>
            </ul>
          </div>
          {/* Banner Section */}
          <div className="banner-section">
            <img
              id="banner-img"
              src={bannerImages?.[selectedLobby]}
              alt="Banner"
              loading="lazy"
            />
          </div>

          <div className="image-section">
            <div
              className={`casino-section ez-casino ${
                selectedLobby == "ezugi" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {ezugiGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("EZ", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/Ezugi/${game.img}`}
                      alt="Ezugi"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`casino-section sn-casino ${
                selectedLobby == "sn" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {casinoGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("SN", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/Supernova/${game.img}`}
                      alt="Supernowa"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`casino-section spb-casino ${
                selectedLobby == "spribe" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {spbGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("SPB", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/spribe/${game.img}`}
                      alt="Spribe"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`casino-section bt-casino ${
                selectedLobby == "beter-live" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {btGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("DC", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/betterlive/${game.img}`}
                      alt="Beter-Live"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* HO Gaming Casino Section */}
            <div
              className={`casino-section ho-casino ${
                selectedLobby == "ho-gaming" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {hoGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("QT", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/hogaming/${game.img}`}
                      alt="HO-Gaming"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Evolution Casino Section */}
            <div
              className={`casino-section evz-casino ${
                selectedLobby == "evolution" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {evzGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() =>
                      CreateAndLaunchWCOCasino("EVZ", game.code, game.extra)
                    }
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/evolutionlive/${game.img}`}
                      alt="Evolution"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Royal Gaming Casino Section */}
            <div
              className={`casino-section royal-casino ${
                selectedLobby == "royal-gaming" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {royalGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("DC", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/royalgaming/${game.img}`}
                      alt="Royal Gaming"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Mac888 Casino Section */}
            <div
              className={`casino-section mac-casino ${
                selectedLobby == "mac888" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {mac888.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("DC", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/mac888/${game.img}`}
                      alt="Mac888"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* BetGames Casino Section */}
            <div
              className={`casino-section bet-games-casino ${
                selectedLobby == "bet-games" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {betGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("QT", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/betgamestv/${game.img}`}
                      alt="BetGames TV"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* 1X2 Gaming Section */}
            <div
              className={`casino-section one-two-gaming-casino ${
                selectedLobby == "one-two-gaming" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {oneTwoGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("QT", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/1X2games/${game.img}`}
                      alt="1X2 Gaming"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Turbo Games Section */}
            <div
              className={`casino-section turbo-games-casino ${
                selectedLobby == "turbo-gaming" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {turboGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("QT", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/turbo/${game.img}`}
                      alt="Turbo Games"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* OnlyPlay Section */}
            <div
              className={`casino-section onlyplay-casino ${
                selectedLobby == "onlyplay-casino" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {onlyPlayGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("GT", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/onlyplay/${game.img}`}
                      alt="OnlyPlay"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* SmartSoft Section */}
            <div
              className={`casino-section smartsoft-casino ${
                selectedLobby == "smartsoft-casino" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {smartSoftGames.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("SMTSG", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/smartsoft/${game.img}`}
                      alt="SmartSoft"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Caleta Casino Section */}
            <div
              className={`casino-section caleta-casino ${
                selectedLobby == "caleta-casino" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {caleta.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("DC", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/caleta/${game.img}`}
                      alt="Caleta"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Play'n Go Casino Section */}
            <div
              className={`casino-section play-n-go-casino ${
                selectedLobby == "play-n-go-casino" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {playNGo.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("QT", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/playngo/${game.img}`}
                      alt="playNGo"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* SA Gaming Casino Section */}
            <div
              className={`casino-section sa-gaming-casino ${
                selectedLobby == "sa-gaming-casino" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {saGaming.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("QT", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/sagaming/${game.img}`}
                      alt="saGaming"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Jilli Casino Section */}
            <div
              className={`casino-section jilli-casino ${
                selectedLobby == "jilli-casino" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {jilli.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("DC", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/jiligaming/${game.img}`}
                      alt="jilli"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Kingmaker Casino Section */}
            <div
              className={`casino-section kingmaker-casino ${
                selectedLobby == "kingmaker-casino" ? "active" : ""
              }`}
            >
              <ul className="casinos">
                {kingmaker.map((game, index) => (
                  <li
                    key={index}
                    className="casino-links"
                    onClick={() => CreateAndLaunchWCOCasino("DC", game.code)}
                  >
                    <img
                      src={`https://img.jaipurapps.com/new-casino-img/kingmaker/${game.img}`}
                      alt="kingmaker"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllGamesLobby;
