import React from "react";

function MenuSideBar() {
  return (
    <>
      <div className="py-2 px-3">
        <ul className="text-sm font-semibold space-y-3">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Account Statement</li>
          <li className="cursor-pointer">Profile Loss Report</li>
          <li className="cursor-pointer">Deposit</li>
          <li className="cursor-pointer">Withdraw</li>
          <li className="cursor-pointer">Market Analysis</li>
          <li className="cursor-pointer">Bet History</li>
          <li className="cursor-pointer">Unsetteled Bets</li>
          <li className="cursor-pointer">Set Button Values</li>
        </ul>
      </div>
    </>
  );
}

export default MenuSideBar;
