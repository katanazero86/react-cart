import React from 'react';

import MenuIconStyle from './MenuIcon.scss';

function Like() {
    return (
        <div className={MenuIconStyle.wrap}>
            <img src='/assets/images/heart.png' alt='like'/>
        </div>
    )
}


export default Like
