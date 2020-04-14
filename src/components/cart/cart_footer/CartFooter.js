import React from 'react';

import CartFooterStyle from './CartFooter.scss';

const currencyFormat = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function CartFooter({cartItems, onClick}) {
    return (
        <div className={CartFooterStyle.wrap}>
            <div className={CartFooterStyle.body}>
                <p><span>수량</span><span>{cartItems.length}개</span></p>
                <p><span>총 금액</span><span>{currencyFormat(cartItems.reduce((sum, item) => sum += item.menuPrice , 0))}원</span></p>
                <div className={CartFooterStyle['body-order-btn']}>
                    <button onClick={onClick}>주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default CartFooter
