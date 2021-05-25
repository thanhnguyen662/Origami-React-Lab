import React from 'react';
import PropTypes from 'prop-types';
import '../../../App.css';

NavbarLI.propTypes = {
    links: PropTypes.array,
};

NavbarLI.defaultProps = {
    links: []
}

function NavbarLI(props) {

    const {links} = props;

    return (
       links.map(link => (
           <li className="listItem" key={link.id}>{link.title}</li>
       ))
    );
}

export default NavbarLI;