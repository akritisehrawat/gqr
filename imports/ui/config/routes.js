import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer.js';
import TemplateContainer from '../containers/support/TemplateContainer.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} />
    <Route path="template" component={TemplateContainer} />
  </Router>
);