import React from "react";
import Helper from "../helper";
import { useEffect, useState } from "react";
import Appconfig from "../config/config";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const userInfo = Helper();

  const [formData, setformData] = useState({
    user_id: userInfo?._id,
    name: userInfo?.name,
    user_name: userInfo?.user_name,
    user_type: userInfo?.user_type,
    old_password: "",
    new_password: "",
    con_password: "",
  });

  const [user_nameValidationError, setUser_NameValidationError] = useState(
    "Please enter old password"
  );
  const [passwordValidationError, setPasswordValidationError] = useState(
    "Please enter new password"
  );
  const [conpasswordValidationError, setConPasswordValidationError] = useState(
    "Please check your confirm password"
  );
  const [button, setButton] = useState(false);

  function checkValidation() {
    if (formData.old_password.trim() === "") {
      setUser_NameValidationError("Please enter old password");
      document.querySelector(".oldpassword-error").classList.remove("hidden");
    }
    if (formData.new_password.trim() === "") {
      setPasswordValidationError("Please enter new password");
      document.querySelector(".newpassword-error").classList.remove("hidden");
    }
    if (formData.con_password.trim() !== formData.new_password.trim()) {
      document.querySelector(".conpassword-error").classList.remove("hidden");
      setConPasswordValidationError("Please check your confirm password");
    }

    if (
      formData.old_password !== "" &&
      formData.new_password !== "" &&
      formData.con_password !== "" &&
      formData.new_password === formData.con_password
    ) {
      return true;
    }
    return false;
  }

  function setOldPassword(value) {
    setformData({ ...formData, old_password: value });
  }

  function setNewPassword(value) {
    setformData({ ...formData, new_password: value });
  }

  function setConPassword(value) {
    setformData({ ...formData, con_password: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checkValidation()) {
      formData.master_id = userInfo?.master_id;
      formData.masters = userInfo?.masters;
      setButton(true);

      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}users/auraChangePassword`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      };

      axios(config)
        .then(function (response) {
          if (response.data.result) {
            NotificationManager.success(response.data.message, "", 3000);
            setButton(false);
            formData.old_password = "";
            formData.new_password = "";
            formData.con_password = "";
            setTimeout(() => {
              logout();
              navigate("/");
            }, 3000);
          } else {
            NotificationManager.error(response.data.message, "", 3000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="p-4">
      <p className="rounded bg-[#343435] p-1 shadow text-[var(--secondary-color)] text-sm font-bold uppercase mb-4">
        <span className="px-2">Change Password</span>
      </p>
      <div className="w-full mx-auto">
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
          <label className="text-black">Old Password</label>
          <input
            type="text"
            onChange={(e) => setOldPassword(e.target.value)}
            required
            name="oldPassword"
            placeholder="Enter Old Password"
            className="my-2 px-2 py-1 rounded border border-gray-300 focus:outline-none"
          />
          <div className="oldpassword-error hidden text-red-600 text-xs mb-2">
            {user_nameValidationError}
          </div>

          <label className="text-black">New Password</label>
          <input
            type="text"
            onChange={(e) => setNewPassword(e.target.value)}
            required
            name="newPassword"
            placeholder="Enter New Password"
            className="my-2 px-2 py-1 rounded border border-gray-300 focus:outline-none"
          />
          <div className="newpassword-error hidden text-red-600 text-xs mb-2">
            {passwordValidationError}
          </div>

          <label className="text-black">Confirm Password</label>
          <input
            type="text"
            onChange={(e) => setConPassword(e.target.value)}
            required
            name="confirmPass"
            placeholder="Enter New Password Again"
            className="my-2 px-2 py-1 rounded border border-gray-300 focus:outline-none"
          />
          <div className="conpassword-error hidden text-red-600 text-xs mb-4">
            {conpasswordValidationError}
          </div>

          <button
            className="w-full py-2 border-2 border-gray-300 rounded bg-[#151c20] text-[var(--secondary-color)] shadow-md text-xs"
            type="submit"
            disabled={button}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
