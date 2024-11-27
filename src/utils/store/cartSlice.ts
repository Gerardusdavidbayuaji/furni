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

const getCartFromLocalStorage = (): CartState => {
  return JSON.parse(
    localStorage.getItem("cart") || JSON.stringify(defaultState)
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { price, quantity, cartID } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === cartID);
      if (item) {
        item.quantity += quantity;
      } else {
        state.cartItems.push(action.payload);
      }

      state.numItemsInCart += quantity;
      state.cartTotal += parseFloat(price) * quantity;

      cartSlice.caseReducers.calculateTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      cartSlice.caseReducers.calculateTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
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

      cartSlice.caseReducers.calculateTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.numItemsInCart = 0;
      state.cartTotal = 0;
      state.tax = 0;
      state.orderTotal = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const { clearCart, addItem, removeItem, editIem } = cartSlice.actions;

export default cartSlice.reducer;
