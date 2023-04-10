import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IAddress } from "../../interfaces/Address.interface";
import AddressesListItem from "./AddressesListItem";

const List = styled.ul`
  list-style: none;
  min-width: 46.5rem;
  overflow: hidden;

  box-shadow: ${(props) => props.theme.boxShadows.whiteBackground};
  border-radius: ${(props) => props.theme.borderRadius};
`;

// later fetch addresses from backend
const addressesList: Array<IAddress> = [
  { streetName: "Gvardeytsev Shironintsev 29A", index: "61054" },
  { streetName: "Gvardeytsev Shironintsev 29B", index: "61054" },
  { streetName: "Gvardeytsev Shironintsev 29C", index: "61054" },
  { streetName: "Gvardeytsev Shironintsev 29D", index: "61054" },
];

// Show Users's orders addresses (on home page)
// later when backend is ready pass addresses as props
const AddressesList = () => {
  const [addresses, setAddresses] = useState<Array<IAddress>>([]);

  // Render your addresses
  useEffect(() => {
    setAddresses(addressesList);
  }, []);

  return (
    <List>
      {addresses.map((address, index) => (
        <AddressesListItem key={index} address={address} />
      ))}
    </List>
  );
};

export default AddressesList;
