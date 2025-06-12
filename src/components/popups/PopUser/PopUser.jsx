import React, { forwardRef } from "react";
import * as S from "./PopUser.styled";

const PopUser = forwardRef(({ onClose, userName, onLogout }, ref) => {
  const handleLogoutClick = () => {
    onLogout();
  };

  const userEmail = localStorage.getItem("userEmail") || "example@mail.com";

  return (
    <S.PopUserWrapper id="user-set-target" ref={ref}>
      <S.CloseButton type="button" onClick={onClose}>
        x
      </S.CloseButton>

      <S.UserName>{userName}</S.UserName>
      <S.UserEmail>{userEmail}</S.UserEmail>
      <S.ThemeToggleBlock>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </S.ThemeToggleBlock>
      <S.LogoutButton type="button" onClick={handleLogoutClick}>
        Выйти
      </S.LogoutButton>
    </S.PopUserWrapper>
  );
});

export default PopUser;
