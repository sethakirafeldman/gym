import React from 'react';
import './Footer.css';
const data = require("../data.json");

export default function Footer({handleClick}) {
    const dataArr = Object.values(data);

    const socialMedia = [{
        name:'Facebook',
        url: 'https://facebook.com'
    },
    {
        name: 'Instagram',
        url:'https://instagram.com'
    },
    {
        name:'Twitter',
        url: 'https://twitter.com'
    }
    ];

    const mapLinks = dataArr.map((item) => {
        return (
            <li>
                <button
                    key= {item[0].id} 
                    onClick = {(event) => handleClick(event)} 
                    value={item[0].name.toLowerCase()}
                >
                {item[0].name}
                </button>
            </li>
        )
    });

    return (
        <footer id ='footer' className = 'sm-spacer'>
            <div></div>
            <h1>Iron Haven Fitness</h1>
            <ul>
                {mapLinks}
            </ul>
            <ul>
               {socialMedia.map((sm)=> {
                return (
                    <li>
                        <a href = {sm.url} key = {sm.name} target='_blank' >
                        {sm.name}
                        </a>
                    </li>
                )
               })}
            </ul>
        </footer>)
}