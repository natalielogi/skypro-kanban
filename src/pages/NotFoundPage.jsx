import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonPrimary } from "../components/popups/PopBrowse/PopBrowse.styled.js";

const CenteredWrapper = styled.main`
  min-height: 100vh;
  width: 100vw;
  background: #eaeef6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: #94a6be;
  font-size: 22px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
`;

const Text = styled.p`
  color: #3d4a5c;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 32px;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

const StyledButton = styled(ButtonPrimary).attrs({ as: Link })`
  text-decoration: none;
  display: inline-block;
  margin: 0 auto;
  padding: 5px;
`;

const NotFoundPage = () => (
  <CenteredWrapper>
    <Title>Страница не найдена</Title>
    <Text>Такой страницы не существует или она была удалена.</Text>
    <StyledButton to="/">На главную</StyledButton>
  </CenteredWrapper>
);

export default NotFoundPage;
