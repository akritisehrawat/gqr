import React, {Component, PropTypes} from 'react';
import TemplateContainer from '../containers/support/TemplateContainer';

class IT extends Component {
    render() {
        return (
            <TemplateContainer lcontent={this.props.lcontent} ccontent={this.props.ccontent} rcontent={this.props.rcontent} />
        )
    }
}

module.exports = IT;