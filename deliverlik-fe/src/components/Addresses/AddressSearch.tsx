import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  min-width: 46.5rem;
  min-height: 6rem;
  padding: 1em;

  border: none;
  box-shadow: 0rem 0.3rem 1rem rgba(0, 0, 0, 0.25);
  border-radius: 4.18px;
`;

const AddressSearch = () => {
  return <SearchInput placeholder="e.g. N1 6DX"></SearchInput>;
};

export default AddressSearch;
