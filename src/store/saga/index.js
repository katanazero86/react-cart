import { all } from 'redux-saga/effects';

import {addNumberSagas} from './testSaga/index';

export default function* rootSaga() {
    yield all([
        ...addNumberSagas,
    ]);
}
