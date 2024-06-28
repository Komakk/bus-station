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
    from: { city: "Izhevsk", date: "2024-06-28T07:30:00" },
    to: { city: "Votkinsk", date: "2024-06-28T09:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t01",
    from: { city: "Izhevsk", date: "2024-06-28T09:30:00" },
    to: { city: "Votkinsk", date: "2024-06-28T11:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t01",
    from: { city: "Izhevsk", date: "2024-06-28T11:30:00" },
    to: { city: "Votkinsk", date: "2024-06-28T13:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t01",
    from: { city: "Izhevsk", date: "2024-06-28T13:30:00" },
    to: { city: "Votkinsk", date: "2024-06-28T15:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t01",
    from: { city: "Izhevsk", date: "2024-06-28T15:30:00" },
    to: { city: "Mozhga", date: "2024-06-28T17:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t01",
    from: { city: "Izhevsk", date: "2024-06-28T17:30:00" },
    to: { city: "Sarapul", date: "2024-06-28T19:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
];

export { popDestinations, destinations, trips };
