import React from 'react';
import avatar from '../Images/ad3bf027-e85b-4cad-ab5f-80a25e37f4cb.jpg'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div className="container">
      {/* Left Side - Brand Name */}
      <NavLink className="navbar-brand" to='/' style={{ color: '#3498db', fontWeight: 'bold' }}>
        InayaEstate
      </NavLink>

      {/* Center - Search Bar */}
      <form className="d-flex mx-auto" style={{ width: '50%' }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>

      {/* Right Side - Navigation Links and Avatar */}
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to='/' className="nav-link active" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about' className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/profile' className="nav-link">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-circle"
                style={{ width: '30px', height: '30px' }}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
