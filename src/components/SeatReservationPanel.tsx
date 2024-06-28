interface Passenger {
  id: string;
  firstname: string;
  lastname: string;
  type: string;
  seat: string;
  luggage: boolean;
  ensurance: boolean;
}

interface SeatReservationPanelProps {
  passenger: Passenger;
  setIsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editPassenger: (id: string, name: string, value: string | boolean) => void;
}

interface SeatProps {
  seat: { number: string; state: string };
  isSelected: boolean;
  handleSeatClick: (seat: string) => void;
}

function Seat({ seat, isSelected, handleSeatClick }: SeatProps) {
  if (seat.state === "free") {
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

const BUS_SEATS = [
  { number: "1", state: "free" },
  { number: "2", state: "occupied" },
  { number: "3", state: "free" },
  { number: "4", state: "free" },
];

export default function SeatReservationPanel({
  passenger,
  setIsPanelOpen,
  editPassenger,
}: SeatReservationPanelProps) {
  function handleSeatClick(seat: string) {
    const newSeat = seat === passenger.seat ? "any" : seat;
    editPassenger(passenger.id, "seat", newSeat);
  }

  let seatList: JSX.Element[] = [];
  for (let i = 0; i < BUS_SEATS.length / 4; i++) {
    const row: JSX.Element[] = [];
    for (let j = 0; j < 4; j++) {
      if (j === 2)
        row.push(<div key={j + "e"} className=" w-16 h-16 m-1"></div>);
      const seat = BUS_SEATS[4 * i + j];
      row.push(
        <Seat
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
    <div className="fixed top-0 left-0 w-full h-full z-30 bg-white">
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
  );
}
