import React, { useState } from "react";
import axios from "axios";
import apiBaseUrl from "../../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const Register = ({ setIsOpen, setIsRegisterOpen }) => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    site_code: apiBaseUrl.sitecodes,
    user_name: "",
    password: "",
    user_type: "User",
    master_id: apiBaseUrl.superAdmin,
    refercode: "",
    otp: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle password visibility
  const [otpBtn, setOtpBtn] = useState(false); // State to toggle password visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (confirmPassword !== formData.password) {
    //   toast.error("Password Not Matched!", { autoClose: 2000 });
    //   return false;
    // }
    if (!formData?.otp) {
      toast.error("Otp Not Matched!", { autoClose: 2000 });
      return false;
    }

    var config = {
      method: "post",
      url: `${apiBaseUrl.apiUrl}users/addUsers`,
      headers: {
        "Content-Type": "application/json",
      },

      data: JSON.stringify(formData),
    };
    axios(config)
      .then(function (response) {
        if (response.data.result) {
          toast.success("Registered successful!", { autoClose: 2000 });

          signup(response.data.resultData[0]);
          setIsRegisterOpen(false);
        } else {
          toast.error(response.data.resultMessage, { autoClose: 2000 });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("An error occurred during registering", {
          autoClose: 2000,
        });
      });
  };

  function getOtp() {
    setOtpBtn(true);
    var config = {
      method: "post",
      url: `${apiBaseUrl.apiUrl}otps/sendOtp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        user_name: formData.user_name,
        site_code: apiBaseUrl.sitecodes,
      }),
    };
    axios(config)
      .then(function (response) {
        if (response.data.result) {
          toast.success("OTP Send successful!", { autoClose: 2000 });
        } else {
          toast.error(response.data.resultMessage, { autoClose: 2000 });
        }
        setOtpBtn(false);
      })
      .catch(function (error) {
        console.log(error);
        toast.error("An error occurred during sending OTP", {
          autoClose: 2000,
        });
        setOtpBtn(false);
      });
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[1000] bg-[#0000007d] animate-fadeIn">
        <div className="flex justify-center items-center flex-col  bg-popup-gradient px-5 rounded-[10px] w-full lg:w-[30%] h-screen shadow-[0_5px_15px_rgb(73,72,72)] relative animate-slideIn">
          <div className="flex justify-end mt-[-4rem] mb-[2rem] w-full">
            <button
              type="button"
              className="close text-[2.125rem] text-white"
              onClick={() => setIsRegisterOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="relative p-[15px] bg-[rgba(19,144,97,0.5)] w-[90%] h-[80%] rounded-[10px] mx-auto">
            <div className="flex justify-center items-center">
              <img
                src="/Images/logo.webp"
                alt=""
                className="w-[200px] h-[52px]"
              />
            </div>

            <div className="flex justify-center items-center mt-2">
              <span className="text-[#fff] font-semibold text-[1.5rem] underline">
                Register
              </span>
            </div>

            <form
              className="pt-3 px-3 lg:px-16 mt-1"
              id="form_data"
              name="form_data"
              onSubmit={handleSubmit}
            >
              <div id="login" className="">
                {/* Username Field */}
                <div className="flex items-center">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="10 Digit Phone Number"
                    required
                    value={formData.user_name}
                    onChange={(e) => handleInputChange(e)}
                    className="phnumber login-input w-full px-4 py-2 border border-gray-300 rounded user_input focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Password Field */}
                <div className="flex items-center mt-2">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange(e)}
                    className="w-full px-4 py-2 border border-gray-300 rounded pass_input focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex justify-center items-center ">
                  <button
                    className="bg-[#000] text-[#fff] rounded-lg p-3 mt-2"
                    disabled={otpBtn}
                    onClick={(e) => getOtp(e)}
                  >
                    Send OTP
                  </button>
                </div>

                {/* Otp Field */}
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    name="otp"
                    placeholder="Enter OTP"
                    required
                    value={formData.otp}
                    onChange={(e) => handleInputChange(e)}
                    className="otp-input w-full px-4 py-2 border border-gray-300 rounded pass_input focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Referal Field */}
                <div className="flex items-center mt-2">
                  <input
                    type="text"
                    name="refercode"
                    placeholder="Referral Code (if any)"
                    value={formData.refercode}
                    onChange={(e) => handleInputChange(e)}
                    className="otp-input w-full px-4 py-2 border border-gray-300 rounded pass_input focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Login Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#000] text-white px-6 py-2 mt-3 rounded-lg w-[275px] hover:bg-purple-700 transition"
                  >
                    Register
                  </button>
                </div>
                <div className="text-center">
                  <span
                    className="text-white text-center block mt-2 tracking-wider text-sm cursor-pointer"
                    onClick={() => {
                      setIsRegisterOpen(false);
                      setIsOpen(true);
                    }}
                  >
                    Already have an account? Login
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
