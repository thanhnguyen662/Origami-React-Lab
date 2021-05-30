import React from 'react';
import PropTypes from 'prop-types';
import Logo2 from '../../img/logo2.png';

MinePost.propTypes = {
    minePosts: PropTypes.array,
};

MinePost.defaultProps = {
    minePosts: [],
}

function MinePost(props) {

    const { minePosts } = props;

    return (
        minePosts.map(minePost => (
            <div className="Post" key={minePost._id} id={minePost._id} >
                <img src={Logo2} alt="img"></img>
                <p>
                    {minePost.description}
                </p>
                <div>
                    <span>
                        <small>Author: </small>
                        {minePost.author.username}
                    </span>
                </div>
            </div>
        ))
    );
}

export default MinePost;