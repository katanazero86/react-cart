import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addNumber, addNumberSaga} from '../store/testModule/actions'

function Test() {

    const dispatch = useDispatch();
    const number = useSelector((store) => store.test.number);

    const addNumberDispatch = () => {
        dispatch(addNumber());
    };

    const addNumberSagaDispatch = () => {
        dispatch(addNumberSaga());
    };

    return (
        <div className='App-wrap'>
            TEST
            <p>
                {number}
            </p>
            <button onClick={addNumberDispatch}>add number</button>
            <button onClick={addNumberSagaDispatch}>add number(saga)</button>
        </div>
    )
}

export default Test
