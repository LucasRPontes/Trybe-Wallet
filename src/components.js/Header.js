import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, despesas } = this.props;

    const soma = despesas
      .reduce((acc, curr) => {
        const result = acc + (curr.exchangeRates[curr.currency].ask * curr.value);
        return parseFloat(result.toFixed(2));
      }, 0);

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
