const popDestinations = [
  {
    from: "Izhevsk",
    to: ["Votkinsk", "Sarapul", "Glazov", "Mozhga", "Kambarka"],
  },
  {
    from: "Votkinsk",
    to: ["Izhevsk", "Sharkan", "Chaikovskiy", "Perm", "Glazov"],
  },
  {
    from: "Sarapul",
    to: ["Izhevsk", "Karakulino", "Votkinsk", "Perm", "Glazov"],
  },
  {
    from: "Glazov",
    to: ["Izhevsk", "Balezino", "Yukamenskoe", "Yar", "Igra"],
  },
  {
    from: "Mozhga",
    to: ["Izhevsk", "Alnashi", "Nab. Chelny", "Vavozh", "Uva"],
  },
  {
    from: "Kambarka",
    to: ["Izhevsk", "Neftekamsk", "Chaikovskiy", "Sarapul", "Yanaul"],
  },
];

const destinations = [
  "Izhevsk",
  "Votkinsk",
  "Glazov",
  "Mozhga",
  "Kambarka",
  "Sharkan",
  "Karakulino",
  "Balezino",
  "Igra",
  "Alnashi",
  "Vavozh",
  "Uva",
];

const trips = [
  {
    id: "t01",
    from: { city: "Izhevsk", date: "2024-07-26T08:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T10:00:00" },
    seats: [
      {
        number: "1",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "2",
        state: "occupied",
        reservation: { id: "777", passengerId: "p000" },
      },
      {
        number: "3",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "4",
        state: "occupied",
        reservation: { id: "888", passengerId: "p001" },
      },
      {
        number: "5",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "6",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "7",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "8",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "9",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "10",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "11",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "12",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "13",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "14",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "15",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "16",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "17",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "18",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "19",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "20",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
    ],
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t02",
    from: { city: "Izhevsk", date: "2024-07-26T09:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T11:00:00" },
    seats: [
      "o",
      "f",
      "o",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
    ],
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t03",
    from: { city: "Izhevsk", date: "2024-07-26T11:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T13:00:00" },
    seats: [
      {
        number: "1",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "2",
        state: "occupied",
        reservation: { id: "777", passengerId: "p000" },
      },
      {
        number: "3",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "4",
        state: "occupied",
        reservation: { id: "888", passengerId: "p001" },
      },
      {
        number: "5",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "6",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "7",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "8",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "9",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "10",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "11",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "12",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "13",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "14",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "15",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "16",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "17",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "18",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "19",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
      {
        number: "20",
        state: "free",
        reservation: { id: "", passengerId: "" },
      },
    ],
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t04",
    from: { city: "Izhevsk", date: "2024-07-26T13:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T15:00:00" },
    seats: [
      "o",
      "f",
      "o",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
    ],
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t011",
    from: { city: "Izhevsk", date: "2024-07-26T13:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T15:00:00" },
    seats: [
      "o",
      "f",
      "o",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
    ],
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t012",
    from: { city: "Izhevsk", date: "2024-07-26T20:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T22:00:00" },
    seats: [
      "o",
      "f",
      "o",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
    ],
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t05",
    from: { city: "Izhevsk", date: "2024-07-26T15:30:00" },
    to: { city: "Mozhga", date: "2024-07-26T17:00:00" },
    seats: [
      "o",
      "f",
      "o",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
    ],
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t06",
    from: { city: "Izhevsk", date: "2024-07-26T17:30:00" },
    to: { city: "Sarapul", date: "2024-07-26T19:00:00" },
    seats: [
      "o",
      "f",
      "o",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
    ],
    duration: "01:30",
    price: 290,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t07",
    from: { city: "Izhevsk", date: "2024-07-26T21:30:00" },
    to: { city: "Sarapul", date: "2024-07-26T23:00:00" },
    seats: [
      "o",
      "f",
      "o",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
    ],
    duration: "01:30",
    price: 290,
    provider: "Sapsan TK",
    status: "active",
  },
];

export { popDestinations, destinations, trips };
