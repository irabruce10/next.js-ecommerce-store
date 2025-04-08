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
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id != action.payload.id,
          );
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// const addDecimals = (num) => {
//   return (Math.round(num * 100) / 100).toFixed(2);
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.cartItems.find(
//         (item) => item.id === action.payload.id,
//       );
//       if (existingItem?.id === action.payload.id) {
//         // existingItem.quantity += action.payload.quantity;
//         state.cartItems = state.cartItems.map((item) =>
//           item.id === existingItem.id ? action.payload : item,
//         );
//       } else {
//         state.cartItems = [...state.cartItems, action.payload];
//       }

//       state.itemsPrice = addDecimals(
//         state.cartItems.reduce(
//           (acc, item) => acc + item.price * item.quantity,
//           0,
//         ),
//       );
//       state.totalPrice = addDecimals(Number(state.itemsPrice));
//       // cookies.set('carts', JSON.stringify(state));
//     },

//     removeFromCart: (state, action) => {
//       const index = state.cartItems.findIndex(
//         (item) => item.id === action.payload,
//       );
//       state.cartItems.splice(index, 1);

//       state.itemsPrice = addDecimals(
//         state.cartItems.reduce(
//           (acc, item) => acc + item.price * item.quantity,
//           0,
//         ),
//       );
//       state.totalPrice = addDecimals(Number(state.itemsPrice));
//     },
//     // updateQuantity: (state, action) => {
//     //   const existingItem = state.find((item) => item.id === action.payload.id);
//     //   if (existingItem && action.payload.quantity > 0) {
//     //     existingItem.quantity = action.payload.quantity;
//     //   }
//     // },

//     hideLoading: (state) => {
//       state.loading = false;
//     },
//   },
// });

// export const CartSlideReducer = cartSlice.reducer;

// export const { addToCart, removeFromCart, updateQuantity, hideLoading } =
//   cartSlice.actions;

// export const getCart = (state) => state.cartItems;
