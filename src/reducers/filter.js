const POKEMON_FILTER = 'POKEMON_FILTER';
export const filter = (state = 'normal', action) => {
  switch (action.type) {
    case POKEMON_FILTER:
      return action.type;
    default:
      return state;
  }
};

export const pokemonType = type => type;
