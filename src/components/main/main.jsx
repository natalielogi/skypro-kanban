import React, { useState } from "react";
import Column from "../Column/Column";
import {
  MainWrapper,
  MainContainer,
  MainBlock,
  MainContent,
} from "./main.styled";
import { STATUSES } from "../../utils/constants.js";
import PopBrowse from "../popups/PopBrowse/PopBrowse.jsx";
import { useTaskContext } from "../../context/TaskContext.jsx";

const Main = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const { tasks, updateTask, deleteTask } = useTaskContext();

  return (
    <MainWrapper>
      <MainContainer>
        <MainBlock>
          <MainContent>
            {STATUSES.map((title) => (
              <Column
                key={title}
                title={title}
                cards={tasks.filter((card) => card.status === title)}
                onCardClick={(card) => setSelectedCard(card)}
                loading={false}
              />
            ))}
          </MainContent>
        </MainBlock>

        {selectedCard && (
          <PopBrowse
            id={selectedCard._id}
            title={selectedCard.title}
            topic={selectedCard.topic}
            description={selectedCard.description}
            status={selectedCard.status}
            date={selectedCard.date}
            onClose={() => setSelectedCard(null)}
            onDelete={(id) => {
              deleteTask(id);
              setSelectedCard(null);
            }}
            onSave={({ id, title, topic, description, status, date }) => {
              updateTask(id, { title, topic, description, status, date });
              setSelectedCard(null);
            }}
          />
        )}
      </MainContainer>
    </MainWrapper>
  );
};

export default Main;
