import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div >
   <header className="position-relative"> 
        <div className=" container container-txt" > 
          <h1 > 
            Lough more, <br /> worry less
          </h1>
          <p >A quick brown fox jumpes over the lazy dog</p>
        </div>
      </header>
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent">
        <div className="container">
          <a className="navbar-brand fw-bold " href="/">
            Comic<spam className="text-danger">Book</spam>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Comedian
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About CB
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Login
                </a>
              </li>
            </ul>
            <button className="ms-4 btn btn-danger ">Getting Started</button>
          </div>
          
        </div>
      </nav>
      
    </div>
  );
};

export default NavBar;