import React, { useEffect, useRef, useState } from "react";
import Calendar from "../../Calendar/calendar";
import * as S from "./PopBrowse.styled";
import { STATUSES, TOPIC_STYLES } from "../../../utils/constants.js";
import { getTaskById } from "../../../services/api.js";
import { sanitizeInput } from "../../../utils/utils.js";
import { ErrorText } from "../../../styles/globalstyles.js";

const PopBrowse = ({ id, onClose, onDelete, onSave }) => {
  const modalRef = useRef(null);

  const [task, setTask] = useState(null);

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");
  const [editedStatus, setEditedStatus] = useState("Без статуса");
  const [editedDate, setEditedDate] = useState("");
  const [editError, setEditError] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await getTaskById(id);
        setTask(data);
        setEditedDescription(data.description || "");
        setEditedStatus(data.status || "Без статуса");
        setEditedDate(data.date || "");
      } catch (error) {
        console.error("Ошибка при загрузке задачи:", error);
      }
    };
    fetchTask();
  }, [id]);

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
    setEditError("");

    if (!editedDescription.trim()) {
      setEditError("Пожалуйста, введите описание задачи.");
      return;
    }
    if (!editedDate) {
      setEditError("Пожалуйста, выберите дату задачи.");
      return;
    }
    if (!task.topic || task.topic === "default") {
      setEditError("Пожалуйста, выберите категорию.");
      return;
    }

    const cleanDescription = sanitizeInput(editedDescription.trim());

    onSave?.({
      id,
      title: task.title,
      topic: task.topic,
      description: cleanDescription,
      status: editedStatus,
      date: editedDate,
    });
    setIsEditMode(false);
    setEditError("");
  };

  const hadleCancel = () => {
    if (!task) return;
    setEditedDescription(task.description || "");
    setEditedStatus(task.status || "Без статуса");
    setEditedDate(task.date || "");
    setIsEditMode(false);
    setEditError("");
  };

  if (!task) return null;

  const categoryStyle = TOPIC_STYLES[task.topic] || TOPIC_STYLES.default;
  return (
    <S.PopBrowseWrapper>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock ref={modalRef}>
          <S.PopBrowseContent>
            <S.TopBlock>
              <S.Title>{task.title || "Название задачи"}</S.Title>
              <S.CategoryTheme
                $bg={categoryStyle.background}
                $color={categoryStyle.color}
                $active
              >
                <p>{task.topic || "Категория"}</p>
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
                value={editedDate}
                onChange={isEditMode ? setEditedDate : undefined}
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
                <p>{task.topic || "Категория"}</p>
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
                {editError && (
                  <ErrorText style={{ marginTop: "12px", textAlign: "center" }}>
                    {editError}
                  </ErrorText>
                )}
              </S.ButtonBlock>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseWrapper>
  );
};

export default PopBrowse;
