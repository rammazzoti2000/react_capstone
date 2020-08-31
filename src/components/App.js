import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import PokemonList from '../containers/PokemonsList';
import PokemonCard from '../containers/PokemonCard';

const App = () => (
  <Router>
    <div className="max-w-screen-xl mx-auto">
      <Link to="/">
        <img
          className="d-block mx-auto my-4 w-50"
          src="https://fontmeme.com/permalink/200831/9ec6736ad53d60e269c1d456f8921ce5.png"
          alt="pokemon-font"
        />
      </Link>
      {' '}
      <div className="switch d-flex justify-content-center">
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route path="/pokemon/:name" component={PokemonCard} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
