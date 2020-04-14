import React from 'react';

import MenuTitleStyle from './MenuTitle.scss';

function MenuTitle({title, subTitle}) {
    return (
        <div className={MenuTitleStyle.wrap}>
            <h1>{title}</h1>
            <p>
                {subTitle}
            </p>
        </div>
    )
}

export default MenuTitle
