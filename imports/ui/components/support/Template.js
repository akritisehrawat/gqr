import React, {Component, PropTypes} from 'react';
import HeaderContainer from '../../containers/support/HeaderContainer.js';
import FooterContainer from '../../containers/support/FooterContainer.js';
import { jQuery } from 'meteor/jquery';

var bgimages = ['../../styles/images/backgrounds/Blur.jpg','../../styles/images/backgrounds/Canary-wharf.jpg'];
$(document).ready(function() {
    bgimage = bgimages.shift();
    $('#backgroundCycle').append("<div className='img'><img src='"+bgimage+"' /></div>");
    for (i in bgimages) {
        $('#backgroundCycle').append("<div className='img'><img src2='"+bgimages[i]+"' /></div>");
    }
    $('#menu li ul li').click(function(e) {
        e.stopPropagation();
    });
});

var bgimages = ['/images/backgrounds/_about/1.jpg',
	'/images/backgrounds/_about/2.jpg',
	'/images/backgrounds/_about/3.jpg',
	'/images/backgrounds/_about/4.jpg',
	'/images/backgrounds/_about/5.jpg',
];

class Template extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
        <div>
            <HeaderContainer />
            <div id='background'>
                <div id='backgroundCycle'>
                </div>
                <div id='topbg'>
                </div>
            </div>
            <div id='mainimage'>
                <div id='pageWrapper'>
                    <div id='contentWrapper'>
                        <div id='content'>
                            <div id='lcontent'>
                                <div id='sidebar_about'></div>
                                    <ul id='aboutul'>
                                        <li><a href='about.php'><div className='active' id='about_about'></div></a></li>
                                        <li><a href='methodology.php'><div  id='about_methodology'></div></a></li>
                                        <li><a href='execution.php'><div id='about_execution'></div></a></li>
                                    </ul>
                                </div>
                                <div id='ccontent'>
                                    <div id='headline_about'></div>
                                    <div id='maincontent'>
                                        <p>GQR is a specialist search advisory and talent acquisition firm. We operate at the leading-edge of human capital where talent is most highly valued and innovation most highly sought. We specialise in delivering rare and uncommon talent to the most challenging sectors.</p>
                                        <p>We are a collective of expert headhunters and leverage considerable pooled resources through collaborative project teams to deliver the intellectual and muscular capital essential for competitive advantage.</p>
                                        <p>GQR operates with intelligence, diligence, tenacity and a relentless work ethic. We are proud of our role as ambassadors and trusted advisors to elite institutions and aspirational leaders alike.</p>
                                    </div>
                                </div>
                                <div id='rcontent'>
                                    <div id='ouroffices'></div>
                                    <ul id='offices'>
                                        <li>London</li>
                                        <li>Hong Kong</li>
                                        <li>Sydney</li>
                                        <li>Los Angeles</li>
                                        <li>Houston</li>
                                        <li>New York</li>
                                    </ul>
                                </div>
                                <div className="spacer"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterContainer />
            </div>
        )
    }
}

module.exports = Template;