import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
`;

export const ContainerSignin = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTitle = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  margin-bottom: 7px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;

  &::placeholder {
    color: #94a6be;
  }

  border: ${(props) =>
    props.$invalid ? "1px solid red" : "0.7px solid rgba(148, 166, 190, 0.4)"};

  &:focus {
    outline: none;
    border-color: #565eef;
  }
`;

export const ButtonEnter = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#565eef")};
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#33399b")};
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const FormGroup = styled.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`;

export const StyledRouterLink = styled(Link)`
  color: rgba(148, 166, 190, 0.4);
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: rgb(248, 77, 77);
  font-family: Arial;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;
