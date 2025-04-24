import { useState, useEffect } from "react";
import { TaskContext } from "./taskContext.js";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  useEffect(() => {
    setTasks([
      {
        id: 1,
        topic: "Web Design",
        title: "Пример задачи",
        date: "12.04.2025",
        status: "Без статуса",
      },
      {
        id: 2,
        topic: "Research",
        title: "Собрать аналитику",
        date: "14.04.2025",
        status: "Необходимо сделать",
      },
    ]);
  }, []);
  
  const contextValue = {
    tasks,
    addTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
