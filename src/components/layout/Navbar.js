import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/logo1.png'
import {animateScroll as scroll} from 'react-scroll'
import {Link} from 'react-scroll'

Navbar.propTypes = {
    titles: PropTypes.array
};

Navbar.defaultProps = {
    titles: []
}

function Navbar(props) {
    
    const {titles} = props;

    return (
        <nav className="Navigation" >
            <ul>
                <li className="listItem" onClick={() => scroll.scrollToTop()}>
                    <img src={logo} alt="img" style={{width: '80.5%'}}  />
                </li>

                {titles.map(title => (
                    <li className="listItem">
                        <Link key={title.id} to={title.id} smooth={true} duration={700} offset={-160} >{title.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;