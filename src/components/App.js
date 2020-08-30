import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonsList from '../containers/PokemonsList';
import Pokemon from './Pokemon';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>POKEMONS</h1>
        <div className="pokemon-container">
          <Switch>
            <Route exact path="/"><PokemonsList /></Route>
            <Route path="/pokemon/:name">
              <Pokemon />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
