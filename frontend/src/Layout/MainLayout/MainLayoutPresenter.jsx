import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SideMenu } from "./Components";
import "./MainLayout.css";

const MainLayoutPresenter = () => {
  return (
    <div className="mainlayout-container">
      <SideMenu />
      <div className="mainlayout-body-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayoutPresenter;
