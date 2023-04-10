import React from "react";
import Category from "../components/categories/Category";
import { Flex } from "../styled/Global.style";
import { IRestaurant } from "../interfaces/Restaurant.interface";

// GET request
// return multiple group
// group by type of food (summary)
// group by most likes
// group by time
// group by nearest distance
const response: Array<{
  name: string;
  displayConfig: {
    columns?: number;
    cardType?: "restaurant" | "brand" | "default";
  };
  pagination: {
    currentPage: number;
    nextPage: number;
    limit: number;
  };
  data: Array<IRestaurant>;
}> = [
  // SELECT where index = ourIndex and GROUP BY TYPE and JOIN it with TYPES table

  // SELECT where index = ourIndex
  {
    name: "Delivering to #index",
    displayConfig: {
      cardType: "restaurant",
    },
    pagination: {
      currentPage: 0,
      nextPage: 1,
      limit: 4,
    },
    data: [
      {
        id: "1",
        name: "Restoranlik",
        rating: 4.7,
        likes: 500,

        distance: 0.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
        type: "Italian",

        isOurChoice: true,
        tags: [
          { description: "Spend £10", color: "red" },
          { description: "Get 20% off", color: "black" },
        ],
      },
      {
        id: "2",
        name: "Restoranlik 2",
        rating: 4.7,
        likes: 500,

        distance: 1.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
        type: "Italian",
      },
      {
        id: "3",
        name: "Restoranlik 3",
        rating: 4.7,
        likes: 500,

        distance: 1.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
        type: "Italian",
      },
    ],
  },

  // Select where rating > 4.4
  {
    name: "Popular brands",
    displayConfig: {
      cardType: "brand",
    },
    pagination: {
      currentPage: 0,
      nextPage: 1,
      limit: 6,
    },
    data: [
      {
        id: "1",
        name: "Restoranlik",
        rating: 4.7,
        likes: 500,

        distance: 0.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
        type: "Italian",

        isOurChoice: true,
        tags: [
          { description: "Spend £10", color: "red" },
          { description: "Get 50% off", color: "black" },
        ],
      },
      {
        id: "2",
        name: "Restoranlik 2",
        rating: 4.7,
        likes: 500,

        distance: 1.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
        type: "Italian",
      },
      {
        id: "3",
        name: "Restoranlik 3",
        rating: 4.7,
        likes: 500,

        distance: 1.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
        type: "Italian",
      },
      {
        id: "4",
        name: "Restoranlik",
        rating: 4.7,
        likes: 500,

        distance: 0.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
        type: "Italian",

        isOurChoice: true,
        tags: [
          { description: "Spend £10", color: "red" },
          { description: "Get 50% off", color: "black" },
        ],
      },
      {
        id: "5",
        name: "Restoranlik",
        rating: 4.7,
        likes: 500,

        distance: 0.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
        type: "Italian",

        isOurChoice: true,
        tags: [
          { description: "Spend £10", color: "red" },
          { description: "Get 50% off", color: "black" },
        ],
      },
      {
        id: "6",
        name: "Restoranlik",
        rating: 4.7,
        likes: 500,

        distance: 0.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
        type: "Italian",

        isOurChoice: true,
        tags: [
          { description: "Spend £10", color: "red" },
          { description: "Get 50% off", color: "black" },
        ],
      },
    ],
  },
];

const Restaurants = () => {
  const categories = response.map((category) => {
    return (
      <Category
        name={category.name}
        data={category.data}
        displayConfig={category.displayConfig}
      />
    );
  });

  return (
    <Flex style={{ padding: "4rem" }} gap="4rem">
      <div style={{ minWidth: 325 }}>filters</div>
      <Flex column gap="5rem">
        <div>
          RESTAURANTS that deliver to this specific #INDEX GROUP them by #TYPE
          and JOIN with table TYPES which consist generic image of food type
        </div>
        {categories}
      </Flex>
    </Flex>
  );
};

export default Restaurants;
