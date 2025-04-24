import React, { useEffect, useState, useContext } from "react";
import Column from "../Column/Column";
import {
  MainWrapper,
  MainContainer,
  LoadingContainer,
  MainBlock,
  MainContent,
} from "./main.styled";
import { TaskContext } from "../../context/taskContext.js";

const columnTitles = [
  "Без статуса",
  "Необходимо сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = () => {
  const { tasks } = useContext(TaskContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainWrapper>
      <MainContainer>
        {loading ? (
          <LoadingContainer>Данные загружаются</LoadingContainer>
        ) : (
          <MainBlock>
            <MainContent>
              {columnTitles.map((title) => (
                <Column
                  key={title}
                  title={title}
                  cards={tasks.filter((card) => card.status === title)}
                />
              ))}
            </MainContent>
          </MainBlock>
        )}
      </MainContainer>
    </MainWrapper>
  );
};

export default Main;
