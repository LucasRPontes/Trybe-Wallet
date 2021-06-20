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

export const getCurrencyAPI = () => async (dispatch) => {
  const response = await fetchApi();
  const currency = Object.values(response).filter((element) => element.codein !== 'BRLT');
  return dispatch(saveCurrency(currency));
};

export const saveExpenses = (stateComponent) => async (dispatch) => {
  const response = await fetchApi();
  const currency = Object.values(response).filter((element) => element.codein !== 'BRLT');
  const rslt = currency.reduce((acc, curr) => { acc[curr.code] = curr; return acc; }, {});
  stateComponent.exchangeRates = rslt;
  stateComponent.id += 1;
  return dispatch(saveStateComponent(stateComponent));
};
