import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "../styled/Global.style";

import AddressesList from "../components/addresses/AddressesList";
import AddressSearch from "../components/addresses/AddressSearch";
import SlideShowPanel from "../components/slideshow-panel/SlideShowPanel";

const SectionHero = styled.section`
  height: 100%;
`;

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <SectionHero>
        <Flex column alignCenter>
          <h1 style={{ marginTop: "12rem" }}>
            Restaurant food, takeaway, groceries. Delivered.
          </h1>
          {!isLoggedIn && <p>Log in for you addresses</p>}
          <AddressSearch />
          <p>Or, select you recent address</p>
          <AddressesList />
        </Flex>
        <SlideShowPanel />
      </SectionHero>
      <section>About</section>
    </>
  );
};

export default Home;
