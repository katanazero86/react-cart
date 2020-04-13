import React from 'react';

import MenuImageStyle from './MenuImage.scss';

function MenuImage({imgUrl}) {
    return (
        <div>
            <img src={imgUrl ? imgUrl : ''}/>
        </div>
    )
}


export default MenuImage
