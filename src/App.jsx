import React from "react";
import AppRoutes from "./components/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import TaskProvider from "./context/taskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
