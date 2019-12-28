import React from 'react';
import '../stylesheets/App.scss';
import apiData from '../api/data.json';
import List from './PokeList';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonData: apiData
    };
  }

  render() {
    return (
      <div>
        <h1 className='main-title'>Mi lista de Pokemons</h1>
        <List>
          {this.state.pokemonData.map(pokemon => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />;
          })}
        </List>
      </div>
    );
  }
}

export default App;
