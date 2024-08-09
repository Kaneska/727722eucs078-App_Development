import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO AGRIAMIGO' title='Your Partner in Agriculture Loans' />
            <p>Empowering farmers with the best loan options tailored to your needs. Get the financial support you need to grow your agricultural ventures.</p>
            <div className='button'>
              <button className='primary-btn'>
                APPLY FOR A LOAN <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                LEARN MORE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;
