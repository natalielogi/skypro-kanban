import React from "react";
import Column from "../Column/Column";
import { cardList } from "../../data";

const columnTitles = [
  "Без статуса",
  "Необходимо сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnTitles.map((title) => (
              <Column
                key={title}
                title={title}
                cards={cardList.filter((card) => card.status === title)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
