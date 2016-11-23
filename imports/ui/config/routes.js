import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer.js';
import TemplateContainer from '../containers/support/TemplateContainer.js';
import AboutContainer from '../containers/AboutContainer.js';
import HomepageContainer from '../containers/HomepageContainer.js';
import MethodologyContainer from '../containers/MethodologyContainer.js';
import ExecutionContainer from '../containers/ExecutionContainer.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomepageContainer} />
    <Route path="template" component={TemplateContainer} />
    <Route path="about" component={AboutContainer} />
    <Route path="methodology" component={MethodologyContainer} />
    <Route path="execution" component={ExecutionContainer} />
  </Router>
);