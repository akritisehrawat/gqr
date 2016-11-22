import React, {Component, PropTypes} from 'react';
import HeaderContainer from '../../containers/support/HeaderContainer.js';
import FooterContainer from '../../containers/support/FooterContainer.js';

(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
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
if (!jQuery.browser.mobile ) {
        $(window).resize(function(){
        if ($(window).height() - 295 - 150 > $('#pageWrapper').height()) {
            $('#pageWrapper').css('margin-top',$(window).height() - 295 - 149 - $('#pageWrapper').height()+'px');
        }
        });
        $(window).resize();
        if ($('#backgroundCycle div.img img').length > 1) {
        $('#backgroundCycle div.img img').each(function() {
            if ($(this).attr('src2')) {
                $(this).attr('src',$(this).attr('src2'));
            }
        });

        $('#backgroundCycle div.img').css('opacity',0);

        $('#backgroundCycle div.img').eq(0).addclass('active').fadeTo(1500,1)
        setInterval(function(){
            if (!$('#backgroundCycle div.img.active').next('div.img').length) {
                $('#backgroundCycle div.img.active').fadeTo(1500, 0).removeclass('active');
                $('#backgroundCycle div.img').eq(0).addclass('active').fadeTo(3000,1)
            } else {
                $('#backgroundCycle div.img.active').fadeTo(1500, 0).removeclass('active').next('div.img').addclass('active').fadeTo(3000,1);
            }
        },6000);
        }
    }
});

var bgimages = ['images/backgrounds/_about/1.jpg',
	'images/backgrounds/_about/2.jpg',
	'images/backgrounds/_about/3.jpg',
	'images/backgrounds/_about/4.jpg',
	'images/backgrounds/_about/5.jpg',
];

class Template extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
        <div>
            {HeaderContainer}
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
                                <div  /*style='clear:both'*/></div>
                            </div>
                        </div>
                    </div>
                </div>
                {FooterContainer}
            </div>
        )
    }
}

module.exports = Template;