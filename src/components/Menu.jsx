// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../features/Cartslice";

const Menu = () => {
  const dispatch = useDispatch();
  const categoryData=useSelector((state)=> state.cart.category);

  return (
    <>
      <div className=" px-10">
        <p className=" my-4">Find the best food</p>
        <div>
          <button
            onClick={() => {
              dispatch(selectCategory("All"));
            }}
            className={categoryData == "All" ? "activeMenu": "menu" }
          >
            All
          </button>

          <button
            onClick={() => {
              dispatch(selectCategory("Lunch"));
            }}
            className={categoryData == "Lunch" ? "activeMenu": "menu" }
            
          >
            Lunch
          </button>
          <button
            onClick={() => {
              dispatch(selectCategory("Breakfast"));
            }}
            className={categoryData == "Breakfast" ? "activeMenu": "menu" }
          >
            Breakfast
          </button>
          <button
            onClick={() => {
              dispatch(selectCategory("Dinner"));
            }}
            className={categoryData == "Dinner" ? "activeMenu": "menu" }
          >
            Dinner
          </button>
          <button
            onClick={() => {
              dispatch(selectCategory("Snacks"));
            }}
            className={categoryData == "Snacks" ? "activeMenu": "menu" }
          >
            Snacks
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
