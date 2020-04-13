import { combineReducers } from 'redux';

import testReducer from './testModule/index';
import menuReducer from "./menuModule/index";

export default combineReducers({
    test : testReducer,
    menu : menuReducer,
})