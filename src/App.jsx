import { useState, useEffect } from "react";
import "./App.css";

const API = "https://pokeapi.co/api/v2/pokemon";

function App() {
  
  const [pokemons, setPokemons] = useState([]);



  useEffect(() => {
    consumeAPI()
  }, [])
  
  function consumeAPI() {
    fetch(API)
    .then((response) => response.json())
    .then((data) => {
      setPokemons(data.results);
    });
  }
    return (
    <div className="App">
      <h1>Lista de Juegos</h1>
      <button onClick={consumeAPI}>Traer Juegos</button>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <p>{pokemon.name}</p>
          <img src={pokemon.url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
