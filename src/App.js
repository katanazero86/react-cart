import React from 'react';

import AppStyle from './App.scss'
import Test from "./components/Test";

function App() {

    console.log(AppStyle);
    return (
        <div className={AppStyle['App-wrap']}>
            <p className={AppStyle['title']}>react App Component</p>
            <Test/>
        </div>
    )
}

export default App