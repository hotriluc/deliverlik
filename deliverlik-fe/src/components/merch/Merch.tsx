import React from "react";
import styled from "styled-components";

const MerchBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background-color: ${(props) => props.theme.colors.primary};
  padding: 10rem 4rem;
`;

const MerchPromotionHeading = styled.h1`
  margin: 0;
  font-size: 4.8rem;
`;

const MerchDescription = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

const MerchTerms = styled.p`
  font-weight: 300;
  font-size: 1.28rem;
`;

const Merch = () => {
  return (
    <MerchBlock>
      <MerchPromotionHeading>Up to 25% off - Meal Deals</MerchPromotionHeading>
      <MerchDescription>
        Need a midweek pick-me-up, a break from cooking for the family or just
        fancy your favourite restaurant?
      </MerchDescription>
      <MerchTerms>
        Service and delivery fees, subject to availability. Participating
        restaurants only. T&Cs apply. Terms.
      </MerchTerms>
    </MerchBlock>
  );
};

export default Merch;
