import React, { useState } from "react";

const LoginSignupPage = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      setLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignup = () => {
    if (!username || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (localStorage.getItem(username)) {
      alert("Username already exists");
      return;
    }
    localStorage.setItem(username, password);
    alert("Signup successful!");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2
            className={action}
            onClick={() => {
              setAction("Sign up");
            }}
          >
            Login
          </h2>
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
          <button onClick={handleLogin}>Login</button>

          <h2
            onClick={() => {
              setAction("Login");
            }}
          >
            Signup
          </h2>
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
      )}
    </div>
  );
};

export default LoginSignupPage;
