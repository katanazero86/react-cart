import React from 'react';

import MenuInfoStyle from './MenuInfo.scss';

function MenuInfo({menuName, menuSummary, menuDescription, menuPrice}) {
    return (
        <div className={MenuInfoStyle.wrap}>
            <h3>
                {menuName}
            </h3>
            <p>
                {menuSummary}
            </p>
            <p>
                {menuDescription}
            </p>
            <p>
                {menuPrice}
            </p>
        </div>
    )
}


export default MenuInfo
