import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <ul className='nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sedm4">Седмица 4</Link></li>
                <li><Link to="/sedm5">Седмица 5</Link></li>
            </ul>
        </>
    )
}

export default Header
