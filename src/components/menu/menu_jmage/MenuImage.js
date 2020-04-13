import React from 'react';

import MenuImageStyle from './MenuImage.scss';

function MenuImage({imgUrl, isSold}) {
    return (
        <div className={MenuImageStyle.wrap}>
            <img src={imgUrl ? imgUrl : ''}/>
        </div>
    )
}


export default MenuImage
