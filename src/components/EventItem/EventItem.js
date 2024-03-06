import React from "react";
import "./EventItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const EventItem = ({ event } ) => {

  const { backgroundImage, clubName, eventName, price, dateTime, location } = event;
  return (
    
    

        <div className="col-md-3 mt-4">
          <div className="card card-custom">
            <img
              src={backgroundImage}
              className="card-img-top card-img-custom  "
              alt="events"
            />

            <div className="  d-flex flex-wrap">
              <div className="flex-grow-1 flex-md-grow-0 flex-shrink-1  ps-2 pt-2">
                <div className="  custom-circle "></div>
              </div>
              <div className="flex-grow-1 flex-md-grow-0 flex-shrink-1 pt-2 ps-2">
                <p className="event-club-text ">{clubName}</p>
              </div>

              <div className="flex-shrink-1 p-2 ms-auto">
                <i className="fa-solid fa-share-nodes text-dark"></i>
                <i className="fa-regular fa-heart icons text-dark"></i>
              </div>
            </div>

            <div className="card-body ">
              <div className="d-flex  align-items-start  justify-content-between ">
                <h5 className=" card-tit ">
                  {eventName}
                </h5>
                <h5 className=" pricing "  >
                  {price}
                </h5>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <p className=" date-time">
                  {dateTime}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-text content">
                {location}
                </p>
              </div>
            </div>
          </div>
        </div>

  );
};

export default EventItem;
