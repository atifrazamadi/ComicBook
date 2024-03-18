import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div className='container area-about'>
        <div className='info-card bg-primary py-4 mb-4  rounded'>
            <div className= ' container text-center text-light mt-5 '>
                <p className='about-title'>Signup at Riot Club</p>
                <p className='about-text'>A quick brown fox jumpe;kasdf as over the lazy  a quick brown fox jumpes over the lazy dog</p>
                <button className='btn btn-light  about-custom '>Getting started</button>
                <p className='about-info mt-1'>instant signup.No credit Card required</p>

            </div> 

        </div>

    </div>
  )
}

export default About