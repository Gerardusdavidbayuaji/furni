import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
    orderState: orderReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
