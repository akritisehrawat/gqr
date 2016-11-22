import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

class App extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="container">
                App Loaded
            </div>  
        )
    }
}

module.exports = App;