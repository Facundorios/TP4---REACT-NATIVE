import { useState } from 'react';
import '../App.css'

function PokemonImage({ pokemon }) {

const frontImageURL = pokemon.details.sprites.front_default ?? "NO IMAGE";
const shinyImageURL = pokemon.details.sprites.front_shiny ?? "NO IMAGE";





  return (
    <>
    <img 
      src={frontImageURL ?? "NO IMAGE"}
      alt="pokemon"
      className='pokemon-image'
    />
    
    </>
    
  );
}

export default PokemonImage;