import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencyAPI, saveExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: -1,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.valueExpense = this.valueExpense.bind(this);
    this.valueDescription = this.valueDescription.bind(this);
    this.currencySelect = this.currencySelect.bind(this);
    this.payMethodSelect = this.payMethodSelect.bind(this);
    this.tagExpense = this.tagExpense.bind(this);
  }

  searchState(chave, valor) {
    this.setState({ [chave]: valor });
  }

  valueExpense() {
    return (
      <div>
        <label htmlFor="value-expense">
          Valor
          <input
            id="value-expense"
            type="text"
            onChange={ (event) => {
              this.searchState('value', event.target.value);
            } }
          />
        </label>
      </div>
    );
  }

  valueDescription() {
    return (
      <div>
        <label htmlFor="value-Description">
          descrição
          <input
            id="value-Description"
            type="text"
            onChange={ (event) => {
              this.searchState('description', event.target.value);
            } }
          />
        </label>
      </div>
    );
  }

  currencySelect() {
    const { dinheiro } = this.props;
    return (
      <div>
        <label htmlFor="currency">
          moeda
          <select
            id="currency"
            onChange={ (event) => {
              this.searchState('currency', event.target.value);
            } }
          >
            {dinheiro.map((moeda, index) => (
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
          método de pagamento
          <select
            id="pay-method"
            onChange={ (event) => {
              this.searchState('method', event.target.value);
            } }
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
          tag
          <select
            id="pay-method"
            onChange={ (event) => {
              this.searchState('tag', event.target.value);
            } }
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

  saveExpenseBtn() {
    const { saveExpensesRedux } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ () => saveExpensesRedux(this.state) }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }

  render() {
    return (

      <form>
        {this.valueExpense()}
        {this.valueDescription()}
        {this.currencySelect()}
        {this.payMethodSelect()}
        {this.tagExpense()}
        {this.saveExpenseBtn()}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveApi: () => dispatch(getCurrencyAPI()),
  saveExpensesRedux: (param) => dispatch(saveExpenses(param)),
});

const mapStateToProps = (state) => ({
  dinheiro: state.wallet.currencies,
});

Form.propTypes = {
  dinheiro: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
