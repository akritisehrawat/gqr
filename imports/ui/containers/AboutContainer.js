import React, {Component, PropTypes} from 'react';
var About = require('../components/About');

var lcontent = "<div id='sidebar_about'></div><ul id='aboutul'><li><a href='/about'><div className='active' id='about_about'></div></a></li><li><a href='/methodology'><div  id='about_methodology'></div></a></li><li><a href='/execution'><div id='about_execution'></div></a></li></ul>";
var ccontent = "<div id='headline_about'></div><div id='maincontent'><p>GQR is a specialist search advisory and talent acquisition firm. We operate at the leading-edge of human capital where talent is most highly valued and innovation most highly sought. We specialise in delivering rare and uncommon talent to the most challenging sectors.</p><p>We are a collective of expert headhunters and leverage considerable pooled resources through collaborative project teams to deliver the intellectual and muscular capital essential for competitive advantage.</p><p>GQR operates with intelligence, diligence, tenacity and a relentless work ethic. We are proud of our role as ambassadors and trusted advisors to elite institutions and aspirational leaders alike.</p></div>";
var rcontent = "<div id='ouroffices'></div><ul id='offices'><li>London</li><li>Hong Kong</li><li>Sydney</li><li>Los Angeles</li><li>Houston</li><li>New York</li></ul>";

class AboutContainer extends Component {
    render() {
        return <About lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = AboutContainer;