import React, { useEffect, useState, useRef } from "react";
import Calendar from "../../Calendar/calendar";
import * as S from "./PopNewCard.styled";

const PopNewCard = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("Web Design");
  const modalRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <S.Wrapper id="popNewCard">
      <S.Container>
        <S.Block ref={modalRef}>
          <S.Content>
            <S.Title>Создание задачи</S.Title>
            <S.Wrap>
              <S.Form id="formNewCard" action="#">
                <S.FormBlock>
                  <S.Label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </S.Label>
                  <S.Input
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.Label htmlFor="textArea">Описание задачи</S.Label>
                  <S.Textarea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.Textarea>
                </S.FormBlock>
              </S.Form>
              <Calendar />
            </S.Wrap>
            <S.CategorySection>
              <S.CategoryLabel>Категория</S.CategoryLabel>
              <S.CategoryThemes>
                <S.CategoryItem
                  $bg="#FFE4C2"
                  $color="#FF6D00"
                  $active={selectedCategory === "Web Design"}
                  onClick={() => handleCategoryClick("Web Design")}
                >
                  <p>Web Design</p>
                </S.CategoryItem>
                <S.CategoryItem
                  $bg="#B4FDD1"
                  $color="#06B16E"
                  $active={selectedCategory === "Research"}
                  onClick={() => handleCategoryClick("Research")}
                >
                  <p>Research</p>
                </S.CategoryItem>
                <S.CategoryItem
                  $bg="#E9D4FF"
                  $color="#9A48F1"
                  $active={selectedCategory === "Copywriting"}
                  onClick={() => handleCategoryClick("Copywriting")}
                >
                  <p>Copywriting</p>
                </S.CategoryItem>
              </S.CategoryThemes>
            </S.CategorySection>
            <S.CreateButton id="btnCreate">Создать задачу</S.CreateButton>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.Wrapper>
  );
};

export default PopNewCard;
