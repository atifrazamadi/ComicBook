import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div className='container'>
        <div className='info-card bg-primary py-4 mb-4  rounded'>
            <div className='text-center mt-5 mb-5'>
                <h3 className='text-white '>Signup at Riot club</h3>
                <p>A quick brown fox jumpes over the lazy <br/>a quick brown fox jumpes over the lazy dog</p>
                <button className='btn btn-light fw-bold mt-5'>Getting started</button>
                <p className='mt-3 '>instant signup.No credit Card required</p>

            </div> 

        </div>

    </div>
  )
}

export default About