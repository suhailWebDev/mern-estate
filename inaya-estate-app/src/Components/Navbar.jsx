import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
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
            {/* Search Bar */}
            <form className="search-bar d-flex mb-2 mb-lg-0 mx-lg-auto">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary ms-2" type="submit">
                Search
              </button>
            </form>

            {/* Navigation Links */}
            <ul className="navbar-nav ms-lg-auto text-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signin" className="nav-link">
                  Sign In
                </NavLink>
              </li>
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
