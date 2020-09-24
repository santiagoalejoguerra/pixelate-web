import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import './css/Product.css'
import 'antd/dist/antd.css';

//import Main from './components/Main';
//import Product from './components/Product';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Home} />
        {/* <Route exact path={'/main'} component={Main} /> */}
        {/* <Route exact path={'/product'} component={Product} /> */}
      </Switch>
    </Router>
  );
}

export default App;
