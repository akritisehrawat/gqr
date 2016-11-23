import React, {Component, PropTypes} from 'react';
var LifeSciences = require('../components/LifeSciences');

var lcontent = "<div id='marketexpertise'></div> <ul id='marketexpertiseul'> <li><a href='banking.php'><div id='expert_banking'></div></a></li> <li><a href='commodities.php'><div class='active' id='expert_commodities'></div></a></li> <li><a href='it.php'><div id='expert_it'></div></a></li> <li><a href='life_sciences.php'><div id='life_sciences'></div></a></li> </ul>";
var ccontent = "<div id='headline_life_sciences'></div> <div id='maincontent'> <p>GQR Life Sciences represents a global portfolio of Biotechnology, Pharmaceuticals and Medical Device companies. In a constantly evolving market, our deep market specialization and proactive talent acquisition methodology, accelerates the delivery of highly skilled and niche candidates throughout the Life Sciences domain. Utilizing our cross-industry network we are able to deliver on traditional life sciences skill sets, as well as cater to the competitive demand for Data Science and Technology talent.<br/><br/> GQR continually revise and extend our market expertise, developing and utilizing accurate, up-to-the-moment information on people, markets and competitor-specific data.<br/><br/> GQR Life Sciences comprises four core disciplines: <ul> <li><b>Biometrics & Technology</b><br/> Biostatisticians; Bioinformatics: Data Scientists; Software Developers; Business Intelligence; Data Warehousing and Management; Big Data Engineers; Database Developers</li> <li><b>R&D</b><br/> Clinical, CMC, Marketing/Promotions</li> <li><b>Medical & Clinical</b><br/> Clinical Development, Medical Affairs, Drug Safety/Pharmacovigilance, Clinical Ops, MSL’s, Medical Communications</li> <li><b>HEOR</b><br/> Health Economics, Outcomes Research, Market Access, Pricing & Reimbursement, Epidemiology</li></ul><br/> Each specialized business unit is augmented by dedicated research and resourcing teams.For more information, please contact us at lifesciences@gqrgm.com</p> </div>";
var rcontent = " <div id='practiceareas'></div> <ul id='practiceareasul'> <li>Senior Appointments</li> <li>Software Engineering</li> <li>Application Development</li> <li>Systems Engineering</li> <li>Network & Security</li> <li>Support, QA & Testing </li> <li>Storage & Virtualisation</li> <li>Data Analytics</li> <li>Business Intelligence</li> <li>Data Warehousing</li> <li>Business Analysis</li> <li>Projects & Change</li> <li>Enterprise Solutions</li> <li>Financial Technology</li> <li>Digital Media</li> </ul> </div>";

class LifeSciencesContainer extends Component {
    render() {
        return <LifeSciences lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = LifeSciencesContainer;