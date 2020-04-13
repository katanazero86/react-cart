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
                    <div className={MenuContainerStyle.body} key={menu.menuId}>
                        <MenuImage imgUrl={menu.imgUrl} isSold={menu.isSold}/>
                        <div className={MenuContainerStyle['body-icon']}>
                            <Like/>
                            <Cart/>
                        </div>
                        <MenuInfo menuName={menu.menuName} menuSummary={menu.menuSummary} menuDescription={menu.menuDescription} menuPrice={menu.menuPrice}/>
                    </div>
                )
            })}
        </div>
    )
}


export default MenuContainer
