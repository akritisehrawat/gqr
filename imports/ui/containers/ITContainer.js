import React, {Component, PropTypes} from 'react';
var IT = require('../components/IT');

var lcontent = " <div id='marketexpertise'></div> <ul id='marketexpertiseul'> <li><a href='/banking'><div id='expert_banking'></div></a></li> <li><a href='/commodities'><div class='active' id='expert_commodities'></div></a></li> <li><a href='/it'><div id='expert_it'></div></a></li> <li><a href='/lifesciences'><div id='life_sciences'></div></a></li> </ul>";
var ccontent = " <div id='headline_technology'></div> <div id='maincontent'> <p> The Information Technology division recruits for cutting-edge software, data and computer-driven organisations, through Financial Services, Big Data, Internet, Mobile, eCommerce, Gaming and Digital Media. We represent a select portfolio of organisations ranging from multinational financial institutions to early stage high-tech start-ups. </p> <p> We operate in dedicated sector teams focused into highly specialised functional verticals. Our specialist coverage include: </p> </p> <p> <ul> <li>Software Engineering, Programming & Development </li> <li>Digital, Web, Mobile & Product Development </li> <li>Infrastructure, Systems, Networks & Support </li> <li>ERP, CRM and Business Intelligence </li> <li>Storage, Virtualisation & Cloud </li> <li>Data & Predictive Analytics </li> </ul> </p> </div>";
var rcontent = " <div id='practiceareas'></div> <ul id='practiceareasul'> <li>Senior Appointments</li> <li>Software Engineering</li> <li>Application Development</li> <li>Systems Engineering</li> <li>Network & Security</li> <li>Support, QA & Testing </li> <li>Storage & Virtualisation</li> <li>Data Analytics</li> <li>Business Intelligence</li> <li>Data Warehousing</li> <li>Business Analysis</li> <li>Projects & Change</li> <li>Enterprise Solutions</li> <li>Financial Technology</li> <li>Digital Media</li> </ul> </div>";

class ITContainer extends Component {
    render() {
        return <IT lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = ITContainer;