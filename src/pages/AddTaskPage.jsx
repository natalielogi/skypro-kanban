import React from "react";
import Calendar from "../components/Calendar/calendar";

const AddTaskPage = () => {
  return (
    <div className="add-task-page">
      <div className="add-task__block">
        <div className="add-task__content">
          <h3 className="add-task__ttl">Создание задачи</h3>
          <a href="/" className="add-task__close">
            &#10006;
          </a>

          <div className="add-task__wrap">
            <form
              className="add-task__form form-new"
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
            </form>

            <Calendar />
          </div>

          <div className="add-task__categories categories">
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
        </div>
      </div>
    </div>
  );
};

export default AddTaskPage;
