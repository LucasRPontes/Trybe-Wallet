const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_CURRENCY':
    return {
      ...state,
      currencies: action.payload.currency,
    };
  default:
    return state;
  }
};

export default wallet;
