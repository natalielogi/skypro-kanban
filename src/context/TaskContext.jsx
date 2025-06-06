/* eslint-disable react-refresh/only-export-components */

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getTasks, addTask as apiAddTask } from "../services/api.js";

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

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
