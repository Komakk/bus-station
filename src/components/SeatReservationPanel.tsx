import { useEffect, useState } from "react";
import { Passenger, Seat, Trip } from "../types/types";
import { useLocation } from "react-router-dom";

interface SeatReservationPanelProps {
  passenger: Passenger;
  setIsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editPassenger: (id: string, name: string, value: string | boolean) => void;
}

interface BusSeatProps {
  seat: { number: string; state: string };
  isSelected: boolean;
  handleSeatClick: (seat: string) => void;
}

function BusSeat({ seat, isSelected, handleSeatClick }: BusSeatProps) {
  if (seat.state === "free" || isSelected) {
    return (
      <div
        className={`${
          isSelected && " bg-green-600"
        } w-16 h-16 border m-1 text-center leading-[64px]`}
        onClick={() => handleSeatClick(seat.number)}
      >
        <span>{seat.number}</span>
      </div>
    );
  } else {
    return (
      <div className="w-16 h-16 m-1 text-center leading-[64px] bg-gray-100 text-gray-300">
        <span>{seat.number}</span>
      </div>
    );
  }
}

const MOCK_RESERVATION = "789";

export default function SeatReservationPanel({
  passenger,
  setIsPanelOpen,
  editPassenger,
}: SeatReservationPanelProps) {
  const location = useLocation();
  const { data } = location.state;
  const trip: Trip = data;
  const [busSeats, setBusSeats] = useState(trip.seats);

  useEffect(() => {
    loadSeats();
  }, []);

  function loadSeats() {
    fetch(`http://localhost:8000/seats/${trip.id}`)
      .then((response) => response.json())
      .then((data) => setBusSeats(data));
  }

  function handleSeatClick(seatNumber: string) {
    putSeat(trip.id, seatNumber, MOCK_RESERVATION, passenger.id);
  }

  function putSeat(
    tripId: string,
    seatNumber: string,
    reservationId: string,
    passengerId: string
  ) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tripId, seatNumber, reservationId, passengerId }),
    };
    fetch("http://localhost:8000/seat/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const passNewSeat = data.find(
            (seat: Seat) => seat.reservation.passengerId === passengerId
          );

          setBusSeats(data);
          editPassenger(passengerId, "seat", passNewSeat?.number || "any");
        } else {
          alert("Something went wrong. Please try again.");
          loadSeats();
        }
      });
  }

  let seatList: JSX.Element[] = [];
  for (let i = 0; i < busSeats.length / 4; i++) {
    const row: JSX.Element[] = [];
    for (let j = 0; j < 4; j++) {
      if (j === 2)
        row.push(<div key={j + "e"} className=" w-16 h-16 m-1"></div>);
      const seat = busSeats[4 * i + j];
      row.push(
        <BusSeat
          key={seat.number}
          seat={seat}
          isSelected={passenger.seat === seat.number}
          handleSeatClick={handleSeatClick}
        />
      );
    }
    seatList.push(
      <div key={i} className="flex justify-between px-2 pb-2">
        {row}
      </div>
    );
  }

  return (
    <>
      <div className="fixed bg-white h-full right-0 top-0 max-w-96 z-40">
        <div className=" px-3 flex items-center justify-between">
          <h2 className=" text-xl flex-1 text-center">Seat Reservation</h2>
          <button
            className=" p-2 text-xl cursor-pointer"
            onClick={() => setIsPanelOpen(false)}
          >
            <i className="fa fa-times " aria-hidden="true"></i>
          </button>
        </div>
        <div>
          <img src="/driver.png"></img>
        </div>
        <div>{seatList}</div>
        <div className="p-3 w-full absolute bottom-0 flex items-center justify-between">
          <span>
            {passenger.seat !== "any"
              ? `Selected seat: ${passenger.seat}`
              : "No seat selected"}
          </span>
          <button
            className=" px-3 py-2 w-36 bg-yellow-500 "
            onClick={() => {
              setIsPanelOpen(false);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
      <div
        className="fixed top-0 left-0 w-full h-full z-30 backdrop-brightness-50"
        onClick={() => {
          setIsPanelOpen(false);
        }}
      ></div>
    </>
  );
}
