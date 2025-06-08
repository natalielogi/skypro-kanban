import React, { useState } from "react";
import Column from "../column/column.jsx";
import {
  MainWrapper,
  MainContainer,
  MainBlock,
  MainContent,
} from "./main.styled";
import { STATUSES } from "../../utils/constants.js";
import PopBrowse from "../popups/PopBrowse/PopBrowse.jsx";
import { useTaskContext } from "../../context/TaskContext.jsx";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import SkeletonCard from "../SkeletonCard";
import Card from "../card/card.jsx";

const Main = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const { tasks, updateTask, deleteTask, loading } = useTaskContext();

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = ({ active, over }) => {
    console.log("▶️ Drag end");
    console.log("👉 active.id:", active.id);
    console.log("👉 over.id:", over?.id);
    if (!over || active.id === over.id) return;

    const draggedTask = tasks.find((t) => t._id === active.id);
    const newStatus = over.id;

    if (draggedTask && draggedTask.status !== newStatus) {
      updateTask(draggedTask._id, {
        ...draggedTask,
        status: newStatus,
      });
    }
  };

  return (
    <MainWrapper>
      <MainContainer>
        <MainBlock>
          <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <MainContent>
              {STATUSES.map((status) => (
                <Column key={status} title={status}>
                  {loading
                    ? [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
                    : tasks
                        .filter((card) => card.status === status)
                        .map((card) => (
                          <Card
                            key={card._id}
                            id={card._id}
                            title={card.title}
                            topic={card.topic}
                            date={card.date}
                            onClick={() => setSelectedCard(card)}
                          />
                        ))}
                </Column>
              ))}
            </MainContent>
          </DndContext>
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
