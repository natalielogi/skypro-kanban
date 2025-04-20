import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/main";

function MainPage() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Outlet />
    </div>
  );
}

export default MainPage;
