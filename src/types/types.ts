interface FormData {
  email: string;
  password: string;
}

interface Seat {
  number: string;
  state: "free" | "occupied";
  reservation: { id: string; passengerId: string };
}

interface Trip {
  id: string;
  from: { city: string; date: string };
  to: { city: string; date: string };
  seats: Seat[];
  duration: string;
  price: number;
  provider: string;
  status: string;
}

interface Passenger {
  id: string;
  firstname: string;
  lastname: string;
  type: string;
  seat: string;
  luggage: boolean;
  ensurance: boolean;
}

interface BookingType {
  adult: {
    count: number;
    price: number;
  };
  child: {
    count: number;
    price: number;
  };
  luggage: {
    count: number;
    price: number;
  };
  ensurance: {
    count: number;
    price: number;
  };
}

export type { FormData, Seat, Trip, Passenger, BookingType };
