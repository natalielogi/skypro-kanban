import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/main";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";

function MainPage() {
  return (
    <div className="wrapper">
      {/* Модальные окна */}
      <PopBrowse />
      <PopNewCard />
      {/* Основной контент */}
      <Header />
      <Main />
      <Outlet />
    </div>
  );
}

export default MainPage;
