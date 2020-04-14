import React from 'react';

import HomeStyle from './Home.scss'

import MenuContainer from "../containers/menu/MenuContainer";

function Home() {

    return (
        <div className={HomeStyle.wrap}>
            <MenuContainer/>
        </div>
    )
}

export default Home
