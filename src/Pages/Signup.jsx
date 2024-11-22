import React, { useState } from "react";
import "./CSS/Loginsignup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!username || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username]) {
      alert("Username already exists");
      return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
  };

  return (
    <div className="mainContainer">
      <div className="signup-form">
        <h2 className="mainHeading">Signup</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignup} className="pink-button">
          Signup
        </button>
        <p>
          Already have an account? <Link to="/login">Login here!</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
