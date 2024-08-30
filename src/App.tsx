import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./MainPage";
import Checkout from "./Checkout";
import BusTripsPage from "./BusTripsPage";
import { useLayoutEffect } from "react";
import Booking from "./Booking";

export default function App() {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:from/:to/:date" element={<BusTripsPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}
