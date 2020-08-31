const FILTER_TYPE = 'FILTER_TYPE';
export const filterType = (state = 'normal', action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.category;
    default:
      return state;
  }
};

export const getPokemonType = category => category;
