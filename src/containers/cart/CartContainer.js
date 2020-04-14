import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeCart, removeCart} from "../../store/cartModule/actions";

import CartContainerStyle from './CartContainer.scss';
import CartHeader from "../../components/cart/cart_header/CartHeader";
import CartBody from "../../components/cart/cart_body/CartBody";
import CartFooter from "../../components/cart/cart_footer/CartFooter";

function CartContainer() {

    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.cartItems);

    const closeCartDispatch = (e) => {
        e.stopPropagation();
        dispatch(closeCart());
        document.querySelector('#app').style = 'overflow : auto';
    };

    const removeCartItemDispatch = (item) => {
        dispatch(removeCart(item))
    };

    const orderCartItems = () => {
        alert('준비중..');
    };

    const cartBodyRender = () => {
        if(cartItems.length == 0) {
            return (
                <div className={CartContainerStyle['body-empty']}>
                    <p>
                        장바구니에 추가하신 상품이 없습니다 :)
                    </p>
                </div>
            )
        } else {
            return (
                    <CartBody cartItems={cartItems} onClick={removeCartItemDispatch}/>
            )
        }
    }

    return (
        <div className={CartContainerStyle.wrap} onClick={closeCartDispatch}>
            <div className={CartContainerStyle.body} onClick={e => e.stopPropagation()}>
                <CartHeader onclick={closeCartDispatch}/>
                {cartBodyRender()}
                <CartFooter cartItems={cartItems} onClick={orderCartItems}/>
            </div>
        </div>
    )
}

export default CartContainer
