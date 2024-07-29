interface Trip {
    id: string;
    from: { city: string; date: string };
    to: { city: string; date: string };
    seats: number;
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

export type { Trip, Passenger };