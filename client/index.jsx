import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {renderRoutes} from '../imports/ui/config/routes.js';

//import App from '../imports/ui/components/App.jsx';

import '../imports/startup/accounts-config.js';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'));
});