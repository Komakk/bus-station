import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
