import React, {Component, PropTypes} from 'react';
var Executive = require('../components/Executive');

var lcontent = " <div id='services'></div> <ul id='servicesul'> <li><a href='/executive'><div class='active' id='services_executive'></div></a></li> <li><a href='/contingent'><div id='services_contingent'></div></a></li> <li><a href='/campaign'><div id='services_campaign'></div></a></li> </ul>";
var ccontent = " <div id='headline_executive'></div> <div id='maincontent'> <p> GQR is a specialist search advisory and talent acquisition firm. We provide a full suite of solutions tailored to deliver upon strategic objectives. </p> <p> We deploy a comprehensive and uncompromised methodology to secure the most qualified human capital available globally. We are careful to understand your requirements and committed to providing an exceptional level of service. </p> <p> <table> <tr> <td> <ul> <li>Advanced Market Specialisation </li> <li>Proactive Talent Acquisition </li> <li>Proprietary Intelligence</li> </ul> </td> <td> <ul> <li>Accurate Interpretation </li> <li>Effective Representation </li> <li>Confidentiality and Discretion</li> </ul> </td> </tr> </table> </p> <p> For more information about our Contingent Search services please <a href='contact.php'>contact</a> Simon Kenyon, Head of Global Client Services. </p> </div>";
var rcontent = "<div id='ouroffices'></div> <ul id='offices'> <li>London</li> <li>Hong Kong</li> <li>Sydney</li> <li>Los Angeles</li> <li>Houston</li> <li>New York</li> </ul> </div>";

class ExecutiveContainer extends Component {
    render() {
        return <Executive lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = ExecutiveContainer;