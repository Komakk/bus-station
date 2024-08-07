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
    from: { city: "Izhevsk", date: "2024-07-26T07:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T09:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t02",
    from: { city: "Izhevsk", date: "2024-07-26T09:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T11:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t03",
    from: { city: "Izhevsk", date: "2024-07-26T11:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T13:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t04",
    from: { city: "Izhevsk", date: "2024-07-26T13:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T15:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t011",
    from: { city: "Izhevsk", date: "2024-07-26T13:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T15:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t012",
    from: { city: "Izhevsk", date: "2024-07-26T20:30:00" },
    to: { city: "Votkinsk", date: "2024-07-26T22:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t05",
    from: { city: "Izhevsk", date: "2024-07-26T15:30:00" },
    to: { city: "Mozhga", date: "2024-07-26T17:00:00" },
    seats: 20,
    duration: "01:30",
    price: 300,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t06",
    from: { city: "Izhevsk", date: "2024-07-26T17:30:00" },
    to: { city: "Sarapul", date: "2024-07-26T19:00:00" },
    seats: 20,
    duration: "01:30",
    price: 290,
    provider: "Sapsan TK",
    status: "active",
  },
  {
    id: "t07",
    from: { city: "Izhevsk", date: "2024-07-26T21:30:00" },
    to: { city: "Sarapul", date: "2024-07-26T23:00:00" },
    seats: 20,
    duration: "01:30",
    price: 290,
    provider: "Sapsan TK",
    status: "active",
  },
];

export { popDestinations, destinations, trips };
