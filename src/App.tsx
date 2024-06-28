import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import BusRoutes from "./BusTripsPage";
import Checkout from "./Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:from/:to" element={<BusRoutes />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
