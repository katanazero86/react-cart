import React from 'react';

import CartHeaderStyle from './CartHeader.scss';

function CartHeader({onclick}) {
    return (
        <div className={CartHeaderStyle.wrap}>
            <div className={CartHeaderStyle.body}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" onClick={onclick}>
                    <path
                        d="M15.5 7.1L12 10.6 8.5 7.1 7.1 8.5l3.5 3.5-3.5 3.5 1.4 1.4 3.5-3.5 3.5 3.5 1.4-1.4-3.5-3.5 3.5-3.5z"></path>
                    <path
                        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"></path>
                </svg>
                <p>
                   장바구니
                </p>
            </div>
        </div>
    )
}

export default CartHeader
