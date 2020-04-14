import * as types from './actionTypes';

export const openCart = () => ({
    type: types.OPEN_CART
})

export const closeCart = () => ({
    type: types.CLOSE_CART
})

export const addCart = (addItem) => ({
    type: types.ADD_CART,
    item : addItem
})

export const removeCart = (removeItem) => ({
    type: types.REMOVE_CART,
    item : removeItem
})

export const itemCart = () => ({
    type: types.ITEM_CART
})
