import React from 'react';

import MenuInfoStyle from './MenuInfo.scss';

const currencyFormat = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function MenuInfo({menuName, menuSummary, menuDescription, menuPrice}) {


    return (
        <div className={MenuInfoStyle.wrap}>
            <h3 className={MenuInfoStyle['menu-name']}>
                {menuName}
            </h3>
            <p className={MenuInfoStyle['menu-summary']}>
                {menuSummary}
            </p>
            <p className={MenuInfoStyle['menu-description']}>
                {menuDescription}
            </p>
            <p className={MenuInfoStyle['menu-price']}>
                {currencyFormat(menuPrice)}<span>원</span>
            </p>
        </div>
    )
}


export default MenuInfo
