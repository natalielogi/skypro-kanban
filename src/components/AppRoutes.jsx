import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import CardPage from "../pages/CardPage";
import AddTaskPage from "../pages/AddTaskPage";
import ExitModal from "../pages/ExitModal/ExitModal";
import NotFoundPage from "../pages/NotFoundPage";
import MainPage from "../pages/MainPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  const ProtectedRoute = ({ children }) => {
    if (!isAuth) return <Navigate to="/login" replace />;
    return children;
  };

  return (
    <Routes>
      {/* Главная страница (доска с карточками) */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />

      {/* Страница карточки */}
      <Route
        path="/card/:id"
        element={
          <ProtectedRoute>
            <CardPage />
          </ProtectedRoute>
        }
      />

      {/* Добавление задачи */}
      <Route
        path="/add-task"
        element={
          <ProtectedRoute>
            <AddTaskPage />
          </ProtectedRoute>
        }
      />

      {/* Выход */}
      <Route
        path="/exit"
        element={
          <ProtectedRoute>
            <ExitModal setIsAuth={setIsAuth} />
          </ProtectedRoute>
        }
      />

      {/* Авторизация */}
      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />

      {/* Регистрация */}
      <Route path="/register" element={<RegisterPage />} />

      {/* Страница 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
