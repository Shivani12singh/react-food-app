import React from "react";
import { useState } from "react";
import './Register.css';

export default function Register(){
     const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form validation
  const validate = () => {
    if (formData.fullname.trim().length < 3) {
      return "Full name must be at least 3 characters";
    }
    if (!formData.email.includes("@")) {
      return "Enter valid email address";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Registration Successful ✅");

    console.log("User Registered:", formData);

    // Reset form
    setFormData({
      fullname: "",
      email: "",
      password: "",
    });
  };
    return(
        <>
        <div className="container">
            <div className="card">
                <h2 className="title">Register</h2>

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}

                <form onSubmit={handleSubmit} className="form">

                <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="input"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input"
                />

                <button type="submit" className="button btn">
                    Register
                </button>

                </form>
            </div>
            </div>
         
    </>
    )

}
