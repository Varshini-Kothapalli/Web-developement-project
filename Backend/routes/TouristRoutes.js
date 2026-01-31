import express from "express";
import TouristPlace from "../models/TouristPlaces.js";

const router = express.Router();

// add place
router.post("/add", async (req, res) => {
  try {
    const place = await TouristPlace.create(req.body);
    res.status(201).json(place);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  const places = await TouristPlace.find();
  res.json(places);
});

export default router;
