import React from 'react';
import Header from './Header';
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Goals from "./Goals";

const LandingPage = () => {
    return (
        <div id="page-top">
            <Header/>
            <About/>
            <Services/>
            <Testimonials/>
            <Goals/>
        </div>
    )
};

export default LandingPage;