import React from "react";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>AgriAmigo</h1>
            <span>YOUR PARTNER IN AGRICULTURE FINANCE</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-linkedin icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head;
