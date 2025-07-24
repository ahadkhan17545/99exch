import '../../App.css'
import {  useState } from 'react';
function Fancy({ fancy }) {

    const [rate, setRate] = useState('')
    const [type, setType] = useState('yes')
    const [amt, setAmt] = useState('')
    const [size, setSize] = useState('')

    const [showBetsSlip, setShowBetsSlip] = useState(false);
    const [selectedRowIndex, setSelectedRowIndex] = useState('');
    const [showMinMax, setShowMinMax] = useState(false)

    const selectRate = (price, size, type, row) => {
        setType(type);
        setSize(size);
        setRate(price);
        setShowBetsSlip(true);
        setSelectedRowIndex(row);
    };

    return (
        <>
            {/* Desktop */}
            <div className='hidden lg:block'>
                <div className='mt-[30.1px] bg-[linear-gradient(180deg,#0a92a5_15%,#076875_100%)] flex justify-center items-center h-[30px]'>
                    <ul className='!ml-[21px] !mr-[0] !my-[3px] w-auto bg-[#ffffff80] rounded-[5px] justify-center items-center p-0 cursor-pointer flex'>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='bg-[#ffffff] !text-[#000000] no-underline text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>ALL</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Fancy</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Line Markets</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Ball by Ball</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Meter Markets</button>
                        </li>
                        <li className='[list-style:none] p-[2px] cursor-pointer [word-wrap:break-word]'>
                            <button className='text-[#000] text-[.75rem] min-w-[70px] h-[18px] leading-[18px] font-bold rounded-[4px] box-border px-[5px] py-[0] block text-center'>Khado Markets</button>
                        </li>

                    </ul>

                </div>
            </div>

            <div className='hidden lg:block rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] relative flex flex-col min-w-[0] [word-wrap:break-word] -mt-[2px] p-0 bg-none'>
                <div className='p-0 text-[.75rem] bg-[#0c92a5] border-[none] rounded-[unset] text-[#fff] cursor-pointer mb-0'></div>
                <div className='!p-0 flex-auto [word-wrap:break-word]'>
                    <div className='rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] block w-full overflow-x-auto'>
                        <div >
                            <table className='text-[.75rem] mb-0 bg-[#ffffff] w-full text-[#23282c] border-collapse'>
                                <thead className='align-bottom text-[12px] text-[#23282c]'>
                                    <tr className='align-bottom text-[#23282c] border-collapse'>
                                        <th className=' align-bottom w-3/5 p-[5px] border-t-[none] text-center [box-shadow:inset_0_0_0_9999px_transparent] min-w-[99px] border-b-[1px] border-b-[#7e97a7]' colSpan={2} >
                                        </th>
                                        <th className=' align-bottom bg-[#faa9ba]  p-[5px] border-t-[none] text-center min-w-[99px] border-b-[1px] border-b-[#7e97a7]'> No </th>
                                        <th className=' align-bottom bg-[#72bbef] ] p-[5px] border-t-[none] text-center [box-shadow:inset_0_0_0_9999px_transparent] min-w-[99px] border-b-[1px] border-b-[#7e97a7]'> Yes </th>
                                        <th className=' align-bottom p-[5px] border-t-[none] text-center !text-[#577c94] bg-transparent [box-shadow:inset_0_0_0_9999px_transparent] min-w-[99px] border-b-[1px] border-b-[#7e97a7]'> Min/Max </th>
                                    </tr>
                                </thead>
                                <tbody className='[vertical-align:inherit] text-[.75rem] text-[#23282c] border-collapse'>
                                    {fancy.map((fancy, index) => (
                                        <>
                                            <tr className='text-[.75rem] text-[#23282c] border-collapse'>
                                                <td className='text-left max-w-[165px] align-middle !pl-[6px] border-t-[none] text-[.75rem] !px-[0] !py-[2.5px] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-b-[1px] border-b-[#7e97a7]'>
                                                    <span className='!text-[.75rem] !block !font-bold whitespace-normal overflow-hidden overflow-ellipsis max-w-[275px] !text-[#23282c]'>{fancy.runner_name}</span>
                                                </td>
                                                <td className='relative align-middle text-center font-bold border-t-[none] text-[.75rem] !px-[0] !py-[2.5px] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent] border-b-[1px] border-b-[#7e97a7]'>
                                                    <button className=' border-[linear-gradient(-180deg,#2E4B5E0%,#243A4882%)] !text-[#ffffff] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] font-bold text-[.75rem] px-[10px] py-[4px] inline-block text-center align-middle leading-normal rounded-[.25rem] [transition:color_.15s_ease-in-out,_background-color_.15s_ease-in-out,_border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out]'> Book </button>
                                                </td>

                                                <td className={`w-[10%]  bg-[#faa9ba]  text-center font-bold border-t-[none] align-top text-[.75rem] !px-[0] !py-[2.5px] relative border-b [box-shadow:inset_0_0_0_9999px_transparent] border-b-[1px] border-b-[#7e97a7] ${type == 'no' && rate == Number(fancy.lay_price1) && Number(fancy.lay_price1) > 0 && selectedRowIndex == index && '!bg-[#f4496d] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-[inherit] text-center font-bold text-[.75rem]' onClick={(e) =>
                                                        selectRate(Number(fancy.lay_price1), Number(fancy.lay_size1), 'no', index)
                                                    }>
                                                        {Number(fancy.lay_price1)}
                                                        <span className='block font-normal text-[0.688rem] min-w-[50px]'> {Number(fancy.lay_size1)} </span>
                                                    </button>
                                                </td>

                                                <td className={`w-[10%]  bg-[#72bbef]  text-center font-bold border-t-[none] align-top text-[.75rem] !px-[0] !py-[2.5px] relative border-b [box-shadow:inset_0_0_0_9999px_transparent] border-b-[1px] border-b-[#7e97a7] ${type == 'yes' && rate == Number(fancy.back_price1) && Number(fancy.back_price1) > 0 && selectedRowIndex == index && '!bg-[#1a8ee1] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    {fancy.game_status != '' && (
                                                        <div className='p-[10px] w-[200%] right-[0] top-[0] bg-[#243a4866] absolute pointer-events-none h-full text-[#ffffff] flex justify-center items-center text-center font-bold text-[.75rem]'>
                                                            <span className='block font-normal text-[0.688rem] opacity-[.8] text-[#ffffff] [text-shadow:0_1px_4px_rgba(0,_0,_0,_.5)] text-center normal-case min-w-[50px] flex-[auto]'> {fancy.game_status} </span>
                                                        </div>
                                                    )}
                                                    <button className='text-[inherit] text-center font-bold text-[12px]' onClick={(e) =>
                                                        selectRate(Number(fancy.back_price1), Number(fancy.back_size1), 'yes', index)}
                                                    >
                                                        {Number(fancy.back_price1)}
                                                        <span className='block font-normal text-[0.688rem] min-w-[50px] text-[inherit] text-center'> {Number(fancy.back_size1)} </span>
                                                    </button>
                                                </td>
                                                <td className='align-middle text-center font-bold border-t-[none] text-[12px] !px-[0] !py-[2.5px] !text-[#000000] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent] border-b-[1px] border-b-[#7e97a7]'> 100 - 300000 </td>
                                            </tr>
                                            {showBetsSlip && selectedRowIndex === index && (
                                                < tr >
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'yes' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'yes' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="text" value={`${rate}/${size}`} placeholder="0" />
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


                                                                        <div className={` border-t-[1px] ${type == 'yes' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                </div>
            </div>

            {/* Mobile */}
            <div className='lg:hidden'>
                <div className='mt-[30.2px] bg-[linear-gradient(180deg,#0a92a5_15%,#076875_100%)] flex justify-center items-center h-[30px]'>
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

            <div className='lg:hidden rounded-tl-[4px] rounded-br-[2px] rounded-tr-[4px] rounded-bl-[2px] relative flex flex-col min-w-[0] [word-wrap:break-word] -mt-[2px] p-0 bg-none'>
                <div className='p-0 text-[.75rem] bg-[#0c92a5] border-[none] rounded-[unset] text-[#fff] cursor-pointer mb-0'></div>
                <div className='!p-0 flex-auto [word-wrap:break-word]'>
                    <div className='rounded-[0] block w-full overflow-x-auto'>
                        <div >
                            <table className='text-[.75rem] mb-0 bg-[#ffffff] w-full text-[#23282c] border-collapse'>
                                <thead className='align-bottom text-[12px] text-[#23282c]'>
                                    <tr className='align-bottom text-[#23282c] border-collapse'>
                                        <th className=' align-bottom w-[60%] p-[5px] border-t-[none] text-center [box-shadow:inset_0_0_0_9999px_transparent] min-w-[99px] border-b-[1px] border-b-[#7e97a7]' colSpan={2} >
                                        </th>
                                        <th className=' align-bottom bg-[#faa9ba]  p-[5px] border-t-[none] text-center min-w-[40px] border-b-[1px] border-b-[#7e97a7]'> No </th>
                                        <th className=' align-bottom bg-[#72bbef] ] p-[5px] border-t-[none] text-center [box-shadow:inset_0_0_0_9999px_transparent] min-w-[40px] border-b-[1px] border-b-[#7e97a7]'> Yes </th>
                                    </tr>
                                </thead>
                                <tbody className='[vertical-align:inherit] text-[.75rem] text-[#23282c] border-collapse'>
                                    {fancy.map((fancy, index) => (
                                        <>
                                            <tr className='text-[.75rem] text-[#23282c] border-collapse'>
                                                <td className='text-left max-w-[165px] align-middle !pl-[6px] border-t-[none] text-[.75rem] !px-[0] !py-[2.5px] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent] text-[#23282c] border-b-[1px] border-b-[#7e97a7]'>
                                                    <span className='!text-[.75rem] !block !font-bold whitespace-normal overflow-hidden overflow-ellipsis max-w-[275px] !text-[#23282c]'>{fancy.runner_name}</span>
                                                </td>
                                                <td className='relative align-middle text-center font-bold border-t-[none] text-[.75rem] !px-[0] !py-[2.5px] bg-transparent border-b [box-shadow:inset_0_0_0_9999px_transparent] border-b-[1px] border-b-[#7e97a7]'>
                                                    <button className='text-[#000] flex h-[100%] p-[0] ml-[0] mr-[5px] my-[0] [line-height:inherit] items-center justify-center float-right' onClick={() => {
                                                        setSelectedRowIndex(index)
                                                        setShowMinMax(true)
                                                    }
                                                    }>
                                                        <svg className='w-[20px] h-[20px] bg-no-repeat ml-[14px] my-[8px] bg-contain block  [text-indent:-99999px] ' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                                            <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                                                        </svg>
                                                    </button>
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
                                                <td className={`w-[16%] h-[43px] min-w-[40px] bg-[#faa9ba]  text-center font-bold border-t-[none] align-top text-[.75rem] !px-[0] !py-[2.5px] relative border-b-[1px] border-b-[#7e97a7] ${type == 'no' && rate == 115 && '!bg-[#f4496d] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    <button className='text-[inherit] text-center font-bold text-[.75rem]' onClick={(e) =>
                                                        selectRate(Number(fancy.lay_price1), Number(fancy.lay_size1), 'no', index)
                                                    }>
                                                        {Number(fancy.lay_price1)}
                                                        <span className='block font-normal text-[0.688rem] min-w-[50px]'> {Number(fancy.lay_size1)} </span>
                                                    </button>
                                                </td>
                                                <td className={`w-[16%] h-[43px] min-w-[40px] bg-[#72bbef]  text-center font-bold border-t-[none] align-top text-[.75rem] !px-[0] !py-[2.5px] relative border-b text-[#23282c] [box-shadow:inset_0_0_0_9999px_transparent] border-b-[1px] border-b-[#7e97a7] ${type == 'yes' && rate == 116 && '!bg-[#1a8ee1] !text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                                    {fancy.game_status != '' && (
                                                        <div className='p-[10px] w-[200%] right-[0] top-[0] bg-[#243a4866] absolute pointer-events-none h-full text-[#ffffff] flex justify-center items-center text-center font-bold text-[.75rem]'>
                                                            <span className='block font-normal text-[0.688rem] opacity-[.8] text-[#ffffff] [text-shadow:0_1px_4px_rgba(0,_0,_0,_.5)] text-center normal-case min-w-[50px] flex-[auto]'> Ballrun </span>
                                                        </div>
                                                    )}
                                                    <button className='text-[inherit] text-center font-bold text-[12px]' onClick={(e) =>
                                                        selectRate(Number(fancy.back_price1), Number(fancy.back_size1), 'yes', index)}
                                                    >
                                                        {Number(fancy.back_price1)}
                                                        <span className='block font-normal text-[0.688rem] min-w-[50px] text-[inherit] text-center'> {Number(fancy.back_size1)} </span>
                                                    </button>
                                                </td>
                                            </tr>
                                            {showBetsSlip && selectedRowIndex === index && (
                                                <tr>
                                                    <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'yes' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                                        <div className='text-center text-[12px]'>
                                                            <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                                <div className={`${type == 'yes' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
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
                                                                                <input className='!bg-[#b2bcc5] !opacity-[.65] pointer-events-none text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="text" value={`${rate}/${size}`} placeholder="0" />
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


                                                                        <div className={`grid grid-cols-12 border-t-[1px] ${type == 'yes' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
            </div>
        </>
    )

}


export default Fancy;
