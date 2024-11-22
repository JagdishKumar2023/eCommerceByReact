import React, { useState } from "react";
import "./CSS/Loginsignup.css";
import { Link } from "react-router-dom";

const Loginsignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username] === password) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="mainContainer">
      <div className="login-form">
        <h2 className="mainHeading">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="special-button">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign up here!</Link>
        </p>
      </div>
    </div>
  );
};

export default Loginsignup;
