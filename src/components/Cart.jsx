import  { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const [active, setActive] = useState(false);
  const cartlist = useSelector((state) => state.cart.value);
  const totalQty=cartlist.reduce((totalQty,item)=> totalQty+ item.qty,0);
  const totalPrice=cartlist.reduce((total,item)=> total+ item.qty * item.price ,0)
  // console.log(cartlist);

  return (
    <>
      {active ? (
        <div className="mainCart px-2 h-screen flex flex-col max-sm:w-[20rem] w-[28rem] bg-slate-900 fixed top-0 right-0 overflow-y-auto">
          <button
            onClick={() => {
              setActive(!active);
            }}
          >
            <i className="fa-solid fa-xmark fixed top-4 right-4 text-2xl"></i>
          </button>
          <h1 className=" text-2xl font-bold ">Cart :</h1>
          {cartlist.length > 0 ? (
            cartlist.map((elem) => {
              return (
                <CartItem
                  key={elem.id}
                  img={elem.img}
                  price={elem.price}
                  name={elem.name}
                  qty={elem.qty}
                  id={elem.id}
                />
              );
            })
          ) : (
            <h1 className=" mt-10 font-bold text-2xl text-center">
              Your Cart is Empty
            </h1>
          )}

          <div className=" h-28 w-full mt-4 ">
            <h1 className=" text-lg font-bold">Total Qty : {totalQty} </h1>
            <h1 className=" text-lg font-bold">Total Price : {totalPrice} </h1>
            <hr className=" -mx-2" />
            <Link to={"/success"} >
              <button className="my-1 w-60 h-12 bg-green-400 mx-24 max-sm:mx-8 rounded-xl">
                Check-Out
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setActive(!active);
          }}
          className=" cartIcon fixed bottom-4 right-2 text-3xl "
        >
          <i className="fa-solid fa-cart-shopping "></i>
        </button>
      )}
    </>
  );
};

export default Cart;
