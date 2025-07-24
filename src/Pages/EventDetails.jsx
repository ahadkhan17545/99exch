import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Helper from "../helper";
import { useAuth } from "../AuthContext";
import { WebSocketContext } from "../Context/websocket";
import { getUserBalance } from "../services/users";
import { getAllEvents } from "../redux/slice/event/eventSlice";
import { TimeContext } from "../TimeContext/TimeContext";
import { getMatchData } from "../redux/slice/eventData/eventDataSlice";
import { getMatchFancyData } from "../redux/slice/fancyData/fancyDataSlice";
import { getUserBal } from "../redux/slice/user/userSlice";
import { getLoginUser } from '../redux/slice/userData/userDataSlice';
import axios from "axios";
import Appconfig from "../config/config";
import { setData } from "../redux/slice/betting/bettingSlice";
import { toast } from "react-toastify";
import { getAllBets } from "../redux/slice/openBet/openBetSlice";
import { Modal } from "antd";
import { DesktopOutlined } from "@ant-design/icons";

function EventDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.eventData);
  const userFancyData = useSelector((state) => state.fancyData);
  const userbalance = useSelector((state) => state.userbal);
  const openbets = useSelector((state) => state.bets);
  const balance = userbalance?.userBalance;
  const userInfo = Helper(); // get login user details
  const { setShowLoginModel, betPlaced, setBetPlaced, setBetPlacedLoader, currentExposure, currentBalance } = useAuth();
  const websocket = useContext(WebSocketContext);
  const { event_id, is_inplay, } = useParams();

  // console.log('event page user balance : ', balance)

  const getOpenBetsByEvent = async () => {
    dispatch(
      getAllBets({
        user_id: userInfo?._id,
      })
    );
  };

  useEffect(() => {
    getOpenBetsByEvent();
  }, [betPlaced]);

  const [selectedSection, setSelectedSection] = useState("odds")
  const [betsData, setBetsData] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [marketTypes, setMarketTypes] = useState([]);
  const [blockMatchOdds, setBlockMatchOdds] = useState({});
  const [blockBookmaker, setBlockBookmaker] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [scoreUrl, setScoreUrl] = useState("");
  const [eventData, setEventData] = useState([]);
  const [fancy, setFancy] = useState([]);
  const [eventType, setEventType] = useState("");
  const [eventName, setEventName] = useState("");
  const [openDate, setOpenDate] = useState("");

  const [matchOdds, setMatchOdds] = useState("");
  const [bookmaker, setBookmaker] = useState("");
  const [tiedMatch, setTiedMatch] = useState("");
  const [toss, setToss] = useState("");
  const [fancyData, setFancyData] = useState([]);
  const [postionFancyList, setPostionFancyList] = useState([]);
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [matchOddsBhaw, setMatchOddsBhaw] = useState("");
  const [bookmakerBhaw, setBookmakerBhaw] = useState("");
  const [isEventLoading, setIsEventLoading] = useState(true);
  const [tvUrl, setTvUrl] = useState('');
  const [isInplay, setIsInplay] = useState(false);
  const [isTvOpen, setIsTvOpen] = useState(false);
  const [isDesktopTvOpen, setIsDesktopTvOpen] = useState(false);
  const [isScoreCardOpen, setIsScoreCardOpen] = useState(true);
  const [openPlaceBet, setOpenPlaceBet] = useState({
    selectionId: "",
    type: "",
    odds: "",
  });
  const [showBetsSlip, setShowBetsSlip] = useState(false);
  const [BetPlaceData, setBetPlaceData] = useState({
    event_id: "",
    market_id: "",
    is_back: "",
    price: "",
    is_fancy: "",
    selection_id: "",
    runner_name: "",
    PM_FANCY: false,
  });
  const [selection_id, setSelection_id] = useState("");
  const [marketId, setMarketId] = useState("");
  const [type, setType] = useState("back");

  const [htmlId, setHtmlId] = useState("");
  const [size, setSize] = useState("");
  const [ProfitValue, setProfitValue] = useState(0);
  const [lossValue, setLossValue] = useState(0);
  const [is_fancy, setIs_fancy] = useState(false);
  const [selectionIdNew, setSelectionIdNew] = useState("");
  const [StakeValue, setStakeValue] = useState(0);
  const [showPlaceBetPopup, setShowPlaceBetPopup] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [fancyExposure, setFancyExposure] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isBetPlaced, setIsBetPlaced] = useState(false);
  const [generalSetting, setGeneralSetting] = useState([]);
  const [chips, setChips] = useState([]);
  const [openFancyMinMaxStack, setOpenFancyMinMaxStack] = useState("");



  // useEffect(() => {
  //   if (openbets?.bets?.length > 0) {
  //     let openBetsData = [];
  //     if (event_id) {
  //       openBetsData = openbets?.bets?.filter(
  //         (item) => item.match_id == event_id
  //       );
  //     } else {
  //       openBetsData = openbets?.bets;
  //     }
  //     let fancyOpenBets = openBetsData?.filter(
  //       (fancy) => fancy.betting_type == "Fancy"
  //     );
  //     let matchOpenBets = openBetsData?.filter(
  //       (match) => match.betting_type == "Match"
  //     );
  //     setFancyBets(fancyOpenBets);
  //     setMatchBets(matchOpenBets);
  //   }
  // }, [openbets, location]);


  function calc(t_stake, priceVal, selection_id) {
    var isfancy = BetPlaceData.is_fancy;
    priceVal = parseFloat(priceVal);
    t_stake = parseFloat(t_stake);
    var isback = BetPlaceData.is_back
    if (!isfancy) {
      var pl = ((priceVal * t_stake) - t_stake);

      pl = parseFloat(pl.toFixed(2));
      if (isback) {
        setProfitValue(pl)
        setLossValue(t_stake)
        // console.log('back pl : ', pl, ' t_stake : ', t_stake);
      } else {
        setLossValue(pl)
        setProfitValue(t_stake)
        // console.log('calc func lay pl : ', pl, ' t_stake : ', t_stake);
      }
      // SetPosition(priceVal);
      // console.log('pl = ((priceVal * t_stake) - t_stake);', pl);
    } else {
      if (document.getElementById("fancyLay_Size" + selection_id)) {
        var NoValume = parseInt(
          document.getElementById("fancyLay_Size" + selection_id).innerHTML
        );
        var YesValume = parseInt(
          document.getElementById("fancyBack_Size" + selection_id).innerHTML
        );
        var inputno = parseFloat(
          document.getElementById(`fancyLay_Price${selection_id}`).innerHTML
        );
        var inputyes = parseFloat(
          document.getElementById(`fancyBack_Price${selection_id}`).innerHTML
        );

        // console.log('NoValume : ', NoValume, ' YesValume : ', YesValume, ' inputno : ', inputno, ' inputyes : ', inputyes);
      }

      pl = parseFloat(t_stake);

      if (inputno == inputyes) {
        if (isback) {
          setLossValue(pl.toFixed(2))
          setProfitValue((YesValume * pl / 100).toFixed(2))

        } else {
          setLossValue((NoValume * pl / 100).toFixed(2))
          setProfitValue(pl.toFixed(2))

        }
      } else {
        setLossValue(pl.toFixed(2))
        setProfitValue(pl.toFixed(2))
      }
    }
  }

  function SetPosition(stake, priceVal, market_id, is_back, selection_id) {
    priceVal = parseFloat(priceVal)
    var MarketId = market_id;
    var MId = MarketId.replace('.', '');
    var selectionId = selection_id;
    var isback = is_back;
    stake = parseFloat(stake);
    let MatchMarketTypes = "";
    var runners = document.getElementsByClassName("position_" + MId);
    // console.log('runners', runners);
    var tempRunners = "";
    for (var item of runners) {
      var selecid = item.getAttribute('data-id');
      var winloss = parseFloat(item.value);
      var curr = 0;
      if (selectionId == selecid) {
        if (isback) {
          if (MatchMarketTypes == 'M') {
            curr = winloss + ((priceVal * stake) / 100);
          } else {
            curr = winloss + ((priceVal * stake) - stake);
          }
        } else {
          if (MatchMarketTypes == 'M') {
            curr = winloss + (-1 * parseFloat((priceVal * stake) / 100));
          } else {
            curr = winloss + (-1 * parseFloat((priceVal * stake) - stake));
          }
        }
      } else {
        if (isback == 1) {
          curr = winloss + (-1 * (stake));
        } else {
          curr = winloss + stake;
        }
      }
      var currV = curr;
      if (document.getElementById(selecid + "_maxprofit_loss_runner_prev_" + MId)) {
        document.getElementById(selecid + "_maxprofit_loss_runner_prev_" + MId).setAttribute('data-value', winloss.toFixed(2))
        document.getElementById(selecid + "_maxprofit_loss_runner_prev_" + MId).innerHTML = Math.abs(winloss.toFixed(2));
      }
      if (document.getElementById(selecid + "_maxprofit_list_loss_runner_next_" + MId)) {
        document.getElementById(selecid + "_maxprofit_list_loss_runner_next_" + MId).setAttribute('data-value', currV.toFixed(2))
        document.getElementById(selecid + "_maxprofit_list_loss_runner_next_" + MId).innerHTML = Math.abs(currV.toFixed(2));
      }
      if (document.getElementById(selecid + "_maxprofit_Mlist_loss_runner_next_" + MId)) {
        document.getElementById(selecid + "_maxprofit_Mlist_loss_runner_next_" + MId).setAttribute('data-value', currV.toFixed(2))
        document.getElementById(selecid + "_maxprofit_Mlist_loss_runner_next_" + MId).innerHTML = Math.abs(currV.toFixed(2));
      }
    }
  }

  const placeStakeValue = (stake) => {
    if (String(stake).startsWith("NaN")) {
      stake = String(stake).replace("NaN", "");
    }
    setStakeValue(parseFloat(stake));
    calc(stake, BetPlaceData.price, BetPlaceData.selection_id);
    SetPosition(
      stake,
      BetPlaceData.price,
      BetPlaceData.market_id,
      BetPlaceData.is_back,
      BetPlaceData.selection_id
    );
  };

  const handlePriceValue = (priceVal) => {
    if (String(priceVal).startsWith("NaN")) {
      priceVal = String(priceVal).replace("NaN", "");
    }
    priceVal = parseFloat(priceVal).toFixed(2);
    setBetPlaceData({
      ...BetPlaceData,
      price: parseFloat(priceVal).toFixed(2)
    });
    calc(StakeValue, priceVal, BetPlaceData.selection_id)
    SetPosition(StakeValue, priceVal, BetPlaceData.market_id, BetPlaceData.is_back, BetPlaceData.selection_id);
  };

  const handleOpenBetSlip = (
    event_id,
    market_id,
    is_back,
    size,
    is_fancy,
    selection_id,
    runner_name,
    htmlId,
    PM_FANCY = null,
    market_name,
    is_manual = "No"
  ) => {
    if (!userInfo) {
      setShowLoginModel(true);
      return;
    }

    setShowBetsSlip(true);
    setSelection_id(selection_id);
    setMarketId(market_id);
    setType(is_back ? "back" : "lay");
    setHtmlId(htmlId);
    setSize(size);
    setIs_fancy(is_fancy);

    if (selection_id) {
      setSelectionIdNew(selection_id);
    }

    setProfitValue(0);
    setStakeValue(0);
    var priceNew = document.getElementById(htmlId).innerHTML;
    var lastFive = market_id.substr(market_id.length - 3);
    if (lastFive == "-BM") {
      priceNew = (priceNew / 100 + 1).toFixed(2);
    } else {
      if (
        market_name == "Bookmaker" ||
        market_name == "Bookmaker 2" ||
        is_manual == "Yes"
      ) {
        priceNew = (priceNew / 100 + 1).toFixed(2);
      }
    }
    // console.log('priceNew:', priceNew)
    setBetPlaceData({
      event_id: event_id,
      market_id: market_id,
      is_back: is_back ? 1 : 0,
      price: priceNew,
      is_fancy: is_fancy,
      selection_id: selection_id,
      runner_name: runner_name,
      PM_FANCY: PM_FANCY,
    });
    setShowPlaceBetPopup(true);

    setTimeout(function () {
      SetPosition(0, priceNew, market_id, is_back, selection_id);
      calc(0, priceNew, selection_id);
      placeStakeValue(0);
    }, 800);
  };

  function betPlace(ishow) {
    console.log("BEt place funtion triggered..");

    if (userInfo) {
      let exposureLimit;
      if (userInfo.user_type == "User") {
        setBetPlacedLoader(true);

        if (userInfo?.exposer_limit) {
          exposureLimit = Number(userInfo?.exposer_limit);
          const calc = Number(lossValue) + (Number(currentExposure) * -1);

          // console.log({
          //   'exposure limit': exposureLimit,
          //   ' profitValue': ProfitValue,
          //   'lossValue': lossValue,
          //   'current exposure': currentExposure,
          //   '+ve current exposure': (Number(currentExposure) * -1),
          //   'Calc expo after place bets': calc
          // });

          if (exposureLimit < calc) {
            toast.error(`Exposure Limit Is ${exposureLimit}`, { autoClose: 3000 });
            return;
          }

        }

        setPlacing(true);
        setIsLoading(true);

        var data = JSON.stringify({
          user_id: userInfo._id,
          match_id: BetPlaceData.event_id,
          selection_id: BetPlaceData.selection_id,
          is_back: BetPlaceData.is_back,
          stake: StakeValue,
          price_val: BetPlaceData.price,
          market_id: BetPlaceData.market_id,
          is_fancy: BetPlaceData.is_fancy == 1 ? "Yes" : "No",
          market_name: "Match odds",
          profit: ProfitValue,
          loss: lossValue,
          pm_fancy: BetPlaceData.PM_FANCY,
        });

        // console.log("bet send data : ", data);

        var config = {
          method: "post",
          url: `${Appconfig.apiUrl}betting/addBetting`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        // alert("success");
        axios(config)
          .then(function (response) {
            dispatch(setData(new Date().toISOString()));

            try {
              setPlacing(false);
              setSelection_id("");
              setHtmlId("");
              setProfitValue(0);
              setStakeValue(0);
              setShowBetsSlip(false);

              var data;
              if (userInfo) {
                data = {
                  user_id: userInfo._id,
                  event_id: event_id,
                };
              }
              dispatch(getMatchData(data));
              // getEvents()
              // getFancyData()
              if (userInfo) {
                getFancysExposure();
              }

              if (response.data.result == 0) {
                // console.log("response bet send Error :", response);
                toast.error(response.data.resultMessage);
                setBetPlacedLoader(false);
              } else {
                // console.log("response bet send Success :", response);

                setShowSuccessPopup(true);
                // Close the place bet popup
                setShowPlaceBetPopup(false);
                setBetPlaced(true);
                setBetPlacedLoader(false);

                toast.success(response.data.resultMessage);
                if (response.data.resultData[0].is_back == 1) {
                }
                if (response.data.resultData[0].is_back == 0) {
                }
                setIsBetPlaced(!isBetPlaced);
              }
              var MId = BetPlaceData.market_id.replace(".", "");
              var selectionId = BetPlaceData.selection_id;
              var runners = document.getElementsByClassName("position_" + MId);

              // console.log(
              //   "in side bet place : MId : ",
              //   MId,
              //   " runners : ",
              //   runners
              // );
              for (var item of runners) {
                var selecid = item.getAttribute("data-id");
                // console.log(" selecid : ", selecid);
                if (
                  document.getElementById(
                    selecid + "_maxprofit_list_loss_runner_next_" + MId
                  )
                ) {
                  document.getElementById(
                    selecid + "_maxprofit_list_loss_runner_next_" + MId
                  ).innerHTML = "";
                }
                if (
                  document.getElementById(
                    selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
                  )
                ) {
                  document.getElementById(
                    selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
                  ).innerHTML = "";
                }
              }
              setBetPlaceData({
                event_id: "",
                market_id: "",
                is_back: "",
                price: "",
                is_fancy: "",
                selection_id: "",
                runner_name: "",
              });
              setOpenPlaceBet({
                selectionId: "",
                type: "",
                odds: "",
              });
            } catch (e) {
              setBetPlacedLoader(false);
              console.log(e.message);
            }
            setIsLoading(false);
          })
          .catch(function (error) {
            console.log(error);
            console.log(error.message);
            setIsLoading(false);
            setPlacing(false);
            setBetPlacedLoader(false);
          });
        // } else {
        //   toast.error("Insufficient Balance");
        // }
      }
    } else {
      setShowLoginModel(true)
    }
  }

  const closePlaceBet = () => {
    var MId = BetPlaceData.market_id.replace(".", "");
    var selectionId = BetPlaceData.selection_id;
    var runners = document.getElementsByClassName("position_" + MId);

    // console.log("in side bet place : MId : ", MId, " runners : ", runners);
    for (var item of runners) {
      var selecid = item.getAttribute("data-id");
      // console.log(" selecid : ", selecid);
      if (
        document.getElementById(
          selecid + "_maxprofit_list_loss_runner_next_" + MId
        )
      ) {
        document.getElementById(
          selecid + "_maxprofit_list_loss_runner_next_" + MId
        ).innerHTML = "";
      }
      if (
        document.getElementById(
          selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
        )
      ) {
        document.getElementById(
          selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
        ).innerHTML = "";
      }
    }
    setBetPlaceData({
      event_id: "",
      market_id: "",
      is_back: "",
      price: "",
      is_fancy: "",
      selection_id: "",
      runner_name: "",
    });
    setOpenPlaceBet({
      selectionId: "",
      type: "",
      odds: "",
    });
    setStakeValue(0)
  };

  const getFancyExposure = (selectionId) => {
    let findItem = fancyExposure.find(
      (item) => item.selection_id == selectionId
    );

    if (findItem) {
      return findItem?.min;
    } else {
      return false;
    }
  };

  const checkFancyExposureExists = (selectionId) => {
    let findItem = fancyExposure.find(
      (item) => item.selection_id == selectionId
    );

    if (findItem) {
      return true;
    } else {
      return false;
    }
  };

  function getGeneralSetting() {
    var data = JSON.stringify({
      user_id: userInfo?._id,
      event_id: event_id,
    });
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}matchGeneralSetting/getAllGeneralSetting`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        try {
          // alert("Hello");
          // console.log('general setting response', response.data)
          if (response.data.result) {
            setGeneralSetting(response.data.resultData);
          }
        } catch (e) {
          // postErrorToslack(e.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        // postErrorToslack(error.message);
      });
  }

  function getFancysExposure() {
    if (userInfo) {
      var data = JSON.stringify({
        event_id: event_id,
        user_id: userInfo._id,
      });
      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}betting/getFancysExposure`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          try {
            if (response.data.resultData.length > 0) {
              setFancyExposure(response.data.resultData);
            }
          } catch (e) {
            console.log(e);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setShowLoginModel(true)
    }
  }

  function getChips() {
    if (userInfo) {
      var data = JSON.stringify({
        user_id: userInfo._id,
      });
      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}chips/getChips`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          try {
            // console.log('chip response : ', response)
            if (response.status) {
              // console.log('Chips data : ', response.data);
              if (response?.data?.length > 0) {
                setChips(response.data);
              } else {
                const chipData = [
                  { chip_value: 100 },
                  { chip_value: 200 },
                  { chip_value: 500 },
                  { chip_value: 1000 },
                  { chip_value: 5000 },
                  { chip_value: 10000 },
                  { chip_value: 50000 },
                  { chip_value: 100000 },
                ]
                setChips(chipData)
              }
            }
          } catch (e) {
            console.log(e);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setShowLoginModel(true)
    }
  }

  function getFancyPosition(selectionId) {
    if (userInfo) {
      var data = JSON.stringify({
        user_id: userInfo._id,
        event_id: event_id,
        fancy_id: selectionId,
      });
      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}betting/getFancyPosition`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          try {
            setPostionFancyList(response.data.resultData);
            setBookModalOpen(true);
          } catch (e) {
            console.log(e);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    console.log('openBEts : ', openbets);
    if (openbets?.bets?.length > 0) {
      let openBetsData = [];
      if (event_id) {
        openBetsData = openbets?.bets?.filter(
          (item) => item.match_id == event_id
        );
      }
      setBetsData(openBetsData);
      // console.log('openBEts data : ', openBetsData);
    }
  }, [openbets, event_id]);


  useEffect(() => {
    if (userInfo) {
      getGeneralSetting();
      getFancysExposure();
      getChips();
    }
  }, [event_id]);

  // Use Dispatch use Effects
  useEffect(() => {
    dispatch(
      getAllEvents({
        user_id: userInfo ? userInfo._id : "",
      })
    );
  }, []);

  useEffect(() => {
    var data;
    if (userInfo) {
      data = {
        user_id: userInfo._id,
        event_id: event_id,
      };
    } else {
      data = {
        event_id: event_id,
      };
    }
    dispatch(getMatchData(data));
  }, []);

  useEffect(() => {
    dispatch(
      getMatchFancyData({
        event_id: event_id,
        user_id: userInfo ? userInfo._id : "",
      })
    );
  }, []);
  // useEffect(() => {
  //   if (userInfo) {
  //     dispatch(getUserBal({
  //       user_id: userInfo?._id,
  //     }))

  //     dispatch(getLoginUser({
  //       user_id: userInfo ? userInfo._id : "",
  //     }));
  //   }
  // }, [userInfo?._id])

  // Open Websocket state
  useEffect(() => {
    if (websocket) {
      websocket.onopen = () => {
        console.log("Websocket is open ", new Date());
        setIsReady(true);
      };

      if (websocket.readyState) {
        // console.log("WESOCKET JOIN REQUEST SENT", {
        //   action: "JOIN",
        //   data: {
        //     username: "suthard444",
        //     event_id: event_id,
        //   },
        // });

        websocket.send(
          JSON.stringify({
            action: "JOIN",
            data: {
              username: "suthard444",
              event_id: event_id,
            },
          })
        );
      }
    }
    // console.log("Websocket : ", websocket);
  }, [websocket, event_id, isReady]);

  // For Bhaw Fluctuation
  useEffect(() => {
    if (websocket) {
      websocket.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        if (data.action == "MARKET_UPDATE") {
          const market = data.data;
          // console.log("MARKET SOCKET RESPONDING", market);
          // console.log("market", market);

          if (market?.market_types?.length > 0) {
            market.market_types.forEach((item) => {
              // For Match Odds
              if (
                item?.market_name == "Match Odds" &&
                item.runners?.length > 0
              ) {
                item.runners.map((runner) => {
                  // For MO Back
                  const moBackPrice = document.getElementById(
                    `moBack_Price${runner.selection_id}`
                  );
                  // console.log("mo back : ", moBackPrice?.innerHTML);
                  if (moBackPrice) {
                    moBackPrice.innerHTML = runner.back_1_price;
                  }

                  const moBackSize = document.getElementById(
                    `moBack_Size${runner.selection_id}`
                  );
                  if (moBackSize) {
                    moBackSize.innerHTML = runner.back_1_size;
                  }

                  // For MO Lay

                  const moLayPrice = document.getElementById(
                    `moLay_Price${runner.selection_id}`
                  );
                  // console.log("mo back : ", moBackPrice?.innerHTML);
                  if (moLayPrice) {
                    moLayPrice.innerHTML = runner.lay_1_price;
                  }

                  const moLaySize = document.getElementById(
                    `moLay_Size${runner.selection_id}`
                  );
                  if (moLaySize) {
                    moLaySize.innerHTML = runner.lay_1_size;
                  }
                });
              }

              // For Bookmaker
              if (
                item?.market_name == "Bookmaker" &&
                item.runners?.length > 0
              ) {
                item.runners.map((runner) => {
                  // For BM Back
                  const bmBackPrice = document.getElementById(
                    `bmBack_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", bmBackPrice?.innerHTML);
                  if (bmBackPrice) {
                    bmBackPrice.innerHTML = runner.back_1_price;
                  }

                  const bmBackSize = document.getElementById(
                    `bmBack_Size${runner.selection_id}`
                  );
                  if (bmBackSize) {
                    bmBackSize.innerHTML = runner.back_1_size;
                  }

                  // For BM Lay

                  const bmLayPrice = document.getElementById(
                    `bmLay_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", bmBackPrice?.innerHTML);
                  if (bmLayPrice) {
                    bmLayPrice.innerHTML = runner.lay_1_price;
                  }

                  const bmLaySize = document.getElementById(
                    `bmLay_Size${runner.selection_id}`
                  );
                  if (bmLaySize) {
                    bmLaySize.innerHTML = runner.lay_1_size;
                  }
                  // ✅ Dynamic Suspended Overlay Insert/Remove
                  const overlayId = `bmSuspend_${runner.selection_id}`;
                  const container = bmBackPrice?.parentElement?.parentElement; // target the .relative flex container
                  const existingOverlay = document.getElementById(overlayId);

                  if (runner.status === "SUSPENDED" || runner.status === "Ball Running") {
                    if (!existingOverlay && container) {
                      const span = document.createElement("span");
                      span.id = overlayId;
                      span.className = "absolute inset-0 flex justify-center items-center bg-[#0009] text-[#ff3c3c] text-[16px] uppercase z-10";
                      span.innerText = runner.status;
                      container.appendChild(span);
                    } else if (existingOverlay) {
                      existingOverlay.innerText = runner.status;
                    }
                  } else {
                    // Remove overlay if game_status is cleared
                    if (existingOverlay) {
                      existingOverlay.remove();
                    }
                  }
                });
              }

              // For Tied Match
              if (
                item?.market_name == "TIED_MATCH" &&
                item.runners?.length > 0
              ) {
                item.runners.map((runner) => {
                  // For Tied Back
                  const tiedBackPrice = document.getElementById(
                    `tiedBack_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", tiedBack_Price?.innerHTML);
                  if (tiedBackPrice) {
                    tiedBackPrice.innerHTML = runner.back_1_price;
                  }

                  const tiedBackSize = document.getElementById(
                    `tiedBack_Size${runner.selection_id}`
                  );
                  if (tiedBackSize) {
                    tiedBackSize.innerHTML = runner.back_1_size;
                  }

                  // For Tied Lay

                  const tiedLayPrice = document.getElementById(
                    `tiedLay_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", tiedLay_Price?.innerHTML);
                  if (tiedLayPrice) {
                    tiedLayPrice.innerHTML = runner.lay_1_price;
                  }

                  const tiedLaySize = document.getElementById(
                    `tiedLay_Size${runner.selection_id}`
                  );
                  if (tiedLaySize) {
                    tiedLaySize.innerHTML = runner.lay_1_size;
                  }
                });
              }

              // For Toss Match
              if (
                item?.market_name == "TIED_MATCH" &&
                item.runners?.length > 0
              ) {
                item.runners.map((runner) => {
                  // For Tied Back
                  const tiedBackPrice = document.getElementById(
                    `tiedBack_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", tiedBack_Price?.innerHTML);
                  if (tiedBackPrice) {
                    tiedBackPrice.innerHTML = runner.back_1_price;
                  }

                  const tiedBackSize = document.getElementById(
                    `tiedBack_Size${runner.selection_id}`
                  );
                  if (tiedBackSize) {
                    tiedBackSize.innerHTML = runner.back_1_size;
                  }

                  // For Tied Lay

                  const tiedLayPrice = document.getElementById(
                    `tiedLay_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", tiedLay_Price?.innerHTML);
                  if (tiedLayPrice) {
                    tiedLayPrice.innerHTML = runner.lay_1_price;
                  }

                  const tiedLaySize = document.getElementById(
                    `tiedLay_Size${runner.selection_id}`
                  );
                  if (tiedLaySize) {
                    tiedLaySize.innerHTML = runner.lay_1_size;
                  }
                });
              }
            });
          }
        }

        if (data.action === "FANCY_UPDATE") {
          const market = data.data;
          // console.log("FANCY SOCKET RESPONDING : ", market);
          if (market?.fancy_data?.length > 0) {
            // handle FANCY_UPDATE if needed
            market?.fancy_data?.forEach((item) => {
              // For Fancy Back
              const fancyBackPrice = document.getElementById(
                `fancyBack_Price${item.selection_id}`
              );
              // console.log("Fancy back : ", fancyBackPrice?.innerHTML);
              if (fancyBackPrice) {
                fancyBackPrice.innerHTML = item.back_price1;
              }

              const fancyBackSize = document.getElementById(
                `fancyBack_Size${item.selection_id}`
              );
              if (fancyBackSize) {
                fancyBackSize.innerHTML = item.back_size1;
              }

              // For Fancy Lay

              const fancyLayPrice = document.getElementById(
                `fancyLay_Price${item.selection_id}`
              );
              if (fancyLayPrice) {
                fancyLayPrice.innerHTML = item.lay_price1;
              }

              const fancyLaySize = document.getElementById(
                `fancyLay_Size${item.selection_id}`
              );
              if (fancyLaySize) {
                fancyLaySize.innerHTML = item.lay_size1;
              }
              // ✅ Dynamic Suspended Overlay Insert/Remove
              const overlayId = `fancySuspend_${item.selection_id}`;
              const container = fancyLayPrice?.parentElement?.parentElement; // target the .relative flex container
              const existingOverlay = document.getElementById(overlayId);

              if (item.game_status === "SUSPENDED" || item.game_status === "Ball Running") {
                if (!existingOverlay && container) {
                  const span = document.createElement("span");
                  span.id = overlayId;
                  span.className = "absolute inset-0 flex justify-center items-center bg-[#0009] text-[#ff3c3c] text-[16px] uppercase z-10";
                  span.innerText = item.game_status;
                  container.appendChild(span);
                } else if (existingOverlay) {
                  existingOverlay.innerText = item.game_status;
                }
              } else {
                // Remove overlay if game_status is cleared
                if (existingOverlay) {
                  existingOverlay.remove();
                }
              }
            });
          }
        }
      };
    }
  }, [websocket, event_id]);

  // Render Event Data MatchOdds Bookmaker
  useEffect(() => {
    console.log("userInfos : ", userInfos);
    if (userInfos.eventData[event_id]) {
      setScoreUrl(`https://score.trovetown.co/socket-iframe-1/crickexpo/${userInfos.eventData[event_id][0]?.betfair_event_id}`)
      setEventData(userInfos.eventData[event_id]);
      setMarketTypes(userInfos.eventData[event_id][0]?.marketTypes);
      setFancy(userInfos.eventData[event_id][0]?.fancy);
      console.log(
        "market_name : ",
        userInfos.eventData[event_id][0]?.marketTypes?.map(
          (item) => item.market_name
        )
      );

      setTvUrl(userInfos.eventData[event_id][0]?.tv_link);
      let eventType = userInfos.eventData[event_id][0];
      if (eventType?.event_type == 4) {
        setEventType("Cricket");
      } else if (eventType?.event_type == 2) {
        setEventType("Tennis");
      } else {
        setEventType("Soccer");
      }
      setEventName(eventType?.event_name);
      setOpenDate(eventType?.open_date);
      setIsInplay(eventType?.is_inplay == "True" ? true : false);

      userInfos.eventData[event_id][0]?.marketTypes?.map((type) => {
        if (type.market_name == "Bookmaker") {
          setBookmaker(type);
          // console.log("Bookmaker data : ", type);
        }
        if (type.market_name == "Match Odds") {
          setMatchOdds(type);
          // console.log("Match odds data : ", type);
        }
        if (type.market_name == "TIED_MATCH") {
          setTiedMatch(type);
          // console.log("TIED_MATCH data : ", type);
        }
        if (type.market_name == "Toss") {
          setToss(type);
          // console.log("Toss data : ", type);
        }
      });
      setIsEventLoading(false);
    }
  }, [userInfos.eventData[event_id]]);

  // Render Fancy Data
  useEffect(() => {
    // console.log(
    //   "userFancyData.fancyData[event_id] : ",
    //   userFancyData.fancyData[event_id]
    // );
    if (userFancyData.fancyData[event_id]?.length > 0) {
      setFancyData(userFancyData.fancyData[event_id]);
    }
  }, [userFancyData.fancyData[event_id], event_id]);

  return (
    <>

      <Modal
        title={"Book"}
        className="book-model"
        onCancel={() => setBookModalOpen(false)}
        footer={null}
        open={bookModalOpen}
      >
        <div className="p-[5px] text-[#23282c]">
          <div className="grid border-[2px] border-[#333] border-t border-t-[#333] w-full">
            {/* Header */}
            <div className="bg-[#e0e6e6] w-full">
              <div className="grid grid-cols-2 w-full">
                <div className="flex items-center justify-center p-[5px] border-r border-black">
                  <span className="text-black font-bold">Run</span>
                </div>
                <div className="flex items-center justify-center p-[5px] border-r border-black">
                  <span className="text-black font-bold">Amount</span>
                </div>
              </div>
            </div>

            {/* Body */}
            {postionFancyList.length > 0 ? (
              postionFancyList.map((item, index) => {
                if (item != null) {
                  return (
                    <div key={index} className="bg-[#e0e6e6] w-full">
                      <div className="grid grid-cols-2 w-full">
                        <div className="flex items-center justify-center p-[5px] border-r border-black">
                          <span className="text-black font-bold">{index}</span>
                        </div>
                        <div className="flex items-center justify-center p-[5px] border-r border-black">
                          <span
                            className={`font-bold ${item < 0 ? "text-red-600" : "text-green-600"
                              }`}
                            data-value={item}
                          >
                            {item}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div className="w-full font-bold text-center border-t border-black">
                No data!
              </div>
            )}
          </div>
        </div>
      </Modal>

      <div className="flex p-0 lg:p-1 gap-1 w-full">
        <div className="w-full lg:w-[70%]">
          <div className="flex lg:hidden justify-between items-center font-bold bg-[var(--theme1-bg)] text-[var(--secondary-color)] text-xs">
            <div className={`py-2 border-t-2 ${selectedSection == "odds" ? "border-[#fff]" : "border-transparent"} `}>
              <span className="px-3 border-r border-white" onClick={() => setSelectedSection("odds")}>ODDS</span>
            </div>
            <div className={`py-2 border-t-2 ${selectedSection == "bets" ? "border-[#fff]" : "border-transparent"} `}>
              <span className="px-3 border-r border-white" onClick={() => setSelectedSection("bets")}>MATCHES BET ({betsData?.length})</span>
            </div>
            <div className="flex justify-end item-center w-[50%] p-2">
              <span
                className="cursor-pointer"
                onClick={() => setIsScoreCardOpen((prev) => !prev)}
              >
                <img
                  src="/Images/scorecard-icon.webp"
                  alt=""
                  className="invert w-[30px]"
                />
              </span>
              <span
                className="flex justify-center items-center ml-3 cursor-pointer"
                onClick={() => setIsTvOpen((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  style={{ transform: "scale(1.1)" }}
                  fill="white"
                  className="bi bi-tv"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                </svg>
              </span>
            </div>
          </div>
          {selectedSection == "odds" &&
            <>
              <div className="flex justify-between items-center text-[var(--secondary-color)] bg-[var(--theme2-bg)] p-2">
                <span className="text-xs font-bold uppercase">
                  {eventName ? eventName : ""}
                </span>
                <span className="ml-1 text-xs"> {openDate ? openDate : ""}</span>
              </div>
              {/* Tv Panel*/}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isTvOpen
                  ? "max-h-[300px] opacity-100 translate-y-0 p-1"
                  : "max-h-0 opacity-0 -translate-y-2"
                  } flex justify-center items-center w-full bg-white`}
              >
                {isTvOpen &&
                  <iframe
                    src={tvUrl}
                    className="w-full h-[250px] border-0"
                    allowFullScreen
                  ></iframe>
                }
              </div>

              {/* Iframe */}
              <div
                className={`overflow-y-auto transition-all duration-500 ease-in-out ${isScoreCardOpen
                  ? "max-h-[165px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
                  } w-full bg-cover bg-center bg-no-repeat p-1`}
              // style={{ backgroundImage: `url(/Images/scoreCardBG-mobile.webp)` }}
              >
                <iframe
                  src={scoreUrl}
                  className="w-full border-0"
                  allowFullScreen
                  style={{ height: "220px" }}
                />
              </div>


              <div>
                {/* MatchOdds */}
                {matchOdds != "" && (
                  <div>
                    <div className="flex justify-start items-center p-1 bg-[var(--theme2-bg85)]">
                      <span className="text-sm text-[var(--secondary-color)] mr-2">
                        {matchOdds?.market_name || "Match Odds"}
                      </span>
                      <span className="bg-[#fab418] text-[10px] font-extrabold uppercase p-1 rounded ml-3">
                        Cashout
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-between border border-[#aaa]">
                        <span className="text-xs font-semibold py-[2px] pl-1">
                          {/* Min:100 Max:10k */}
                          {
                            generalSetting.length > 0 ?

                              generalSetting?.map(gen => {
                                if ((eventType == "Cricket" && matchOdds?.market_name == "Match Odds" && gen.event_name == "cricket") || (eventType == "Soccer" && gen.event_name == "soccer") || (eventType == "Tennis" && gen.event_name == "tennis")) {
                                  return is_inplay == "Inplay" ? (`Min:${gen.min_stake} Max:${gen.max_stake}`) : (`Min:${gen.min_stake} Max:${gen.pre_inplay_stake}`)
                                } else if (eventType == "Cricket" && matchOdds?.market_name == "Bookmaker" && gen.event_name == "bookmaker") {
                                  return is_inplay == "Inplay" ? (`Min:${gen.min_stake} Max:${gen.max_stake}`) : (`Min:${gen.min_stake} Max:${gen.pre_inplay_stake}`)
                                }

                              })
                              :
                              'Min:100 Max:10k'

                          }
                        </span>
                        <div className="flex justify-center">
                          <span className="flex justify-center items-center px-2 w-[79.5px] text-xs font-semibold bg-[#a7d8fd] border-r border-l border-[#aaa]">
                            BACK
                          </span>
                          <span className="flex justify-center items-center px-2 w-[79.5px] text-xs font-semibold bg-[#ffd5da] border-r border-[#aaa]">
                            LAY
                          </span>
                        </div>
                      </div>
                      {/* Runner 1 */}
                      {matchOdds?.marketRunners?.length > 0 &&
                        matchOdds?.marketRunners?.map((item, index) => (
                          <>
                            <div
                              className="flex justify-between bg-[#f2f2f2] border-b border-[#aaa]"
                              key={index}
                            >
                              <div
                                className={`flex flex-col justify-between items-start w-full`}
                                data-id={item.selection_id}
                              >
                                <input
                                  type="hidden"
                                  id="matchodds_id_preserve"
                                  value={item.market_id}
                                />
                                <input
                                  type="hidden"
                                  className={`position_${item.market_id.replace(
                                    ".",
                                    ""
                                  )}`}
                                  data-id={item.selection_id}
                                  value={Math.round(item.exposure.toFixed(2))}
                                />
                                <span className="text-[12px] font-semibold p-1">
                                  {item.runner_name}
                                </span>
                                <div className="flex justify-between items-center w-full">
                                  <span
                                    id={`${item.selection_id}_maxprofit_list_loss_runner_prev_${item.market_id}`}
                                    data-value={item.exposure}
                                    className={`win market-exposure text-xs font-bold ${item.exposure >= 0
                                      ? "text-green-700"
                                      : "text-red-700"
                                      } p-1 leading-[0.5]`}
                                  >
                                    {Math.abs(item.exposure.toFixed(2))}
                                  </span>
                                  <span
                                    id={`${item.selection_id}_maxprofit_Mlist_loss_runner_next_${item.market_id}`}
                                    className={`to-win market-exposure text-xs font-bold p-1`}
                                  ></span>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <span
                                  className="flex flex-col justify-center items-center w-[80px] text-[1rem] font-bold leading-[1.2] bg-[#a7d8fd] ml-[1px] px-1 border-r border-l border-[#aaa]"
                                  onClick={() => {
                                    if (item.lay_1_price > 0) {
                                      handleOpenBetSlip(
                                        event_id,
                                        item.market_id,
                                        true,
                                        `moBack_Size${item.selection_id}`,
                                        false,
                                        item.selection_id,
                                        item.runner_name,
                                        `moBack_Price${item.selection_id}`,
                                        false,
                                        "Match Odds"
                                      );
                                      setOpenPlaceBet({
                                        selectionId: item.selection_id,
                                        type: "back",
                                        odds: item.back_1_price,
                                      });
                                    }
                                  }}
                                >
                                  <span id={`moBack_Price${item.selection_id}`}>
                                    {item.back_1_price}
                                  </span>
                                  <span
                                    id={`moBack_Size${item.selection_id}`}
                                    className="text-[12px] font-normal"
                                  >
                                    {item.back_1_size}
                                  </span>
                                </span>
                                <span
                                  className="flex flex-col justify-center items-center w-[80px] text-[1rem] font-bold leading-[1.2] bg-[#ffd5da] px-1 border-r border-[#aaa]"
                                  onClick={() => {
                                    if (item.lay_1_price > 0) {
                                      setOpenPlaceBet({
                                        selectionId: item.selection_id,
                                        type: "lay",
                                        odds: item.lay_1_price,
                                      });
                                      handleOpenBetSlip(
                                        event_id,
                                        item.market_id,
                                        false,
                                        `moLay_Size${item.selection_id}`,
                                        false,
                                        item.selection_id,
                                        item.runner_name,
                                        `moLay_Price${item.selection_id}`,
                                        false,
                                        "Match Odds"
                                      );
                                    }
                                  }}
                                >
                                  <span id={`moLay_Price${item.selection_id}`}>
                                    {item.lay_1_price}
                                  </span>
                                  <span
                                    id={`moLay_Size${item.selection_id}`}
                                    className="text-[12px] font-normal"
                                  >
                                    {item.lay_1_size}
                                  </span>
                                </span>
                              </div>
                            </div>
                            {/* Place Bet Section */}
                            {openPlaceBet?.selectionId == item.selection_id && (
                              <div
                                className={`${openPlaceBet?.type == "back"
                                  ? "bg-[#a7d8fd]"
                                  : "bg-[#ffd5da]"
                                  } p-1 relative block lg:hidden`}
                              >
                                <div
                                  className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${!isLoading ? "hidden" : ""
                                    }`}
                                  style={{
                                    backgroundColor: "#ffffff2b",
                                    // opacity: "0.5",
                                    // marginTop: "",
                                  }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 fa-spin">
                                    <path fill="black" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                                  </svg>
                                </div>
                                <div className="flex justify-between items-center w-full px-2 my-1">
                                  <div className="flex justify-center items-center">
                                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                      -
                                    </span>
                                    <input
                                      type="text"
                                      value={openPlaceBet?.odds}
                                      readOnly
                                      className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                                    />

                                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                      +
                                    </span>
                                  </div>
                                  <input
                                    type="number"
                                    className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                                    value={StakeValue}
                                    onChange={(e) => placeStakeValue(Number(e.target.value))}
                                  />
                                </div>
                                <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                                  {chips?.map((chip, i) => (
                                    <button
                                      key={chip.id}
                                      className="p-[2px] bg-white font-medium text-[14px] text-center"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        placeStakeValue(Number(StakeValue) + chip.chip_value);
                                      }}
                                    >
                                      <span className="text-lg font-black text-[#009905]">
                                        +
                                      </span>{" "}
                                      {chip.chip_value}
                                    </button>
                                  ))}
                                </div>
                                <div className="flex gap-[2px] w-full">
                                  {/* <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                                MIN STAKE
                              </button>
                              <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[var(--secondary-color)] text-center">
                                MAX STAKE
                              </button> */}
                                  <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => setStakeValue(currentBalance)}>
                                    All IN
                                  </button>
                                  <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => navigate('/settings')}>
                                    EDIT STAKE
                                  </button>
                                  <button
                                    className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full"
                                    onClick={() => setStakeValue(0)}
                                  >
                                    CLEAR
                                  </button>
                                </div>

                                <div className="flex justify-between items-center my-1">
                                  <button
                                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#fa6a6a] p-2"
                                    onClick={() => closePlaceBet()}
                                  >
                                    CANCEL
                                  </button>
                                  <button
                                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#00a105] p-2"
                                    onClick={() => betPlace()}
                                  >
                                    PLACE BET
                                  </button>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                    </div>
                  </div>
                )}
                {/* Bookmaker */}
                {bookmaker != "" && (
                  <div>
                    <div className="flex justify-start items-center p-1 bg-[var(--theme2-bg85)]">
                      <span className="text-sm text-[var(--secondary-color)] mr-2">
                        BOOKMAKER
                      </span>
                      <span className="bg-[#fab418] text-[10px] font-extrabold uppercase p-1 rounded ml-3">
                        Cashout
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-between border border-[#aaa]">
                        <span className="text-xs font-semibold py-[2px] pl-1">
                          {/* Min:100 Max:10k */}
                          {
                            generalSetting.length > 0 ?

                              generalSetting?.map(gen => {
                                if (eventType == "Cricket" && bookmaker?.market_name == "Bookmaker" && gen.event_name == "bookmaker") {
                                  return is_inplay == "Inplay" ? (`Min:${gen.min_stake} Max:${gen.max_stake}`) : (`Min:${gen.min_stake} Max:${gen.pre_inplay_stake}`)
                                }

                              })
                              :
                              'Min:100 Max:10k'

                          }
                        </span>
                        <div className="flex justify-center">
                          <span className="flex justify-center items-center px-2 w-[79.5px] text-xs font-semibold bg-[#a7d8fd] border-r border-l border-[#aaa]">
                            Back
                          </span>
                          <span className="flex justify-center items-center px-2 w-[79.5px] text-xs font-semibold bg-[#ffd5da] border-r border-[#aaa]">
                            Lay
                          </span>
                        </div>
                      </div>
                      {/* Runner 1 */}
                      {bookmaker?.marketRunners?.length > 0 &&
                        bookmaker?.marketRunners?.map((item, index) => (
                          <>
                            <div
                              className="flex justify-between border-b border-[#aaa]"
                              key={index}
                            >
                              <div
                                className={`flex flex-col justify-between items-start w-full`}
                                data-id={item.selection_id}
                              >
                                <input
                                  type="hidden"
                                  id="matchodds_id_preserve"
                                  value={item.market_id}
                                />
                                <input
                                  type="hidden"
                                  className={`position_${item.market_id.replace(
                                    ".",
                                    ""
                                  )}`}
                                  data-id={item.selection_id}
                                  value={Math.round(item.exposure.toFixed(2))}
                                />
                                <span className="text-[12px] font-semibold p-1">
                                  {item.runner_name}
                                </span>
                                <div className="flex justify-between items-center w-full">
                                  <span
                                    id={`${item.selection_id}_maxprofit_list_loss_runner_prev_${item.market_id}`}
                                    data-value={item.exposure}
                                    className={`win market-exposure text-xs font-bold ${item.exposure >= 0
                                      ? "text-green-700"
                                      : "text-red-700"
                                      } p-1 leading-[0.5]`}
                                  >
                                    {Math.abs(item.exposure.toFixed(2))}
                                  </span>
                                  <span
                                    id={`${item.selection_id}_maxprofit_Mlist_loss_runner_next_${item.market_id}`}
                                    className={`to-win market-exposure text-xs font-bold p-1`}
                                  ></span>
                                </div>
                              </div>
                              <div className="flex justify-center relative ">
                                <span
                                  className="flex flex-col justify-center items-center w-[80px] text-[1rem] font-bold leading-[1.2] bg-[#a7d8fd] ml-[1px] px-1 border-r border-l border-[#aaa]"
                                  onClick={() => {
                                    if (item.back_1_price > 0) {
                                      handleOpenBetSlip(
                                        event_id,
                                        item.market_id,
                                        true,
                                        `bmBack_Size${item.selection_id}`,
                                        false,
                                        item.selection_id,
                                        item.runner_name,
                                        `bmBack_Price${item.selection_id}`,
                                        false,
                                        "Bookmaker"
                                      );
                                      setOpenPlaceBet({
                                        selectionId: item.selection_id,
                                        type: "back",
                                        odds: item.back_1_price,
                                      });
                                    }
                                  }}
                                >
                                  <span id={`bmBack_Price${item.selection_id}`}>
                                    {item.back_1_price}
                                  </span>
                                  <span
                                    id={`bmBack_Size${item.selection_id}`}
                                    className="text-[12px] font-normal"
                                  >
                                    {item.back_1_size}
                                  </span>
                                </span>
                                <span
                                  className="flex flex-col justify-center items-center w-[80px] text-[1rem] font-bold leading-[1.2] bg-[#ffd5da] px-1 border-r border-[#aaa]"
                                  onClick={() => {
                                    if (item.lay_1_price > 0) {
                                      handleOpenBetSlip(
                                        event_id,
                                        item.market_id,
                                        false,
                                        `bmLay_Size${item.selection_id}`,
                                        false,
                                        item.selection_id,
                                        item.runner_name,
                                        `bmLay_Price${item.selection_id}`,
                                        false,
                                        "Bookmaker"
                                      );
                                      setOpenPlaceBet({
                                        selectionId: item.selection_id,
                                        type: "lay",
                                        odds: item.lay_1_price,
                                      });
                                    }
                                  }}
                                >
                                  <span id={`bmLay_Price${item.selection_id}`}>
                                    {item.lay_1_price}
                                  </span>
                                  <span
                                    id={`bmLay_Size${item.selection_id}`}
                                    className="text-[12px] font-normal"
                                  >
                                    {item.lay_1_size}
                                  </span>
                                </span>
                              </div>
                            </div>
                            {/* Place Bet Section */}
                            {openPlaceBet?.selectionId == item.selection_id && (
                              <div
                                className={`${openPlaceBet?.type == "back"
                                  ? "bg-[#a7d8fd]"
                                  : "bg-[#ffd5da]"
                                  } p-1 relative block lg:hidden`}
                              >
                                <div
                                  className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${!isLoading ? "hidden" : ""
                                    }`}
                                  style={{
                                    backgroundColor: "#ffffff2b",
                                    // opacity: "0.5",
                                    // marginTop: "",
                                  }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 fa-spin">
                                    <path fill="black" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                                  </svg>
                                </div>
                                <div className="flex justify-between items-center w-full px-2 my-1">
                                  <div className="flex justify-center items-center">
                                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                      -
                                    </span>
                                    <input
                                      type="text"
                                      value={openPlaceBet?.odds}
                                      readOnly
                                      className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                                    />

                                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                      +
                                    </span>
                                  </div>
                                  <input
                                    type="number"
                                    className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                                    value={StakeValue}
                                    onChange={(e) => placeStakeValue(Number(e.target.value))}
                                  />
                                </div>
                                <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                                  {chips?.map((chip, i) => (
                                    <button
                                      key={chip.id}
                                      className="p-[2px] bg-white font-medium text-[14px] text-center"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        placeStakeValue(Number(StakeValue) + chip.chip_value);
                                      }}
                                    >
                                      <span className="text-lg font-black text-[#009905]">
                                        +
                                      </span>{" "}
                                      {chip.chip_value}
                                    </button>
                                  ))}
                                </div>
                                <div className="flex gap-[2px] w-full">
                                  {/* <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                                MIN STAKE
                              </button>
                              <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[var(--secondary-color)] text-center">
                                MAX STAKE
                              </button> */}
                                  <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => setStakeValue(currentBalance)}>
                                    All IN
                                  </button>
                                  <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => navigate('/settings')}>
                                    EDIT STAKE
                                  </button>
                                  <button
                                    className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full"
                                    onClick={() => setStakeValue(0)}
                                  >
                                    CLEAR
                                  </button>
                                </div>
                                <div className="flex justify-between items-center my-1">
                                  <button
                                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#fa6a6a] p-2"
                                    onClick={() => closePlaceBet()}
                                  >
                                    CANCEL
                                  </button>
                                  <button
                                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#00a105] p-2"
                                    onClick={() => betPlace()}
                                  >
                                    PLACE BET
                                  </button>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                    </div>
                  </div>
                )}
                {/* Toss */}
                {toss != "" && toss?.marketRunners?.length > 0 && (
                  <div>
                    <div className="flex justify-start items-center p-1 bg-[var(--theme2-bg85)]">
                      <span className="text-sm text-[var(--secondary-color)] mr-2">TOSS</span>
                      <span className="bg-[#fab418] text-[10px] font-extrabold uppercase p-1 rounded ml-3">
                        {/* Cashout */}
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-between border border-[#aaa]">
                        <span className="text-xs font-semibold py-[2px] pl-1">
                          Min : 100 Max : 100000
                        </span>
                        <div className="flex justify-center">
                          <span className="flex justify-center items-center px-2 w-[79.5px] text-xs font-semibold bg-[#a7d8fd] border-r border-l border-[#aaa]">
                            Back
                          </span>
                          <span className="flex justify-center items-center px-2 w-[79.5px] text-xs font-semibold bg-[#ffd5da] border-r border-[#aaa]">
                            Lay
                          </span>
                        </div>
                      </div>
                      {/* Runner 1 */}
                      {toss?.marketRunners?.length > 0 &&
                        toss?.marketRunners?.map((item, index) => (
                          <>
                            <div
                              className="flex justify-between border-b border-[#aaa]"
                              key={index}
                            >
                              <div
                                className={`flex flex-col justify-between items-start w-full`}
                                data-id={item.selection_id}
                              >
                                <input
                                  type="hidden"
                                  id="matchodds_id_preserve"
                                  value={item.market_id}
                                />
                                <input
                                  type="hidden"
                                  className={`position_${item.market_id.replace(
                                    ".",
                                    ""
                                  )}`}
                                  data-id={item.selection_id}
                                  value={Math.round(item.exposure.toFixed(2))}
                                />
                                <span className="text-[12px] font-semibold p-1">
                                  {item.runner_name?.length > 15
                                    ? `${item.runner_name.slice(0, 15)}...`
                                    : item.runner_name}
                                </span>
                                <div className="flex justify-between items-center w-full">
                                  <span
                                    id={`${item.selection_id}_maxprofit_list_loss_runner_prev_${item.market_id}`}
                                    data-value={item.exposure}
                                    className={`win market-exposure text-xs font-bold ${item.exposure >= 0
                                      ? "text-green-700"
                                      : "text-red-700"
                                      } p-1 leading-[0.5]`}
                                  >
                                    {Math.abs(item.exposure.toFixed(2))}
                                  </span>
                                  <span
                                    id={`${item.selection_id}_maxprofit_Mlist_loss_runner_next_${item.market_id}`}
                                    className={`to-win market-exposure text-xs font-bold p-1`}
                                  ></span>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <span
                                  className="flex flex-col justify-center items-center w-[80px] text-[1rem] font-bold leading-[1.2] bg-[#a7d8fd] ml-[1px] px-1 border-r border-l border-[#aaa]"
                                  onClick={() => {
                                    if (item.back_1_price > 0) {
                                      setOpenPlaceBet({
                                        selectionId: item.selection_id,
                                        type: "back",
                                        odds: item.back_1_price,
                                      });
                                      handleOpenBetSlip(
                                        event_id,
                                        item.market_id,
                                        true,
                                        `tossBack_Size${item.selection_id}`,
                                        false,
                                        item.selection_id,
                                        item.runner_name,
                                        `tossBack_Price${item.selection_id}`,
                                        false,
                                        "Toss"
                                      );
                                    }
                                  }}
                                >
                                  <span id={`tossBack_Price${item.selection_id}`}>
                                    {item.back_1_price}
                                  </span>
                                  <span
                                    id={`tossBack_Size${item.selection_id}`}
                                    className="text-[12px] font-normal"
                                  >
                                    {item.back_1_size}
                                  </span>
                                </span>
                                <span
                                  className="flex flex-col justify-center items-center w-[80px] text-[1rem] font-bold leading-[1.2] bg-[#ffd5da] px-1 border-r border-[#aaa]"
                                  onClick={() => {
                                    if (item.lay_1_price > 0) {
                                      setOpenPlaceBet({
                                        selectionId: item.selection_id,
                                        type: "lay",
                                        odds: item.lay_1_price,
                                      });
                                      handleOpenBetSlip(
                                        event_id,
                                        item.market_id,
                                        false,
                                        `tossLay_Size${item.selection_id}`,
                                        false,
                                        item.selection_id,
                                        item.runner_name,
                                        `tossLay_Price${item.selection_id}`,
                                        false,
                                        "Toss"
                                      );
                                    }
                                  }}
                                >
                                  <span id={`tossLay_Price${item.selection_id}`}>
                                    {item.lay_1_price}
                                  </span>
                                  <span
                                    id={`tossLay_Size${item.selection_id}`}
                                    className="text-[12px] font-normal"
                                  >
                                    {item.lay_1_size}
                                  </span>
                                </span>
                              </div>
                            </div>
                            {/* Place Bet Section */}
                            {openPlaceBet?.selectionId == item.selection_id && (
                              <div
                                className={`${openPlaceBet?.type == "back"
                                  ? "bg-[#a7d8fd]"
                                  : "bg-[#ffd5da]"
                                  } p-1 relative block lg:hidden`}
                              >
                                <div
                                  className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${!isLoading ? "hidden" : ""
                                    }`}
                                  style={{
                                    backgroundColor: "#ffffff2b",
                                    // opacity: "0.5",
                                    // marginTop: "",
                                  }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 fa-spin">
                                    <path fill="black" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                                  </svg>
                                </div>
                                <div className="flex justify-between items-center w-full px-2 my-1">
                                  <div className="flex justify-center items-center">
                                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                      -
                                    </span>
                                    <input
                                      type="text"
                                      value={openPlaceBet?.odds}
                                      readOnly
                                      className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                                    />

                                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                      +
                                    </span>
                                  </div>
                                  <input
                                    type="number"
                                    className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                                    value={StakeValue}
                                    onChange={(e) => placeStakeValue(Number(e.target.value))}
                                  />
                                </div>
                                <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                                  {chips?.map((chip, i) => (
                                    <button
                                      key={chip.id}
                                      className="p-[2px] bg-white font-medium text-[14px] text-center"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        placeStakeValue(Number(StakeValue) + chip.chip_value);
                                      }}
                                    >
                                      <span className="text-lg font-black text-[#009905]">
                                        +
                                      </span>{" "}
                                      {chip.chip_value}
                                    </button>
                                  ))}
                                </div>
                                <div className="flex gap-[2px] w-full">
                                  {/* <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                                MIN STAKE
                              </button>
                              <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[var(--secondary-color)] text-center">
                                MAX STAKE
                              </button> */}
                                  <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => setStakeValue(currentBalance)}>
                                    All IN
                                  </button>
                                  <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => navigate('/settings')}>
                                    EDIT STAKE
                                  </button>
                                  <button
                                    className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full"
                                    onClick={() => setStakeValue(0)}
                                  >
                                    CLEAR
                                  </button>
                                </div>

                                <div className="flex justify-between items-center my-1">
                                  <button
                                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#fa6a6a] p-2"
                                    onClick={() => closePlaceBet()}
                                  >
                                    CANCEL
                                  </button>
                                  <button
                                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#00a105] p-2"
                                    onClick={() => betPlace()}
                                  >
                                    PLACE BET
                                  </button>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                    </div>
                  </div>
                )}
                {/* Tied_Match */}
                {tiedMatch != "" && (
                  <div>
                    <div className="flex justify-start items-center p-1 bg-[var(--theme2-bg85)]">
                      <span className="text-sm text-[var(--secondary-color)] mr-2">
                        TIED_MATCH
                      </span>
                      <span className="bg-[#fab418] text-[10px] font-extrabold uppercase p-1 rounded ml-3">
                        Cashout
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-between border border-[#aaa]">
                        <span className="text-xs font-semibold py-[2px] pl-1">
                          Min : 100 Max : 100000
                        </span>
                        <div className="flex justify-center">
                          <span className="flex justify-center items-center px-2 w-[79.5px] text-xs font-semibold bg-[#a7d8fd] border-r border-l border-[#aaa]">
                            Back
                          </span>
                          <span className="flex justify-center items-center px-2 w-[79.5px] text-xs font-semibold bg-[#ffd5da] border-r border-[#aaa]">
                            Lay
                          </span>
                        </div>
                      </div>
                      {/* Runner 1 */}
                      {tiedMatch?.marketRunners?.length > 0 &&
                        tiedMatch?.marketRunners?.map((item, index) => (
                          <>
                            <div
                              className="flex justify-between border-b border-[#aaa]"
                              key={index}
                            >
                              <div
                                className={`flex flex-col justify-between items-start w-full`}
                                data-id={item.selection_id}
                              >
                                <input
                                  type="hidden"
                                  id="matchodds_id_preserve"
                                  value={item.market_id}
                                />
                                <input
                                  type="hidden"
                                  className={`position_${item.market_id.replace(
                                    ".",
                                    ""
                                  )}`}
                                  data-id={item.selection_id}
                                  value={Math.round(item.exposure.toFixed(2))}
                                />
                                <span className="text-[12px] font-semibold p-1">
                                  {item.runner_name?.length > 15
                                    ? `${item.runner_name.slice(0, 15)}...`
                                    : item.runner_name}
                                </span>
                                <div className="flex justify-between items-center w-full">
                                  <span
                                    id={`${item.selection_id}_maxprofit_list_loss_runner_prev_${item.market_id}`}
                                    data-value={item.exposure}
                                    className={`win market-exposure text-xs font-bold ${item.exposure >= 0
                                      ? "text-green-700"
                                      : "text-red-700"
                                      } p-1 leading-[0.5]`}
                                  >
                                    {Math.abs(item.exposure.toFixed(2))}
                                  </span>
                                  <span
                                    id={`${item.selection_id}_maxprofit_Mlist_loss_runner_next_${item.market_id}`}
                                    className={`to-win market-exposure text-xs font-bold p-1`}
                                  ></span>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <span
                                  className="flex flex-col justify-center items-center w-[80px] text-[1rem] font-bold leading-[1.2] bg-[#a7d8fd] ml-[1px] px-1 border-r border-l border-[#aaa]"
                                  onClick={() => {
                                    if (item.back_1_price > 0) {
                                      handleOpenBetSlip(
                                        event_id,
                                        item.market_id,
                                        true,
                                        `tiedBack_Size${item.selection_id}`,
                                        false,
                                        item.selection_id,
                                        item.runner_name,
                                        `tiedBack_Price${item.selection_id}`,
                                        false,
                                        "TIED_MATCH"
                                      );
                                      setOpenPlaceBet({
                                        selectionId: item.selection_id,
                                        type: "back",
                                        odds: item.back_1_price,
                                      });
                                    }
                                  }}
                                >
                                  <span id={`tiedBack_Price${item.selection_id}`}>
                                    {item.back_1_price}
                                  </span>
                                  <span
                                    id={`tiedBack_Size${item.selection_id}`}
                                    className="text-[12px] font-normal"
                                  >
                                    {item.back_1_size}
                                  </span>
                                </span>
                                <span
                                  className="flex flex-col justify-center items-center w-[80px] text-[1rem] font-bold leading-[1.2] bg-[#ffd5da] px-1 border-r border-[#aaa]"
                                  onClick={() => {
                                    if (item.lay_1_price > 0) {
                                      handleOpenBetSlip(
                                        event_id,
                                        item.market_id,
                                        false,
                                        `tiedLay_Size${item.selection_id}`,
                                        false,
                                        item.selection_id,
                                        item.runner_name,
                                        `tiedLay_Price${item.selection_id}`,
                                        false,
                                        "TIED_MATCH"
                                      );
                                      setOpenPlaceBet({
                                        selectionId: item.selection_id,
                                        type: "lay",
                                        odds: item.lay_1_price,
                                      });
                                    }
                                  }}
                                >
                                  <span id={`tiedLay_Price${item.selection_id}`}>
                                    {item.lay_1_price}
                                  </span>
                                  <span
                                    id={`tiedLay_Size${item.selection_id}`}
                                    className="text-[12px] font-normal"
                                  >
                                    {item.lay_1_size}
                                  </span>
                                </span>
                              </div>
                            </div>
                            {/* Place Bet Section */}
                            {openPlaceBet?.selectionId == item.selection_id && (
                              <div
                                className={`${openPlaceBet?.type == "back"
                                  ? "bg-[#a7d8fd]"
                                  : "bg-[#ffd5da]"
                                  } p-1 relative block lg:hidden`}
                              >
                                <div
                                  className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${!isLoading ? "hidden" : ""
                                    }`}
                                  style={{
                                    backgroundColor: "#ffffff2b",
                                    // opacity: "0.5",
                                    // marginTop: "",
                                  }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 fa-spin">
                                    <path fill="black" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                                  </svg>
                                </div>
                                <div className="flex justify-between items-center w-full px-2 my-1">
                                  <div className="flex justify-center items-center">
                                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                      -
                                    </span>
                                    <input
                                      type="text"
                                      value={openPlaceBet?.odds}
                                      readOnly
                                      className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                                    />

                                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                      +
                                    </span>
                                  </div>
                                  <input
                                    type="number"
                                    className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                                    value={StakeValue}
                                    onChange={(e) => placeStakeValue(Number(e.target.value))}
                                  />
                                </div>
                                <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                                  {chips?.map((chip, i) => (
                                    <button
                                      key={chip.id}
                                      className="p-[2px] bg-white font-medium text-[14px] text-center"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        placeStakeValue(Number(StakeValue) + chip.chip_value);
                                      }}
                                    >
                                      <span className="text-lg font-black text-[#009905]">
                                        +
                                      </span>{" "}
                                      {chip.chip_value}
                                    </button>
                                  ))}
                                </div>
                                <div className="flex gap-[2px] w-full">
                                  {/* <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                                MIN STAKE
                              </button>
                              <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[var(--secondary-color)] text-center">
                                MAX STAKE
                              </button> */}
                                  <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => setStakeValue(currentBalance)}>
                                    All IN
                                  </button>
                                  <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => navigate('/settings')}>
                                    EDIT STAKE
                                  </button>
                                  <button
                                    className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full"
                                    onClick={() => setStakeValue(0)}
                                  >
                                    CLEAR
                                  </button>
                                </div>

                                <div className="flex justify-between items-center my-1">
                                  <button
                                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#fa6a6a] p-2"
                                    onClick={() => closePlaceBet()}
                                  >
                                    CANCEL
                                  </button>
                                  <button
                                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#00a105] p-2"
                                    onClick={() => betPlace()}
                                  >
                                    PLACE BET
                                  </button>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Fancy Section */}
              {fancyData?.length > 0 && (
                <>
                  <div className="flex justify-between items-center bg-[var(--theme1-bg)] my-2">
                    <span className=" text-center text-xs font-semibold w-full bg-[linear-gradient(180deg,_#ffcc2e,_#ffbd14)] rounded-r p-2 uppercase">
                      Fancy
                    </span>
                    <span className="text-[var(--secondary-color)] font-bold text-center text-xs uppercase w-full relative">
                      Premium{" "}
                      <span className="text-[10px] font-bold text-center bg-[var(--theme2-bg85)] rounded-sm ml-1 px-1 py-[1px] absolute bottom-[4px] blink">
                        NEW
                      </span>
                    </span>
                  </div>
                  <div className="flex overflow-x-auto scroll-hide whitespace-nowrap text-xs font-semibold text-[var(--secondary-color)] bg-[var(--theme1-bg)]">
                    <span className="border-r border-white px-4 py-2 text-center text-[#000] bg-[linear-gradient(180deg,_#ffcc2e,_#ffbd14)]">
                      ALL
                    </span>
                    <span className="border-r border-white px-4 py-2 text-center">
                      SESSIONS
                    </span>
                    <span className="border-r border-white px-4 py-2 text-center">
                      W/P MARKET
                    </span>
                    <span className="border-r border-white px-4 py-2 text-center">
                      ODD/EVEN
                    </span>
                    <span className="border-r border-white px-4 py-2 text-center">
                      XTRA MARKET
                    </span>
                  </div>
                  {/* Fancy */}
                  <div className="mt-[2px]">
                    <div className="flex w-full text-sm border border-[#aaa]">
                      <div className="flex justify-between item-center w-[60%] bg-[var(--theme2-bg85)]">
                        <span className="text-[var(--secondary-color)] pt-[2px] pl-2">
                          SESSIONS
                        </span>
                      </div>
                      <div className="flex justify-center w-[40%]">
                        <span className="flex justify-center items-center px-2 w-full text-xs font-semibold bg-[#ffd5da] border-r border-l border-[#aaa]">
                          No
                        </span>
                        <span className="flex justify-center items-center px-2 w-full text-xs font-semibold bg-[#a7d8fd] border-r border-[#aaa]">
                          Yes
                        </span>
                      </div>
                    </div>
                    {/* Runner 1 */}
                    {fancyData?.length > 0 &&
                      fancyData?.map((item, index) => (
                        <div key={item.selection_id || index}>
                          <input
                            type="hidden"
                            id="fancy_id_preserve"
                            value={item.market_id}
                          />
                          <div
                            className="flex justify-between bg-[#f2f2f2] border-b border-[#aaa]"
                          >
                            <div className="flex justify-between items-center w-[60%] px-1">
                              <input
                                type="hidden"
                                id="fancy_id_preserve"
                                value={item.market_id}
                              />
                              <div className="flex">
                                <span className="text-xs md:text-sm font-semibold p-1 overflow-hidden text-nowrap text-ellipsis w-[45vw] lg:w-full">
                                  {item.runner_name}
                                </span>
                                <span id="before" className="text-sm font-semibold text-red-700 p-1" onClick={() => getFancyPosition(item.selection_id)} data-value={getFancyExposure(item.selection_id)}>{checkFancyExposureExists(item.selection_id) ? (
                                  <>
                                    {Math.abs(getFancyExposure(item.selection_id))}
                                  </>
                                ) : null}</span>
                              </div>
                              <span id={`${index}_${item.selection_id}`} className="relative" onClick={() => {
                                if (openFancyMinMaxStack == `${item.market_id}_${item.selection_id}`) { setOpenFancyMinMaxStack("") } else {
                                  setOpenFancyMinMaxStack(`${item.market_id}_${item.selection_id}`)
                                }
                              }}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={14}
                                  fill="var(--theme2-bg85)"
                                  className="bi bi-info-circle-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                                </svg>
                                {openFancyMinMaxStack == `${item.market_id}_${item.selection_id}` &&
                                  <div className="absolute right-[1px] top-[18px] z-10 text-xs bg-[#fff] py-2 px-4 rounded-sm" style={{ boxShadow: "0 0 5px #999" }}>

                                    {
                                      generalSetting.length > 0 ?
                                        generalSetting?.map(gen => {
                                          if (gen.event_name == "fancy") {
                                            return (
                                              <>
                                                <span className="font-bold">Min:</span>{gen.min_stake}<span className="font-bold">Max:</span>{gen.max_stake}
                                              </>)
                                          }
                                        })
                                        :
                                        <>
                                          <span className="font-bold">Min:</span>100<span className="font-bold">Max:</span>10k
                                        </>
                                    }
                                  </div>
                                }
                              </span>
                            </div>
                            <div className="relative flex justify-center w-[40%]">
                              {/* LAY Box */}
                              <span
                                className="flex flex-col justify-center items-center w-full text-[1rem] font-bold leading-[1.2] bg-[#ffd5da] px-1  border-l border-[#aaa]"
                                onClick={() => {
                                  if (item.lay_price1) {
                                    handleOpenBetSlip(
                                      item.match_id,
                                      "",
                                      false,
                                      `fancyLay_Size${item.selection_id}`,
                                      true,
                                      item.selection_id,
                                      item.runner_name,
                                      `fancyLay_Price${item.selection_id}`,
                                      false,
                                      ""
                                    );
                                    setOpenPlaceBet({
                                      selectionId: item.selection_id,
                                      type: "lay",
                                      odds: item.lay_price1,
                                    });
                                  }
                                }
                                }
                              >
                                <span id={`fancyLay_Price${item.selection_id}`}>
                                  {item.lay_price1}
                                </span>
                                <span
                                  id={`fancyLay_Size${item.selection_id}`}
                                  className="text-[12px] font-normal"
                                >
                                  {item.lay_size1}
                                </span>
                              </span>

                              {/* BACK Box */}
                              <span
                                className="flex flex-col justify-center items-center w-full text-[1rem] font-bold leading-[1.2] bg-[#a7d8fd] px-1 border-r border-[#aaa] py-1"
                                onClick={() => {
                                  if (item.back_price1) {
                                    handleOpenBetSlip(
                                      item.match_id,
                                      "",
                                      true,
                                      `fancyBack_Size${item.selection_id}`,
                                      true,
                                      item.selection_id,
                                      item.runner_name,
                                      `fancyBack_Price${item.selection_id}`,
                                      false,
                                      ""
                                    );
                                    setOpenPlaceBet({
                                      selectionId: item.selection_id,
                                      type: "back",
                                      odds: item.back_price1,
                                    });
                                  }
                                }}
                              >
                                <span id={`fancyBack_Price${item.selection_id}`}>
                                  {item.back_price1}
                                </span>
                                <span
                                  id={`fancyBack_Size${item.selection_id}`}
                                  className="text-[12px] font-normal"
                                >
                                  {item.back_size1}
                                </span>
                              </span>

                              {/* Suspended Overlay */}
                              {/* {(item.game_status != "") && (
                            <span
                              id={`fancySuspend_${item.selection_id}`}
                              className="absolute inset-0 flex justify-center items-center bg-[var(--theme1-bg)] bg-opacity-60 text-red-700 text-sm font-semibold uppercase z-10"
                            >
                              {item.game_status === "SUSPENDED" ? "Suspended" : "Ball Running"}
                            </span>
                          )} */}
                            </div>
                          </div>
                          {/* Place Bet Section */}
                          {openPlaceBet?.selectionId == item.selection_id && (
                            <div
                              className={`${openPlaceBet?.type == "back"
                                  ? "bg-[#a7d8fd]"
                                  : "bg-[#ffd5da]"
                                  } p-1 relative block lg:hidden`}
                            >
                              <div
                                className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${!isLoading ? "hidden" : ""
                                  }`}
                                style={{
                                  backgroundColor: "#ffffff2b",
                                  // opacity: "0.5",
                                  // marginTop: "",
                                }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 fa-spin">
                                  <path fill="black" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                                </svg>
                              </div>
                              <div className="flex justify-between items-center w-full px-2 my-1">
                                <div className="flex justify-center items-center">
                                  <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                    -
                                  </span>
                                  <input
                                    type="text"
                                    value={openPlaceBet?.odds}
                                    readOnly
                                    className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                                  />

                                  <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                                    +
                                  </span>
                                </div>
                                <input
                                  type="number"
                                  className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                                  value={StakeValue}
                                  onChange={(e) => placeStakeValue(Number(e.target.value))}
                                />
                              </div>
                              <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                                {chips?.map((chip, i) => (
                                  <button
                                    key={chip.id}
                                    className="p-[2px] bg-white font-medium text-[14px] text-center"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      placeStakeValue(Number(StakeValue) + chip.chip_value);
                                    }}
                                  >
                                    <span className="text-lg font-black text-[#009905]">
                                      +
                                    </span>{" "}
                                    {chip.chip_value}
                                  </button>
                                ))}
                              </div>
                              <div className="flex gap-[2px] w-full">
                                {/* <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                                MIN STAKE
                              </button>
                              <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[var(--secondary-color)] text-center">
                                MAX STAKE
                              </button> */}
                                <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => setStakeValue(currentBalance)}>
                                  All IN
                                </button>
                                <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => navigate('/settings')}>
                                  EDIT STAKE
                                </button>
                                <button
                                  className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full"
                                  onClick={() => setStakeValue(0)}
                                >
                                  CLEAR
                                </button>
                              </div>

                              <div className="flex justify-between items-center my-1">
                                <button
                                  className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#fa6a6a] p-2"
                                  onClick={() => closePlaceBet()}
                                >
                                  CANCEL
                                </button>
                                <button
                                  className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#00a105] p-2"
                                  onClick={() => betPlace()}
                                >
                                  PLACE BET
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </>
              )}
            </>
          }
          {selectedSection == "bets" &&
            <>
              <div className="flex flex-col text-sm w-full">
                {/* Header */}
                <div className="flex w-full font-bold border-b border-gray-300 py-1 px-1">
                  <div className="flex justify-between items-center w-[70%]">Nation</div>
                  <div className="flex justify-between items-center w-[30%]">
                    <div className="w-full text-center">Odds</div>
                    <div className="w-full text-center">Stake</div>
                  </div>
                </div>

                {/* Data Rows */}
                {betsData?.map((item, index) => (
                  <div key={index} className={`flex w-full py-1 border-b border-gray-200 px-1 ${item.is_back ? "bg-[#a7d8fd]" : "bg-[#ffd5da]"}`}>
                    <div className="flex justify-between items-center w-[70%]">{item.runner_name}</div>
                    <div className="flex justify-between items-center w-[30%]">
                      <div className="w-full text-center">{item.price_val}</div>
                      <div className="w-full text-center">{item.stake}</div>
                    </div>
                  </div>
                ))}
              </div>

            </>}
        </div>
        {/* Right Section */}
        <div className="hidden lg:block w-[30%]">
          {/* Live Match desktop panel */}
          <div>
            <div className="flex justify-between items-center bg-[var(--theme2-bg)] py-1 px-5 text-[var(--secondary-color)] rounded-t">
              <span>Live Match</span>
              <span className="flex justify-center item-center gap-1 cursor-pointer" onClick={() => setIsDesktopTvOpen(prev => !prev)}>
                <DesktopOutlined />
                <span>
                  live stream started
                </span>
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isDesktopTvOpen
                ? "max-h-[300px] opacity-100 translate-y-0 p-1"
                : "max-h-0 opacity-0 -translate-y-2"
                } flex justify-center items-center w-full bg-black`}
            >
              {isDesktopTvOpen &&
                <iframe
                  src={tvUrl}
                  className="w-full h-[250px] border-0"
                  allowFullScreen
                ></iframe>
              }
            </div>
          </div>

          {/* Place bet panel */}
          <div className='mt-2'>
            <div className="flex justify-between items-center bg-[var(--theme2-bg)] py-1 px-5 text-[var(--secondary-color)] rounded">
              <span>Place Bet</span>
            </div>
            {openPlaceBet?.selectionId && (
              <div
                className={`${openPlaceBet?.type == "back"
                  ? "bg-[#a7d8fd]"
                  : "bg-[#ffd5da]"
                  } p-1 relative`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${!isLoading ? "hidden" : ""
                    }`}
                  style={{
                    backgroundColor: "#ffffff2b",
                    // opacity: "0.5",
                    // marginTop: "",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 fa-spin">
                    <path fill="black" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                  </svg>
                </div>
                <div className="flex justify-between items-center w-full px-2 my-1">
                  <div className="flex justify-center items-center">
                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                      -
                    </span>
                    <input
                      type="text"
                      value={openPlaceBet?.odds}
                      readOnly
                      className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                    />

                    <span className="flex justify-center items-center h-[32px] text-[var(--secondary-color)] font-black text-[20px] bg-[#334579] p-2">
                      +
                    </span>
                  </div>
                  <input
                    type="number"
                    className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                    value={StakeValue}
                    onChange={(e) => placeStakeValue(Number(e.target.value))}
                  />
                </div>
                <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                  {chips?.map((chip, i) => (
                    <button
                      key={chip.id}
                      className="p-[2px] bg-white font-medium text-[14px] text-center"
                      onClick={(e) => {
                        e.preventDefault();
                        placeStakeValue(Number(StakeValue) + chip.chip_value);
                      }}
                    >
                      <span className="text-lg font-black text-[#009905]">
                        +
                      </span>{" "}
                      {chip.chip_value}
                    </button>
                  ))}
                </div>
                <div className="flex gap-[2px] w-full">
                  {/* <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                                MIN STAKE
                              </button>
                              <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[var(--secondary-color)] text-center">
                                MAX STAKE
                              </button> */}
                  <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => setStakeValue(currentBalance)}>
                    All IN
                  </button>
                  <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full" onClick={() => navigate('/settings')}>
                    EDIT STAKE
                  </button>
                  <button
                    className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[var(--secondary-color)] text-center w-full"
                    onClick={() => setStakeValue(0)}
                  >
                    CLEAR
                  </button>
                </div>

                <div className="flex justify-between items-center my-1">
                  <button
                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#fa6a6a] p-2"
                    onClick={() => closePlaceBet()}
                  >
                    CANCEL
                  </button>
                  <button
                    className="w-full text-[var(--secondary-color)] font-bold text-[14px] bg-[#00a105] p-2"
                    onClick={() => betPlace()}
                  >
                    PLACE BET
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* My Bet panel */}
          <div className='mt-2'>
            <div className="flex justify-between items-center bg-[var(--theme2-bg)] py-1 px-5 text-[var(--secondary-color)] rounded-t">
              <span>My Bet</span>
            </div>
            <table className="w-full border border-[#ccc] text-sm text-[#303030]">
              <thead>
                <tr className="bg-[#ccc] font-bold border-b-[2px] border-[#dee2e6]">
                  <th className="text-left py-1 px-2 w-[60%]">Nation</th>
                  <th className="text-center py-1 px-2 w-[20%]">Odds</th>
                  <th className="text-center py-1 px-2 w-[20%]">Stake</th>
                </tr>
              </thead>
              <tbody>
                {betsData?.length == 0 &&
                  <tr className="text-center">
                    <td colSpan={3} className="py-2">No records Found</td>
                  </tr>
                }
                {betsData && betsData?.map((item, index) => (
                  <tr key={item.id} className={`${item.is_back ? "bg-[#a7d8fd]" : "bg-[#ffd5da]"} border-b border-[#ccc]`}>
                    <td className="text-left px-2 w-[60%]">{item.place_name}</td>
                    <td className="text-center px-2 w-[20%]">{item.price_val}</td>
                    <td className="text-center px-2 w-[20%]">{item.stake}</td>
                  </tr>
                ))
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>

    </>
  );
}

export default EventDetails;
