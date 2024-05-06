import PokemonImage from "./PokemonImage";

function PokemonCard({ pokemonList, onDelete, onShiny }) {
  return (
    <div className="pokemon-list">
      <ul className="pokemon-ul">
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="pokemon-card">
            <div className="pokemon-info">
              <p className="text">
                <strong>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
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
            <div>
              <a
                href={`https://pokeapi.co/api/v2/pokemon/${pokemon.details.id}/`}
                target="blank"
              >
                <PokemonImage pokemon={pokemon} />
              </a>

              {/* {pokemon.details.sprites.back_default && (
              <img
                src={pokemon.details.sprites.back_default ?? "NO IMAGE"}
                alt={pokemon.name}
                
              />
            )}  */}
            </div>
            <p className="text">Identificador: {pokemon.details.id}</p>
            <button onClick={() => onDelete(index)} className="delete-button">
              Eliminar.
            </button>
            <br />
            <button onClick={() => onShiny(index)} className="shiny-button">
              Mostrar versión Shiny.
            </button>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonCard;
