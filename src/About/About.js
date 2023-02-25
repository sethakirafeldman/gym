import React from 'react';
import './About.css';

const imgSrc = 'https://source.unsplash.com/VJ2s0c20qCo';

export default function About() {

    const aboutText = <> <p>At Iron Haven Fitness, we believe that fitness is not just about physical strength, but also mental toughness and a positive attitude. That's why our experienced trainers are here to guide you every step of the way, helping you to stay motivated and focused on your goals.
    Our facility features top-of-the-line equipment, including cardio machines, weightlifting equipment, and functional training tools.</p>
    <p>
    Join us at Iron Haven Fitness and take the first step towards a stronger, healthier, and happier you.</p>
    <p>Your fitness journey starts here.</p>
    </>

    return (
        <section className = 'about black-transparent-bg'>
            <section className ='left-align'>
            <h2>About Us</h2>
            {aboutText}
            </section>
            <img src = {imgSrc} alt ='dumbbell rack' />
        </section>
    )
}