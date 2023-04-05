import React from "react";
import styled from "styled-components";

interface PartnershipCardProps {
  title: string;
  description: string;
}

const Card = styled.div`
  display: flex;
  min-height: 30rem;
  flex-basis: 45%;
  flex-direction: column;

  gap: 2rem;
  padding: 2rem;

  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadows.primaryBackground};
  background-color: ${(props) => props.theme.colors.primary};

  cursor: pointer;
  transition: all 0.3s;

  h1 {
    margin: 0;
  }

  p {
    font-size: 2rem;
    line-height: 1.4;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
  }
`;

const PartnershipCard = ({ title, description }: PartnershipCardProps) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{description}</p>
    </Card>
  );
};

export default PartnershipCard;
