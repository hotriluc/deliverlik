import React from "react";
import styled from "styled-components";
import { Flex } from "../../styled/Global.style";
import { IRestaurant } from "../../interfaces/Restaurant.interface";

const Card = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadows.whiteBackground};
  overflow: hidden;

  display: flex;
`;

const CardImgHolder = styled.div`
  flex-basis: 35%;
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
`;

const CardData = styled.div`
  padding: 2rem;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.28rem;
  }

  p:not(:first-child) {
    color: ${(props) => props.theme.colors.accentOne};
  }
`;

const CardBulletInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

const Like = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-end;
  align-items: center;
`;

interface BrandCardProps {
  data: IRestaurant;
}

const BrandCard = ({ data }: BrandCardProps) => {
  const likes = data.likes >= 500 ? "500+" : data.likes;

  return (
    <Card>
      <CardImgHolder />
      <CardData>
        <strong>{data.name}</strong>
        <CardBulletInfo>
          <p>⭐️ {data.rating}</p>
          <p>{data.deliveryTime} min</p>
        </CardBulletInfo>
        <p>£{data.deliveryFee} delivery fee</p>
        <Like>
          <strong>({likes})</strong>
          <button>❤️</button>
        </Like>
      </CardData>
    </Card>
  );
};

export default BrandCard;
