import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../common/button/SubmitButton';
import './SignupPage.css';

function SignupPage() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [messageAlert, setMessageAlert] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];
        const emailExists = existingUsers.some((user) => user.email === email);

        if (emailExists) {
            setMessageAlert('Please enter new valid details! This email ID already exists.');
            setTimeout(() => {
                setEmail('');
            }, 500);
            setTimeout(() => {
                setMessageAlert('');
            }, 5000);
            return;
        }
        const userData = {
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            companyName: companyName,
        };

        const updatedUsers = [...existingUsers, userData];

        localStorage.setItem('userData', JSON.stringify(updatedUsers));

        navigate('/login');
    };

    return (
        <div>
            <form onSubmit={handleSignup} className="signup-container">
                <div>
                    <h1>
                        Create your
                        <br />
                        PopX account
                    </h1>
                    <div className="signup-inputs">
                        <div className="singup-div">
                            <label className="signup-label">Full Name*</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter your full name"
                                className="signup-input"
                                required
                            />
                        </div>
                        <div className="singup-div">
                            <label className="signup-label">Phone number*</label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Enter your phone number"
                                className="signup-input"
                                required
                            />
                        </div>
                        <div className="singup-div">
                            <label className="signup-label">Email address*</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="signup-input"
                                required
                            />
                        </div>
                        <div className="singup-div">
                            <label className="signup-label">Password*</label>
                            <input
                                type="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter new password"
                                className="signup-input"
                                required
                            />
                        </div>
                        <div className="singup-div">
                            <label className="signup-label">Company name</label>
                            <input
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="Enter your company name"
                                className="signup-input"
                            />
                        </div>
                        <div className="signup-agency-lebel">
                            <label>Are you an Agency?*</label>
                            <div className="signup-radio">
                                <input
                                    type="radio"
                                    id="yes"
                                    name="agency"
                                    value="yes"
                                    defaultChecked
                                />
                                <label htmlFor="yes">Yes</label>
                                <input type="radio" id="no" name="agency" value="no" />
                                <label htmlFor="no">No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="CheckCred">{messageAlert}</p>
                <button type="submit" className="btn">
                    <SubmitButton
                        btnText="Create Account"
                        bgColor={
                            fullName.length !== 0 &&
                            phoneNumber.length !== 0 &&
                            email.length !== 0 &&
                            password.length !== 0
                                ? `#6C25FF`
                                : `#CBCBCB`
                        }
                        fColor="#FFFFFF"
                    />
                </button>
            </form>
        </div>
    );
}

export default SignupPage;
