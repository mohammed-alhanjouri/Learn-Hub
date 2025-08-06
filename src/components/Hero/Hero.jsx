import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-content">
            <h1>Welcome to LearnHub!</h1>
            <p>Your gateway to flexible, high-quality education — anytime, anywhere. <br/>
            Our platform brings diverse academic programs to your fingertips. 
            Engage with expert instructors, access interactive course materials, and stay 
            connected with your peers as you pursue your degree or certification at your own pace.
            </p>
            <button className="btn">Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    </div>
  )
}

export default Hero
