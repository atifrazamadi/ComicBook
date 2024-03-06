import React from "react";
import "./Event.css";
import dropDownIcon from "../../assets/dropdown.png";
import location from "../../assets/location.png";

import Comedian from "../Comedian/Comedian";
import EventItem from "../EventItem/EventItem";
import Club from "../Club/Club";
import data from "./data";
const Events = () => {
  return (
    <div className="container mt-5 mb-5">
      {/* for EventItnm cards */}
      <div className="event-item-area">
        <div className="row mb-5">
          <div className="col-md-4">
            <h1 className="text-dark text-capitalize ">events near you</h1>
          </div>

          <div className=" col-md-6 ">
            <div className=" mr-2">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary rounded-pill btn-custom"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="dropdownicon-style"
                    src={dropDownIcon}
                    alt=""
                  />
                  {/* <i className="fa-solid fa-caret-down  ms-3 me-3"></i> */}
                  punjab
                  <img className="ms-3 location-style" src={location} alt="" />
                  {/* <i className="fa-solid fa-location-pin ms-3  "></i> */}
                  {/* <i className="fa-solid fa-caret-up ms-3 d-none"></i> */}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Sindh
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Balochistan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Khyber Pakhtunkhwa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-2 ">
            <button type="button" className="btn btn-outline-primary">
              View All Events <strong>→</strong>
            </button>
          </div>
        </div>

        <div className="row mt-2 ">
          {data.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* EventItem cards end here  */}

      {/* Comedian Cards here */}

      <div className="comedian-area">
        <div className="row ">
          <div className="col-md-10">
            <h1 className="text-dark  text-capitalize mb-5">
              feature comedians
            </h1>
          </div>

          <div className="col-md-2 ">
            <button type="button" class="btn btn-outline-primary">
              View All Events <strong>→</strong>
            </button>
          </div>
        </div>

        <div className="row mt-3">
          {data.map((event) => (
            <Comedian key={event.id} event={event} />
          ))}
        </div>
      </div>

{/* coamedian cards end here  */}






{/* club cards start here  */}

<div className="club-area">
      <div className="row mt-5">
        <div className="col-md-10 ">
          <h1 className="text-dark  text-capitalize mb-3">clubs</h1>
        </div>

        <div className="col-md-2 ">
          <button type="button" class="btn btn-outline-primary">
            View All Events <strong>→</strong>
          </button>
        </div>
      </div>
      <div className="row mt-3">
        


      {data.map((event) => (
            <Club key={event.id} event={event} />
          ))}

  

      </div>
    </div>

      
    </div>
  );
};

export default Events;
