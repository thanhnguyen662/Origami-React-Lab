import React from 'react';
import PropTypes from 'prop-types';
import Logo2 from '../../img/logo2.png';

LatestPost.propTypes = {
    latestPosts: PropTypes.array
};

LatestPost.defaultProps = {
    latestPosts: []
}

function LatestPost(props) {
    const { latestPosts } = props;


    return (
        latestPosts.map(latestPost => (
            <div className="Post" key={latestPost._id} id={latestPost._id} >
                <img src={Logo2} alt="img"></img>
                <p>
                    {latestPost.description}
                </p>
                <div>
                    <span>
                        <small>Author: </small>
                        {latestPost.author.username}
                    </span>
                </div>
            </div>
        ))
    );
}

export default LatestPost;
