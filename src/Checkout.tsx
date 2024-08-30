import { useState } from "react";
import Navigation from "./components/Navigation";
import PassengerForm from "./components/PassengerForm";
import { nanoid } from "nanoid";
import { Passenger, Trip } from "./types/types";
import { useLocation, useNavigate } from "react-router-dom";
import { getDate, getDayAndMonth, getTime } from "../utils/utils";

export default function Checkout() {
  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      id: "p0",
      firstname: "",
      lastname: "",
      type: "Adult",
      seat: "any",
      luggage: false,
      ensurance: false,
    },
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  const { trip } = location.state;
  const departureTime = new Date(trip.from.date);
  const arrivalTime = new Date(trip.to.date);

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
      tripId: trip.id,
      passengers: passengers,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:8000/tickets", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/booking", {
          replace: true,
          state: {
            ticketId: data,
            tripPrice: trip.price,
            from: trip.from,
            to: trip.to,
            passengers: passengers,
          },
        });
      });
  }

  const bookingItemsCount = passengers.reduce(
    (prev, curr) => {
      curr.type === "Adult" ? (prev.adult += 1) : (prev.child += 1);
      prev.luggage += prev.luggage ? 1 : 0;
      prev.ensurance += prev.ensurance ? 1 : 0;
      return prev;
    },
    { adult: 0, child: 0, luggage: 0, ensurance: 0 }
  );

  const booking = {
    adult: bookingItemsCount.adult * trip.price,
    child: (bookingItemsCount.child * trip.price) / 2,
    luggage:
      passengers.filter((item) => item.luggage).length * trip.price * 0.18,
    ensurance: passengers.filter((item) => item.ensurance).length * 25,
  };

  return (
    <>
      <Navigation />
      <main className=" relative top-14 text-gray-800">
        <div className="md:w-200 lg:w-220 xl:w-[1170px] mx-auto lg:flex">
          <div className=" lg:w-3/4">
            <h1 className=" p-3 text-2xl font-medium text-blue-800">
              Passengers
            </h1>
            {passengers.map((passenger, i) => (
              <PassengerForm
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
                onClick={addPassenger}
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
                  <label className="pt-2 inline-block">Email</label>
                  <input
                    className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300"
                    type="email"
                  />
                </div>
                <div className="md:w-1/2 md:pl-2">
                  <label className="pt-2 inline-block">Phone</label>
                  <input
                    className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" relative lg:w-1/4">
            <div className="lg:fixed lg:w-1/4 lg:pr-12">
              <div className="border mx-3 mt-5 shadow-md">
                <h2 className="px-2 py-3 text-xl font-medium border-b text-blue-800">
                  Your booking
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
                    <span className=" float-right">{booking.adult}rub</span>
                  </p>
                  {bookingItemsCount.child > 0 && (
                    <p>
                      {bookingItemsCount.child > 1
                        ? `${bookingItemsCount.child} Children`
                        : `${bookingItemsCount.child} Child`}
                      <span className=" float-right">{booking.child}rub</span>
                    </p>
                  )}
                  {booking.luggage > 0 && (
                    <div className="mt-3 border-t">
                      <p className=" py-3">
                        {booking.luggage / (trip.price * 0.18)} Additional
                        luggage
                        <span className=" float-right">
                          {Math.floor(booking.luggage)}rub
                        </span>
                      </p>
                    </div>
                  )}
                  {booking.ensurance > 0 && (
                    <div className="border-t">
                      <p className=" py-3">
                        {booking.ensurance / 25} Ensurance
                        <span className=" float-right">
                          {booking.ensurance}rub
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
                      {Object.values(booking).reduce((prev, cur) => prev + cur)}
                      rub
                    </span>
                  </p>
                </div>
              </div>
              <div className=" mx-3 py-4">
                <button
                  className="px-3 py-2 w-full bg-orange-400 text-lg"
                  onClick={() => postData()}
                >
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
