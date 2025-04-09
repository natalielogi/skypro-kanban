import React from "react";
import Card from "../Card/Card";
import { MainColumn, ColumnTitle, CardsWrapper } from "./column.styled";

const Column = ({ title, cards }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsWrapper>
        {cards.map((card) => (
          <Card
            key={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
            status={card.status}
          />
        ))}
      </CardsWrapper>
    </MainColumn>
  );
};

export default Column;
