import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./RegisterPage.styled";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Регистрация:", formData);
    navigate("/login");
  };

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>
              <h2>Регистрация</h2>
            </S.ModalTitle>
            <S.Form onSubmit={handleSubmit}>
              <S.Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
                required
              />
              <S.Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Эл. почта"
                required
              />
              <S.Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                required
              />
              <S.ButtonSignUp type="submit">Зарегистрироваться</S.ButtonSignUp>
              <S.FormGroup>
                <p>
                  Уже есть аккаунт? <Link href="/login">Войдите здесь</Link>
                </p>
              </S.FormGroup>
            </S.Form>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignup>
    </S.Wrapper>
  );
};

export default RegisterPage;
