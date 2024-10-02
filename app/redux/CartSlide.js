import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem && action.payload.quantity > 0) {
        existingItem.quantity = action.payload.quantity;
      }
    },
  },
});

export const CartSlideReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
