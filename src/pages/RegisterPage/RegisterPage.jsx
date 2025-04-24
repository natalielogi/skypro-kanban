import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./RegisterPage.styled";
import { Link } from "react-router-dom";
import { signUp } from "../../services/auth.js";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    setErrorMessage("");
  };

  const isFormValid = formData.name && formData.email && formData.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);
    setTouched({
      name: true,
      email: true,
      password: true,
    });

    if (!isFormValid) {
      setErrorMessage(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      return;
    }

    try {
      setIsSubmitting(true);
      await signUp({
        login: formData.email,
        name: formData.name,
        password: formData.password,
      });
      navigate("/login");
    } catch (error) {
      setErrorMessage(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
      );
    } finally {
      setIsSubmitting(false);
    }
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
                $invalid={showErrors && !formData.name}
              />
              <S.Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Эл. почта"
                $invalid={showErrors && !formData.email}
              />
              <S.Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                $invalid={showErrors && !formData.password}
              />
              {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
              <S.ButtonSignUp
                type="submit"
                disabled={isSubmitting || (showErrors && !isFormValid)}
              >
                Зарегистрироваться
              </S.ButtonSignUp>
              <S.FormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
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
