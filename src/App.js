import React from 'react';

import Home from './components/Home';
import Home2 from './components/Home2';
import Page404 from "./components/error/Page404";

// router
import {Switch, Route, Link, Redirect} from 'react-router-dom';


function App() {

    return (
        <div>
            <header>
                <Link to='/test'>test</Link>
            </header>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/test" component={Home2} />
                <Route component={Page404}/>
            </Switch>
        </div>
    )
}

export default App
