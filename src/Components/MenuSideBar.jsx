import React, { useState } from "react";

function MenuSideBar() {

  const [isOpen, setIsOpen] = useState(true);
  const [isALLSportsOpen, setIsALLSportsOpen] = useState(true);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleAllSports = () => {
    setIsALLSportsOpen(!isALLSportsOpen);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full text-base">
          <div className="flex w-full bg-[#008000] p-1 mb-[1px] text-[#fff]">
            <span>Deposit</span>
          </div>
          <div className="flex w-full bg-[#ff0000] p-1 mb-[1px] text-[#fff]">
            <span>Withdraw</span>
          </div>
        </div>
        {/* Other Tab */}
        <div className="mb-[1px]">
          <div
            className="flex justify-between items-center px-1 bg-[#000] text-[#fff] cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="text-lg">Others</span>
            <span className={`transition-transform duration-300 ${isOpen ? '' : '-rotate-90'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={12}
                height={22}
              >
                <path
                  fill="white"
                  d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
              </svg>
            </span>
          </div>
          <ul
            className={`text-base w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">TP T20</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">TP 1 DAY</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">TP TEST</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">DT 1 DAY</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">32 CARDS</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">HI LOW</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">POKER</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">QUEEN</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">BACCARAT</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">AMAR AKBAR ANTHONY</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">BOLLYWOOD</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">TRIO</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">ANDAR BAHAR</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">MUFLIS TP</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">ROULETTE</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">WORLI MATKA</li>
          </ul>
        </div>
        {/* All Sports Tab */}
        <div>
          <div
            className="flex justify-between items-center px-1 bg-[#000] text-[#fff] cursor-pointer"
            onClick={toggleAllSports}
          >
            <span className="text-lg">All Sports</span>
            <span className={`transition-transform duration-300 ${isALLSportsOpen ? '' : '-rotate-90'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={12}
                height={22}
              >
                <path
                  fill="white"
                  d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
              </svg>
            </span>
          </div>
          <ul
            className={`text-base w-full overflow-hidden transition-all duration-500 ease-in-out ${isALLSportsOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">CRICKET</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">FOOTBALL</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">TENNIS</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">HORSE RACING</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">GREYHOUND RACING</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">BINARY</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">BASKETBALL</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">TABLE TENNIS</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">VOLLEYBALL</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">RUGBY</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">DARTS</li>
            <li className="px-3 cursor-pointer border-b border-[#9e9e9e]">FUTSAL</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenuSideBar;
