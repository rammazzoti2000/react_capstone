import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalogue from '../containers/PokemonsList';
import DetailedPokemonView from '../containers/PokemonCard';

const app = () => (
  <Router>
    <div>
      <div className="title">
        <h1>Pokemons!</h1>
      </div>
      <div className="switch">
        <Switch>
          <Route exact path="/">
            {' '}
            <Catalogue />
            {' '}
          </Route>
          <Route path="/pokemon/:name">
            {' '}
            <DetailedPokemonView />
            {' '}
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default app;
