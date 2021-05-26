// export default Navbar;

import React, { useState } from 'react';
import NavbarLI from './NavbarLI';
import '../../../App.css';
import logo from '../../../img/logo1.png'

function Navbar(props) {
    const [navbarTitle] = useState([
        { id: 1, title: 'Going to 1 ' },
        { id: 2, title: 'Going to 2 ' },
        { id: 3, title: 'Going to 3 ' },
        { id: 4, title: 'Going to 4 ' },
        { id: 5, title: 'Going to 5 ' },
        { id: 6, title: 'Going to 6 ' },
        { id: 7, title: 'Going to 7 ' },
        { id: 8, title: 'Going to 8 ' },
        { id: 9, title: 'Going to 9 ' },
        { id: 10, title: 'Going to 10 ' }
    ]);

    return (
        <nav className="Navigation">
            <ul>
                <li className="listItem">
                    <img src={logo} alt="img" style={{width: '80.5%'}} />
                </li>
                <NavbarLI links={navbarTitle} />
            </ul>
        </nav>
    );
}

export default Navbar;