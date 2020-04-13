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
        <div className={MenuContainerStyle.wrap}>
            {menus.map(menu => {
                return (
                    <div className={MenuContainerStyle.body}>
                        <MenuImage imgUrl={menu.imgUrl} isSold={menu.isSold}/>
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
