import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark  py-4">
      <div className="bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="text-light">
                Comic<spam className="text-danger">Book</spam>
              </h5>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled menu-list  mb-0 ">
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">FAQ's</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Affiliate Program</a>
                </li>
              </ul>
            </div>
            <div className="input-group  col-md-4 area   ">
              <span className="input-group-text custom-input-design ">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control   custom-input-design "
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

      <hr className="container text-light"></hr>
      <div className="container customize-mb">
        <div className="row ">
          <div className="col-md-4 ">
            <p className="costom-color">
              &copy; 2022 ComicBook, inc. All rights reserved .
            </p>
          </div>
          <div className="col-md-8">
            <ul className=" menu-list text-end">
              <i class="fab fa-github fa-2x icons"></i>
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
