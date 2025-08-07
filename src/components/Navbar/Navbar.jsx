import React from 'react'
import { useEffect, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isColored, setIsColored] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
        <h1>LearnHub</h1>
      </div>

      <div className="mobile-menu-toggle" onClick={() => setIsMobile(!isMobile)}>
        <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
      </div>

      <ul className={`nav-menu ${isMobile ? 'active' : ''}`}>
        <li> <Link to='hero' smooth={true} offset={0} duration={500} onClick={() => setIsMobile(false)} > Home </Link></li>
        <li> <Link to='programs' smooth={true} offset={-260} duration={500} onClick={() => setIsMobile(false)} > Program </Link></li>
        <li> <Link to='about' smooth={true} offset={-150} duration={500} onClick={() => setIsMobile(false)} > About Us </Link></li>
        <li> <Link to='campus' smooth={true} offset={-260} duration={500} onClick={() => setIsMobile(false)} > Campus </Link></li>
        <li> <Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={() => setIsMobile(false)} > Testimonials </Link></li>
        <li> <Link to='contact' smooth={true} offset={-260} duration={500} onClick={() => setIsMobile(false)} ><button className='btn'>Contact Us</button> </Link></li>
      </ul>
    </nav>
  )
}

export default Navbar