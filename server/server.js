import express from "express";
import cors from "cors";
import { popDestinations, destinations, trips } from "./constants.js";

const app = express();
app.use(cors());

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

app.get("/trips/:from/:to", (req, res) => {
  const from = req.params.from;
  const to = req.params.to;
  const tripList = trips.filter(
    (item) =>
      item.from.city.toLowerCase() === from &&
      item.to.city.toLocaleLowerCase() === to
  );
  res.json(tripList);
});

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
