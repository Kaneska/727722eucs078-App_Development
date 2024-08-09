import React from "react";
import { blog } from "../../../dummydata"; // Make sure you have relevant blog data or adjust accordingly
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className='newsletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Subscribe to Our Newsletter</h1>
            <span>Get the latest updates on agriculture loans and financial tips</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter your email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>AgriAmigo</h1>
            <span>Your Partner in Agriculture Loans</span>
            <p>Your trusted source for agricultural financing solutions, providing the support you need to grow your farming business.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-linkedin icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Loan Products</li>
              <li>Application Process</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Support</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Updates</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB' key={val.id}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                123 Farm Lane, Agraria, CA, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +1 800 123 4567
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                support@agriamigo.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | Designed and developed by <i className='fa fa-heart'></i> AgriAmigo Team
        </p>
      </div>
    </>
  );
}

export default Footer;
