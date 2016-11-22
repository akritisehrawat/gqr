import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} />
  </Router>
);