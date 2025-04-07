import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="main">
      <div className="container">
        {loading ? (
          <div className="loading">Данные загружаются</div>
        ): (
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
        )}
      </div>
    </main>
  );
};

export default Main;
