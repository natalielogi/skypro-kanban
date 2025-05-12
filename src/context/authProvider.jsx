import { useState, useEffect } from "react";
import { AuthContext } from "./authContext";

 export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      const storedIsAuth = localStorage.getItem("isAuth");

      if (storedUser && storedToken && storedIsAuth === "true") {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
        setIsAuth(true);
      }
    } catch (error) {
      console.error("Ошибка при загрузке из localStorage", error);
    }
  }, []);

  const login = ({ user, token }) => {
    setUser(user);
    setToken(token);
    setIsAuth(true);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("isAuth", "true");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
