import React from 'react';
import Post from '../Post/Post'

function Profile(props) {
    return (
        <div className='Profile'>
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
            <div>
                <h2>3 of your recent posts</h2>
                <Post />
            </div>
        </div>
    );
}

export default Profile;