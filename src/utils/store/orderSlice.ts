import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderItem } from "../apis/products";

interface OrderState {
  orders: IOrderItem[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<IOrderItem>) {
      state.orders.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
