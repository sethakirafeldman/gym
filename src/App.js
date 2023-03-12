import React, {useState, useEffect} from 'react';
import "./style.css";
import './theme.css';

import Navbar from "./NavBar/Navbar.js";
import Main from './Main/Main.js';
import Carousel from './Carousel/Carousel.js';
import Footer from './Footer/Footer.js';

const data = require('./data.json');

export default function App() {

    const [currentPage, setCurrentPage] = useState("home");

    const handleClick = () => {
        // scroll to anchor point
        let activeEl = document.getElementById(event.target.value);
        if (activeEl !== null) {
            activeEl.scrollIntoView({behavior:'smooth'});
            activeEL = '';
        }
    }

    return(
    <>
        <Navbar 
            handleClick= {handleClick}
        />
        <Main
            handleClick = {handleClick}
        />
        <Carousel />
        <Footer handleClick= {handleClick} />
    </>
    )
};