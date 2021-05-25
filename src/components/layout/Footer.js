import React from 'react';
import PropTypes from 'prop-types';
import logo3 from '../../img/logo3.png';
import {animateScroll as scroll} from 'react-scroll'
import {Link} from 'react-scroll'


Footer.propTypes = {
    titles: PropTypes.array
};

Footer.defaultProps = {
    titles: []
}

function Footer(props) {

const {titles} = props

    return (
        <footer className="Footer" onClick={() => scroll.scrollToTop()}>
            <ul>
                {titles.map(title => (
                    <li className="listItem">
                        <Link key={title.id} to={title.id} smooth={true} duration={700} offset={-160} >{title.title}</Link>
                    </li>
                ))}

                <li className="listItem">
                    <img src={logo3} alt="img"  />
                </li>
            </ul>
        </footer>
    );
}

export default Footer;