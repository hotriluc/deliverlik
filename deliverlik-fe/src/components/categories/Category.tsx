import React from "react";
import { IRestaurant } from "../../interfaces/Restaurant.interface";
import styled, { css } from "styled-components";
import RestaurantCard from "../cards/RestaurantCard";
import BrandCard from "../cards/BrandCard";

interface CategoryProps {
  name: string;
  displayConfig: {
    columns?: number;
    cardType?: "brand" | "restaurant" | "default";
  };
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
    /**Calculate item width base on passed columns */
    flex-basis: calc(
      100% / ${(props) => props.columns || 3} - 2rem +
        ${(props) => 2 / (props.columns || 3)}rem
    );
  }
`;

/**
 * Return category carousel of items depends on providing params
 * @name category name
 * @displayConfig consists the layout and card type to render
 * @data specific restaurant/brand/type data
 */
const Category = ({ name, displayConfig, data }: CategoryProps) => {
  const columns = displayConfig.columns || 3;
  const cardType = displayConfig.cardType || "default";

  return (
    <CategoryWrapper>
      <h2> {name || "noname"}</h2>

      {/* Render carousel and cards depends on displayConfig*/}
      <Carousel columns={columns}>
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
