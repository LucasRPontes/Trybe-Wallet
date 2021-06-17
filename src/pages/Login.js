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
      password: '',
      disableBtn: true,
    };

    this.searchWords = this.searchWords.bind(this);
    this.checkButton = this.checkButton.bind(this);
  }

  // componentDidMount() {
  //   const { saveApi } = this.props;
  //   saveApi();
  // }

  checkButton() {
    const { email, password } = this.state;
    const MINIMO_CARACTERES_SENHA = 5;
    const verifySign = email.includes('@');
    const verifyDotCom = email.includes('.com');
    if (verifySign && verifyDotCom && password.length >= MINIMO_CARACTERES_SENHA) {
      this.setState({ disableBtn: false });
    } else {
      this.setState({ disableBtn: true });
    }
  }

  searchWords(chave, valor) {
    this.setState({ [chave]: valor });
  }

  render() {
    const { email, disableBtn } = this.state;
    const { addEmail, saveApi } = this.props;

    return (
      <main className="login-main">
        <div className="login-box">
          <input
            id="input-email"
            data-testid="email-input"
            onChange={ (event) => {
              this.searchWords('email', event.target.value);
              this.checkButton();
            } }
          />
          <input
            id="input-password"
            data-testid="password-input"
            onChange={ (event) => {
              this.searchWords('password', event.target.value);
              this.checkButton();
            } }
          />
          <Link to="/carteira">
            <button
              type="button"
              onClick={ () => {
                addEmail(email);
                saveApi();
              } }
              disabled={ disableBtn }
            >
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
