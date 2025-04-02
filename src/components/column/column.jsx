import React from 'react';
import Card from '../Card/Card';

const Column = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {/* Пример: выводим несколько карточек */}
        <Card theme="orange" title="Название задачи" date="30.10.23" />
        <Card theme="green" title="Название задачи" date="30.10.23" />
      </div>
    </div>
  );
};

export default Column;
