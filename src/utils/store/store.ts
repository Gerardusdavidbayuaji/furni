import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSice";

const store = configureStore({
  reducer: {
    orderState: orderReducer,
    cartState: cartReducer,
    userState: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
