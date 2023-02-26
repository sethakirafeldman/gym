import React from 'react';

import Hero from '../Hero/Hero.js';
import About from '../About/About.js';
import Services from '../Services/Services.js';
import Contact from '../Contact/Contact.js';

import './Main.css';

// import Location from './Location';
// import Booking from './Booking';

export default function Main(props) {

    return(
        <main>
            <section className='content-container'>
                <h1 className ='title black-transparent-bg'>Iron Haven Fitness</h1>
                <Hero />
                <About />
                <Services />
                <Contact />

            </section>
        </main>
    )

}