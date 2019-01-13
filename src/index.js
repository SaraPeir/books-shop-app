import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./js/App";
import rootReducer from './redux/reducers/index.js';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
        </Provider>
    , document.getElementById('root'));

//import { BrowserRouter, HashRouter } from 'react-router-dom';

/* ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root')); */