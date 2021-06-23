import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends React.Component {
  constructor() {
    super();

    this.convertedValue = this.convertedValue.bind(this);
    this.deleteExpenseButton = this.deleteExpenseButton.bind(this);
  }

  // Função tirada do código do Jonathan
  convertedValue(value, exchangeRates) {
    const converted = value * exchangeRates;
    return parseFloat(converted).toFixed(2);
  }

  deleteExpenseButton(id) {
    const { despesas } = this.props;
    const result = despesas.filter((element) => element.id !== id);
    return result;
  }

  render() {
    const { despesas, deleteExpenseRdx } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { despesas.map((desp, index) => (
            <tr key={ index }>
              <td>{ desp.description }</td>
              <td>{ desp.tag }</td>
              <td>{ desp.method }</td>
              <td>{ desp.value }</td>
              <td>
                {desp.exchangeRates[desp.currency].name.replace('/Real Brasileiro', '')}
              </td>
              <td>
                { this.convertedValue(1, desp.exchangeRates[desp.currency].ask) }
              </td>
              <td>
                { this.convertedValue(desp.value,
                  desp.exchangeRates[desp.currency].ask) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => deleteExpenseRdx(this.deleteExpenseButton(desp.id)) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseRdx: (param) => dispatch(deleteExpense(param)),
});

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

Table.propTypes = {
  despesas: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
