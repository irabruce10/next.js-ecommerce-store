import { configureStore } from '@reduxjs/toolkit';
import { CartSlideReducer } from './CartSlide.js';

const reducer = {
  cart: CartSlideReducer,
};

export const store = configureStore({
  reducer,
});
