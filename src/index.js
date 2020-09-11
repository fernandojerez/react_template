
import 'styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, navigate } from "@reach/router"
import { Provider } from 'react-redux';
import { path, setup_router } from 'helpers/router';
import Home from 'views/Home';


setup_router(navigate);

ReactDOM.render(
  //<Provider store={null}>
  <Router>
    <Home path={path('/')} />
  </Router>
  //</Provider>
  ,
  document.getElementById('root')
); 
