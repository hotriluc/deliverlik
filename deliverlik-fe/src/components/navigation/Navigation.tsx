import React from "react";
import styled from "styled-components";
import { Flex } from "../../styled/Global.style";
import NavigationButton from "./NavigationButton";
import { NavigationSearch } from "./NavigationSearch";

const Nav = styled.nav`
  display: flex;
  padding: 3.5rem 4rem;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = () => {
  return (
    <Nav>
      <div style={{ fontSize: 32 }}>Deliverlik</div>
      <NavigationSearch />
      <Flex>
        <NavigationButton>Cart</NavigationButton>
        <NavigationButton>Menu</NavigationButton>
      </Flex>
    </Nav>
  );
};

export default Navigation;
