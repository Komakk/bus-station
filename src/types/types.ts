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

export type { Trip };