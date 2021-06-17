const INITIAL_STATE = {
  currency: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_CURRENCY':
    return {
      ...state,
      currency: action.payload.currency,
    };
  default:
    return state;
  }
};

export default wallet;
