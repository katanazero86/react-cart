import {call, put, takeEvery} from 'redux-saga/effects';

import * as types from '../../menuModule/actionTypes';
import {getMenusSuccess, getMenusFail} from '../../menuModule/actions';

import axios from '../../../api/index';

function* getMenus() {

    const getURL = `/assets/json/menuJson.json`;
    axios.get(getURL).then(result => {
        console.log(result);

    }).catch(err => {
        console.log(err);
    });

}


export const menuSagas = [
    takeEvery(types.GET_MENUS, getMenus),
];

