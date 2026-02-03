import express from "express";
import TouristPlace from "../models/TouristPlaces.js";

const app = express.app();

/**
 * GET all places
 */
app.get("/", async (req, res) => {
  const places = await TouristPlace.find();
  res.json(places);
});

/**
 * GET places by category
 * /api/tourists/category/beach
 */
app.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  const places = await TouristPlace.find({ category });
  res.json(places);
});


 // POST add a place
 
app.post("/", async (req, res) => {
  const place = new TouristPlace(req.body);
  await place.save();
  res.status(201).json(place);
});

export default router;
