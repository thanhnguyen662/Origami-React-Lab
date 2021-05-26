import React, { useState } from 'react';
import FooterLI from './FooterLI';
import logo3 from '../../../img/logo3.png'

function FooterUL(props) {
    const [footerTitle] = useState([
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
        <footer className="Footer">
            <ul>
                <FooterLI links={footerTitle}/>
                <li className="listItem">
                    <img src={logo3} alt="img"  />
                </li>
            </ul>
        </footer>
    );
}

export default FooterUL;