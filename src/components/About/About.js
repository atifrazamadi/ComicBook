import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div className='container'>
        <div className='info-card bg-primary py-4 mb-4  rounded'>
            <div className='text-center text-light mt-5 '>
                <p className='about-title'>Signup at Riot club</p>
                <p className='about-text'>Lörem ipsum tyvis pred astrobel, sorat. Antibes rorade i tyll resybelt. Gigade vaskapet hubot. Bad ron medan astrocism. Tuktig vin.</p>
                <button className='btn btn-light  about-custom '>Getting started</button>
                <p className='about-info mt-1'>instant signup.No credit Card required</p>

            </div> 

        </div>

    </div>
  )
}

export default About