import React, {Component, PropTypes} from 'react';
var Campaign = require('../components/Campaign');

var lcontent = " <div id='services'></div> <ul id='servicesul'> <li><a href='/executive'><div class='active' id='services_executive'></div></a></li> <li><a href='/contingent'><div id='services_contingent'></div></a></li> <li><a href='/campaign'><div id='services_campaign'></div></a></li> </ul>";
var ccontent = " <div id='headline_campaign'></div> <div id='maincontent'> <p> Our Employer Campaign Services include bespoke research and strategic services. Our deep expertise affords an unparalleled vantage point from which to drive informed staffing strategies through superior market insights and actionable sector specific intelligence. </p> <p> <table> <tr> <td> Strategic Services: <ul> <li>Employer Marketing </li> <li>Managed Advertising </li> <li>Graduate Recruiting Programs</li> <ul> </td> <td> Research & Advisory: <ul> <li>Bespoke Research </li> <li>Outplacement Services </li> <li>Recruitment Process Outsourcing</li> </ul> </td> </tr> </table> </p> <p> We are able to leverage extensive experience, expertise and purchasing power to design, orchestrate and execute a suite of managed campaign services. For more information about our bespoke campaign services please contact Simon Kenyon, Head of Global Client Services. </p> </div>";
var rcontent = " <div id='ouroffices'></div> <ul id='offices'> <li>London</li> <li>Hong Kong</li> <li>Sydney</li> <li>Los Angeles</li> <li>Houston</li> <li>New York</li> </ul> </div>";

class CampaignContainer extends Component {
    render() {
        return <Campaign lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = CampaignContainer;