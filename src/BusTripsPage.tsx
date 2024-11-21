import { useEffect, useLayoutEffect, useState } from "react";
import DayPicker from "./components/DayPicker";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import SideBar from "./components/SideBar";
import Ticket from "./components/Ticket";
import { useLocation, useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/utils";
import { Trip } from "./types/types";

export default function BusTripsPage() {
  const [trips, setTrips] = useState([]);
  const { from, to, date } = useParams();

  const currentDate = date && new Date(`${date}T00:00:00`);

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  });

  useEffect(() => {
    let ignore = false;

    fetch(`http://localhost:8000/trips/${from}/${to}/${date}`)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          setTrips(data);
        }
      });

    return () => {
      ignore = true;
    };
  }, [from, to, date]);

  return (
    <>
      <Navigation />
      <main className=" relative top-14">
        <div className=" bg-sky-800 text-white ">
          <SearchForm initialIsMini={true} />
        </div>

        <div className="md:w-200 lg:w-220 xl:w-[1170px] mx-auto lg:flex">
          <div className=" px-4 lg:w-3/4">
            {currentDate && (
              <section className=" py-4 flex justify-between">
                <DayPicker
                  dpDate={new Date(currentDate.getTime() - 24 * 60 * 60 * 1000)}
                />
                <span className=" px-3 py-1 text-xl text-sky-700">
                  {currentDate.toDateString()}
                </span>
                <DayPicker
                  dpDate={new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)}
                />
              </section>
            )}
            <section className=" mb-2 flex justify-center items-center">
              <span>Sort by:&nbsp;</span>
              <button className=" text-sky-700">price</button>
              <span>&nbsp;|&nbsp;</span>
              <button className=" text-gray-500">time&nbsp;</button>
              <span className="fa fa-arrow-down text-gray-500"></span>
            </section>
            {trips.length ? (
              trips.map((trip: Trip, i) => <Ticket key={i} trip={trip} />)
            ) : (
              <p className=" text-center text-lg">{`Trips ${capitalizeFirstLetter(
                from
              )} - ${capitalizeFirstLetter(to)} not found`}</p>
            )}
            {}
          </div>
          <SideBar />
        </div>

        <Footer />
      </main>
    </>
  );
}
