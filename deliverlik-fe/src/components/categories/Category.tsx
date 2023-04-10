import React from "react";
import { IRestaurant } from "../../interfaces/Restaurant.interface";
import styled from "styled-components";
import RestaurantCard from "../cards/RestaurantCard";
import BrandCard from "../cards/BrandCard";

interface CategoryProps {
  name: string;
  cardType?: "brand" | "restaurant" | "type";
  data: Array<IRestaurant>;
}

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Carousel = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const CarouselItem = styled.li``;

const Category = ({ name, cardType, data }: CategoryProps) => {
  return (
    <CategoryWrapper>
      <h2> {name || "noname"}</h2>

      <Carousel>
        {data.map((el, index) => (
          <CarouselItem key={name + "_" + index}>
            {cardType === "restaurant" && <RestaurantCard data={el} />}
            {cardType === "brand" && <BrandCard data={el} />}
          </CarouselItem>
        ))}
      </Carousel>
    </CategoryWrapper>
  );
};

export default Category;
