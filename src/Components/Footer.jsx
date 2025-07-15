import React from "react";

function Footer() {
  return (
    <>
      <section className="flex flex-col  px-2 py-6 bg-[#fff]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between items-center text-[12px] lg:text-[16px] w-full">
            <div className="ml-12">
              <img src="/Images/ssl.png" alt="" srcset="" className="h-14" />
            </div>
            <div className="flex flex-col justify-end items-center">
              <span className="font-bold" style={{ lineHeight: '1' }}>100% SAFE</span>
              <span className="" style={{ marginTop: '3px', lineHeight: "1" }}>Protected connection and encrypted data.</span>
            </div>
          </div>
          <div>
            <ul className="flex justify-between items-center py-1">
              <li className="mr-2 lg:mr-2">
                <img src="/Images/18plus.png" alt="" srcset="" className="h-[34px]" />
              </li>
              <li className="mr-2 lg:mr-2">
                <img src="/Images/gamecare.png" alt="" srcset="" className="h-[34px]" />
              </li>
              <li className="mr-2 lg:mr-2">
                <img src="/Images/gt.png" alt="" srcset="" className="h-[34px]" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center px-2 text-[12px] lg:text-[16px]">
          <span className="mb-0">© Copyright 2025. All Rights Reserved.</span>
        </div>
      </section>
    </>
  );
}

export default Footer;
