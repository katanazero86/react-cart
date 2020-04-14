import * as types from './actionTypes';


const initialState = {
    cartModalVisible: false,
    cartItems : []
};

export default function cartReducer(state = initialState, action) {

    switch (action.type) {

        case types.OPEN_CART :
            return {
                ...state,
                cartModalVisible: true
            }

        case types.CLOSE_CART :
            return {
                ...state,
                cartModalVisible: false
            }

        case types.ADD_CART :
            return {
                ...state,
                cartItems : [...state.cartItems, action.item]
            }

        case types.REMOVE_CART :
            return {
                ...state,
                cartItems : [...state.cartItems, action.item]
            }

        case types.ITEM_CART :
            return {
                ...state,
            }


        default :
            return state


    }

}
