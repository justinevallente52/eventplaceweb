import React from "react";
import "./Venues.css";

// Import local images
import venue1Image from "../images/v.jpg";
import venue2Image from "../images/b.jpg";
import venue3Image from "../images/n.jpg";

const Venues = () => {
  const venues = [
    {
      id: 1,
      name: "Venue 1",
      details:
        "This elegant venue is a top choice for hosting memorable reunions, offering a spacious and cozy atmosphere perfect for reconnecting with family and friends.",
      image: venue1Image, // Use the imported image
    },
    {
      id: 2,
      name: "Venue 2",
      details: "Experience the ultimate celebration at our venue, featuring a stunning pool that adds a refreshing touch to any event.",
      image: venue2Image, // Use the imported image
    },
    {
      id: 3,
      name: "Venue 3",
      details: "Say 'I do' at our enchanting wedding venue, where romance and elegance come together to create the perfect backdrop for your special day.",
      image: venue3Image, // Use the imported image
    },
  ];

  return (
    <div className="venues-container">
      <h1>Our Venues</h1>
      <div className="venues-grid">
        {venues.map((venue) => (
          <div key={venue.id} className="venue-card">
            <img
              src={venue.image} // Display the correct local image
              alt={venue.name}
              className="venue-image"
            />
            <h2>{venue.name}</h2>
            <p>{venue.details}</p>
          </div>
        ))}
      </div>

      {/* Floating Circles (8 Circles) */}
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>

      <br /><br /><br /><br />
    </div>
  );
};

export default Venues;
