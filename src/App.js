import React from 'react';
import './App.css';
import './Layout.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


import Layout from './Layout';

const hist = createBrowserHistory();


function App() {
  return (
      <div className="App">
        <Router history={hist}>
          <Switch>
            <Route path="/" component={Layout} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
