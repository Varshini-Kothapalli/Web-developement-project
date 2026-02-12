import React from 'react'
import PlaceRow from './PlaceRow';
function PlacesList() {
    const places = [
  {
    title: "GOLCONDA",
    description:
      "Golconda Fort, located near Hyderabad, India, is a 13th-century, 3-sq-km granite fortress known for its massive 87 bastions, acoustic marvels, and advanced water systems.",
    image:
      "https://www.hyderabadtourism.travel/images/v2/header-places/golconda-fort-hyderabad-tourism-attraction-entryfee-timings-reviews-header.jpg",
  },
  {
    title: "HUSSAIN SAGAR",
    description:
      "Hussain Sagar is a large, heart-shaped artificial lake in Hyderabad, built in 1562, famous for the central monolithic Buddha statue and boating.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3d/73/8b/straight-view-of-the.jpg?w=1200&h=-1&s=1",
  },
  {
    title: "RAMOJI FILM CITY",
    description:
      "Ramoji Film City is the world’s largest integrated film studio complex, spread across 1,666 acres and founded in 1996.",
    image:
      "https://www.gokitetours.com/wp-content/uploads/2024/04/Things-to-Do-at-Ramoji-Film-City-in-Hyderabad-1200x900.webp",
  },
  {
    title: "SWARNAGIRI TEMPLE",
    description:
      "Swarnagiri Temple in Telangana is famous for its stunning modern architecture and spiritual significance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UjV8Zo8PBKw7L5sU9t44mGBJTkYqhlqXPg&s",
  },
];

  
  return (
     
    <>
      {places.map((place, index) => (
        <PlaceRow
          key={index}
          place={place}
          reverse={index % 2 !== 0}   
        />
      ))}
    </>
  );
    
  
   
  
}



export default PlacesList