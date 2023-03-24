import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  padding: 1rem 1rem;
  font-size: 1.28rem;
  font-weight: bold;

  min-width: 14rem;
  min-height: 4rem;

  cursor: pointer;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.secondary};

  box-shadow: 0rem 0.3rem 1rem rgba(0, 0, 0, 0.25);
  border-radius: 4.18px;
`;

const NavigationButton = (props: any) => {
  return <Button>{props.children}</Button>;
};

export default NavigationButton;
