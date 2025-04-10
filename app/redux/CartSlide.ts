import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// import { cookies } from 'next/headers';
// import { cookies } from 'next/headers';
// cookies().get('cart')
//   ? { ...JSON.parse(cookies().get('cart')) }
//   :
// const initialState = {
//   loading: true,

//   cartItems: [],
// };

export interface CartItem {
  [x: string]: any;
  id: number;
  name: string;
  price: number;
  image: string[];
  quantity: number;
  stock: number;
}
interface CartState {
  items: CartItem[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
    //   const existingItem = state.items.find(
    //     (item) => item.id === action.payload.id,
    //   );
    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     state.items.push({ ...action.payload, quantity: 1 });
    //   }
    // },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },

    // removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
    //   const existingItem = state.items.findIndex(
    //     (item) => item.id === action.payload.id,
    //   );

    //   if (existingItem) {
    //     if (existingItem.quantity >= 1) {
    //       existingItem.quantity -= 1;
    //     } else {
    //       state.items = state.items.filter(
    //         (item) => item.id != action.payload.id,
    //       );
    //     }
    //   }
    // },

    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        if (state.items[index]!.quantity > 1) {
          state.items[index]!.quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },

    deleteFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeFromCart, deleteFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
