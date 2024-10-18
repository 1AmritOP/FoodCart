// import React from 'react'

const Navbar = () => {
  const date = new Date();
  return (
    <>
      <nav className=" flex justify-between items-center px-10 py-4 gap-4
      max-sm:flex-col ">
        <div className="left">
          <p className=" text-slate-400">{date.toLocaleDateString()}</p>
          <h1 className=" text-2xl">Food Court</h1>
        </div>
        <div className="right">
          <input
            type="text"
            className=" text-green-500 px-4 py-2 rounded-xl outline-none"
            placeholder="search for food"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
