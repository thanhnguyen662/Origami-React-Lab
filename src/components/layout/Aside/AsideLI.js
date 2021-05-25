import React from 'react';
import PropTypes from 'prop-types';

AsideLI.propTypes = {
    links: PropTypes.array,
};

AsideLI.defaultProps = {
    links: [],
}

function AsideLI(props) {

    const {links} = props;

    return (
        links.map(link => (
            <li className="listItem" key={link.id}>{link.title}</li>
        ))
    );
}

export default AsideLI;