import {createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index.js';
const sagaMiddleware = createSagaMiddleware();

// reducer
import testReducer from './testModule/index';
import menuReducer from "./menuModule/index";
import cartReducer from "./cartModule/index";

const rootReducer = combineReducers({
    test : testReducer,
    menu : menuReducer,
    cart : cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store
