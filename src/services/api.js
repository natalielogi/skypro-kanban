import axios from "axios";

const API_BASE_URL = "https://wedev-api.sky.pro/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getTasks = async () => {
  try {
    const response = await api.get("/kanban");
    return response.data.tasks;
  } catch (error) {
    console.error("Ошибка при получении задач:", error);
    throw error;
  }
};

export const addTask = async (taskData) => {
  try {
    const response = await api.post("/kanban", taskData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data.tasks;
  } catch (error) {
    console.error("Ошибка при добавлении задачи:", error);
    throw error;
  }
};

export const getTaskById = async (id) => {
  try {
    const response = await api.get(`/kanban/${id}`);
    return response.data.task;
  } catch (error) {
    console.error("Ошибка при получении задачи по ID:", error);
    throw error;
  }
};
