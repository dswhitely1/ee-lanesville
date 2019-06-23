import React from 'react';
import {Route} from 'react-router-dom';
import Navigation from './sharedComponents/Navigation';
import Footer from "./sharedComponents/Footer";
import LandingPage from './landingPage/LandingPage';
const App = () => {
    return (
        <>
            <Navigation/>
            <Route exact path='/' component={LandingPage} />
            <Footer/>
        </>
    )
};

export default App;