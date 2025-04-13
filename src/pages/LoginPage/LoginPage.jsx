import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../LoginPage/Loginpage.styled";
import { StyledRouterLink } from "../LoginPage/Loginpage.styled";
import { useState } from "react";

const LoginPage = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <S.Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>
              <h2>Вход</h2>
            </S.ModalTitle>
            <S.Form onSubmit={handleSubmit}>
              <S.Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Эл. почта"
                required
              />
              <S.Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                required
              />
              <S.ButtonEnter type="submit">Войти</S.ButtonEnter>
              <S.FormGroup>
                <p>Нужно зарегистрироваться?</p>
                <StyledRouterLink to="/register">
                  Регистрируйтесь здесь
                </StyledRouterLink>
              </S.FormGroup>
            </S.Form>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </S.Wrapper>
  );
};

export default LoginPage;
