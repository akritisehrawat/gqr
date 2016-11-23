import React, {Component, PropTypes} from 'react';
var Commodities = require('../components/Commodities');

var lcontent = " <div id='marketexpertise'></div> <ul id='marketexpertiseul'> <li><a href='/banking'><div id='expert_banking'></div></a></li> <li><a href='/commodities'><div class='active' id='expert_commodities'></div></a></li> <li><a href='/it'><div id='expert_it'></div></a></li> <li><a href='/lifesciences'><div id='life_sciences'></div></a></li> </ul>";
var ccontent = " <div id='headline_commodities'></div> <div id='maincontent'> <p> Our Energy & Engineering practice leverages the specialist expertise and execution capabilities of a team of dedicated agents. </p> <p> We approach the industry from an uncommon vantage point, adept in providing a spectrum of Financial, Technical, Commercial and Operational expertise. We posses intimate knowledge across the energy cycle and specialise in the following areas: </p> <p> <ul> <li>Global Markets </li><li>Oil & Gas </li><li>Minerals & Mining </li><li>Renewables, Energy & Utilities</li> </ul> </p> <p> To explore your options with an accountable professional please contact us. </p> </p> </div>";
var rcontent = " <div id='practiceareas'></div> <ul id='practiceareasul'> <li>Senior Appointments </li><li>Sales & Trading </li><li>Structuring & Analytics </li><li>Research & Strategy </li><li>Subsurface Engineering </li><li>Geology & Geophysics </li><li>Subsea Engineering </li><li>Drilling & Completions </li><li>Well Engineering </li><li>Process Engineering </li><li>Technical Services </li><li>Topside/ QHSE </li><li>Power Generation </li><li>Power & Transmission </li> </ul> </div>";

class CommoditiesContainer extends Component {
    render() {
        return <Commodities lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = CommoditiesContainer;