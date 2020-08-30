const POKEMON_FILTER = 'POKEMON_FILTER';
const filter = (state = 'select', action) => {
  switch (action.type) {
    case POKEMON_FILTER:
      return action.type;
    default:
      return state;
  }
};

export default filter;
