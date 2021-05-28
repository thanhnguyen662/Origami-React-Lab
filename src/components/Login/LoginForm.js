import React, { useState } from 'react';
import axios from 'axios'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleEmailInputChange(e) {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    function handlePasswordInputChange(e) {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    function onSubmitLoginForm(e) {
        e.preventDefault()

        const loginForm = {
            username: email,
            password: password
        }
        console.log(loginForm)

        axios.post('http://localhost:9999/api/user/login', loginForm)
            .then(res => console.log(res))
    }

    return (
        <div className="Register">
            <h1>Login Page</h1>
            <form onSubmit={onSubmitLoginForm}>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailInputChange}
                    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="Password"
                        value={password}
                        onChange={handlePasswordInputChange}
                    />
                </div>
                <div className="form-control">
                    <button type="submit">Login</button>
                </div>
            </form>

        </div>
    );
};

export default LoginForm;