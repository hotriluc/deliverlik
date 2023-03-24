import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "../styled/Global.style";

import AddressesList from "../components/Addresses/AddressesList";
import AddressSearch from "../components/Addresses/AddressSearch";

const Section = styled.section`
  padding: 0 4rem;
  height: 100vh;
`;

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Section>
      <Flex column alignCenter>
        <h1 style={{ marginTop: "12rem" }}>
          Restaurant food, takeaway, groceries. Delivered.
        </h1>
        {!isLoggedIn && <p>Logged in for you addresses</p>}
        <AddressSearch />
        <AddressesList />
      </Flex>
    </Section>
  );
};

export default Home;
