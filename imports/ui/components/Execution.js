import React, {Component, PropTypes} from 'react';
import TemplateContainer from '../containers/support/TemplateContainer';

class Execution extends Component {
    render() {
        return (
            <TemplateContainer lcontent={this.props.lcontent} ccontent={this.props.ccontent} rcontent={this.props.rcontent} testimonials={this.props.testimonials}/>
        )
    }
}

module.exports = Execution;