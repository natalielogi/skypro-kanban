import React from "react";
import Card from "../card/card";
import { MainColumn, ColumnTitle, CardsWrapper } from "./column.styled";
import SkeletonCard from "../SkeletonCard";

const Column = ({ title, cards, onCardClick, loading }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsWrapper>
        {loading
          ? [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
          : cards.map((card) => (
              <Card key={card.id} {...card} onClick={() => onCardClick(card)} />
            ))}
      </CardsWrapper>
    </MainColumn>
  );
};

export default Column;
