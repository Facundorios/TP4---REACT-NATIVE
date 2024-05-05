import React, { useState } from "react";
import "./App.css"; // Importar estilos CSS

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchData = async () => {
    try {
      //const response1 = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1002");
      //const data1 = await response1.json();

      const response1 = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302"
      );
      const data1 = await response1.json();

      // Concatenar los resultados de ambas solicitudes
      const allPokemon = [...data1.results];

      // Fetch details for each pokemon
      const detailsPromises = allPokemon.map(async (pokemon) => {
        const detailsResponse = await fetch(pokemon.url);
        const detailsData = await detailsResponse.json();
        return {
          name: pokemon.name,
          details: detailsData,
        };
      });
      const pokemonWithDetails = await Promise.all(detailsPromises);
      setPokemonList(pokemonWithDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (index) => {
    const newList = [...pokemonList];
    newList.splice(index, 1);
    setPokemonList(newList);
  };

  return (
    <>
      <button onClick={fetchData} className="load-button">
        Cargar Lista
      </button>
      <div className="pokemon-list">
        <ul className="pokemon-ul">
          {pokemonList.map((pokemon, index) => (
            <li key={index} className="pokemon-card">
              <div className="pokemon-info">
                <p>
                  <strong>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </strong>
                </p>
                <p>
                  TYPE:{" "}
                  {pokemon.details.types
                    .map(
                      (type) =>
                        type.type.name.charAt(0).toUpperCase() +
                        type.type.name.slice(1)
                    )
                    .join(", ")}
                </p>
              </div>
              {pokemon.details.sprites.front_default && (
                <img
                  src={pokemon.details.sprites.front_default}
                  alt={pokemon.name}
                  className="pokemon-image"
                />
              )}
              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PokemonList;
