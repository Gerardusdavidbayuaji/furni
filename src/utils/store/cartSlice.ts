import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, CartState } from "../apis/products";

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
    addItem: (state, action: PayloadAction<ICartItem>) => {
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
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        state.numItemsInCart -= item.quantity;
        state.cartTotal -= parseFloat(item.price) * item.quantity;

        cartSlice.caseReducers.calculateTotals(state);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    editItem: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        const oldQuantity = item.quantity;
        item.quantity = quantity;

        state.numItemsInCart += quantity - oldQuantity;
        state.cartTotal += (quantity - oldQuantity) * parseFloat(item.price);

        cartSlice.caseReducers.calculateTotals(state);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    toggleItemCheck: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.checked = !item.checked;
        cartSlice.caseReducers.calculateTotals(state);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    toggleAllCheck: (state, action: PayloadAction<boolean>) => {
      state.cartItems.forEach((item) => {
        item.checked = action.payload;
        cartSlice.caseReducers.calculateTotals(state);
        localStorage.setItem("cart", JSON.stringify(state));
      });
    },

    calculateTotals: (state) => {
      const checkedItems = state.cartItems.filter((item) => item.checked);

      if (checkedItems.length === 0) {
        state.cartTotal = 0;
        state.tax = 0;
        state.shipping = 0;
        state.orderTotal = 0;
      } else {
        state.cartTotal = checkedItems.reduce(
          (total, item) => total + parseFloat(item.price) * item.quantity,
          0
        );
        state.tax = 0.1 * state.cartTotal;
        state.shipping = 500;
        state.orderTotal = state.cartTotal + state.shipping + state.tax;
      }

      localStorage.setItem("cart", JSON.stringify(state));
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

export const {
  clearCart,
  addItem,
  removeItem,
  editItem,
  toggleItemCheck,
  toggleAllCheck,
} = cartSlice.actions;
export default cartSlice.reducer;
