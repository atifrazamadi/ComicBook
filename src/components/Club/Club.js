import React from "react";
import "./Club.css";

const Club = ({ event }) => {
  const {clubDp,clubImage} = event

  
 console.log(clubImage)

  
 if (!clubDp || !clubImage) {
  return null; 
}



  return (
 
        <div className="col-md-3 mt-4">
          <div className="card card-clud-custom">
            <div className="cover">
              <img src={clubImage} alt="Cover" />
            </div>
            <div className="dp">
              <img src={clubDp} alt="Display " />
            </div>
            <div className="text-center container">
              <h2 className="c-title">The Roit Club</h2>
              <div className="d-flex justify-content-center align-items-center">
                <strong className="clud-date-time">
                  Fri Sep 20 | 11:00 PM - 11:30 Pm
                </strong>
              </div>
              <p className="club-text ps-4 pe-4 mt-3 ">
                A quick brown fox jumps over the lazy dog
              </p>
            </div>

            <div className="container d-flex justify-content-center mb-3">
              <button className="btn bg-transparent btn-flw me-2">
                Follow
              </button>
              <button className="btn btn-primary btn-event ms-2">
                View Events
              </button>
            </div>
         

      

      </div>
    </div>
  );
};
export default Club;
