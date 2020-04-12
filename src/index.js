import React from 'react';
import ReactDOM from 'react-dom';

// polyfill
import '@babel/polyfill';

import App from './App';

// router
import {BrowserRouter} from 'react-router-dom';

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
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('app'));
