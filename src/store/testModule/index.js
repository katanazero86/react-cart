import * as types from './actionTypes';

const initialState = {
    number: 0
};

export default function testReducer(state = initialState, action) {

    console.log(action);

    switch(action.type) {
        case types.ADD_NUMBER :
            return {
                ...state,
                number: state.number + 1
            };
        default :
            return state;
    }

}
