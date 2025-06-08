import React from "react";
import {
  CardWrapper,
  Cards,
  CardGroup,
  CardTheme,
  CardBtn,
  CardContent,
  CardTitile,
  CardDate,
  BtnWrapper,
  Tooltip,
} from "./card.styled";
import { format } from "date-fns";
import { useDraggable } from "@dnd-kit/core";

const Card = ({ topic, title, date, onClick, id }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    zIndex: isDragging ? 999 : 1,
    opacity: isDragging ? 0.8 : 1,
    cursor: "pointer",
  };

  const formatDate = (iso) => {
    if (!iso) return "";
    return format(new Date(iso), "dd.MM.yy");
  };
  return (
    <>
      <CardWrapper ref={setNodeRef} style={style} onClick={onClick}>
        <Cards>
          <CardGroup>
            <CardTheme $topic={topic}>
              <p>{topic}</p>
            </CardTheme>
            <BtnWrapper>
              <CardBtn
                {...attributes}
                {...listeners}
                onClick={(e) => e.stopPropagation()}
                tabIndex={0}
                aria-label="Перетащить"
              >
                <div></div>
                <div></div>
                <div></div>
              </CardBtn>
              <Tooltip>Перетащить</Tooltip>
            </BtnWrapper>
          </CardGroup>
          <CardContent>
            <CardTitile>{title}</CardTitile>
            <CardDate>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clipPath="url(#clip0_1_415)">
                  <path
                    d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_415">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>{formatDate(date)}</p>
            </CardDate>
          </CardContent>
        </Cards>
      </CardWrapper>
    </>
  );
};

export default Card;
