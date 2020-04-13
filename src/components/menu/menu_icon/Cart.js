import React from 'react';

import MenuIconStyle from './MenuIcon.scss';

function Cart({onClick}) {
    return (
        <div className={MenuIconStyle.wrap} onClick={onClick}>
            <img src='/assets/images/cart.png' alt='cart'/>
        </div>
    )
}


export default Cart
