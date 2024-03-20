import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Check if username already exists in localStorage
    if (localStorage.getItem(username)) {
      alert("Username already exists");
      return;
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Store user data in localStorage
    localStorage.setItem(username, password);

    // Optionally, you can set loggedIn state or redirect to login page
    alert("Signup successful!");
  };

  return (
    <div>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
