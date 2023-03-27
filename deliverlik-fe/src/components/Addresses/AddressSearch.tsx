import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  min-width: 46.5rem;
  min-height: 6rem;
  padding: 1em;

  border: none;
  box-shadow: ${(props) => props.theme.boxShadows.whiteBackground};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const SearchButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 15%;
  right: 3%;

  background-color: ${(props) => props.theme.colors.primary};
  border: none;

  box-shadow: ${(props) => props.theme.boxShadows.whiteBackground};
  border-radius: ${(props) => props.theme.borderRadius};

  padding: 1rem 1rem;
  font-size: 1.28rem;
  font-weight: bold;

  min-width: 10rem;
  min-height: 4rem;

  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const AddressSearch = () => {
  return (
    <SearchWrapper>
      <SearchInput placeholder="e.g. N1 6DX"></SearchInput>
      <SearchButton>Search</SearchButton>
    </SearchWrapper>
  );
};

export default AddressSearch;
