import React from "react";
import { useState } from "react";
import './Login.css';

export default function Login(){
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validation
  const validate = () => {
    if (!formData.email.includes("@")) {
      return "Enter valid email ❌";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters ❌";
    }
    return "";
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Login Successful ✅");

    console.log("Login Data:", formData);
  };

    return(
         <>
<div className="container">


      {/* Login Card */}
      <div className="card">
        <h2 className="title">Login</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit} className="form">

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="input"
          />

          <button type="submit" className="button btn">
            Login
          </button>

        </form>
      </div>

    </div>
         </>        
    )
}