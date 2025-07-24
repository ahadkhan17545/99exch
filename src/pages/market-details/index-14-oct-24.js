import '../../App.css'
import { useEffect, useRef, useState, useContext } from 'react';
import { Modal, Button, Input,  Table, Select, Pagination } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Appconfig from '../../config/config'
import { WebSocketContext } from '../../context/websocket';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
function FullMarket() {
    const navigate = useNavigate();

    const { event_id } = useParams();

    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const [type, setType] = useState('back')
    const [selection_id, setSelection_id] = useState('')
    const [htmlId, setHtmlId] = useState('')
    const [size, setSize] = useState('')
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [fanceORsportsbook, setFanceORsportsbook] = useState('fancy')
    const [fancyTab, setFancyTab] = useState('All')
    const [showMinMax, setShowMinMax] = useState(false)
    const [is_fancy, setIs_fancy] = useState(false)
    const websocket = useContext(WebSocketContext);
    const [showBetsSlip, setShowBetsSlip] = useState(false);
    const [selectedRowIndex, setSelectedRowIndex] = useState('');
    const [placing, setPlacing] = useState(false);
    const [StakeValue, setStakeValue] = useState(0);
    const [defaultStake, setDefaultStake] = useState(0)
    const [fancyExposure, setFancyExposure] = useState([]);
    const [postionFancyList, setPostionFancyList] = useState([]);
    const [backBets, setBackBets] = useState([])
    const [layBets, setLayBets] = useState([])
    const [BetPlaceData, setBetPlaceData] = useState({
        event_id: "",
        market_id: "",
        is_back: "",
        price: "",
        is_fancy: "",
        selection_id: "",
        runner_name: "",
        PM_FANCY: false
    });
    const [ProfitValue, setProfitValue] = useState(0);
    const [lossValue, setLossValue] = useState(0);
    const [bookButton, setBookButton] = useState([]);
    const [isBetPlaced, setIsBetPlaced] = useState(false);
    const [bookModalOpen, setBookModalOpen] = useState(false)
    const [showScoreIfram, setShowScoreIfram] = useState(false);
    const [scoreUrl, setScoreUrl] = useState("");
    const [eventType, setEventType] = useState('');
    const [showLtv, setShowLtv] = useState(false);
    const [tvUrl, setTvUrl] = useState();
    const [isIframe, setIsIframe] = useState(false);
    const [filterMarket, setFilterMarket] = useState('All');
    const [chips, setChips] = useState([]);
    const [openBook, setOpenBook] = useState(false)
    const [liveBet, setLiveBet] = useState(false)
    const [openBets, setOpenBets] = useState(false)


    const [livePartnership, setLivePartnership] = useState(false)

    const [openOddsBook, setOpenOddsBook] = useState(false)
    const [masterPosition, setMasterPosition] = useState([])


    const [marketTypes, setMarketTypes] = useState([])
    const [matchOdds, setMatchOdds] = useState('')
    const [bookmaker, setBookmaker] = useState('')
    const [fancy, setFancy] = useState([])
    const [eventData, setEventData] = useState([])
    const [fancyOddsData, setFancyOddsData] = useState([]);
    const [eventOpenBets, setEventOpenBets] = useState([])
    const match_odds_bet_limit = 20;
    // console.log('bookmaker', bookmaker);
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState(data);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const scrollableGamesListRef = useRef(null);
    const scrollGame = (index) => {
        const itemElement = scrollableGamesListRef.current.querySelector(`#item-${index}`);
        if (itemElement) {
            itemElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    const scrollableDivRef = useRef(null);
    const scrollToItem = (index) => {
        const itemElement = scrollableDivRef.current.querySelector(`#item-${index}`);
        if (itemElement) {
            itemElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    useEffect(() => {
        if (Array.isArray(eventOpenBets)) {
            setBackBets(eventOpenBets.filter(data => data.is_back));
            setLayBets(eventOpenBets.filter(data => !data.is_back));
        }
    }, [eventOpenBets]);

    const getOpenBetsByEvent = async (matchId) => {
        var data = JSON.stringify({
            user_id: userInfo?._id,
            match_id: matchId
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}reports/auraOpenBetsByMasters`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                // console.log('response', response);
                if (response.data.result) {
                    var events = response.data.resultData;

                    setEventOpenBets(events);
                    setFilteredData(events);
                    setData(events);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 300);
    }, [])

    useEffect(() => {
        getScoreUrl(event_id)
        getOpenBetsByEvent(event_id)
    }, [event_id])

    function getScoreUrl(eventId) {

        var data = JSON.stringify({
            event_id: eventId,
        });
        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}eventsDashboard/getScore`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                try {
                    // alert("Hello");
                    setScoreUrl(response.data.resultData.animation);
                } catch (e) {
                    // postErrorToslack(e.message);
                }
            })
            .catch(function (error) {
                console.log(error);
                // postErrorToslack(error.message);
            });
        // }
    }

    const getEvents = async () => {
        const eventId = event_id;
        var data;
        let url;
        if (userInfo) {
            url = "getDashboardDataByeventId"
            data = JSON.stringify({
                user_id: userInfo._id,
                event_id: eventId,
            });
        } else {
            url = "getDashboardDataByEventIdWithoutUserID"
            data = JSON.stringify({
                event_id: eventId,
            });
        }
        const config = {
            method: "post",
            url: `${Appconfig.apiUrl}eventsDashboard/${url}`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        try {
            const response = await axios(config);
            if (response.data.result == 1) {
                setEventData(response.data?.resultData)
                setMarketTypes(response.data?.resultData[0]?.marketTypes)
                setFancy(response.data?.resultData[0].fancy)

                setIsLoading(false)
                setTvUrl(response.data?.resultData[0]?.tv_link);
                let eventType = response.data?.resultData[0];
                if (eventType.event_type == 4) {
                    setEventType('Cricket');
                } else if (eventType.event_type == 2) {
                    setEventType('Tennis');
                } else if (eventType.event_type == 1) {
                    setEventType('Soccer');
                } else {
                    setEventType('Casino');
                }
                // console.log(response.data?.resultData[0])
                response.data?.resultData[0]?.marketTypes.map((type) => {
                    if (type.market_name == 'Bookmaker') {
                        setBookmaker(type)
                    }
                    if (type.market_name == "Match Odds") {
                        setMatchOdds(type)
                    }

                })
            }
        } catch (error) {
            console.log(error);
        }
    };
    

    useEffect(() => {
        getEvents();
    }, [])
    const checkHighestMarketPrice = (runner, market_name) => {
        let price_exceed_by_limit = false;
        // await Promise.all(
        // 1
        if (runner.market_id.toString().includes('BM')) {

            if (runner.back_1_price > 0) {
                if (parseFloat((runner.back_1_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }

            if (runner.lay_1_price > 0) {
                if (parseFloat((runner.lay_1_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }



            if (runner.back_1_price <= 0) {
                price_exceed_by_limit = true;
            }


            if (runner.lay_1_price <= 0) {
            }




        }
        else if (market_name == 'Bookmaker') {

            if (runner.back_1_price > 0) {
                if (parseFloat((runner.back_1_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }

            if (runner.lay_1_price > 0) {
                if (parseFloat((runner.lay_1_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }


            if (runner.back_1_price <= 0) {
                price_exceed_by_limit = true;
            }


            if (runner.lay_1_price <= 0) {
            }


        }
        else {
            if (parseFloat(runner.back_1_price) > match_odds_bet_limit || parseFloat(runner.lay_1_price) > match_odds_bet_limit) {
                price_exceed_by_limit = true;
            }


            if (parseFloat(runner.back_1_price) <= 0 && parseFloat(runner.lay_1_price) <= 0) {
                price_exceed_by_limit = true;
            }
        }


        // 2
        if (runner.market_id.toString().includes('BM')) {

            if (runner.back_2_price > 0) {
                if (parseFloat((runner.back_2_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }

            if (runner.lay_2_price > 0) {
                if (parseFloat((runner.lay_2_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }


            if (runner.back_2_price <= 0) {
                price_exceed_by_limit = true;
            }


            if (runner.lay_2_price <= 0) {
            }

        }
        else if (market_name == 'Bookmaker') {

            if (runner.back_2_price > 0) {
                if (parseFloat((runner.back_2_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }

            if (runner.lay_2_price > 0) {
                if (parseFloat((runner.lay_2_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }

            if (runner.back_2_price <= 0) {
                price_exceed_by_limit = true;
            }


            if (runner.lay_2_price <= 0) {
            }

        }
        else {
            if (parseFloat(runner.back_2_price) > match_odds_bet_limit || parseFloat(runner.lay_2_price) > match_odds_bet_limit) {
                price_exceed_by_limit = true;
            }


            if (parseFloat(runner.back_2_price) <= 0 && parseFloat(runner.lay_2_price) <= 0) {
                price_exceed_by_limit = true;
            }
        }


        // 3
        if (runner.market_id.toString().includes('BM')) {

            if (runner.back_3_price > 0) {
                if (parseFloat((runner.back_3_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }

            if (runner.lay_3_price > 0) {
                if (parseFloat((runner.lay_3_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }

            if (runner.back_3_price <= 0) {
                price_exceed_by_limit = true;
            }


            if (runner.lay_3_price <= 0) {
            }



        }
        else if (market_name == 'Bookmaker') {

            if (runner.back_3_price > 0) {
                if (parseFloat((runner.back_3_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }

            if (runner.lay_3_price > 0) {
                if (parseFloat((runner.lay_3_price / 100) + 1) > match_odds_bet_limit) {
                    price_exceed_by_limit = true;
                }

            }


            if (runner.back_3_price <= 0) {
                price_exceed_by_limit = true;
            }


            if (runner.lay_3_price <= 0) {
            }



        }
        else {
            if (parseFloat(runner.back_3_price) > match_odds_bet_limit || parseFloat(runner.lay_3_price) > match_odds_bet_limit) {
                price_exceed_by_limit = true;
            }


            if (parseFloat(runner.back_3_price) <= 0 && parseFloat(runner.lay_3_price) <= 0) {
                price_exceed_by_limit = true;
            }
        }

        // )


        return price_exceed_by_limit;
    }
    const getFancyData = async () => {
        var data;
        let url;
        url = "getEventFancy"
        data = JSON.stringify({
            event_id: event_id,
            user_id: userInfo ? userInfo._id : ''
        });

        let fancyData = await axios.post(`${Appconfig.apiUrl}eventsDashboard/${url}`, data, {
            headers: {
                "Content-Type": "application/json",
            }
        });


        if (fancyData.status == 200) {
            fancyData = fancyData.data

            if (fancyData.result == 1) {
                fancyData = fancyData.data;
                fancyHtml(fancyData)
            }

        }



    }

    useEffect(() => {
        getFancyData()
    }, [])

    async function fancyHtml(fancys) {
        var superiors = ["270", "259", "185", "177", "30"];
        var matchId = event_id;
        if (matchId) {
            if (fancys) {
                let check_new_fields_added = false;
                setFancyOddsData(fancys)
            }
        }
    }
    useEffect(() => {
        console.log('websocket', websocket);
        if (websocket) {
            websocket.onopen = () => {
                console.log('Websocket is open ', new Date());
                setIsReady(true)
            };




            if (websocket.readyState) {

                console.log('WESOCKET JOIN REQUEST SENT', {
                    "action": "JOIN",
                    "data": {
                        "username": "suthard444",
                        "event_id": event_id
                    }
                });

                websocket.send(JSON.stringify(
                    {
                        "action": "JOIN",
                        "data": {
                            "username": "suthard444",
                            "event_id": event_id
                        }
                    }))
            }


        }
    }, [websocket, event_id, isReady]);

    useEffect(() => {
        if (websocket) {
            websocket.onmessage = (evt) => {
                const data = JSON.parse(evt.data);
                if (data.action == "MARKET_UPDATE") {
                    console.log("MARKET SOCKET RESPONDING");
                    let market = data.data;
                    if (market) {
                        if (market.market_types.length > 0) {
                            market.market_types.map((market_type, index) => {
                                market_type.hasOwnProperty("runners") && market_type.runners.map((runner, index) => {
                                    if (market_type.status == 'OPEN') {
                                    } else {
                                    }


                                    if (runner.market_id == '4.1680554980-BM') {
                                    }
                                    if (checkHighestMarketPrice(runner, market_type.market_name)) {
                                        if (runner.status == 'SUSPENDED') {
                                            const selecid = runner.selection_id
                                            const suspendedDiv = document.querySelector(`.suspended_${runner.market_id.replace('.', '')}_${selecid}`);
                                            const suspendedMDiv = document.querySelector(`.Msuspended_${runner.market_id.replace('.', '')}_${selecid}`);
                                            const suspendedMSOCCERDiv = document.querySelector(`.m-soccer-suspended_${runner.market_id.replace('.', '')}_${selecid}`);
                                            const suspendedSOCCERDiv = document.querySelector(`.soccer-suspended_${runner.market_id.replace('.', '')}_${selecid}`);
                                            if (suspendedDiv) {
                                                suspendedDiv && suspendedDiv.classList.remove('hidden');
                                            }
                                            if (suspendedMDiv) {
                                                suspendedMDiv && suspendedMDiv.classList.remove('hidden');
                                            }
                                            if (suspendedMSOCCERDiv) {
                                                suspendedMSOCCERDiv && suspendedMSOCCERDiv.classList.remove('hidden');
                                            }
                                            if (suspendedSOCCERDiv) {
                                                suspendedSOCCERDiv && suspendedSOCCERDiv.classList.remove('hidden');
                                            }
                                        }
                                        else {
                                            const selecid = runner.selection_id
                                            const suspendedDiv = document.querySelector(`.suspended_${runner.market_id.replace('.', '')}_${selecid}`);
                                            const suspendedMDiv = document.querySelector(`.Msuspended_${runner.market_id.replace('.', '')}_${selecid}`);
                                            const suspendedMSOCCERDiv = document.querySelector(`.m-soccer-suspended_${runner.market_id.replace('.', '')}_${selecid}`);
                                            const suspendedSOCCERDiv = document.querySelector(`.soccer-suspended_${runner.market_id.replace('.', '')}_${selecid}`);
                                            if (suspendedDiv) {
                                                suspendedDiv && suspendedDiv.classList.add('hidden');
                                            }
                                            if (suspendedMDiv) {
                                                suspendedMDiv && suspendedMDiv.classList.add('hidden');
                                            }
                                            if (suspendedMSOCCERDiv) {
                                                suspendedMSOCCERDiv && suspendedMSOCCERDiv.classList.add('hidden');
                                            }
                                            if (suspendedSOCCERDiv) {
                                                suspendedSOCCERDiv && suspendedSOCCERDiv.classList.add('hidden');
                                            }
                                        }
                                        const boxes = document.querySelectorAll('.market_runners_' + runner.market_id.replace('.', '') + '_' + runner.selection_id);
                                        for (const box of boxes) {
                                            box.classList.add('disabled');
                                        }
                                    }
                                    else {
                                        const boxes = document.querySelectorAll('.market_runners_' + runner.market_id.toString().replace('.', '') + '_' + runner.selection_id);
                                        for (const box of boxes) {
                                            box.classList.remove('disabled');
                                        }
                                    }

                                    var match_odd_row = document.getElementsByClassName('table_row_' + runner.market_id.toString().replace('.', '') + '_' + runner.selection_id)[0];


                                    if (runner.status == 'SUSPENDED' || runner.status == 'CLOSE') {


                                        if (document.getElementById('availableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                            if (match_odd_row) {

                                                match_odd_row.setAttribute('data-title', runner.status);
                                                match_odd_row.parentElement.classList.add("suspended");
                                            }
                                            if (parseFloat(document.getElementById('availableToBack1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_1_price)) {
                                            } else {
                                            }
                                            if (parseFloat(document.getElementById('availableToLay1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_1_price)) {
                                            } else {
                                            }
                                        }
                                        // mobile{
                                        if (document.getElementById('MavailableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                            if (match_odd_row) {

                                                match_odd_row.setAttribute('data-title', runner.status);
                                                match_odd_row.parentElement.classList.add("suspended");
                                            }
                                            if (parseFloat(document.getElementById('MavailableToBack1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_1_price)) {
                                            } else {
                                            }
                                            if (parseFloat(document.getElementById('MavailableToLay1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_1_price)) {
                                            } else {
                                            }
                                        }
                                        // }
                                        if (document.getElementById('availableToLay2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                            if (match_odd_row) {

                                                match_odd_row.setAttribute('data-title', runner.status);
                                                match_odd_row.parentElement.classList.add("suspended");
                                            }
                                            if (parseFloat(document.getElementById('availableToBack2_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_2_price)) {
                                            } else {
                                            }
                                            if (parseFloat(document.getElementById('availableToLay2_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_2_price)) {
                                            } else {
                                            }
                                        }
                                        if (document.getElementById('availableToLay3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                            if (match_odd_row) {

                                                match_odd_row.setAttribute('data-title', runner.status);
                                                match_odd_row.parentElement.classList.add("suspended");
                                            }
                                            if (parseFloat(document.getElementById('availableToBack3_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_3_price)) {
                                            } else {
                                            }
                                            if (parseFloat(document.getElementById('availableToLay3_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_3_price)) {
                                            } else {
                                            }
                                        }
                                    } else {
                                        if (document.getElementById('availableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                            if (match_odd_row) {
                                                match_odd_row.parentElement.setAttribute('data-title', "");
                                                match_odd_row.parentElement.classList.remove("suspended");
                                            }
                                            if (parseFloat(document.getElementById('availableToBack1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_1_price)) {
                                                document.getElementById('availableToBack1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_1_price);
                                            } else {
                                                document.getElementById('availableToBack1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_1_price);
                                            }
                                            if (parseFloat(document.getElementById('availableToLay1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_1_price)) {
                                                document.getElementById('availableToLay1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_1_price);
                                            } else {
                                                document.getElementById('availableToLay1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_1_price);
                                            }
                                        }
                                        // mobile{
                                        if (document.getElementById('MavailableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                            if (match_odd_row) {
                                                match_odd_row.parentElement.setAttribute('data-title', "");
                                                match_odd_row.parentElement.classList.remove("suspended");
                                            }
                                            if (parseFloat(document.getElementById('MavailableToBack1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_1_price)) {
                                                document.getElementById('MavailableToBack1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_1_price);
                                            } else {
                                                document.getElementById('MavailableToBack1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_1_price);
                                            }
                                            if (parseFloat(document.getElementById('MavailableToLay1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_1_price)) {
                                                document.getElementById('MavailableToLay1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_1_price);
                                            } else {
                                                document.getElementById('MavailableToLay1_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_1_price);
                                            }
                                        }
                                        // }
                                        if (document.getElementById('availableToLay2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                            if (match_odd_row) {
                                                match_odd_row.parentElement.setAttribute('data-title', "");
                                                match_odd_row.parentElement.classList.remove("suspended");
                                            }
                                            if (parseFloat(document.getElementById('availableToBack2_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_2_price)) {
                                                document.getElementById('availableToBack2_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_2_price);
                                            } else {
                                                document.getElementById('availableToBack2_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_2_price);
                                            }
                                            if (parseFloat(document.getElementById('availableToLay2_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_2_price)) {
                                                document.getElementById('availableToLay2_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_2_price);
                                            } else {
                                                document.getElementById('availableToLay2_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_2_price);
                                            }
                                        }
                                        if (document.getElementById('availableToLay3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                            if (match_odd_row) {
                                                match_odd_row.parentElement.setAttribute('data-title', "");
                                                match_odd_row.parentElement.classList.remove("suspended");
                                            }
                                            if (parseFloat(document.getElementById('availableToBack3_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_3_price)) {
                                                document.getElementById('availableToBack3_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_3_price);
                                            } else {
                                                document.getElementById('availableToBack3_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_3_price);
                                            }
                                            if (parseFloat(document.getElementById('availableToLay3_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_3_price)) {
                                                document.getElementById('availableToLay3_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_3_price);
                                            } else {
                                                document.getElementById('availableToLay3_price_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_3_price);
                                            }
                                        }


                                    }
                                    /************************Size */


                                    if (document.getElementById('availableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                        document.getElementById('availableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                        document.getElementById('availableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                        if (parseFloat(document.getElementById('availableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_1_size)) {
                                            document.getElementById('availableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.add("spark");
                                            setTimeout(function () {
                                                if (document.getElementById('availableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id))
                                                    document.getElementById('availableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                            },
                                                700);
                                            document.getElementById('availableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_1_size);
                                        } else {
                                            document.getElementById('availableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_1_size);
                                        }
                                        if (parseFloat(document.getElementById('availableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_1_size)) {
                                            document.getElementById('availableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.add("spark");
                                            document.getElementById('availableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_1_size);
                                            setTimeout(function () {
                                                if (document.getElementById('availableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id))
                                                    document.getElementById('availableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                            }
                                                , 700);
                                        } else {
                                            document.getElementById('availableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_1_size);
                                        }
                                    }
                                    // mobile
                                    if (document.getElementById('MavailableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                        document.getElementById('MavailableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                        document.getElementById('MavailableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                        if (parseFloat(document.getElementById('MavailableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_1_size)) {
                                            document.getElementById('MavailableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.add("spark");
                                            setTimeout(function () {
                                                if (document.getElementById('MavailableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id))
                                                    document.getElementById('MavailableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                            },
                                                700);
                                            document.getElementById('MavailableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_1_size);
                                        } else {
                                            document.getElementById('MavailableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_1_size);
                                        }
                                        if (parseFloat(document.getElementById('MavailableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_1_size)) {
                                            document.getElementById('MavailableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.add("spark");
                                            document.getElementById('MavailableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_1_size);
                                            setTimeout(function () {
                                                if (document.getElementById('MavailableToBack1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id))
                                                    document.getElementById('MavailableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                            }
                                                , 700);
                                        } else {
                                            document.getElementById('MavailableToLay1_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_1_size);
                                        }
                                    }
                                    // }
                                    if (document.getElementById('availableToBack2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                        document.getElementById('availableToBack2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                        document.getElementById('availableToLay2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                        if (parseFloat(document.getElementById('availableToBack2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_2_size)) {
                                            document.getElementById('availableToBack2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.add("spark");
                                            setTimeout(function () {
                                                if (document.getElementById('availableToBack2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id))
                                                    document.getElementById('availableToBack2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                            },
                                                700);
                                            document.getElementById('availableToBack2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_2_size);
                                        } else {
                                            document.getElementById('availableToBack2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_2_size);
                                        }
                                        if (parseFloat(document.getElementById('availableToLay2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_2_size)) {
                                            document.getElementById('availableToLay2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.add("spark");
                                            document.getElementById('availableToLay2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_2_size);
                                            setTimeout(function () {
                                                if (document.getElementById('availableToBack2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id))
                                                    document.getElementById('availableToLay2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                            }
                                                , 700);
                                        } else {
                                            document.getElementById('availableToLay2_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_2_size);
                                        }
                                    }
                                    if (document.getElementById('availableToBack3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id)) {
                                        document.getElementById('availableToBack3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                        document.getElementById('availableToLay3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                        if (parseFloat(document.getElementById('availableToBack3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.back_3_size)) {
                                            document.getElementById('availableToBack3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.add("spark");
                                            setTimeout(function () {
                                                if (document.getElementById('availableToBack3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id))
                                                    document.getElementById('availableToBack3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                            },
                                                700);
                                            document.getElementById('availableToBack3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_3_size);
                                        } else {
                                            document.getElementById('availableToBack3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.back_3_size);
                                        }
                                        if (parseFloat(document.getElementById('availableToLay3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML) != parseFloat(runner.lay_3_size)) {
                                            document.getElementById('availableToLay3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.add("spark");
                                            document.getElementById('availableToLay3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_3_size);
                                            setTimeout(function () {
                                                if (document.getElementById('availableToBack3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id))
                                                    document.getElementById('availableToLay3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).parentElement.classList.remove("spark");
                                            }
                                                , 700);
                                        } else {
                                            document.getElementById('availableToLay3_size_' + runner.market_id.replace('.', '') + '_' + runner.selection_id).innerHTML = parseFloat(runner.lay_3_size);
                                        }
                                    }
                                });
                            });
                        }
                    }
                }

                if (data.action == "FANCY_UPDATE") {
                    let market = data.data;
                    console.log("FANCY SOCKET RESPONDING");
                    if (market) {
                        fancyHtml(market?.fancy_data)

                        // fancyHtml(market)
                    }
                }

            };
        }
    }, [websocket, event_id]);
    function formatPrice(price) {
        if (price < 1000) {
            return price;
        }
        const suffixes = ["", "k", "M", "B"];
        const tier = Math.floor(Math.log10(price) / 3);
        const suffix = suffixes[tier];
        const scaledPrice = (price / Math.pow(10, tier * 3));
        return `${scaledPrice}${suffix}`;
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
        calc(stake, BetPlaceData.price, BetPlaceData.selection_id)
        SetPosition(stake, BetPlaceData.price, BetPlaceData.market_id, BetPlaceData.is_back, BetPlaceData.selection_id);
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
            } else {
                setLossValue(pl)
                setProfitValue(t_stake)
            }
            // SetPosition(priceVal);
        } else {
            if (document.getElementById('fancy_lay_size_' + selection_id)) {
                var NoValume = parseInt(document.getElementById('fancy_lay_size_' + selection_id).innerHTML);
                var YesValume = parseInt(document.getElementById('fancy_back_size_' + selection_id).innerHTML);
                var inputno = parseFloat(document.getElementById(`fancy_lay_price_${selection_id}`).innerHTML);
                var inputyes = parseFloat(document.getElementById(`fancy_back_price_${selection_id}`).innerHTML);
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
    function betPlace(ishow) {
        if (userInfo) {
            if (userInfo.user_type == "User") {
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
                    pm_fancy: BetPlaceData.PM_FANCY
                });
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
                        try {
                            setPlacing(false);
                            setSelection_id('')
                            setHtmlId('')
                            setProfitValue(0);
                            setStakeValue(0);
                            setShowBetsSlip(false)
                            getEvents()
                            getFancyData()
                            if (userInfo) {
                                getFancysExposure();
                            }

                            if (response.data.result == 0) {
                                console.log('response:', response.data.resultMessage)
                                NotificationManager.error(response.data.resultMessage, '', 3000);
                            } else {
                                NotificationManager.success(response.data.resultMessage, '', 3000);
                                if (response.data.resultData[0].is_back == 1) {
                                    console.log('place_name:', response.data.resultData[0].place_name)
                                    console.log('stake:', response.data.resultData[0].stake)
                                    console.log('price_val:', response.data.resultData[0].price_val)
                                }
                                if (response.data.resultData[0].is_back == 0) {
                                    console.log('place_name:', response.data.resultData[0].place_name)
                                    console.log('stake:', response.data.resultData[0].stake)
                                    console.log('price_val:', response.data.resultData[0].price_val)
                                }
                                setIsBetPlaced(!isBetPlaced);
                            }
                            var MId = BetPlaceData.market_id.replace('.', '');
                            var selectionId = BetPlaceData.selection_id;
                            var runners = document.getElementsByClassName("position_" + MId);
                            for (var item of runners) {
                                var selecid = item.getAttribute('data-id');
                                document.getElementById(selecid + "_maxprofit_list_loss_runner_next_" + MId).innerHTML = ''
                                document.getElementById(selecid + "_maxprofit_Mlist_loss_runner_next_" + MId).innerHTML = ''
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
                        } catch (e) {
                            console.log(e.message)
                        }
                        setIsLoading(false);

                    })
                    .catch(function (error) {
                        console.log(error);
                        console.log(error.message)
                        setIsLoading(true);

                    });
            }
        }
        else {
            navigate('/login')
        }
    }

    const handleBookOpen = () => {
        setBookModalOpen(true)
    }
    const getFancyExposure = (selectionId) => {

        let findItem = fancyExposure.find((item) => item.selection_id == selectionId);

        if (findItem) {
            return findItem?.min
        }
        else {
            return false;
        }
    }
    const checkFancyExposureExists = (selectionId) => {

        let findItem = fancyExposure.find((item) => item.selection_id == selectionId);

        if (findItem) {
            return true
        }
        else {
            return false;
        }

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
                        console.log(e)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            navigate('/login')
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
                            setChips(response.data)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            navigate('/login')
        }
    }

    useEffect(() => {
        if (userInfo) {
            getFancysExposure();
            getChips();
        }
    }, [event_id])

    function getFancyPosition(selectionId) {
        if (userInfo) {
            var data = JSON.stringify({
                user_id: userInfo._id,
                event_id: event_id,
                fancy_id: selectionId
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
                        setBookModalOpen(true)
                    } catch (e) {
                        console.log(e)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            navigate('/login')
        }
    }

    function getOddsBook(marketId) {
        if (userInfo) {
            var data = JSON.stringify({
                user_id: userInfo._id,
                event_id: event_id,
                user_type: userInfo.user_type,
                market_id: marketId
            });
            var config = {
                method: "post",
                url: `${Appconfig.apiUrl}betting/downlineMarketPosition`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };
            axios(config)
                .then(function (response) {
                    try {
                        setMasterPosition(response.data.resultData)
                        setOpenOddsBook(true)
                    } catch (e) {
                        console.log(e)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            navigate('/login')
        }
    }


    const handleSearch = (value, dataIndex) => {

        if (!value) {
            setFilteredData(data);
            return;
        }

        const filtered = data.filter(item => {
            return Array.isArray(dataIndex)
                ? dataIndex.some(key => item[key]?.toString().toLowerCase().includes(value.toLowerCase()))
                : item[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase());
        });

        // const filtered = data.length ? data.filter(item => item[dataIndex].toString().toLowerCase().includes(value.toLowerCase())) : [];
        setFilteredData(filtered);
        setCurrent(1); // Reset to the first page after a search
    };

    const handlePageSizeChange = (e) => {
        setPageSize(e);
        setCurrent(1); // Reset to the first page after changing page size
    };

    let locale = {
        emptyText: 'No data!',
    };

    const handleFirst = () => setCurrent(1);
    const handleLast = () => setCurrent(Math.ceil(filteredData?.length / pageSize));

    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredData?.length > 0 && filteredData.slice(startIndex, endIndex);

    const columns = [
        {
            title: 'User Name',
            dataIndex: 'name',
            sorter: true,

            render: (_, record) => (
                <a href="javascript:void(0);" className='font-extrabold text-[#2789ce] text-[0.813rem] '
                >
                    {record.user_name}
                </a>

            ),
        },
        {
            title: 'Nation',
            dataIndex: 'name',
            sorter: true,

            render: (_, record) => (
                <a href="javascript:void(0);" className='font-extrabold text-[#000000] text-[0.813rem] '

                >
                    {record.place_name}
                </a>

            ),
        },
        {
            title: 'Amount',
            dataIndex: 'name',
            sorter: true,

            render: (_, record) => (
                <a href="javascript:void(0);" className='font-extrabold text-[#000000] text-[0.813rem] '

                >
                    {record.stake}
                </a>

            ),
        },
        {
            title: 'User Rate',
            dataIndex: 'name',
            sorter: true,

            render: (_, record) => (
                <a href="javascript:void(0);" className='font-extrabold text-[#000000] text-[0.813rem] '

                >
                    {record.price_val}
                </a>

            ),
        },
        {
            title: 'Place Date',
            dataIndex: 'name',
            sorter: true,

            render: (_, record) => (
                <a href="javascript:void(0);" className='font-extrabold text-[#000000] text-[0.813rem] '

                >
                    {new Date(record.createdAt).toLocaleString()}
                </a>

            ),
        },
        {
            title: 'Match Date',
            dataIndex: 'name',
            sorter: true,

            render: (_, record) => (
                <a href="javascript:void(0);" className='font-extrabold text-[#000000] text-[0.813rem] '

                >
                    {new Date(record.createdAt).toLocaleString()}
                </a>

            ),
        },
        {
            title: 'Game Type',
            dataIndex: 'name',
            sorter: true,

            render: (_, record) => (
                <a href="javascript:void(0);" className='font-extrabold text-[#000000] text-[0.813rem] '
                >
                    {record.market_name}
                </a>

            ),
        },
    ];

    const rowClassName = (record) => {
        return record.is_back ? 'bg-[#72bbef]' : 'bg-[#faa9ba]';
    };

    return (
        <>
            {
                isLoading && (
                    <div id="poker_loading" className="relative !z-[99999] loading-wrap w-[40vw] h-[24vw] text-[3.2vw] rounded-[1.33333vw] [box-shadow:0_.8vw_2.66667vw_0_rgba(0,_0,_0,_.5)]" >
                        <div className="loading w-[18.66667vw] h-[8.5vw] ]">
                            <div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <p>Loading...</p>
                    </div>
                )
            }
            <Modal title={'Book'} className='book-model relative top-1 lg:top-7 lg:!w-[352px]' onCancel={() => setBookModalOpen(false)} footer={null} open={bookModalOpen} >
                <div className='p-[5px] text-[#23282c]'>
                    <div className='grid grid-cols-12 border-[2px] border-t-[1px] border-[#333]'>
                        <div className='col-span-12 bg-[#e0e6e6]'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-6 flex items-center justify-center border-t-[1px] border-r-[1px] border-[#000000] '>
                                    <span className='text-[#000000] font-bold'> Run</span>
                                </div>
                                <div className='col-span-6 flex items-center justify-center border-t-[1px] border-[#000000]'>
                                    <span className='text-[#000000] font-bold'> Amount</span>
                                </div>
                            </div>
                        </div>

                        {postionFancyList.length > 0 ?
                            postionFancyList.map((item, index) => {
                                if (item < 0)
                                    return <>
                                        <div className='col-span-12 font-bold text-center'>
                                            <div className='grid grid-cols-12'>
                                                <div className='col-span-6 flex items-center justify-center border-t-[1px] border-r-[1px] border-[#000000] '>
                                                    <span className='text-[#000000] font-bold'> {index}</span>
                                                </div>
                                                <div className='col-span-6 flex items-center justify-center border-t-[1px] border-[#000000]'>
                                                    <span className='font-bold text-[red]' data-value={item}>{item}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                if (item >= 0 && item != null)
                                    return <>
                                        <div className='col-span-12 font-bold text-center'>
                                            <div className='grid grid-cols-12'>
                                                <div className='col-span-6 flex items-center justify-center border-t-[1px] border-r-[1px] border-[#000000] '>
                                                    <span className='text-[#000000] font-bold'> {index}</span>
                                                </div>
                                                <div className='col-span-6 flex items-center justify-center border-t-[1px] border-[#000000]'>
                                                    <span className='font-bold text-[green]' data-value={item}>{item}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                            })
                            :
                            <div className='col-span-12 font-bold text-center border-t-[1px] border-[#000000]'>No data!</div>
                        }

                    </div>
                </div>
            </Modal>

            <Modal title={'Master Book'} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[35vw]' onCancel={() => setOpenOddsBook(false)} footer={null} open={openOddsBook} >
                <div className='p-[15px] text-[#23282c]'>
                    <table className='w-full relative mb-0 text-[.75rem] text-[#212529]  align-top border-[#dee2e6]'>
                        <thead className='align-bottom text-[.75rem] bg-[#c8ced3] p-[15px]'>
                            <th className='p-[5px] !border-[1px] !text-[#000000] border-[#000000]'>Username</th>
                            <th className='p-[5px] !border-[1px] !text-[#000000] border-[#000000]'>Role</th>
                            <th className='p-[5px] !border-[1px] !text-[#000000] border-[#000000]'>{masterPosition[0]?.team_a_name}</th>
                            <th className='p-[5px] !border-[1px] !text-[#000000] border-[#000000]'> {masterPosition[0]?.team_b_name}</th>
                        </thead>
                        <tbody>
                            {masterPosition?.length > 0 ?
                                masterPosition?.map((item, index) => {
                                    return <>
                                        <tr key={index} className='relative border-[1px] border-b-[#7e97a7]' >
                                            <td className='text-center border-[1px] border-[#000000] p-[5px]'>
                                                <span className='text-[#000000] font-bold'> {item.userss.user_name}</span>
                                            </td>
                                            <td className='text-center border-[1px] border-[#000000] '>
                                                <span className='font-bold'>{item.userss.user_type}</span>
                                            </td>
                                            <td className='text-center border-[1px] border-[#000000] '>
                                                <span className={`font-bold ${item.team_a > 0 ? 'text-[green]' : 'text-[red]'}`}>{item.team_a}</span>
                                            </td>
                                            <td className='text-center border-[1px] border-[#000000] '>
                                                <span className={`font-bold ${item.team_b > 0 ? 'text-[green]' : 'text-[red]'}`}>{item.team_b}</span>
                                            </td>
                                        </tr >
                                    </>
                                })
                                :
                                <tr>
                                    <td colSpan={4} className='font-bold text-center border-t-[1px] border-[#000000]'>No data!</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </Modal >

            <Modal title={'Master List'} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[55vw]' onCancel={() => setOpenBook(false)} footer={null} open={openBook} >
                <div className='p-[15px] text-[#23282c]'>

                    <div className='grid grid-cols-12 border-[1px] border-t-[1px] border-[#c8ced3] '>
                        <div className='col-span-12 font-bold text-left border-t-[1px] border-[#c8ced3] p-[5px] cursor-pointer' onClick={() => getOddsBook(matchOdds.market_id)}>Match Odds</div>
                        <div className='col-span-12 font-bold text-left border-t-[1px] border-[#c8ced3] p-[5px] cursor-pointer' onClick={() => getOddsBook(bookmaker.market_id)}>Bookmaker</div>
                    </div>
                </div>
            </Modal>

            <Modal title={'View More Bet'} className='rollingcommission-model relative top-1 lg:top-7 lg:!w-[55vw]' onCancel={() => setOpenBets(false)} footer={null} open={openBets} >
                <div className='p-[15px] text-[#23282c]'>
                    <div className='p-[1.25rem] flex-auto '>
                        <Table
                            title={() => (
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-start mb-[.9rem] lg:mb-[0px]'>
                                        <div className='text-[#333]'>
                                            <label>
                                                Show
                                                <Select defaultValue={10} onChange={handlePageSizeChange} className='pagesize-select mx-[5px]'>
                                                    <Select.Option value={10}>10</Select.Option>
                                                    <Select.Option value={25}>25</Select.Option>
                                                    <Select.Option value={50}>50</Select.Option>
                                                    <Select.Option value={100}>100</Select.Option>
                                                </Select>
                                                entries
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end'>
                                        <div className='text-[#333]'>
                                            <label>
                                                Search:
                                                <Input
                                                    onChange={e => handleSearch(e.target.value, ['user_name', 'place_name', 'market_name', 'stake'])}
                                                    style={{ width: '150px', marginLeft: '5px' }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}
                            locale={locale}
                            columns={columns}
                            className='event-pl'
                            bordered
                            rowClassName={rowClassName}
                            dataSource={paginatedData}
                            pagination={false} // Disable default pagination
                        />
                        <div className='grid grid-cols-12 items-center pt-[1.5rem] lg:pt-[.75rem] text-[#333]'>
                            <div className='col-span-12 lg:col-span-6 text-[#333] text-[0.813rem]'>
                                Showing {startIndex + 1} to {endIndex} of {filteredData?.length} entries
                            </div>
                            <div className='col-span-12 lg:col-span-6 flex items-center justify-end  pt-[1rem] lg:pt-[0px] lg:mt-[0rem]'>
                                <button className='text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px] cursor-pointer' type='button' onClick={handleFirst} style={{ marginRight: 8 }}>First</button>
                                <Pagination
                                    current={current}
                                    pageSize={pageSize}
                                    total={filteredData?.length}
                                    onChange={(page) => setCurrent(page)}
                                    itemRender={(page, type, originalElement) => {
                                        if (type === 'prev') {
                                            return <button type='button' className='!cursor-pointer'>Previous</button>;
                                        }
                                        if (type === 'page') {
                                            return null; // Hide page numbers
                                        }
                                        if (type === 'next') {
                                            return <button type='button' className='!cursor-pointer'>Next</button>;
                                        }
                                        return originalElement;
                                    }}
                                    showSizeChanger={false} // Disable default page size changer
                                />
                                <button className='text-[0.813rem] cursor-default text-[#666] border-[1px] border-[solid] border-[transparent] bg-transparent [box-shadow:none] box-border inline-block min-w-[1.5em] px-[1em] py-[.5em] ml-[2px] text-center no-underline rounded-[2px]  cursor-pointer' type='button' onClick={handleLast} style={{ marginLeft: 8 }}>Last</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <NotificationContainer />
            {/* {
                isLoading && (
                    <div id="poker_loading" className="loading-wrap w-[40vw] h-[24vw] text-[3.2vw] rounded-[1.33333vw] [box-shadow:0_.8vw_2.66667vw_0_rgba(0,_0,_0,_.5)]" >
                        <div className="loading w-[18.66667vw] h-[8.5vw] ]">
                            <div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <p>Loading...</p>
                    </div>
                )
            } */}

            <div className='lg:grid grid-cols-12'>
                <div className='col-span-7 relative top-[15px] mb-[10px]' >
                    {/* {eventType && (<div className='col-span-12'>
                    <div className='bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-center text-[#ffffff] text-[1rem] leading-[35px]'>
                        <span className='font-black relative left-[5px]'>{eventType ? eventType : ''}</span>
                        <span className='float-right  mr-[10px] text-[1rem]' onClick={() => setIsIframe(!isIframe)} style={{ display: 'ruby' }}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M960 95.808H64c-35.184 0-64 28.8-64 64V704c0 35.184 28.816 63.983 64 63.983h416v96.208H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h384c17.664 0 32-14.336 32-32s-14.336-32-32-32H544v-96.208h416c35.184 0 64-28.8 64-63.983V159.808c0-35.2-28.816-64-64-64zM960 704H64V159.808h896V704z"></path></svg>
                        </span>
                    </div>
                </div>)} */}
                    {/* {
                    isIframe ?

                        <div className=" col-span-12 cricket-banner xp-0">

                            <div id="streamingBox" className="tv-fix">
                                <iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" contenteditable="false" frameborder="0" scrolling="yes" id="tvframe" onLoad={() => setShowLtv(true)} referrerpolicy="no-referrer" src={tvUrl} style={{ width: "100vw", height: "14rem", display: showLtv ? "" : "none" }}></iframe>

                            </div>

                            <div className="score-wrapper border-t-[5px]  border-t-[#c13333]" style={{ display: showScoreIfram ? 'block' : 'none', marginTop: userInfo ? '0px' : '18px', backgroundColor: "#000", height: "100%" }}>

                                <iframe onLoad={() => setShowScoreIfram(true)} frameBorder="0" className="score-board" src={scoreUrl} title="match-score" />
                            </div>

                        </div>
                        :
                        <></>

                } */}

                    {/* <div className='col-span-12'>
                    <ul className='mt-[2px] h-[6.3vh] -mb-[4px] relative bottom-[2px] [scrollbar-width:none] [list-style:none] flex bg-[linear-gradient(-180deg,_#e0e6e6_0%,_#e0e6e6_100%)] p-[1.86667vw] overflow-auto whitespace-nowrap'>
                        <li className='mr-[5px] whitespace-nowrap'>
                            <button className={`${filterMarket == "All" ? 'bg-[linear-gradient(#A4DC60_0%,_#4F9F21_100%)] text-[#000000]' : 'bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff]'}
                             border-[1px] border-[#000000] leading-[18px] font-bold rounded-[4.8vw] p-[9px] text-[15px]`} onClick={() => setFilterMarket('All')}>
                                All
                            </button>
                        </li>

                        <li className='mr-[5px] whitespace-nowrap'>
                            <button className={`${filterMarket == "Popular" ? 'bg-[linear-gradient(#A4DC60_0%,_#4F9F21_100%)] text-[#000000]' : 'bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff]'} border-[1px] border-[#000000] leading-[18px] font-bold rounded-[4.8vw] p-[9px] text-[15px]`} onClick={() => setFilterMarket('Popular')}>
                                Popular
                            </button>
                        </li>

                        <li className='mr-[5px] whitespace-nowrap'>
                            <button className={`${filterMarket == "Match Odds" ? 'bg-[linear-gradient(#A4DC60_0%,_#4F9F21_100%)] text-[#000000]' : 'bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff]'} border-[1px] border-[#000000] leading-[18px] font-bold rounded-[4.8vw] p-[9px] text-[15px]`} onClick={() => setFilterMarket('Match Odds')}>
                                Match Odds
                            </button>
                        </li>

                        <li className='mr-[5px] whitespace-nowrap'>
                            <button className={`${filterMarket == "Bookmaker" ? 'bg-[linear-gradient(#A4DC60_0%,_#4F9F21_100%)] text-[#000000]' : 'bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff]'} border-[1px] border-[#000000] leading-[18px] font-bold rounded-[4.8vw] p-[9px] text-[15px]`} onClick={() => setFilterMarket('Bookmaker')}>
                                Bookmaker
                            </button>
                        </li>
                    </ul>

                </div> */}
                    {/* matchOdds */}

                    {
                        eventData.length > 0 && (
                            <div className='col-span-7'>
                                <div className=' mt-[6px] !mb-4 text-[0.75rem] relative flex flex-col min-w-[0] [word-wrap:break-word] bg-[linear-gradient(180deg,_#ffffff,_#ffffff_42%)] bg-clip-border border-[1px] border-[solid] border-[#c8ced3] rounded-[.25rem]'>
                                    <div className='bg-[#ffffff] text-[#000000] border-[none] p-0 text-[13px] border-b-[1px] border-b-[#7e97a7] flex [word-wrap:break-word]'>
                                        <strong className='h-[30px] leading-[30px] text-[#ffffff] float-left font-bold pr-[30px] pl-[10px] relative bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-tr-[15px] text-[0.75rem] !w-auto'>
                                            {matchOdds?.market_name}
                                            <span className='ml-[.5rem] text-[.75rem] cursor-pointer leading-[30px] text-[#ffffff] font-bold'>
                                                <svg className='w-[15px] h-[15px] absolute right-[8px] text-[#ffffff] top-[8px] inline-block' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                    <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                                                </svg>
                                            </span>
                                        </strong>
                                        {/* <div className="!top-px leading-[18px] ml-[3px] align-middle font-bold cursor-pointer w-auto text-[13px] rounded-[4px] relative text-[#000000] [word-wrap:break-word]">
                                        <div className="pb-0 w-[107px] pt-[6px] leading-[18px] ml-[3px] align-middle font-bold cursor-pointer text-[0.813rem] text-[#000000]">
                                            <span className="ml-[5px] leading-[18px] font-bold cursor-pointer text-[0.813rem] text-[#000000]">
                                                <span className="w-[18px] rounded-[2px] h-[18px] float-left bg-[#ffb900] text-[#000000] flex items-center justify-center leading-[18px] font-bold cursor-pointer text-[0.813rem]">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                                                    </svg>
                                                </span>
                                                Cash Out
                                            </span>
                                        </div>
                                    </div> */}
                                        <span className='px-[0] py-[5px] float-right text-[0.788rem] text-end bg-transparent w-[155px] !absolute !right-[0] !pr-[10px] text-[#000000]'>
                                            Matched
                                            <span className='font-bold text-[0.788rem] text-[#000000]'> ₹8.10M</span>
                                        </span>
                                    </div>

                                    <div className='!p-0 flex-auto text-[.75rem] [word-wrap:break-word]'>
                                        <div className='block w-full overflow-x-hidden !relative text-[.75rem]'>
                                            <table className='w-full relative mb-0 [caption-side:bottom] border-collapse text-[.75rem] text-[#212529] align-top border-[#dee2e6]'>
                                                <thead className='align-bottom text-[.75rem]'>
                                                    <th className='border-b-[0px] p-[5px] text-center block'>
                                                        <dl className='p-0 m-0 h-[20px] flex text-[0.625rem] leading-[7px] rounded-[3px] border-b-[1px] items-center justify-center bg-[#bed5d8]'>
                                                            <dt className='inline-block mr-[8px] text-[#535353] font-bold text-[.625rem] leading-[7px] text-center'>Min/Max</dt>
                                                            <dd className='inline-block mb-0 text-[#000000] ml-0 text-[.625rem] text-center leading-[7px]'>100-25000</dd>
                                                        </dl>
                                                    </th>
                                                    <th className='rounded-tl-[0px] border-b-[1px] border-[solid] border-b-[#7e97a7] p-[5px] border-t-[none] text-center min-w-[75px] bg-[#72bbef] [border-left-color:#fff]'>Back</th>
                                                    <th className='rounded-tr-[0px] border-b-[1px] border-[solid] border-b-[#7e97a7] p-[5px] border-t-[none] text-center min-w-[75px] bg-[#faa9ba] [border-left-color:#fff]'>Lay</th>
                                                </thead>

                                                <tbody className='border-t-[1px] border-t-[solid] border-t-[#7e97a7] [vertical-align:inherit] text-[.75rem] [word-wrap:break-word]'>
                                                    {eventData.length > 0 && eventData.map((event, index) =>
                                                        event.marketTypes && event.marketTypes.length > 0 && event.marketTypes.map((market, index) =>
                                                            market.marketRunners && market.marketRunners.length > 0 && market.market_name == "Match Odds" &&
                                                            market.marketRunners.map((runner, i) => (
                                                                <>
                                                                    <tr className={`relative border-b-[1px]  border-b-[#7e97a7] odd_even_clr bets-selections all-${event.status} table_row_${market.market_id.replace('.', '')}_${runner.selection_id}  ${runner.status === "suspended" ? "suspended" : ""} ${checkHighestMarketPrice(runner, market.market_name) ? "disabled " : ""} market_runners_${market.market_id.replace('.', '')}_${runner.selection_id}`} key={"Mofmarket" + index}>
                                                                        <input type="hidden" id="matchodds_id_preserve" value={market.market_id} />
                                                                        <input type="hidden" className={`position_${market.market_id.replace('.', '')}`} data-id={runner.selection_id} value={runner.exposure.toFixed(2)} />
                                                                        <td className='text-left pl-[6px] align-middle text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                                            <span id="runnerName" className='text-[0.813rem] block !font-bold !text-[#23282c] text-left'>{runner?.runner_name}</span>
                                                                            <span className='font-normal text-[0.688rem] flex text-left'>
                                                                                <span className='block font-normal text-[0.688rem] text-left'>
                                                                                    <span className='flex p-0 font-normal text-[0.688rem] text-left'>
                                                                                        <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex text-left flex items-center gap-x-1'>
                                                                                            <span id={runner.selection_id + "_maxprofit_list_loss_runner_prev_" + market.market_id.replace('.', '')} className={`win market-exposure block text-[0.688rem]  !font-bold text-left ml-[5px] mr-[3px]`} data-value={runner.exposure}>{Math.abs(runner.exposure.toFixed(2))}</span>
                                                                                            {showBetsSlip && (<>
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path d="M0 3h4v4H0V3zm4 7V0l6 5-6 5z" fill="#508E0D" fill-rule="evenodd" /></svg>
                                                                                                <span id={runner.selection_id + "_maxprofit_Mlist_loss_runner_next_" + market.market_id.replace('.', '')} className={`to-win market-exposure block text-[0.688rem]  !font-bold text-left `} ></span>
                                                                                            </>)}
                                                                                        </span>

                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </td>
                                                                        <td id="back_1" className={`w-[10%] align-middle text-center text-[.75rem] px-[0]  font-bold border-t-[none] relative bg-[#72bbef] [border-left-color:#fff] ${type == 'back' && selection_id == runner.selection_id && runner.back_1_price > 0 && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                                            <button className={`back-1 ${runner.status === "SUSPENDED" ? "suspended" : ""} w-[100%] h-[100%] [color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold`}
                                                                            >
                                                                                <span id={`MavailableToBack1_price_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='backprice-match font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]' >{parseFloat(runner.back_1_price)}</span>
                                                                                <span id={`MavailableToBack1_size_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{parseFloat(runner.back_1_size)}</span>
                                                                            </button>
                                                                        </td>
                                                                        <td id="lay_1" className={`w-[10%] align-middle text-center text-[.75rem] px-[0] font-bold border-t-[none] relative bg-[#faa9ba] [border-left-color:#fff] ${type == 'lay' && selection_id == runner.selection_id && runner.lay_1_price > 0 && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                                            <button className={`lay-1 ${runner.status === "SUSPENDED" ? "suspended" : ""} w-[100%] h-[100%] [color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold`}
                                                                                fullmarketodds={parseFloat(runner.lay_1_price)}
                                                                              
                                                                            >
                                                                                <span id={`MavailableToLay1_price_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='layprice-match font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'> {parseFloat(runner.lay_1_price)}</span>
                                                                                <span id={`MavailableToLay1_size_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{parseFloat(runner.lay_1_size)}</span>
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                    {/* ${type == 'lay' && rate == runner?.lay_1_price ? 'bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#faa9ba]'} */}
                                                                    {showBetsSlip && selection_id == runner.selection_id && (
                                                                        <tr id={`market_runners_${market.market_id.replace('.', '')}_${runner.selection_id}`}>
                                                                            <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                                                                <div className='text-center text-[12px]'>
                                                                                    <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                                        <div className={`${type == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
                                                                                            <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                                                <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                                                    <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                                        <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'
                                                                                                            onClick={() => handlePriceValue(BetPlaceData.price > 0 ? parseFloat(BetPlaceData.price) - 0.01 : console.log("negative"))}
                                                                                                        >
                                                                                                            <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                                                <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                    <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                                                </svg>
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none outline-none' readOnly type="text" value={BetPlaceData.price} placeholder="0" />
                                                                                                        <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'
                                                                                                            onClick={() => handlePriceValue(parseFloat(BetPlaceData.price) + 0.01)}
                                                                                                        >
                                                                                                            <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                                                <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                    <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                                                </svg>
                                                                                                            </span>
                                                                                                        </button>
                                                                                                    </div>

                                                                                                    <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                                        <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'
                                                                                                            onClick={() => placeStakeValue(StakeValue > 0 ? StakeValue - 1 : console.log("negative"))}
                                                                                                        >
                                                                                                            <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                                                <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                    <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                                                </svg>
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none outline-none' value={StakeValue ? StakeValue : ""} onChange={(e) => placeStakeValue(e.target.value)} type="text" placeholder="0" ></input>
                                                                                                        <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'
                                                                                                            onClick={() => placeStakeValue(StakeValue + 1)}
                                                                                                        >
                                                                                                            <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                                                <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                    <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                                                </svg>
                                                                                                            </span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>


                                                                                                <div className={`grid grid-cols-12 border-t-[1px] ${type == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
                                                                                                    {
                                                                                                        chips?.map(chip => {
                                                                                                            return (
                                                                                                                <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                    <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(chip?.chip_value)}>{chip?.chip_value}</button>
                                                                                                                </div>
                                                                                                            )
                                                                                                        })
                                                                                                    }
                                                                                                    {/* <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(100)}>100</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(200)}>200</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(500)}>500</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(5000)}>5000</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(10000)}>10000</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(25000)}>25000</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(50000)}>50000</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(100000)}>100000</button>
                                                                                                    </div> */}
                                                                                                    <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                                        <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setSelection_id(''); setHtmlId(''); }}> Cancel </button>
                                                                                                    </div>
                                                                                                    <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0 text-center text-[.75rem] font-bold'>
                                                                                                        <button className={`!bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[1rem]  px-[0.75rem] py-[0.375rem] text-[#ffffff] border-[#000000]  w-full border-[1px] border-[#000000] rounded-[5px] font-bold ${StakeValue > 0 ? '' : 'cursor-not-allowed pointer-events-none opacity-[.65]'}`}
                                                                                                            onClick={() => placing ? console.log('Placing....') : betPlace()}
                                                                                                        >
                                                                                                            {placing ? "Placing...." : "Place Bet"}
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                                </>
                                                            ))))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        )
                    }

                    <div className='col-span-7'>
                        {/* <WinTheMatch /> */}
                    </div>

                    {eventData.length > 0 && eventData.map((event, index) =>
                        event.marketTypes && event.marketTypes.length > 0 && event.marketTypes.map((market, indexm) =>
                            market.marketRunners && market.marketRunners.length > 0 && market.market_name == 'Toss' && (
                                <div className='col-span-7'>
                                    <div className=' mt-[6px] !mb-4 text-[0.75rem] relative flex flex-col min-w-[0] [word-wrap:break-word] bg-[linear-gradient(180deg,_#ffffff,_#ffffff_42%)] bg-clip-border border-[1px] border-[solid] border-[#c8ced3] rounded-[.25rem]'>
                                        <div className='bg-[#ffffff] text-[#000000] border-[none] p-0 text-[13px] border-b-[1px] border-b-[#7e97a7] flex [word-wrap:break-word]'>
                                            <strong className='h-[30px] leading-[30px] text-[#ffffff] float-left font-bold pr-[30px] pl-[10px] relative bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-tr-[15px] text-[0.75rem] !w-auto'>
                                                Which Team Will  Win The Toss
                                                <span className='ml-[.5rem] text-[.75rem] cursor-pointer leading-[30px] text-[#ffffff] font-bold'>
                                                    <svg className='w-[15px] h-[15px] absolute right-[8px] text-[#ffffff] top-[8px] inline-block' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                        <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                                                    </svg>
                                                </span>
                                            </strong>

                                            {/* <span className='px-[0] py-[5px] float-right text-[0.813rem] text-end bg-transparent w-[237px] !absolute !right-[0] !pr-[10px] text-[#000000]'>
                                            Matched
                                            <span className='font-bold text-[0.813rem] text-[#000000]'> € 501.3K</span>
                                        </span> */}
                                        </div>

                                        {/* <div className='!p-0 relative flex-auto text-[.75rem] [word-wrap:break-word] suspended-toss'> */}
                                        <div className='!p-0 relative flex-auto text-[.75rem] [word-wrap:break-word]'>
                                            <div className='flex bg-[linear-gradient(90deg,_#82dda6cc,_#82ddb059_49%,_#82dda6cc)] relative mb-0'>
                                                {
                                                    market.marketRunners.map((runner) => (
                                                        <div className='!pl-[.25rem] !pr-[.25rem] flex-[0_0_auto] w-1/2 max-w-full mt-0'>
                                                            <div className='flex flex-col items-center p-[4px] !relative'>
                                                                <div className='text-[.75rem] font-bold text-center block'>{runner?.runner_name}</div>
                                                                {/* <div className={`cursor-pointer px-[0] py-[2px] w-[125px] border-[1px] border-[solid] border-[white] rounded-[3px] relative ${rate == 1.75 ? `!bg-[#16a660] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080!important]` : `bg-[#72e3a0]`}`}> */}
                                                                <div className={`cursor-pointer px-[0] py-[2px] w-[125px] border-[1px] border-[solid] border-[white] rounded-[3px] relative bg-[#72e3a0]`}>
                                                                    <button className='w-full flex items-center justify-center flex-col'
                                                                        // onClick={() => selectRate(1.75)}
                                                                     
                                                                    >
                                                                        <span id={`availableTossBackPrice_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='font-bold !relative [color:inherit]'>{runner?.back_1_price}</span>
                                                                        <span id={`availableTossBackSize_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='text-[0.688rem] !relative [color:inherit]'>{runner?.back_1_size}</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))}
                                            </div>
                                            {showBetsSlip && market?.market_id == BetPlaceData?.market_id && (
                                                <div className='text-center text-[12px]'>
                                                    <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                        <div className={`bg-[#d3edd0] text-center text-[.75rem] font-bold`}>
                                                            <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>

                                                                    <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                        <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                            <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                    <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                </svg>
                                                                            </span>
                                                                        </button>
                                                                        <input className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none outline-none' type="text" value={BetPlaceData.price} placeholder="0" />
                                                                        <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
                                                                            <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                    <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                </svg>
                                                                            </span>
                                                                        </button>
                                                                    </div>

                                                                    <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                        {/* <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'> */}
                                                                        <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'
                                                                            onClick={() => placeStakeValue(StakeValue > 0 ? StakeValue - 1 : console.log("negative"))}
                                                                        >
                                                                            <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                    <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                </svg>
                                                                            </span>
                                                                        </button>
                                                                        {/* <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' value={amt} type="number" placeholder="0" ></input> */}
                                                                        <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' value={StakeValue ? StakeValue : ""} type="text" readOnly placeholder="0" ></input>
                                                                        {/* <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'> */}
                                                                        <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'
                                                                            onClick={() => placeStakeValue(StakeValue + 1)}
                                                                        >
                                                                            <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                    <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                </svg>
                                                                            </span>
                                                                        </button>
                                                                    </div>



                                                                </div>


                                                                <div className={`grid grid-cols-12 border-t-[1px] ${type == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
                                                                    {
                                                                        chips?.map(chip => {
                                                                            return (
                                                                                <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                    <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(chip?.chip_value)}>{chip?.chip_value}</button>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                    <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                        <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setSelection_id(''); setHtmlId(''); setSize('') }}> Cancel </button>
                                                                    </div>
                                                                    <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0 text-center text-[.75rem] font-bold'>
                                                                        <button className={`!bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[1rem]  px-[0.75rem] py-[0.375rem] text-[#ffffff] border-[#000000]  w-full border-[1px] border-[#000000] rounded-[5px] font-bold ${StakeValue > 0 ? '' : 'cursor-not-allowed pointer-events-none opacity-[.65]'}`}
                                                                            onClick={() => placing ? console.log('Placing....') : betPlace()}
                                                                        >
                                                                            {placing ? "Placing...." : "Place Bet"}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            }
                                        </div>

                                    </div>
                                </div>
                            )))}

                    {/* bookmaker */}
                    {
                        eventData.length > 0 && eventData.map((event, index) =>
                            event.marketTypes && event.marketTypes.length > 0 && event.marketTypes.map((market, indexm) =>
                                market.marketRunners && market.marketRunners.length > 0 && market.market_name != "Match Odds" && market.market_name != 'Toss' && event.event_type != "1" && (
                                    <div id="bookMakerMarket_30998640_130561" className=' bets-wrap bets-bookmaker col-span-7'>
                                        <div className=' !mt-[.25rem]' >
                                            <div className='-mt-[2.5px] text-[.75rem] relative flex flex-col min-w-[0] [word-wrap:break-word] bg-[linear-gradient(180deg,_#ffffff,_#ffffff_42%)] bg-clip-border border-[1px] border-[solid] border-[#c8ced3] rounded-[.25rem] !mb-0'>
                                                <div className='bg-[#ffffff] text-[#000000] border-[none] p-0 text-[13px] border-b-[1px] border-b-[#7e97a7] flex [word-wrap:break-word]'>
                                                    <strong className='h-[30px] leading-[30px] text-[#ffffff] float-left font-bold pr-[30px] pl-[10px] relative bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-tr-[15px] text-[0.75rem] !w-auto'>
                                                        {market.market_name}
                                                        <span className='ml-[.5rem] text-[.75rem] cursor-pointer leading-[30px] text-[#ffffff] font-bold'>
                                                            <svg className='w-[15px] h-[15px] absolute right-[8px] text-[#ffffff] top-[8px] inline-block' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                                                            </svg>
                                                        </span>
                                                    </strong>

                                                    {/* <span className='px-[0] py-[5px] float-right text-[0.813rem] text-end bg-transparent w-[237px] !absolute !right-[0] !pr-[10px] text-[#000000]'>
                                                        Matched
                                                        <span className='font-bold text-[0.813rem] text-[#000000]'> ₹8,718,629</span>
                                                    </span> */}
                                                </div>
                                                <div className='!p-0 flex-auto text-[.75rem] [word-wrap:break-word]'>
                                                    <div className='block w-full overflow-x-hidden !relative text-[.75rem]'>
                                                        <table className='w-full relative mb-0 [caption-side:bottom] border-collapse text-[.75rem] text-[#212529] bg-[#faf8d8] align-top border-[#dee2e6]'>
                                                            <thead className='align-bottom text-[.75rem]'>
                                                                <th className='w-[65%] p-[5px] !border-b-[1px] !border-b-[#7e97a7]'></th>
                                                                <th colSpan={2} className='text-right pr-[20px] p-[5px] min-w-[75px] !border-b-[1px] !border-b-[#7e97a7] !text-[#000000]'>Back</th>
                                                                <th colSpan={2} className='text-left pl-[20px] p-[5px] min-w-[75px] !border-b-[1px] !border-b-[#7e97a7] border-t-[none] !text-[#000000]'>Lay</th>
                                                            </thead>

                                                            <tbody className='border-t-[1px_solid_#7e97a7] [vertical-align:inherit] text-[.75rem] [word-wrap:break-word]'>

                                                                {market.marketRunners && market.marketRunners.map((runner, i) => (
                                                                    <>
                                                                        <div className={`hidden h-[46px] bg-[#243a4866] absolute w-[35%] left-[65%] z-[5] text-center Msuspended_${runner.market_id.replace('.', '')}_${runner.selection_id}`}>
                                                                            <span className='leading-[46px] text-[12px] font-normal opacity-[.8] text-[#ffffff] [text-shadow:0_1px_4px_rgba(0,_0,_0,_.5)] text-center normal-case p-[.5rem] bg-transparent [box-shadow:inset_0_0_0_9999px_transparent]'> Suspended </span>
                                                                        </div>
                                                                        < tr id="bookMakerSelection_30998640_130561_385354" className={"bets-selections all-" + event.status + " relative border-b-[1px] border-b-[#7e97a7] " + "market_runners_" + market.market_id.replace('.', '') + '_' + runner.selection_id} >
                                                                            <input type="hidden" id="bookmaker_id_preserve" value={market.market_id} />
                                                                            <input type="hidden" className={`position_${market.market_id.replace('.', '')}`} data-id={runner.selection_id} value={runner.exposure.toFixed(2)} />
                                                                            <td className='w-[65%] text-left pl-[6px] align-middle text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                                                <span id="runnerName" className='text-[.75rem] block !font-bold !text-[#23282c] text-left'>{runner.runner_name}</span>
                                                                                <span className='font-normal text-[0.688rem] flex text-left'>
                                                                                    <span className='block font-normal text-[0.688rem] text-left'>
                                                                                        <span className='flex p-0 font-normal text-[0.688rem] text-left'>
                                                                                            <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex text-left'>
                                                                                                <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex items-center gap-x-1 text-left'>
                                                                                                    <span id={runner.selection_id + "_maxprofit_list_loss_runner_prev_" + market.market_id.replace('.', '')} className={`win market-exposure block text-[0.688rem]  !font-bold text-left ml-[5px] mr-[3px]`} data-value={runner.exposure}>{Math.abs(runner.exposure.toFixed(2))}</span>
                                                                                                    {showBetsSlip && (<>
                                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path d="M0 3h4v4H0V3zm4 7V0l6 5-6 5z" fill="#508E0D" fill-rule="evenodd" /></svg>
                                                                                                        <span id={runner.selection_id + "_maxprofit_Mlist_loss_runner_next_" + market.market_id.replace('.', '')} className={`to-win market-exposure block text-[0.688rem]  !font-bold text-left `} ></span>
                                                                                                    </>)}
                                                                                                </span>
                                                                                            </span>

                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </td>
                                                                            <td id="back_1" className={`bookmaker-back-1 table_row_${market.market_id.replace('.', '')}_${runner.selection_id}  ${runner.status === "suspended" ? "suspended" : ""} p-0 align-middle text-center text-[.75rem] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]`}>
                                                                                <dl className='bg-[linear-gradient(90deg,_rgba(130,_183,_221,_.15)_0,_rgba(130,_183,_221,_.8)_65%)] h-[46px] flex m-0 p-0 text-center text-[.75rem] font-bold'>
                                                                                    <dd className='cursor-pointer w-[10%] flex-[1] p-[2px]  items-center flex m-0 relative text-center text-[.75rem] font-bold'>
                                                                                        <button className={`back-1 w-full h-full p-0 m-0 bg-[#72bbef] border-[1px] border-[solid] border-[#fff] rounded-[4px]  text-center text-[.75rem] font-bold ${type == 'back' && selection_id == runner.selection_id && runner.back_1_price > 0 && BetPlaceData.is_fancy == false && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}
                                                                                          
                                                                                        >
                                                                                            <span id={`MavailableToBack1_price_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='back-box font-bold block text-[0.688rem] min-w-[50px] !relative w-[calc(100%-2px)] cursor-pointer text-center'>{formatPrice(runner.back_1_price)}</span>
                                                                                            <span id={`MavailableToBack1_size_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='bookmakerSize text-[0.688rem] block font-normal min-w-[50px] !relative w-[calc(100%-2px)] text-center'>{formatPrice(runner.back_1_size)}</span>
                                                                                        </button>
                                                                                    </dd>
                                                                                </dl>
                                                                            </td>
                                                                            <td id="lay_1" colSpan={3} className='bookmaker-lay-1 p-0 align-middle text-center text-[12px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                                                <dl className='bg-[linear-gradient(270deg,_rgba(231,_170,_184,_.15)_5%,_rgba(231,_170,_184,_.8)_60%)] h-[46px] flex m-0 p-0 text-center text-[.75rem] font-bold'>
                                                                                    <dd className='cursor-pointer w-[10%] flex-[1] p-[2px]   items-center flex m-0 relative text-center text-[.75rem] font-bold'>
                                                                                        <button className={`lay-1 h-full w-full p-0 m-0 border-[1px] border-[solid] border-[#fff] rounded-[4px]  text-center text-[.75rem] font-bold ${type == 'lay' && selection_id == runner.selection_id && runner.lay_1_price > 0 && BetPlaceData.is_fancy == false ? 'bg-[#f4496d] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#faa9ba] '}`}
                                                                                         
                                                                                        >
                                                                                            <span id={`MavailableToLay1_price_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='lay-box font-bold block text-[0.688rem] min-w-[50px] !relative w-[calc(100%-2px)] text-center'>{formatPrice(runner.lay_1_price)}</span>
                                                                                            <span id={`MavailableToLay1_size_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='bookmakerSize text-[0.688rem] block font-normal min-w-[50px] !relative w-[calc(100%-2px)]' >{formatPrice(runner.lay_1_size)}</span>
                                                                                        </button>
                                                                                    </dd>
                                                                                </dl>
                                                                            </td>
                                                                        </tr>
                                                                        {showBetsSlip && selection_id == runner.selection_id && (
                                                                            < tr >
                                                                                <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                                                                    <div className='text-center text-[12px]'>
                                                                                        <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                                            <div className={`${type == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
                                                                                                <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                                                    <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                                            <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                                                    </svg>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                            <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none outline-none' type="text" value={BetPlaceData.price} placeholder="0" />
                                                                                                            <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
                                                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                                                    </svg>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                        </div>

                                                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'
                                                                                                                onClick={() => placeStakeValue(StakeValue > 0 ? StakeValue - 1 : console.log("negative"))}
                                                                                                            >
                                                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                                                    </svg>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                            <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none outline-none' value={StakeValue ? StakeValue : ""} onChange={(e) => placeStakeValue(e.target.value)} type="text" placeholder="0" ></input>
                                                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'
                                                                                                                onClick={() => placeStakeValue(StakeValue + 1)}
                                                                                                            >
                                                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                                                    </svg>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>


                                                                                                    <div className={`grid grid-cols-12 border-t-[1px] ${type == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>

                                                                                                        {
                                                                                                            chips?.map(chip => {
                                                                                                                return (
                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(chip?.chip_value)}>{chip?.chip_value}</button>
                                                                                                                    </div>
                                                                                                                )
                                                                                                            })
                                                                                                        }

                                                                                                        {/* <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(100)}>100</button>
                                                                                                        </div>
                                                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(200)}>200</button>
                                                                                                        </div>
                                                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(500)}>500</button>
                                                                                                        </div>
                                                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(5000)}>5000</button>
                                                                                                        </div>
                                                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(10000)}>10000</button>
                                                                                                        </div>
                                                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(25000)}>25000</button>
                                                                                                        </div>
                                                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(50000)}>50000</button>
                                                                                                        </div>
                                                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(100000)}>100000</button>
                                                                                                        </div> */}
                                                                                                        <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                                            <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setSelection_id(''); setHtmlId(''); }}> Cancel </button>
                                                                                                        </div>
                                                                                                        <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0 text-center text-[.75rem] font-bold'>
                                                                                                            <button className={`!bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[1rem]  px-[0.75rem] py-[0.375rem] text-[#ffffff] border-[#000000]  w-full border-[1px] border-[#000000] rounded-[5px] font-bold ${StakeValue > 0 ? '' : 'cursor-not-allowed pointer-events-none opacity-[.65]'}`}
                                                                                                                onClick={() => placing ? console.log('Placing....') : betPlace()}
                                                                                                            >
                                                                                                                {placing ? "Placing...." : "Place Bet"}
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )}
                                                                    </>

                                                                ))}


                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                    </div>
                                ))
                        )
                    }

                    {/* bookmaker  only for soccer */}
                    <div className='col-span-7'>
                        {eventData.length > 0 && eventData.map((event, index) =>
                            event.marketTypes && event.marketTypes.length > 0 && event.marketTypes.map((market, index) =>
                                (market.marketRunners && market.marketRunners.length > 0 && event.event_type == "1" && market.market_name != "Match Odds") && (
                                    <>
                                        {
                                            // event.event_type == "1" && market.market_name != 'Bookmaker' ?
                                            1 == 1 &&

                                            (
                                                <>
                                                    <div id="bookMakerMarket_30998640_130561" className=' bets-wrap bets-bookmaker col-span-12'>
                                                        <div className=' !mt-[.25rem]' >
                                                            <div className='-mt-[2.5px] text-[.75rem] relative flex flex-col min-w-[0] [word-wrap:break-word] bg-[linear-gradient(180deg,_#ffffff,_#ffffff_42%)] bg-clip-border border-[1px] border-[solid] border-[#c8ced3] rounded-[.25rem] !mb-0'>
                                                                <div className='bg-[#ffffff] text-[#000000] border-[none] p-0 text-[13px] border-b-[1px] border-b-[#7e97a7] flex [word-wrap:break-word]'>
                                                                    <strong className='h-[30px] leading-[30px] text-[#ffffff] float-left font-bold pr-[30px] pl-[10px] relative bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-tr-[15px] text-[0.75rem] !w-auto'>
                                                                        {market.market_name}
                                                                        <span className='ml-[.5rem] text-[.75rem] cursor-pointer leading-[30px] text-[#ffffff] font-bold'>
                                                                            <svg className='w-[15px] h-[15px] absolute right-[8px] text-[#ffffff] top-[8px] inline-block' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                                <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </strong>

                                                                    <span className='px-[0] py-[5px] float-right text-[0.813rem] text-end bg-transparent w-[237px] !absolute !right-[0] !pr-[10px] text-[#000000]'>
                                                                        Matched
                                                                        <span className='font-bold text-[0.813rem] text-[#000000]'> ₹8,718,629</span>
                                                                    </span>
                                                                </div>
                                                                <div className='!p-0 flex-auto text-[.75rem] [word-wrap:break-word]'>
                                                                    <div className='block w-full overflow-x-hidden !relative text-[.75rem]'>
                                                                        <table className='w-full relative mb-0 [caption-side:bottom] border-collapse text-[.75rem] text-[#212529] bg-[#faf8d8] align-top border-[#dee2e6]'>
                                                                            <thead className='align-bottom text-[.75rem]'>
                                                                                <th className='w-[65%] p-[5px] !border-b-[1px] !border-b-[#7e97a7]'></th>
                                                                                <th colSpan={2} className='text-right pr-[20px] p-[5px] min-w-[75px] !border-b-[1px] !border-b-[#7e97a7] !text-[#000000]'>Back</th>
                                                                                <th colSpan={2} className='text-left pl-[20px] p-[5px] min-w-[75px] !border-b-[1px] !border-b-[#7e97a7] border-t-[none] !text-[#000000]'>Lay</th>
                                                                            </thead>

                                                                            <tbody className='border-t-[1px_solid_#7e97a7] [vertical-align:inherit] text-[.75rem] [word-wrap:break-word]'>

                                                                                {market.marketRunners && market.marketRunners.map((runner, i) => (
                                                                                    <>
                                                                                        <div className={`hidden h-[46px] bg-[#243a4866] absolute w-[35%] left-[65%] z-[5] text-center m-soccer-suspended_${runner.market_id.replace('.', '')}_${runner.selection_id}`}>
                                                                                            <span className='leading-[46px] text-[12px] font-normal opacity-[.8] text-[#ffffff] [text-shadow:0_1px_4px_rgba(0,_0,_0,_.5)] text-center normal-case p-[.5rem] bg-transparent [box-shadow:inset_0_0_0_9999px_transparent]'> Suspended </span>
                                                                                        </div>
                                                                                        < tr id="bookMakerSelection_30998640_130561_385354" className={"bets-selections all-" + event.status + " relative border-b-[1px] border-b-[#7e97a7] " + "market_runners_" + market.market_id.replace('.', '') + '_' + runner.selection_id} >
                                                                                            <input type="hidden" id="bookmaker_id_preserve" value={market.market_id} />
                                                                                            <input type="hidden" className={`position_${market.market_id.replace('.', '')}`} data-id={runner.selection_id} value={runner.exposure.toFixed(2)} />
                                                                                            <td className='w-[65%] text-left pl-[6px] align-middle text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                                                                <span id="runnerName" className='text-[.75rem] block !font-bold !text-[#23282c] text-left'>{runner.runner_name}</span>
                                                                                                <span className='font-normal text-[0.688rem] flex text-left'>
                                                                                                    <span className='block font-normal text-[0.688rem] text-left'>
                                                                                                        <span className='flex p-0 font-normal text-[0.688rem] text-left'>
                                                                                                            <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex text-left'>
                                                                                                                <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex items-center gap-x-1 text-left'>
                                                                                                                    <span id={runner.selection_id + "_maxprofit_list_loss_runner_prev_" + market.market_id.replace('.', '')} className={`win market-exposure block text-[0.688rem]  !font-bold text-left ml-[5px] mr-[3px]`} data-value={runner.exposure}>{Math.abs(runner.exposure.toFixed(2))}</span>
                                                                                                                    {showBetsSlip && (<>
                                                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path d="M0 3h4v4H0V3zm4 7V0l6 5-6 5z" fill="#508E0D" fill-rule="evenodd" /></svg>
                                                                                                                        <span id={runner.selection_id + "_maxprofit_Mlist_loss_runner_next_" + market.market_id.replace('.', '')} className={`to-win market-exposure block text-[0.688rem]  !font-bold text-left `} ></span>
                                                                                                                    </>)}
                                                                                                                </span>
                                                                                                            </span>

                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </td>
                                                                                            <td id="back_1" className={`bookmaker-back-1 table_row_${market.market_id.replace('.', '')}_${runner.selection_id}  ${runner.status === "suspended" ? "suspended" : ""} p-0 align-middle text-center text-[.75rem] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]`}>
                                                                                                <dl className='bg-[linear-gradient(90deg,_rgba(130,_183,_221,_.15)_0,_rgba(130,_183,_221,_.8)_65%)] h-[46px] flex m-0 p-0 text-center text-[.75rem] font-bold'>
                                                                                                    <dd className='cursor-pointer w-[10%] flex-[1] p-[2px]  items-center flex m-0 relative text-center text-[.75rem] font-bold'>
                                                                                                        <button className={`back-1 w-full h-full p-0 m-0 bg-[#72bbef] border-[1px] border-[solid] border-[#fff] rounded-[4px]  text-center text-[.75rem] font-bold ${type == 'back' && selection_id == runner.selection_id && runner.back_1_price > 0 && BetPlaceData.is_fancy == false && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}
                                                                                                           
                                                                                                        >
                                                                                                            <span id={`MavailableToBack1_price_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='back-box font-bold block text-[0.688rem] min-w-[50px] !relative w-[calc(100%-2px)] cursor-pointer text-center'>{formatPrice(runner.back_1_price)}</span>
                                                                                                            <span id={`MavailableToBack1_size_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='bookmakerSize text-[0.688rem] block font-normal min-w-[50px] !relative w-[calc(100%-2px)] text-center'>{formatPrice(runner.back_1_size)}</span>
                                                                                                        </button>
                                                                                                    </dd>
                                                                                                </dl>
                                                                                            </td>
                                                                                            <td id="lay_1" colSpan={3} className='bookmaker-lay-1 p-0 align-middle text-center text-[12px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                                                                <dl className='bg-[linear-gradient(270deg,_rgba(231,_170,_184,_.15)_5%,_rgba(231,_170,_184,_.8)_60%)] h-[46px] flex m-0 p-0 text-center text-[.75rem] font-bold'>
                                                                                                    <dd className='cursor-pointer w-[10%] flex-[1] p-[2px]   items-center flex m-0 relative text-center text-[.75rem] font-bold'>
                                                                                                        <button className={`lay-1 h-full w-full p-0 m-0 border-[1px] border-[solid] border-[#fff] rounded-[4px]  text-center text-[.75rem] font-bold ${type == 'lay' && selection_id == runner.selection_id && runner.lay_1_price > 0 && BetPlaceData.is_fancy == false ? 'bg-[#f4496d] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#faa9ba] '}`}
                                                                                                           
                                                                                                        >
                                                                                                            <span id={`MavailableToLay1_price_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='lay-box font-bold block text-[0.688rem] min-w-[50px] !relative w-[calc(100%-2px)] text-center'>{formatPrice(runner.lay_1_price)}</span>
                                                                                                            <span id={`MavailableToLay1_size_${market.market_id.replace('.', '')}_${runner.selection_id}`} className='bookmakerSize text-[0.688rem] block font-normal min-w-[50px] !relative w-[calc(100%-2px)]' >{formatPrice(runner.lay_1_size)}</span>
                                                                                                        </button>
                                                                                                    </dd>
                                                                                                </dl>
                                                                                            </td>
                                                                                        </tr>
                                                                                        {showBetsSlip && selection_id == runner.selection_id && (
                                                                                            < tr >
                                                                                                <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                                                                                    <div className='text-center text-[12px]'>
                                                                                                        <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                                                            <div className={`${type == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
                                                                                                                <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                                                                    <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                                                            <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                                                                    </svg>
                                                                                                                                </span>
                                                                                                                            </button>
                                                                                                                            <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none outline-none' type="text" value={BetPlaceData.price} placeholder="0" />
                                                                                                                            <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
                                                                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                                                                    </svg>
                                                                                                                                </span>
                                                                                                                            </button>
                                                                                                                        </div>

                                                                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'
                                                                                                                                onClick={() => placeStakeValue(StakeValue > 0 ? StakeValue - 1 : console.log("negative"))}
                                                                                                                            >
                                                                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                                                                    </svg>
                                                                                                                                </span>
                                                                                                                            </button>
                                                                                                                            <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none outline-none' value={StakeValue ? StakeValue : ""} readOnly type="text" placeholder="0" ></input>
                                                                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'
                                                                                                                                onClick={() => placeStakeValue(StakeValue + 1)}
                                                                                                                            >
                                                                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                                                                    </svg>
                                                                                                                                </span>
                                                                                                                            </button>
                                                                                                                        </div>
                                                                                                                    </div>


                                                                                                                    <div className={`grid grid-cols-12 border-t-[1px] ${type == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
                                                                                                                        {
                                                                                                                            chips?.map(chip => {
                                                                                                                                return (
                                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(chip?.chip_value)}>{chip?.chip_value}</button>
                                                                                                                                    </div>
                                                                                                                                )
                                                                                                                            })
                                                                                                                        }
                                                                                                                        {/* <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(100)}>100</button>
                                                                                                                    </div>
                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(200)}>200</button>
                                                                                                                    </div>
                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(500)}>500</button>
                                                                                                                    </div>
                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(5000)}>5000</button>
                                                                                                                    </div>
                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(10000)}>10000</button>
                                                                                                                    </div>
                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(25000)}>25000</button>
                                                                                                                    </div>
                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(50000)}>50000</button>
                                                                                                                    </div>
                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(100000)}>100000</button>
                                                                                                                    </div> */}
                                                                                                                        <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                                                            <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setSelection_id(''); setHtmlId(''); setSize(''); }}> Cancel </button>
                                                                                                                        </div>
                                                                                                                        <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0 text-center text-[.75rem] font-bold'>
                                                                                                                            <button className={`!bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[1rem]  px-[0.75rem] py-[0.375rem] text-[#ffffff] border-[#000000]  w-full border-[1px] border-[#000000] rounded-[5px] font-bold ${StakeValue > 0 ? '' : 'cursor-not-allowed pointer-events-none opacity-[.65]'}`}
                                                                                                                                onClick={() => placing ? console.log('Placing....') : betPlace()}
                                                                                                                            >
                                                                                                                                {placing ? "Placing...." : "Place Bet"}
                                                                                                                            </button>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                        )}
                                                                                    </>

                                                                                ))}


                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div >
                                                    </div>
                                                </>
                                            )
                                        }
                                    </>
                                )
                            )

                        )}
                    </div>

                    {/* fancy */}
                    < div className='col-span-7' >
                        {
                            fancyOddsData.length > 0 && (
                                <div className=' mt-[6px] !mb-4 text-[0.75rem] relative flex flex-col min-w-[0] [word-wrap:break-word]  bg-clip-border  rounded-[.25rem]'>
                                    <div className='border-l-[0] border-r-[0] relative flex flex-col min-w-[0] [word-wrap:break-word]  rounded-[.25rem] -mt-[2px] p-0 bg-none'>
                                        <div >
                                            <div className='top-[0] absolute w-full text-[#212529] [text-align:initial] whitespace-nowrap'>
                                                <h4 className='relative h-[25px] leading-[25px] text-[12px] text-[#fff] float-left mt-0 mb-[.5rem] font-medium' onClick={() => setFanceORsportsbook('fancy')}>
                                                    <span className='pl-[8px] pr-[14px] py-[0] cursor-pointer min-w-[72px] leading-[30px] align-top inline-block bg-[linear-gradient(180deg,#0a92a5_15%,#076875_100%)] text-[#ffffff] font-bold text-[.75rem]'>Fancy Bet</span>
                                                    <button className='!text-[#ffffff] align-top -ml-[4px] h-[30px] text-[0] [text-indent:-99999px] w-[41px] inline-block [clipPath:polygon(100%_100%,_79%_22%,_76%_15%,_74%_12%,_72%_9%,_68%_6%,_59%_3%,_78%_2%,_0%_0%,_0%_100%)] bg-[linear-gradient(180deg,#1cb0b5_15%,#1cb0b5_100%)]'>
                                                        <svg className='w-[15px] h-[15px] bg-no-repeat mx-[14px] my-[8px] bg-contain block !text-[#ffffff] [text-indent:-99999px] leading-[25px]' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                            <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                                                        </svg>
                                                    </button>
                                                </h4>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className='mt-[30.2px] bg-[linear-gradient(180deg,#0a92a5_15%,#076875_100%)] flex justify-center items-center h-[30px]'>
                                                <ul className='w-auto bg-[#ffffff80] rounded-[5px] mx-[0] my-[3px] justify-center items-center p-0 cursor-pointer flex whitespace-nowrap [word-wrap:break-word]'>
                                                    <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                                                        <button className={`${fancyTab == 'All' && 'bg-[#ffffff]'} !text-[#000000] no-underline text-[.75rem] min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] font-bold rounded-[4px] box-border block text-center`} onClick={() => setFancyTab('All')}>ALL</button>
                                                    </li>
                                                    <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                                                        <button className={`${fancyTab == 'Fancy' && 'bg-[#ffffff]'}  !text-[#000000] no-underline text-[.75rem] min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] font-bold rounded-[4px] box-border block text-center`} onClick={() => setFancyTab('Fancy')}>Fancy</button>
                                                    </li>
                                                    <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                                                        <button className={`${fancyTab == 'Line Markets' && 'bg-[#ffffff]'} !text-[#000000] no-underline text-[.75rem] min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] font-bold rounded-[4px] box-border block text-center`} onClick={() => setFancyTab('Line Markets')}>Line Markets</button>
                                                    </li>
                                                    <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                                                        <button className={`${fancyTab == 'Ball by Ball' && 'bg-[#ffffff]'} !text-[#000000] no-underline text-[.75rem] min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] font-bold rounded-[4px] box-border block text-center`} onClick={() => setFancyTab('Ball by Ball')}>Ball by Ball</button>
                                                    </li>
                                                    <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                                                        <button className={`${fancyTab == 'Meter Markets' && 'bg-[#ffffff]'} !text-[#000000] no-underline text-[.75rem] min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] font-bold rounded-[4px] box-border block text-center`} onClick={() => setFancyTab('Meter Markets')}>Meter </button>
                                                    </li>
                                                    <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                                                        <button className={`${fancyTab == 'Khado Markets' && 'bg-[#ffffff]'} !text-[#000000] no-underline text-[.75rem] min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] font-bold rounded-[4px] box-border block text-center`} onClick={() => setFancyTab('Khado Markets')}>Khado </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className=' rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] relative flex flex-col min-w-[0] [word-wrap:break-word] -mt-[2px] p-0 bg-none'>
                                            <div className='p-0 text-[.75rem] bg-[#0c92a5] border-[none] rounded-[unset] text-[#fff] cursor-pointer mb-0'></div>
                                            <div className='!p-0 flex-auto [word-wrap:break-word]'>
                                                <div className='rounded-[0] block w-full overflow-x-auto'>
                                                    <div >
                                                        <table className='text-[.75rem] mb-0 bg-[#ffffff] w-full text-[#23282c] border-collapse'>
                                                            {['All', 'Fancy'].includes(fancyTab) && (
                                                                <thead className='align-bottom text-[12px] text-[#23282c]'>
                                                                    <tr className='align-bottom text-[#23282c] border-collapse'>
                                                                        <th className=' align-bottom w-[60%] p-[5px] border-t-[none] text-center [box-shadow:inset_0_0_0_9999px_transparent] min-w-[99px] border-b-[1px] border-b-[#7e97a7]' colSpan={2} >
                                                                        </th>
                                                                        <th className=' align-bottom bg-[#faa9ba]  p-[5px] border-t-[none] text-center min-w-[40px] border-b-[1px] border-b-[#7e97a7]'> No </th>
                                                                        <th className=' align-bottom bg-[#72bbef] ] p-[5px] border-t-[none] text-center [box-shadow:inset_0_0_0_9999px_transparent] min-w-[40px] border-b-[1px] border-b-[#7e97a7]'> Yes </th>
                                                                    </tr>
                                                                </thead>
                                                            )}
                                                            <tbody className='[vertical-align:inherit] text-[.75rem] text-[#23282c] border-collapse'>
                                                                {['All', 'Fancy'].includes(fancyTab) && fancyOddsData.map((fancy, index) => (
                                                                    <>
                                                                        <tr id="fancyBetMarket_332715" className='fancy-bet bets-wrap text-[.75rem] text-[#23282c] border-collapse'>
                                                                            <input type="hidden" id="fancy_id_preserve" value={fancy.market_id} />
                                                                            <td className='text-left max-w-[165px] align-middle !pl-[6px] border-t-[none] text-[.75rem] !px-[0] !py-[2.5px] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-b-[1px] border-b-[#7e97a7]'>
                                                                                <span id="marketName" className='!text-[.75rem] !block !font-bold whitespace-normal overflow-hidden overflow-ellipsis max-w-[275px] !text-[#23282c]'>
                                                                                    {fancy.runner_name}
                                                                                    <span id="before" className={`ml-[15px] cursor-pointer win fancywin win_${fancy.match_id}_${fancy.selection_id.replace('.', '___')} text-[0.688rem]  !font-bold`}
                                                                                        data-value={
                                                                                            getFancyExposure(fancy.selection_id)
                                                                                        }>
                                                                                        {
                                                                                            checkFancyExposureExists(fancy.selection_id)
                                                                                                ? <>{Math.abs(getFancyExposure(fancy.selection_id))}</> : null
                                                                                        }

                                                                                    </span>


                                                                                </span>

                                                                            </td>
                                                                            <td className='items-center justify-between relative align-middle text-center font-bold border-t-[none] text-[.75rem] !px-[0] !py-[2.5px] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent] border-b-[1px] border-b-[#7e97a7]'>
                                                                                <div className='flex'>
                                                                                    <div>
                                                                                        <button onClick={() => getFancyPosition(fancy.selection_id)} className='mt-1 mb-1 border-[linear-gradient(-180deg,#2E4B5E0%,#243A4882%)] !text-[#ffffff] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] font-bold text-[.75rem] px-[10px] py-[4px] inline-block text-center align-middle leading-normal rounded-[.25rem] [transition:color_.15s_ease-in-out,_background-color_.15s_ease-in-out,_border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out]'

                                                                                        > Book </button>
                                                                                    </div>
                                                                                    {/* <div>
                                                                                    <button className='text-[#000] flex h-[100%] p-[0] ml-[0] mr-[5px] my-[0] [line-height:inherit] items-center justify-center float-right' onClick={() => {
                                                                                        setSelectedRowIndex(index)
                                                                                        setShowMinMax(true)
                                                                                    }
                                                                                    }>
                                                                                        <svg className='w-[20px] h-[20px] bg-no-repeat ml-[14px] my-[8px] bg-contain block  [text-indent:-99999px] ' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                                                            <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                                                                                        </svg>
                                                                                    </button>
                                                                                </div> */}
                                                                                </div>


                                                                                {showMinMax && selectedRowIndex == index && (
                                                                                    <div className='flex w-[160px] text-[#1e1e1e] right-[0] rounded-[.5997vmax] absolute top-[0] items-start font-normal [box-shadow:0_6px_10px_#000000b3] !bg-[#ffffff] text-center text-[.75rem]'>
                                                                                        <dl className='border-r-[.26667vw_solid_#e0e6e6] w-[130px] text-[#1e1e1e] font-normal text-center text-[.75rem]' >
                                                                                            <dt className='h-[1.7991vmax] text-[1.49925vmax] leading-[1.7991vmax] pt-[.44978vmax] px-[0] pb-[.5997vmax] font-bold !text-[#577c94] text-center'> Min / Max </dt>
                                                                                            <dd className='pb-0 leading-[3.09895vmax] m-0 font-bold !text-[#000000] text-center text-[.75rem]'> 100 - 25000 </dd>
                                                                                        </dl>
                                                                                        <button className='w-[1.74813vmax] h-[3.74813vmax] justify-center items-center text-[0] [text-indent:-99999px] flex top-[0] opacity-100 float-right font-bold leading-none [text-shadow:0_1px_0_#fff] !text-[#1e1e1e] mr-[5px] mt-[5px] rounded-[80px] right-[0] absolute' onClick={() => {
                                                                                            setShowMinMax(false)
                                                                                        }
                                                                                        }>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                                                                                                <path fill="currentColor" fillRule="evenodd" d="M9 .912L5.412 4.5 9 8.088 8.088 9 4.5 5.412.912 9 0 8.088 3.588 4.5 0 .912.912 0 4.5 3.588 8.088 0z"></path>
                                                                                            </svg>
                                                                                            Close
                                                                                        </button>
                                                                                    </div>
                                                                                )}
                                                                            </td>
                                                                            <td id="lay_1" className={`w-[16%] h-[43px] min-w-[40px] bg-[#faa9ba]  text-center font-bold border-t-[none] align-top text-[.75rem] !px-[0] !py-[2.5px] relative border-b-[1px] border-b-[#7e97a7] ${type == 'lay' && selection_id == fancy.selection_id && fancy.lay_price1 > 0 && '!bg-[#f4496d] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                                                <button className='lay-1 text-[inherit] text-center font-bold text-[.75rem]' >
                                                                                    <span className="widthhundredfancy" id={`fancy_lay_price_${fancy.selection_id}`}>{parseFloat(fancy.lay_price1)}</span>
                                                                                    <span className='widthhundredfancy block font-normal text-[0.688rem] min-w-[50px]' id={`fancy_lay_size_${fancy.selection_id}`}> {parseFloat(fancy.lay_size1)}  </span>
                                                                                </button>
                                                                            </td>
                                                                            <td id="back_1" className={`w-[16%] h-[43px] min-w-[40px] bg-[#72bbef]  text-center font-bold border-t-[none] align-top text-[.75rem] !px-[0] !py-[2.5px] relative border-b text-[#23282c] [box-shadow:inset_0_0_0_9999px_transparent] border-b-[1px] border-b-[#7e97a7] ${type == 'back' && selection_id == fancy.selection_id && fancy.back_price1 > 0 && '!bg-[#1a8ee1] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                                                {fancy.game_status != '' && (
                                                                                    <div className='p-[10px] w-[200%] right-[0] top-[0] bg-[#243a4866] absolute pointer-events-none h-full text-[#ffffff] flex justify-center items-center text-center font-bold text-[.75rem]'>
                                                                                        <span className='block font-normal text-[0.688rem] opacity-[.8] text-[#ffffff] [text-shadow:0_1px_4px_rgba(0,_0,_0,_.5)] text-center normal-case min-w-[50px] flex-[auto]'> {fancy.game_status} </span>
                                                                                    </div>
                                                                                )}
                                                                                <button className='back-1 text-[inherit] text-center font-bold text-[12px]' 
                                                                                >
                                                                                    <span className="widthhundredfancy" id={`fancy_back_price_${fancy.selection_id}`}>{parseFloat(fancy.back_price1)}</span>
                                                                                    <span className='widthhundredfancy block font-normal text-[0.688rem] min-w-[50px] text-[inherit] text-center' id={`fancy_back_size_${fancy.selection_id}`}>{parseFloat(fancy.back_size1)}</span>
                                                                                </button>
                                                                            </td>
                                                                        </tr >
                                                                        {showBetsSlip && selection_id == fancy.selection_id && (
                                                                            <tr>
                                                                                <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                                                                    <div className='text-center text-[12px]'>
                                                                                        <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                                            <div className={`${type == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
                                                                                                <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                                                    <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                                            <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                                                    </svg>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                            <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="text" value={`${BetPlaceData.price}/${document.getElementById(size)?.innerHTML}`} placeholder="0" />
                                                                                                            <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
                                                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                                                    </svg>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                        </div>

                                                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'
                                                                                                                onClick={() => placeStakeValue(StakeValue > 0 ? StakeValue - 1 : console.log("negative"))}
                                                                                                            >
                                                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                                                    </svg>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                            <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' value={StakeValue ? StakeValue : ""} onChange={(e) => placeStakeValue(e.target.value)} type="text" placeholder="0" ></input>
                                                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'
                                                                                                                onClick={() => placeStakeValue(StakeValue + 1)}
                                                                                                            >
                                                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                                                    </svg>
                                                                                                                </span>
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>


                                                                                                    <div className={`grid grid-cols-12 border-t-[1px] ${type == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
                                                                                                        {
                                                                                                            chips?.map(chip => {
                                                                                                                return (
                                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(chip?.chip_value)}>{chip?.chip_value}</button>
                                                                                                                    </div>
                                                                                                                )
                                                                                                            })
                                                                                                        }
                                                                                                        {/* <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(100)}>100</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(200)}>200</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(500)}>500</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(5000)}>5000</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(10000)}>10000</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(25000)}>25000</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(50000)}>50000</button>
                                                                                                    </div>
                                                                                                    <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                                                        <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => placeStakeValue(100000)}>100000</button>
                                                                                                    </div> */}
                                                                                                        <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                                            <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setSelection_id(''); setHtmlId(''); setSize('') }}> Cancel </button>
                                                                                                        </div>
                                                                                                        <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0 text-center text-[.75rem] font-bold'>
                                                                                                            <button className={`!bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[1rem]  px-[0.75rem] py-[0.375rem] text-[#ffffff] border-[#000000]  w-full border-[1px] border-[#000000] rounded-[5px] font-bold ${StakeValue > 0 ? '' : 'cursor-not-allowed pointer-events-none opacity-[.65]'}`}
                                                                                                                // onClick={() => betPlace(`fancyBetBookBtn_"${fancy.match_id}_${fancy.selection_id}`)}
                                                                                                                onClick={() => placing ? console.log('Placing....') : betPlace(`fancyBetBookBtn_"${fancy.match_id}_${fancy.selection_id}`)}
                                                                                                            >
                                                                                                                {placing ? "Placing...." : "Place Bet"}

                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )}
                                                                    </>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div >
                <div className='col-span-12 lg:col-span-5'>
                    <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]' >
                        <div className='col-span-12 mb-1 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[30px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[13px] font-bold mb-0 leading-normal'>Live Streaming</h5>
                        </div>
                        <div className='col-span-12 mb-1 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[30px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[13px] font-bold mb-0 leading-normal'>Score Card</h5>
                        </div>
                        <div className='col-span-12 '>
                            <div className='bg-[#fff] border rounded-[.375rem]'>
                                <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                    <h5 className='text-[13px] font-bold mb-0 leading-normal'>Book</h5>

                                </div>
                                <div className='flex justify-evenly'>
                                    <div className='p-[0.75rem] col-span-12' onClick={() => setOpenBook(true)}>
                                        <Button type="primary"
                                            className='lg:ml-[10px] lg:w-[250px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)' }}>
                                            Master Book
                                        </Button>
                                    </div>
                                    <div className='p-[0.75rem] col-span-12' onClick={() => setOpenBook(true)}>
                                        <Button type="primary"
                                            className='lg:ml-[10px] lg:w-[250px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)' }}>
                                            User Book
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 relative pt-[2rem]' >
                        <div className='col-span-12 '>
                            <div className='bg-[#fff] border rounded-[.375rem]'>
                                <div className='col-span-12 px-[6px] py-[5px] ] font-bold text-[0.875rem]  h-[50px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                                    <h5 className='text-[13px] font-bold mb-0 leading-normal'>Live Bet</h5>
                                    <div onChange={() => setLiveBet(!liveBet)} className="form-check form-check-inline float-left inline-flex items-center pl-0 mr-[.75rem] relative !ml-[.5rem] min-h-[1.5rem] mb-[.125rem]" >
                                        <label htmlFor="chipSummaryOnOFF" className="switch switch-label switch-primary switch-lg w-[56px] h-[30px] inline-block mb-0 text-[13px] leading-[28px]">
                                            <input id='chipSummaryOnOFF' name="chipSummaryOnOFF" type="checkbox" className="switch-input hidden" />
                                            <span data-checked="✓" data-unchecked="✕" className="switch-slider ">
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className='text-[13px] font-bold mb-0 leading-normal'>Partnership Book</h5>
                                    <div onChange={() => setLivePartnership(!livePartnership)} className="form-check form-check-inline float-left inline-flex items-center pl-0 mr-[.75rem] relative !ml-[.5rem] min-h-[1.5rem] mb-[.125rem]" >
                                        <label htmlFor="chipSummaryOnOFF1" className="switch switch-label switch-primary switch-lg w-[56px] h-[30px] inline-block mb-0 text-[13px] leading-[28px]">
                                            <input id='chipSummaryOnOFF1' name="chipSummaryOnOFF1" type="checkbox" className="switch-input hidden" />
                                            <span data-checked="✓" data-unchecked="✕" className="switch-slider ">
                                            </span>
                                        </label>
                                    </div>
                                    <h5 className='text-[13px] font-bold mb-0 leading-normal' onClick={() => setOpenBets(true)}>View More</h5>

                                </div>
                                {
                                    liveBet ?
                                        <div className='p-2'>
                                            {backBets.length > 0 && (
                                                <>
                                                    <div className='grid grid-cols-12 p-1 '>
                                                        <div className='col-span-5 text-[11px]'>
                                                            Market Name
                                                        </div>
                                                        <div className='col-span-2 text-[11px]'>
                                                            Odds
                                                        </div>
                                                        <div className='col-span-2 text-[11px]'>
                                                            Stake
                                                        </div>
                                                        <div className='col-span-3 text-[11px]'>
                                                            Username
                                                        </div>
                                                    </div>
                                                    {backBets.map(data => (
                                                        <>

                                                            <div className='text-[11px] p-[2px] bg-[#d4e8f8]'>
                                                                Ref : {new Date(data.createdAt).toLocaleString()}
                                                            </div>

                                                            <div key={data.id} className='grid grid-cols-12 gap-2 pl-1 pt-2 pb-2 bg-[#beddf4] border-b-[1px] border-b-[#67afe5]'>
                                                                <div className='col-span-5 flex gap-2 justify-evenly'>
                                                                    <div className='text-[11px] bg-[#7dbbe9] p-1 rounded-[3px]'>Back</div>
                                                                    <div className='text-[11px] font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap block'>
                                                                        {data.place_name}
                                                                    </div>

                                                                </div>
                                                                <div className='col-span-2 text-[11px]'>
                                                                    {data.price_val}
                                                                </div>
                                                                <div className='col-span-2 text-[11px]'>
                                                                    {data.stake}
                                                                </div>
                                                                <div className='col-span-3 text-[11px]'>
                                                                    {data.user_name}
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}
                                                </>
                                            )}

                                            {layBets.length > 0 && (
                                                <>

                                                    {layBets.map(data => (
                                                        <>

                                                            <div className='text-[11px] p-[2px] bg-[#f7e7eb]'>
                                                                Ref : {new Date(data.createdAt).toLocaleString()}
                                                            </div>
                                                            <div key={data.id} className='grid grid-cols-12 gap-2 pt-2 pb-2 pl-1 bg-[#f3dce2] border-b-[1px] border-b-[#dfa3b3]'>
                                                                <div className='col-span-5 flex gap-2 justify-evenly'>
                                                                    <div className='text-[11px] bg-[#dfa3b3] p-1 rounded-[3px]'>Lay</div>
                                                                    <div className='text-[11px] font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap block'>
                                                                        {data.place_name}
                                                                    </div>

                                                                </div>
                                                                <div className='col-span-2 text-[11px]'>
                                                                    {data.price_val}
                                                                </div>
                                                                <div className='col-span-2 text-[11px]'>
                                                                    {data.stake}
                                                                </div>
                                                                <div className='col-span-3 text-[11px]'>
                                                                    {data.user_name}
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                        :
                                        <></>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default FullMarket;