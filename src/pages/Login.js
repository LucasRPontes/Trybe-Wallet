import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main className="login-main">
        <div className="login-box">
          <input data-testid="email-input" />
          <input data-testid="password-input" />
          <button type="button">
            Entrar
          </button>
        </div>
      </main>
    );
  }
}

export default Login;
