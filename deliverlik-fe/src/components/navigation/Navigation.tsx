import React from "react";
import styled from "styled-components";
import { Flex } from "../../styled/Global.style";
import NavigationButton from "./NavigationButton";
import { NavigationSearch } from "./NavigationSearch";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.5rem 4rem;
  background-color: ${(props) => props.theme.colors.primary};
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
