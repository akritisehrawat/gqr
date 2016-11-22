import React, {Component, PropTypes} from 'react';
var Methodology = require('../components/Methodology');

var lcontent = "<div id='sidebar_about'></div><ul id='aboutul'><li><a href='about.php'><div className='active' id='about_about'></div></a></li><li><a href='methodology.php'><div  id='about_methodology'></div></a></li><li><a href='execution.php'><div id='about_execution'></div></a></li></ul>";
var ccontent = " <div id='methodology'></div> <div id='maincontent'> <p> GQR represents the next generation in talent acquisition. Our methodology is the result of a designed evolution. We excel in the art and science of recruiting, blending classic search architecture with contemporary execution strategies. </p> <p> <ul> <li>Deep Market Specialisation</li> <li>Proactive Talent Acquisition</li> <li>Global Market Coverage</li> </ul> </p> <p> Advanced specialisation, headhunting and global access form the centrepiece of our uncompromised approach; devised to ensure that we are able to interpret accurately, resource comprehensively, represent effectively and execute with confidence, speed and precision. </p> <p> We do not seek to be all things to all people; simply the very best within our field. </p> </div>";
var rcontent = "<div id='ouroffices'></div><ul id='offices'><li>London</li><li>Hong Kong</li><li>Sydney</li><li>Los Angeles</li><li>Houston</li><li>New York</li></ul>";

class MethodologyContainer extends Component {
    render() {
        return <Methodology lcontent={lcontent} ccontent={ccontent} rcontent={rcontent}/>
    }
}

module.exports = MethodologyContainer;