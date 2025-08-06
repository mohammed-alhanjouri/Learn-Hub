import React from 'react'
import { useEffect, useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isColored, setIsColored] = useState(false);

  const handleScroll = () => {
    window.scrollY > 50 ? setIsColored(true) : setIsColored(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isColored ? 'colored-nav' : ''}`}>
      <div className="logo">
        <FontAwesomeIcon icon={faGraduationCap} className="icon" size='2x' />
        {/* <img src={logo} alt="LearnHub Logo" /> */}
        <h1>LearnHub</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
