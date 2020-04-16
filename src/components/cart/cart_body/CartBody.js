import React from 'react';
import CartBodyStyle from './CartBody.scss';

import {currencyFormat} from '../../../utils/formatUtils';

function CartBody({cartItems, onClick}) {

    return (
        <div className={CartBodyStyle.wrap}>
            <div className={CartBodyStyle.body}>
                <ul>
                    {
                        cartItems.map(item => {
                            return (<li key={item.menuId}>
                                <img src={item.imgUrl}/>
                                <div className={CartBodyStyle['item-info']}>
                                    <strong>{item.menuName}</strong>
                                    <p className={CartBodyStyle['item-info-summary']}>{item.menuSummary}</p>
                                    <p className={CartBodyStyle['item-info-price']}>수량 1개<br/> {currencyFormat(item.menuPrice)}원</p>
                                </div>
                                <button onClick={() => onClick(item)}>삭제</button>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CartBody
