import mongoose from "mongoose";

const touristPlaceSchema = new mongoose.Schema({
  name: String,
  category: String,
  location: String,
  description: String,
  rating: Number
});

export default mongoose.model("TouristPlace", touristPlaceSchema);
