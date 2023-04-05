import React from "react";
import { IRestaurant } from "../../interfaces/Restaurant.interface";
import styled from "styled-components";
import { Flex } from "../../styled/Global.style";
import RestaurantCard from "../cards/RestaurantCard";

interface CategoryProps {
  name: string;
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

const Category = ({ name, data }: CategoryProps) => {
  return (
    <CategoryWrapper>
      <h2> {name || "noname"}</h2>

      <Carousel>
        {data.map((restaurant, index) => (
          <CarouselItem key={name + "_" + index}>
            <RestaurantCard data={restaurant} />
          </CarouselItem>
        ))}
      </Carousel>
    </CategoryWrapper>
  );
};

export default Category;
