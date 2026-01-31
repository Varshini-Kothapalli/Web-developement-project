import mongoose from "mongoose";

const touristPlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: String
});

export default mongoose.model("TouristPlace", touristPlaceSchema);
