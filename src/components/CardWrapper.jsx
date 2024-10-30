// import React from 'react'

import Card from "./Card";
import FoodData from "../Data/FoodData";
import { useSelector } from "react-redux";

const CardWrapper = () => {
  const categoryData=useSelector((state)=> state.cart.category)
  const searchData=useSelector((state)=> (state.cart.searchData))
  
  return (
    <div className=" min-h-[60vh] my-4 px-10 flex gap-4 flex-wrap justify-between max-sm:justify-center">
      {FoodData.filter((elem)=>{
        if(searchData.length == 0){
          return elem

        }else{
          return elem.name.toLowerCase().includes(searchData.toLowerCase())
        }
      })
      .filter((elem)=> {
        if(categoryData == "All"){
          return elem
        }else if (elem.category == categoryData) {
          return elem
        }
      })
      .map((food) => {
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
