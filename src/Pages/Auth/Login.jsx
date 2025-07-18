import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import apiBaseUrl from "../../config/config";
import { Link, useNavigate } from "react-router-dom";

function Login({ setIsOpen, setIsRegisterOpen }) {
  const navigate = useNavigate();
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
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[1000] bg-[#0000006e] backdrop-blur-sm animate-fadeIn">
        <div className="flex justify-center items-center flex-col   px-5 rounded-[10px] w-full h-screen shadow-[0_5px_15px_rgb(73,72,72)] relative animate-slideIn">
          <div className="relative h-auto w-[90%] lg:w-[20%] rounded-[10px] mx-auto mt-[4rem] bg-[#fff]">
            <div className=" text-end p-2">
              <button
                type="button"
                className=" text-xl w-8 h-8 text-white bg-black rounded-2xl hover:bg-purple-700 transition"
                onClick={() => {
                  setIsOpen(false);
                  setShowLoginModel(false);
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

                    LOGIN
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
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="User Name"
                      required
                      value={formData.user_name}
                      onChange={(e) => handleInputChange(e)}
                      className="login-input w-full px-4 py-2 border border-gray-300 rounded user_input focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="absolute right-2 w-4">
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                      </svg>
                    </>

                  </div>

                  {/* Password Field */}
                  <div className="flex items-center my-6 relative">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      value={formData.password}
                      onChange={(e) => handleInputChange(e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded pass_input focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute right-2 w-4">
                      <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                    </svg>

                  </div>

                  {/* Remember Me & Forgot Pa`ssword */}
                  {/* <div className="text-center text-sm text-[#000] p-2">
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
                      className="text-[#000]"
                    >
                      Forget password?
                    </a>
                  </div>
                </div> */}

                  {/* Login Button */}
                  <div className="flex justify-center items-center text-center relative">
                    <button
                      type="submit"
                      className="bg-[#000] text-white px-6 py-2 rounded w-full hover:bg-purple-700 transition"
                    >
                      Login
                    </button>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute right-2 w-4 invert">
                      <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                    </svg>
                  </div>

                  {/* Demo Login Button */}
                  <div className="flex justify-center items-center text-center relative">
                    <button
                      type="button"
                      className="bg-[#000] text-white px-6 py-2 mt-1 rounded w-full hover:bg-purple-700 transition"
                      onClick={() => loginDemoID()}
                      disabled={isDisabled}
                    >
                      Login with Demo ID
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute right-2 w-4 invert">
                      <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                    </svg>

                  </div>
                  <div className="flex flex-col">
                    <p className="text-[13px] font-normal text-start">This site is protected by reCAPTCHA and the Google <span className="text-[#007bff]">Privacy Policy</span> and <span className="text-[#007bff]">Terms of Service</span> apply.</p>

                    <span className="text-base text-[#007bff] text-center mt-2">99exchinfo@gmail.com</span>
                  </div>

                  <div className=" mt-4 pt-2 border-t border-black border-dashed">

                    {/* Download APK */}
                    <div className="flex justify-center items-center text-center gap-2">
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
                            setIsOpen(false);
                            setShowLoginModel(false);
                            setIsRegisterOpen(true);
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
                            REGISTER
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
