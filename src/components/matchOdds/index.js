import '../../App.css'
import { useState } from 'react';
import { FaCircle } from "react-icons/fa";
import { Modal } from 'antd';
function MatchOdds({ matchOdds }) {

    const [rate, setRate] = useState('')
    const [betType, setBetType] = useState('')
    const [amt, setAmt] = useState('')

    const [showBetsSlip, setShowBetsSlip] = useState(false);
    const [selectedRowIndex, setSelectedRowIndex] = useState('');
    const [rulesModal, setRulesModal] = useState(false)

    const selectRate = (price, type, row) => {
        setBetType(type);
        setRate(price);
        setShowBetsSlip(true);
        setSelectedRowIndex(row);
    };

    return (
        <>
            <Modal className='rules-modal relative top-1 lg:top-7 lg:!w-[34vw]' onCancel={() => setRulesModal(false)} footer={
                <ul className='mb-[7px] block clear-both border-t-[1px_solid_#cccccc] pt-[8px] px-[0] pb-[0]'>
                    <li className='w-full'>
                        <button className='w-[150px] mx-[auto] my-[0] block !bg-[white] !border-[1px] !border-[solid] !border-[grey] rounded-[4px] !text-[black] font-bold leading-[23px] text-[0.75rem] text-center' onClick={() => setRulesModal(false)}>
                            OK
                        </button>
                    </li>
                </ul>
            } open={rulesModal} >
                <div>
                    <p className='mb-[1rem]'>1.&nbsp;Cricket General :- ➢ If a ball is not bowled during a competition, series or match then all bets will be void except for those on any market that has been unconditionally determined (e.g. in the 'Completed Match' market).</p>
                    <p className='mb-[1rem]'>2.&nbsp;Cricket General :- If a match is shortened by weather, all bets will be settled according to the official result (including for limited overs matches, the result determined by the Duckworth Lewis method).</p>
                    <p className='mb-[1rem]'>3.&nbsp;Cricket General :- In the event of a match being decided by a bowl-off or toss of the coin, all bets will be void except for those on markets that have been unconditionally determined.</p>
                    <p className='mb-[1rem]'>4.&nbsp;Cricket Test matches :- If a match starts but is later abandoned for any reason other than weather (which may include but is not limited to: dangerous or unplayable wicket or outfield; pitch vandalism; strike or boycott; crowd protests/violence; stadium damage; acts of terrorism; and acts of God), Betfair reserves the right to void all bets, except for those on markets that have been unconditionally determined.</p>
                    <p className='mb-[1rem]'>5. In case anyone is found using 2 different IDs and logging in from same IP his winning in both accounts will be cancelled.</p>
                    <p className='mb-[1rem]'>6.&nbsp;Cricket Test matches :- If the match is not scheduled to be completed within five days after the original scheduled completion date, then all bets on markets for this event will be void, except for bets on any markets that have been unconditionally determined.</p>
                    <p className='mb-[1rem]'>7.&nbsp;Cricket Limited Over matches :- If a match is declared {`{No Result}`}, bets will be void on all markets for the event except for those markets which have been unconditionally determined or where the minimum number of overs have been bowled as laid out in the market specific information.</p>
                    <p className='mb-[1rem]'>8.&nbsp;Cricket Limited Over matches :- In the event of a new toss taking place on a scheduled reserve day for a limited overs match all bets that were placed after 30 minutes before the original scheduled start of play on the first day will be made void. This rule relates to all markets except those that have been unconditionally determined (e.g. in the win the toss and toss combination markets).</p>
                    <p className='mb-[1rem]'>9.&nbsp;Multiple Bets :- Multiple Bets With Same Time And Same User Will Be Voided Immediately.</p>
                </div>
                <div>
                    <div>
                        <h3 className='text-center bg-[#eee] m-0 text-[0.938rem] px-[0] py-[11px] text-[#243a48] whitespace-pre-wrap font-bold'>Cricket Bookmaker</h3>
                    </div>
                    <div>&nbsp;</div>
                    <table className='border-[1px] border-[black]' border={1} width={'100%'}>
                        <thead>
                            <tr>
                                <th colSpan={2}>BOOKMAKER RATE PATTERN</th>
                            </tr>
                            <tr>
                                <th>BETFAIR RATES</th>
                                <th>BOOKMAKER RATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align='center'>1.54</td>
                                <td align="center">54 = 54 PAISA</td>
                            </tr>
                            <tr>
                                <td align="center">1.58</td>
                                <td align="center">58 = 58 PAISA</td>
                            </tr>
                            <tr>
                                <td align="center">2.72</td>
                                <td align="center">172 = 1 RUPEE 72 PAISA</td>
                            </tr>
                            <tr>
                                <td align="center">2.84 </td>
                                <td align="center">184 = 1 RUPEE 84 PAISA</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <br />
                    <p className='mb-[1rem]'>1. Due to any reason any team will be getting advantage or disadvantage we are not concerned.</p>
                    <p className='mb-[1rem]'>2. We will simply compare both teams 25 overs score higher score team will be declared winner in ODI (25 over comparison)</p>
                    <p className='mb-[1rem]'>3. We will simply compare both teams 10 overs higher score team will be declared winner in T20 matches (10 over comparison)</p>
                    <p className='mb-[1rem]'>4. Any query about the result or rates should be contacted within 7 days of the specific event, the same will not be considered valid post 7 days from the event.</p>
                    <p className='mb-[1rem]'><strong>➣ Next Man Out/Caught Out</strong></p>
                    <p className='mb-[1rem]'>1.Advance Market wil be Valid in Both Innings</p>
                    <p className='mb-[1rem]'>2.If Player does not Come Then All Bets Will Be Voided.</p>
                    <p className='mb-[1rem]'>3.If Both Player Remain Not Out till Innings end, Then All Bets will be voided.</p>
                    <p className='mb-[1rem]'><strong>➣ Luch Favourite Market</strong></p>
                    <p className='mb-[1rem]'>1.In the innings Break Which Team is Favourite will be Considered as lunch Favourite.</p>
                    <p className='mb-[1rem]'>2.If Match gets TIE All bets will be voided.</p>
                    <p className='mb-[1rem]'>3.In case Overs are reduecd in a match, the team wich favourite at the inning break will be considerd as Lunch Favourite.</p>
                    <div className='px-[5px] py-[8px] leading-[18px] overflow-hidden overflow-y-auto h-[calc(84vh-100px)]'>
                        <div>
                            <div>
                                <div>
                                    <h3 className='text-center bg-[#eee] m-0 text-[0.938rem] px-[0] py-[11px] text-[#243a48] whitespace-pre-wrap font-bold'><strong>Rules Of Fancy Bets</strong></h3>
                                </div>
                            </div>
                            <div>
                                <p className='mb-[1rem]'>1.Once all session/fancy bets are completed and settled there will be no reversal even if the Match is Tied or is Abandoned.</p>
                                <p className='mb-[1rem]'>2.All Advance Fancy Bets Market will be Suspended 60 mins prior to Match and will be Settled.</p>
                                <p className='mb-[1rem]'>3.Under the Rules of Fancy Market if Market Gets Suspended for any reason and does not resume rhen all Previous Bets will remain Valid and become Har-Jeet bets.</p>
                                <p className='mb-[1rem]'>4. All decisions relating to settlement of wrong market being offered will be taken by management. Management will consider all actual facts and decision taken will be full and final.</p>
                                <p className='mb-[1rem]'>5.Due to any technical error market is open and result has came all bets after result will be Voided.</p>
                                <p className='mb-[1rem]'>6. If any case wrong rate has been given in fancy ,that particular bets will be Voided (Wrong Commentary).</p>
                                <p className='mb-[1rem]'>7.Should there be a power failure or a problem with the Internet Connection at our end and Fancy Market does not get suspended then our decision on the outcome is final.</p>
                                <p className='mb-[1rem]'>8.In case customer make bets in wrong fancy we are not liable to delete. No changes will be made and bets will be consider as confirm bet.</p>
                                <p className='mb-[1rem]'>9.In any circumstances management decision will be final related to all exchange items. Our scorecard will be considered as valid if there is any mismatch in online portal.</p>
                                <p className='mb-[1rem]'>10.Any bets which are deemed of being suspicious, including bets which have been placed from the stadium or from a source at the stadium maybe voided at anytime. The decision of whether to void the particular bet in question or to void the entire market will remain at the discretion of Company. The final decision of whether bets are suspicious will be taken by Company and that decision will be full and final.</p>
                                <p className='mb-[1rem]'>11.Any sort of cheating bet , any sort of Matching (Passing of funds), Court Siding (Ghaobaazi on commentary), Sharpening, Commission making is not allowed in Company, If any company User is caught in any of such act then all the funds belonging that account would be seized and confiscated. No argument or claim in that context would be entertained and the decision made by company management will stand as final authority.</p>
                                <p className='mb-[1rem]'>12.Fluke hunting/Seeking is prohibited in Company , All the fluke bets will be reversed. Cricket Commentary and Live Streaming is just an additional feature and facility for company user but company is not responsible for any delay or mistake in Commentary and Live Streaming.</p>
                                <p className='mb-[1rem]'>13.Penalty Runs - Any Penalty Runs in the Match Will be Counted While Settling in our Exchange.</p>
                                <p className='mb-[1rem]'><strong>➣ Test Match Fancy Rules</strong></p>
                                <p className='mb-[1rem]'><b>1. Session Market (Test Match)</b></p>
                                <p className='mb-[1rem]'>1.1 Complete session valid in test.</p>
                                <p className='mb-[1rem]'>1.2 In Case of team all out, running session will be settled at current score</p>
                                <p className='mb-[1rem]'>1.3 Due to Innings Declaration or Team all out, middle session and session is not completed so that particular over is considerd complited and remaining over will bet counted in next inning.For Example:-</p>
                                <ul className='mb-[1rem] pl-[2rem] list-disc'>
                                    <li className=''>You are Placing Advance Bets in 1st innigs 80 over runs ADV in case team-A declares or all-out at 70 over next 10 over counted in Team-B's 1st inning</li>
                                    <li>Current over is 70.4 and 75 Over Session is Running and Inning Has been Declared or All out, Following Condition Will be Applied
                                        <br />
                                        <ul className='mb-[1rem] pl-[2rem] list-[circle]'>
                                            <li>Over Will Be Rounded 71.</li>
                                            <li>Remaining 4 Over Will Be Counted From Next Inning.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className='mb-[1rem]'>1.4 Test match both advance session is valid on Both Team's 1st Innings.</p>
                                <p className='mb-[1rem]'>1.5 1st day 1st session Runs minimum 25 over will be played then result will given otherwise 1st day 1st session will be Voided.</p>
                                <p className='mb-[1rem]'>1.6 1st day 2nd session Runs minimum Total 50 over will be played then result will given otherwise 1st day 2nd session Runs will be Voided.</p>
                                <p className='mb-[1rem]'>1.7 1st Day Total Runs minimum total 80 over will be played then result will given otherwise 1st day total Runs will be Voided.</p>
                                <p className='mb-[1rem]'><b>2. Lambi Market/Inning Runs (Test Match)</b></p>
                                <p className='mb-[1rem]'>2.1 If Any Team Announce Declaration or All Out Then Lambi Market/Inning Runs Will Be Valid</p>
                                <p className='mb-[1rem]'>2.2 Team Has to Play Mandotary 70 Over For Lambi Market/Inning Runs</p>
                                <p className='mb-[1rem]'>2.3 In case due to weather situation match has been stopped all lambi trades will be Voided</p>
                                <p className='mb-[1rem]'>2.4 both advance Lambi Market/Inning Runs is valid on Both Team's 1st Innings.</p>
                                <p className='mb-[1rem]'><strong>3. 1 Over Session Market (Test Match)</strong></p>
                                <p className='mb-[1rem]'>3.1 Match 1st over run advance fancy only 1st innings run will be counted</p>
                                <p className='mb-[1rem]'>3.2 Due to Innings Declaration Following Condition Will Be Applied.
                                    <br /><br />
                                    <i>For Example</i>:- Current over is 70.4 and 71 Over Session Runs is Running and Score is 180/4 (70.4 Over)and Inning Has been Declared 71 Over Session Runs Will Be Voided.</p>
                                <p className='mb-[1rem]'>3.3 Due to Innings All Out Following Condition Will Be Applied.
                                    <br /><br />
                                    <i>For Example</i>:- Current Over is 55.3 and 56 Over Runs is Running and Score is 111/10 Then Result Of 56 Over Runs will be 111 Runs.</p>
                                <p className='mb-[1rem]'>3.4 In Case of Weather Will Affected Between Match and result will be given.
                                    <br /><br /><i>For Example</i> :- Current over is 70.4 and 71 Over Session Runs is Running and Score is 180/4 (70.4 Over)and Weather will Affected match then 71 Over Session Runs Will Be Voided.</p>
                                <p className='mb-[1rem]'><strong>4. Only Over Session Market (Test Match)</strong></p>
                                <p className='mb-[1rem]'>4.1 Due to Innings Declaration/All Out/Weather Situation Running Only Over Session Will Be settled</p>
                                <p className='mb-[1rem]'>4.1 Due to Innings Declaration/All Out/Weather Situation Running Only Over Session Will Be settled</p>
                                <i>For Example:-</i>
                                <ul className='mb-[1rem] pl-[2rem]'>
                                    <li className='list-disc'>55.1 Over has been played and innning ends then 56th only Over Runs Will Be settled</li>
                                    <li className='list-disc'>55 Over has been played and innning ends then 56th only Over Runs Will Be Voided.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </Modal>
            <div className='hidden lg:block mt-[6px] !mb-4 text-[0.75rem] relative flex flex-col min-w-[0] [word-wrap:break-word] bg-[linear-gradient(180deg,_#ffffff,_#ffffff_42%)] bg-clip-border border-[1px] border-[solid] border-[#c8ced3] rounded-[.25rem]'>
                <div className='bg-[#ffffff] text-[#000000] border-[none] p-0 text-[13px] border-b-[1px] border-b-[#7e97a7] flex [word-wrap:break-word]'>
                    <strong className='h-[30px] leading-[30px] text-[#ffffff] float-left font-bold pr-[30px] pl-[10px] relative bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-tr-[15px] text-[0.75rem] !w-auto'>
                        {matchOdds?.market_name}
                        <span className='ml-[.5rem] text-[.75rem] cursor-pointer leading-[30px] text-[#ffffff] font-bold' onClick={() => setRulesModal(true)}>
                            <svg className='w-[15px] h-[15px] absolute right-[8px] text-[#ffffff] top-[8px] inline-block' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                            </svg>
                        </span>
                    </strong>
                    <div className='!top-px leading-[18px] ml-[3px] align-middle font-bold cursor-pointer w-auto text-[13px] rounded-[4px] relative text-[#000000] [word-wrap:break-word]'>
                        <div className='pb-0 w-[107px] pt-[6px] leading-[18px] ml-[3px] align-middle font-bold cursor-pointer text-[0.813rem] text-[#000000]'>
                            <span className='ml-[5px] leading-[18px] font-bold cursor-pointer text-[0.813rem] text-[#000000]'>
                                <span className='w-[18px] rounded-[2px] h-[18px] float-left bg-[#ffb900] text-[#000000] flex items-center justify-center leading-[18px] font-bold cursor-pointer text-[0.813rem]'>
                                    <FaCircle className='w-[11px]' />
                                </span>
                                Cash Out
                            </span>
                        </div>
                    </div>

                    <span className='px-[0] py-[5px] float-right text-[0.813rem] text-end bg-transparent w-[237px] !absolute !right-[0] !pr-[10px] text-[#000000]'>
                        Matched
                        <span className='font-bold text-[0.813rem] text-[#000000]'> ₹8,718,629</span>
                    </span>
                </div>

                <div className='!p-0 flex-auto text-[.75rem] [word-wrap:break-word]'>
                    <div className='block w-full overflow-x-hidden !relative text-[.75rem]'>

                        <table className='w-full relative mb-0 [caption-side:bottom] border-collapse text-[.75rem] text-[#212529] align-top border-[#dee2e6]'>
                            <thead className='align-bottom text-[.75rem]'>
                                <th colSpan={3} className='border-b-[1px] border-b-[#7e97a7] p-[5px] border-t-[none] text-center'></th>
                                <th className='rounded-tl-[10px] border-b-[1px] border-b-[#7e97a7] p-[5px] border-t-[none] text-center bg-[#72bbef] [border-left-color:#fff]'>Back</th>
                                <th className='rounded-tr-[10px] border-b-[1px] border-b-[#7e97a7] p-[5px] border-t-[none] text-center bg-[#faa9ba] [border-left-color:#fff]'>Lay</th>
                                <th colSpan={2} className='border-b-[1px] border-b-[#7e97a7] p-[5px] border-t-[none] text-center'>
                                    <dl className='p-0 m-0 h-[20px] flex text-[0.625rem] leading-[7px] rounded-[3px] items-center justify-center bg-[#bed5d8]'>
                                        <dt className='inline-block mr-[8px] text-[#535353] font-bold text-[.625rem] leading-[7px] text-center'>Min/Max</dt>
                                        <dd className='inline-block mb-0 text-[#000000] ml-0 text-[.625rem] text-center leading-[7px]'>1-0</dd>
                                    </dl>
                                </th>
                            </thead>

                            <tbody className='border-t-[1px_solid_#7e97a7] [vertical-align:inherit] text-[.75rem] [word-wrap:break-word]'>
                                {/* <div className='p-[38px] absolute z-[1] opacity-[.8] bg-[#fff] w-full h-full text-[30px] font-bold top-[0] text-[#ca1010] text-center border-[2px] border-[solid] border-[#ca1010]'>
                                    <span className='text-[1.875rem] font-bold text-[#ca1010] text-center uppercase'> SUSPENDED </span>
                                </div> */}
                                {matchOdds?.marketRunners.map((runner, index) => (
                                    <>
                                        <tr className='relative border-b-[1px] border-b-[#7e97a7]'>
                                            <td className='text-left pl-[6px] align-middle text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                <span className='text-[.75rem] block !font-bold !text-[#23282c] text-left'>{runner?.runner_name}</span>
                                                {amt > 0 && (
                                                    <span className='font-normal text-[0.688rem] flex text-left'>
                                                        <span className='block font-normal text-[0.688rem] text-left'>
                                                            <span className='flex p-0 font-normal text-[0.688rem] text-left'>
                                                                <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex text-left'>
                                                                    {/* <span className='block text-[0.688rem] !text-[#228b22] !font-bold text-left'>&nbsp;(230.00)</span> */}
                                                                    {selectedRowIndex == index ?
                                                                        <span className='block text-[0.688rem] !text-[#228b22] !font-bold text-left ml-[5px]'>{`(${parseFloat(amt * rate - amt).toFixed(2)})`}</span>
                                                                        :
                                                                        <span className='block text-[0.688rem] !text-[#d0021b] !font-bold text-left ml-[5px]'>{`(${parseFloat(amt).toFixed(2)})`}</span>
                                                                    }
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                )}
                                            </td>
                                            <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative  [border-left-color:#fff] ${betType == 'back' && rate == runner?.back_3_price ? 'bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#d7e8f4]'} `}>
                                                <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold'
                                                    onClick={(e) => selectRate(runner?.back_3_price, 'back', index)}
                                                >
                                                    <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>{runner?.back_3_price}</span>
                                                    <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{runner?.back_3_size}</span>
                                                </button>
                                            </td>
                                            <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative  [border-left-color:#fff] ${betType == 'back' && rate == runner?.back_2_price ? 'bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#b7d5eb]'} `}>
                                                <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold'
                                                    onClick={(e) => selectRate(runner?.back_2_price, 'back', index)}
                                                >
                                                    <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>{runner?.back_2_price}</span>
                                                    <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{runner?.back_2_size}</span>
                                                </button>
                                            </td>
                                            <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative  [border-left-color:#fff] ${betType == 'back' && rate == runner?.back_1_price ? 'bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#72bbef]'}`}>
                                                <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold'
                                                    onClick={(e) =>
                                                        selectRate(runner?.back_1_price, 'back', index)
                                                    }
                                                >
                                                    <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]' >{runner?.back_1_price}</span>
                                                    <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{runner?.back_1_size}</span>
                                                </button>
                                            </td>
                                            <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative  [border-left-color:#fff] ${betType == 'lay' && rate == runner?.lay_1_price ? 'bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#faa9ba]'}`}>
                                                <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold'
                                                    onClick={(e) => selectRate(runner?.lay_1_price, 'lay', index)}
                                                >
                                                    <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>{runner?.lay_1_price}</span>
                                                    <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{runner?.lay_1_size}</span>
                                                </button>
                                            </td>
                                            <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative  [border-left-color:#fff] ${betType == 'lay' && rate == runner?.lay_2_price ? 'bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#efd3d9]'}`}>
                                                <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold'
                                                    onClick={(e) => selectRate(runner?.lay_2_price, 'lay', index)}
                                                >
                                                    <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>{runner?.lay_2_price}</span>
                                                    <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{runner?.lay_2_size}</span>
                                                </button>
                                            </td>
                                            <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative  [border-left-color:#fff] ${betType == 'lay' && rate == runner?.lay_3_price ? 'bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#f6e6ea]'}`}>
                                                <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[3px] font-bold'
                                                    onClick={(e) => selectRate(runner?.lay_3_price, 'lay', index)}
                                                >
                                                    <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>{runner?.lay_3_price}</span>
                                                    <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{runner?.lay_3_size}</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {showBetsSlip && selectedRowIndex === index && (
                                            <tr >
                                                <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${betType == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                                    <div className='text-center text-[12px]'>
                                                        <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                            <div className={`${betType == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
                                                                <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                    <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                        <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                            <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                        </div>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} placeholder="0" />
                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>

                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' value={amt} type="number" placeholder="0" ></input>
                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>


                                                                        <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0 text-center text-[.75rem] font-bold'>
                                                                            <button className={`!bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[1rem]  px-[0.75rem] py-[0.375rem] text-[#ffffff] border-[#000000]  w-full border-[1px] border-[#000000] rounded-[5px] font-bold ${amt > 0 ? '' : 'cursor-not-allowed pointer-events-none opacity-[.65]'}`}>
                                                                                Place Bet
                                                                            </button>
                                                                        </div>
                                                                    </div>


                                                                    <div className={`border-t-[1px] ${betType == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(100)}>100</button>
                                                                        </div>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(200)}>200</button>
                                                                        </div>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(500)}>500</button>
                                                                        </div>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(5000)}>5000</button>
                                                                        </div>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(10000)}>10000</button>
                                                                        </div>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(25000)}>25000</button>
                                                                        </div>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(50000)}>50000</button>
                                                                        </div>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(100000)}>100000</button>
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

            </div >

            <div className='lg:hidden mt-[6px] !mb-4 text-[0.75rem] relative flex flex-col min-w-[0] [word-wrap:break-word] bg-[linear-gradient(180deg,_#ffffff,_#ffffff_42%)] bg-clip-border border-[1px] border-[solid] border-[#c8ced3] rounded-[.25rem]'>
                <div className='bg-[#ffffff] text-[#000000] border-[none] p-0 text-[13px] border-b-[1px] border-b-[#7e97a7] flex [word-wrap:break-word]'>
                    <strong className='h-[30px] leading-[30px] text-[#ffffff] float-left font-bold pr-[30px] pl-[10px] relative bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-tr-[15px] text-[0.75rem] !w-auto'>
                        {matchOdds?.market_name}
                        <span className='ml-[.5rem] text-[.75rem] cursor-pointer leading-[30px] text-[#ffffff] font-bold'>
                            <svg className='w-[15px] h-[15px] absolute right-[8px] text-[#ffffff] top-[8px] inline-block' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                            </svg>
                        </span>
                    </strong>
                    <div className="!top-px leading-[18px] ml-[3px] align-middle font-bold cursor-pointer w-auto text-[13px] rounded-[4px] relative text-[#000000] [word-wrap:break-word]">
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
                    </div>
                    <span className='px-[0] py-[5px] float-right text-[0.688rem] text-end bg-transparent w-[115px] !absolute !right-[0] !pr-[10px] text-[#000000]'>
                        Matched
                        <span className='font-bold text-[0.688rem] text-[#000000]'> ₹8,718,629</span>
                    </span>
                </div>

                <div className='!p-0 flex-auto text-[.75rem] [word-wrap:break-word]'>
                    <div className='block w-full overflow-x-hidden !relative text-[.75rem]'>
                        <table className='w-full relative mb-0 [caption-side:bottom] border-collapse text-[.75rem] text-[#212529] align-top border-[#dee2e6]'>
                            <thead className='align-bottom text-[.75rem]'>
                                <th className='border-b-[0px] p-[5px] text-center block'>
                                    <dl className='p-0 m-0 h-[20px] flex text-[0.625rem] leading-[7px] rounded-[3px] border-b-[1px] items-center justify-center bg-[#bed5d8]'>
                                        <dt className='inline-block mr-[8px] text-[#535353] font-bold text-[.625rem] leading-[7px] text-center'>Min/Max</dt>
                                        <dd className='inline-block mb-0 text-[#000000] ml-0 text-[.625rem] text-center leading-[7px]'>1-0</dd>
                                    </dl>
                                </th>
                                <th className='rounded-tl-[0px] border-b-[1px] border-[solid] border-b-[#7e97a7] p-[5px] border-t-[none] text-center min-w-[75px] bg-[#72bbef] [border-left-color:#fff]'>Back</th>
                                <th className='rounded-tr-[0px] border-b-[1px] border-[solid] border-b-[#7e97a7] p-[5px] border-t-[none] text-center min-w-[75px] bg-[#faa9ba] [border-left-color:#fff]'>Lay</th>
                            </thead>

                            <tbody className='border-t-[1px] border-t-[solid] border-t-[#7e97a7] [vertical-align:inherit] text-[.75rem] [word-wrap:break-word]'>
                                {matchOdds?.marketRunners.map((runner, index) => (
                                    <>
                                        <tr className='relative border-b-[1px]  border-b-[#7e97a7]'>
                                            <td className='text-left pl-[6px] align-middle text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                <span className='text-[0.813rem] block !font-bold !text-[#23282c] text-left'>{runner?.runner_name}</span>
                                                {amt > 0 && (
                                                    <span className='font-normal text-[0.688rem] flex text-left'>
                                                        <span className='block font-normal text-[0.688rem] text-left'>
                                                            <span className='flex p-0 font-normal text-[0.688rem] text-left'>
                                                                <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex text-left'>
                                                                    {selectedRowIndex == index ?
                                                                        <span className='block text-[0.688rem] !text-[#228b22] !font-bold text-left ml-[2px]'>{`(${parseFloat(amt * rate - amt).toFixed(2)})`}</span>
                                                                        :
                                                                        <span className='block text-[0.688rem] !text-[#d0021b] !font-bold text-left ml-[2px]'>{`(${parseFloat(amt).toFixed(2)})`}</span>
                                                                    }
                                                                </span>

                                                            </span>
                                                        </span>
                                                    </span>
                                                )}
                                            </td>
                                            <td className={`w-[10%] align-middle text-center text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#72bbef] [border-left-color:#fff] ${betType == 'back' && rate == runner?.back_1_price && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold'
                                                    onClick={() =>
                                                        selectRate(runner?.back_1_price, 'back', index)
                                                    }
                                                >
                                                    <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]' >{runner?.back_1_price}</span>
                                                    <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{runner?.back_1_size}</span>
                                                </button>
                                            </td>
                                            <td className={`w-[10%] align-middle text-center text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#faa9ba] [border-left-color:#fff] ${betType == 'lay' && rate == runner?.lay_1_price && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold'
                                                    onClick={(e) => selectRate(runner?.lay_1_price, 'lay', index)}
                                                >
                                                    <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>{runner?.lay_1_price}</span>
                                                    <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>{runner?.lay_1_size}</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* ${betType == 'lay' && rate == runner?.lay_1_price ? 'bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]' : 'bg-[#faa9ba]'} */}
                                        {showBetsSlip && selectedRowIndex == index && (
                                            < tr >
                                                <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${betType == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                                    <div className='text-center text-[12px]'>
                                                        <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                            <div className={`${betType == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
                                                                <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                    <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} placeholder="0" />
                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>

                                                                        <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                        <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' value={amt} type="number" placeholder="0" ></input>
                                                                            <button className='bg-[linear-gradient(-180deg,#fff_0,#eee_89%)] h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
                                                                                <span className='bg-no-repeat bg-contain inline-flex w-[20px] absolute h-[19px] text-[1.188rem] leading-[28px] text-[#1f72ac]'>
                                                                                    <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                        <path fill="currentColor" d="M10.946,0.127v7.964h7.646v2.747h-7.646v8.035h-2.89v-8.035H0.409V8.091h7.647V0.127H10.946z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>


                                                                    <div className={`grid grid-cols-12 border-t-[1px] ${betType == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(100)}>100</button>
                                                                        </div>
                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(200)}>200</button>
                                                                        </div>
                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(500)}>500</button>
                                                                        </div>
                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(5000)}>5000</button>
                                                                        </div>
                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(10000)}>10000</button>
                                                                        </div>
                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(25000)}>25000</button>
                                                                        </div>
                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(50000)}>50000</button>
                                                                        </div>
                                                                        <div className='col-span-3 !p-[.25rem] flex-[1_0_0%] w-full max-w-full'>
                                                                            <button className='bg-[#f9f9f9] border-[1px] border-[#333] rounded-[4px] !text-[#000000] !font-normal !leading-[18px] !text-[0.813rem] !h-[31px] !ml-[0] !mr-[5px] !my-[0] text-center w-full' onClick={() => setAmt(100000)}>100000</button>
                                                                        </div>
                                                                        <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                            <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                        </div>
                                                                        <div className='col-span-6 !pb-0 !p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0 text-center text-[.75rem] font-bold'>
                                                                            <button className={`!bg-[linear-gradient(-180deg,_#535353_0%,_#000000_100%)] text-[1rem]  px-[0.75rem] py-[0.375rem] text-[#ffffff] border-[#000000]  w-full border-[1px] border-[#000000] rounded-[5px] font-bold ${amt > 0 ? '' : 'cursor-not-allowed pointer-events-none opacity-[.65]'}`}>
                                                                                Place Bet
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
        </>
    )

}


export default MatchOdds;
