import React from 'react';
import ReactDOM from 'react-dom';
import LandingApp from './LandingApp';
import store from '../Store';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import DataItemPage from '../containers/DataItem';

// requirejs(["/landingMode.js"], function(landingMode) {
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            {/*<LandingApp/>*/}
            <Switch>
                <Route exact path='/'
                       component={LandingApp}/>
                <Route path='/items/:item'
                       component={DataItemPage}/>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('mount')
);
// });
