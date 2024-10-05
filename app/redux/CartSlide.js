import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  showSidebar: false,
  cartItems: [],
};

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem?.id === action.payload.id) {
        // existingItem.quantity += action.payload.quantity;
        state.cartItems = state.cartItems.map((item) =>
          item.id === existingItem.id ? action.payload : item,
        );
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }

      state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        ),
      );
      state.totalPrice = addDecimals(Number(state.itemsPrice));
      // Cookies.set('cart', JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      state.cartItems.filter((item) => item.id !== action.payload);
      state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        ),
      );
      state.totalPrice = addDecimals(Number(state.itemsPrice));
    },
    // updateQuantity: (state, action) => {
    //   const existingItem = state.find((item) => item.id === action.payload.id);
    //   if (existingItem && action.payload.quantity > 0) {
    //     existingItem.quantity = action.payload.quantity;
    //   }
    // },

    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const CartSlideReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, updateQuantity, hideLoading } =
  cartSlice.actions;
