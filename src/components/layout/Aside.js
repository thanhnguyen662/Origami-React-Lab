import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-scroll'

Aside.propTypes = {
    titles: PropTypes.array
};

Aside.defaultProps = {
    titles: []
}

function Aside(props) {

    const { titles } = props;

    return (
        <aside className="Aside" style={{marginLeft:'10px'}}>
            <ul>
                {titles.map(title =>(
                    <li className="listItem">
                        <Link key={title.id} to={title.id} smooth={true} duration={700} offset={-160} >{title.title}</Link>
                    </li>                
                ))}
            </ul>
        </aside>
    );
}

export default Aside;