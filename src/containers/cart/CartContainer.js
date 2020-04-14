import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeCart} from "../../store/cartModule/actions";


import CartContainerStyle from './CartContainer.scss';
import CartHeader from "../../components/cart/cart_header/CartHeader";

function CartContainer() {

    const dispatch = useDispatch();

    const closeCartDispatch = (e) => {
        e.stopPropagation();
        dispatch(closeCart());
        document.querySelector('#app').style = 'overflow : auto';
    };

    return (
        <div className={CartContainerStyle.wrap} onClick={closeCartDispatch}>
            <div className={CartContainerStyle.body} onClick={e => e.stopPropagation()}>
                <CartHeader onclick={closeCartDispatch}/>
                test
                tes
            </div>
        </div>
    )
}

export default CartContainer
