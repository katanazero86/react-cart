import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addNumber} from '../store/testModule/actions'

function Test() {

    const dispatch = useDispatch();
    const number = useSelector((store) => store.test.number);

    const addNumberDispatch = () => {
        dispatch(addNumber());
    };

    return (
        <div className='App-wrap'>
            TEST
            <p>
                {number}
            </p>
            <button onClick={addNumberDispatch}>add number</button>
        </div>
    )
}

export default Test