import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/home/MainPage.tsx";
import BusTripsPage from "../pages/trips/BusTripsPage.tsx";
import ErrorPage from "../pages/error/ErrorPage.tsx";
import Checkout from "../pages/checkout/Checkout.tsx";
import TicketPage from "../pages/ticket/TicketPage.tsx";
import App from "../App.tsx";

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
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "ticket",
        element: <TicketPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
