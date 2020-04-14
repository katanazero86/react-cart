import React from 'react';

import MenuImageStyle from './MenuImage.scss';

function MenuImage({imgUrl, isSold, isLazy}) {
    return (
        <div className={MenuImageStyle.wrap}>
            {isLazy ? <img data-src={imgUrl || ''} className={isLazy && 'img-lazy'}/> : <img src={imgUrl || ''} />}
        </div>
    )
}


export default MenuImage
