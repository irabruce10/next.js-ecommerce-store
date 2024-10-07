import { createSlice } from '@reduxjs/toolkit';
// import { cookies } from 'next/headers';
// cookies().get('cart')
//   ? { ...JSON.parse(cookies().get('cart')) }
//   :
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
      //  cookies().set('cart', JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload,
      );
      state.cartItems.splice(index, 1);

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

export const getCart = (state) => state.cartItems;
