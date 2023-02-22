import React from 'react'
import "../style.css"
import image from "../Images/img1.png"

const Home = () => {
  return (
    <div className='container container-fluid d-block'>
      <div className="vh-50">
        <img src={image} className='img-fluid' alt='hi hello how are you'/>
      </div>
    </div>
  )
}

export default Home