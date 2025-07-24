import '../../App.css'
import { useState, useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Appconfig from '../../config/config'


function MarketAnalysis() {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userdata'))


    const [eventsName, setEventsName] = useState([])
    const [angles, setAngles] = useState([]);
    const [cricketEvents, setCricketEvents] = useState([])
    const [tennisEvents, setTennisEvents] = useState([])
    const [soccerEvents, setSoccerEvents] = useState([])
    const [casinoEvents, setCasinoEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        setAngles(eventsName.map(() => false));
    }, [eventsName]);


    const getOpenBetEvents = async () => {

        var data = JSON.stringify({
            user_id: userInfo?._id,
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}betting/getAuraMarketAnalysis`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                // console.log('response', response);
                if (response.data.result) {
                    setEventsName(response.data.resultData);
                    let allEvents = response.data.resultData;
                    setIsLoading(false)
                    if (allEvents.length > 0) {
                        const tempCricketEvents = allEvents.filter(event => event.event_type == 4)
                        setCricketEvents(tempCricketEvents)
                        const tempTennisEvents = allEvents.filter(event => event.event_type == 2)
                        setTennisEvents(tempTennisEvents)
                        const tempSoccerEvents = allEvents.filter(event => event.event_type == 1)
                        setSoccerEvents(tempSoccerEvents)
                        const tempCasinoEvents = allEvents.filter(event => event.event_type != 4 && event.event_type != 2 && event.event_type != 1)
                        setCasinoEvents(tempCasinoEvents)
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getOpenBetEvents()
    }, [])

    return (
        <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
            <div className='col-span-12 '>
                <div className='bg-[#fff] border rounded-[.375rem]'>


                    {isLoading && (
                        <div id="poker_loading" className="relative !z-[99999] loading-wrap w-[40vw] h-[24vw] text-[3.2vw] rounded-[1.33333vw] [box-shadow:0_.8vw_2.66667vw_0_rgba(0,_0,_0,_.5)]" >
                            <div className="loading w-[18.66667vw] h-[8.5vw] ]">
                                <div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <p>Loading...</p>
                        </div>
                    )}

                    {
                        cricketEvents.length > 0 &&

                        <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Cricket</h5>
                        </div>
                    }

                    {cricketEvents.length > 0 && cricketEvents.map((cric, i) => {
                        return (
                            <>

                                <div key={cric.match_id}>

                                    <div className='p-1 border-b-[2px] border-b-[#ededed] flex justify-between cursor-pointer'
                                        onClick={() => navigate(`/market-details/${cric.event_type}/${cric.match_id}`)}>
                                        <div className='text-[#2789ce] text-base font-semibold text-[13px]'>{cric.event_name}</div>
                                        <div className='text-[#000] text-base font-semibold text-[13px]'>Total Bets {cric.total_bets}</div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }


                    {
                        tennisEvents.length > 0 &&
                        <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Tennis</h5>
                        </div>
                    }

                    {tennisEvents.length > 0 && tennisEvents.map((tennis, i) => {
                        return (
                            <>

                                <div key={tennis.match_id}>

                                    <div className='p-1 border-b-[2px] border-b-[#ededed] flex justify-between cursor-pointer'
                                        onClick={() => navigate(`/market-details/${tennis.event_type}/${tennis.match_id}`)}>
                                        <div className='text-[#2789ce] text-base font-semibold text-[13px]'>{tennis.event_name}</div>
                                        <div className='text-[#000] text-base font-semibold text-[13px]'>Total Bets {tennis.total_bets}</div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }

                    {
                        soccerEvents.length > 0 &&
                        <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Soccer</h5>
                        </div>
                    }

                    {soccerEvents.length > 0 && soccerEvents.map((soccer, i) => {
                        return (
                            <>

                                <div key={soccer.match_id}>

                                    <div className='p-1 border-b-[2px] border-b-[#ededed] flex justify-between cursor-pointer'
                                        onClick={() => navigate(`/market-details/${soccer.event_type}/${soccer.match_id}`)}>
                                        <div className='text-[#2789ce] text-base font-semibold text-[13px]'>{soccer.event_name}</div>
                                        <div className='text-[#000] text-base font-semibold text-[13px]'>Total Bets {soccer.total_bets}</div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }

                    {
                        casinoEvents.length > 0 &&
                        <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Casino</h5>
                        </div>
                    }

                    {casinoEvents.length > 0 && casinoEvents.map((casino, i) => {
                        return (
                            <>

                                <div key={casino.match_id}>

                                    <div className='p-1 border-b-[2px] border-b-[#ededed] flex justify-between cursor-pointer'
                                        onClick={() => navigate(`/market-details/${casino.event_type}/${casino.match_id}`)}>
                                        <div className='text-[#2789ce] text-base font-semibold text-[13px]'>{casino.event_name}</div>
                                        <div className='text-[#000] text-base font-semibold text-[13px]'>Total Bets {casino.total_bets}</div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>

            </div>
        </div>
    )
}


export default MarketAnalysis;
