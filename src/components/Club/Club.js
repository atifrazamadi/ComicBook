import React from 'react';
import './Club.css'

const Club = ({backgroundImage}) => {
  return (
    <div className='club-area'>
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
      <div className='row mt-3'>
        
        
        <div className='col-md-3'>
          <div className='card card-clud-custom'>
            <div className='cover'>
              <img src={backgroundImage} alt="Cover" />
            </div>
            <div className='dp'>
              <img src={backgroundImage} alt="Display " />
            </div>
            <div className='text-center container'>
              <h2 className='c-title'>Person Oner</h2>
              <p className='text-dark ps-4 pe-4 '>A quick brown fox jumps over the lazy dog</p>
            </div>

            <div className="container d-flex justify-content-center mb-3">
              <button className='btn bg-transparent me-2'>Follow</button>
              <button className='btn btn-primary ms-2'>View Events</button>
            </div>
    
          </div>




          
        </div>
        

        <div className='col-md-3'>
          <div className='card card-clud-custom'>
            <div className='cover'>
              <img src={backgroundImage} alt="Cover" />
            </div>
            <div className='dp'>
              <img src={backgroundImage} alt="Display " />
            </div>
            <div className='text-center container'>
              <h2 className='c-title'>Person Oner</h2>
              <p className='text-dark ps-4 pe-4 '>A quick brown fox jumps over the lazy dog</p>
            </div>

            <div className="container d-flex justify-content-center mb-3">
              <button className='btn bg-transparent me-2'>Follow</button>
              <button className='btn btn-primary ms-2'>View Events</button>
            </div>
    
          </div>
          
        </div>
        

        <div className='col-md-3'>
          <div className='card card-clud-custom'>
            <div className='cover'>
              <img src={backgroundImage} alt="Cover" />
            </div>
            <div className='dp'>
              <img src={backgroundImage} alt="Display " />
            </div>
            <div className='text-center container'>
              <h2 className='c-title'>Person Oner</h2>
              <p className='text-dark ps-4 pe-4 '>A quick brown fox jumps over the lazy dog</p>
            </div>

            <div className="container d-flex justify-content-center mb-3">
              <button className='btn bg-transparent me-2'>Follow</button>
              <button className='btn btn-primary ms-2'>View Events</button>
            </div>
    
          </div>  
        </div>



        <div className='col-md-3'>
          <div className='card card-clud-custom'>
            <div className='cover'>
              <img src={backgroundImage} alt="Cover" />
            </div>
            <div className='dp'>
              <img src={backgroundImage} alt="Display " />
            </div>
            <div className='text-center container'>
              <h2 className='c-title'>Person Oner</h2>
              <p className='text-dark ps-4 pe-4 '>A quick brown fox jumps over the lazy dog</p>
            </div>

            <div className="container d-flex justify-content-center mb-3">
              <button className='btn bg-transparent me-2'>Follow</button>
              <button className='btn btn-primary ms-2'>View Events</button>
            </div>
    
          </div>
  
        </div>
        
        
        
      </div>
    </div>
  );
};
export default Club;