import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const PopUser = forwardRef(({ onClose }, ref) => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    onClose();
    navigate("/exit");
  };

  return (
    <div
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      ref={ref}
    >
      <button type="button" onClick={onClose}>
        x
      </button>

      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
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
