import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/home/MainPage.tsx";
import BusTripsPage from "../pages/trips/BusTripsPage.tsx";
import ErrorPage from "../pages/error/ErrorPage.tsx";
import Checkout from "../pages/checkout/Checkout.tsx";
import TicketPage from "../pages/ticket/TicketPage.tsx";
import App from "../App.tsx";
import TicketsPage from "../pages/ticket/TicketsPage.tsx";
import Login from "../components/Login.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import Register from "../components/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: ":from/:to/:date",
        element: <BusTripsPage />,
      },

      {
        path: "tickets/:ticketId",
        element: (
          <PrivateRoute>
            <TicketPage />
          </PrivateRoute>
        ),
      },
      {
        path: "tickets",
        element: (
          <PrivateRoute>
            <TicketsPage />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "checkout",
    element: (
      <PrivateRoute>
        <Checkout />
      </PrivateRoute>
    ),
  },
]);

export default router;
