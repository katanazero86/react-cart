import {call, put, takeEvery} from 'redux-saga/effects';

import * as types from '../../testModule/actionTypes';
import { addNumber, addNumberSaga } from '../../testModule/actions';

function* addNumberTest(action) {
    try {
        console.log('addNumber Saga..');
        yield put(addNumber());
        // yield put(addNumberSaga()); // 이런식으로 호출하면, 무한반복.
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
