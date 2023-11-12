import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";

import './styles/main.less';
import store from './Store.js';
import App from './containers/App';


ReactDOM.render(
    <Provider store={store}>
                     <HashRouter>
                        <App/>
                     </HashRouter>
                </Provider>
    ,
    document.getElementById('mount')
)