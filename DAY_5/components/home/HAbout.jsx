import React from "react"
import LoanOffers from "../allloans/LoanOffers" // Make sure this component is properly created
import Heading from "../common/heading/Heading"
import "../allloans/loanOffers.css" // Update the CSS file path if needed
import { loanOffers } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='Our Loan Offers' title='Explore Our Popular Agriculture Loan Offers' />

          <div className='loanOffersCard'>
            {/* Displaying the first few loan offers */}
            <div className='grid2'>
              {loanOffers.slice(0, 3).map((offer) => (
                <div className='items' key={offer.id}>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={offer.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{offer.loanName}</h1>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='details'>
                        {offer.loanDetails.map((detail) => (
                          <div className='box' key={detail.id}>
                            <div className='dimg'>
                              <img src={detail.icon} alt='' />
                            </div>
                            <div className='para'>
                              <h4>{detail.title}</h4>
                              <span>{detail.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {offer.totalAmount} / {offer.term}
                    </h3>
                  </div>
                  <button className='outline-btn'>APPLY NOW!</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <LoanOffers /> {/* Ensure this component is correctly implemented */}
      </section>
    </>
  )
}

export default HAbout
