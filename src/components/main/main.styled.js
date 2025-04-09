import styled from "styled-components";
import { Container as BaseContainer } from "../header/Header.styled";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const MainContainer = styled(BaseContainer)``;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
  color: #333;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
