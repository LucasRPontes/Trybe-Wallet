const INITIAL_STATE = {
  id: 0,
  value: 0,
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
  editButton: false,
};

const stateForms = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'HANDLE_CHANGE':
    return {
      ...state,
      [action.payload.chave]: action.payload.valor,
    };
  case 'CHANGE_STATE':
    return {
      ...action.payload.editState,
    };
  default:
    return state;
  }
};

export default stateForms;
