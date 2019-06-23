import React from 'react';
import {Route} from 'react-router-dom';
import Navigation from './sharedComponents/Navigation';
import Footer from "./sharedComponents/Footer";
import LandingPage from './landingPage/LandingPage';
import ApplicationLogin from './application/ApplicationLogin';
import AdminLogin from './adminPage/AdminLogin';
const App = () => {
    return (
        <>
            <Navigation/>
            <Route exact path='/' component={LandingPage} />
            <Route path='/apply' component={ApplicationLogin}/>
            <Route path='/admin' component={AdminLogin} />
            <Footer/>
        </>
    )
};

export default App;