import '../../App.css'
import {  useState } from 'react';
function TiedMatch() {

    const [rate, setRate] = useState('')
    const [type, setType] = useState('back')
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
            <div className='hidden lg:block mt-[6px] !mb-4 text-[0.75rem] relative flex flex-col min-w-[0] [word-wrap:break-word] bg-[linear-gradient(180deg,_#ffffff,_#ffffff_42%)] bg-clip-border border-[1px] border-[solid] border-[#c8ced3] rounded-[.25rem]'>
                <div className='bg-[#ffffff] text-[#000000] border-[none] p-0 text-[13px] border-b-[1px] border-b-[#7e97a7] flex [word-wrap:break-word]'>
                    <strong className='h-[30px] leading-[30px] text-[#ffffff] float-left font-bold pr-[30px] pl-[10px] relative bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-tr-[15px] text-[0.75rem] !w-auto'>
                        Tied Match
                        <span className='ml-[.5rem] text-[.75rem] cursor-pointer leading-[30px] text-[#ffffff] font-bold'>
                            <svg className='w-[15px] h-[15px] absolute right-[8px] text-[#ffffff] top-[8px] inline-block' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                            </svg>
                        </span>
                    </strong>

                    <span className='px-[0] py-[5px] float-right text-[0.813rem] text-end bg-transparent w-[237px] !absolute !right-[0] !pr-[10px] text-[#000000]'>
                        Matched
                        <span className='font-bold text-[0.813rem] text-[#000000]'> € 2.5M</span>
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
                                <tr className='relative border-b-[1px] border-b-[#7e97a7]'>
                                    <td className='text-left pl-[6px] align-middle text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                        <span className='text-[.75rem] block !font-bold !text-[#23282c] text-left'>Yes</span>
                                        {amt > 0 && (
                                            <span className='font-normal text-[0.688rem] flex text-left'>
                                                <span className='block font-normal text-[0.688rem] text-left'>
                                                    <span className='flex p-0 font-normal text-[0.688rem] text-left'>
                                                        <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex text-left'>
                                                            <span className='block text-[0.688rem] !text-[#228b22] !font-bold text-left'>&nbsp;(230.00)</span>
                                                        </span>

                                                    </span>
                                                </span>
                                            </span>
                                        )}
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative  [border-left-color:#fff] bg-[#d7e8f4] ${type == 'back' && rate == '3.3' && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(3.3, 'back', 1)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>3.3</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>813.63</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#b7d5eb] [border-left-color:#fff] ${type == 'back' && rate == '3.35' && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(3.35, 'back', 1)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>3.35</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>1.2K</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#72bbef] [border-left-color:#fff] ${type == 'back' && rate == '3.4' && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(3.4, 'back', 1)}>
                                            <span span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]' > 3.4</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>450.8</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#faa9ba] [border-left-color:#fff] ${type == 'lay' && rate == '3.45' && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(3.45, 'lay', 1)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>3.45</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>619.17</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#efd3d9] [border-left-color:#fff] ${type == 'lay' && rate == '3.5' && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(3.5, 'lay', 1)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>3.5</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>14.8K</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#f6e6ea] [border-left-color:#fff] ${type == 'lay' && rate == '3.3' && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[3px] font-bold' onClick={(e) => selectRate(3.3, 'lay', 1)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>3.55</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>131.3</span>
                                        </button>
                                    </td>
                                </tr>

                                {showBetsSlip && selectedRowIndex === 1 && (
                                    < tr >
                                        <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                            <div className='text-center text-[12px]'>
                                                <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                    <div className={`${type == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
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
                                                                    <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
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


                                                            <div className={`border-t-[1px] ${type == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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
                                <tr className='relative border-b-[1px] border-b-[#7e97a7]'>
                                    <td className='text-left pl-[6px] align-middle text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                        <span className='text-[.75rem] block !font-bold !text-[#23282c] text-left'> No </span>
                                        {amt > 0 && (
                                            <span className='font-normal text-[0.688rem] flex text-left'>
                                                <span className='block font-normal text-[0.688rem] text-left'>
                                                    <span className='flex p-0 font-normal text-[0.688rem] text-left'>
                                                        <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex text-left'>
                                                            <span className='block text-[0.688rem] !text-[#228b22] !font-bold text-left'>&nbsp;(230.00)</span>
                                                        </span>

                                                    </span>
                                                </span>
                                            </span>
                                        )}
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative  [border-left-color:#fff] bg-[#d7e8f4] ${type == 'back' && rate == '5.4' && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(5.4, 'back', 2)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>5.4</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>813.63</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#b7d5eb] [border-left-color:#fff] ${type == 'back' && rate == '5.5' && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(5.5, 'back', 2)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>5.5</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>1.2K</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#72bbef] [border-left-color:#fff] ${type == 'back' && rate == '5.6' && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(5.6, 'back', 2)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>5.6</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>450.8</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#faa9ba] [border-left-color:#fff] ${type == 'lay' && rate == '5.7' && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(5.7, 'lay', 2)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>5.7</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>619.17</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#efd3d9] [border-left-color:#fff] ${type == 'lay' && rate == '5.8' && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(5.8, 'lay', 2)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>5.8</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>14.8K</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#f6e6ea] [border-left-color:#fff] ${type == 'lay' && rate == '5.9' && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[3px] font-bold' onClick={(e) => selectRate(5.9, 'lay', 2)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>5.9</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>131.3</span>
                                        </button>
                                    </td>
                                </tr>

                                {showBetsSlip && selectedRowIndex === 2 && (
                                    <tr>
                                        <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                            <div className='text-center text-[12px]'>
                                                <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                    <div className={`${type == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
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
                                                                    <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
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


                                                            <div className={`border-t-[1px] ${type == 'back' ? 'border-t-[#7dbbe9]' : 'border-t-[#dfa3b3]'}    relative !pb-0 !pt-0 !p-[.5rem] flex flex-wrap`}>
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


            <div className=' lg:hidden mt-[6px] !mb-4 text-[0.75rem] relative flex flex-col min-w-[0] [word-wrap:break-word] bg-[linear-gradient(180deg,_#ffffff,_#ffffff_42%)] bg-clip-border border-[1px] border-[solid] border-[#c8ced3] rounded-[.25rem]'>
                <div className='bg-[#ffffff] text-[#000000] border-[none] p-0 text-[13px] border-b-[1px] border-b-[#7e97a7] flex [word-wrap:break-word]'>
                    <strong className='h-[30px] leading-[30px] text-[#ffffff] float-left font-bold pr-[30px] pl-[10px] relative bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] rounded-tr-[15px] text-[0.75rem] !w-auto'>
                        Tied Match
                        <span className='ml-[.5rem] text-[.75rem] cursor-pointer leading-[30px] text-[#ffffff] font-bold'>
                            <svg className='w-[15px] h-[15px] absolute right-[8px] text-[#ffffff] top-[8px] inline-block' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                <path fill="currentColor" fillRule="evenodd" d="M6.76 5.246V3.732h1.48v1.514H6.76zm.74 8.276a5.86 5.86 0 0 0 3.029-.83 5.839 5.839 0 0 0 2.163-2.163 5.86 5.86 0 0 0 .83-3.029 5.86 5.86 0 0 0-.83-3.029 5.839 5.839 0 0 0-2.163-2.163 5.86 5.86 0 0 0-3.029-.83 5.86 5.86 0 0 0-3.029.83A5.839 5.839 0 0 0 2.308 4.47a5.86 5.86 0 0 0-.83 3.029 5.86 5.86 0 0 0 .83 3.029 5.839 5.839 0 0 0 2.163 2.163 5.86 5.86 0 0 0 3.029.83zM7.5 0c1.37 0 2.638.343 3.804 1.028a7.108 7.108 0 0 1 2.668 2.668A7.376 7.376 0 0 1 15 7.5c0 1.37-.343 2.638-1.028 3.804a7.108 7.108 0 0 1-2.668 2.668A7.376 7.376 0 0 1 7.5 15a7.376 7.376 0 0 1-3.804-1.028 7.243 7.243 0 0 1-2.668-2.686A7.343 7.343 0 0 1 0 7.5c0-1.358.343-2.62 1.028-3.786a7.381 7.381 0 0 1 2.686-2.686A7.343 7.343 0 0 1 7.5 0zm-.74 11.268V6.761h1.48v4.507H6.76z"></path>
                            </svg>
                        </span>
                    </strong>

                    <span className='px-[0] py-[5px] float-right text-[0.688rem] text-end bg-transparent w-[115px] !absolute !right-[0] !pr-[10px] text-[#000000]'>
                        Matched
                        <span className='font-bold text-[0.688rem] text-[#000000]'> € 2.5M</span>
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
                                <tr className='relative border-b-[1px]  border-b-[#7e97a7]'>
                                    <td className='text-left pl-[6px] align-middle text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                        <span className='text-[0.813rem] block !font-bold !text-[#23282c] text-left'>Yes</span>
                                        {amt > 0 && (
                                            <span className='font-normal text-[0.688rem] flex text-left'>
                                                <span className='block font-normal text-[0.688rem] text-left'>
                                                    <span className='flex p-0 font-normal text-[0.688rem] text-left'>
                                                        <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex text-left'>
                                                            <span className='block text-[0.688rem] !text-[#228b22] !font-bold text-left'>&nbsp;(230.00)</span>
                                                        </span>

                                                    </span>
                                                </span>
                                            </span>
                                        )}
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#72bbef] [border-left-color:#fff] ${type == 'back' && rate == '3.4' && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(3.4, 'back', 1)}>
                                            <span span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]' > 3.4</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>450.8</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#faa9ba] [border-left-color:#fff] ${type == 'lay' && rate == '3.45' && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(3.45, 'lay', 1)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>3.45</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>619.17</span>
                                        </button>
                                    </td>
                                </tr>

                                {showBetsSlip && selectedRowIndex === 1 && (
                                    < tr >
                                        <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                            <div className='text-center text-[12px]'>
                                                <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                    <div className={`${type == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
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
                                                                    <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
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
                                        </td>
                                    </tr>
                                )}
                                <tr className='relative border-b-[1px] border-b-[#7e97a7]'>
                                    <td className='text-left pl-[6px] align-middle text-[.75rem] px-[0] py-[1.5px] font-bold border-t-[none] bg-transparent border-b-[1px] border-b-[#7e97a7] [box-shadow:inset_0_0_0_9999px_transparent]'>
                                        <span className='text-[.75rem] block !font-bold !text-[#23282c] text-left'> No </span>
                                        {amt > 0 && (
                                            <span className='font-normal text-[0.688rem] flex text-left'>
                                                <span className='block font-normal text-[0.688rem] text-left'>
                                                    <span className='flex p-0 font-normal text-[0.688rem] text-left'>
                                                        <span className='mr-[5px] text-[0.688rem] !text-[#228b22] !font-bold !flex text-left'>
                                                            <span className='block text-[0.688rem] !text-[#228b22] !font-bold text-left'>&nbsp;(230.00)</span>
                                                        </span>

                                                    </span>
                                                </span>
                                            </span>
                                        )}
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#72bbef] [border-left-color:#fff] ${type == 'back' && rate == '5.6' && '!bg-[#1a8ee1] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(5.6, 'back', 2)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>5.6</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>450.8</span>
                                        </button>
                                    </td>
                                    <td className={`w-[10%] align-middle text-center text-[12px] px-[0] py-[1.5px] font-bold border-t-[none] relative bg-[#faa9ba] [border-left-color:#fff] ${type == 'lay' && rate == '5.7' && '!bg-[#f4496d] text-[#fff] [box-shadow:inset_0_1px_3px_#00000080]'}`}>
                                        <button className='[color:inherit] cursor-pointer text-center text-[.75rem] px-[0] py-[1.5px] font-bold' onClick={(e) => selectRate(5.7, 'lay', 2)}>
                                            <span className='font-bold block min-w-[50px] !text-[.75rem] !relative [color:inherit]'>5.7</span>
                                            <span className='block font-normal text-[0.688rem] min-w-[50px] [color:inherit]'>619.17</span>
                                        </button>
                                    </td>
                                </tr>

                                {showBetsSlip && selectedRowIndex === 2 && (
                                    <tr>
                                        <td colSpan={7} className={`align-middle text-center text-[.75rem] px-[0] py-[3px] font-bold border-t-[none]  ${type == 'back' ? 'bg-[linear-gradient(180deg,_#BEDDF4_0%,_#D4E8F8_100%)] border-b-[1px_solid_#7e97a7]' : 'bg-[linear-gradient(180deg,_#F3DCE2_0%,_#FAEFF2_100%)]'}`}>
                                            <div className='text-center text-[12px]'>
                                                <div className='overflow-hidden text-center text-[.75rem] font-bold'>
                                                    <div className={`${type == 'back' ? 'bg-[#beddf4]' : 'bg-[#f3dce2]'}  text-center text-[.75rem] font-bold`}>
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
                                                                    <input className='bg-[#ffffff] text-center border-t-[1px] border-t-[#aaaaaa] border-b-[1px] border-b-[#aaaaaa] border-l-[0px] border-r-[0px] w-[59%] !h-[40px] !text-[#1e1e1e] !font-bold !text-[0.875rem] rounded-none' type="number" value={rate} oninput="validity.valid||(value='');" placeholder="0" />
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
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )

}


export default TiedMatch;
