import React,{useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";


const NavBar = () => {

  const [isCollapseEnable, setIsCollapseEnable] = useState(false);

  const toggleMenu = () => {
    setIsCollapseEnable(!isCollapseEnable);
  };


  return (
    
    <div className="container ">
   <header>  
    
      <nav className={`navbar navbar-expand-lg  navbar-dark bg-dark  ${isCollapseEnable?"": "bg-transparent"}`}>
        <div className="container ">
          <a className="navbar-brand fw-bold  " href="/">
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
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Comedian
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  About CB
                </a>
              </li>
              <li className="nav-item ">
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

              <li className="nav-item">
              <button className=" btn btn-primary nav-button">Getting Started</button>
              </li>

            </ul>
            
          </div>
          
        </div>
      </nav>

      <div className="container-txt " > 
      <div className="nav-costom-color ">

          <h1 > 
            Laugh more, worry less
          </h1 >
      </div>
          <p   >Lörem ipsum rena migikar makrosade vevil, teration. Tede ade. Farer ol ifall tred det osöning.</p>
        </div>
      </header>
    </div>
  );
};

export default NavBar;


