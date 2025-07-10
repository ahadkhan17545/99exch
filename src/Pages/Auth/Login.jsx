import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import apiBaseUrl from "../../config/config";
import { useNavigate } from "react-router-dom";

function Login({ setIsOpen, setIsRegisterOpen }) {
  // const navigate = useNavigate();
  const { login, setShowLoginModel } = useAuth();

  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    site_code: apiBaseUrl.sitecodes,
    user_type: "User",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var config = {
      method: "post",
      url: `${apiBaseUrl.apiUrl}users/userAuthenticate`,
      headers: {
        "Content-Type": "application/json",
      },

      data: JSON.stringify(formData),
    };
    axios(config)
      .then(function (response) {
        if (response.data.result) {
          toast.success(response.data.resultMessage, { autoClose: 500 });
          // localStorage.setItem(
          //   "userdata",
          //   JSON.stringify(response.data.resultData)
          // );
          login(response.data.resultData);

          setIsOpen(false);
          setShowLoginModel(false);
        } else {
          toast.error("Invalid Credentials", { autoClose: 800 });
        }
        formData.user_name = "";
        formData.password = "";
      })
      .catch(function (error) {
        console.log(error);
        toast.error("An error occurred during login", { autoClose: 800 });
      });
  };

  const loginDemoID = async () => {
    setIsDisabled(true);
    // setIsLoading(true)

    var demoData = {
      user_name: "demo_user",
      password: "123456",
      site_code: apiBaseUrl.sitecodes,
      user_type: "User",
    };

    var config = {
      method: "post",
      url: `${apiBaseUrl.apiUrl}users/userAuthenticate`,
      headers: {
        "Content-Type": "application/json",
      },

      data: JSON.stringify(demoData),
    };
    axios(config)
      .then(function (response) {
        setIsDisabled(false);

        if (response.data.result != 0) {
          toast.success(response.data.resultMessage, { autoClose: 500 });

          // setIsLoading(false)
          login(response.data.resultData);
          setIsOpen(false);
          setShowLoginModel(false);
        } else {
          // console.log('--', response.data.resultMessage)
          // errorNotification();
          toast.success(response.data.resultMessage, { autoClose: 800 });
        }
      })
      .catch(function (error) {
        setIsDisabled(false);
        console.log(error);
      });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[1000] bg-[#0000007d] animate-fadeIn">
        <div className="flex justify-center items-center flex-col  bg-popup-gradient px-5 rounded-[10px] w-full lg:w-[30%] h-screen shadow-[0_5px_15px_rgb(73,72,72)] relative animate-slideIn">
          <div className="flex justify-end mt-[-4rem] mb-[2rem] w-full">
            <button
              type="button"
              className="close text-[2.125rem] text-white"
              onClick={() => {
                setIsOpen(false);
                setShowLoginModel(false);
              }}
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
                    placeholder="Enter user ID"
                    required
                    value={formData.user_name}
                    onChange={(e) => handleInputChange(e)}
                    className="login-input w-full px-4 py-2 border border-gray-300 rounded user_input focus:outline-none focus:ring-2 focus:ring-purple-500"
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

                {/* Remember Me & Forgot Pa`ssword */}
                <div className="text-center text-sm text-white p-2">
                  <div className="flex justify-between items-center">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="scale-150 accent-purple-600 mr-1"
                      />
                      <span>Remember Me</span>
                    </label>
                    <a
                      // href="https://99exch.work/forgot-password"
                      className="text-white"
                    >
                      Forget password?
                    </a>
                  </div>
                </div>

                {/* Login Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#000] text-white px-6 py-2 mt-3 rounded-lg w-[275px] hover:bg-purple-700 transition"
                  >
                    Login
                  </button>
                </div>

                {/* Demo Login Button */}
                <div className="text-center">
                  <button
                    type="button"
                    className="bg-[#000] text-white px-6 py-2 mt-3 rounded-lg w-[275px] hover:bg-purple-700 transition"
                    onClick={() => loginDemoID()}
                    disabled={isDisabled}
                  >
                    Login with Demo ID
                  </button>
                </div>

                {/* Download APK */}
                <div className="text-center">
                  <a
                    // href="https://99exch.work/assets/apk/99exch.apk"
                    download
                    className="bg-[#008000] text-white text-base px-6 py-2 mt-8 inline-flex items-center justify-center w-full rounded-lg hover:bg-purple-700 transition"
                  >
                    <img
                      src="/Images/fair-wt-1.webp"
                      alt=""
                      className="mr-1 w-8 h-8"
                    />
                    <span>WHATSAPP NOW</span>
                  </a>
                  <span
                    className="text-white text-center block mt-2 tracking-wider text-sm cursor-pointer"
                    onClick={() => {
                      setIsOpen(false);
                      setShowLoginModel(false);
                      setIsRegisterOpen(true);
                    }}
                  >
                    Don't have an account? REGISTER
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
