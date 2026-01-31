import mongoose from "mongoose";

const touristPlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  location: String,
  budget: Number,
  description: String
});

const TouristPlace = mongoose.model("TouristPlace", touristPlaceSchema);

export default TouristPlace;
