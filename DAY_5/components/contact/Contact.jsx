import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you can add functionality to send the form data to your backend
  };

  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp';
  
  return (
    <>
      <Back title='Contact Us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map} title='Google Maps Location'></iframe>
          </div>
          <div className='right row'>
            <h1>Contact Us</h1>
            <p>We are here to assist you with your agriculture loan needs and any inquiries you may have. Feel free to reach out to us for support or information.</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21st Street, Suite 721, New York, NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>support@agriamigo.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+1 123 456 7890</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input 
                  type='text' 
                  name='name' 
                  placeholder='Name' 
                  value={formData.name} 
                  onChange={handleChange} 
                  aria-label="Name"
                />
                <input 
                  type='email' 
                  name='email' 
                  placeholder='Email' 
                  value={formData.email} 
                  onChange={handleChange} 
                  aria-label="Email"
                />
              </div>
              <input 
                type='text' 
                name='subject' 
                placeholder='Subject' 
                value={formData.subject} 
                onChange={handleChange} 
                aria-label="Subject"
              />
              <textarea 
                name='message' 
                cols='30' 
                rows='10' 
                placeholder='Write your message here...' 
                value={formData.message} 
                onChange={handleChange} 
                aria-label="Message"
              ></textarea>
              <button className='primary-btn' type='submit'>SEND MESSAGE</button>
            </form>

            <h3>Follow Us</h3>
            <span>FACEBOOK TWITTER INSTAGRAM LINKEDIN</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
