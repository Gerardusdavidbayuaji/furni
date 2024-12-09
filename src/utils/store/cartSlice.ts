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

      const productItem = state.cartItems.find(
        (item) => item.cartID === cartID
      );

      if (productItem) {
        productItem.quantity += quantity;
      } else {
        state.cartItems.push(action.payload);
      }

      state.numItemsInCart += quantity;
      state.cartTotal += parseFloat(price) * quantity;

      cartSlice.caseReducers.calculateTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const productItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (productItem) {
        state.cartItems = state.cartItems.filter(
          (productItem) => productItem.id !== action.payload
        );

        state.numItemsInCart -= productItem.quantity;
        state.cartTotal -= parseFloat(productItem.price) * productItem.quantity;

        cartSlice.caseReducers.calculateTotals(state);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    editItem: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const productItem = state.cartItems.find((item) => item.id === id);

      if (productItem) {
        const previousQuantity = productItem.quantity;
        productItem.quantity = quantity;

        state.numItemsInCart += quantity - previousQuantity;
        state.cartTotal +=
          (quantity - previousQuantity) * parseFloat(productItem.price);

        cartSlice.caseReducers.calculateTotals(state);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    toggleItemCheck: (state, action: PayloadAction<number>) => {
      const productItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (productItem) {
        productItem.checked = !productItem.checked;
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
