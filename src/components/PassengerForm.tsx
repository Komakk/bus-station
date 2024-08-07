import { useState } from "react";
import SeatReservationPanel from "./SeatReservationPanel";

interface Passenger {
  id: string;
  firstname: string;
  lastname: string;
  type: string;
  seat: string;
  luggage: boolean;
  ensurance: boolean;
}

interface PassengerFormProps {
  index: number;
  passenger: Passenger;
  editPassenger: (id: string, name: string, value: string | boolean) => void;
  deletePassenger: (id: string) => void;
  //  setIsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  routePrice: number;
}

export default function PassengerForm({
  index,
  passenger,
  editPassenger,
  deletePassenger,
  routePrice,
}: PassengerFormProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <form className="mx-3 border shadow-md mb-5">
        <h2 className="px-2 py-3 text-xl font-medium border-b text-blue-800 flex items-center justify-between">
          Passenger {index}
          {passenger.id !== "p0" && (
            <button
              className="text-gray-500 text-xs"
              onClick={() => deletePassenger(passenger.id)}
            >
              Delete <i className="fa fa-times " aria-hidden="true"></i>
            </button>
          )}
        </h2>

        <div className="px-2">
          <div className="md:flex">
            <div className="md:w-1/2 md:pr-2">
              <label className=" pt-2 inline-block">First Name</label>
              <input
                className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300"
                placeholder="Ivan"
                name="firstname"
                value={passenger.firstname}
                onChange={(e) =>
                  editPassenger(passenger.id, e.target.name, e.target.value)
                }
              ></input>
            </div>
            <div className="md:w-1/2 md:pl-2">
              <label className=" pt-2 inline-block">Last Name</label>
              <input
                className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300"
                placeholder="Ivanov"
                name="lastname"
                value={passenger.lastname}
                onChange={(e) =>
                  editPassenger(passenger.id, e.target.name, e.target.value)
                }
              ></input>
            </div>
          </div>
          <div className="md:w-1/2 md:pr-2">
            <label className="pt-2 block">Type</label>
            <select
              className=" w-full h-[42px] text-gray-800 px-2 border-2 outline-blue-300"
              name="type"
              value={passenger.type}
              onChange={(e) =>
                editPassenger(passenger.id, e.target.name, e.target.value)
              }
            >
              <option value={"Adult"}>Adult</option>
              <option value={"Child"}>Child</option>
            </select>
          </div>
        </div>
        <div className=" flex px-2 pb-4">
          <div className=" w-1/2 pr-2">
            <label className="pt-2 inline-block">Seat</label>
            <select
              className=" w-full h-[42px] text-gray-800 px-2 border-2 outline-blue-300"
              name="seat"
              value={passenger.seat}
              onChange={(e) =>
                editPassenger(passenger.id, e.target.name, e.target.value)
              }
            >
              <option value={"any"}>Any</option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
            </select>
          </div>
          <div className=" pl-2 w-1/2 flex items-end">
            <button
              type="button"
              className="px-3 py-2 w-full border-2"
              onClick={() => setIsPanelOpen(true)}
            >
              Bus seating plan
            </button>
          </div>
        </div>
        <div className=" relative border-t"></div>
        <div className="px-2 py-2">
          <label className="flex items-center">
            <input
              className="h-4 w-4"
              type="checkbox"
              name="luggage"
              checked={passenger.luggage}
              onChange={(e) =>
                editPassenger(passenger.id, e.target.name, e.target.checked)
              }
            />
            <span className="pl-2">
              Additional luggage
              <br></br>
              <span className=" text-sm">
                + {Math.floor(routePrice * 0.18)}rub (20 kg · 80×50×30 cm)
              </span>
            </span>
          </label>
        </div>
        <div className=" border-t"></div>
        <div className="px-2 py-2">
          <label className="flex items-center">
            <input
              className="h-4 w-4"
              type="checkbox"
              name="ensurance"
              checked={passenger.ensurance}
              onChange={(e) =>
                editPassenger(passenger.id, e.target.name, e.target.checked)
              }
            />
            <span className="pl-2 align-middle">
              Add ensurance&nbsp;
              <a
                className=" text-xs text-gray-500 cursor-pointer underline"
                href="#"
              >
                (Strahovanie Group)
              </a>
              <br></br>
              <span className=" text-sm">+ 25rub</span>
            </span>
          </label>
        </div>
      </form>
      {isPanelOpen && (
        <SeatReservationPanel
          passenger={passenger}
          setIsPanelOpen={setIsPanelOpen}
          editPassenger={editPassenger}
        />
      )}
    </>
  );
}
