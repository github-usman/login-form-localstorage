import React from 'react';
import { Link } from 'react-router-dom';
import SubmitButton from '../common/button/SubmitButton';
import './WelcomePage.css';
function WelcomePage() {
    return (
        <div className="welcome-container">
            <h1>Welcome to PopX</h1>
            <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit,
            </p>
            <div className="btn-two">
                <Link to="/signup">
                    <SubmitButton btnText="Create Account" bgColor="#6C25FF" fColor="#FFFFFF" />
                </Link>
                <Link to="/login">
                    <SubmitButton
                        btnText="Already Registered? Login"
                        bgColor="#6C25FF4B"
                        fColor="#1D2226"
                    />
                </Link>
            </div>
        </div>
    );
}

export default WelcomePage;
