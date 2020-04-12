import React from 'react';

import MenuContainerStyle from './MenuContainer.scss';
import MenuImage from "./menu_jmage/MenuImage";
import Like from "./menu_icon/Like";
import Cart from "./menu_icon/Cart";
import MenuInfo from "./menu_info/MenuInfo";

function MenuContainer() {
    return (
        <div>
            <MenuImage/>
            <div>
                <Like/>
                <Cart/>
            </div>
            <MenuInfo/>
        </div>
    )
}


export default MenuContainer
