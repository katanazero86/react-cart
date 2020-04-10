import React from 'react';
import ReactDOM from 'react-dom';

// polyfill
import '@babel/polyfill';

import App from './App';

// redux-saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/saga/index.js';
const sagaMiddleware = createSagaMiddleware();

// redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/index.js';

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));
