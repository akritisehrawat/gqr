import React, {Component, PropTypes} from 'react';
var Execution = require('../components/Execution');

var lcontent = "<div id='sidebar_about'></div><ul id='aboutul'><li><a href='about.php'><div className='active' id='about_about'></div></a></li><li><a href='methodology.php'><div  id='about_methodology'></div></a></li><li><a href='execution.php'><div id='about_execution'></div></a></li></ul>";
var ccontent = " <div id='execution'></div> <div id='maincontent'> <p> Our connections, friendships, unique partnerships and joint-ventures stand in testament to our reputation, history and permanence. </p> <p> Ultimately it is our proven track-record that speaks volumes of who we truly are. To get in touch with an extensively networked, well informed and accountable professional partner please <a href='contact.php'>contact</a> us. </p> </div>";
var rcontent = "<div id='ouroffices'></div><ul id='offices'><li>London</li><li>Hong Kong</li><li>Sydney</li><li>Los Angeles</li><li>Houston</li><li>New York</li></ul>";

var testimonials = " <ul> <li><div class='testimonials-wellsfargo'> </div></li> <a href='http://www.numerix.com/' target='_blank'><li><div class='testimonials-numerix'> </div></li></a> <li><div class='testimonials-commerzbank'> </div></li> <li><div class='testimonials-riotinto'> </div></li> <li><div class='testimonials-societegenerale'> </div></li> <li><div class='testimonials-fidelity'> </div></li> <!--<li><div class='testimonials-aqr'> </div></li>--> <a href='http://www.statistics2013.org' target='_blank'> <li><div class='testimonials-stat'> </div></li></a> <li><div class='testimonials-kathrein'> </div></li> <li><div class='testimonials-rbs'> </div></li> <li><div class='testimonials-suntrading'> </div></li> <li><div class='testimonials-citi'> </div></li> <li><div class='testimonials-wynden'> </div></li> <li><div class='testimonials-svb'> </div></li> <li><div class='testimonials-whowhatwear'> </div></li> <li><div class='testimonials-wsj'> </div></li> <!-- <li><div class='testimonials-bp'> </div></li> --> <a href='http://www.rwe.com/web/cms/en/8/rwe/' target='_blank'><li><div class='testimonials-rwe'> </div></li></a> <a href='http://www.city-internships.com/' target='_blank'><li><div class='testimonials-cityintern'> </div></li></a> <a href='http://www.linkedin.com/company/gqr-global-markets/careers?trk=top_nav_careers' target='_blank'><li><div class='testimonials-linkedin'> </div></li></a> <li><div class='testimonials-citizensbank'> </div></li> <a href='http://www.cqf.com/' target='_blank'><li><div class='testimonials-cqf'> </div></li></a> </ul>";

class ExecutionContainer extends Component {
    render() {
        return <Execution lcontent={lcontent} ccontent={ccontent} rcontent={rcontent} testimonials={testimonials}/>
    }
}

module.exports = ExecutionContainer;