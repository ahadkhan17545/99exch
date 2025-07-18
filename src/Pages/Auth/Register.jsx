import React, { useState } from "react";
import axios from "axios";
import apiBaseUrl from "../../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
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
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[1000] bg-[#0000006e] backdrop-blur-sm animate-fadeIn">
        <div className="flex justify-center items-center flex-col px-5 rounded-[10px] w-full h-screen shadow-[0_5px_15px_rgb(73,72,72)] relative animate-slideIn">
          <div className="relative w-[90%] lg:w-[20%] h-auto rounded-[10px] mx-auto mt-[4rem] bg-[#fff]">

            <div className=" text-end p-2">
              <button
                type="button"
                className=" text-xl w-8 h-8 text-white bg-black rounded-2xl hover:bg-purple-700 transition"
                onClick={() => {
                  setIsOpen(false);
                  setIsRegisterOpen(false);
                }}
              >
                ×
              </button>
            </div>
            <div className=" px-[15px]">
              <div className="flex justify-center items-center">
                <img
                  src="/logo.png"
                  alt=""
                  className="w-[200px] h-auto"
                />
              </div>

              <form
                className="p-4 bg-[#fff] rounded"
                id="form_data"
                name="form_data"
                onSubmit={handleSubmit}
              >
                <div className="flex justify-center items-center text-[1.5rem] w-full mb-2">
                  <span>

                    REGISTER
                  </span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 384 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M91.826 467.2V317.966c-8.248 5.841-16.558 10.57-24.918 14.153C35.098 345.752-.014 322.222 0 288c.008-18.616 10.897-32.203 29.092-40 28.286-12.122 64.329-78.648 77.323-107.534 7.956-17.857 25.479-28.453 43.845-28.464l.001-.002h171.526c11.812 0 21.897 8.596 23.703 20.269 7.25 46.837 38.483 61.76 38.315 123.731-.007 2.724.195 13.254.195 16 0 50.654-22.122 81.574-71.263 72.6-9.297 18.597-39.486 30.738-62.315 16.45-21.177 24.645-53.896 22.639-70.944 6.299V467.2c0 24.15-20.201 44.8-43.826 44.8-23.283 0-43.826-21.35-43.826-44.8zM112 72V24c0-13.255 10.745-24 24-24h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24zm212-24c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" />
                  </svg>

                </div>
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

                  <div className="flex justify-center items-center w-full ">
                    <button
                      className="bg-[#000] text-[#fff] rounded p-2 mt-2 w-[50%]"
                      disabled={otpBtn}
                      onClick={(e) => getOtp(e)}
                    >
                      Send OTP
                    </button>
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
                      className="bg-[#000] text-white px-6 py-2 mt-3 rounded w-full hover:bg-purple-700 transition"
                    >
                      Register
                    </button>
                  </div>
                  <div className=" mt-4 pt-2 border-t border-black border-dashed">

                    {/* Download APK */}
                    <div className="flex justify-center items-center text-center gap-3">
                      <img src="/Images/2201767.png" alt="" className="loginHandAnimation w-8 -ml-12" />
                      <Link className="flex justify-center items-center gap-1 mx-4 cursor-pointer" to={'https://wa.me'}>
                        <button
                          type="button"
                          className="flex justify-center item-center bg-[#008000] text-white text-base p-2  rounded-2xl hover:bg-purple-700 transition"
                        >
                          <img
                            src="/Images/fair-wt-1.webp"
                            alt=""
                            className="w-4 h-4"
                          />
                        </button>
                        <span className="text-sm font-semibold text-[#000] hover:text-purple-700 transition">WHATSAPP</span>
                      </Link>
                      <div>
                        <div className="flex justify-center items-center gap-1 cursor-pointer"
                          onClick={() => {
                            setIsRegisterOpen(false);
                            setIsOpen(true);
                          }}>

                          <button
                            className="flex justify-center item-center bg-[#007bff] text-white text-base p-2  rounded-2xl hover:bg-purple-700 transition"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-4 w-4 invert">
                              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                            </svg>

                          </button>
                          <span
                            className="text-sm font-semibold text-[#000] hover:text-purple-700 transition"
                          >
                            LOGIN
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="text-center">
                    <span
                      className="text-[#000] text-center block mt-4 tracking-wider text-sm"
                      onClick={() => {
                        setIsRegisterOpen(false);
                        setIsOpen(true);
                      }}
                    >
                      Already have an account? <span className="font-bold hover:text-purple-700 transition cursor-pointer">Login</span>
                    </span>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
