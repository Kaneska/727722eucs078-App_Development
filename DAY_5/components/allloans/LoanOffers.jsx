import React from "react";
import "./loanOffers.css"; // Ensure this CSS file is updated accordingly
import { loanOffers } from "../../dummydata"; // Import loanOffers data
import Heading from "../common/heading/Heading";

const LoanOffers = () => {
  return (
    <>
      <section className='loanOffers'>
        <div className='container'>
          <Heading subtitle='LOAN OFFERS' title='Explore Our Agriculture Loan Offers' />
          <div className='content grid3'>
            {loanOffers.map((offer) => (
              <div className='box' key={offer.id}>
                <div className='img'>
                  <img src={offer.cover} alt='Loan Offer' />
                  <img src={offer.hoverCover} alt='Hover Offer' className='show' />
                </div>
                <h1>{offer.loanName}</h1>
                <span>{offer.loanType}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LoanOffers;
