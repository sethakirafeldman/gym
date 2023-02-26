import React from 'react';
import './Hero.css';

export default function Hero({children}) {
    return (
        <section className ='banner sm-spacer' id = 'hero'>
        <img className ='banner-img' src = 'https://source.unsplash.com/zfPOelmDc-M' alt ='close up of deadlift grip' />
        <section className = 'text-vertical'>
            <h2>Welcome to your new Iron Haven</h2>
            <h3>We are a premier gym dedicated to helping
                you achieve your fitness goals.
                Our state-of-the-art facility is designed to provide you with the equipment and support you 
                need to get in the best shape of your life.
            </h3>
        </section>
        </section>
    )
}