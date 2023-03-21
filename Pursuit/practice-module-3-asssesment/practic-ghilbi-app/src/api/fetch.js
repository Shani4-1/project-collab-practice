const URL = "https://resource-ghibli-api.onrender.com"

export function getAllfilms(URL) {
    return fetch(`${URL}/films`).then((response) => response.json())
}