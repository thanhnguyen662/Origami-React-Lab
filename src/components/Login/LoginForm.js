import React, { useState } from 'react';
import axios from 'axios'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleEmailInputChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordInputChange(e) {
        setPassword(e.target.value)
    }

    async function onSubmitLoginForm(e) {
        e.preventDefault()

        try {
            const loginForm = {
                username: email,
                password: password,
            }
            const response = await axios.post('http://localhost:9999/api/user/login', loginForm, { withCredentials: true })
            const storageToken = await localStorage.setItem('token', response.data.token)
            console.log(storageToken)
            console.log(response)

        } catch (error) {
            console.log('Fail: ', error.message);
        }
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