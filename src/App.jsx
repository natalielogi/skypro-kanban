import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/main';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopUser from './components/popups/PopUser/PopUser';

function App() {
  return (
    <div className="wrapper">
      {/* Модальные окна */}
      <PopBrowse />
      <PopNewCard />
      <PopUser />
      {/* Основной контент */}
      <Header />
      <Main />
    </div>
  );
}

export default App;
