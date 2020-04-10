import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/index.js';

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));