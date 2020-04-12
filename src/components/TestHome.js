import React from 'react';

import TestHomeStyle from './TestHome.scss'
import Test from "./Test";

function TestHome() {

    return (
        <div>
            <div className={TestHomeStyle['App-wrap']}>
                <p className={TestHomeStyle['title']}>react App Component</p>
                <Test/>
            </div>
        </div>
    )
}

export default TestHome
