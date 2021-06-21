import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  constructor() {
    super();

    this.convertedValue = this.convertedValue.bind(this);
  }

  // Função tirada do código do Jonathan
  convertedValue(value, exchangeRates) {
    const converted = value * exchangeRates;
    return parseFloat(converted).toFixed(2);
  }

  render() {
    const { despesas } = this.props;
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
          { despesas.map((despesa, index) => (
            <tr key={ index }>
              <td>{ despesa.description }</td>
              <td>{ despesa.tag }</td>
              <td>{ despesa.method }</td>
              <td>{ despesa.value }</td>
              <td>
                { despesas.length > 0 && despesa.exchangeRates[despesa.currency].name
                  .replace('/Real Brasileiro', '') }
              </td>
              <td>{ despesa.currency }</td>
              <td>
                { despesas.length > 0
                  && this.convertedValue(despesa.value,
                    despesa.exchangeRates[despesa.currency].ask) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
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

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

Table.propTypes = {
  despesas: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, null)(Table);
