import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #eaeef6;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  input, textarea {
    font-family: 'Roboto', sans-serif;
  }
`;

export const ErrorText = styled.div`
  color: #ff5454;
  font-size: 13px;
  margin-top: 8px;
  text-align: left;
  min-height: 18px;
  font-weight: 400;
  letter-spacing: 0.05em;
`;
