import { useEffect, useLayoutEffect, useState } from "react";
import Navigation from "./components/Navigation";
import PassengerSection from "./components/PassengerSection";
import { nanoid } from "nanoid";
import { Passenger, Trip } from "./types/types";
import { useLocation, useNavigate } from "react-router-dom";
import { getDate, getDayAndMonth, getMinAndSec, getTime } from "../utils/utils";
import useTimer from "./custom-hooks/useTimer";
import Footer from "./components/Footer";

export default function Checkout() {
  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      id: nanoid(),
      firstname: "",
      lastname: "",
      type: "Adult",
      seat: "any",
      luggage: false,
      ensurance: false,
    },
  ]);
  const [contacts, setContacts] = useState({ email: "", phone: "" });
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state) throw new Error("No trip and ticket data");

  const timer = useTimer(new Date().getTime() + 999 * 60);

  const trip: Trip = location.state.trip;
  const ticket: { id: string; paid: boolean } = location.state.ticket;
  const departureTime = new Date(trip.from.date);
  const arrivalTime = new Date(trip.to.date);

  console.log(ticket);

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    return () => {
      console.log("checkout unmount");
      //clear location state
      window.history.replaceState(null, "");
    };
  }, []);

  function addPassenger() {
    setPassengers([
      ...passengers,
      {
        id: nanoid(),
        firstname: "",
        lastname: "",
        type: "Adult",
        seat: "any",
        luggage: false,
        ensurance: false,
      },
    ]);
  }

  function editPassenger(id: string, name: string, value: string | boolean) {
    const editedPassengers = passengers.map((passenger) => {
      if (id === passenger.id) {
        const editedPassenger = { ...passenger };
        if (typeof value === "string") {
          editedPassenger[name as "firstname" | "lastname" | "type" | "seat"] =
            value;
        } else {
          editedPassenger[name as "luggage" | "ensurance"] = value;
        }
        return editedPassenger;
      }
      return passenger;
    });
    setPassengers(editedPassengers);
  }

  function deletePassenger(id: string) {
    const remainingPassengers = passengers.filter(
      (passenger) => passenger.id !== id
    );
    setPassengers(remainingPassengers);
  }

  function postData() {
    const data = {
      ticket: ticket,
      tripId: trip.id,
      passengers: passengers,
      contacts: contacts,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:8000/ticket", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        navigate("/booking", {
          replace: true,
          state: {
            ticketId: data.id,
            from: trip.from,
            to: trip.to,
            passengers: data.passengers,
            booking: booking,
          },
        });
      });
  }

  const bookingItemsCount = passengers.reduce(
    (prev, curr) => {
      curr.type === "Adult" ? (prev.adult += 1) : (prev.child += 1);
      prev.luggage += curr.luggage ? 1 : 0;
      prev.ensurance += curr.ensurance ? 1 : 0;
      return prev;
    },
    { adult: 0, child: 0, luggage: 0, ensurance: 0 }
  );

  const booking = {
    adult: {
      count: bookingItemsCount.adult,
      price: bookingItemsCount.adult * trip.price,
    },
    child: {
      count: bookingItemsCount.child,
      price: (bookingItemsCount.child * trip.price) / 2,
    },
    luggage: {
      count: bookingItemsCount.luggage,
      price: bookingItemsCount.luggage * trip.price * 0.18,
    },
    ensurance: {
      count: bookingItemsCount.ensurance,
      price: bookingItemsCount.ensurance * 25,
    },
  };

  return (
    <>
      <Navigation />
      <main className=" relative text-gray-800 lg:top-14">
        <form
          className="md:w-200 lg:w-220 xl:w-[1170px] mx-auto lg:flex"
          onSubmit={(e) => {
            e.preventDefault();
            postData();
          }}
        >
          <div className="relative lg:w-3/4">
            <div className=" mr-5 sticky top-0 left-full h-14 w-16 z-40 flex items-center justify-center lg:hidden">
              <span
                className={`text-xl p-1 border-2 ${
                  timer < 6000 && "bg-red-500 text-white"
                }`}
              >
                {getMinAndSec(new Date(timer))}
              </span>
            </div>

            <h1 className=" p-3 text-2xl font-medium text-blue-800">
              Enter passengers and contacts
            </h1>
            <p className=" p-3">
              <span className=" text-red-600">*</span> indicates a required
              field
            </p>
            {passengers.map((passenger, i) => (
              <PassengerSection
                key={passenger.id}
                index={i + 1}
                passenger={passenger}
                editPassenger={editPassenger}
                deletePassenger={deletePassenger}
                routePrice={trip.price}
              />
            ))}
            <div className=" mb-5 text-center">
              <button
                className="px-3 py-2 border-2 w-72"
                type="button"
                onClick={(e) => {
                  addPassenger();
                }}
              >
                <i className="fa fa-plus pr-1" aria-hidden="true"></i>Add
                passenger
              </button>
            </div>
            <div className="border mx-3 shadow-md mb-5">
              <h2 className="px-2 py-3 text-xl font-medium border-b text-blue-800">
                Contacts
              </h2>
              <div className="px-2 pb-4 md:flex">
                <div className="md:w-1/2 md:pr-2">
                  <label className="pt-2 inline-block">
                    Email <span className=" text-red-600">*</span>
                  </label>
                  <input
                    className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300 invalid:outline-red-400 invalid:outline invalid:outline-2 invalid:border-none"
                    type="email"
                    value={contacts.email}
                    onChange={(e) =>
                      setContacts({ ...contacts, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="md:w-1/2 md:pl-2">
                  <label className="pt-2 inline-block">Phone</label>
                  <input
                    className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300"
                    type="number"
                    value={contacts.phone}
                    onChange={(e) =>
                      setContacts({ ...contacts, phone: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="  lg:w-1/4">
            <div className="lg:sticky top-16 w-full">
              <div className="border mx-3 mt-5 shadow-md">
                <h2 className="px-2 py-3 text-xl   font-medium border-b text-blue-800">
                  Your booking
                  <span
                    className={`hidden lg:inline px-1 border-2 float-right ${
                      timer < 6000 && "bg-red-500 text-white"
                    }`}
                  >
                    {getMinAndSec(new Date(timer))}
                  </span>
                </h2>

                <div className="px-2">
                  <div className=" flex py-4 text-sm font-medium">
                    <div className=" pr-3">
                      <div className=" mb-4">
                        <p>{getTime(departureTime)}</p>
                        <p className=" text-xs font-normal">
                          {getDayAndMonth(departureTime)}
                        </p>
                      </div>
                      <div>
                        <p>{getTime(arrivalTime)}</p>
                        <p className=" text-xs font-normal">
                          {getDayAndMonth(arrivalTime)}
                        </p>
                      </div>
                    </div>
                    <div className=" py-1 flex flex-col justify-between z-10">
                      <div className=" border w-3 h-3 bg-slate-50 rounded-full"></div>
                      <div className=" border w-3 h-3 bg-slate-500 rounded-full"></div>
                    </div>
                    <div className=" my-1 relative border-l -left-[6px]"></div>
                    <div className=" pl-3 flex flex-col justify-between">
                      <p>{trip.from.city}</p>
                      <p>{trip.to.city}</p>
                    </div>
                  </div>
                  <div className="border-t"></div>
                  <p className=" pt-3 pb-1">Passengers:</p>
                  <p>
                    {bookingItemsCount.adult > 1
                      ? `${bookingItemsCount.adult} Adults`
                      : `${bookingItemsCount.adult} Adult`}
                    <span className=" float-right">
                      {booking.adult.price}rub
                    </span>
                  </p>
                  {bookingItemsCount.child > 0 && (
                    <p>
                      {bookingItemsCount.child > 1
                        ? `${bookingItemsCount.child} Children`
                        : `${bookingItemsCount.child} Child`}
                      <span className=" float-right">
                        {booking.child.price}rub
                      </span>
                    </p>
                  )}
                  {bookingItemsCount.luggage > 0 && (
                    <div className="mt-3 border-t">
                      <p className=" py-3">
                        {bookingItemsCount.luggage} Additional luggage
                        <span className=" float-right">
                          {Math.floor(booking.luggage.price)}rub
                        </span>
                      </p>
                    </div>
                  )}
                  {bookingItemsCount.ensurance > 0 && (
                    <div className="border-t">
                      <p className=" py-3">
                        {bookingItemsCount.ensurance} Ensurance
                        <span className=" float-right">
                          {booking.ensurance.price}rub
                        </span>
                      </p>
                    </div>
                  )}
                  <div className="border-t"></div>
                  <p className=" py-3">
                    Service Fee<span className=" float-right">0rub</span>
                  </p>
                  <div className=" border-t"></div>
                  <p className="py-3 text-2xl font-medium">
                    Total
                    <span className=" float-right">
                      {Object.values(booking).reduce(
                        (prev, cur) => prev + cur.price,
                        0
                      )}
                      rub
                    </span>
                  </p>
                </div>
              </div>
              <div className=" mx-3 py-4">
                <button
                  type="submit"
                  className="px-3 py-2 w-full bg-orange-400 text-lg"
                >
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer />
      {timer < 1000 && (
        <div className=" fixed top-0 left-0 w-full h-full z-50 backdrop-brightness-50 flex items-center justify-center">
          <div className=" p-4 max-w-80 bg-white">
            <p className="pt-2 pb-4 text-xl font-medium text-center">
              <i
                className="pr-1 fa fa-exclamation-triangle"
                aria-hidden="true"
              ></i>
              Time expired.
            </p>
            <p className="pb-4 text-center">
              Please search again to continue using the app.
            </p>
            <button
              onClick={() => {
                navigate(
                  `/${trip.from.city}/${trip.to.city}/${getDate(
                    new Date(trip.from.date)
                  )}`.toLowerCase(),
                  { replace: true }
                );
              }}
              className=" px-4 py-2 w-full bg-orange-400"
            >
              Go back to search
            </button>
          </div>
        </div>
      )}
    </>
  );
}
