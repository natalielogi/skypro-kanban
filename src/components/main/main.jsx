import React, { useEffect, useState } from "react";
import Column from "../Column/Column";
import { cardList } from "../../data";
import {
  MainWrapper,
  MainContainer,
  MainBlock,
  MainContent,
} from "./main.styled";
import { STATUSES } from "../../utils/constants.js";
import PopBrowse from "../popups/PopBrowse/PopBrowse.jsx";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainWrapper>
      <MainContainer>
        <MainBlock>
          <MainContent>
            {STATUSES.map((title) => (
              <Column
                key={title}
                title={title}
                cards={cardList.filter((card) => card.status === title)}
                onCardClick={(card) => setSelectedCard(card)}
                loading={loading}
              />
            ))}
          </MainContent>
        </MainBlock>

        {selectedCard && (
          <PopBrowse
            {...selectedCard}
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
