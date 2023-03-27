import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  min-width: 46.5rem;
  min-height: 4rem;
  padding: 1em;

  border: none;
  box-shadow: ${(props) => props.theme.boxShadows.primaryBackground};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const NavigationSearch = () => {
  return <SearchInput placeholder="Restaurants, groceries, dishes" />;
};
