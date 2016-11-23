import React, {Component, PropTypes} from 'react';
var Banking = require('../components/Banking');

var lcontent = " <div id='marketexpertise'></div> <ul id='marketexpertiseul'> <li><a href='banking.php'><div class='active' id='expert_banking'></div></a></li> <li><a href='commodities.php'><div id='expert_commodities'></div></a></li> <li><a href='it.php'><div id='expert_it'></div></a></li> <li><a href='life_sciences.php'><div id='life_sciences'></div></a></li> </ul>";
var ccontent = "<div id='headline_banking'></div> <div id='maincontent'> <p> GQR Global Markets’ Banking & Finance teams operate in dedicated market focused teams and functional specialisms. </p> <p> We represent a select portfolio of elite financial organizations and deliver the most suitably qualified professionals unbounded by jurisdiction or time zone. Our specialist areas of coverage include: </p> <p> <ul> <li> Global Markets & Capital Management </li> <li> Private Banking & Wealth Management </li> <li> Quantitative Research & Analytics </li> <li> Risk Management & Insurance </li> <li> Technology, Finance & Operations </li> <li> Capital Markets & Corporate Finance </li> </p> <p> For all enquiries please <a href='contact.php'>contact us</a>. </p> </div>";
var rcontent = "<div id='practiceareas'></div> <ul id='practiceareasul'> <li>Executive & Leadership </li><li>Global Markets </li><li>Capital Management </li><li>Investment Management </li><li>Wealth Management </li><li>Electronic Trading </li><li>Quantitative Research </li><li>Risk Management </li><li>Insurance </li><li>Finance </li><li>Operations </li><li>Technology </li><li>Investment Banking </li><li>Corporate Finance </li> </ul> </div>";

class BankingContainer extends Component {
    render() {
        return <Banking lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = BankingContainer;