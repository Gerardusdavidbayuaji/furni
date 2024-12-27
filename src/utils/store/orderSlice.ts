import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../apis/products";

interface OrderState {
  orders: IOrder[];
}

const getOrdersFromLocalStorage = (): IOrder[] => {
  const orders = localStorage.getItem("orders");
  return orders ? JSON.parse(orders) : [];
};

const initialState: OrderState = {
  orders: getOrdersFromLocalStorage(),
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<IOrder>) {
      state.orders.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
