import React from 'react'
import { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faEnvelope, faPhone, faLocationDot, faPaperPlane} from '@fortawesome/free-solid-svg-icons'



const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "699d47c5-6152-4bc0-a7f8-d661557ebbcd");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div className="contact">
      <div className="contact-col">
            <h3>Send us a message <FontAwesomeIcon icon={faMessage} /></h3>
            <p>
                Feel free to reach out through contact form or find our contact information below. 
                Your feedback, questions, and suggestions are important to us, 
                as we strive to provide the best learning experience for our students.
            </p>
            <ul>
                <li> <FontAwesomeIcon icon={faEnvelope} style={{ color: '#212EA0' }} /> Email: support@learnhub.com</li>
                <li> <FontAwesomeIcon icon={faPhone} style={{ color: '#212EA0' }} /> Phone: +1 (234) 567-890</li>
                <li> <FontAwesomeIcon icon={faLocationDot} style={{ color: '#212EA0' }} /> Address: 123 LearnHub St, Education City, ED 12345</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter Your Email" required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Enter Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn dark-btn">Send Message <FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
