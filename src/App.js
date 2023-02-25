import React from 'react';
import "./style.css";
import './theme.css';

import Navbar from "./NavBar/Navbar";
import Main from './Main/Main';
import Carousel from './Carousel/Carousel.js';
const data = require('./data.json');

export default function App() {
    
    const [currentPage, setCurrentPage] = React.useState("home");
    
    const handleClick = () => {
        setCurrentPage(event.target.value);
    }

    return(
    <>
        <Navbar 
            handleClick= {handleClick}
            currentPage = {currentPage}
        />
        <Main 
            pageName = {data[currentPage][0].name}
            handleClick = {handleClick}
            text = {data[currentPage][0].text}
        />

        <Carousel />
    </>
    )
};