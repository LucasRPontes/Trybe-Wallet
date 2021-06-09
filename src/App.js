import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => (<Login />) } />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
