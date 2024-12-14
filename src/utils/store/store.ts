import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSice";

const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
