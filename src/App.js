import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import './css/Product.css'
import 'antd/dist/antd.css';

import Main from './components/Main';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path={'/'} component={Main} /> */}
        <Route exact path={'/product'} component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
