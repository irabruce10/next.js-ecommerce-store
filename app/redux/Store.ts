import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlide';

const reducer = {
  cart: CartReducer,
};

export const store = configureStore({
  reducer,
});

export type RooterState = ReturnType<typeof store.getState>;
export type addDispatch = typeof store.dispatch;
export default store;
