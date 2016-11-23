import React, {Component, PropTypes} from 'react';
var Contingent = require('../components/Contingent');

var lcontent = " <div id='services'></div> <ul id='servicesul'> <li><a href='/executive'><div class='active' id='services_executive'></div></a></li> <li><a href='/contingent'><div id='services_contingent'></div></a></li> <li><a href='/campaign'><div id='services_campaign'></div></a></li> </ul>";
var ccontent = " <div id='headline_contingent'></div> <div id='maincontent'> <p> Through our advanced specialisation and relentless proactivity we are able to leverage our extensive networks to provide a rapidly deployable portfolio of suitable individuals for Permanent, Interim and Contract mandates. </p> <p> We continually extend our market expertise, capturing, developing and utilising accurate, up-to-the-moment information on people, markets and competitor-specific data. Continuous compilation and revision of our proprietary, global network and effective data warehousing and mining forms the foundation of our competitive advantage in accelerating your search. Our expertise enables us to interpret, analyse, source, select, screen and shortlist before our competitors have even completed their first talent map. </p> </div>";
var rcontent = " <div id='ouroffices'></div> <ul id='offices'> <li>London</li> <li>Hong Kong</li> <li>Sydney</li> <li>Los Angeles</li> <li>Houston</li> <li>New York</li> </ul> </div>";

class ContingentContainer extends Component {
    render() {
        return <Contingent lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = ContingentContainer;