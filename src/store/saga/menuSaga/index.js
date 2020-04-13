import {call, put, takeEvery} from 'redux-saga/effects';

import * as types from '../../menuModule/actionTypes';
import {getMenusSuccess, getMenusFail} from '../../menuModule/actions';

import axios from '../../../api/index';

const getMenusAPI = () => {
    const getURL = `/assets/json/menuJson.json`;
    return axios.get(getURL);
}

function* getMenus() {

    try {

        const result = yield getMenusAPI();
        if (result.status === 200) {
            const menus = result.data;
            yield put(getMenusSuccess( [...menus]));
        } else {
            yield put(getMenusFail());
        }

    } catch (e) {
        console.log(e);
        yield put(getMenusFail());
    }

}


export const menuSagas = [
    takeEvery(types.GET_MENUS, getMenus),
];

