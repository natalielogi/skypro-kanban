import React from "react";
import Card from "../card/card";
import {
  StyledMainColumn as MainColumn,
  ColumnTitle,
  CardsWrapper,
} from "./column.styled";
import SkeletonCard from "../SkeletonCard";
import { useDroppable } from "@dnd-kit/core";

const Column = ({ title, children }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });
  return (
    <MainColumn ref={setNodeRef}>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsWrapper>{children}</CardsWrapper>
    </MainColumn>
  );
};

export default Column;
