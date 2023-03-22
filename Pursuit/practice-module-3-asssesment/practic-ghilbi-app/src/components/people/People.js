import React, { useState, useEffect } from "react";
import Person from "./Person";

const API_BASE_URL = "https://resource-ghibli-api.onrender.com";

function filterPeople(search, people) {
  return people.filter((person) => {
    return person.name.toLowerCase().match(search.toLowerCase());
  });
}

export default function People() {
  const [people, setPeople] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleTextChange = (event) => {
    const name = event.target.value;
    const result = name.length ? filterPeople(name, people) : people;
    setUserSearch(name);
    setSelectedPerson(result[0] || null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedPerson) {
        setSelectedPerson(selectedPerson);
    } else {
        setSelectedPerson("Not found");
    }
    setUserSearch("");
  };

  useEffect(() => {
    fetch(`${API_BASE_URL}/people`)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="people">
        <article>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userSearch">
              <h1>Search for a Person</h1>
              <input
                type="text"
                value={userSearch}
                id="userSearch"
                onChange={handleTextChange}
              />
              <button onClick={handleSubmit}>Submit</button>
            </label>
          </form>
          {selectedPerson === null ? (
            <p>Please enter person name above.</p>
          ) : selectedPerson === "Not found" ? (
            <>
            <br></br>
            <p>Not found.</p>
            </>
          ) : (
            <Person person={selectedPerson} />
          )}
        </article>
      </div>
    </>
  );
}
