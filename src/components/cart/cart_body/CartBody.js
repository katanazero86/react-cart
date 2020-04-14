import React from 'react';
import CartBodyStyle from './CartBody.scss';

function CartBody({cartItems}) {

    return (
        <div className={CartBodyStyle.wrap}>
            <div className={CartBodyStyle.body}>
                <ul>
                    있냐?
                </ul>
            </div>
        </div>
    )
}

export default CartBody
