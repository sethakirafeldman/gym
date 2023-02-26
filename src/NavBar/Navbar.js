import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'; 

import './NavBar.css';

const data = require("../data.json");

export default function Navbar ({handleClick}) {

    const dataArr = Object.values(data);
    const [showMenu, setShowMenu] = useState(false);

    const genBtns = dataArr.map((item, index) => {
            return (
                <button
                    key = {item[0].id} 
                    onClick = {handleClick} 
                    value={item[0].name.toLowerCase()}>{item[0].name}
                </button>)
        })

    const toggleMenu = () => {
        !showMenu ? setShowMenu(true) : setShowMenu(false);
    }

    return (
        <nav id='navigation-bar'>
            <section id='nav-buttons'>{genBtns}</section>
                <menu id='hamburger-menu' >
                    <section id ="hamburger-items" onMouseEnter = {toggleMenu} onMouseLeave = {toggleMenu} >
                        <FontAwesomeIcon
                            icon={faBars}
                            size="xl"
                            className="hamburger-icon"
                        />
                        <section
                            className = {showMenu ? "hamburger-list" : "hamburger-list hidden"}>
                            {genBtns}
                        </section>
                    </section>
                </menu>
        </nav>
    )
}