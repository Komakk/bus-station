import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

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

const popFromDestinations = popDestinations.map((item) => item.from);

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

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
