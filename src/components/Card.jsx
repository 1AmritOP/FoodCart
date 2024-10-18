// import React from 'react'

import { useDispatch } from "react-redux"
import { addToCart } from "../features/Cartslice"
import { useState } from "react"


const Card = ({name,img,rating,desc,price,id}) => {
    const [status, setstatus] = useState("Add to cart")
    const dispatch=useDispatch()
  return (
    <>
        {/* <div className=" min-h-[60vh] my-4 px-10 "> */}

            <div className="card bg-slate-500 min-h-64 w-60  rounded-lg overflow-hidden">
                <div className="foodImg h-32 w-full overflow-hidden">
                    <img src={img} alt="img" className='hover:scale-110 ease-in duration-200 object-cover '  />
                </div>

                <div className="dets font-semibold w-full flex justify-between items-center px-2">
                    <h1 className=' font-bold'> {name} </h1>
                    <p> <span className=' text-green-500'>₹</span> {price} </p>
                </div>

                <div className="decs px-2 text-sm">
                    {desc.slice(0,50)} <span className="font-black">...</span>
                </div>

                <div className="other flex items-center justify-between px-2 mt-2">
                    <i className="fa-solid fa-star text-[#FFD43B]" >{rating}</i>
                    <button 
                     onClick={()=>{
                        dispatch(addToCart({
                            id,name,price,rating,img,qty :1
                        }))
                        setstatus("Done ✔️")
                        setTimeout(()=>{
                            setstatus("Add to cart")
                        },2000)
                     }}
                    //  onClickCapture={}
                     className=' menu rounded-lg px-2 bg-green-400'>{status}</button>
                </div>
            </div>
        {/* </div> */}
    </>
  )
}

export default Card