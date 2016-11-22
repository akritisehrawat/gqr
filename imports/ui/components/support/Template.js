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
                        <div id='promoblock'>
                            <div id='welcome'>
                            </div>
                        </div>
                        <div id='testimonials'>
                        </div>
                        <div id='content'>
                            <div id='lcontent' dangerouslySetInnerHTML={{__html: this.props.lcontent}}>
                            </div>
                            <div id='ccontent' dangerouslySetInnerHTML={{__html: this.props.ccontent}}>
                            </div>
                            <div id='rcontent' dangerouslySetInnerHTML={{__html: this.props.rcontent}}>
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