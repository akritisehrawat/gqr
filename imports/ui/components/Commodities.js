import React, {Component, PropTypes} from 'react';
import TemplateContainer from '../containers/support/TemplateContainer';

class Commodities extends Component {
    render() {
        return (
            <TemplateContainer lcontent={this.props.lcontent} ccontent={this.props.ccontent} rcontent={this.props.rcontent} />
        )
    }
}

module.exports = Commodities;