import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/carteira" render={ () => (<Wallet />) } />
        <Route exact path="/" render={ () => (<Login />) } />
      </Switch>
    </div>

  );
}

export default App;
