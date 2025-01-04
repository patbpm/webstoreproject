import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = { 
    items:[],
    total:0,
    shipping:'standard'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action)=>{
        const existingItem = state.items.find(item => item.id === action.payload.id)

        if(existingItem){
            existingItem.quantity += 1
        }else{
            state.items.push({...action.payload, quantity:1})
        }
    },

    removeFromCart: (state, action)=> {
        state.items = state.items.filter(item => item.id !== action.payload)
        state.total = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    },

    updateQuantity: (state, action)=>{
        const {id, quantity} = action.payload
        const item = state.items.find(item => item.id === id);
        if(item){
            item.quantity = quantity;
            state.total = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        }
    },

    setShipping: (state, action)=>{
        state.shipping = action.payload
    }


    
  },
})

export const { addToCart, removeFromCart, updateQuantity, setShipping } = cartSlice.actions
export default cartSlice.reducer