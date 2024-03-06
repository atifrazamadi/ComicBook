import React from 'react'
import './Comedian.css'
const Comedian = ({event}) => {
  const {comedianName,comedianImage} = event
  console.log(comedianName,comedianImage)

  if (!comedianName || !comedianImage) {
    return null; 
  }

  return (
   

          <div className="col-md-3 ">
            <div className="card card-custom-cmd ">
              <img
                src={comedianImage}
                className="card-img-top card-img-top-custom"
                alt="events"
              />
            </div>
            <div className="text-center mt-3">
              <p className="  heading-style">{comedianName}</p>
            </div>
          </div>
      
  )
}

export default Comedian
