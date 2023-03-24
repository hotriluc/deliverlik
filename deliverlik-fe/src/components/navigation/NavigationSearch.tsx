import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  min-width: 46.5rem;
  min-height: 4rem;
  padding: 1em;

  border: none;
  box-shadow: 0rem 0.3rem 1rem rgba(0, 0, 0, 0.25);
  border-radius: 4.18px;
`;

export const NavigationSearch = () => {
  return <SearchInput placeholder="Restaurants, groceries, dishes" />;
};
