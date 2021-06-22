import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components.js/Header';
import Form from '../components.js/Form';
import Table from '../components.js/Table';
import { getCurrencyAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { saveApi } = this.props;
    saveApi();
  }

  deleteExpenseButton(id) {
    const { despesas } = this.props;
    const result = despesas.filter((element) => element.id !== id);
    console.log(result);
    return result;
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveApi: () => dispatch(getCurrencyAPI()),
});

Wallet.propTypes = {
  saveApi: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
