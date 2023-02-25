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

            <div id='nav-buttons'>
                {genBtns}
            </div>
            <div id='hamburger-menu'>
                <div id ="hamburger-items">
                <FontAwesomeIcon
                    icon={faBars}
                    size="xl"
                    className="hamburger-icon"
                    onMouseEnter={toggleMenu}
                />
                    <div
                        className={showMenu ? "hamburger-list" : "hamburger-list hidden"}
                        onMouseLeave={toggleMenu}>
                        {genBtns}
                    </div>
                </div>
            </div>
        </nav>

    )
}