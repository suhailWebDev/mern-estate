import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { signOut } from '../redux/user/userSlice.js';

function Navbar() {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout", { method: "GET" }); // Call API to clear cookies
      dispatch(signOut()); // Update Redux store
      navigate("/signin"); // Redirect to sign-in page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Left Side - Brand Name */}
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ color: '#3498db', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          InayaRealty
        </NavLink>

        {/* Toggler Button for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="w-100 d-flex flex-column flex-lg-row align-items-center">
          

            {/* Navigation Links */}
            <ul className="navbar-nav ms-lg-auto text-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>

              {/* Show Sign In or Profile Based on Authentication */}
              {currentUser ? (
                <>
                  <li className="nav-item">
                  <NavLink to="/createlisting"><button className="btn btn-success">Create Listing</button></NavLink>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink to="/signin" className="nav-link">Admin</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .search-bar {
          width: 100%;
          max-width: 500px; /* Limits width on larger screens */
        }

        @media (max-width: 991px) {
          .search-bar {
            width: 90%; /* Wider on smaller screens for better usability */
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
