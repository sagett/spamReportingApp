import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './configureStore'

import Layout from './component/layout/Layout';
import MainView from './component/view/MainView';
import '../sass/app.scss';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);


render(
  <Provider store = {store}>
    <Router history={history}>
      <Route path = "/" component = {Layout}>
        <IndexRoute component = {MainView}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
