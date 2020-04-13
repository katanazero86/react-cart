import React from 'react';
import {useDispatch} from "react-redux";
import {closeCart} from "../../store/cartModule/actions";


import CartContainerStyle from './CartContainer.scss';

function CartContainer() {

    const dispatch = useDispatch();

    const closeCartDispatch = (e) => {
        dispatch(closeCart());
    };

    return (
        <div className={CartContainerStyle.wrap} onClick={closeCartDispatch}>
            <div className={CartContainerStyle.body} onClick={e => e.stopPropagation()}>
                test
            </div>
        </div>
    )
}

export default CartContainer