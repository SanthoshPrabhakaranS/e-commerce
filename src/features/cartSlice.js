import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const cartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartItemIndex !== -1) {
        state.cart[cartItemIndex].quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
        const foundItem = state.cart.filter((item) => item.id !== action.payload.id)
        state.cart = foundItem
    }
  },
});

export const cartReducer = cartSlice.reducer;
export const { addProduct, removeProduct } = cartSlice.actions;
