import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {openCart, closeCart} from '../../store/cartModule/actions';

import HeaderStyle from './Header.scss'

function Header() {

    const dispatch = useDispatch();
    const cartModalVisible = useSelector(store => store.cart.cartModalVisible);
    const cartItems = useSelector(store => store.cart.cartItems);

    const openCartDispatch = () => {
        if(!cartModalVisible) {
            dispatch(openCart());
            document.querySelector('#app').style = 'overflow : hidden';
        } else {
            dispatch(closeCart());
            document.querySelector('#app').style = 'overflow : auto';
        }

    };

    return (
        <header className={HeaderStyle.wrap}>
            <div className={HeaderStyle.body}>
                <div className={HeaderStyle['body-logo']}>
                    {/*<img src='/assets/images/fco-logo.png'/>*/}
                    Sweet zero86
                </div>
                <div className={HeaderStyle['body-user']}>
                    <span className={HeaderStyle['body-user-name']}>zero86 님</span>
                    <img src='/assets/images/shopping-cart-icon.png' onClick={openCartDispatch}/>
                    <span className={HeaderStyle['body-user-cart-count']}>{cartItems.length}</span>
                </div>
            </div>
        </header>
    )
}

export default Header
