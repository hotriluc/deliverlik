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
  currentPage: number;
  nextPage: 1;
  data: Array<IRestaurant>;
}> = [
  {
    name: "Delivering to #index",
    currentPage: 0,
    nextPage: 1,
    data: [
      {
        id: "1",
        name: "Restoranlik",
        rating: 4.7,
        likes: 500,

        distance: 0.5,
        deliveryFee: 0.99,
        deliveryTime: 35,

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
      },
      {
        id: "3",
        name: "Restoranlik 3",
        rating: 4.7,
        likes: 500,

        distance: 1.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
      },
    ],
  },

  {
    name: "Popular brands",
    currentPage: 0,
    nextPage: 1,
    data: [
      {
        id: "1",
        name: "Restoranlik",
        rating: 4.7,
        likes: 500,

        distance: 0.5,
        deliveryFee: 0.99,
        deliveryTime: 35,

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
      },
      {
        id: "3",
        name: "Restoranlik 3",
        rating: 4.7,
        likes: 500,

        distance: 1.5,
        deliveryFee: 0.99,
        deliveryTime: 35,
      },
    ],
  },
];

const Restaurants = () => {
  return (
    <Flex style={{ padding: "4rem" }} gap="4rem">
      <div style={{ minWidth: 325 }}>filters</div>

      <Flex column gap="5rem">
        {response.map((category) => (
          <Category
            key={category.name}
            name={category.name}
            data={category.data}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Restaurants;
