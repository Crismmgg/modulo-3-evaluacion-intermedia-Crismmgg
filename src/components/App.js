import React from "react";
import "../App.css";
import apiData from "../api/data.json";
import List from "./PokeList";
import Pokemon from "./Pokemon";

console.log(apiData);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonData: apiData
    };
  }

  render() {
    return (
      <div className="">
        Holi
        <List>
          {this.state.pokemonData.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })}
        </List>
      </div>
    );
  }
}

export default App;
