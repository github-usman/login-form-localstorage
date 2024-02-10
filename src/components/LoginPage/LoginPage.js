// LoginPage.js
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import SubmitButton from "../common/button/SubmitButton";
import "./LoginPage.css";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate("/profile");
  };

  return (
    <div className="login-container">
      <h1>Signin to your <br/> PopX account</h1>
      <p>
      Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
      </p>
      <form onSubmit={handleLogin} className="login-form">
        <div className="singup-div">
          <label className="login-label">Email Address</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter email address"
            className="signup-input"
          />
        </div>
        <div className="singup-div second-input">
          <label className="login-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className='signup-input'
          />
        </div>

        <button type="submit">
          <SubmitButton btnText="Login" bgColor="#CBCBCB" fColor="#FFFFFF" />
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
