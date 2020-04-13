import * as types from './actionTypes';

const initialState = {
    menus: []
};

export default function menuReducer(state = initialState, action) {

    switch (action.type) {

        case types.GET_MENUS_SUCCESS :
            return {
                ...state,
                menus: [...action.payload]
            }

        case types.GET_MENUS_FAIL :
            return {
                ...state,
            }

        case types.MENUS :
            return {
                ...state,
                menus: [...state.menus]
            }

        default :
            return state

    }

}