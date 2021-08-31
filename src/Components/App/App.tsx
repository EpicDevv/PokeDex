import React from "react";
import { pokemonData } from "../../data/pokemonData";
import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from "../../types/PokemonSchema";
import Pokedex from "../Pokedex/Pokedex";
import "./App.css";

interface AppState {
  searchFields: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemons: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
  state = {
    searchFields: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemons: undefined,
  };

  patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (e) {
        console.log("exception while parsing th sprites", e);
      }
      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };

      return patchedPokemon;
    });

    return patchedPokemons;
  };

  componentDidMount() {
    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(pokemonData);

    this.setState({
      allPokemons: patchedPokemons,
      searchedPokemons: patchedPokemons,
    });
  }

  handleInputChange = (inputValue: string) => {
    const { allPokemons } = this.state;

    const searchedPokemons = allPokemons.filter((pokemon: PokemonSchema) => {
      return (
        pokemon.name &&
        pokemon.name
          .toLocaleLowerCase()
          .includes(inputValue.toLocaleLowerCase())
      );
    });
    this.setState({
      searchFields: inputValue,
      searchedPokemons,
    });
  };

  handleClick = (pokemonName: string) => {
    const { allPokemons } = this.state;
    const selectedPokemons = allPokemons.find(
      (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );
    this.setState({ selectedPokemons });
  };

  render() {
    return (
      <div className="App">
        <h1>pokedex</h1>

        <Pokedex
      
          searchedPokemons={this.state.searchedPokemons}
          selectedPokemons={this.state.selectedPokemons}
          onPokemonClick={this.handleClick}    
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
