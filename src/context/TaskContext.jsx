/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getTasks,
  addTask as apiAddTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from "../services/api.js";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchTasks = useCallback(async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Ошибка при получении задач:", error);
    } finally {
      setLoading(false);
    }
  }, []);

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

  const deleteTask = async (id) => {
    try {
      const updatedTasks = await apiDeleteTask(id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchTasks();
    } else {
      setLoading(false);
    }
  }, [fetchTasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        fetchTasks,
        addTask,
        updateTask,
        deleteTask,
        loading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
