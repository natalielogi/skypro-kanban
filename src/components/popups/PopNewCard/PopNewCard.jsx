import React, { useEffect } from "react";
import Calendar from "../../Calendar/calendar";
import * as S from "./PopNewCard.styled";

const PopNewCard = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <S.Wrapper className="pop-new-card" id="popNewCard">
      <S.Container className="pop-new-card__container">
        <S.Block className="pop-new-card__block">
          <S.Content className="pop-new-card__content">
            <S.Title className="pop-new-card__ttl">Создание задачи</S.Title>
            <S.CloseButton className="pop-new-card__close" onClick={onClose}>
              &#10006;
            </S.CloseButton>

            <S.Wrap className="pop-new-card__wrap">
              <S.Form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </S.Form>
              <Calendar />
            </S.Wrap>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.Wrapper>
  );
};

export default PopNewCard;
