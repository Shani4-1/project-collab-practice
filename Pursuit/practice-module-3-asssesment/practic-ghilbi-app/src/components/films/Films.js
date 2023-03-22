import React, { useState, useEffect } from "react";
import Film from "./Film";

const API_BASE_URL = "https://resource-ghibli-api.onrender.com";

export default function Films() {
  const [films, setFilms] = useState([]);
  const [selectedFilmId, setSelectedFilmId] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/films`)
      .then((response) => response.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);

  const handleFilmSelect = (event) => {
    setSelectedFilmId(event.target.value);
  };

  const selectedFilm = films.find((film) => film.id === selectedFilmId);

  return (
    <>
      <h1>Select A Movie</h1>
      <select
        name="film-select"
        id="film-select"
        value={selectedFilmId}
        onChange={handleFilmSelect}
      >
        <option value="">Select a movie</option>
        {films.map((film) => (
          <option key={film.id} value={film.id}>
            {film.title}
          </option>
        ))}
      </select>
      {selectedFilm && <Film film={selectedFilm} />}
    </>
  );
}


