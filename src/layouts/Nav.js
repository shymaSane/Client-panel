import React from 'react';
import './Nav.css'

 function Nav() {
  return (
    <nav className="navbar bg-light navbar-light navbar-expand-md">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/img/logo.png" alt="logo image" id="logo-img"></img>
        </a>
        <button class="navbar-toggler btn btn-outline-danger mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon btn btn-outline-danger btn-sm"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-black " href="#"><button className="btn btn-sm btn-outline-danger">Sign In</button></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black " href="#"><button className="btn btn-sm btn-outline-secondary">Sign  Up</button></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)
}

export default Nav

