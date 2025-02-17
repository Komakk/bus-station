import { useNavigate } from "react-router-dom";
import { Trip } from "../../types/types";
import { getTime } from "../../../utils/utils";

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const navigate = useNavigate();
  const departureTime = new Date(trip.from.date);
  const arrivalTime = new Date(trip.to.date);

  function handleContinueClick() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tripid: trip.id }),
    };
    fetch("http://localhost:8000/ticket", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        navigate("/checkout", { state: { ticket: data, trip: trip } });
      });
  }
  return (
    <div className=" mb-5 bg-slate-50 md:bg-white shadow-lg">
      <div className=" md:flex md:bg-slate-50">
        <div className="p-3 md:w-2/3 md:border-r-2 border-dashed border-gray-500">
          <div className=" flex text-gray-800">
            <span className=" text-2xl">{getTime(departureTime)}</span>
            <span className=" px-3 flex items-center flex-auto text-gray-500">
              <span className=" w-3 h-[1px] inline-block flex-auto bg-gray-500"></span>
              {trip.duration} hrs
              <span className=" w-3 h-[1px] inline-block flex-auto bg-gray-500"></span>
            </span>
            <span className=" text-2xl">{getTime(arrivalTime)}</span>
          </div>
          <div className=" text-gray-700">
            <span>{trip.from.city}</span>
            <span className=" float-right">{trip.to.city}</span>
          </div>
        </div>
        <div className="px-3 mt-2 md:w-1/3 flex md:flex-col md:items-center text-gray-800">
          <div className=" w-2/5 md:w-full md:text-center">
            <p>
              <span className=" text-2xl">{trip.price}</span> rub
            </p>
            <p className=" text-xs text-gray-700">
              {trip.seats.filter((s) => s.state === "free").length} free seats
            </p>
          </div>
          <div className="w-3/5 md:w-4/5 md:my-2">
            <button
              onClick={handleContinueClick}
              className=" inline-block text-center px-3 py-2 w-full bg-green-500 text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="border-t mt-2 py-2 text-blue-700 text-sm md:mt-0 md:w-2/3 md:border-t-0 md:border-r-2 md:border-dashed md:border-gray-500">
        <span className="pl-3">
          Trip details &nbsp;<span className=" fa fa-caret-down"></span>
        </span>
        <span className="pr-3 float-right">
          Route &nbsp;<span className=" fa fa-angle-right"></span>
        </span>
      </div>
    </div>
  );
}
