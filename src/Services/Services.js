import React from 'react';
import './Services.css';

export default function Services() {
    return (
        <section id = 'services' className = 'sm-spacer'>
            <h2>Services</h2>
        <table>
            <tr className = 'bold'>
                <th>Service</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Fitness Consultation</td>
                <td>Free</td>
            </tr>
            <tr>
                <td>Personal Training</td>
                <td>$85 per hour</td>
            </tr>
            <tr>
                <td>Monthly Fee</td>
                <td>$75 per month</td>
            </tr>
        </table>
        </section>
    )

}