import React from "react";
import { pokemonData } from "../../data/pokemonData";
import { PokemonSchema } from "../../types/PokemonSchema";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css";

interface PokeListProps {
    searchedPokemons: PokemonSchema[];
    onPokemonClick: (pokemonName: string) => void;
}

const PokeList = ( {searchedPokemons, onPokemonClick }: PokeListProps) => {
  
    return (
        <div className="pokelist">
         {
           searchedPokemons.map((pokemon) => {
             return (
               pokemon.name && (
                 <PokeCard
                 onPokemonClick={onPokemonClick}
                key={pokemon.id}
                name={pokemon.name}
                spriteUrl={pokemon.sprites.normal}
                />
               )
               
           )
           })
         }   
        </div> 
    )
}

export default PokeList
