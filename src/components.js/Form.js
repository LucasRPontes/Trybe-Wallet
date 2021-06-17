import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  valueExpense() {
    return (
      <div>
        <label htmlFor="value-expense">
          Valor despesa:
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
          Descrição despesa:
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
          Moeda:
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
          Moeda:
          <select
            id="pay-method"
          >
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
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
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currency,
});

export default connect(mapStateToProps)(Form);
