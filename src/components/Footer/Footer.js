import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";


const Footer = () => {
  return (
    <section className="bg-dark  py-4 view">
      <div className="bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-2 d-flex justify-content-md-start justify-content-center  ">
              <h5 className="text-light">ComicBook</h5>
            </div>
            <div className="col-md-6  ms-auto d-flex justify-content-md-center justify-content-center ">
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
            <div className="  col-md-3 area input-group ms-auto    d-flex justify-content-md-end justify-content-center    ">
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

      <hr className="container text-light"/>
      <div className="container customize-mb">
        <div className="row ">
          <div className="col-md-4  ">
            <p className="costom-color">
              &copy; 2022 ComicBook, inc. All rights reserved .
            </p>
          </div>
          <div className="col-md-8 ">
            <ul className=" menu-list d-flex justify-content-md-end justify-content-center ">
              <i className="fab fa-github fa-1x icons"></i>
            
              <i class="fa-brands fa-twitter fa-1x icons"></i>

              <i className="fa-brands fa-dribbble fa-1x icons"></i>
              <i className="fa-brands fa-facebook-f fa-1x icons"></i>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
