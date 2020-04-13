import React, {useEffect} from 'react';

import HomeStyle from './Home.scss'


import MenuContainer from "./menu/MenuContainer";

function Home() {

    return (
        <div className={HomeStyle.wrap}>
            <MenuContainer/>
        </div>
    )
}

export default Home
