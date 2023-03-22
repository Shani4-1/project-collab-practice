import React, { useState, useEffect } from "react";
import Location from "./Location";
const API_BASE_URL = "https://resource-ghibli-api.onrender.com";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/locations`)
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Locations</h1>
     

        <button onClick={() => setShowLocations(!showLocations)}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations ? (
          <ul className="list-unstyled">
            {locations.map((location) => (
              <li key={location.id}>
                <Location location={location} />
              </li>
            ))}
          </ul>
        ) : null}
        </div>
        
  );
}
