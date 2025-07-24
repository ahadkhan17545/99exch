import '../../App.css'
import { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import Appconfig from '../../config/config';
import axios from 'axios';
import { Checkbox } from 'antd';

const OpenBets = ({ open }) => {
    const [openbets, setOpenbets] = useState(false)
    const [eventsName, setEventsName] = useState([])
    const [angles, setAngles] = useState([]);
    const [backBets, setBackBets] = useState([])
    const [layBets, setLayBets] = useState([])
    const [eventData, setEventData] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    const userInfo = JSON.parse(localStorage.getItem('userdata'))

    useEffect(() => {
        setOpenbets(open)
        getOpenBetEvents();
    }, [open])

    useEffect(() => {
        setAngles(eventsName.map(() => false));
    }, [eventsName]);

    useEffect(() => {
        if (Array.isArray(eventData)) {
            setBackBets(eventData.filter(data => data.is_back));
            setLayBets(eventData.filter(data => !data.is_back));
        }
    }, [eventData]);


    const getOpenBetEvents = async () => {

        var data = JSON.stringify({
            user_id: userInfo?._id,
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}reports/auraOpenBetEvents`,
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
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const toggleAngle = (index, matchId) => {
        // console.log('index', index);
        // console.log('matchId', matchId);

        setAngles((prevAngles) =>
            prevAngles.map((angle, i) => (i === index ? !angle : angle))
        );

        getOpenBetsByEvent(matchId);
    };

    const getOpenBetsByEvent = async (matchId) => {
        var data = JSON.stringify({
            user_id: userInfo?._id,
            match_id: matchId
        });

        var config = {
            method: "post",
            url: `${Appconfig.apiUrl}reports/auraOpenBets`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log('response', response);
                if (response.data.result) {
                    var events = response.data.resultData;

                    setEventData(events);


                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='bg-white h-screen relative '>
            <div>
                {
                    eventsName?.map((events, i) => {
                        return (
                            <div className='p-3 border-b-[2px] border-b-[#ededed] flex justify-between cursor-pointer' onClick={() => toggleAngle(i, events.match_id)}>
                                <div className='text-[#2789ce] text-base font-semibold'>{events.event_name}</div>
                                {angles[i] ? (
                                    <FaAngleDown size={20} />
                                ) : (
                                    <FaAngleRight size={20} />
                                )}
                            </div>
                        )
                    })
                }
            </div>

            {
                eventData.length > 0 ?
                    <>
                        <div className='p-1 text-[#000000] font-semibold text-base bg-[#ced5da] mb-[1rem]'>
                            Matched</div>

                    </>
                    :
                    <></>
            }

            <div className='p-1'>
                {backBets.length > 0 && (
                    <>
                        <div className='grid grid-cols-12 p-1 '>
                            <div className='col-span-5 text-[11px]'>
                                Back (Bet For)
                            </div>
                            <div className='col-span-2 text-[11px]'>
                                Odds
                            </div>
                            <div className='col-span-2 text-[11px]'>
                                Stake
                            </div>
                            <div className='col-span-3 text-[11px]'>
                                Profit
                            </div>
                        </div>
                        {backBets.map(data => (
                            <>
                                {
                                    isChecked &&
                                    <div className='text-[11px] p-[2px] bg-[#d4e8f8]'>
                                        Ref : {new Date(data.createdAt).toLocaleString()}
                                    </div>
                                }

                                <div key={data.id} className='grid grid-cols-12 gap-2 pl-1 pt-3 pb-3 bg-[#beddf4] border-b-[1px] border-b-[#67afe5]'>
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
                                        {data.profit} (-{data.loss})
                                    </div>
                                </div>
                            </>
                        ))}
                    </>
                )}

                {layBets.length > 0 && (
                    <>
                        <div className='grid grid-cols-12 p-1'>
                            <div className='col-span-5 text-[11px]'>
                                Lay (Bet Against)
                            </div>
                            <div className='col-span-2 text-[11px]'>
                                Odds
                            </div>
                            <div className='col-span-2 text-[11px]'>
                                Stake
                            </div>
                            <div className='col-span-3 text-[11px]'>
                                Liability
                            </div>
                        </div>
                        {layBets.map(data => (
                            <>
                                {
                                    isChecked &&
                                    <div className='text-[11px] p-[2px] bg-[#f7e7eb]'>
                                        Ref : {new Date(data.createdAt).toLocaleString()}
                                    </div>
                                }
                                <div key={data.id} className='grid grid-cols-12 gap-2 pt-3 pb-3 pl-1 bg-[#f3dce2] border-b-[1px] border-b-[#dfa3b3]'>
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
                                        {data.loss}
                                    </div>
                                </div>
                            </>
                        ))}
                    </>
                )}
            </div>
            {
                eventData.length > 0 &&
                <div className='p-2 text-[14px]'>
                    <Checkbox onChange={() => setIsChecked(!isChecked)}>Bet Info</Checkbox>
                </div>
            }

        </div >


    )

}
export default OpenBets