import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 1rem;
  font-size: 1.28rem;
  font-weight: bold;

  min-width: 14rem;
  min-height: 4rem;

  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadows.primaryBackground};

  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const NavigationButton = (props: any) => {
  return <Button>{props.children}</Button>;
};

export default NavigationButton;
