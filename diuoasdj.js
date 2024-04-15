const API = 'https://www.freetogame.com/api/games'

function traerJuegos() {
    fetch(API)
    .then(response => response.json())
    .then(data => console.log(data))
}

traerJuegos()