import React, { useState, useRef, useEffect } from "react";
import PopUser from "../popups/PopUser/PopUser";

const Header = () => {
  const [isUserVisible, setIsUserVisible] = useState(false);
  const modalref = useRef(null);

  const toggleUserModal = (e) => {
    e.preventDefault();
    setIsUserVisible((prev) => !prev);
  };

  const closeModal = () => {
    setIsUserVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isUserVisible &&
        modalref.current &&
        !modalref.current.contains(event.target)
      ) {
        setIsUserVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserVisible]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a
              href="#user-set-target"
              className="header__user _hover02"
              onClick={toggleUserModal}
            >
              Ivan Ivanov
            </a>
            {isUserVisible && (
            <PopUser ref={modalref} onClose={closeModal} />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
