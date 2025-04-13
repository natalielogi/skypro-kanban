import React, { forwardRef } from "react";

const PopUser = forwardRef(({ onClose }, ref) => {
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
      <button type="button" className="_hover03" onClick={onClose}>
        Выйти
      </button>
    </div>
  );
});

export default PopUser;
