import React from 'react';
import './App.css';
import {getPokemon, getGames} from "./api/index";
import Header from "./components/Header/Header";
import Timeline from "./components/Timeline/Timeline";

import Cards from "./components/Cards/Cards";

class App extends React.Component {
  state = {
    pokemonData: [],
    gameData: [],
    selectedDataType: ""    //pokemon or games
  };

  async componentDidMount() {
    const fetchedPokemon = await getPokemon();
    const fetchedGames = await getGames();
    this.setState({ pokemonData: fetchedPokemon, gameData: fetchedGames });
  }

  render() {
    const pokemon = this.state.pokemonData;
    const games = this.state.gameData;
    if (pokemon.length === 0) {
      return "Loading...";
    }
    return (
      <div>
        <Header />
        <div style={{display:"flex"}}>
          <Cards data = {pokemon} />
          <div style={{minWidth: "15%"}}>
          <Timeline data = {games} />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
