import fetchApi from '../services/api';

export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL',
  payload: {
    email,
  },
});

export const saveCurrency = (currency) => ({
  type: 'SAVE_CURRENCY',
  payload: {
    currency,
  },
});

export const saveStateComponent = (expense) => ({
  type: 'SAVE_EXPENSES',
  payload: {
    expense,
  },
});

export const deleteExpense = (newExpense) => ({
  type: 'DELETE_EXPENSE',
  payload: {
    newExpense,
  },
});

export const getCurrencyAPI = () => async (dispatch) => {
  const response = await fetchApi();
  const currency = Object.values(response).filter((element) => element.codein !== 'BRLT');
  return dispatch(saveCurrency(currency));
};

export const saveExpenses = (stateComponent) => async (dispatch) => {
  const response = await fetchApi();
  stateComponent.exchangeRates = response;
  return dispatch(saveStateComponent(stateComponent));
};
// Exemplo de reduce criando objeto
// currency.reduce((acc, curr) => { acc[curr.code] = curr; return acc; }, {});
