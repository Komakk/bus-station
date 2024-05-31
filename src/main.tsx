import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BusRoutes from "./BusRoutes.tsx";
import Checkout from "./Checkout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>
);
