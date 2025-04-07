import React, { forwardRef } from "react";

const PopUser = forwardRef(({ onClose }, ref) => {
  return (
    <div
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      ref={ref}
    >
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        x
      </a>
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <button type="button" className="_hover03" onClick={onClose}>
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  );
});

export default PopUser;
