import React from "react";

const BankForm = () => {
  return (
    <div className="">
      <form className="space-y-3">
        <label className="block">
          <input
            type="text"
            placeholder="Bank Name:"
            required
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
          />
        </label>

        <label className="block">
          <input
            type="text"
            placeholder="Account Holder Name:"
            required
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
          />
        </label>

        <label className="block">
          <input
            type="text"
            placeholder="Account Number:"
            required
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
          />
        </label>

        <label className="block">
          <input
            type="text"
            placeholder="IFSC Code:"
            required
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-[#343435] text-white text-sm rounded-md py-2 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BankForm;
