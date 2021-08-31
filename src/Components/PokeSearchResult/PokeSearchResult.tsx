import React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import "./PokeSearchResult.css";

interface PokeSearchResultProps {
  selectedPokemons: PokemonSchema | undefined;
}

const PokeSearchResult = ({ selectedPokemons }: PokeSearchResultProps) => {
    const { name, id, height, weight, base_experience, sprites } =selectedPokemons || {};
  return (
    <div className="poke-result-card">
      {selectedPokemons ? (
        <div>
          <img className="pokemon-animated-sprite" src={sprites?.animated || sprites?.normal} alt="pokemon" />
          <p>name: {name}</p>
          <p>id: {id}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Base Exp: {base_experience}</p>
        </div>
      ) : (
        <h2> Welcome To The Pokedex </h2>
      )}
    </div>
  );
};

export default PokeSearchResult;
