import React, { useEffect, useState } from "react";
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
  const { tasks } = useTaskContext();

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
            onClose={() => setSelectedCard(null)}
            onDelete={() => {
              setSelectedCard(null);
            }}
          ></PopBrowse>
        )}
      </MainContainer>
    </MainWrapper>
  );
};

export default Main;
