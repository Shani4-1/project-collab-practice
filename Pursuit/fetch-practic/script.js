const BASE_URL = "https://pokeapi.co/api/v2/pokemon"
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { id } = event.target;
    getPokemonByID(id.value)
})

function getPokemonByID(id) {
    fetch(`${BASE_URL}/${id}`)
    .then((response) => {
       return response.json();
    })
    .then((resultInJS) => {
        console.log(resultInJS)
    })
    .catch((error) => {
        console.log(error);
    });
}
