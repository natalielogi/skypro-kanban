/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";
import {
  getTasks,
  addTask as apiAddTask,
  updateTask as apiUpdateTask,
} from "../services/api.js";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Ошибка при получении задач:", error);
    }
  };

  const addTask = async (taskData) => {
    try {
      const updatedTasks = await apiAddTask(taskData);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      const updatedTasks = await apiUpdateTask(id, updatedData);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Ошибка при обновлении задачи:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
