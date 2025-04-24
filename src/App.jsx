import React from "react";
import AppRoutes from "./components/AppRoutes";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
