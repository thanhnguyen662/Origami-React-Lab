import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Aside() {
    const loginState = useSelector(state => state.login.isLogin);

    return (
        <aside className="Aside">
            <ul>
                <li className="listItem">
                    <Link to="/">Post</Link>
                </li>

                <li className="listItem">
                    <Link to="/thoughts">Thoughts</Link>
                </li>

                <li className="listItem">
                    <Link to="/register">Register</Link>
                </li>

                {loginState === false
                    ? <li className="listItem">
                        <Link to="/login">Login</Link>
                    </li>
                    : <></>
                }

                <li className="listItem">
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Aside;