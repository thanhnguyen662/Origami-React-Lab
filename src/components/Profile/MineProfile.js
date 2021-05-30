import React from 'react';
// import PropTypes from 'prop-types';

// MineProfile.propTypes = {

// };

function MineProfile(props) {
    return (
        <>
            <img src='https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png' alt='profile-icon' />
            <div className='personal-info'>
                <p>
                    <span>Email: </span>
                    someone
                </p>
                <p>
                    <span>Post: </span>
                    9
                </p>
            </div>
        </>
    );
}

export default MineProfile;