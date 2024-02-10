// SignupPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../common/button/SubmitButton";
import "./SignupPage.css";

function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  
  const navigate = useNavigate();
  
  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSignup} className="signup-container" >
      <div>
        <h1>Create your<br/>PopX account</h1>
          <div className="signup-inputs">
          <div className="singup-div">
            <label className="signup-label">Full Name*</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter You Full Name"
              className="signup-input"
            />
          </div>
          <div className="singup-div">
            <label className="signup-label">Phone number*</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter You Full Name"
              className="signup-input"
            />
          </div>
          <div className="singup-div">
            <label className="signup-label">Email address*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter You Full Name"
              className="signup-input"
            />
          </div>
          <div className="singup-div">
            <label className="signup-label">Password*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter You Full Name"
              className="signup-input"
            />
          </div>
          <div className="singup-div">
            <label className="signup-label">Company name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter You Full Name"
              className="signup-input"
            />
          </div>
          <div className="signup-agency-lebel">
          <label >Are you an Agency?*</label>
            <div className="signup-radio">
            <input type="radio" id="yes" name="agency" value="yes" checked/>
            <label for="yes">Yes</label>
            <input type="radio" id="no" name="agency" value="no"/>
            <label for="no">No</label>
            </div>
          </div>
          </div>
        </div> 
          <button type="submit">
          <SubmitButton
            btnText="Create Account"
            bgColor="#6C25FF"
            fColor="#FFFFFF"
          />
        </button> 
      </form>
    </div>
  );
}

export default SignupPage;
