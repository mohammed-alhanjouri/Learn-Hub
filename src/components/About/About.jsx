import React from 'react'
import './About.css'
import aboutImage1 from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="left">
            <img src={aboutImage1} alt="About" className='about-image'/>
            <img src={playIcon} alt="Play" className='play-icon'/>
        </div>
        <div className="right">
            <h3>About LearnHub</h3>
            <h2>Empowering Education for All</h2>
            <p>LearnHub is a leading educational platform dedicated to providing high-quality learning experiences. Our mission is to empower learners worldwide by offering a diverse range of academic programs, expert instructors, and interactive course materials. Whether you're pursuing a degree, certification, or personal development, LearnHub is your gateway to flexible, accessible education.</p>
            <p>Join us at LearnHub and take the next step in your educational journey. With our user-friendly platform, you can learn at your own pace, connect with peers, and engage with expert instructors. Explore our programs today and discover the future of learning.</p>

        </div>
    </div>
  )
}

export default About
