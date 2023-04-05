import React from "react";
import styled from "styled-components";
import { Flex } from "../../styled/Global.style";
import NavigationButton from "./NavigationButton";
import { NavigationSearch } from "./NavigationSearch";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.5rem 4rem;
  background-color: ${(props) => props.theme.colors.primary};

  a:active,
  a:visited,
  a:link {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Link to={"/"} style={{ fontSize: 32 }}>
        Deliverlik
      </Link>
      <NavigationSearch />
      <Flex>
        <NavigationButton>Cart</NavigationButton>
        <NavigationButton>Menu</NavigationButton>
      </Flex>
    </Nav>
  );
};

export default Navigation;
