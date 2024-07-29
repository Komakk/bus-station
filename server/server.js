import express from "express";
import cors from "cors";
import { popDestinations, destinations, trips } from "./constants.js";
import { getDate, getTime } from "../utils/utils.js";

const app = express();
app.use(cors());

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

const updatedTrips = updateDates(trips);
console.log(updatedTrips);

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

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
