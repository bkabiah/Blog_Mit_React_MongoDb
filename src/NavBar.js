import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">Ueber Uns</Link>
            </li>
            <li>
                <Link to="/articles-list">Artikeln</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;