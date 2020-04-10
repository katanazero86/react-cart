import {call, put, takeEvery} from 'redux-saga/effects';

import * as types from '../../testModule/actionTypes';
import { addNumber } from '../../testModule/actions';

function* addNumberTest(action) {
    try {
        console.log('addNumber Saga');
        yield put(addNumber());
    } catch(error) {
        console.log('fail..');

    }
}

export const addNumberSagas = [
    takeEvery(types.ADD_NUMBER_SAGA, addNumberTest),
];

// export default function* addNumberSaga() {
//     yield takeEvery(types.ADD_NUMBER, addNumberTest); // 발생시점이 되는 action type, 실행할 함수
// }
