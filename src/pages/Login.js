import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveEmail, getCurrencyAPI } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.searchWords = this.searchWords.bind(this);
    // this.checkButton = this.checkButton.bind(this);
  }

  componentDidMount() {
    const { saveApi } = this.props;
    saveApi();
  }

  // checkButton() {
  //   const emailInput = document.getElementById('input-email').value;
  //   const passwordInput = document.getElementById('input-password').value;
  //   const MINIMO_CARACTERES_SENHA = 6;
  //   console.log(emailInput);
  //   console.log(passwordInput);
  //   // if (passwordInput.value.length < MINIMO_CARACTERES_SENHA) {
  //   //   alert('Senha Inválida!');
  //   // }
  // }

  searchWords(event) {
    const { value } = event.target;
    this.setState({ email: value });
  }

  render() {
    const { email } = this.state;
    const { addEmail } = this.props;

    return (
      <main className="login-main">
        <div className="login-box">
          <input
            id="input-email"
            data-testid="email-input"
            onChange={ (event) => this.searchWords(event) }
          />
          <input id="input-password" data-testid="password-input" />
          <Link to="/carteira">
            <button type="button" onClick={ () => addEmail(email) }>
              Entrar
            </button>
          </Link>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(saveEmail(email)),
  saveApi: () => dispatch(getCurrencyAPI()),
});

Login.propTypes = {
  addEmail: PropTypes.func.isRequired,
  saveApi: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
