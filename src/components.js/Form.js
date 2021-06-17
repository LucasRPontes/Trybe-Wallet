import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  valueExpense() {
    return (
      <div>
        <label htmlFor="value-expense">
          Valor despesa
          <input
            id="value-expense"
            type="text"
          />
        </label>
      </div>
    );
  }

  valueDescription() {
    return (
      <div>
        <label htmlFor="value-Description">
          Descrição despesa
          <input
            id="value-Description"
            type="text"
          />
        </label>
      </div>
    );
  }

  currencySelect() {
    // const { currency } = this.props;
    // const result = currency;
    // console.log(result.map((element) => element));
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
          >
            {/* {currency.map((moeda) => (
              <option value={ moeda.code }>
                { moeda.code }
              </option>
            ))} */}
          </select>
        </label>
      </div>
    );
  }

  payMethodSelect() {
    return (
      <div>
        <label htmlFor="pay-method">
          Método de pagamento
          <select
            id="pay-method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }

  tagExpense() {
    return (
      <div>
        <label htmlFor="pay-method">
          Tag
          <select
            id="pay-method"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    // const { currency } = this.props;
    return (
      <div>
        <form>
          {this.valueExpense()}
          {this.valueDescription()}
          {this.currencySelect()}
          {this.payMethodSelect()}
          {this.tagExpense()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currency,
});

export default connect(mapStateToProps)(Form);
