import React, {Component, PropTypes} from 'react';
var Homepage = require('../components/Homepage');

var lcontent = "<div id='marketexpertise'></div><ul id='marketexpertiseul'><li><a href='banking.php'><div id='expert_banking'></div></a></li><li><a href='commodities.php'><div id='expert_commodities'></div></a></li><li><a href='it.php'><div id='expert_it'></div></a></li><li><a href='life_sciences.php'><div id='life_sciences'></div></a></li></ul>";
var ccontent = "<div id='gqr'></div><div id='maincontent'><p>GQR Global Markets is an award-winning international Banking & Finance, Energy & Engineering, Information Technology and Life Sciences search specialist.</p><p>We unite the most talented people with the most pioneering organisations throughout the Americas, Europe and Asia-Pacific to find the very best opportunities wherever they may be located.</p></div>";
var rcontent = "<div id='ouroffices'></div><ul id='offices'><li>London</li><li>Hong Kong</li><li>Sydney</li><li>Los Angeles</li><li>Houston</li><li>New York</li></ul>";

class HomepageContainer extends Component {
    render() {
        return <Homepage lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = HomepageContainer;