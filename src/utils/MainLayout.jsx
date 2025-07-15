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
      <Header />
      <div className="flex">
        <div className="hidden lg:flex w-[15%] bg-[#ccc]">
          <MenuSideBar />
        </div>
        <div className="w-full h-screen lg:w-[85%] bg-[#f1f5f8]">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
