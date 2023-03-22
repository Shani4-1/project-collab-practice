import React from "react";

export default function Location({ location }) {
  return (
    <div className="row row-cols-3 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <article className="d-flex align-items-center">
                <ul className="list-unstyled">
                  <li>
                    <h2>{location.name}</h2>
                  </li>
                  <li>Climate: {location.climate}</li>
                  <li>Terrain: {location.terrain}</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
      
  
}
