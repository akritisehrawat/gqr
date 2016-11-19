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

        this.state = {
            hideCompleted: false,
        }
    };

    toggleHideCompleted() {
        this.setState({
            hideCompleted: !this.state.hideCompleted,
        });
    }

    renderTasks() {
        let filteredTasks = this.props.tasks;
        if(this.state.hideCompleted) {
            filteredTasks = filteredTasks.filter(task => !task.checked);
        }

        return filteredTasks.map((task) => {
            return (
                <Task key={task._id} task={task}  />
            );
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call('tasks.insert', text);

        ReactDOM.findDOMNode(this.refs.textInput).value = "";
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>
                        GQR 
                    </h1>

                    <label>
                        <input 
                            type="checkbox"
                            readOnly
                            checked={this.state.hideCompleted}
                            onClick={this.toggleHideCompleted.bind(this)}
                        />
                        Hide People E-mail Is Sent To
                    </label>

                    <div className="login">
                        <AccountsUIWrapper />
                    </div>

                    {this.props.currentUser ? 
                        <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
                            <input ref="textInput" type="text" placeholder="Type in to add to DB" />
                        </form> : ""
                    }
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>  
        )
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    currentUser: PropTypes.object,
}

export default createContainer(() => {
        return {
            tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch(),
            incompleteCount: Tasks.find({ checked: {$ne: true}}).count(),
            currentUser: Meteor.user()
        };
}, App);