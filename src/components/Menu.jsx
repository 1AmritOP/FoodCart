// import React from 'react'

const Menu = () => {
  return (
    <>
      <div className=" px-10">
        <p className=" my-4">Find the best food</p>
        <div>
          <button className=" menu my-1 px-2 py-1 rounded-lg mr-2 bg-green-400">
            All
          </button>
          <button className=" menu my-1 px-2 py-1 rounded-lg mr-2 bg-slate-400">
            Lunch
          </button>
          <button className=" menu my-1 px-2 py-1 rounded-lg mr-2 bg-slate-400">
            Breakfast
          </button>
          <button className=" menu my-1 px-2 py-1 rounded-lg mr-2 bg-slate-400">
            Dinner
          </button>
          <button className=" menu my-1 px-2 py-1 rounded-lg mr-2 bg-slate-400">
            Snacks
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
