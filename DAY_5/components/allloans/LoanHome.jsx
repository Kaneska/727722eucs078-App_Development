import React from "react";
import Back from "./common/back/Back";
import LoanOffersCard from "./LoanOffersCard";
import LoanOffers from "./LoanOffers"; // Updated component name

const LoanHome = () => {
  return (
    <>
      <Back title='Explore Loan Offers' />
      <LoanOffersCard /> {/* Correct component */}
      <LoanOffers /> {/* Updated component */}
    </>
  );
}

export default LoanHome;
