import React from "react";
import { IRestaurant } from "../../interfaces/Restaurant.interface";
import styled from "styled-components";
import { Flex } from "../../styled/Global.style";

const Card = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadows.whiteBackground};
  overflow: hidden;
`;

const CardImgHolder = styled.div`
  position: relative;
  min-height: 15.6rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Time = styled.div`
  position: absolute;
  bottom: -2rem;
  right: 2rem;
  padding: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadows.whiteBackground};
  background-color: ${(props) => props.theme.colors.background};
`;

const Like = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const TagsList = styled.ul`
  position: absolute;
  top: 2rem;
  left: 2rem;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    font-size: 1.28rem;
    font-weight: bold;

    background-color: ${(props) => props.theme.colors.background};
    padding: 0.5rem;

    border-radius: 2px;
    box-shadow: ${(props) => props.theme.boxShadows.whiteBackground};
    background-color: ${(props) => props.theme.colors.background};
  }
`;

const CardData = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.28rem;
  }
`;

const CardBulletInfo = styled.div`
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme.colors.accentOne};
`;

interface RestaurantCardProps {
  data: IRestaurant;
}

const RestaurantCard = ({ data }: RestaurantCardProps) => {
  const ratingDescription = data.rating > 4.4 ? "Excellent" : "Good";
  const likes = data.likes >= 500 ? "500+" : data.likes;

  return (
    <Card>
      <CardImgHolder>
        <img src="" alt="" />

        {data.tags && (
          <TagsList>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag.description}</li>
            ))}
          </TagsList>
        )}

        <Like>
          <button>❤️</button>
          <strong>({likes})</strong>
        </Like>
        <Time>
          <strong>{data.deliveryTime}</strong> min
        </Time>
      </CardImgHolder>
      <CardData>
        <strong>{data.name}</strong>
        <p>
          ⭐️ {data.rating} {ratingDescription} ({likes})
        </p>
        <CardBulletInfo>
          <p>{data.distance} miles away</p>
          <p>£{data.deliveryFee} delivery fee</p>
        </CardBulletInfo>
      </CardData>
    </Card>
  );
};

export default RestaurantCard;
