import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./MainPage.tsx";
import BusTripsPage from "./BusTripsPage.tsx";
import Checkout from "./Checkout.tsx";
import Booking from "./Booking.tsx";
import ErrorPage from "./ErrorPage.tsx";

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
    path: "booking",
    element: <Booking />,
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
