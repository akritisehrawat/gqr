import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Tasks} from '../api/tasks.js';

import Task from './Task.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="container">
            </div>  
        )
    }
}

module.exports = App;