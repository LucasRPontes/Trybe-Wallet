import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.convertedValue = this.convertedValue.bind(this);
  }

  convertedValue(value, exchangeRates) {
    const converted = value * exchangeRates;
    return parseFloat(converted).toFixed(2);
  }

  render() {
    const { email, despesas } = this.props;

    const soma = despesas
      .reduce((acc, curr) => acc + parseFloat(this.convertedValue(curr.value,
        curr.exchangeRates[curr.currency].ask)), 0);

    return (
      <header>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { soma }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  despesas: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
