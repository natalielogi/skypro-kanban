import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const PopUser = forwardRef(({ onClose, userName }, ref) => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.clear();
    onClose();
    navigate("/exit");
  };

  const userEmail = localStorage.getItem("userEmail") || "example@mail.com";

  return (
    <div
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      ref={ref}
    >
      <button type="button" onClick={onClose}>
        x
      </button>

      <p className="pop-user-set__name">{userName}</p>
      <p className="pop-user-set__mail">{userEmail}</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <button type="button" className="_hover03" onClick={handleLogoutClick}>
        Выйти
      </button>
    </div>
  );
});

export default PopUser;
