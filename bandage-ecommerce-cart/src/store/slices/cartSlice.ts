import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../services/productsApi";

export interface CartItem extends Product {
  quantity : number
}

interface CartState {
  items : CartItem[]
  totalQuantity : number
  totalAmount : number
}

const initialState : CartState = {
  items : [],
  totalQuantity : 0,
  totalAmount : 0
}

const cartSlice = createSlice({
  name : "cart",
  initialState,
  reducers : {
    addToCart : (state, action : PayloadAction<Product>) => {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          ...product,
          quantity : 1
        })
      }

      state.totalQuantity += 1
      state.totalAmount += product.price * (1 - product.discountPercentage / 100)
    },
    removeFromCart : (state, action : PayloadAction<number>) => {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity
        state.totalAmount -= existingItem.price * existingItem.quantity * (1 - existingItem.discountPercentage / 100)
        state.items = state.items.filter((item) => 
        item.id !== id)
      }
    },
    incrementQuantity : (state, action :
    PayloadAction<number>) => {
      const id = action.payload
      const item = state.items.find((item) => item.id === id)

      if (item) {
        item.quantity += 1
        state.totalQuantity += 1
        state.totalAmount += item.price * (1 - item.discountPercentage / 100)
      }
    },
    decrementQuantity : (state, action : PayloadAction<number>) => {
      const id = action.payload
      const item = state.items.find((item) => item.id === id)

      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalQuantity -= 1
        state.totalAmount -= item.price * (1 - item.discountPercentage / 100)
      }  else if (item && item.quantity === 1) {
        state.totalQuantity -= 1
        state.totalAmount -= item.price * (1 - item.discountPercentage / 100)
        state.items = state.items.filter((item) => item.id !== id)
      }
    },
    clearCart : (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer

