import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: []
}

export const Cartslice=createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            const existingItem=state.value.find((item)=>item.id==action.payload.id)
            if (existingItem) {
                state.value =state.value.map((item)=>item.id==action.payload.id ? {...item,qty: item.qty+1} : item)
            }
            else{
                state.value.push(action.payload)
            }
        },
        removeFromCart: (state,action) =>{
            state.value=state.value.filter((item)=> item.id !== action.payload.id )
        },
        increamentItem: (state,action)=>{
            state.value=state.value.map((item)=> item.id == action.payload.id ?{...item,qty : item.qty+1}: item)
        },
        decreamentItem: (state,action)=>{
            state.value=state.value.map((item)=> item.id==action.payload.id ? {...item,qty:item.qty-1}:item)
        }
    }
})

export const {addToCart,removeFromCart,increamentItem,decreamentItem} =Cartslice.actions

export default Cartslice.reducer