import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
