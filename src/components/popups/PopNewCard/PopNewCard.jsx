import React, { useEffect, useState, useRef } from "react";
import Calendar from "../../Calendar/calendar";
import * as S from "./PopNewCard.styled";
import { TOPIC_STYLES } from "../../../utils/constants.js";
import { useTaskContext } from "../../../context/TaskContext";
import { sanitizeInput } from "../../../utils/utils.js";
import { ErrorText } from "../../../styles/globalstyles.js";

const PopNewCard = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("Research");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status] = useState("Без статуса");
  const [date, setDate] = useState(null);
  const modalRef = useRef(null);
  const { addTask } = useTaskContext();
  const [formError, setFormError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!title.trim()) {
      setFormError("Пожалуйста, введите название задачи.");
      return;
    }
    if (!description.trim()) {
      setFormError("Пожалуйста, введите описание задачи.");
      return;
    }
    if (!date) {
      setFormError("Пожалуйста, выберите дату задачи.");
      return;
    }

    const cleanTitle = sanitizeInput(title.trim());
    const cleanDescription = sanitizeInput(description.trim());

    const newTask = {
      title: cleanTitle,
      topic: selectedCategory || "Research",
      status: status || "Без статуса",
      description: cleanDescription,
      date: date,
    };

    try {
      await addTask(newTask);
      onClose();
    } catch (error) {
      setFormError("Ошибка при добавлении задачи. Попробуйте снова.");
      console.error("Ошибка при добавлении задачи:", error);
    }
  };

  return (
    <S.Wrapper id="popNewCard">
      <S.Container>
        <S.Block ref={modalRef}>
          <S.Content>
            <S.Title>Создание задачи</S.Title>
            <S.Wrap>
              <S.Form id="formNewCard" onSubmit={handleSubmit}>
                <S.FormBlock>
                  <S.Label htmlFor="formTitle">Название задачи</S.Label>
                  <S.Input
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.Label htmlFor="textArea">Описание задачи</S.Label>
                  <S.Textarea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></S.Textarea>
                </S.FormBlock>
              </S.Form>
              <Calendar value={date} onChange={setDate} readOnly={false} />
            </S.Wrap>
            <S.CategorySection>
              <S.CategoryLabel>Категория</S.CategoryLabel>
              <S.CategoryThemes>
                {Object.entries(TOPIC_STYLES).map(
                  ([category, { background, color }]) => {
                    if (category === "default") return null;

                    return (
                      <S.CategoryItem
                        key={category}
                        $bg={background}
                        $color={color}
                        $active={selectedCategory === category}
                        onClick={() => handleCategoryClick(category)}
                      >
                        <p>{category}</p>
                      </S.CategoryItem>
                    );
                  }
                )}
              </S.CategoryThemes>
            </S.CategorySection>
            <S.CreateButton id="btnCreate" type="submit" form="formNewCard">
              Создать задачу
            </S.CreateButton>
            {formError && (
              <ErrorText style={{ marginTop: "12px", textAlign: "center" }}>
                {formError}
              </ErrorText>
            )}
          </S.Content>
        </S.Block>
      </S.Container>
    </S.Wrapper>
  );
};

export default PopNewCard;
