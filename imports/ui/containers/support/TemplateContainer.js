import React, {Component, PropTypes} from 'react';
var Template = require('../../components/support/Template');

class TemplateContainer extends Component {
    render() {
        return <Template lcontent={this.props.lcontent} ccontent={this.props.ccontent} rcontent={this.props.rcontent} testimonials={this.props.testimonials}/>
    }
}

module.exports = TemplateContainer;