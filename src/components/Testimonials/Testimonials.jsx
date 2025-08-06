import React from 'react'
import { useRef, useState } from 'react';
import './Testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import userImage1 from '../../assets/user1.png'
import userImage2 from '../../assets/user2.png'
import userImage3 from '../../assets/user3.png'
import userImage4 from '../../assets/user4.png'


const Testimonials = () => {
    // Functionality for next and previous buttons 
    
    const listRef = useRef(null);
    const [tx, setTx] = useState(0);

    const nextTestimonial = () => {
        if (tx > -50) {
            setTx(tx - 25);
        }
    }

    const prevTestimonial = () => {
        if (tx < 0) {
            setTx(tx + 25);
        }
    }

  return (
    <div className="testimonials">
      <FontAwesomeIcon icon={faAngleRight} className="next-btn" onClick={nextTestimonial}/>
      <FontAwesomeIcon icon={faAngleLeft} className="prev-btn" onClick={prevTestimonial}/>
      <div className="testimonial">
        <ul ref={listRef} style={{ transform: `translateX(${tx}%)`, transition: 'transform 0.4s ease' }}>
            <li>
                <div className="testimonial-card">
                    <div className="user-info">
                        <img src={userImage1} alt="User" /> 
                        <div>
                            <h3>Emily Carter</h3>
                            <span>Computer Science Student</span>
                        </div>
                    </div>
                    <p>
                        LearnHub gave me the flexibility to study at my own pace while still having access 
                        to incredible instructors. The courses are practical and easy to follow!</p>
                </div>
            </li>
            <li>
                <div className="testimonial-card">
                    <div className="user-info">
                        <img src={userImage2} alt="User" />
                        <div>
                            <h3>David Wilson</h3>
                            <span>Business Administration Graduate</span>
                        </div>
                    </div>
                    <p>
                        The platform's structure and real-world projects prepared me well for my career in 
                        management. I especially loved the interactive sessions and peer learning.
                    </p>
                </div>
            </li>
            <li>
                <div className="testimonial-card">
                    <div className="user-info">
                        <img src={userImage3} alt="User" />
                        <div>
                            <h3>Sophia Martinez</h3>
                            <span>Marketing Specialist</span>
                        </div>
                    </div>
                    <p>
                        I joined LearnHub to upskill in digital marketing, and the content exceeded my 
                        expectations. The mix of video lessons, assignments, and live Q&A was fantastic.
                    </p>
                </div>
            </li>
            <li>
                <div className="testimonial-card">
                    <div className="user-info">
                        <img src={userImage4} alt="User" />
                        <div>
                            <h3>James Anderson</h3>
                            <span>Software Engineering Student</span>
                        </div>
                    </div>
                    <p>
                        The quality of teaching on LearnHub is outstanding! I built a real portfolio while 
                        learning, which helped me land an internship within 3 months.
                    </p>
                </div>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Testimonials
