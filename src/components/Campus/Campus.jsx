import React from 'react'
import './Campus.css'
import galleryImage1 from '../../assets/gallery-1.png'
import galleryImage2 from '../../assets/gallery-2.png'
import galleryImage3 from '../../assets/gallery-3.png'
import galleryImage4 from '../../assets/gallery-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src={galleryImage1} alt="Campus Gallery" />
            <img src={galleryImage2} alt="Campus Gallery" />
            <img src={galleryImage3} alt="Campus Gallery" />
            <img src={galleryImage4} alt="Campus Gallery" />
        </div>
        <button className='btn dark-btn'>View More <FontAwesomeIcon icon={faArrowRight}/> </button>
    </div>
  )
}

export default Campus
