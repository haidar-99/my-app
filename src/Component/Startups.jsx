import React from 'react'
import './Startups.css'
import video from '../Img/video.jpg'

const Startups = () => {
  return (
    <div className='contain bg-dark ' >
      <div className='start'>
        <h1>Landing template for<span> startups</span></h1>
        <p>Our landing page template works on all devices, so you only have<br /> to set it up once, and get beautiful results forever.</p>
        <button type="button" className="btn-1 btn-primary ">Get Started</button>
        <button type="button" className="btn-1 btn-secondary ">View on github</button>
        <div className='video'>
          <a className="navbar-brand" href="/">
            <img src={video} alt="" width="600" height="400" />
          </a>
        </div>
      </div>


    </div>

  )
}

export default Startups