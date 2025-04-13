import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PopExit,
  ExitContainer,
  ExitBlock,
  ExitTitle,
  ExitForm,
  ButtonGroup,
  ExitYes,
  ExitNo,
} from "./ExitModal.styled";

const ExitModal = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleExit = (e) => {
    e.preventDefault();
    setIsAuth(false);
    navigate("/login");
  };

  const handleStay = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <PopExit>
      <ExitContainer>
        <ExitBlock>
          <ExitTitle>Выйти из аккаунта?</ExitTitle>
          <ExitForm>
            <ButtonGroup>
              <ExitYes onClick={handleExit}>Да, выйти</ExitYes>
              <ExitNo onClick={handleStay}>Нет, остаться</ExitNo>
            </ButtonGroup>
          </ExitForm>
        </ExitBlock>
      </ExitContainer>
    </PopExit>
  );
};

export default ExitModal;
