import React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import PokeList from "../PokeList/PokeList";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBox from "../SearchBox/SearchBox";
import "./Pokedex.css";

interface PokedexProps {
  searchedPokemons: PokemonSchema[];
  selectedPokemons: PokemonSchema | undefined;
  onInputChange: (inputValue: string) => void;
  onPokemonClick: (inputValue: string) => void;
}

const Pokedex = ({
  searchedPokemons,
  selectedPokemons,
  onPokemonClick,
  onInputChange,
}: PokedexProps) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBox onInputChange={onInputChange} />
        <PokeList onPokemonClick={onPokemonClick} searchedPokemons={searchedPokemons} />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult selectedPokemons={selectedPokemons} />
      </div>
    </div>
  );
};

export default Pokedex;
