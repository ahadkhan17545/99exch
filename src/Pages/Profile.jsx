import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
import AddWithdrawDetails from "./AddWithdrawDetails/AddWithdrawDetails";
import Helper from "../helper";

const Profile = () => {
  const userInfo = Helper();

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [editingSection, setEditingSection] = useState(null);

  const [bankDetails, setBankDetails] = useState({
    name: "Example",
    accountNumber: "12345678xxxx",
    ifscCode: "SBIN000002",
    bankName: "State Bank of India",
  });

  const [UPIDetails, setUPIDetails] = useState({
    upi_id: "1234fgd",
    phoneNumber: "12345678xxxx",
  });

  const handleBankInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleUPIInputChange = (e) => {
    const { name, value } = e.target;
    setUPIDetails({ ...UPIDetails, [name]: value });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleEditPopup = (section) => {
    setEditingSection(section);
    setShowEditPopup(!showEditPopup);
  };

  return (
    <div className="p-3 bg-[#f1f5f8]">
      <p className="rounded bg-[#343435] p-1 shadow text-white text-[15px] font-bold uppercase">
        <span className="px-2">Profile</span>
      </p>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-5">
          <FaUserTie size={70} color="#343435" />
          <div className="mt-2 text-center text-black font-semibold text-xl">
            <span>{userInfo?.user_name}</span>
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={togglePopup}
            className="bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Add Withdraw Details
          </button>
        </div>

        <div className="w-[20rem] md:w-[50rem] bg-white rounded-md shadow p-4 mt-6">
          <h1 className="text-gray-800 text-lg text-center font-semibold mb-2">
            Bank Details
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-center gap-4">
            <div className="w-1/3 bg-white shadow-md rounded p-2 flex justify-center">
              <img src="/Images/bank.webp" alt="Bank" className="w-4/5" />
            </div>
            <div className="flex-1 text-sm text-black">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Name</td>
                    <td className="p-2">-</td>
                    <td className="p-2">{bankDetails.name}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">A/c Number</td>
                    <td className="p-2">-</td>
                    <td className="p-2">{bankDetails.accountNumber}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">IFSC Code</td>
                    <td className="p-2">-</td>
                    <td className="p-2">{bankDetails.ifscCode}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Bank Name</td>
                    <td className="p-2">-</td>
                    <td className="p-2">{bankDetails.bankName}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => toggleEditPopup("bank")}
              className="text-white text-sm bg-gray-800 px-4 py-1 rounded"
            >
              Edit
            </button>
            <button className="text-white text-sm bg-red-700 px-4 py-1 rounded">
              Delete
            </button>
          </div>
        </div>

        <div className="w-[20rem] md:w-[50rem] bg-white rounded-md shadow p-4 mt-6">
          <h1 className="text-gray-800 text-lg text-center font-semibold mb-2">
            UPI Details
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-center gap-4">
            <div className="w-1/3 bg-white shadow-md rounded p-2 flex justify-center">
              <img src="/Images/bhim-upi.png" alt="UPI" className="w-4/5" />
            </div>
            <div className="flex-1 text-sm text-black">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">UPI Id</td>
                    <td className="p-2">-</td>
                    <td className="p-2">{UPIDetails.upi_id}</td>
                  </tr>
                  <tr>
                    <td className="p-2">Phone Number</td>
                    <td className="p-2">-</td>
                    <td className="p-2">{UPIDetails.phoneNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => toggleEditPopup("upi")}
              className="text-white text-sm bg-gray-800 px-4 py-1 rounded"
            >
              Edit
            </button>
            <button className="text-white text-sm bg-red-700 px-4 py-1 rounded">
              Delete
            </button>
          </div>
        </div>

        {showEditPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-lg font-bold text-gray-800 mb-4 uppercase">
                Edit{" "}
                {editingSection === "bank" ? "Bank Details" : "UPI Details"}
              </h2>
              <form>
                {editingSection === "bank" ? (
                  <>
                    <div className="mb-3">
                      <label className="block mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={bankDetails.name}
                        onChange={handleBankInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block mb-1">A/c Number</label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={bankDetails.accountNumber}
                        onChange={handleBankInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block mb-1">IFSC Code</label>
                      <input
                        type="text"
                        name="ifscCode"
                        value={bankDetails.ifscCode}
                        onChange={handleBankInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block mb-1">Bank Name</label>
                      <input
                        type="text"
                        name="bankName"
                        value={bankDetails.bankName}
                        onChange={handleBankInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-3">
                      <label className="block mb-1">UPI ID</label>
                      <input
                        type="text"
                        name="upi_id"
                        value={UPIDetails.upi_id}
                        onChange={handleUPIInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block mb-1">Phone Number</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={UPIDetails.phoneNumber}
                        onChange={handleUPIInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                  </>
                )}
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                    onClick={toggleEditPopup}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 text-white px-4 py-2 rounded"
                    onClick={toggleEditPopup}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showPopup && <AddWithdrawDetails togglePopup={togglePopup} />}

        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default Profile;
