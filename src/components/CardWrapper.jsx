// import React from 'react'

import Card from "./Card";
import FoodData from "../Data/FoodData";

const CardWrapper = () => {
  return (
    <div className=" min-h-[60vh] my-4 px-10 flex gap-4 flex-wrap justify-between max-sm:justify-center">
      {FoodData.map((food) => {
        return (
          <Card
            key={food.id}
            img={food.img}
            name={food.name}
            price={food.price}
            desc={food.desc}
            // category={food.category}
            rating={food.rating}
            id={food.id}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;
