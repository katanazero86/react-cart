import React from 'react';

import MenuIconStyle from './MenuIcon.scss';

function Like({onClick}) {
    return (
        <div className={MenuIconStyle.wrap} onClick={onClick}>
            <img src='/assets/images/heart.png' alt='like'/>
        </div>
    )
}


export default Like
