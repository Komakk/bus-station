import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/home/MainPage.tsx";
import BusTripsPage from "./pages/trips/BusTripsPage.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import Checkout from "./pages/checkout/Checkout.tsx";
import TicketPage from "./pages/ticket/TicketPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: ":from/:to/:date",
    element: <BusTripsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "checkout",
    element: <Checkout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "ticket",
    element: <TicketPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
