import React from 'react';
import {useDispatch} from 'react-redux';
import {openCart} from '../../store/cartModule/actions';

import HeaderStyle from './Header.scss'


function Header() {

    const dispatch = useDispatch();

    const openCartDispatch = () => {
        dispatch(openCart());
        document.querySelector('#app').style = 'overflow : hidden';
    };

    return (
        <header className={HeaderStyle.wrap}>
            <div className={HeaderStyle.body}>
                <div className={HeaderStyle['body-logo']}>
                    {/*<img src='/assets/images/fco-logo.png'/>*/}
                    Sweet zero86
                </div>
                {/*<nav className={HeaderStyle['body-nav']}>*/}
                {/*    <ul>*/}
                {/*        <li>MENU</li>*/}
                {/*        <li>ABOUT</li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
                <div className={HeaderStyle['body-user']}>
                    <span className={HeaderStyle['body-user-name']}>zero86 님</span>
                    <img src='/assets/images/shopping-cart-icon.png' onClick={openCartDispatch}/>
                    <span className={HeaderStyle['body-user-cart-count']}>0</span>
                </div>
            </div>
        </header>
    )
}

export default Header
