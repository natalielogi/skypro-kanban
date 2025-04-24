import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../LoginPage/Loginpage.styled";
import { StyledRouterLink } from "../LoginPage/Loginpage.styled";
import { useState, useContext } from "react";
import { signIn } from "../../services/auth.js";
import { AuthContext } from "../../context/authContext";

const LoginPage = () => {
  const { login: loginContext } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrorMessage("");
  };

  const isFormValid = email && password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);
    if (!isFormValid) {
      setErrorMessage("Пожалуйста, заполните все поля, чтобы войти в аккаунт.");
      return;
    }

    try {
      setIsSubmitting(true);
      const { user, token } = await signIn({ login: email, password });
      loginContext({ user, token });
      navigate("/");
    } catch (error) {
      setErrorMessage("Неверный email или пароль. Попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
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
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Эл. почта"
                $invalid={showErrors && touched.email && !email}
              />
              <S.Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Пароль"
                $invalid={showErrors && touched.password && !password}
              />
              {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
              <S.ButtonEnter
                type="submit"
                disabled={isSubmitting || (showErrors && !isFormValid)}
              >
                Войти
              </S.ButtonEnter>
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
