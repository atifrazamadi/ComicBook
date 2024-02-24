import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <h5 >Comic<spam className="text-danger ">Book</spam></h5>
          </div>
          <div className="col-md-8 d-flex   ">
            <ul className="list-unstyled menu-list text-center text-md-end mb-0 me-md-auto">
              <li>
                <a className="text-light" href="/">
                  Privacy Policey
                </a>
              </li>
              <li>
                <a className="text-light" href="/">
                  FAQ's
                </a>
              </li>
              <li>
                <a className="text-light" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-light" href="/">
                  Affilliate Programe
                </a>
              </li>
            </ul>
            <div className="input-group mb-3 align-items-center area">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="container"></hr>
      <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <p>&copy; 2022 ComicBook, inc. All rights reserved .</p>
          </div>
          <div className="col-md-8">
            <ul className=" menu-list text-end">
              <i class="fab fa-github fa-2x icons" ></i>
              <i class="fab fa-twitter-square fa-2x icons"></i>
              <i class="fa-brands fa-instagram fa-2x icons"></i>
              <i class="fab fa-facebook-square fa-2x icons"></i>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
