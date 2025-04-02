import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "./OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // Track API call progress
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!formData.username.trim()) newErrors.username = "Username is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format!";

    if (!formData.password) newErrors.password = "Password is required!";
    else if (!passwordRegex.test(formData.password))
      newErrors.password = "Password must be at least 6 characters, include a letter and a number!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // If validation fails, do nothing

    setLoading(true); // Show loading effect and disable button

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setSuccessMessage("Signup Successful! 🎉");
        setFormData({ username: "", email: "", password: "" }); // Clear form
      } else {
        setErrors({ general: data.message || "Signup failed. Try again!" });
      }
    } catch (error) {
      setErrors({ general: "Something went wrong. Please try again later." });
    }

    setLoading(false); // Remove loading effect and enable button
  };


  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Sign Up</h3>

        {/* Success Message */}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        {/* General Error Message */}
        {errors.general && <div className="alert alert-danger">{errors.general}</div>}

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              disabled={loading} // Disable input when loading
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading} // Disable input when loading
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Password with Show/Hide Toggle */}
          {/* Password with Show/Hide Toggle */}
<div className="mb-3">
  <label className="form-label">Password</label>
  <div className="input-group">
    <input
      type={showPassword ? "text" : "password"}
      className={`form-control ${errors.password ? "is-invalid" : ""}`}
      placeholder="Enter password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      disabled={loading} // Disable input when loading
    />
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setShowPassword(!showPassword)}
    >
      <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
    </button>
  </div>
  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
</div>


          {/* Signup Button */}
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Signing Up...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <hr />

     

        {/* Sign In Link */}
        <p className="text-center mt-3">
          Have an account? <Link to="/signin" className="text-primary">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
