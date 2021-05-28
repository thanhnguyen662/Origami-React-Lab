import React, { useState } from 'react';
import axios from 'axios'


function RegisterForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    function handleEmailInputChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordInputChange(e) {
        setPassword(e.target.value)
    }

    function handleRePasswordInputChange(e) {
        setRePassword(e.target.value)
    }

    function onSubmitRegisterForm(e) {
        e.preventDefault();

        const registerForm = {
            username: email,
            password: password,
            rePassword: rePassword
        }
        console.log(registerForm)

        axios.post('http://localhost:9999/api/user/register', registerForm)
            .then(res => console.log(res))
    }

    return (
        <div className="Register">
            <h1>Register Page</h1>
            <form onSubmit={onSubmitRegisterForm}>
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
                        type="password"
                        value={password}
                        onChange={handlePasswordInputChange}
                    />
                </div>
                <div className="form-control">
                    <label>Re-Password</label>
                    <input
                        type="password"
                        value={rePassword}
                        onChange={handleRePasswordInputChange}
                    />
                </div>
                <div className="form-control">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
