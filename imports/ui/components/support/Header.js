import React, {Component, PropTypes} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div id='headerWrapper'>
                <div id='header'>
                    <a href='index.php'><div id='logo'>
                    </div></a>
                    <ul id='menu'>
                        <li onclick='window.location="about.php"'><a href='about.php'><div id='menu_about'></div></a>
                            <ul>
                                <a href='about.php'><li><img src='images/topmenu_aboutus.png' /></li></a>
                                <a href='methodology.php'><li><img src='images/topmenu_methodology.png' /></li></a>
                                <a href='execution.php'><li><img src='images/topmenu_execution.png' /></li></a>
                            </ul>
                        </li>
                        <li onclick='window.location="banking.php";return false;'>
                            <a href='banking.php'><div id='menu_markets'></div></a>
                            <ul>
                                <a href='banking.php'><li><img src='images/topmenu_banking.png' /></li></a>
                                <a href='commodities.php'><li><img src='images/topmenu_commodities.png' /></li></a>
                                <a href='it.php'><li><img src='images/topmenu_it.png' /></li></a>
                                <a href='life_sciences.php'><li><img src='images/topmenu_life_sciences.png' /></li></a>
                            </ul>

                        </li>
                        <li onclick='window.location="executive.php"'><a href='executive.php'><div id='menu_services'></div></a>
                        <ul>
                                <a href='executive.php'><li><img src='images/topmenu_executive.png' /></li></a>
                                <a href='contingent.php'><li><img src='images/topmenu_contingent.png' /></li></a>
                                <a href='campaign.php'><li><img src='images/topmenu_campaign.png' /></li></a>

                            </ul>
                        </li>
                        <li  onclick='window.location="contact.php";return false;'><a href='contact.php'><div id='menu_contact'></div></a></li>
                    </ul>
                    <a href='http://vacancies.gqrgm.com' target='_blank' onclick="_gaq.push(['_link','http://vacancies.gqrgm.com']); return false;">
                    <div id='vacancy_portal'>
                    </div>
                    </a>
                </div>
                <div id='header_divider'>
                </div>
            </div>
        )
    }
}

module.exports = Header;