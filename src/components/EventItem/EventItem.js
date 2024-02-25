import React from "react";
import "./EventItem.css";

const EventItem = ({ backgroundImage }) => {
  return (
    <div className="event-item-area">
      <div className="row mb-5">
        <div className="col-md-4  ">
        <h1 className="text-dark  text-capitalize ">events near you</h1>
        </div>

        <div className=" col-md-6 ">
            <div className=" mr-2">
          <button className=" btn btn-primary rounded-pill btn-custom">
            <i class="fa-solid fa-caret-up me-3 "></i> Punjab <t />
            <i class="fa-solid fa-location-pin mt-0 ms-3"></i>
          </button>
          </div>
        </div>

        <div className="col-md-2 ">
          <button type="button" class="btn btn-outline-primary">
            View All Events <strong>→</strong>
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-3">
          <div class="card card-custom">
            <img src={backgroundImage} class="card-img-top card-img-custom  " alt="events" />
            <div class="  d-flex flex-wrap">
              <div class="flex-grow-1 flex-md-grow-0 flex-shrink-1 p-2">
                <div className=" d flex circule"></div>
              </div>
              <div class="flex-grow-1 flex-md-grow-0  flex-shrink-1 p-2">
                <p className="text-black">The Roit Cloub</p>
              </div>

              
              <div class="flex-shrink-1 p-2 ms-auto">
                <i class="fa-solid fa-share-nodes icons"></i>
                <i class="fa-regular fa-heart icons"></i>
              </div>
            </div>

            <div class="card-body">
            <div class="  d-flex flex-wrap mb-3">
              <div class="flex-grow-1 ">
              <h5 class="card-title">Card Title</h5>
              </div>
              
              <div class="flex-shrink-1  ms-auto">
              <h5 class="card-title">$20</h5>
              </div>
            </div>
           
              
              
              


              <div class="d-flex justify-content-between align-items-center">
                <strong class="text-primary">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="card-text text-black">
                  A quick bnrown fox jumpes over the lazy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card card-custom">
            <img src={backgroundImage} class="card-img-top card-img-custom  " alt="events" />
            <div class="  d-flex flex-wrap">
              <div class="flex-grow-1 flex-md-grow-0 flex-shrink-1 p-2">
                <div className=" d flex circule"></div>
              </div>
              <div class="flex-grow-1 flex-md-grow-0  flex-shrink-1 p-2">
                <p className="text-black">The Roit Cloub</p>
              </div>

              <div class="flex-grow-1 ms-auto"></div>
              <div class="flex-shrink-1 p-2 ms-auto">
                <i class="fa-solid fa-share-nodes icons"></i>
                <i class="fa-regular fa-heart icons"></i>
              </div>
            </div>

            <div class="card-body">
            <div class="  d-flex flex-wrap mb-3">
              <div class="flex-grow-1 ">
              <h5 class="card-title">Card Title</h5>
              </div>
              
              <div class="flex-shrink-1  ms-auto">
              <h5 class="card-title">$20</h5>
              </div>
            </div>

              <div class="d-flex justify-content-between align-items-center">
                <strong class="text-primary">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="card-text text-black">
                  A quick bnrown fox jumpes over the lazy
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="col-md-3">
          <div class="card card-custom">
            <img src={backgroundImage} class="card-img-top card-img-custom  " alt="events" />
            <div class="  d-flex flex-wrap">
              <div class="flex-grow-1 flex-md-grow-0 flex-shrink-1 p-2">
                <div className=" d flex circule"></div>
              </div>
              <div class="flex-grow-1 flex-md-grow-0  flex-shrink-1 p-2">
                <p className="text-black">The Roit Cloub</p>
              </div>

              <div class="flex-grow-1 ms-auto"></div>
              <div class="flex-shrink-1 p-2 ms-auto">
                <i class="fa-solid fa-share-nodes icons"></i>
                <i class="fa-regular fa-heart icons"></i>
              </div>
            </div>

            <div class="card-body">
            <div class="  d-flex flex-wrap mb-3">
              <div class="flex-grow-1 ">
              <h5 class="card-title">Card Title</h5>
              </div>
              
              <div class="flex-shrink-1  ms-auto">
              <h5 class="card-title">$20</h5>
              </div>
            </div>

              <div class="d-flex justify-content-between align-items-center">
                <strong class="text-primary">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="card-text text-black">
                  A quick bnrown fox jumpes over the lazy
                </p>
              </div>
            </div>
          </div>
        </div>





        <div className="col-md-3">
          <div class="card card-custom">
            <img src={backgroundImage} class="card-img-top card-img-custom  " alt="events" />
            <div class="  d-flex flex-wrap">
              <div class="flex-grow-1 flex-md-grow-0 flex-shrink-1 p-2">
                <div className=" d flex circule"></div>
              </div>
              <div class="flex-grow-1 flex-md-grow-0  flex-shrink-1 p-2">
                <p className="text-black">The Roit Cloub</p>
              </div>

              <div class="flex-grow-1 ms-auto"></div>
              <div class="flex-shrink-1 p-2 ms-auto">
                <i class="fa-solid fa-share-nodes icons"></i>
                <i class="fa-regular fa-heart icons"></i>
              </div>
            </div>

            <div class="card-body">
            <div class="  d-flex flex-wrap mb-3">
              <div class="flex-grow-1 ">
              <h5 class="card-title">Card Title</h5>
              </div>
              
              <div class="flex-shrink-1  ms-auto">
              <h5 class="card-title">$20</h5>
              </div>
            </div>

              <div class="d-flex justify-content-between align-items-center">
                <strong class="text-primary">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="card-text text-black">
                  A quick bnrown fox jumpes over the lazy
                </p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default EventItem;
