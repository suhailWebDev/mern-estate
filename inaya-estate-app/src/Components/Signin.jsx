import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice"; // Adjust path if needed

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!formData.email) errors.email = "Email is required!";
    else if (!emailRegex.test(formData.email)) errors.email = "Invalid email format!";

    if (!formData.password) errors.password = "Password is required!";
    else if (!passwordRegex.test(formData.password))
      errors.password = "Password must be at least 6 characters, include a letter and a number!";

    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return; // Stop if validation fails

    dispatch(signInStart());

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        dispatch(signInSuccess(data)); // Store user in Redux state
        navigate("/"); // Redirect to home
      } else {
        dispatch(signInFailure(data.message || "Signup failed. Try again!"));
      }
    } catch (error) {
      dispatch(signInFailure("Something went wrong. Please try again later."));
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In Clicked");
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Sign In</h3>

        {/* Error Messages */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${error ? "is-invalid" : ""}`}
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Password Field with Toggle */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control ${error ? "is-invalid" : ""}`}
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
              </button>
            </div>
          </div>

          {/* Signup Button */}
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <hr />

        {/* Google Sign In */}
        <button className="btn btn-danger w-100" onClick={handleGoogleSignIn} disabled={loading}>
          <i className="bi bi-google me-2"></i> Continue with Google
        </button>

        {/* Sign Up Link */}
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
