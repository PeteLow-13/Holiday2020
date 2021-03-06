import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css';


export default function Header() {
    return (
        <div className='header'>
            <Jumbotron>
                <h1>Happy Holidays from the Low Desales Family!</h1>
                <p>
                 We hope you and yours are having a wonderful holiday season. We built this site instead of a holiday card as an update on what we've all be up to during this crazy year!
                </p>
            </Jumbotron>
        </div>
    )
}
