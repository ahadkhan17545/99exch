import React from "react";
import { GiCrownCoin } from "react-icons/gi";
// import Empty from "../EmptyDiv/Empty";
// import Header from "../header/Header";
// import Footer from "../Footer/Footer";
// import ExposureHeader from "../ExposureHeader/ExposureHeader";

const ReferAndEarn = () => {
  return (
    <div>

      <div className="max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mx-auto mt-8 p-6 bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden rounded-lg referAndEarn">
        {/* Header */}
        <div className="text-center text-white mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Refer your friends <br /> and Earn
          </h1>
        </div>

        {/* Reward Section */}
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src="../Images/gift-box.png"
            alt="Gift Icon"
            className="w-20 mb-4"
          />
          <div className="flex items-center text-white">
            <GiCrownCoin size={30} color="#ff4d00" className="mx-2" />
            <h2 className="text-2xl md:text-3xl font-bold">100</h2>
          </div>
          <span className="text-white text-base">LoyaltyPoints</span>
          <p className="text-white text-center mt-2 text-base leading-relaxed">
            Your friend gets 100 TimesPoints on sign up and you get 100
            TimesPoints too every time!
          </p>
        </div>

        {/* Referral Code Section */}
        <div className="mb-6">
          <p className="text-white text-base">Your referral code</p>
          <div className="flex items-center justify-center bg-white text-purple-800 font-bold text-xl md:text-2xl px-4 py-3 rounded-xl my-3">
            <span>ABCDG123</span>
            <button className="ml-4 bg-purple-700 text-white text-sm px-3 py-1 rounded-md">
              Copy Code
            </button>
          </div>
          <p className="text-white text-sm mt-3 text-center">
            Share your Referral Code via
          </p>
        </div>

        {/* Social Share Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <button className="bg-[#00bfff] text-white text-sm px-4 py-2 rounded-full w-[30%] min-w-[100px] text-center">
            Telegram
          </button>
          <button className="bg-[#3b5998] text-white text-sm px-4 py-2 rounded-full w-[30%] min-w-[100px] text-center">
            Facebook
          </button>
          <button className="bg-[#25d366] text-white text-sm px-4 py-2 rounded-full w-[30%] min-w-[100px] text-center">
            WhatsApp
          </button>
        </div>

        {/* FAQ Section */}
        <div className="bg-white text-black p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">
            Frequently Asked Questions
          </h3>
          {[
            "What is Refer and Earn Program?",
            "How it works?",
            "Where can I use these LoyaltyPoints?",
          ].map((q, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-300 py-2 cursor-pointer text-base"
            >
              <p>{q}</p>
              <span className="text-purple-800 font-bold">+</span>
            </div>
          ))}
        </div>
      </div>

      {/* <Empty /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default ReferAndEarn;
