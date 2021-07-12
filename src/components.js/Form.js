import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpenses, handleChangeState } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.valueExpense = this.valueExpense.bind(this);
    this.valueDescription = this.valueDescription.bind(this);
    this.currencySelect = this.currencySelect.bind(this);
    this.payMethodSelect = this.payMethodSelect.bind(this);
    this.tagExpense = this.tagExpense.bind(this);
    this.saveExpenseBtn = this.saveExpenseBtn.bind(this);
  }

  valueExpense() {
    const { state, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="value-expense">
          Valor
          <input
            id="value-expense"
            type="text"
            value={ state.value }
            onChange={ (event) => {
              handleChange('value', event.target.value);
            } }
          />
        </label>
      </div>
    );
  }

  valueDescription() {
    const { state, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="value-Description">
          descrição
          <input
            id="value-Description"
            type="text"
            value={ state.description }
            onChange={ (event) => {
              handleChange('description', event.target.value);
            } }
          />
        </label>
      </div>
    );
  }

  currencySelect() {
    const { dinheiro, state, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="currency">
          moeda
          <select
            id="currency"
            value={ state.currency }
            onChange={ (event) => {
              handleChange('currency', event.target.value);
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
    const { state, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="pay-method">
          método de pagamento
          <select
            id="pay-method"
            value={ state.method }
            onChange={ (event) => {
              handleChange('method', event.target.value);
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
    const { state, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="tag">
          tag
          <select
            id="tag"
            value={ state.tag }
            onChange={ (event) => {
              handleChange('tag', event.target.value);
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
    const { saveExpensesRedux, handleChange, state } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ () => {
            saveExpensesRedux({ ...state });
            handleChange('id', state.id + 1);
          } }
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
  saveExpensesRedux: (param) => dispatch(saveExpenses(param)),
  handleChange: (chave, valor) => dispatch(handleChangeState(chave, valor)),
});

const mapStateToProps = (state) => ({
  dinheiro: state.wallet.currencies,
  state: state.stateForms,
});

Form.propTypes = {
  dinheiro: PropTypes.arrayOf,
  saveExpensesRedux: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
