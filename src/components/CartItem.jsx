import React from 'react'
import { useDispatch } from 'react-redux'
import {decreamentItem, increamentItem, removeFromCart} from "../features/Cartslice"

const CartItem = ({img,name,price,qty,id}) => {
  const dispatch=useDispatch()
  return (
    <>
        {/* <div className="mainCart px-2 transition-all duration-200 ease-in h-screen w-80 bg-slate-900 fixed top-0 right-0 "> */}


          <div className="item mt-4 w-full h-20 p-2 flex justify-between">
            <div className="img">
              <img src={img} alt="img" className=" rounded-xl h-16 w-20 object-cover" />
            </div>
            <div className="dets mx-2">
              <h1> {name} </h1>
              <p className=" font-bold text-green-400">₹ {price}</p>
            </div>
            <div className="other flex flex-col items-center">
              <button onClick={()=>{
                dispatch(removeFromCart({id}))
              }} className="delete">
                <i className="fa-solid fa-trash"></i>
              </button>
              <div className="qty m-1">
                <button onClick={()=>{
                  dispatch(increamentItem({id}))
                }}
                 className="px-2 rounded-lg bg-white text-black">+</button>
                 <span className=" mx-1 ">{qty}</span>
                <button onClick={()=>{
                  qty>1 ? dispatch(decreamentItem({id})): dispatch(removeFromCart({id}))
                }}
                 className="px-2 rounded-lg bg-white text-black">-</button>
              </div>
            </div>
          </div>
        {/* </div> */}
    </>
  )
}

export default CartItem