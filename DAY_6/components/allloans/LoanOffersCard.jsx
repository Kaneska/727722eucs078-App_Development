import React from "react";
import "./loanOffersCard.css"; // Ensure this CSS file is updated accordingly
import { loanCards } from "../../dummydata/loanCardsData"; // Import loanCards data

const LoanOffersCard = () => {
  return (
    <>
      <section className='loanOffersCard'>
        <div className='container grid2'>
          {loanCards.map((offer) => (
            <div className='item' key={offer.id}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={offer.cover} alt='Loan Card' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{offer.loanName}</h1>
                  <div className='details'>
                    {offer.loanDetails.map((detail) => (
                      <div className='box' key={detail.id}>
                        <div className='dimg'>
                          <img src={detail.icon} alt='Detail Icon' />
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
              <div>

              <button className='outline-btn'>APPLY NOW!</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LoanOffersCard;
