import express from "express";
import {
  createPlace,
  getAllPlaces,
  getPlacesByCategory,
  deletePlace
} from "../controllers/touristController.js";

export const TouristRoutes = express.Router();

TouristRoutes.post("/", createPlace);
TouristRoutes.get("/", getAllPlaces);
TouristRoutes.get("/category/:category", getPlacesByCategory);
TouristRoutes.delete("/:id", deletePlace);