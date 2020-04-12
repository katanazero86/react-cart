import React from 'react';

import HomeStyle from './Home.scss'
import Test from "./Test";

function Home() {

    return (
        <div>
            <div className={HomeStyle['App-wrap']}>
                <p className={HomeStyle['title']}>react App Component</p>
                <Test/>
            </div>
        </div>
    )
}

export default Home
