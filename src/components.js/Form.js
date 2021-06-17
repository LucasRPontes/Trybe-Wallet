import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencyAPI } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.valueExpense = this.valueExpense.bind(this);
    this.valueDescription = this.valueDescription.bind(this);
    this.currencySelect = this.currencySelect.bind(this);
    this.payMethodSelect = this.payMethodSelect.bind(this);
    this.tagExpense = this.tagExpense.bind(this);
  }

  componentDidMount() {
    const { saveApi } = this.props;
    saveApi();
  }

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
    const { currency } = this.props;
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
          >
            {currency.map((moeda, index) => (
              <option value={ moeda.code } key={ index }>
                { moeda.code }
              </option>
            ))}
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

const mapDispatchToProps = (dispatch) => ({
  saveApi: () => dispatch(getCurrencyAPI()),
});

const mapStateToProps = (state) => ({
  currency: state.wallet.currency,
});

Form.propTypes = {
  currency: PropTypes.arrayOf.isRequired,
  saveApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
