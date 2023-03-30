import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;

  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadows.whiteBackground};

  min-height: 40rem;
`;

const CardImgHolder = styled.div`
  flex-basis: 60%;
  background-color: ${(props) => props.theme.colors.primary};
`;

const CardData = styled.div`
  flex-basis: min-content;
  flex-grow: 1;
  padding: 1rem 4rem;

  p {
    font-size: 2rem;
    line-height: 1.4;
  }
`;

const ExplainerCard = () => {
  return (
    <Card>
      <CardImgHolder>threejs or map animation</CardImgHolder>
      <CardData>
        <h1>Track orders to your door.</h1>
        <p>
          Get your favourite food delivered in a flash. You’ll see when your
          rider’s picked up your order, and be able to follow them along the
          way. You’ll get a notification when they’re nearby, too.
        </p>
      </CardData>
    </Card>
  );
};

export default ExplainerCard;
