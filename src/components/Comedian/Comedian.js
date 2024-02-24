import React from 'react'
import './Comedian.css'
const Comedian = (props) => {
  return (
    <div className='comedian-area'>
        <div className="row ">
        <div className="col-md-6">
          <h1 className="text-dark  text-capitalize mb-5">feature comedians</h1>
        </div>

        

        <div className="col-md-6 text-end">
          <button type="button" class="btn btn-outline-primary">
            View All Events <strong>→</strong>
          </button>
        </div>
      </div>

        <div className="row mt-3">
          <div className="col-md-3 ">
            <div className="card card-custom-cmd ">
              <img
                src={props.backgroundImage}
                className="card-img-top card-img-top-custom"
                alt="events"
              />
            </div>
            <div className="text-center mt-3">
              <p className="text-dark  heading-style">Comedian Bar</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Comedian
