import React from "react";
import "./CSS/Loginsignup.css";

const Loginsignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an accout? <span>Login here</span>
        </p>
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I Agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
