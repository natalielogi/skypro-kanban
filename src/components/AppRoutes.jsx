import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import CardPage from "../pages/CardPage";
import AddTaskPage from "../pages/AddTaskPage";
import ExitModal from "../pages/ExitModal";
import NotFoundPage from "../pages/NotFoundPage";
import MainPage from "../pages/MainPage";
import { Route, Router, Routes } from "react-router-dom";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

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
