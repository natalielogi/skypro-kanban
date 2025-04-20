import styled from "styled-components";

export const PopExit = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

export const ExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const ExitBlock = styled.div`
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ExitTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const ExitForm = styled.form``;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const ExitYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #33399b;
  }
`;

export const ExitNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid #565eef;
  outline: none;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565eef;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f3f3f3;
  }
`;
