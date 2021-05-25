import React from 'react';
import PropTypes from 'prop-types';

FooterLI.propTypes = {
    links: PropTypes.array
};

FooterLI.defaultProps = {
    links: [],
}

function FooterLI(props) {

    const {links} = props;

    return (
        links.map(link => (
            <li className="listItem" key={link.id}>{link.title}</li>
        ))
    );
}

export default FooterLI;