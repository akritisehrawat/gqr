import React, {Component, PropTypes} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div id='headerWrapper'>
                <div id='header'>
                    <a href='/'><div id='logo'>
                    </div></a>
                    <ul id='menu'>
                        <li onClick='/about"'><a href='/about'><div id='menu_about'></div></a>
                            <ul>
                                <a href='/about'><li><img src='/images/topmenu_aboutus.png' /></li></a>
                                <a href='/methodology'><li><img src='/images/topmenu_methodology.png' /></li></a>
                                <a href='/execution'><li><img src='/images/topmenu_execution.png' /></li></a>
                            </ul>
                        </li>
                        <li onClick='/banking'>
                            <a href='/banking'><div id='menu_markets'></div></a>
                            <ul>
                                <a href='/banking'><li><img src='/images/topmenu_banking.png' /></li></a>
                                <a href='/commodities'><li><img src='/images/topmenu_commodities.png' /></li></a>
                                <a href='/it'><li><img src='/images/topmenu_it.png' /></li></a>
                                <a href='/life_sciences'><li><img src='/images/topmenu_life_sciences.png' /></li></a>
                            </ul>

                        </li>
                        <li onClick='/executive"'><a href='/executive'><div id='menu_services'></div></a>
                        <ul>
                                <a href='/executive'><li><img src='/images/topmenu_executive.png' /></li></a>
                                <a href='/contingent'><li><img src='/images/topmenu_contingent.png' /></li></a>
                                <a href='/campaign'><li><img src='/images/topmenu_campaign.png' /></li></a>

                            </ul>
                        </li>
                        <li  onClick='window.location="contact.php";return false;'><a href='contact.php'><div id='menu_contact'></div></a></li>
                    </ul>
                    <a href='http://vacancies.gqrgm.com' target='_blank' onClick="_gaq.push(['_link','http://vacancies.gqrgm.com']); return false;">
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