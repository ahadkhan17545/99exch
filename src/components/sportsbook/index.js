// import '../../App.css'
import '../../App.css'
import {  useState } from 'react';
import {  Popover } from 'antd';
import { FaInfoCircle } from "react-icons/fa";
function Sportsbook() {

    // const [showBetsSlip, setShowBetsSlip] = useState(false)
    const [rate, setRate] = useState('')
    const [type, setType] = useState('yes')
    const [amt, setAmt] = useState('selectAmt')
    const [showBetsSlip, setShowBetsSlip] = useState(false);
    const [selectedRowIndex, setSelectedRowIndex] = useState('');

    const selectRate = (rate, type, row) => {
        setType(type);
        setRate(rate);
        setShowBetsSlip(true);
        setSelectedRowIndex(row);
    };

    return (
        <>
            {/* Desktop */}
            <div className='hidden lg:block'>
                <div className='mt-[30.1px] bg-[linear-gradient(180deg,#f26d1c_15%,#d14100_100%)] flex justify-center items-center h-[30px]'>
                    <ul className='!ml-[21px] !mr-[0] !my-[3px] w-auto bg-[#ffffff80] rounded-[5px] justify-center items-center p-0 cursor-pointer flex'>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='bg-[#ffffff] !text-[#000000] no-underline text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>ALL</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Match</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Odds/Evens</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Batsman</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Bowler</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Extra</button>
                        </li>

                    </ul>

                </div>
            </div>

            <div className='hidden lg:block mb-0 border-[1px] border-[solid] border-[#c8ced3] border-b-[1px_solid_#c8ced3] rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] [text-align:initial] whitespace-nowrap'>
                <div className='p-0'>
                    <div className='!border-[1px] !border-[solid] !border-[#c8ced3] !border-b-[1px_solid_#c8ced3] rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px]'>
                        <div className='bg-[linear-gradient(180deg,#f26d1c_15%,#d14100_100%)] rounded-[.25rem] text-[.75rem] font-bold text-[#ffffff] !px-[5px] !py-[2px] border-[none] [box-shadow:inset_0_1px_#0003]' >
                            <strong className='font-bold text-[#ffffff] text-[.75rem] cursor-pointer'>BAN W 1st Wicket Dismissal Method ADV</strong>
                            <button className=" text-[0.813rem]  bg-transparent !absolute mr-[5px] mt-[3px] !right-[10px]  text-[#ffffff]">
                                <Popover placement="left" content={() => (
                                    <p>Min/Max: 100 - 100000</p>
                                )}>
                                    <FaInfoCircle />
                                </Popover>
                            </button>
                        </div>
                        <div id='0'>
                            <div className='p-0'>
                                <div className='rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] block w-full overflow-x-auto'>
                                    <table className='bg-[#ffffff] w-full mb-0 text-[#23282c] border-collapse overflow-y-hidden relative [caption-side:bottom]'>
                                        <colgroup className='table-column-group text-[#23282c] border-collapse'>
                                            <col className='' span={1}></col>
                                            <col span={1} width={'20%'} className='w-[11%] bg-[#72e3a0] [border-left-color:#fff] relative text-[#23282c]'></col>
                                            <col className='' span={1}></col>
                                        </colgroup>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left  !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Caught
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] bg-[#72e3a0] !border-b-[1px] !border-b-[#7e97a7] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'caught' && rate === 1.35 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(1.35, 'caught')}>
                                                        <span className='font-bold text-[14px] block !relative'> 1.35</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center text-[.75rem] !border-b-[1px] !border-b-[#7e97a7] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'caught' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'caught' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'caught' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Bowled
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'bowled' && rate === 4 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(4, 'bowled')}>
                                                        <span className='font-bold text-[14px] block !relative'> 4</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'bowled' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'bowled' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'bowled' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        LBW
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'lbw' && rate === 5 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(5, 'lbw')}>
                                                        <span className='font-bold text-[14px] block !relative'> 5</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'lbw' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'lbw' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'lbw' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Run Out
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'run-out' && rate === 15 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(15, 'run-out')}>
                                                        <span className='font-bold text-[14px] block !relative'> 15</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'run-out' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'run-out' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'run-out' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Stumped
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'stumped' && rate === 20 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(20, 'stumped')}>
                                                        <span className='font-bold text-[14px] block !relative'> 20</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'stumped' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'stumped' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'stumped' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Others
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'others' && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 'others')}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'others' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'others' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'others' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='p-0'>
                    <div className='!border-[1px] !border-[solid] !border-[#c8ced3] !border-b-[1px_solid_#c8ced3] rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px]'>
                        <div className='bg-[linear-gradient(180deg,#f26d1c_15%,#d14100_100%)] rounded-[.25rem] text-[.75rem] font-bold text-[#ffffff] !px-[5px] !py-[2px] border-[none] [box-shadow:inset_0_1px_#0003]' >
                            <strong className='font-bold text-[#ffffff] text-[.75rem] cursor-pointer'>  6 Over Last Digit </strong>
                            <button className=" text-[0.813rem]  bg-transparent !absolute mr-[5px] mt-[3px] !right-[10px]  text-[#ffffff]">
                                <Popover placement="left" content={() => (
                                    <p>Min/Max: 100 - 100000</p>
                                )}>
                                    <Popover placement="left" content={() => (
                                        <p>Min/Max: 100 - 100000</p>
                                    )}>
                                        <FaInfoCircle />
                                    </Popover>
                                </Popover>
                            </button>
                        </div>
                        <div id='1'>
                            <div className='p-0'>
                                <div className='rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] block w-full overflow-x-auto'>
                                    <table className='bg-[#ffffff] w-full mb-0 text-[#23282c] border-collapse overflow-y-hidden relative [caption-side:bottom]'>
                                        <colgroup className='table-column-group text-[#23282c] border-collapse'>
                                            <col className='' span={1}></col>
                                            <col span={1} width={'20%'} className='w-[11%] bg-[#72e3a0] [border-left-color:#fff] relative text-[#23282c]'></col>
                                            <col className='' span={1}></col>
                                        </colgroup>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left  !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        0
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] bg-[#72e3a0] !border-b-[1px] !border-b-[#7e97a7] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'caught' && rate === 1.35 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(1.35, 0)}>
                                                        <span className='font-bold text-[14px] block !relative'> 1.35</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center text-[.75rem] !border-b-[1px] !border-b-[#7e97a7] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 0 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 0 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 0 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        1
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 1 && rate === 4 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(4, 1)}>
                                                        <span className='font-bold text-[14px] block !relative'> 4</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 1 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 1 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 1 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        2
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 2 && rate === 5 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(5, 2)}>
                                                        <span className='font-bold text-[14px] block !relative'> 5</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 2 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 2 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 2 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        3
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 3 && rate === 15 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(15, 3)}>
                                                        <span className='font-bold text-[14px] block !relative'> 15</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 3 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 3 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 3 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        4
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 4 && rate === 20 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(20, 4)}>
                                                        <span className='font-bold text-[14px] block !relative'> 20</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 4 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 4 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 4 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        5
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 5 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 5)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 5 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 5 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 5 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        6
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 6 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 6)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 6 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 6 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 6 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        7
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 7 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 7)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 7 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 7 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 7 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        8
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 8 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 8)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 8 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 8 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 8 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        9
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 9 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 9)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 9 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 9 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 9 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
                                                                    <div className='w-full pr-[calc(var(--bs-gutter-x)* .5)] pl-[calc(var(--bs-gutter-x)* .5)] mr-auto ml-auto text-center text-[.75rem] font-bold'>
                                                                        <div className='flex relative !pl-[.5rem] !pb-0 !pr-[.5rem] text-center text-[.75rem] font-bold'>
                                                                            <div className='!pb-0 !p-[.25rem] flex-[1_0_0%] w-full mt-0'>
                                                                                <button className='leading-[36px] pt-0 pb-0 w-full bg-[#f9f9f9] border-[1px] border-[solid] border-[#333] rounded-[4px] !text-[#000000] !font-bold !text-[0.813rem] !h-[38px] !ml-[0] !mr-[5px] !my-[0] text-center' onClick={() => { setShowBetsSlip(false); setRate(''); setAmt(0) }}> Cancel </button>
                                                                            </div>
                                                                            <div className='!p-[.25rem] flex-[1_0_0%] w-full max-w-full mt-0'>
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] float-left text-[1rem] text-[#1f72ac] p-[10px] rounded-bl-[7px] rounded-tl-[7px] border-[1px]  border-[#aaaaaa] content-[""] bg-no-repeat bg-contain flex absolute items-center justify-center rounded-none'>
                                                                                    <span className='content-[""] bg-no-repeat bg-contain flex w-[20px] absolute h-[15px] text-[1.313rem] items-center justify-center leading-[28px] text-[#1f72ac]'>
                                                                                        <svg className='w-[19px] h-[19px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                                                                            <path fill="currentColor" d="M8.056,10.838H0.409V8.091h7.647 M2,8.091h16.591v2.747H8"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </button>
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='p-0'>
                    <div className='!border-[1px] !border-[solid] !border-[#c8ced3] !border-b-[1px_solid_#c8ced3] rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px]'>
                        <div className='bg-[linear-gradient(180deg,#f26d1c_15%,#d14100_100%)] rounded-[.25rem] text-[.75rem] font-bold text-[#ffffff] !px-[5px] !py-[2px] border-[none] [box-shadow:inset_0_1px_#0003]' >
                            <strong className='font-bold text-[#ffffff] text-[.75rem] cursor-pointer'>  Will There Be Tie ?  </strong>
                            <button className=" text-[0.813rem]  bg-transparent !absolute mr-[5px] mt-[3px] !right-[10px]  text-[#ffffff]">
                                <Popover placement="left" content={() => (
                                    <p>Min/Max: 100 - 100000</p>
                                )}>
                                    <Popover placement="left" content={() => (
                                        <p>Min/Max: 100 - 100000</p>
                                    )}>
                                        <FaInfoCircle />
                                    </Popover>
                                </Popover>
                            </button>
                        </div>
                        <div id='2'>
                            <div className='!p-0 relative flex-auto text-[.75rem] [word-wrap:break-word]'>
                                <div className='flex bg-[linear-gradient(90deg,_#82dda6cc,_#82ddb059_49%,_#82dda6cc)] relative mb-0'>
                                    <div className='!pl-[.25rem] !pr-[.25rem] flex-[0_0_auto] w-1/2 max-w-full mt-0'>
                                        <div className='flex flex-col items-center p-[4px] !relative'>
                                            <div className='text-[.75rem] font-bold text-center block'>Yes</div>
                                            <div className={`cursor-pointer px-[0] py-[2px] w-[125px] border-[1px] border-[solid] border-[white] rounded-[3px] relative ${rate == 1.75 ? `!bg-[#16a660] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080!important]` : `bg-[#72e3a0]`}`}>
                                                <button className='w-full flex items-center justify-center flex-col' onClick={() => selectRate(1.75)}>
                                                    <span className='font-bold !relative [color:inherit]'>1.75</span>
                                                    <span className='text-[0.688rem] !relative [color:inherit]'>1M</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='!pl-[.25rem] !pr-[.25rem] flex-[0_0_auto] w-1/2 max-w-full mt-0'>
                                        <div className='flex flex-col items-center p-[4px] !relative'>
                                            <div className='text-[.75rem] font-bold text-center block'>No</div>
                                            <div className={`cursor-pointer px-[0] py-[2px] w-[125px] border-[1px] border-[solid] border-[white] rounded-[3px] relative ${rate == 2.18 ? `!bg-[#16a660] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080!important]` : `bg-[#72e3a0]`}`}>
                                                <button className='w-full flex items-center justify-center flex-col' onClick={() => selectRate(2.18)}>
                                                    <span className='font-bold !relative [color:inherit]'>2.18</span>
                                                    <span className='text-[0.688rem] !relative [color:inherit]'>1M</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {showBetsSlip && (
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
                                                            <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                            <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                    <div className={`grid grid-cols-12 border-t-[1px] ${type == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                )
                                }
                            </div>

                        </div>
                    </div>

                </div>

            </div >



            {/* Mobile */}
            <div div className='lg:hidden' >
                <div className='mt-[30.2px] bg-[linear-gradient(180deg,#f26d1c_15%,#d14100_100%)] flex justify-center items-center h-[30px]'>
                    <ul className='w-auto bg-[#ffffff80] rounded-[5px] mx-[0] my-[3px] justify-center items-center p-0 cursor-pointer flex whitespace-nowrap [word-wrap:break-word]'>
                        <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                            <button className='bg-[#ffffff] !text-[#000000] no-underline text-[.75rem] min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] font-bold rounded-[4px] box-border block text-center'>ALL</button>
                        </li>
                        <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                            <button className='min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] text-[#000] text-[.75rem] font-bold rounded-[4px] box-border block text-center'>Fancy</button>
                        </li>
                        <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                            <button className='min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] text-[#000] text-[.75rem] font-bold rounded-[4px] box-border block text-center'>Line Markets</button>
                        </li>
                        <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                            <button className='min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] text-[#000] text-[.75rem] font-bold rounded-[4px] box-border block text-center'>Ball by Ball</button>
                        </li>
                        <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                            <button className='min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] text-[#000] text-[.75rem] font-bold rounded-[4px] box-border block text-center'>Meter </button>
                        </li>
                        <li className='pl-[0] pr-[4px] py-[0] [list-style:none] whitespace-nowrap [word-wrap:break-word]'>
                            <button className='min-w-[unset] px-[5px] py-[0] leading-[22px] h-[22px] text-[#000] text-[.75rem] font-bold rounded-[4px] box-border block text-center'>Khado </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=' lg:hidden mb-0 border-[1px] border-[solid] border-[#c8ced3] border-b-[1px_solid_#c8ced3] rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] [text-align:initial] whitespace-nowrap'>
                <div className='p-0'>
                    <div className='!border-[1px] !border-[solid] !border-[#c8ced3] !border-b-[1px_solid_#c8ced3] rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px]'>
                        <div className='bg-[linear-gradient(180deg,#f26d1c_15%,#d14100_100%)] rounded-[.25rem] text-[.75rem] font-bold text-[#ffffff] !px-[5px] !py-[2px] border-[none] [box-shadow:inset_0_1px_#0003]' >
                            <strong className='font-bold text-[#ffffff] text-[.75rem] cursor-pointer'>BAN W 1st Wicket Dismissal Method ADV</strong>
                            <button className=" text-[0.813rem]  bg-transparent !absolute mr-[5px] mt-[3px] !right-[10px]  text-[#ffffff]">
                                <Popover placement="left" content={() => (
                                    <p>Min/Max: 100 - 100000</p>
                                )}>
                                    <FaInfoCircle />
                                </Popover>
                            </button>
                        </div>
                        <div id='0'>
                            <div className='p-0'>
                                <div className='rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] block w-full overflow-x-auto'>
                                    <table className='bg-[#ffffff] w-full mb-0 text-[#23282c] border-collapse overflow-y-hidden relative [caption-side:bottom]'>
                                        <colgroup className='table-column-group text-[#23282c] border-collapse'>
                                            <col className='' span={1}></col>
                                            <col span={1} width={'20%'} className='min-w-[40px] bg-[#72e3a0] [border-left-color:#fff] relative text-[#23282c]'></col>
                                            <col className='' span={1}></col>
                                        </colgroup>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className=' text-left min-w-[165px] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent  [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Caught
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={` w-[32%] min-w-[32%] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none]   [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'caught' && rate === 1.35 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(1.35, 'caught')}>
                                                        <span className='font-bold text-[14px] block !relative'> 1.35</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center text-[.75rem] !border-b-[1px] !border-b-[#7e97a7] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'caught' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'caught' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'caught' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={` grid grid-cols-12 relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Bowled
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] min-w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b  [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'bowled' && rate === 4 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(4, 'bowled')}>
                                                        <span className='font-bold text-[14px] block !relative'> 4</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'bowled' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'bowled' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'bowled' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`grid grid-cols-12  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className=' border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        LBW
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] min-w-[32%] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none]   [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'lbw' && rate === 5 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(5, 'lbw')}>
                                                        <span className='font-bold text-[14px] block !relative'> 5</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'lbw' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'lbw' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'lbw' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={` grid grid-cols-12 relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>

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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Run Out
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] min-w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'run-out' && rate === 15 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(15, 'run-out')}>
                                                        <span className='font-bold text-[14px] block !relative'> 15</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'run-out' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'run-out' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'run-out' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`grid grid-cols-12  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px]  !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Stumped
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] min-w-[32%]  bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none]   [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'stumped' && rate === 20 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(20, 'stumped')}>
                                                        <span className='font-bold text-[14px] block !relative'> 20</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'stumped' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'stumped' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'stumped' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={` grid grid-cols-12 relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        Others
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] min-w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'others' && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 'others')}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 'others' && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'others' ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'others' ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={` grid grid-cols-12 relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>


                <div className='p-0'>
                    <div className='!border-[1px] !border-[solid] !border-[#c8ced3] !border-b-[1px_solid_#c8ced3] rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px]'>
                        <div className='bg-[linear-gradient(180deg,#f26d1c_15%,#d14100_100%)] rounded-[.25rem] text-[.75rem] font-bold text-[#ffffff] !px-[5px] !py-[2px] border-[none] [box-shadow:inset_0_1px_#0003]' >
                            <strong className='font-bold text-[#ffffff] text-[.75rem] cursor-pointer'>  6 Over Last Digit </strong>
                            <button className=" text-[0.813rem]  bg-transparent !absolute mr-[5px] mt-[3px] !right-[10px]  text-[#ffffff]">
                                <Popover placement="left" content={() => (
                                    <p>Min/Max: 100 - 100000</p>
                                )}>
                                    <FaInfoCircle />
                                </Popover>
                            </button>
                        </div>
                        <div id='1'>
                            <div className='p-0'>
                                <div className='rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] block w-full overflow-x-auto'>
                                    <table className='bg-[#ffffff] w-full mb-0 text-[#23282c] border-collapse overflow-y-hidden relative [caption-side:bottom]'>
                                        <colgroup className='table-column-group text-[#23282c] border-collapse'>
                                            <col className='' span={1}></col>
                                            <col span={1} width={'20%'} className='bg-[#72e3a0] [border-left-color:#fff] relative text-[#23282c]'></col>
                                            <col className='' span={1}></col>
                                        </colgroup>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        0
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] bg-[#72e3a0] !border-b-[1px] !border-b-[#7e97a7] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 'caught' && rate === 1.35 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(1.35, 0)}>
                                                        <span className='font-bold text-[14px] block !relative'> 1.35</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center text-[.75rem] !border-b-[1px] !border-b-[#7e97a7] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 0 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 0 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 0 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={` grid grid-cols-12 relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        1
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 1 && rate === 4 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(4, 1)}>
                                                        <span className='font-bold text-[14px] block !relative'> 4</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 1 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 1 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 1 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`grid grid-cols-12  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        2
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b  [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 2 && rate === 5 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(5, 2)}>
                                                        <span className='font-bold text-[14px] block !relative'> 5</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 2 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 2 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 2 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`grid grid-cols-12  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        3
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b  [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 3 && rate === 15 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(15, 3)}>
                                                        <span className='font-bold text-[14px] block !relative'> 15</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 3 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 3 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 3 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={` grid grid-cols-12 relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        4
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b  [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 4 && rate === 20 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(20, 4)}>
                                                        <span className='font-bold text-[14px] block !relative'> 20</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 4 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 4 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 4 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={` grid grid-cols-12 relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>

                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        5
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 5 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 5)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 5 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 5 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 5 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={` grid grid-cols-12 relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left  min-w-[165px]  !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        6
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b  [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 6 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 6)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 6 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 6 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 6 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={` grid grid-cols-12 relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left min-w-[165px] !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        7
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[32%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 7 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 7)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 7 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 7 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 7 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`grid grid-cols-12  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        8
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 8 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 8)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 8 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 8 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 8 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`grid grid-cols-12  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                        <tbody className='[vertical-align:inherit] text-[#23282c] border-collapse'>
                                            <tr className='!border-b-[1px] !border-b-[#7e97a7] text-[#23282c] border-collapse'>
                                                <td className='text-left !border-b-[1px] !border-b-[#7e97a7] !pl-[6px] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] w-[66%] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent]'>
                                                    <span className='text-[.75rem] block font-bold text-[#23282c] p-0 text-left'>
                                                        9
                                                    </span>
                                                </td>
                                                <td colSpan={2} className={`w-[11%] !border-b-[1px] !border-b-[#7e97a7] bg-[#72e3a0] text-center text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] border-b !relative [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse ${type == 9 && rate === 100 && '!bg-[#16a660] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-center text-[.75rem] font-bold' onClick={(e) => selectRate(100, 9)}>
                                                        <span className='font-bold text-[14px] block !relative'> 100</span>
                                                        <span className='block font-normal text-[0.688rem] !relative text-center'> 100K </span>
                                                    </button>
                                                </td>
                                                <td className='hidden text-center !border-b-[1px] !border-b-[#7e97a7] text-[.75rem] !px-[0] !py-[2.5px] font-bold align-middle border-t-[none] bg-transparent border-b-[var(--bs-border-width)] [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-collapse'></td>
                                            </tr>
                                            {showBetsSlip && type === 9 && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 9 ? 'bg-[#d3edd0] border-b-[1px_solid_#7e97a7]' : 'bg-[#d3edd0]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 9 ? 'bg-[#d3edd0]' : 'bg-[#d3edd0]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                                                <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                                        <div className={`grid grid-cols-12  relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='p-0'>
                    <div className='!border-[1px] !border-[solid] !border-[#c8ced3] !border-b-[1px_solid_#c8ced3] rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px]'>
                        <div className='bg-[linear-gradient(180deg,#f26d1c_15%,#d14100_100%)] rounded-[.25rem] text-[.75rem] font-bold text-[#ffffff] !px-[5px] !py-[2px] border-[none] [box-shadow:inset_0_1px_#0003]' >
                            <strong className='font-bold text-[#ffffff] text-[.75rem] cursor-pointer'>  Will There Be Tie ?  </strong>
                            <button className=" text-[0.813rem]  bg-transparent !absolute mr-[5px] mt-[3px] !right-[10px]  text-[#ffffff]">
                                <Popover placement="left" content={() => (
                                    <p>Min/Max: 100 - 100000</p>
                                )}>
                                    <FaInfoCircle />
                                </Popover>
                            </button>
                        </div>
                        <div id='2'>
                            <div className='!p-0 relative flex-auto text-[.75rem] [word-wrap:break-word]'>
                                <div className='flex bg-[linear-gradient(90deg,_#82dda6cc,_#82ddb059_49%,_#82dda6cc)] relative mb-0'>
                                    <div className='!pl-[.25rem] !pr-[.25rem] flex-[0_0_auto] w-1/2 max-w-full mt-0'>
                                        <div className='flex flex-col items-center p-[4px] !relative'>
                                            <div className='text-[.75rem] font-bold text-center block'>Yes</div>
                                            <div className={`cursor-pointer px-[0] py-[2px] w-[125px] border-[1px] border-[solid] border-[white] rounded-[3px] relative ${rate == 1.75 ? `!bg-[#16a660] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080!important]` : `bg-[#72e3a0]`}`}>
                                                <button className='w-full flex items-center justify-center flex-col' onClick={() => selectRate(1.75)}>
                                                    <span className='font-bold !relative [color:inherit]'>1.75</span>
                                                    <span className='text-[0.688rem] !relative [color:inherit]'>1M</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='!pl-[.25rem] !pr-[.25rem] flex-[0_0_auto] w-1/2 max-w-full mt-0'>
                                        <div className='flex flex-col items-center p-[4px] !relative'>
                                            <div className='text-[.75rem] font-bold text-center block'>No</div>
                                            <div className={`cursor-pointer px-[0] py-[2px] w-[125px] border-[1px] border-[solid] border-[white] rounded-[3px] relative ${rate == 2.18 ? `!bg-[#16a660] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080!important]` : `bg-[#72e3a0]`}`}>
                                                <button className='w-full flex items-center justify-center flex-col' onClick={() => selectRate(2.18)}>
                                                    <span className='font-bold !relative [color:inherit]'>2.18</span>
                                                    <span className='text-[0.688rem] !relative [color:inherit]'>1M</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {showBetsSlip && (
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
                                                            <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
                                                            <button className='bg-[#b2bcc5] !opacity-[.65] pointer-events-none h-[40px] w-[40px] leading-[28px] text-[1rem] text-[#1f72ac] p-[10px] bg-no-repeat bg-contain inline-flex border-[1px]  border-[#aaaaaa] absolute !rounded-tl-[0] !rounded-br-[7px] !rounded-tr-[7px] !rounded-bl-[0] !float-right'>
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


                                                    <div className={`grid grid-cols-12 border-t-[1px] ${type == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                )
                                }
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}


export default Sportsbook;
