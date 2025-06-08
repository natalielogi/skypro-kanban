import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
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
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/exit"
        element={
          <ProtectedRoute>
            <ExitModal setIsAuth={setIsAuth} />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
