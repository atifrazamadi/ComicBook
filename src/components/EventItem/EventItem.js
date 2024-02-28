import React from "react";
import "./EventItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const EventItem = ({ backgroundImage }) => {
  return (
    <div className="event-item-area">
      <div className="row mb-5">
        <div className="col-md-4  ">
          <h1 className="text-dark  text-capitalize ">events near you</h1>
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
                <i className="fa-solid fa-caret-down ms-3 me-3"></i>
                Punjab
                <i className="fa-solid fa-location-pin ms-3 me-3"></i>
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
        
        {/* cards here  */}

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
              <div className="flex-grow-1 flex-md-grow-0  flex-shrink-1 pt-2 ps-2">
                <p className="text-black">The Roit Club</p>
              </div>

              <div className="flex-shrink-1 p-2 ms-auto">
                <i className="fa-solid fa-share-nodes icons"></i>
                <i className="fa-regular fa-heart icons"></i>
              </div>
            </div>

            <div className="card-body">
              <div className="  d-flex flex-wrap mb-3">
                <div className="flex-grow-1 ">
                  <h5 className="card-title">Card Title</h5>
                </div>

                <div className="flex-shrink-1  ms-auto">
                  <h5 className="card-title">$20</h5>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <strong className="text-primary">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-text text-dark">
                  A quick bnrown fox jumpes over the lazy
                </p>
              </div>
            </div>
          </div>
        </div>


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
              <div className="flex-grow-1 flex-md-grow-0  flex-shrink-1 pt-2 ps-2">
                <p className="text-black">The Roit Club</p>
              </div>

              <div className="flex-shrink-1 p-2 ms-auto">
                <i className="fa-solid fa-share-nodes icons"></i>
                <i className="fa-regular fa-heart icons"></i>
              </div>
            </div>

            <div className="card-body">
              <div className="  d-flex flex-wrap mb-3">
                <div className="flex-grow-1 ">
                  <h5 className="card-title">Card Title</h5>
                </div>

                <div className="flex-shrink-1  ms-auto">
                  <h5 className="card-title">$20</h5>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <strong className="text-primary">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-text text-dark">
                  A quick bnrown fox jumpes over the lazy
                </p>
              </div>
              
            </div>
          </div>
        </div>



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
              <div className="flex-grow-1 flex-md-grow-0  flex-shrink-1 pt-2 ps-2">
                <p className="text-black">The Roit Club</p>
              </div>

              <div className="flex-shrink-1 p-2 ms-auto">
                <i className="fa-solid fa-share-nodes icons"></i>
                <i className="fa-regular fa-heart icons"></i>
              </div>
            </div>

            <div className="card-body">
              <div className="  d-flex flex-wrap mb-3">
                <div className="flex-grow-1 ">
                  <h5 className="card-title">Card Title</h5>
                </div>

                <div className="flex-shrink-1  ms-auto">
                  <h5 className="card-title">$20</h5>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <strong className="text-primary">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-text text-dark">
                  A quick bnrown fox jumpes over the lazy
                </p>
              </div>
            </div>
          </div>
        </div>



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
              <div className="flex-grow-1 flex-md-grow-0  flex-shrink-1 pt-2 ps-2">
                <p className="text-black">The Roit Club</p>
              </div>

              <div className="flex-shrink-1 p-2 ms-auto">
                <i className="fa-solid fa-share-nodes icons"></i>
                <i className="fa-regular fa-heart icons"></i>
              </div>
            </div>

            <div className="card-body">
              <div className="  d-flex flex-wrap mb-3">
                <div className="flex-grow-1 ">
                  <h5 className="card-title">Card Title</h5>
                </div>

                <div className="flex-shrink-1  ms-auto">
                  <h5 className="card-title">$20</h5>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <strong className="text-primary">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-text text-dark">
                  A quick bnrown fox jumpes over the lazy
                </p>
              </div>
            </div>
          </div>
        </div>



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
              <div className="flex-grow-1 flex-md-grow-0  flex-shrink-1 pt-2 ps-2">
                <p className="text-black">The Roit Club</p>
              </div>

              <div className="flex-shrink-1 p-2 ms-auto">
                <i className="fa-solid fa-share-nodes icons"></i>
                <i className="fa-regular fa-heart icons"></i>
              </div>
            </div>

            <div className="card-body">
              <div className="  d-flex flex-wrap mb-3">
                <div className="flex-grow-1 ">
                  <h5 className="card-title">Card Title</h5>
                </div>

                <div className="flex-shrink-1  ms-auto">
                  <h5 className="card-title">$20</h5>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <strong className="text-primary">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-text text-dark">
                  A quick bnrown fox jumpes over the lazy
                </p>
              </div>
            </div>
          </div>
        </div>
       




        {/* end here  */}

      </div>
    </div>
  );
};

export default EventItem;
