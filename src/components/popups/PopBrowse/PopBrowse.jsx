import React, { useEffect, useRef, useState } from "react";
import Calendar from "../../Calendar/calendar";
import * as S from "./PopBrowse.styled";
import { STATUSES } from "../../../utils/constants.js";
import { TOPIC_STYLES } from "../../../utils/constants.js";

const PopBrowse = ({
  id,
  title,
  topic,
  description,
  status,
  date,
  onClose,
  onDelete,
  onSave,
}) => {
  const modalRef = useRef(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description || "");
  const [editedStatus, setEditedStatus] = useState(status || "Без статуса");
  const [editedDate, setEditedDate] = useState(date || "");
  const categoryStyle = TOPIC_STYLES[topic] || TOPIC_STYLES.default;

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

  const handleSave = () => {
    onSave?.({
      id,
      description: editedDescription,
      status: editedStatus,
      date: editedDate,
    });
    setIsEditMode(false);
  };

  const hadleCancel = () => {
    setEditedDescription(description || "");
    setEditedStatus(status || "Без статуса");
    setEditedDate(date || "");
    setIsEditMode(false);
  };

  return (
    <S.PopBrowseWrapper>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock ref={modalRef}>
          <S.PopBrowseContent>
            <S.TopBlock>
              <S.Title>{title || "Название задачи"}</S.Title>
              <S.CategoryTheme
                $bg={categoryStyle.background}
                $color={categoryStyle.color}
                $active
              >
                <p>{topic || "Категория"}</p>
              </S.CategoryTheme>
            </S.TopBlock>
            <S.Status>
              <S.SubTitle>Статус</S.SubTitle>
              <S.StatusThemes>
                {STATUSES.map((item) => (
                  <S.StatusTheme
                    key={item}
                    $gray={item === editedStatus}
                    $isClickable={isEditMode}
                    onClick={() =>
                      isEditMode ? setEditedStatus(item) : undefined
                    }
                  >
                    <p>{item}</p>
                  </S.StatusTheme>
                ))}
              </S.StatusThemes>
            </S.Status>
            <S.Wrap>
              <S.Form>
                <S.FormBlock>
                  <S.SubTitle htmlFor="textArea01">Описание задачи</S.SubTitle>
                  <S.Textarea
                    name="text"
                    id="textArea01"
                    readOnly={!isEditMode}
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    placeholder={
                      isEditMode
                        ? "Введите описание задачи..."
                        : "Описание задачи"
                    }
                  ></S.Textarea>
                </S.FormBlock>
              </S.Form>
              <Calendar
                selectedDate={editedDate}
                onSelectDate={(date) =>
                  isEditMode ? setEditedDate(date) : null
                }
                readOnly={!isEditMode}
              />
            </S.Wrap>
            <S.CategoryBlock>
              <S.SubTitle>Категория</S.SubTitle>
              <S.CategoryTheme
                $bg={categoryStyle.background}
                $color={categoryStyle.color}
                $active
              >
                <p>{topic || "Категория"}</p>
              </S.CategoryTheme>
            </S.CategoryBlock>
            {!isEditMode ? (
              <S.ButtonBlock>
                <S.ButtonGroup>
                  <S.ButtonBorder onClick={() => setIsEditMode(true)}>
                    Редактировать задачу
                  </S.ButtonBorder>
                  <S.ButtonBorder onClick={() => onDelete?.(id)}>
                    Удалить задачу
                  </S.ButtonBorder>
                </S.ButtonGroup>
                <S.ButtonPrimary onClick={onClose}>Закрыть</S.ButtonPrimary>
              </S.ButtonBlock>
            ) : (
              <S.ButtonBlock>
                <S.ButtonGroup>
                  <S.ButtonPrimary onClick={handleSave}>
                    Сохранить
                  </S.ButtonPrimary>
                  <S.ButtonBorder onClick={hadleCancel}>
                    Отменить
                  </S.ButtonBorder>
                  <S.ButtonBorder onClick={() => onDelete?.(id)}>
                    Удалить задачу
                  </S.ButtonBorder>
                </S.ButtonGroup>
                <S.ButtonPrimary onClick={onClose}>Закрыть</S.ButtonPrimary>
              </S.ButtonBlock>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseWrapper>
  );
};

export default PopBrowse;
