import React from 'react';
import {useSelector} from "react-redux";

import Home from './components/Home';
import Home2 from './components/Home2';
import TestHome from "./components/TestHome";
import Page404 from "./components/error/Page404";

// router
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CartContainer from "./components/cart/CartContainer";


function App() {

    const cartModalVisible = useSelector(store => store.cart.cartModalVisible);

    return (
        <div style={{height : '100%', overflow: 'auto', position : 'relative'}}>
            {cartModalVisible ? <CartContainer/> : ''}
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/test-home" component={TestHome}/>
                <Route path="/test" component={Home2}/>
                <Route component={Page404}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App
