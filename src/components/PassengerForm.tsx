interface PassengerFormProps {
  id: number;
  passenger: {
    firstName: string;
    lastName: string;
    type: string;
    seat: string;
    luggage: boolean;
    ensurance: boolean;
  };
}

export default function PassengerForm({ id, passenger }: PassengerFormProps) {
  return (
    <form className="mx-3 border shadow-md">
      <h2 className="px-2 py-3 text-xl font-medium border-b text-blue-800">
        Passenger {id}
      </h2>
      <div className="px-2">
        <label className=" pt-2 inline-block">First Name</label>
        <input
          className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300"
          placeholder="Ivan"
          name="firstname"
          //value={passenger.firstName}
        ></input>
        <label className=" pt-2 inline-block">Last Name</label>
        <input
          className="w-full text-gray-800 px-3 py-2 border-2 outline-blue-300"
          placeholder="Ivanov"
          name="lastname"
          //value={passenger.lastName}
        ></input>
        <label className="pt-2 inline-block">Type</label>
        <select
          className=" w-full h-[42px] text-gray-800 px-2 border-2 outline-blue-300"
          name="type"
        >
          <option value={"Adult"}>Adult</option>
          <option value={"Child"}>Child</option>
        </select>
      </div>
      <div className=" flex px-2 pb-4">
        <div className=" w-1/2 pr-2">
          <label className="pt-2 inline-block">Seat</label>
          <select
            className=" w-full h-[42px] text-gray-800 px-2 border-2 outline-blue-300"
            name="seat"
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
          <button type="button" className="px-3 py-2 w-full border-2">
            Bus seating plan
          </button>
        </div>
      </div>
      <div className=" relative border-t"></div>
      <div className="px-2 py-2">
        <label className="">
          <input className=" align-middle" type="checkbox" />
          <span className="pl-1 align-middle">Additional luggage</span>
        </label>
      </div>
      <div className=" border-t"></div>
      <div className="px-2 py-2">
        <label className="block">
          <input className=" align-middle" type="radio" />
          <span className="pl-1 align-middle">Add ensurance</span>
        </label>
        <label className="block">
          <input className=" align-middle" type="radio" />
          <span className="pl-1 align-middle">Without ensurance</span>
        </label>
      </div>
    </form>
  );
}
