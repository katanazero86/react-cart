import * as types from './actionTypes';

export const getMenus = () => ({
    type : types.GET_MENUS
});

export const getMenusSuccess = (payload) => ({
    type : types.GET_MENUS_SUCCESS,
    payload : payload
});

export const getMenusFail = () => ({
    type : types.GET_MENUS_FAIL
});

export const menus = () => ({
    type : types.MENUS
});

