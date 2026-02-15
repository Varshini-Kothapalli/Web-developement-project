import TouristPlace from "../models/TouristPlace.js";

// CREATE
export const createPlace = async (req, res) => {
  try {
    const place = await TouristPlace.create(req.body);
    res.status(201).json(place);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
export const getAllPlaces = async (req, res) => {
  try {
    const places = await TouristPlace.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ BY CATEGORY
export const getPlacesByCategory = async (req, res) => {
  try {
    const places = await TouristPlace.find({
      category: req.params.category
    });
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
export const deletePlace = async (req, res) => {
  try {
    await TouristPlace.findOneAndDelete({ name: req.params.name });
    res.json({ message: "Place deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// export const getPlacesByPopularity = async (req, res) => {
//   try {
    

//     const places = await db
//       .collection("touristPlaces")
//       .find({})
//       .sort({ popularity_score: -1 }) 
//       .toArray();

//     res.status(200).json(places);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };