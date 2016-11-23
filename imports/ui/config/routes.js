import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer.js';
import TemplateContainer from '../containers/support/TemplateContainer.js';
import AboutContainer from '../containers/AboutContainer.js';
import HomepageContainer from '../containers/HomepageContainer.js';
import MethodologyContainer from '../containers/MethodologyContainer.js';
import ExecutionContainer from '../containers/ExecutionContainer.js';
import BankingContainer from '../containers/BankingContainer.js';
import CommoditiesContainer from '../containers/CommoditiesContainer.js';
import ITContainer from '../containers/ITContainer.js';
import LifeSciencesContainer from '../containers/LifeScienceContainer.js';
import ExecutiveContainer from '../containers/ExecutiveContainer.js';
import ContingentContainer from '../containers/ContingentContainer.js';
import CampaignContainer from '../containers/CampaignContainer.js';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomepageContainer} />
    <Route path="template" component={TemplateContainer} />
    <Route path="about" component={AboutContainer} />
    <Route path="methodology" component={MethodologyContainer} />
    <Route path="execution" component={ExecutionContainer} />
    <Route path="banking" component={BankingContainer} />
    <Route path="commodities" component={CommoditiesContainer} />
    <Route path="it" component={ITContainer} />
    <Route path="lifesciences" component={LifeSciencesContainer} />
    <Route path="executive" component={ExecutiveContainer} />
    <Route path="contingent" component={ContingentContainer} />
    <Route path="campaign" component={CampaignContainer} />
  </Router>
);