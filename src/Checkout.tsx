import { useState } from "react";
import Navigation from "./components/Navigation";
import PassengerForm from "./components/PassengerForm";

const PASSENGER = {
  firstName: "",
  lastName: "",
  type: "adult",
  seat: "any",
  luggage: false,
  ensurance: false,
};
export default function Checkout() {
  const [isTripDetailsHidden, setIsTripDetailsHidden] = useState(true);
  const [passengers, setPassengers] = useState([{ ...PASSENGER }]);

  function addPassenger() {
    setPassengers([...passengers, { ...PASSENGER }]);
  }
  return (
    <>
      <Navigation />
      <main className=" relative top-14 text-gray-800">
        <section className="pt-1 px-3">
          <button
            className={`p-3 flex items-center justify-between border ${
              isTripDetailsHidden ? "" : "border-b-0"
            } w-full`}
            onClick={() => setIsTripDetailsHidden(!isTripDetailsHidden)}
          >
            <span className="text-xl text-left">
              <span className=" font-medium">Izhevsk - Votkinsk</span>
              <br></br>
              <span className="text-base">17 may 06:40, 348rub</span>
            </span>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </button>
          <div
            className={`px-3 pb-4 border border-t-0 ${
              isTripDetailsHidden ? "hidden" : "block"
            }`}
          >
            <div className=" flex py-4 border-t text-sm font-medium">
              <div className=" pr-3">
                <div className=" mb-4">
                  <p>07:50</p>
                  <p className=" text-xs font-normal">18 may</p>
                </div>
                <div>
                  <p>09:15</p>
                  <p className=" text-xs font-normal">18 may</p>
                </div>
              </div>
              <div className=" py-1 flex flex-col justify-between z-10">
                <div className=" border w-3 h-3 bg-slate-50 rounded-full"></div>
                <div className=" border w-3 h-3 bg-slate-500 rounded-full"></div>
              </div>
              <div className=" my-1 relative border-l -left-[6px]"></div>
              <div className=" pl-3 flex flex-col justify-between">
                <p>Izhevsk</p>
                <p>Votkinsk</p>
              </div>
            </div>
            <div className=" py-4 border-t">
              <p>Transport operator:</p>
              <p className=" text-sm">
                <i className="fa fa-bus pr-2" aria-hidden="true"></i>TK SAPSAN
              </p>
            </div>
          </div>
        </section>
        <h1 className=" p-3 text-2xl font-medium text-blue-800">Passengers</h1>
        {passengers.map((passenger, i) => (
          <PassengerForm key={i} id={i + 1} passenger={passenger} />
        ))}

        <div className=" py-5 text-center">
          <button className="px-3 py-2 border-2" onClick={addPassenger}>
            <i className="fa fa-plus pr-1" aria-hidden="true"></i>Add passenger
          </button>
        </div>
        <div className="border mx-3 shadow-md">
          <h2 className="px-2 py-3 text-xl font-medium border-b text-blue-800">
            Contacts
          </h2>
          <div className="px-2 pb-4">
            <label className="pt-2 inline-block">Email</label>
            <input
              className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300"
              type="email"
            />
            <label className="pt-2 inline-block">Phone</label>
            <input
              className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300"
              type="number"
            />
          </div>
        </div>
        <div className="border mx-3 mt-5 shadow-md">
          <h2 className="px-2 py-3 text-xl font-medium border-b text-blue-800">
            Your booking
          </h2>
          <div className="px-2">
            <p className="pt-4 text-xl font-medium">Izhevsk - Votkinsk</p>
            <span className="pt-1 pb-4 inline-block font-medium">
              17 may 06:40
            </span>
            <div className="border-t"></div>
            <p className=" pt-3 pb-1">Passengers:</p>
            <p className=" pb-3">
              1 Adult<span className=" float-right">348rub</span>
            </p>
            <div className=" border-t"></div>
            <p className=" py-3">
              Service Fee<span className=" float-right">0rub</span>
            </p>
            <div className=" border-t"></div>
            <p className="py-3 text-2xl font-medium">
              Total<span className=" float-right">348rub</span>
            </p>
          </div>
        </div>
        <div className=" mx-3 py-4">
          <button className="px-3 py-2 w-full bg-orange-400 text-lg">
            Pay now
          </button>
        </div>
      </main>
    </>
  );
}