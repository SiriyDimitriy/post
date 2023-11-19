import React from 'react';
import ReactDOM from 'react-dom';
import LandingApp from './LandingApp';
import store from '../Store';
import {Provider} from 'react-redux';
import {getConfig} from './config';

// requirejs(["/landingMode.js"], function(landingMode) {
    ReactDOM.render(
        <Provider store={store}>
            <LandingApp/>
        </Provider>,
        document.getElementById('mount')
    );
// });
