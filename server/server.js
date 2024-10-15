import express from "express";
import cors from "cors";
import { popDestinations, destinations, trips } from "./constants.js";
import { getDate, getTime } from "../utils/utils.js";
import { nanoid } from "nanoid";

const app = express();
app.use(cors());
app.use(express.json());

function updateDates(trips) {
  const now = new Date();
  return trips.map((trip) => {
    const tripFromDate = new Date(trip.from.date);
    const tripToDate = new Date(trip.to.date);
    if (now.getTime() > tripFromDate.getTime()) {
      tripFromDate.setMonth(now.getMonth());
      tripFromDate.setDate(now.getDate());
      trip.from.date = `${getDate(tripFromDate)}T${getTime(tripFromDate)}`;

      tripToDate.setMonth(now.getMonth());
      tripToDate.setDate(now.getDate());
      trip.to.date = `${getDate(tripToDate)}T${getTime(tripToDate)}`;
    }
    return trip;
  });
}

function createTicket(data) {
  const newTicket = {};
  newTicket.id = nanoid();
  newTicket.tripId = data.tripId;
  newTicket.passengers = data.passengers.map((passenger) => {
    return {
      ...passenger,
      seat: passenger.seat === "any" ? setSeat(data.tripId) : passenger.seat,
    };
  });
  newTicket.contacts = data.contacts;
  tickets.push(newTicket);
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

    seat.state = "occupied";
    seat.reservation = { id: reservationId, passengerId };
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

function setSeat(tripId) {
  const trip = updatedTrips.find((item) => item.id === tripId);
  const seat = trip.seats.find((seat) => seat.state === "free");
  seat.state = "occupied";
  return seat.number;
}

function clearSeat(seat) {
  seat.state = "free";
  seat.reservation = "";
}

const updatedTrips = updateDates(trips);
const tickets = [];
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
app.post("/tickets", (req, res) => {
  const data = req.body;
  //console.log(data);
  const ticket = createTicket(data);
  res.json(ticket);
});

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
