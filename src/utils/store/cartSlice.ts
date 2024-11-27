import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../apis/products";

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.numItemsInCart = 0;
      state.cartTotal = 0;
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      state.numItemsInCart += 1;
      state.cartTotal +=
        parseFloat(action.payload.price) * action.payload.quantity;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    editIem: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        state.cartTotal -= parseFloat(item.price) * item.quantity;
        item.quantity = action.payload.quantity;
        state.cartTotal += parseFloat(item.price) * item.quantity;
      }
    },
  },
});

export const { clearCart, addItem, removeItem, editIem } = cartSlice.actions;

export default cartSlice.reducer;
