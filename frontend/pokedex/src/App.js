import React from 'react';
import './App.css';
import {getPokemon, getGames} from "./api/index";
import Header from "./components/Header/Header";

import Cards from "./components/Cards/Cards";

class App extends React.Component {
  state = {
    pokemonData: [],
    gameData: [],
    selectedDataType: ""    //pokemon or games
  };

  async componentDidMount() {
    const fetchedPokemon = await getPokemon();
    this.setState({ pokemonData: fetchedPokemon });
  }

  render() {
    const pokemon = this.state.pokemonData;
    if (pokemon.length == 0) {
      return "Loading...";
    }
    return (
      <div>
        <Header />
        <Cards data = {pokemon} />
      </div>
    );
  }
}

export default App;
