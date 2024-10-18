import { configureStore } from "@reduxjs/toolkit"
import  Cartslice  from "../features/Cartslice"

export  const store=configureStore({
    reducer:{
        cart : Cartslice
    },
})