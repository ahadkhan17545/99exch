import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import MenuSideBar from "../Components/MenuSideBar";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";

function MainLayout() {
  return (
    <>
      <Loader />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <div className="hidden lg:flex w-[15%] bg-[#ccc]">
            <MenuSideBar />
          </div>
          <div className="w-full lg:w-[85%] bg-[#f1f5f8]">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
