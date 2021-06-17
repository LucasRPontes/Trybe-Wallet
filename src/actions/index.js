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

export const getCurrencyAPI = () => async (dispatch) => {
  const response = await fetchApi();
  const currency = Object.values(response).filter((element) => element.codein !== 'BRLT');
  return dispatch(saveCurrency(currency));
};
