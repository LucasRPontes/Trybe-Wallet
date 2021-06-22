const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_CURRENCY':
    return {
      ...state,
      currencies: action.payload.currency,
    };
  case 'SAVE_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: action.payload.newExpense,
    };
  default:
    return state;
  }
};

export default wallet;
