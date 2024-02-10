import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import SubmitButton from '../common/button/SubmitButton';
import './LoginPage.css';

function LoginPage() {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];
        const user = existingUsers.find(
            (user) => user.email === username && user.password === password,
        );

        if (user) {
            login(user);

            navigate('/profile');
        } else {
            setErrorMessage('Wrong credentials. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h1>
                Signin to your <br /> PopX account
            </h1>
            <p className="details">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit,
            </p>
            <form onSubmit={handleLogin} className="login-form">
                <div className="singup-div">
                    <label className="login-label">Email Address</label>
                    <input
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter email address"
                        className="signup-input"
                        required
                    />
                </div>
                <div className="singup-div second-input">
                    <label className="login-label">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="signup-input"
                        required
                    />
                </div>

                <button type="submit">
                    <SubmitButton
                        btnText="Login"
                        bgColor={
                            password.length !== 0 && username.length !== 0 ? `#6C25FF` : `#CBCBCB`
                        }
                        fColor="#FFFFFF"
                    />
                </button>
            </form>
            <p className="errorMessag">{errorMessage}</p>
        </div>
    );
}

export default LoginPage;
