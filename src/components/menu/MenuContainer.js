import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMenus} from '../../store/menuModule/actions'

import MenuContainerStyle from './MenuContainer.scss';
import MenuImage from "./menu_jmage/MenuImage";
import Like from "./menu_icon/Like";
import Cart from "./menu_icon/Cart";
import MenuInfo from "./menu_info/MenuInfo";

function MenuContainer() {

    const dispatch = useDispatch();
    const menus = useSelector(store => store.menu.menus);

    const getMenusDispatch = async () => {
        dispatch(getMenus());
    };

    useEffect(() => {
        getMenusDispatch();
    }, []);

    return (
        <div>
            {menus.map(menu => {
                return (
                    <div>
                        <MenuImage imgUrl={menu.imgUrl}/>
                        <div>
                            <Like/>
                            <Cart/>
                        </div>
                        <MenuInfo/>
                    </div>
                )
            })}
        </div>
    )
}


export default MenuContainer
