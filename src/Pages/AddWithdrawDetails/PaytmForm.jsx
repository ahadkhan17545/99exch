import React from "react";

const PaytmForm = () => {
  return (
    <form className="space-y-3">
      <label className="block">
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
        />
      </label>

      <label className="block">
        <input
          type="text"
          placeholder="UPI ID"
          required
          className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
        />
      </label>

      <label className="block">
        <input
          type="text"
          placeholder="Number"
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
  );
};

export default PaytmForm;
