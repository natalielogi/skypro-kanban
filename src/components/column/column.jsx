import React from "react";
import Card from "../Card/Card";

const Column = ({ title, cards }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
            status={card.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
