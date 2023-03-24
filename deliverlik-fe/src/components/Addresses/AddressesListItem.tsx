import React from "react";
import styled from "styled-components";
import { IAddress } from "../../interfaces/Address.interface";

interface AddressesListItemProps {
  address: IAddress;
}

const AddressItem = styled.li`
  padding: 2rem 1rem;
  &:not(:last-child) {
    border-bottom: 1px solid;
  }
`;

const AddressesListItem = ({ address }: AddressesListItemProps) => {
  return (
    <AddressItem>
      <a>
        {address.streetName} {address.index}
      </a>
    </AddressItem>
  );
};

export default AddressesListItem;