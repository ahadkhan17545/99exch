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
import axios from "axios";
import Appconfig from "../config/config";
import { setData } from "../redux/slice/betting/bettingSlice";
import { toast } from "react-toastify";

function EventDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.eventData);
  const userFancyData = useSelector((state) => state.fancyData);
  const userbalance = useSelector((state) => state.userbal);
  const balance = userbalance?.userBalance?.balance;
  const userInfo = Helper(); // get login user details
  const { setShowLoginModel, setBetPlaced, setBetPlacedLoader } = useAuth();
  const websocket = useContext(WebSocketContext);
  const { event_id } = useParams();

  const [isReady, setIsReady] = useState(false);
  const [marketTypes, setMarketTypes] = useState([]);
  const [blockMatchOdds, setBlockMatchOdds] = useState({});
  const [blockBookmaker, setBlockBookmaker] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
  const [matchOddsBhaw, setMatchOddsBhaw] = useState("");
  const [bookmakerBhaw, setBookmakerBhaw] = useState("");
  const [isEventLoading, setIsEventLoading] = useState(true);
  const [tvUrl, setTvUrl] = useState();
  const [isInplay, setIsInplay] = useState(false);
  const [isTvOpen, setIsTvOpen] = useState(false);
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

  function calc(t_stake, priceVal, selection_id) {
    var isfancy = BetPlaceData.is_fancy;
    priceVal = parseFloat(priceVal);
    t_stake = parseFloat(t_stake);
    var isback = BetPlaceData.is_back;
    if (!isfancy) {
      var pl = priceVal * t_stake - t_stake;

      pl = parseFloat(pl.toFixed(2));
      if (isback) {
        setProfitValue(pl);
        setLossValue(t_stake);
      } else {
        setLossValue(pl);
        setProfitValue(t_stake);
      }
      // SetPosition(priceVal);
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
      }

      pl = parseFloat(t_stake);

      if (inputno == inputyes) {
        if (isback) {
          setLossValue(pl.toFixed(2));
          setProfitValue(((YesValume * pl) / 100).toFixed(2));
        } else {
          setLossValue(((NoValume * pl) / 100).toFixed(2));
          setProfitValue(pl.toFixed(2));
        }
      } else {
        setLossValue(pl.toFixed(2));
        setProfitValue(pl.toFixed(2));
      }
    }
  }

  function SetPosition(stake, priceVal, market_id, is_back, selection_id) {
    priceVal = parseFloat(priceVal);
    var MarketId = market_id;
    var MId = MarketId.replace(".", "");
    var selectionId = selection_id;
    var isback = is_back;
    stake = parseFloat(stake);
    let MatchMarketTypes = "";
    var runners = document.getElementsByClassName("position_" + MId);
    var tempRunners = "";
    console.log("setPosition funtion data : ", {
      MarketId: MarketId,
      MId: MId,
      selectionId: selectionId,
      isback: isback,
      stake: stake,
      MatchMarketTypes: MatchMarketTypes,
      runners: runners,
      tempRunners: tempRunners,
    });
    for (var item of runners) {
      var selecid = item.getAttribute("data-id");
      var winloss = parseFloat(item.value);
      console.log("selecid : ", selecid);
      console.log("winloss : ", winloss);
      console.log("runner item : ", item);
      var curr = 0;
      if (selectionId == selecid) {
        if (isback) {
          if (MatchMarketTypes == "M") {
            curr = winloss + (priceVal * stake) / 100;
          } else {
            curr = winloss + (priceVal * stake - stake);
          }
        } else {
          if (MatchMarketTypes == "M") {
            curr = winloss + -1 * parseFloat((priceVal * stake) / 100);
          } else {
            curr = winloss + -1 * parseFloat(priceVal * stake - stake);
          }
        }
      } else {
        if (isback == 1) {
          curr = winloss + -1 * stake;
        } else {
          curr = winloss + stake;
        }
      }
      var currV = curr;
      if (
        document.getElementById(selecid + "_maxprofit_loss_runner_prev_" + MId)
      ) {
        document
          .getElementById(selecid + "_maxprofit_loss_runner_prev_" + MId)
          .setAttribute("data-value", winloss.toFixed(2));
        document.getElementById(
          selecid + "_maxprofit_loss_runner_prev_" + MId
        ).innerHTML = Math.abs(winloss.toFixed(2));
      }
      if (
        document.getElementById(
          selecid + "_maxprofit_list_loss_runner_next_" + MId
        )
      ) {
        document
          .getElementById(selecid + "_maxprofit_list_loss_runner_next_" + MId)
          .setAttribute("data-value", currV.toFixed(2));
        document.getElementById(
          selecid + "_maxprofit_list_loss_runner_next_" + MId
        ).innerHTML = Math.abs(currV.toFixed(2));
      }
      if (
        document.getElementById(
          selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
        )
      ) {
        document
          .getElementById(selecid + "_maxprofit_Mlist_loss_runner_next_" + MId)
          .setAttribute("data-value", currV.toFixed(2));
        document.getElementById(
          selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
        ).innerHTML = Math.abs(currV.toFixed(2));
      }
    }
  }

  const placeStakeValue = (stake) => {
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
    market_name
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
        market_name == "TIED_MATCH"
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
      if (userInfo.user_type == "User") {
        setBetPlacedLoader(true);
        // if (balance > (BetPlaceData.is_fancy ? StakeValue : lossValue)) {
        // console.log({
        //     'balance': balance,
        //     'StakeValue': StakeValue,
        //     'lossValue': lossValue,
        //     'is_fancy' : BetPlaceData.is_fancy
        // });

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

        console.log("bet send data : ", data);

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
                console.log("response bet send Error :", response);
                toast.error(response.data.resultMessage);
                setBetPlacedLoader(false);
              } else {
                console.log("response bet send Success :", response);

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

              console.log(
                "in side bet place : MId : ",
                MId,
                " runners : ",
                runners
              );
              for (var item of runners) {
                var selecid = item.getAttribute("data-id");
                console.log(" selecid : ", selecid);
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
      navigate("/login");
    }
  }

  const closePlaceBet = () => {
    var MId = BetPlaceData.market_id.replace(".", "");
    var selectionId = BetPlaceData.selection_id;
    var runners = document.getElementsByClassName("position_" + MId);

    console.log("in side bet place : MId : ", MId, " runners : ", runners);
    for (var item of runners) {
      var selecid = item.getAttribute("data-id");
      console.log(" selecid : ", selecid);
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
  };

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
      navigate("/login");
    }
  }

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
          // console.log('response.data', response.data)
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
      navigate("/login");
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
            if (response.status) {
              setChips(response.data);
            }
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
          // console.log("MARKET SOCKET RESPONDING");
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
          console.log("FANCY SOCKET RESPONDING : ", market);
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
          console.log("Bookmaker data : ", type);
        }
        if (type.market_name == "Match Odds") {
          setMatchOdds(type);
          console.log("Match odds data : ", type);
        }
        if (type.market_name == "TIED_MATCH") {
          setTiedMatch(type);
          console.log("TIED_MATCH data : ", type);
        }
        if (type.market_name == "Toss") {
          setToss(type);
          console.log("Toss data : ", type);
        }
      });
      setIsEventLoading(false);
    }
  }, [userInfos.eventData[event_id]]);

  // Render Fancy Data
  useEffect(() => {
    console.log(
      "userFancyData.fancyData[event_id] : ",
      userFancyData.fancyData[event_id]
    );
    if (userFancyData.fancyData[event_id]?.length > 0) {
      setFancyData(userFancyData.fancyData[event_id]);
    }
  }, [userFancyData.fancyData[event_id], event_id]);

  return (
    <>
      <div>
        <div className="flex justify-between items-center font-bold bg-[#000] text-[#fff] text-xs p-2">
          <span className="px-2 border-r border-white">ODDS</span>
          <span className="px-2 border-r border-white">MATCHES BET (0)</span>
          <div className="flex justify-end item-center w-[50%]">
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
        <div className="flex justify-between items-center text-[#fff] bg-[#8000ff] p-2">
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
          <iframe
            src={tvUrl}
            className="w-full h-[250px] border-0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Iframe */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out  ${isScoreCardOpen
            ? "h-[200px] opacity-100 translate-y-0"
            : "h-0 opacity-0 -translate-y-2"
            } w-full bg-cover bg-center bg-no-repeat p-1`}
          style={{ backgroundImage: "url(/Images/scoreCardBG-mobile.webp)" }}
        ></div>
      </div>

      <div>
        {/* MatchOdds */}
        {matchOdds != "" && (
          <div>
            <div className="flex justify-start items-center p-1 bg-[#9430ff]">
              <span className="text-sm font-bold text-[#fff] mr-2">
                {matchOdds?.market_name || "Match Odds"}
              </span>
              <span className="bg-[#fab418] text-[10px] font-extrabold uppercase p-1 rounded ml-3">
                Cashout
              </span>
            </div>
            <div>
              <div className="flex justify-between border border-[#dcdcdc]">
                <span className="text-xs font-semibold py-1 pl-2">
                  Min : 100 Max : 100000
                </span>
                <div className="flex justify-center">
                  <span className="flex justify-center items-center px-2 w-[80px] text-sm font-semibold bg-[#72bbef] ml-[1px]">
                    Back
                  </span>
                  <span className="flex justify-center items-center px-2 w-[80px] text-sm font-semibold bg-[#ffd5da] ml-[1px]">
                    Lay
                  </span>
                </div>
              </div>
              {/* Runner 1 */}
              {matchOdds?.marketRunners?.length > 0 &&
                matchOdds?.marketRunners?.map((item, index) => (
                  <>
                    <div
                      className="flex justify-between border border-[#aaa]"
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
                            id={`${item.selection_id}_maxprofit_loss_runner_prev_${item.market_id}`}
                            data-value={item.exposure}
                            className={`win market-exposure text-xs font-bold ${item.exposure >= 0
                              ? "text-green-700"
                              : "text-red-700"
                              } p-1`}
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
                          className="flex flex-col justify-center items-center w-[80px] text-[0.9rem] font-bold bg-[#72bbef] ml-[1px] pt-1 px-1"
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
                            className="text-[9px] text-[#43444a] pb-[-1rem]"
                          >
                            {item.back_1_size}
                          </span>
                        </span>
                        <span
                          className="flex flex-col justify-center items-center w-[80px] text-[0.9rem] font-bold bg-[#ffd5da] ml-[1px] pt-1 px-1"
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
                            className="text-[9px] text-[#43444a] pb-[-1rem]"
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
                          } p-1`}
                      >
                        <div className="flex justify-between items-center w-full px-2 my-1">
                          <div className="flex justify-center items-center">
                            <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                              -
                            </span>
                            <input
                              type="text"
                              value={openPlaceBet?.odds}
                              readOnly
                              className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                            />

                            <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                              +
                            </span>
                          </div>
                          <input
                            type="number"
                            className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                            value={StakeValue}
                          // onChange={(e) => setStakeValue(e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 100);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            100
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 200);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            200
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 500);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            500
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 2000);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            2000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            1000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            10000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            25000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            200000
                          </button>
                          <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                            MIN STAKE
                          </button>
                          <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[#fff] text-center">
                            MAX STAKE
                          </button>
                          <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[#fff] text-center">
                            EDIT STAKE
                          </button>
                          <button
                            className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[#fff] text-center"
                            onClick={() => setStakeValue(0)}
                          >
                            CLEAR
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <button
                            className="w-full text-[#fff] font-bold text-[14px] bg-[#fa6a6a] p-2"
                            onClick={() => closePlaceBet()}
                          >
                            CANCEL
                          </button>
                          <button
                            className="w-full text-[#fff] font-bold text-[14px] bg-[#00a105] p-2"
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
            <div className="flex justify-start items-center p-1 bg-[#9430ff]">
              <span className="text-sm font-bold text-[#fff] mr-2">
                Bookmaker
              </span>
              <span className="bg-[#fab418] text-[10px] font-extrabold uppercase p-1 rounded ml-3">
                Cashout
              </span>
            </div>
            <div>
              <div className="flex justify-between border border-[#dcdcdc]">
                <span className="text-xs font-semibold py-1 pl-2">
                  Min : 100 Max : 100000
                </span>
                <div className="flex justify-center">
                  <span className="flex justify-center items-center px-2 w-[80px] text-sm font-semibold bg-[#72bbef] ml-[1px]">
                    Back
                  </span>
                  <span className="flex justify-center items-center px-2 w-[80px] text-sm font-semibold bg-[#ffd5da] ml-[1px]">
                    Lay
                  </span>
                </div>
              </div>
              {/* Runner 1 */}
              {bookmaker?.marketRunners?.length > 0 &&
                bookmaker?.marketRunners?.map((item, index) => (
                  <>
                    <div
                      className="flex justify-between border border-[#aaa]"
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
                              } p-1`}
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
                          className="flex flex-col justify-center items-center w-[80px] text-[0.9rem] font-bold bg-[#72bbef] ml-[1px] pt-1 px-1"
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
                            className="text-[9px] text-[#43444a] pb-[-1rem]"
                          >
                            {item.back_1_size}
                          </span>
                        </span>
                        <span
                          className="flex flex-col justify-center items-center w-[80px] text-[0.9rem] font-bold bg-[#ffd5da] ml-[1px] pt-1 px-1"
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
                            className="text-[9px] text-[#43444a] pb-[-1rem]"
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
                          } p-1`}
                      >
                        <div className="flex justify-between items-center w-full px-2 my-1">
                          <div className="flex justify-center items-center">
                            <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                              -
                            </span>
                            <input
                              type="text"
                              value={openPlaceBet?.odds}
                              readOnly
                              className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                            />

                            <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                              +
                            </span>
                          </div>
                          <input
                            type="number"
                            className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                            value={StakeValue}
                          // onChange={(e) => setStakeValue(e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 100);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            100
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 200);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            200
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 500);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            500
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 2000);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            2000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            1000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            10000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            25000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            200000
                          </button>
                          <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                            MIN STAKE
                          </button>
                          <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[#fff] text-center">
                            MAX STAKE
                          </button>
                          <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[#fff] text-center">
                            EDIT STAKE
                          </button>
                          <button
                            className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[#fff] text-center"
                            onClick={() => setStakeValue(0)}
                          >
                            CLEAR
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <button
                            className="w-full text-[#fff] font-bold text-[14px] bg-[#fa6a6a] p-2"
                            onClick={() => closePlaceBet()}
                          >
                            CANCEL
                          </button>
                          <button
                            className="w-full text-[#fff] font-bold text-[14px] bg-[#00a105] p-2"
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
        {toss != "" && (
          <div>
            <div className="flex justify-start items-center p-1 bg-[#9430ff]">
              <span className="text-sm font-bold text-[#fff] mr-2">Toss</span>
              <span className="bg-[#fab418] text-[10px] font-extrabold uppercase p-1 rounded ml-3">
                {/* Cashout */}
              </span>
            </div>
            <div>
              <div className="flex justify-between border border-[#dcdcdc]">
                <span className="text-xs font-semibold py-1 pl-2">
                  Min : 100 Max : 100000
                </span>
                <div className="flex justify-center">
                  <span className="flex justify-center items-center px-2 w-[80px] text-sm font-semibold bg-[#72bbef] ml-[1px]">
                    Back
                  </span>
                  <span className="flex justify-center items-center px-2 w-[80px] text-sm font-semibold bg-[#ffd5da] ml-[1px]">
                    Lay
                  </span>
                </div>
              </div>
              {/* Runner 1 */}
              {toss?.marketRunners?.length > 0 &&
                toss?.marketRunners?.map((item, index) => (
                  <>
                    <div
                      className="flex justify-between border border-[#aaa]"
                      key={index}
                    >
                      <div
                        className={`flex flex-col justify-between items-start`}
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
                              } p-1`}
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
                          className="flex flex-col justify-center items-center w-[80px] text-[0.9rem] font-bold bg-[#72bbef] ml-[1px] pt-1 px-1"
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
                            className="text-[9px] text-[#43444a] pb-[-1rem]"
                          >
                            {item.back_1_size}
                          </span>
                        </span>
                        <span
                          className="flex flex-col justify-center items-center w-[80px] text-[0.9rem] font-bold bg-[#ffd5da] ml-[1px] pt-1 px-1"
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
                            className="text-[9px] text-[#43444a] pb-[-1rem]"
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
                          } p-1`}
                      >
                        <div className="flex justify-between items-center w-full px-2 my-1">
                          <div className="flex justify-center items-center">
                            <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                              -
                            </span>
                            <input
                              type="text"
                              value={openPlaceBet?.odds}
                              readOnly
                              className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                            />

                            <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                              +
                            </span>
                          </div>
                          <input
                            type="number"
                            className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                            value={StakeValue}
                          // onChange={(e) => setStakeValue(e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 100);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            100
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 200);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            200
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 500);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            500
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 2000);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            2000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            1000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            10000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            25000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            200000
                          </button>
                          <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                            MIN STAKE
                          </button>
                          <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[#fff] text-center">
                            MAX STAKE
                          </button>
                          <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[#fff] text-center">
                            EDIT STAKE
                          </button>
                          <button
                            className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[#fff] text-center"
                            onClick={() => setStakeValue(0)}
                          >
                            CLEAR
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <button
                            className="w-full text-[#fff] font-bold text-[14px] bg-[#fa6a6a] p-2"
                            onClick={() => closePlaceBet()}
                          >
                            CANCEL
                          </button>
                          <button
                            className="w-full text-[#fff] font-bold text-[14px] bg-[#00a105] p-2"
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
            <div className="flex justify-start items-center p-1 bg-[#9430ff]">
              <span className="text-sm font-bold text-[#fff] mr-2">
                TIED_MATCH
              </span>
              <span className="bg-[#fab418] text-[10px] font-extrabold uppercase p-1 rounded ml-3">
                Cashout
              </span>
            </div>
            <div>
              <div className="flex justify-between border border-[#dcdcdc]">
                <span className="text-xs font-semibold py-1 pl-2">
                  Min : 100 Max : 100000
                </span>
                <div className="flex justify-center">
                  <span className="flex justify-center items-center px-2 w-[80px] text-sm font-semibold bg-[#72bbef] ml-[1px]">
                    Back
                  </span>
                  <span className="flex justify-center items-center px-2 w-[80px] text-sm font-semibold bg-[#ffd5da] ml-[1px]">
                    Lay
                  </span>
                </div>
              </div>
              {/* Runner 1 */}
              {tiedMatch?.marketRunners?.length > 0 &&
                tiedMatch?.marketRunners?.map((item, index) => (
                  <>
                    <div
                      className="flex justify-between border border-[#aaa]"
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
                              } p-1`}
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
                          className="flex flex-col justify-center items-center w-[80px] text-[0.9rem] font-bold bg-[#72bbef] ml-[1px] pt-1 px-1"
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
                            className="text-[9px] text-[#43444a] pb-[-1rem]"
                          >
                            {item.back_1_size}
                          </span>
                        </span>
                        <span
                          className="flex flex-col justify-center items-center w-[80px] text-[0.9rem] font-bold bg-[#ffd5da] ml-[1px] pt-1 px-1"
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
                            className="text-[9px] text-[#43444a] pb-[-1rem]"
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
                          } p-1`}
                      >
                        <div className="flex justify-between items-center w-full px-2 my-1">
                          <div className="flex justify-center items-center">
                            <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                              -
                            </span>
                            <input
                              type="text"
                              value={openPlaceBet?.odds}
                              readOnly
                              className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                            />

                            <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                              +
                            </span>
                          </div>
                          <input
                            type="number"
                            className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                            value={StakeValue}
                          // onChange={(e) => setStakeValue(e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 100);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            100
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 200);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            200
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 500);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            500
                          </button>
                          <button
                            className="p-[2px] bg-white font-medium text-[14px] text-center"
                            onClick={(e) => {
                              e.preventDefault();
                              placeStakeValue(Number(StakeValue) + 2000);
                            }}
                          >
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            2000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            1000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            10000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            25000
                          </button>
                          <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                            <span className="text-lg font-black text-[#009905]">
                              +
                            </span>{" "}
                            200000
                          </button>
                          <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                            MIN STAKE
                          </button>
                          <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[#fff] text-center">
                            MAX STAKE
                          </button>
                          <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[#fff] text-center">
                            EDIT STAKE
                          </button>
                          <button
                            className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[#fff] text-center"
                            onClick={() => setStakeValue(0)}
                          >
                            CLEAR
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <button
                            className="w-full text-[#fff] font-bold text-[14px] bg-[#fa6a6a] p-2"
                            onClick={() => closePlaceBet()}
                          >
                            CANCEL
                          </button>
                          <button
                            className="w-full text-[#fff] font-bold text-[14px] bg-[#00a105] p-2"
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
          <div className="flex justify-between items-center bg-[#000] my-2">
            <span className=" text-center text-sm font-semibold w-full bg-[linear-gradient(180deg,_#ffcc2e,_#ffbd14)] rounded-r p-1">
              Fancy
            </span>
            <span className="text-[#fff] font-bold text-center text-sm uppercase w-full">
              Premium{" "}
              <span className="text-[0.6rem] font-bold text-center bg-[#9430ff] rounded-xs ml-1 p-1 blink">
                NEW
              </span>
            </span>
          </div>
          <div className="flex overflow-x-auto scroll-hide whitespace-nowrap text-sm font-semibold text-white bg-black">
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
          <div className="mt-1">
            <div className="flex w-full">
              <div className="flex justify-between text-xs w-[60%]">
                <span className="text-[#fff] text-base py-1 pl-2 bg-[#9430ff] w-full">
                  session
                </span>
              </div>
              <div className="flex justify-center w-[40%]">
                <span className="flex justify-center items-center px-2 w-full font-bold bg-[#ffd5da] ml-[1px]">
                  NO
                </span>
                <span className="flex justify-center items-center px-2 w-full font-bold bg-[#72bbef] ml-[1px]">
                  YES
                </span>
              </div>
            </div>
            {/* Runner 1 */}
            {fancyData?.length > 0 &&
              fancyData?.map((item, index) => (
                <>
                  <div
                    className="flex justify-between border-b border-[#aaa]"
                    // key={index}
                  >
                    <div className="flex justify-between items-center w-[60%] px-2">
                      <input
                        type="hidden"
                        id="fancy_id_preserve"
                        value={item.market_id}
                      />
                      <div className="flex">
                        <span className="text-xs md:text-sm font-semibold p-1 overflow-hidden text-nowrap text-ellipsis w-[45vw] lg:w-full">
                          {item.runner_name}
                        </span>
                        <span id="before" className="text-sm text-red-700 p-1" data-value={getFancyExposure(item.selection_id)}>{checkFancyExposureExists(item.selection_id) ? (
                          <>
                            {Math.abs(getFancyExposure(item.selection_id))}
                          </>
                        ) : null}</span>
                      </div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="#8000FF"
                          className="bi bi-info-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                        </svg>
                      </span>
                    </div>
                    <div className="relative flex justify-center w-[40%]">
                      {/* Left Box */}
                      <span
                        className="flex flex-col justify-center items-center w-full text-[0.9rem] font-bold bg-[#ffd5da] ml-[1px] pt-1 px-1 border border-[#aaa]"
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
                          className="text-[9px] text-[#43444a] pb-[-1rem]"
                        >
                          {item.lay_size1}
                        </span>
                      </span>

                      {/* Right Box */}
                      <span
                        className="flex flex-col justify-center items-center w-full text-[0.9rem] font-bold bg-[#72bbef] ml-[1px] pt-1 px-1 border border-[#aaa]"
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
                          className="text-[9px] text-[#43444a] pb-[-1rem]"
                        >
                          {item.back_size1}
                        </span>
                      </span>

                      {/* Suspended Overlay */}
                      {item.game_status != "" && (
                        <div
                          id={`fancySuspend_${item.selection_id}`}
                          className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-red-700 text-sm font-semibold uppercase z-10"
                        >
                          {item.game_status}{" "}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Place Bet Section */}
                  {openPlaceBet?.selectionId == item.selection_id && (
                    <div
                      className={`${openPlaceBet?.type == "back"
                        ? "bg-[#a7d8fd]"
                        : "bg-[#ffd5da]"
                        } p-1`}
                    >
                      <div className="flex justify-between items-center w-full px-2 my-1">
                        <div className="flex justify-center items-center">
                          <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                            -
                          </span>
                          <input
                            type="text"
                            value={openPlaceBet?.odds}
                            readOnly
                            className="h-[32px] w-[60%] border-none focus:outline-none focus:ring-0 bg-[#e9ecef] text-center font-bold"
                          />

                          <span className="flex justify-center items-center h-[32px] text-[#fff] font-black text-[20px] bg-[#334579] p-2">
                            +
                          </span>
                        </div>
                        <input
                          type="number"
                          className="h-[32px] w-[50%] border-none focus:outline-none focus:ring-0 text-center font-bold"
                          value={StakeValue}
                        // onChange={(e) => setStakeValue(e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-4 gap-[2px] w-full my-1">
                        <button
                          className="p-[2px] bg-white font-medium text-[14px] text-center"
                          onClick={(e) => {
                            e.preventDefault();
                            placeStakeValue(Number(StakeValue) + 100);
                          }}
                        >
                          <span className="text-lg font-black text-[#009905]">
                            +
                          </span>{" "}
                          100
                        </button>
                        <button
                          className="p-[2px] bg-white font-medium text-[14px] text-center"
                          onClick={(e) => {
                            e.preventDefault();
                            placeStakeValue(Number(StakeValue) + 200);
                          }}
                        >
                          <span className="text-lg font-black text-[#009905]">
                            +
                          </span>{" "}
                          200
                        </button>
                        <button
                          className="p-[2px] bg-white font-medium text-[14px] text-center"
                          onClick={(e) => {
                            e.preventDefault();
                            placeStakeValue(Number(StakeValue) + 500);
                          }}
                        >
                          <span className="text-lg font-black text-[#009905]">
                            +
                          </span>{" "}
                          500
                        </button>
                        <button
                          className="p-[2px] bg-white font-medium text-[14px] text-center"
                          onClick={(e) => {
                            e.preventDefault();
                            placeStakeValue(Number(StakeValue) + 2000);
                          }}
                        >
                          <span className="text-lg font-black text-[#009905]">
                            +
                          </span>{" "}
                          2000
                        </button>
                        <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                          <span className="text-lg font-black text-[#009905]">
                            +
                          </span>{" "}
                          1000
                        </button>
                        <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                          <span className="text-lg font-black text-[#009905]">
                            +
                          </span>{" "}
                          10000
                        </button>
                        <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                          <span className="text-lg font-black text-[#009905]">
                            +
                          </span>{" "}
                          25000
                        </button>
                        <button className="p-[2px] bg-white font-medium text-[14px] text-center">
                          <span className="text-lg font-black text-[#009905]">
                            +
                          </span>{" "}
                          200000
                        </button>
                        <button className="p-[6px] bg-[#ffbc00] font-black text-[12px] text-[#000] text-center">
                          MIN STAKE
                        </button>
                        <button className="p-[6px] bg-[#334579] font-black text-[12px] text-[#fff] text-center">
                          MAX STAKE
                        </button>
                        <button className="p-[6px] bg-[#008000] font-black text-[12px] text-[#fff] text-center">
                          EDIT STAKE
                        </button>
                        <button
                          className="p-[6px] bg-[#ff0000] font-black text-[12px] text-[#fff] text-center"
                          onClick={() => setStakeValue(0)}
                        >
                          CLEAR
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <button
                          className="w-full text-[#fff] font-bold text-[14px] bg-[#fa6a6a] p-2"
                          onClick={() => closePlaceBet()}
                        >
                          CANCEL
                        </button>
                        <button
                          className="w-full text-[#fff] font-bold text-[14px] bg-[#00a105] p-2"
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
        </>
      )}

      {/* Bet Section */}
      {/* <div className="flex text-[#fff] bg-[linear-gradient(180deg,_#ffcc2e,_#ffbd14)] mt-1 p-2">
        <span className="bg-[#000] rounded px-2 py-1 mx-1">All Bet (0)</span>
        <span className=" rounded px-2 py-1 mx-1">Fancy Bet (0)</span>
        <span className=" rounded px-2 py-1 mx-1">Unmatch Bet (0)</span>
      </div>
      <div className="overflow-x-auto scroll-hide w-full">
        <table className="min-w-[800px] text-sm text-left">
          <thead className="text-[#8000ff] bg-[#000]">
            <tr>
              <th className="p-2 whitespace-nowrap">No.</th>
              <th className="p-2 whitespace-nowrap">Runner</th>
              <th className="p-2 whitespace-nowrap">Bhaw</th>
              <th className="p-2 whitespace-nowrap">Amount</th>
              <th className="p-2 whitespace-nowrap">P_L</th>
              <th className="p-2 whitespace-nowrap">Bet Type</th>
              <th className="p-2 whitespace-nowrap">Time</th>
              <th className="p-2 whitespace-nowrap">ID</th>
              <th className="p-2 whitespace-nowrap">IP</th>
            </tr>
          </thead>
          <tbody className="h-screen">
            <tr>
              <td colSpan={9} className="text-center">
                No Data
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  );
}

export default EventDetails;
