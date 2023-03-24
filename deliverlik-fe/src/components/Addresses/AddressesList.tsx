import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IAddress } from "../../interfaces/Address.interface";

import AddressesListItem from "./AddressesListItem";

const List = styled.ul`
  list-style: none;
  min-width: 46.5rem;

  box-shadow: 0rem 0.3rem 1rem rgba(0, 0, 0, 0.25);
  border-radius: 4.18px;
`;

const addressesList: Array<IAddress> = [
  { streetName: "Gvardeytsev Shironintsev 29A", index: "61054" },
  { streetName: "Gvardeytsev Shironintsev 29B", index: "61054" },
  { streetName: "Gvardeytsev Shironintsev 29C", index: "61054" },
  { streetName: "Gvardeytsev Shironintsev 29D", index: "61054" },
];

const AddressesList = () => {
  // later fetch addresses from backend

  const [addresses, setAddresses] = useState<Array<IAddress>>([]);

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
