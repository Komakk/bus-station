import express from "express";
import cors from "cors";
import { popDestinations, destinations, trips } from "./constants.js";
import { getDate, getTime } from "../utils/utils.js";
import { customAlphabet } from "nanoid";

let tickets = [
  {
    id: "4321",
    paid: true,
    trip: {
      id: "t01",
      from: { city: "Izhevsk", date: "2024-07-26T08:30" },
      to: { city: "Votkinsk", date: "2024-07-26T10:00" },
    },
    passengers: [
      {
        id: "1a1a1a",
        firstname: "John",
        lastname: "Dee",
        type: "Adult",
        seat: "1",
        luggage: false,
        ensurance: false,
      },
    ],
    contacts: { email: "am427m@yandex.ru", phone: "" },
    booking: {
      adult: {
        count: 1,
        price: 300,
      },
      child: {
        count: 0,
        price: 0,
      },
      luggage: {
        count: 0,
        price: 0,
      },
      ensurance: {
        count: 0,
        price: 0,
      },
    },
    ordered: 1721964600000,
  },
];

const app = express();
app.use(cors());
app.use(express.json());

const nanoid = customAlphabet("1234567890", 10);

function updateDates(trips) {
  const now = new Date();
  return trips.map((trip) => {
    const tripFromDate = new Date(trip.from.date);
    const tripToDate = new Date(trip.to.date);
    if (now.getTime() > tripFromDate.getTime()) {
      tripFromDate.setFullYear(now.getFullYear());
      tripFromDate.setMonth(now.getMonth());
      tripFromDate.setDate(now.getDate());
      trip.from.date = `${getDate(tripFromDate)}T${getTime(tripFromDate)}`;

      tripToDate.setFullYear(now.getFullYear());
      tripToDate.setMonth(now.getMonth());
      tripToDate.setDate(now.getDate());
      trip.to.date = `${getDate(tripToDate)}T${getTime(tripToDate)}`;
    }
    return trip;
  });
}

function createTicket() {
  const newTicket = {
    id: nanoid(),
    paid: false,
  };
  tickets.push(newTicket);

  return newTicket;
}

function editTicket({ ticket, trip, passengers, contacts, booking }) {
  const newTicket = tickets.find((item) => item.id === ticket.id);
  newTicket.trip = trip;
  newTicket.passengers = passengers.map((passenger) => {
    return {
      ...passenger,
      seat:
        passenger.seat === "any"
          ? findSeat(trip.id, ticket.id, passenger.id)
          : passenger.seat,
    };
  });
  newTicket.contacts = contacts;
  newTicket.booking = booking;
  newTicket.paid = true;
  newTicket.ordered = Date.now();
  return newTicket;
}

function updateSeats({ tripId, seatNumber, reservationId, passengerId }) {
  const trip = updatedTrips.find((item) => item.id === tripId);

  const seat = trip.seats.find((seat) => seat.number === seatNumber);
  if (seat.state === "free") {
    const prevSeat = trip.seats.find(
      (seat) => seat.reservation.passengerId === passengerId
    );
    if (prevSeat) clearSeat(prevSeat);
    setSeat(seat, reservationId, passengerId);
    console.log("if free", trip.seats);

    return trip.seats;
  } else if (
    seat.reservation.id === reservationId &&
    passengerId === seat.reservation.passengerId
  ) {
    clearSeat(seat);
    console.log("if occup and the same pass", trip.seats);

    return trip.seats;
  } else {
    console.log("if ocup but another pass");

    return "";
  }
}

function findSeat(tripId, ticketId, passengerId) {
  const trip = updatedTrips.find((item) => item.id === tripId);
  const seat = trip.seats.find((seat) => seat.state === "free");
  //TODO Add error if no free seat
  setSeat(seat, ticketId, passengerId);
  return seat.number;
}

function clearSeat(seat) {
  seat.state = "free";
  seat.reservation = { id: "", passengerId: "" };
}

function setSeat(seat, ticketId, passengerId) {
  seat.state = "occupied";
  seat.reservation = { id: ticketId, passengerId };
}

const updatedTrips = updateDates(trips);
const popFromDestinations = popDestinations.map((item) => item.from);

app.get("/getPopRoutes/:departure", (req, res) => {
  const departure = req.params.departure;
  const popToDestinations = popDestinations.find(
    (item) => item.from === departure
  );
  res.json(popToDestinations.to);
});

app.get("/getPopRoutes/", (req, res) => {
  res.json(popFromDestinations);
});

app.get("/search/:value", (req, res) => {
  const value = req.params.value;
  const searchList = destinations.filter((item) => item.includes(value));
  res.json(searchList);
});

app.get("/trips/:from/:to/:date", (req, res) => {
  const from = req.params.from;
  const to = req.params.to;
  const date = req.params.date;
  const tripList = updatedTrips.filter(
    (item) =>
      item.from.city.toLowerCase() === from &&
      item.to.city.toLocaleLowerCase() === to &&
      item.from.date.split("T")[0] === date
  );

  const now = new Date();
  const nowDate = getDate(now);
  if (date === nowDate) {
    const todayTripList = tripList.filter(
      (item) => Date.parse(item.from.date) > now.getTime()
    );
    res.json(todayTripList);
  } else {
    res.json(tripList);
  }
});

app.get("/seats/:tripid", (req, res) => {
  const tripId = req.params.tripid;
  console.log("server got req");

  const trip = updatedTrips.find((trip) => trip.id === tripId);
  res.json(trip.seats);
});

app.put("/seat", (req, res) => {
  const newSeats = updateSeats(req.body);
  res.json(newSeats);
});

//TODO: add ckecking request state
app.post("/ticket", (req, res) => {
  console.log(req.body);

  const tripId = req.body.tripid;
  const newTicket = createTicket();
  setTimeout(() => {
    if (!newTicket.paid) {
      const trip = updatedTrips.find((trip) => trip.id === tripId);
      trip.seats.forEach((seat) => {
        if (seat.reservation.id === newTicket.id) clearSeat(seat);
      });
      tickets = tickets.filter((ticket) => ticket.id !== newTicket.id);
      console.log(
        `Reservetion time expired. Ticket ${newTicket.id} and reserved seats was deleted`
      );
    }
  }, 1000 * 60 * 8);

  res.json(newTicket);
});

app.put("/ticket", (req, res) => {
  const ticket = editTicket(req.body);
  res.json(ticket);
});

app.get("/tickets/by-email/:email", (req, res) => {
  const email = req.params.email;
  const ticketsByEmail = tickets.filter(
    (ticket) => ticket.contacts.email === email
  );
  res.json(ticketsByEmail);
});

app.get("/tickets/:ticketId", (req, res) => {
  const ticketId = req.params.ticketId;
  const ticket = tickets.find((ticket) => ticket.id === ticketId);
  res.json(ticket);
});

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
