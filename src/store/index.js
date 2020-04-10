import { combineReducers } from 'redux';

import testReducer from './testModule/index.js';

export default combineReducers({
    test : testReducer,
})