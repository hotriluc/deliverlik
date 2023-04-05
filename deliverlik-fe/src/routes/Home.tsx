import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "../styled/Global.style";

import AddressesList from "../components/addresses/AddressesList";
import AddressSearch from "../components/addresses/AddressSearch";
import SlideShowPanel from "../components/slideshow-panel/SlideShowPanel";
import ExplainerCard from "../components/cards/ExplainerCard";
import Merch from "../components/merch/Merch";
import PartnershipCard from "../components/cards/PartnershipCard";

const SectionHero = styled.section`
  height: 100%;

  h1 {
    margin-top: 12rem;
    text-align: center;
    line-height: 1.4;
  }
`;

const SectionExplainer = styled.section`
  padding: 12rem 4rem;
`;

const SectionPartnership = styled.section`
  padding: 12rem 4rem;

  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <SectionHero>
        <Flex column alignCenter>
          <h1>
            Restaurant food, takeaway, groceries. <br />
            Delivered.
          </h1>
          {!isLoggedIn && <p>Log in for you addresses</p>}
          <AddressSearch />
          <p>Or, select you recent address</p>
          <AddressesList />
        </Flex>
        <SlideShowPanel />
      </SectionHero>
      <SectionExplainer>
        <ExplainerCard />
      </SectionExplainer>
      <Merch />
      <SectionPartnership>
        <PartnershipCard
          title="Partner with us"
          description="Join Deliverlik and reach more customers than ever. We handle delivery, so you can focus on the food."
        />
        <PartnershipCard
          title="Ride with us"
          description="The freedom to fit work around your life. Plus great fees, perks and discounts."
        />
        <PartnershipCard
          title="Deliverlik For Work"
          description="Looking for a workplace food solution to reward your team, boost morale or treat your clients? Our corporate team can help."
        />
        <PartnershipCard
          title="Gift Cards"
          description="Looking for an easy way to treat your friends and family? Give the gift of great food with a Deliverlik gift card."
        />
      </SectionPartnership>
    </>
  );
};

export default Home;
