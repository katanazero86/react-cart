import React from 'react';

import HeaderStyle from './Header.scss'

function Header() {
    return (
        <header className={HeaderStyle.wrap}>
            <div className={HeaderStyle.body}>
                <div className={HeaderStyle['body-logo']}>
                    <img src='/assets/images/fco-logo.png'/>
                </div>
                <div className={HeaderStyle['body-user']}>
                    <span className={HeaderStyle['body-user-name']}>zero86 님</span>
                    <img src='/assets/images/shopping-cart-icon.png'/>
                    <span className={HeaderStyle['body-user-cart-count']}>0</span>
                </div>
            </div>
        </header>
    )
}

export default Header
