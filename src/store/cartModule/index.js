import * as types from './actionTypes';


const initialState = {
    cartModalVisible: false
};

export default function cartReducer(state = initialState, action) {

    switch (action.type) {

        case types.OPEN_CART :
            return {
                cartModalVisible: true
            }

        case types.CLOSE_CART :
            return {
                cartModalVisible: false
            }

        default :
            return state


    }

}