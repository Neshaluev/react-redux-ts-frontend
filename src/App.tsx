import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Alert from './components/Alert/Alert';
import { Router } from './router/Router';

import './styles/index.scss';
import './style.scss';

function App() {
  return (
    <>
      <div className="wrapper">
        <Route
          exact
          path={[
            '/home',
            '/categories',
            '/dashboard',
            '/categories/category/:id',
            '/product',
            '/product/:id',
          ]}
        >
          <NavBar />
        </Route>
        <Switch>
          <Route component={Router} />
        </Switch>
      </div>
      <Alert />
    </>
  );
}

export default App;
