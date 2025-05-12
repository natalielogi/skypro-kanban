import React, { useState, useContext } from "react";
import Calendar from "../../Calendar/calendar";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../../context/taskContext.js";

const PopNewCard = () => {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Web Design");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      topic: category,
      date: new Date().toLocaleString("ru-RU"),
      status: "Без статуса",
    };

    addTask(newTask);
    navigate("/");
  };

  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <button
              className="pop-new-card__close"
              onClick={() => navigate("/")}
              style={{
                border: "none",
                background: "transparent",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              &#10006;
            </button>

            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {["Web Design", "Research", "Copywriting"].map((cat) => (
                  <div
                    key={cat}
                    className={`categories__theme _${cat
                      .toLowerCase()
                      .replace(" ", "")} ${
                      category === cat ? "_active-category" : ""
                    }`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    <p className={`_${cat.toLowerCase().replace(" ", "")}`}>
                      {cat}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
