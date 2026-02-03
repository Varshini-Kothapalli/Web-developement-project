import React from "react";
import './PlaceRow.css'

function PlaceRow({ place,reverse }) {
   return (
    <div className={`place-card ${reverse ? "reverse" : ""}`}>
      <div className="place-image">
        <img src={place.image} alt={place.title} />
      </div>

      <div className="place-content">
        <h2>{place.title}</h2>
        <p>{place.description}</p>
      </div>
    </div>
  );
}

export default PlaceRow;
