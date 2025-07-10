import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import BankForm from "./BankForm";
import PaytmForm from "./PaytmForm";
import UpiForm from "./UpiForm";
import PhonepeForm from "./PhonepeForm";
import GpayForm from "./GpayForm";

const AddWithdrawDetails = ({ togglePopup }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderForm = () => {
    switch (selectedOption) {
      case "Bank":
        return <BankForm />;
      case "Paytm":
        return <PaytmForm />;
      case "Phonepe":
        return <PhonepeForm />;
      case "UPI":
        return <UpiForm />;
      case "G-pay":
        return <GpayForm />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]">
      <div className="relative w-[300px] max-w-full bg-gradient-to-t from-[#9e802c] via-[#e7e491] to-[#e7e491] p-5 rounded-md shadow-lg z-[1000]">
        {/* Close Button */}
        <button
          className="absolute top-1 right-2 text-gray-800 text-lg"
          onClick={togglePopup}
        >
          <FaTimes size={20} />
        </button>

        <h4 className="text-lg font-bold uppercase text-[#343435] mb-4">
          {selectedOption
            ? `Fill Your ${selectedOption} Details`
            : "Select Your Method"}
        </h4>

        {/* Dropdown Menu */}
        {selectedOption === "" && (
          <div className="mb-4">
            <select
              value={selectedOption}
              onChange={handleDropdownChange}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none text-sm"
            >
              <option value="">Select Payment Method</option>
              <option value="Bank">Bank</option>
              <option value="Paytm">Paytm</option>
              <option value="Phonepe">Phonepe</option>
              <option value="G-pay">G-pay</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
        )}

        {/* Rendered Form */}
        <div>{renderForm()}</div>
      </div>
    </div>
  );
};

export default AddWithdrawDetails;
