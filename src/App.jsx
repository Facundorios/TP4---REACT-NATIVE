import React, { useState } from "react";
import "./App.css"; // Importar estilos CSS
import PokemonCard from "./components/PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);


  const fetchData = async () => {
    try {
      const response1 = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302"
      );
      const data1 = await response1.json();

      const allPokemon = [...data1.results];

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

  const handleDeleteAll = () => {
    const list = [...pokemonList];
    list.splice(list);
    setPokemonList(list);
  };

  return (
    <>
      <button onClick={fetchData} className="load-button">
        Cargar Lista
      </button>
      <button onClick={handleDeleteAll} className="delete-button">
        Borrar todos los pokemones
      </button>
      <PokemonCard
        pokemonList={pokemonList}
        onDelete={handleDelete}
        onShiny={"handleShiny"}
      />
    </>
  );
};

export default PokemonList;
