import { all } from 'redux-saga/effects';

import {addNumberSagas} from './testSaga/index';

import {menuSagas} from './menuSaga/index';

export default function* rootSaga() {
    yield all([
        ...addNumberSagas,
        ...menuSagas,
    ]);
}
