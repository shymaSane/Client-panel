import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'

 function Nav() {
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-md">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/img/logo.png" alt="logo" id="logo-img"></img>
        </Link>
        <button className="navbar-toggler btn btn-outline-danger mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon btn btn-outline-danger btn-sm"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-black " to="/users/signin"><button className="btn btn-sm btn-outline-warning">Sign In</button></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black " to="/users/signup"><button className="btn btn-sm btn-outline-warning">Sign  Up</button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)
}

export default Nav

