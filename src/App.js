import React, {useState, useEffect} from 'react';
import "./style.css";
import './theme.css';

import Navbar from "./NavBar/Navbar";
import Main from './Main/Main';
import Carousel from './Carousel/Carousel.js';
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
    </>
    )
};