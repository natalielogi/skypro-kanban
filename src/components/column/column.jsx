import React from "react";
import Card from "../card/card";
import { MainColumn, ColumnTitle, CardsWrapper } from "./column.styled";

const Column = ({ title, cards, onCardClick }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsWrapper>
        {cards.map((card) => (
          <Card key={card.id} {...card} onClick={() => onCardClick(card)} />
        ))}
      </CardsWrapper>
    </MainColumn>
  );
};

export default Column;
