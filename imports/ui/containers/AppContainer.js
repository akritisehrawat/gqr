/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var App = require('../ui/components/App.jsx');

var AppContainer = React.createClass({
    render: function() {
        return <App />
    }
});

module.exports = AppContainer;