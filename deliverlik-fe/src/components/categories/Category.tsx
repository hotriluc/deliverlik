import React from "react";
import { IRestaurant } from "../../interfaces/Restaurant.interface";
import styled, { css } from "styled-components";
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

const Carousel = styled.ul<{
  gap?: number;
  columns?: number;
}>`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  li {
    flex-basis: calc(
      100% / ${(props) => props.columns || 3} - 2rem +
        ${(props) => 2 / (props.columns || 3)}rem
    );
  }
`;

const Category = ({ name, cardType, data }: CategoryProps) => {
  return (
    <CategoryWrapper>
      <h2> {name || "noname"}</h2>

      <Carousel columns={3}>
        {data.map((el, index) => (
          <li key={name + "_" + index}>
            {cardType === "restaurant" && <RestaurantCard data={el} />}
            {cardType === "brand" && <BrandCard data={el} />}
          </li>
        ))}
      </Carousel>
    </CategoryWrapper>
  );
};

export default Category;
