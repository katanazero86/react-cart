import React from 'react';

import MenuIconStyle from './MenuIcon.scss';

function Cart() {
    return (
        <div className={MenuIconStyle.wrap}>
            <img src='/assets/images/cart.png' alt='cart'/>
        </div>
    )
}


export default Cart
