import React, { useEffect, useState } from 'react';
import './Birthday.css';

const Pool = () => {
  const [venues, setVenues] = useState([]);

  // Fetch only birthday venues on component mount
  useEffect(() => {
    const fetchBirthdayVenues = async () => {
      try {
        const response = await fetch("https://eventsplace-server.onrender.com/api/venues/pool");
        const data = await response.json();
        if (data.success) {
          setVenues(data.venues); // Update state with fetched birthday venues
        } else {
          console.error('Failed to fetch birthday venues');
        }
      } catch (err) {
        console.error('Error fetching birthday venues:', err);
      }
    };

    fetchBirthdayVenues(); // Call function to fetch birthday venues
  }, []);

  return (
    <div className="pool-container">
      <h1>Pool Venues</h1>
      <div className="venue-container">
        {venues.length === 0 ? (
          <p>No birthday venues available</p>
        ) : (
          venues.map((venue) => (
            <div key={venue.venueID} className="venue-card">
              <img src={venue.venuePicture} alt={venue.venueName} />
              <h2>{venue.venueName}</h2>
              <p>{venue.venueLocation}</p>
              <p>{venue.venueDetails}</p>
              <p className="price">${venue.venuePrice}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Pool;
